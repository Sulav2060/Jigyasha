from django.db import models

class Posts(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    category = models.CharField(max_length=100, default="general")
    instructor = models.CharField(max_length=100, default="To be announced")  
    rating = models.FloatField(default=5.0)  
    students = models.IntegerField(default=0)  
    image = models.URLField(blank=True, null=True, default="")  
    nextSession = models.DateField(default="2023-10-01")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"Posts: {self.title}"