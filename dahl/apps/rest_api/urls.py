from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^schema/$', views.Schema.as_view(), name="schema"),
    url(r'^schema/(?P<eq_id>[0-9]+)/$', views.SchemaDetail.as_view(), name="schema-details"),
    url(r'^surveys/?$', views.SurveyView.as_view(), name="survey"),
    url(r'^surveys/(?P<survey_id>[0-9]+)/?$', views.SurveyDetailsView.as_view(), name="survey-details"),
]
