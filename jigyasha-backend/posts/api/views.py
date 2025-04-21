from ..models import Posts
from rest_framework.viewsets import ModelViewSet
from .serializers import PostSerializer 

class PostViewSet(ModelViewSet):
    queryset = Posts.objects.all()
    serializer_class = PostSerializer  
