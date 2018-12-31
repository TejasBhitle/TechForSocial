from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from . import models
from .serializers import NewsSerializer
# Create your views here.


def new(request):
    return HttpResponse("<h2>"
                        "news"
                        "</h2>")


def highlights(request):
    return None


class NewsList(generics.ListAPIView):
    queryset = models.News.objects.filter()
    serializer_class = NewsSerializer


class NewsCreate(generics.CreateAPIView):
    queryset = models.News.objects.filter()
    serializer_class = NewsSerializer


class NewsUpdate(generics.UpdateAPIView):
    queryset = models.News.objects.filter()
    serializer_class = NewsSerializer


class NewsDelete(generics.DestroyAPIView):
    queryset = models.News.objects.filter()
    serializer_class = NewsSerializer


