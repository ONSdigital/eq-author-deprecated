from django.test import TestCase
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient
import config

import json

test_survey = {
   "survey_id": "33",
   "title": "Star Wars Surveys",
   "questionnaires": []
}

test_schema = {
  "mime_type": "application/json/ons/eq",
  "schema_version": "0.0.1",
  "questionnaire_id": "333",
  "survey_id": "33",
  "title": "Star Wars",
  "description": "Star Wars VII",
  "theme": "default",
  "introduction": {
    "description": "May the force be with you"
  },
  "groups": [
    {
      "id": "14ba4707-321d-441d-8d21-b8367366e766",
      "title": "",
      "blocks": [
        {
          "id": "cd3b74d1-b687-4051-9634-a8f9ce10a27d",
          "title": "Star Wars",
          "sections": [
            {
              "id": "017880bc-752d-4a6b-83df-e130409ee660",
              "title": "Star Wars Quiz",
              "description": "May the force be with you young EQ developer<br/><br/>",
              "questions": [
                {
                  "id": "88824eff-7bb6-443f-85cb-8c2db016d44c",
                  "title": "Chewie",
                  "description": "Jedi",
                  "type": "Integer",
                  "answers": [
                    {
                      "id": "6cf5c72a-c1bf-4d0c-af6c-d0f07bc5b65b",
                      "q_code": "22",
                      "label": "How old is Chewy?",
                      "guidance": "it's old",
                      "type": "Integer",
                      "options": [],
                      "mandatory": True,
                      "alias":"age",
                      "validation": {
                        "messages": {
                          "NOT_INTEGER": "Please enter your age.",
                          "NEGATIVE_INTEGER": "Negative age you can not be.",
                          "INTEGER_TOO_LARGE": "No one lives that long, not even Yoda"
                        }
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
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

    def test_survey_api(self):
        response = self.client.post(reverse("survey"), json.dumps(test_survey), content_type="application/json")
        self.assertEquals(201, response.status_code)

        # check its now in the list of surveys
        response = self.client.get(reverse("survey"))
        self.assertEquals(200, response.status_code)
        self.assertEquals("33", response.data[0]['survey_id'])
        self.assertEquals("Star Wars Surveys", response.data[0]['title'])

        # add a schema to the survey
        response = self.client.post(reverse("schema"), json.dumps(test_schema), content_type="application/json")
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
        # `TODO: The following test should work, it doesn't!`
        # self.assertEquals([], response.data)

    def test_survey_api_dupicate_survey(self):
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

    def test_schema_api(self):
        response = self.client.post(reverse("survey"), json.dumps(test_survey), content_type="application/json")
        self.assertEquals(201, response.status_code)

        response = self.client.post(reverse("schema"), json.dumps(test_schema), content_type="application/json")
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
        self.assertEquals(test_schema, json.loads(response.data['schema']))

        # now modify the title
        test_schema['title'] = "Star Wars VII - The Force Awakens"
        response = self.client.put(reverse("schema-details", kwargs={'eq_id': eq_id}),json.dumps(test_schema), content_type="application/json")
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

    def test_schema_api_survey_doesnt_exist(self):
        response = self.client.post(reverse("schema"), json.dumps(test_schema), content_type="application/json")
        self.assertEquals(400, response.status_code)

