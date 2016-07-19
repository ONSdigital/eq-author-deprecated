
from django.db import models


class SchemaMeta(models.Model):
    eq_id = models.AutoField(primary_key=True)
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=128)
    description = models.CharField(max_length=256)
    file_name = models.CharField(max_length=64, null=True)

    class Meta:
        ordering = ('created', 'eq_id')

    def __str__(self):
        return "{id}: {title}".format(id=self.eq_id, title=self.title)

class Schema(object):
    data = {}
