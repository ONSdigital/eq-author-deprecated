from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.authtoken.models import Token
from django.views.generic import TemplateView
from django.shortcuts import render_to_response, get_object_or_404


class DahlView(LoginRequiredMixin, TemplateView):
    login_url = '/sign-in'
    redirect_field_name = 'redirect_to'

    def render_to_response(self, context, **response_kwargs):
        token = get_object_or_404(Token, user=self.request.user)
        response = render_to_response("index.html", {'auth_token': token})
        return response

