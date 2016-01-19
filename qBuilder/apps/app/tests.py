from django.test import TestCase
from django.core.urlresolvers import reverse


class QBuilder(TestCase):

    # Check the welcome page is present
    def test_welcome(self):
        response = self.client.get(reverse('index'))
        self.assertEqual(response.status_code, 200)

    # Check the healthcheck page is working
    def test_healthcheck(self):
        response = self.client.get(reverse('healthcheck'))
        self.assertEqual(response.status_code, 200)



