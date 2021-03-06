"""
Django settings for author project.

Generated by 'django-admin startproject' using Django 1.9.1.

For more information on this file, see
https://docs.djangoproject.com/en/1.9/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.9/ref/settings/
"""

import sys
import os
import dj_database_url

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.9/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '7!(g$-ecu()j804%kk-00ew4p$glg4qhs$7=b(@7+s(6r^f@a5'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

if "EQ_DEV_MODE" in os.environ and os.environ['EQ_DEV_MODE'].upper() == "TRUE":
    PRODUCTION = False
else:
    PRODUCTION = True

ALLOWED_HOSTS = []

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.IsAuthenticated',
    ),
    'DEFAULT_AUTHENTICATION_CLASSES': (
     'rest_framework.authentication.TokenAuthentication',
    )
}

# Out of the box apps
DJANGO_PROVIDED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

ADDITIONAL_APPS = [
    'webpack_loader',
    'rest_framework',
    'rest_framework.authtoken',
    'corsheaders',
    'rest_framework_docs'
]

LOGIN_REDIRECT_URL = '/'

EQ_AUTHOR_APPS = [
    'apps.app',
    'apps.rest_api'
]

# Application definition (Default + OURs)
INSTALLED_APPS = DJANGO_PROVIDED_APPS + ADDITIONAL_APPS + EQ_AUTHOR_APPS

MIDDLEWARE_CLASSES = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'project.urls'

# TODO: Decide on which host will be allowed to access the API
CORS_ORIGIN_ALLOW_ALL = True

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'templates')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'project.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.9/ref/settings/#databases
if 'TRAVIS' in os.environ:
    DATABASES = {
        'default': {
            'ENGINE': 'django.db.backends.postgresql_psycopg2',
            'NAME': 'dahl',
            'USER': 'eq-author',
            'PASSWORD': '',
            'HOST': '127.0.0.1',
            'PORT': '5432',
        }
    }
else:
    DATABASES = {'default': dj_database_url.parse(os.getenv('EQ_AUTHOR_DATABASE_URL', 'sqlite:///author.db'))}


# Password validation
# https://docs.djangoproject.com/en/1.9/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'handlers': {
       'stdout': {
            'level':  os.getenv('DJANGO_LOGGING_LEVEL', 'WARNING'),
            'class': 'logging.StreamHandler',
            'stream': sys.stdout
        },
        'stderr': {
            'level': 'ERROR',
            'class': 'logging.StreamHandler',
            'stream': sys.stderr
        }
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.9/topics/i18n/

LANGUAGE_CODE = 'en-gb'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.9/howto/static-files/

STATIC_ROOT = os.path.join(BASE_DIR, 'static/')
STATIC_URL = '/static/'
STATICFILES_DIRS = (
    os.path.join(BASE_DIR, 'bundles'),
    # We do this so that django's collectstatic copies our bundles to the STATIC_ROOT or syncs them to whatever storage we use.
)

WEBPACK_LOADER = {
  'DEFAULT': {
    'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats.json'),
    'IGNORE': ['.+\.hot-update.js', '.+\.map']
  }
}

if PRODUCTION:
    WEBPACK_LOADER.update({
        'DEFAULT': {
            'STATS_FILE': os.path.join(BASE_DIR, 'webpack-stats-prod.json')
        }
    })
