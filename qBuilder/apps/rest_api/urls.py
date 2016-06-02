from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^schema/$', views.Schema.as_view()),
    url(r'^schema/(?P<eq_id>[0-9]+)/$', views.SchemaDetail.as_view()),
]

