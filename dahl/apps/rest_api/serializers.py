from rest_framework import serializers
from .models import SchemaMeta
from .models import Schema
from .models import Survey


class SchemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SchemaMeta
        fields = ('eq_id', 'survey', 'file_name', 'created', 'modified', 'title', 'description')


class QuestionnaireSerializer(serializers.Serializer):
        json_data = serializers.JSONField()

        def create(self, validated_data):
            return Schema(validated_data.get('json_data'))

        def update(self, instance, validated_data):
            return Schema(validated_data)


class SurveySerializer(serializers.ModelSerializer):
    class Meta:
        model = Survey
        fields = ('survey_id', 'title', 'created_at', 'questionnaires')
