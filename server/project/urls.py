from django.conf import settings
from django.conf.urls import url
from django.contrib import admin
from django.urls import include, path
from django.conf.urls.static import static

from website.views import index

urlpatterns = [
    path('', include('app.urls')),
    path('', include('app_auth.urls')),
    path('', include('website.urls')),
    path('c/', include('parent_app.urls')),
    path('admin/', admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)

urlpatterns += [url(r'^.*$', index)]
