from django.conf.urls import include, url
from .views import SessionView

urlpatterns = [
    url(r'session/$', SessionView.as_view()),
]
