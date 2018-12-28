from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from rest_framework.reverse import reverse
from . import models
from .serializers import PeopleSerializer

class PeopleList(generics.ListAPIView):
	queryset = models.People.objects.filter()
	serializer_class = PeopleSerializer


class PeopleDetail(generics.RetrieveAPIView):
	queryset = models.People.objects.filter()
	serializer_class = PeopleSerializer


class PeopleCreate(generics.CreateAPIView):
	queryset = models.People.objects.filter()
	serializer_class = PeopleSerializer


class PeopleDelete(generics.DestroyAPIView):
    queryset = models.People.objects.filter()
    serializer_class = PeopleSerializer


class PeopleUpdate(generics.UpdateAPIView):
    queryset = models.People.objects.filter()
    serializer_class = PeopleSerializer
