from rest_framework import serializers
from .models import ActiveProject, DummyPeopleModel, PastProject, Papers


class ActiveProjectSerializer(serializers.ModelSerializer):

    project_team = serializers.PrimaryKeyRelatedField(queryset=DummyPeopleModel.objects.all(), many=True)
    project_paper = serializers.PrimaryKeyRelatedField(queryset=Papers.objects.all(), many=True)

    class Meta:

        model = ActiveProject
        fields = ('id', 'project_name', 'project_abstract', 'project_paper', 'project_team', 'project_join_us',)


class PastProjectSerializer(serializers.ModelSerializer):

    past_project_team = serializers.PrimaryKeyRelatedField(queryset=DummyPeopleModel.objects.all(), many=True)
    past_project_paper = serializers.PrimaryKeyRelatedField(queryset=Papers.objects.all(), many=True)

    class Meta:

        model = PastProject
        fields = ('id', 'past_project_name', 'past_project_abstract', 'past_project_paper', 'past_project_team', 'past_project_join_us','past_project_photo', 'past_project_context')


class DummyPeopleModelSerializer(serializers.ModelSerializer):
    project_team = ActiveProjectSerializer(many=True, read_only=True)
    past_project_team = PastProjectSerializer(many=True, read_only=True)

    class Meta:
        model = DummyPeopleModel
        fields = ('id', 'person_name', 'project_team', 'past_project_team')


class PaperSerializer(serializers.ModelSerializer):
    project_paper = ActiveProjectSerializer(many=True, read_only=True)
    past_project_paper = PastProjectSerializer(many=True, read_only=True)

    class Meta:
        model = Papers
        fields = ('id', 'paper_name', 'paper_abstract', 'project_paper', 'past_project_paper')
