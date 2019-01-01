from datetime import datetime, timedelta
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import Group
from django.http import JsonResponse, Http404
from django.middleware.csrf import get_token
from django.views.generic import View
from rest_framework import viewsets, permissions, mixins
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import GenericViewSet
from .forms import BrandForm
from .models import User, Shoot, Student, Image, Brand, Share
from .serializers import UserSerializer, GroupSerializer, StudentSerializer, ShootSerializer, ImageSerializer, ShareSerializer


def login_response(request, user):
    token = get_token(request)
    return Response({'success': True, 'user': user.data(), 'token': token})


class LoginView(APIView):
    def get(self, request):
        if not request.user.is_authenticated:
            return Response({'success': False})

        return login_response(request, request.user)

    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        user = authenticate(request, username=email, password=password)
        if user is None:
            return Response({'success': False})

        login(request, user)
        return login_response(request, user)


class BrandingView(View):

    def get(self, request):
        try:
            brand = Brand.objects.get(user=request.user)
        except Brand.DoesNotExist:
            return JsonResponse({})

        return JsonResponse(brand.data())

    def post(self, request):
        brand, created = Brand.objects.get_or_create(user=request.user)
        form = BrandForm(request.POST, request.FILES, instance=brand)
        if form.is_valid():
            # file is saved
            form.save()

        return JsonResponse(brand.data())


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class StudentViewSet(viewsets.ModelViewSet):
    serializer_class = StudentSerializer

    def get_queryset(self):
        return Student.objects.filter(shoot_id=self.kwargs['shoot_pk'])

    def perform_create(self, serializer):
        serializer.save(shoot_id=self.kwargs['shoot_pk'])


class ShootViewSet(viewsets.ModelViewSet):
    serializer_class = ShootSerializer

    def get_queryset(self):
        return Shoot.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ImageViewSet(viewsets.ModelViewSet):
    serializer_class = ImageSerializer

    def get_queryset(self):
        return Image.objects.filter(student_id=self.kwargs['student_pk'])

    def perform_create(self, serializer):
        serializer.save(student_id=self.kwargs['student_pk'])


class ShareViewSet(mixins.CreateModelMixin,
                   mixins.RetrieveModelMixin,
                   mixins.UpdateModelMixin,
                   mixins.DestroyModelMixin,
                   GenericViewSet):

    serializer_class = ShareSerializer

    def get_object(self):
        try:
            share = Share.objects.get(student_id=self.kwargs['student_pk'])
        except Share.DoesNotExist:
            nextWeek = datetime.today() + timedelta(weeks=1)
            share = Share.objects.create(
                student_id=self.kwargs['student_pk'], url='abc.com/test',
                expiresAt=nextWeek
            )

        return share

    def get(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)
