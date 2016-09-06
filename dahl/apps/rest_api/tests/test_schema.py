from django.test import TestCase
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient
import config
from apps.rest_api.tests.test_survey import test_survey
import json
import logging
import os

logger = logging.getLogger(__name__)

class SchemaAPI(TestCase):
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

        self.create_survey()

        self.valid_schema = json.load(open(os.path.join(os.path.dirname(__file__), 'valid_schema.json')))
        self.invalid_schema = json.load(open(os.path.join(os.path.dirname(__file__), 'invalid_schema.json')))

        self.eq_id = self.create_schema()

    # create survey
    def create_survey(self):
        response = self.client.post(reverse("survey"), json.dumps(test_survey), content_type="application/json")

    def create_schema(self):
        response = self.client.post(reverse("schema"), json.dumps(self.valid_schema), content_type="application/json")
        return response.data

    def test_valid_schema_succeeds(self):
        response = self.client.post(reverse("schema"), json.dumps(self.valid_schema), content_type="application/json")
        self.assertEquals(201, response.status_code)

    def test_schema_in_list_surveys(self):
         # check schema is in surveys
        response = self.client.get(reverse("survey"))
        self.assertEquals(200, response.status_code)
        self.assertEquals(self.eq_id, response.data[0]['questionnaires'][0])

    def test_schema_in_list_schemas(self):
        # check its now in the list of schemas
        title = self.valid_schema['title']
        response = self.client.get(reverse("schema"))
        self.assertEquals(200, response.status_code)
        self.assertEquals(self.eq_id, response.data[0]['eq_id'])
        self.assertEquals("%d.json" % self.eq_id, response.data[0]['file_name'])
        self.assertEquals(title, response.data[0]['title'])

    def test_schema_details(self):
        # then get the details
        response = self.client.get(reverse("schema-details", kwargs={'eq_id': self.eq_id}))
        # self.assertEquals("Star Wars", response.data['title'])
        self.assertEquals(self.valid_schema, json.loads(response.data['schema']))

    def test_modify_schema(self):
        # now modify the title
        self.valid_schema['title'] = "Star Wars VII - The Force Awakens"
        response = self.client.put(reverse("schema-details", kwargs={'eq_id': self.eq_id}),json.dumps(self.valid_schema), content_type="application/json")
        self.assertEquals(200, response.status_code)
        # check the title has been updated
        response = self.client.get(reverse("schema"))
        self.assertEquals(200, response.status_code)
        self.assertEquals("Star Wars VII - The Force Awakens", response.data[0]['title'])

    def test_delete_schema(self):
        # finally delete the schema
        response = self.client.delete(reverse("schema-details", kwargs={'eq_id': self.eq_id}))
        self.assertEquals(200, response.status_code)

        # check schema is not in list of schemas
        response = self.client.get(reverse("schema"))
        self.assertEquals(200, response.status_code)
        self.assertEquals([], response.data)

        # check schema is not in surveys
        response = self.client.get(reverse("survey"))
        self.assertEquals(200, response.status_code)
        self.assertEquals([], response.data[0]['questionnaires'])

    def test_survey_deletion_deletes_associated_schemas(self):
        # demonstrate schema exists in survey
        response = self.client.get(reverse("survey"))
        self.assertEquals(self.eq_id, response.data[0]['questionnaires'][0])

        response = self.client.delete(reverse("survey-details", kwargs={'survey_id': self.valid_schema['survey_id']}))
        # check that the associated schema has been deleted
        response = self.client.get(reverse("schema"))
        self.assertEquals(200, response.status_code)

        self.assertEquals([], response.data)

    def test_survey_is_created_if_it_doesnt_exist(self):
        survey_id = '999'
        response = self.client.get(reverse("survey-details", kwargs={'survey_id': survey_id}))
        self.assertEquals(404, response.status_code)
        self.valid_schema['survey_id'] = survey_id
        response = self.client.post(reverse("schema"), json.dumps(self.valid_schema), content_type="application/json")
        self.assertEquals(201, response.status_code)
        response = self.client.get(reverse("survey-details", kwargs={'survey_id': survey_id}))
        self.assertEquals(200, response.status_code)

    def test_invalid_schema_fails(self):
        response = self.client.post(reverse("schema"), json.dumps(self.invalid_schema), content_type="application/json")
        self.assertEquals(400, response.status_code)

    def test_unknown_schema_details_404(self):
        response = self.client.get(reverse("schema-details", kwargs={'eq_id': 0}))
        self.assertEquals(404, response.status_code)

    def test_unknown_schema_delete_404(self):
        response = self.client.delete(reverse("schema-details", kwargs={'eq_id': 0}))
        self.assertEquals(404, response.status_code)

    def test_unknown_schema_modify_404(self):
        response = self.client.put(reverse("schema-details", kwargs={'eq_id': 0}),json.dumps(self.valid_schema), content_type="application/json")
        self.assertEquals(404, response.status_code)

    def test_invalid_json_fails(self):
        response = self.client.post(reverse("schema"), 'String of not json', content_type="application/json")
        self.assertEquals(400, response.status_code)
