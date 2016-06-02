from django.test import TestCase
from django.core.urlresolvers import reverse
from django.test import Client

from .schema_storage import SchemaStorage
from .schema_storage import SchemaStorageFactory

import json


test_schema = {
  "mime_type": "application/json/ons/eq",
  "schema_version": "0.0.1",
  "questionnaire_id": "333",
  "survey_id": "33",
  "title": "Star Wars",
  "description": "Star Wars VII",
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
                  "responses": [
                    {
                      "id": "6cf5c72a-c1bf-4d0c-af6c-d0f07bc5b65b",
                      "q_code": "22",
                      "label": "How old is Chewy?",
                      "guidance": "it's old",
                      "type": "Integer",
                      "options": [],
                      "mandatory": True,
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


# we can't use s3 during testing so create an in memory version
class InMemorySchemaStorage(SchemaStorage):
    def __init__(self):
        self.data = {}

    def store(self, key, contents):
        self.data[key] = contents

    def get(self, key):
        return self.data[key]


class SchemaAPI(TestCase):
    def setUp(self):
        SchemaStorageFactory.schema_storage = InMemorySchemaStorage()
        self.client = Client()

    def test_get_empty(self):
        response = self.client.get(reverse("schema"))
        # expecting empty response
        self.assertEquals(200, response.status_code)
        self.assertEquals([], response.data)

    def test_schema_apu(self):
        response = self.client.post(reverse("schema"), json.dumps(test_schema), content_type="application/json")
        self.assertEquals(201, response.status_code)
        self.assertEquals(1, response.data)

        # check its now in the list of schemas
        response = self.client.get(reverse("schema"))
        self.assertEquals(200, response.status_code)
        self.assertEquals(1, response.data[0]['eq_id'])
        self.assertEquals("1.json", response.data[0]['file_name'])
        self.assertEquals("Star Wars", response.data[0]['title'])
        self.assertEquals("Star Wars VII", response.data[0]['description'])

        # then get the details
        response = self.client.get(reverse("schema-details", kwargs={'eq_id': '1'}))
        self.assertEquals(test_schema, response.data)

        # now modify the title
        test_schema['title'] = "Star Wars VII - The Force Awakens"
        response = self.client.put(reverse("schema-details", kwargs={'eq_id': '1'}),json.dumps(test_schema), content_type="application/json")
        self.assertEquals(200, response.status_code)

        # check the title has been updated
        response = self.client.get(reverse("schema"))
        self.assertEquals(200, response.status_code)
        self.assertEquals("Star Wars VII - The Force Awakens", response.data[0]['title'])