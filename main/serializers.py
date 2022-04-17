from pyexpat import model
from rest_framework import serializers
from .models import Project, Image, Experience, Language

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = "__all__"

class ProjectSerializer(serializers.ModelSerializer):
    images = ImageSerializer(source="project_image", many=True)
    
    class Meta:
        model = Project
        fields = "__all__"

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = '__all__'
        

class LanguageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Language
        fields = '__all__'