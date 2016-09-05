from django.test import TestCase
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient
import config
import json
import logging

logger = logging.getLogger(__name__)

test_survey = {
   "survey_id": "33",
   "title": "Star Wars Surveys",
   "questionnaires": []
}

test_survey_2 = {
   "survey_id": "34",
   "title": "Star Wars Surveys",
   "questionnaires": []
}

invalid_survey = {
   "survey_id": None,
   "title": "Invalid Surveys",
   "questionnaires": []
}

class SurveyAPI(TestCase):
    def setUp(self):
        config.EQ_SCHEMA_STORAGE = "memory"

        # Create user for testing
        test_user = User.objects.create_user('test_user', 'test@ons.gov.uk', 'test_password')

        # Generate a token for the user
        token = Token.objects.get(user= test_user)

        # Login the user and update http header to include token
        self.client = APIClient()
        self.client.login(username='test_user', password='test_password')
        self.client.credentials(HTTP_AUTHORIZATION='Token {}'.format(token))
        self.create_valid_survey()

    def create_valid_survey(self):
        response = self.client.post(reverse("survey"), json.dumps(test_survey), content_type="application/json")

    def test_create_valid_survey(self):
        response = self.client.post(reverse("survey"), json.dumps(test_survey_2), content_type="application/json")
        self.assertEquals(201, response.status_code)

        response = self.client.get(reverse("survey-details", kwargs={'survey_id': '34'}))
        self.assertEquals(200, response.status_code)
        self.assertEquals("34", response.data['survey_id'])
        self.assertEquals("Star Wars Surveys", response.data['title'])

    def test_modify_survey(self):
        # now modify the title
        test_survey['title'] = "Star Wars Surveys - The Complete Collection"
        response = self.client.put(reverse("survey-details", kwargs={'survey_id': '33'}), json.dumps(test_survey), content_type="application/json")
        self.assertEquals(200, response.status_code)

        # check the title has been updated
        response = self.client.get(reverse("survey"))
        self.assertEquals(200, response.status_code)
        self.assertEquals("Star Wars Surveys - The Complete Collection", response.data[0]['title'])


    def test_delete_survey(self):
        # finally delete the survey
        response = self.client.delete(reverse("survey-details", kwargs={'survey_id': '33'}))
        self.assertEquals(204, response.status_code)

        # check its gone
        response = self.client.get(reverse("survey"))
        self.assertEquals(200, response.status_code)
        self.assertEquals([], response.data)

    def test_duplicate_survey_fails(self):
        # try and create the same survey again
        response = self.client.post(reverse("survey"), json.dumps(test_survey), content_type="application/json")
        self.assertEquals(400, response.status_code)

    def test_get_empty_survey_suceeds(self):
        response = self.client.get(reverse("schema"))
        # expecting empty response
        self.assertEquals(200, response.status_code)
        self.assertEquals([], response.data)


    def test_create_invalid_survey_fails(self):
        response = self.client.post(reverse("survey"), json.dumps(invalid_survey), content_type="application/json")
        self.assertEquals(400, response.status_code)

    def test_modify_unknown_survey(self):
        # now modify the title
        response = self.client.put(reverse("survey-details", kwargs={'survey_id': '0123456789'}), json.dumps(test_survey), content_type="application/json")
        self.assertEquals(404, response.status_code)

    def test_delete_unknown_survey(self):
        # finally delete the survey
        response = self.client.delete(reverse("survey-details", kwargs={'survey_id': '0123456789'}))
        self.assertEquals(404, response.status_code)
