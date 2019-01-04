from rest_framework.serializers import ModelSerializer
from .models import FAQ

class FAQSerializer(ModelSerializer):
    class Meta:
        model = FAQ
        fields = ('question', 'answer')
