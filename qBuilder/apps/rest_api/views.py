from .models import Questionnaire
from .serializers import QuestionnaireSerializer
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response


class QuestionnaireList(generics.ListCreateAPIView):
    queryset = Questionnaire.objects.all()
    serializer_class = QuestionnaireSerializer


class QuestionnaireDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Questionnaire.objects.all()
    serializer_class = QuestionnaireSerializer


class QuestionnaireS3(APIView):

    def post(self, request, format=None):
        serializer = QuestionnaireSerializer(data=request.data)
        if serializer.is_valid():
              # publish to S3
              return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
