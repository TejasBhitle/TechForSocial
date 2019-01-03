from django.shortcuts import render
from .models import FAQ

# Create your views here.
class FAQList(generics.ListAPIView):
    queryset = FAQ.objects.all()
    serializer_class = ActiveProjectSerializer


class FAQCreate(generics.CreateAPIView):
    queryset = FAQ.objects.all()
    serializer_class = ActiveProjectSerializer


class FAQDetail(generics.RetrieveAPIView):
    queryset = FAQ.objects.all()
    serializer_class = ActiveProjectSerializer


class FAQDelete(generics.DestroyAPIView):
    queryset = FAQ.objects.all()
    serializer_class = ActiveProjectSerializer


class FAQUpdate(generics.UpdateAPIView):
    queryset = FAQ.objects.all()
    serializer_class = ActiveProjectSerializer
