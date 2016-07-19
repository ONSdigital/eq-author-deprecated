from django.conf.urls import url
from django.views.generic import TemplateView
from .views import HealthView

from .views import login


urlpatterns = [
    url(r'^healthcheck/$', HealthView.as_view(), name='healthcheck'),
    url(r'^login/$', login, {'template_name': 'login.html'}),
    url(r'^login/$', 'django.contrib.auth.views.login', {'template_name': 'login.html'}),
    url(r'^logout/$', 'django.contrib.auth.views.logout'),
    url(r'^.*$', TemplateView.as_view(template_name="index.html"), name='index'),


]
