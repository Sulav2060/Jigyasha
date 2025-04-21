from rest_framework import serializers
from ..models import Posts

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Posts
        fields = [
            'id', 'title', 'content', 'category', 'instructor', 
            'rating', 'students', 'image', 'nextSession', 
            'created_at', 'updated_at'
        ]