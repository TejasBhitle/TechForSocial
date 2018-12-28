from rest_framework import serializers
from . import models

class PeopleSerializer(serializers.ModelSerializer):
	class Meta:
		model = models.People
		fields = ('id','Name','Picture','Bio','Resume','Github','Gmail','LinkedIn','Website','Category')

