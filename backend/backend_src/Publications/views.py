from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse
from . import models
from .serializers import PublicationSerializer, Authorserializer

class PublicationList(generics.ListAPIView):
	queryset = models.Publication.objects.filter()
	serializer_class = PublicationSerializer


class PublicationDetail(generics.RetrieveAPIView):
	queryset = models.Publication.objects.filter()
	serializer_class = PublicationSerializer


class PublicationCreate(generics.CreateAPIView):
	queryset = models.Publication.objects.filter()
	serializer_class = PublicationSerializer


class PublicationDelete(generics.DestroyAPIView):
    queryset = models.Publication.objects.filter()
    serializer_class = PublicationSerializer


class PublicationUpdate(generics.UpdateAPIView):
    queryset = models.Publication.objects.filter()
    serializer_class = PublicationSerializer

