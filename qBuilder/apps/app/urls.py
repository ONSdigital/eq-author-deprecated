from django.conf.urls import url
from django.views.generic import TemplateView

urlpatterns = [
    url(r'^healthcheck/$', TemplateView.as_view(template_name="healthcheck.html"), name='healthcheck'),
    url(r'^login/$', TemplateView.as_view(template_name="login.html"), name='login'),
    url(r'^.*$', TemplateView.as_view(template_name="index.html"), name='index'),
]
