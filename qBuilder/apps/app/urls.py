from django.conf.urls import url
from django.views.generic import TemplateView
from django.contrib.auth import views as auth_views
from .views import DahlView

urlpatterns = [
    url(r'^healthcheck', TemplateView.as_view(template_name="healthcheck.html"), name='healthcheck'),
    url(r'^login', auth_views.login, {'template_name': 'login.html'}, name='login'),
    url(r'^logout', auth_views.logout, {'next_page': '/login.html'}, name='logout'),
    url(r'^.*$', DahlView.as_view(), name='index'),
]
