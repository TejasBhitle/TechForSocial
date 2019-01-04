from django.shortcuts import render
from .models import FAQ
from rest_framework import generics
from .serializers import FAQSerializer

# Create your views here.
class FAQList(generics.ListAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer


class FAQCreate(generics.CreateAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer


class FAQDetail(generics.RetrieveAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer


class FAQDelete(generics.DestroyAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer


class FAQUpdate(generics.UpdateAPIView):
    queryset = FAQ.objects.all()
    serializer_class = FAQSerializer
