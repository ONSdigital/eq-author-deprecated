# -*- coding: utf-8 -*-
# Generated by Django 1.9.6 on 2016-08-16 15:49
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('rest_api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Survey',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('survey_id', models.CharField(max_length=3, unique=True)),
                ('title', models.CharField(max_length=256)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'ordering': ('created_at', 'survey_id'),
            },
        ),
        migrations.AddField(
            model_name='schemameta',
            name='survey',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='questionnaires', to='rest_api.Survey'),
        ),
    ]
