from django.urls import path
from django.conf.urls import url
from .views import index

urlpatterns = [
    path(r'<str:shareUrl>/', index),
]
