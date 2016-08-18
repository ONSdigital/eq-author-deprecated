
from django.db import models


class SchemaMeta(models.Model):
    eq_id = models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=128)
    description = models.CharField(max_length=256)
    file_name = models.CharField(max_length=64, null=True)
    survey = models.ForeignKey('Survey', related_name='questionnaires', blank=True, null=True)

    class Meta:
        ordering = ('created', 'eq_id')

    def __str__(self):
        return "{id}: {title}".format(id=self.eq_id, title=self.title)


class Schema(object):
    data = {}

class Survey(models.Model):
    survey_id = models.CharField(max_length=3, unique=True)
    title = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ('created_at', 'survey_id')

    def __str__(self):
        return "{id}: {title}".format(id=self.survey_id, title=self.title)
