from django.conf.urls import url, include
from rest_framework_nested import routers
from .views import BrandingView, StudentViewSet, ShootViewSet, ImageViewSet, ShareViewSet

router = routers.SimpleRouter()
router.register(r'shoots', ShootViewSet, basename='shoot')
router.register(r'students', ShootViewSet, basename='student')

shoot_router = routers.NestedSimpleRouter(router, r'shoots', lookup='shoot')
shoot_router.register(r'students', StudentViewSet, base_name='shoot-students')

student_router = routers.NestedSimpleRouter(
    shoot_router, r'students', lookup='student')
student_router.register(r'images', ImageViewSet, base_name='student-images')
student_router.register(r'share', ShareViewSet, base_name='student-share')

urlpatterns = [
    url(r'^api/user/branding/$', BrandingView.as_view()),
    url(r'^api/', include(router.urls)),
    url(r'^api/', include(shoot_router.urls)),
    url(r'^api/', include(student_router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
