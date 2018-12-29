from django.contrib.auth import authenticate, login
from django.contrib.auth.models import Group
from django.http import JsonResponse
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import User, Shoot, Student, Image
from .serializers import UserSerializer, GroupSerializer, StudentSerializer, ShootSerializer, ImageSerializer


class LoginView(APIView):
    def get(self, request):
        if not request.user.is_authenticated:
            return Response({'success': False})

        return Response({'success': True, 'user': request.user})

    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        user = authenticate(request, username=email, password=password)
        if user is None:
            print('***** user is None')
            return Response({'success': False})

        print('***** user: ', user)
        login(request, user)
        print('***** logged in')
        return Response({'success': True, 'user': request.user})


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
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


class ShootViewSet(viewsets.ModelViewSet):
    queryset = Shoot.objects.all()
    serializer_class = ShootSerializer


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImageSerializer
