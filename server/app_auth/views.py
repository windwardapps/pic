from django.contrib.auth import authenticate, login
from django.middleware.csrf import get_token
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView


def login_response(request, user):
    token = get_token(request)
    return Response({'success': True, 'user': user.data(), 'token': token})


class LoginView(APIView):
    permission_classes = (permissions.AllowAny,)

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
