from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^questionnaire/$', views.QuestionnaireList.as_view()),
    url(r'^questionnaire/(?P<pk>[0-9]+)/$', views.QuestionnaireDetail.as_view()),
    url(r'^questionnaire/(?P<pk>[0-9]+)/publish$', views.QuestionnairePublish.as_view())
]

urlpatterns = format_suffix_patterns(urlpatterns)
