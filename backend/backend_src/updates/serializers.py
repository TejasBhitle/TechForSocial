from rest_framework import serializers
from . import models

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.News
        fields = "__all__"


class HighlightsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Highlights
        fields = "__all__"