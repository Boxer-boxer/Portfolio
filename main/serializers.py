from rest_framework import serializers
from .models import Project, Image

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = "__all__"

class ProjectSerializer(serializers.ModelSerializer):
    images = ImageSerializer(source="project_image", many=True)
    
    class Meta:
        model = Project
        fields = "__all__"
