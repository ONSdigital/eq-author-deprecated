from rest_framework import serializers
from .models import SchemaMeta
from .models import Schema


class SchemaSerializer(serializers.ModelSerializer):
    class Meta:
        model = SchemaMeta
        fields = ('eq_id', 'file_name', 'created', 'title', 'description')


class QuestionnaireSerializer(serializers.Serializer):
        json_data = serializers.JSONField()

        def create(self, validated_data):
            return Schema(validated_data.get('json_data'))

        def update(self, instance, validated_data):
            return Schema(validated_data)
