from django.shortcuts import render
from django.http import HttpResponse,Http404
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import ActiveProject, PastProject
from .serializers import ActiveProjectSerializer, PastProjectSerializer
from rest_framework import generics
# Create your views here.


class ProjectList(generics.ListCreateAPIView):
    queryset = ActiveProject.objects.all()
    serializer_class = ActiveProjectSerializer


class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = ActiveProject.objects.all()
    serializer_class = ActiveProjectSerializer


class PastProjectList(generics.ListCreateAPIView):
    queryset = PastProject.objects.all()
    serializer_class = PastProjectSerializer


class PastProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = PastProject.objects.all()
    serializer_class = PastProjectSerializer

