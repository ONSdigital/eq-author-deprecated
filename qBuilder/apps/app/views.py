from django.contrib.auth.mixins import LoginRequiredMixin
from rest_framework.authtoken.models import Token
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.sites.shortcuts import get_current_site
from django.http import HttpResponseRedirect
from django.template.response import TemplateResponse
from django.utils.http import is_safe_url
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.debug import sensitive_post_parameters
from django.views.generic import TemplateView
from django.contrib.auth import REDIRECT_FIELD_NAME
from django.shortcuts import resolve_url

from django.conf import settings


class HealthView(LoginRequiredMixin, TemplateView):
    template_name = "healthcheck.html"
    login_url = '/login/'
    redirect_field_name = 'redirect_to'


class IndexView(LoginRequiredMixin, TemplateView):
    template_name = "index.html"
    login_url = '/login/'
    redirect_field_name = 'redirect_to'


@sensitive_post_parameters()
@csrf_protect
@never_cache
def login(request, template_name='registration/login.html',
          redirect_field_name=REDIRECT_FIELD_NAME,
          authentication_form=AuthenticationForm,
          current_app=None, extra_context=None):
    """
    Displays the login form and handles the login action.
    """
    redirect_to = request.POST.get(redirect_field_name,
                                   request.GET.get(redirect_field_name, ''))

    if request.method == "POST":
        form = authentication_form(request, data=request.POST)
        if form.is_valid():

            # Ensure the user-originating redirection url is safe.
            if not is_safe_url(url=redirect_to, host=request.get_host()):
                redirect_to = resolve_url(settings.LOGIN_REDIRECT_URL)

                user = form.get_user()
                token = Token.objects.get_or_create(user=user)

            http_response_redirect = HttpResponseRedirect(redirect_to)
            http_response_redirect['Authorization'] = "Token {}".format(token[0])
            return http_response_redirect

    else:
        form = authentication_form(request)

    current_site = get_current_site(request)

    context = {
        'form': form,
        redirect_field_name: redirect_to,
        'site': current_site,
        'site_name': current_site.name,
    }
    if extra_context is not None:
        context.update(extra_context)

    if current_app is not None:
        request.current_app = current_app

    return TemplateResponse(request, template_name, context)
