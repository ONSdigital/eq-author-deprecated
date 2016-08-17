from django.conf.urls import include, url
from django.contrib import admin


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api/v1/', include('apps.rest_api.urls')),
    url(r'^docs/', include('rest_framework_docs.urls')),
    url(r'', include('apps.app.urls')),
]
