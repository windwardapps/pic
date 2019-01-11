from django.conf.urls import include, url
from .views import index, LoginView, SignupView

urlpatterns = [
    url(r'^$', index),
    url(r'^login/', LoginView.as_view()),
    url(r'^signup/', SignupView.as_view()),
]
