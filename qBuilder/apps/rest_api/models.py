from django.db import models
from django.contrib.postgres.fields import JSONField


class Questionnaire(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    schema_definition = JSONField()

    class Meta:
        ordering = ('created',)
