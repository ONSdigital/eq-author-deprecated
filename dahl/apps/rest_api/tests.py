from django.test import TestCase
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient
import config
from apps.rest_api.test_schemas import valid_schema, repeating_block_schema, invalid_schema, conditional_display_schema, routing_schema
import json
import logging

logger = logging.getLogger(__name__)

test_survey = {
   "survey_id": "33",
   "title": "Star Wars Surveys",
   "questionnaires": []
}

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

    # test valid schema
    def survey_api_test(self, schema):
        response = self.client.post(reverse("survey"), json.dumps(test_survey), content_type="application/json")
        self.assertEquals(201, response.status_code)

        # check its now in the list of surveys
        response = self.client.get(reverse("survey"))
        self.assertEquals(200, response.status_code)
        self.assertEquals("33", response.data[0]['survey_id'])
        self.assertEquals("Star Wars Surveys", response.data[0]['title'])

        # add a schema to the survey
        response = self.client.post(reverse("schema"), json.dumps(schema), content_type="application/json")
        self.assertEquals(201, response.status_code)
        eq_id = response.data
        response = self.client.get(reverse("schema-details", kwargs={'eq_id': eq_id}))
        self.assertEquals(200, response.status_code)

        # check schema is in surveys
        response = self.client.get(reverse("survey"))
        self.assertEquals(200, response.status_code)
        self.assertEquals(eq_id, response.data[0]['questionnaires'][0])

        # then get the details
        response = self.client.get(reverse("survey-details", kwargs={'survey_id': '33'}))
        self.assertEquals("Star Wars Surveys", response.data['title'])

        # now modify the title
        test_survey['title'] = "Star Wars Surveys - The Complete Collection"
        response = self.client.put(reverse("survey-details", kwargs={'survey_id': '33'}), json.dumps(test_survey), content_type="application/json")
        self.assertEquals(200, response.status_code)

        # check the title has been updated
        response = self.client.get(reverse("survey"))
        self.assertEquals(200, response.status_code)
        self.assertEquals("Star Wars Surveys - The Complete Collection", response.data[0]['title'])
        # reset survey title
        test_survey['title'] = "Star Wars Surveys"
        # finally delete the survey
        response = self.client.delete(reverse("survey-details", kwargs={'survey_id': '33'}))
        self.assertEquals(204, response.status_code)

        # check its gone
        response = self.client.get(reverse("survey"))
        self.assertEquals(200, response.status_code)
        self.assertEquals([], response.data)

        # check that the associated schema has been deleted
        response = self.client.get(reverse("schema"))
        self.assertEquals(200, response.status_code)

        self.assertEquals([], response.data)


    def schema_api_test(self, schema):
        response = self.client.post(reverse("survey"), json.dumps(test_survey), content_type="application/json")
        self.assertEquals(201, response.status_code)

        response = self.client.post(reverse("schema"), json.dumps(schema), content_type="application/json")
        self.assertEquals(201, response.status_code)
        eq_id = response.data

        # check schema is in surveys
        response = self.client.get(reverse("survey"))
        self.assertEquals(200, response.status_code)
        self.assertEquals(1, response.data[0]['questionnaires'][0])

        # check its now in the list of schemas
        response = self.client.get(reverse("schema"))
        self.assertEquals(200, response.status_code)
        self.assertEquals(eq_id, response.data[0]['eq_id'])
        self.assertEquals("1.json", response.data[0]['file_name'])
        self.assertEquals("Star Wars", response.data[0]['title'])
        self.assertEquals("Star Wars VII", response.data[0]['description'])

        # then get the details
        response = self.client.get(reverse("schema-details", kwargs={'eq_id': eq_id}))
        self.assertEquals("Star Wars", response.data['title'])
        self.assertEquals(schema, json.loads(response.data['schema']))

        # now modify the title
        schema['title'] = "Star Wars VII - The Force Awakens"
        response = self.client.put(reverse("schema-details", kwargs={'eq_id': eq_id}),json.dumps(schema), content_type="application/json")
        self.assertEquals(200, response.status_code)

        # check the title has been updated
        response = self.client.get(reverse("schema"))
        self.assertEquals(200, response.status_code)
        self.assertEquals("Star Wars VII - The Force Awakens", response.data[0]['title'])

        # finally delete the schema
        response = self.client.delete(reverse("schema-details", kwargs={'eq_id': eq_id}))
        self.assertEquals(200, response.status_code)

        # check its gone
        response = self.client.get(reverse("schema"))
        self.assertEquals(200, response.status_code)
        self.assertEquals([], response.data)

        # check schema is not in surveys
        response = self.client.get(reverse("survey"))
        self.assertEquals(200, response.status_code)
        self.assertEquals([], response.data[0]['questionnaires'])

    def test_survey_api_duplicate_survey(self):
        response = self.client.post(reverse("survey"), json.dumps(test_survey), content_type="application/json")
        self.assertEquals(201, response.status_code)

        # try and create the same survey again
        response = self.client.post(reverse("survey"), json.dumps(test_survey), content_type="application/json")
        self.assertEquals(400, response.status_code)

    def test_get_empty(self):
        response = self.client.get(reverse("schema"))
        # expecting empty response
        self.assertEquals(200, response.status_code)
        self.assertEquals([], response.data)

    def test_api_survey_doesnt_exist(self):
        response = self.client.post(reverse("schema"), json.dumps(valid_schema), content_type="application/json")
        # TODO remove once front end changes in place
        # self.assertEquals(400, response.status_code)
        self.assertEquals(201, response.status_code)


    # test valid schema

    def test_survey_api_with_valid(self):
        self.survey_api_test(valid_schema)

    def test_schema_api_with_valid(self):
        self.schema_api_test(valid_schema)

    # test invalid schema

    def test_survey_api_with_invalid(self):
        response = self.client.post(reverse("survey"), json.dumps(test_survey), content_type="application/json")
        self.assertEquals(201, response.status_code)

        # check its now in the list of surveys
        response = self.client.get(reverse("survey"))
        self.assertEquals(200, response.status_code)
        self.assertEquals("33", response.data[0]['survey_id'])
        self.assertEquals("Star Wars Surveys", response.data[0]['title'])

        # try to add a schema to the survey
        response = self.client.post(reverse("schema"), json.dumps(invalid_schema), content_type="application/json")
        self.assertEquals(400, response.status_code)


    def test_schema_api_with_invalid(self):
        response = self.client.post(reverse("survey"), json.dumps(test_survey), content_type="application/json")
        self.assertEquals(201, response.status_code)

        response = self.client.post(reverse("schema"), json.dumps(invalid_schema), content_type="application/json")
        self.assertEquals(400, response.status_code)
        eq_id = response.data

    # test repeating blocks schema

    def test_survey_api_with_repeating_blocks(self):
        self.survey_api_test(repeating_block_schema)

    def test_schema_api_with_repeating_blocks(self):
        self.schema_api_test(repeating_block_schema)

    # test conditional display schema

    def test_survey_api_with_conditional_display(self):
        self.survey_api_test(conditional_display_schema)

    def test_schema_api_with_conditional_display(self):
        self.schema_api_test(conditional_display_schema)

    # test routing schema

    def test_survey_api_with_routing(self):
        self.survey_api_test(routing_schema)

    def test_schema_api_with_routing(self):
        self.schema_api_test(routing_schema)
