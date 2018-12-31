from django.http import HttpResponse
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser,FormParser
from . import models
from rest_framework.response import  Response
from .serializers import HighlightsSerializer
from rest_framework import status


class GetHighlights(generics.ListCreateAPIView):
    queryset = models.Highlights.objects.filter()
    serializer_class = HighlightsSerializer


class CreateHighlights(APIView):
    parser_classes = (MultiPartParser,FormParser)

    def post(self,request,*args,**kwargs):
        file = HighlightsSerializer(data=request.data)
        if file.is_valid():
            file.save()
            return Response(file.data, status=status.HTTP_201_CREATED)
        else :
            return Response(file.errors,status=status.HTTP_400_BAD_REQUEST)
    #
    # queryset = models.Highlights.objects.filter()
    # serializer_class = HighlightsSerializer


class UpdateHighlights(generics.UpdateAPIView):
    queryset = models.Highlights.objects.filter()
    serializer_class = HighlightsSerializer


class DeleteHighlights(generics.DestroyAPIView):
    queryset = models.Highlights.objects.filter()
    serializer_class = HighlightsSerializer

