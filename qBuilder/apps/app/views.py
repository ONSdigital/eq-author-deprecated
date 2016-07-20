from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.authtoken.models import Token
from django.views.generic import TemplateView
from django.shortcuts import render_to_response


class DahlView(LoginRequiredMixin, TemplateView):
    login_url = '/login'
    redirect_field_name = 'redirect_to'

    def render_to_response(self, context, **response_kwargs):
        response = render_to_response("index.html", {})
        token = Token.objects.get_or_create(user=self.request.user)
        response['Authorization'] = "Token {}".format(token[0])
        return response

