from django.conf.urls import include, url
from django.contrib import admin


urlpatterns = [

    url(r'^admin/', admin.site.urls),
    url(r'', include('apps.app.urls')),
    url(r'', include('apps.rest_api.urls')),
]
