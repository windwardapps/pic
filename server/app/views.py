from django.contrib.auth import authenticate, login
from django.contrib.auth.models import Group
from django.http import JsonResponse
from django.middleware.csrf import get_token
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User, Shoot, Student, Image
from .serializers import UserSerializer, GroupSerializer, StudentSerializer, ShootSerializer, ImageSerializer


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
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        shoot_pk = self.kwargs['shoot_pk']
        return Student.objects.filter(shoot_id=shoot_pk)

    def perform_create(self, serializer):
        shoot_pk = self.kwargs['shoot_pk']
        serializer.save(shoot_id=shoot_pk)


class ShootViewSet(viewsets.ModelViewSet):
    serializer_class = ShootSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        return Shoot.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class ImageViewSet(viewsets.ModelViewSet):
    serializer_class = ImageSerializer

    def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        print('***** kwargs: ', self.kwargs)
        student_pk = self.kwargs['student_pk']
        return Image.objects.filter(student_id=student_pk)
