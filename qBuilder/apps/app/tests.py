from django.test import TestCase
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User
from rest_framework.test import APIClient
from rest_framework.authtoken.models import Token


class QBuilder(TestCase):

    # Check the welcome page is present
    def test_logged_out(self):
        response = self.client.get(reverse('index'))

        # We should get redirected as we are not logged in
        self.assertEqual(response.status_code, 302)

        # Create a user and token and log them in
        test_user = User.objects.create_user('test_user', 'test@ons.gov.uk', 'test_password')
        Token.objects.get_or_create(user=test_user)
        self.client = APIClient()
        self.client.login(username='test_user', password='test_password')

        # We should now be able to access index
        response = self.client.get(reverse('index'))
        self.assertEqual(response.status_code, 200)

    # Check the healthcheck page is working
    def test_healthcheck(self):
        response = self.client.get(reverse('healthcheck'))
        self.assertEqual(response.status_code, 200)



