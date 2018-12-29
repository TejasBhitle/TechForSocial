from rest_framework import serializers
from . import models

class Authorserializer(serializers.ModelSerializer):
    #Authors = PublicationSerializer(many=True,read_only=False)
    class Meta:
        model = models.Author
        fields = ('id','Name')

class PublicationSerializer(serializers.ModelSerializer):
    Authors = Authorserializer( many=True, read_only = False)
    class Meta:
        model = models.Publication
        fields = ('id','Title','Authors','Publisher','Journal','Year','Volume','Pages','Type',)