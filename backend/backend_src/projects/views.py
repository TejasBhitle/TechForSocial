from django.shortcuts import render
from django.http import HttpResponse,Http404
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models
from .models import ActiveProject
from .serializers import ActiveProjectSerializer
from rest_framework import generics
# Create your views here.


class ProjectList(generics.ListAPIView):
    queryset = models.ActiveProject.objects.filter(is_past=False)
    serializer_class = ActiveProjectSerializer


class ProjectCreate(generics.CreateAPIView):
    queryset = models.ActiveProject.objects.filter()
    serializer_class = ActiveProjectSerializer


class ProjectDetail(generics.RetrieveAPIView):
    queryset = models.ActiveProject.objects.filter()
    serializer_class = ActiveProjectSerializer


class ProjectDelete(generics.DestroyAPIView):
    queryset = models.ActiveProject.objects.filter()
    serializer_class = ActiveProjectSerializer


class ProjectUpdate(generics.UpdateAPIView):
    queryset = models.ActiveProject.objects.filter()
    serializer_class = ActiveProjectSerializer


class PastProjectList(generics.ListAPIView):
    queryset = models.ActiveProject.objects.filter(is_past=True)
    serializer_class = ActiveProjectSerializer


class PastProjectCreate(generics.CreateAPIView):
    queryset = models.ActiveProject.objects.filter()
    serializer_class = ActiveProjectSerializer


class PastProjectDetail(generics.RetrieveAPIView):
    queryset = models.ActiveProject.objects.filter()
    serializer_class = ActiveProjectSerializer


class PastProjectDelete(generics.DestroyAPIView):
    queryset = models.ActiveProject.objects.filter()
    serializer_class = ActiveProjectSerializer


class PastProjectUpdate(generics.UpdateAPIView):
    queryset = models.ActiveProject.objects.filter()
    serializer_class = ActiveProjectSerializer




