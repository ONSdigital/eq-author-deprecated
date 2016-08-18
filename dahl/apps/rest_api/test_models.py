from django.test import TestCase

from apps.rest_api.models import SchemaMeta, Survey


class SchemaMetaTests(TestCase):

    def test_str(self):
        meta = SchemaMeta()
        self.assertEquals(str(meta), "None: ")

        meta.eq_id = 4
        meta.title = "Test Title"
        self.assertEquals(str(meta), "4: Test Title")


class SurveyTests(TestCase):

    def test_str(self):
        survey = Survey()
        self.assertEquals(str(survey), ": ")

        survey.survey_id = "001"
        survey.title = "Test Title"
        self.assertEquals(str(survey), "001: Test Title")