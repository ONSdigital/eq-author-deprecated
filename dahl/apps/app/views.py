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

from rest_framework.decorators import api_view, renderer_classes
from rest_framework import response, schemas
from rest_framework_swagger.renderers import OpenAPIRenderer, SwaggerUIRenderer


@api_view()
@renderer_classes([OpenAPIRenderer, SwaggerUIRenderer])
def schema_view(request):
    generator = schemas.SchemaGenerator(title='Bookings API')
    return response.Response(generator.get_schema(request=request))
