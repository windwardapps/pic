from django.contrib.auth import authenticate, login
from django.middleware.csrf import get_token
from rest_framework.response import Response
from rest_framework.views import APIView


class SessionView(APIView):
    def get(self, request):
        user = request.user
        if not user.is_authenticated:
            return Response({'success': False})

        return Response({'success': True, 'user': user.data(), 'token': get_token(request)})
