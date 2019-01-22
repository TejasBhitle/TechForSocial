from rest_framework import serializers
from .models import ActiveProject, DummyPeopleModel, Papers


class ActiveProjectSerializer(serializers.ModelSerializer):

    # project_team = serializers.PrimaryKeyRelatedField(queryset=DummyPeopleModel.objects.all(), many=True)
    project_paper = serializers.PrimaryKeyRelatedField(queryset=Papers.objects.all(), many=True)

    class Meta:

        model = ActiveProject
        fields = ('id', 'project_name', 'project_abstract', 'project_paper', 'project_team', 'project_join_us', 'project_photo', 'project_context', 'is_past')


class DummyPeopleModelSerializer(serializers.ModelSerializer):
    project_team = ActiveProjectSerializer(many=True, read_only=True)


    class Meta:
        model = DummyPeopleModel
        fields = ('id', 'person_name', 'project_team',)


class PaperSerializer(serializers.ModelSerializer):
    project_paper = ActiveProjectSerializer(many=True, read_only=True)


    class Meta:
        model = Papers
        fields = ('id', 'paper_name', 'paper_abstract', 'project_paper',)
