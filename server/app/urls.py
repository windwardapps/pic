from django.conf.urls import url, include
from rest_framework_nested import routers
from .views import LoginView, UserViewSet, GroupViewSet, StudentViewSet, ShootViewSet, ImageViewSet

router = routers.SimpleRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)
router.register(r'shoots', ShootViewSet, basename='shoot')
router.register(r'students', ShootViewSet, basename='student')

shoot_router = routers.NestedSimpleRouter(router, r'shoots', lookup='shoot')
shoot_router.register(r'students', StudentViewSet, base_name='shoot-students')


# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^api/login/$', LoginView.as_view()),
    url(r'^api/', include(router.urls)),
    url(r'^api/', include(shoot_router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
