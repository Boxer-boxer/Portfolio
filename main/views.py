from django.shortcuts import render
from django.http import JsonResponse
from .models import SiteSettings, Project
from .serializers import ProjectSerializer
from rest_framework import viewsets

def home(request):
    return render(request, 'main/vue-test.html')

def site_settings(request):
    data = SiteSettings.objects.all().values('color', 'font_color', 'entry_section_background')
    return JsonResponse(list(data), safe=False)
    
class ProjectRetrieveUpdateDestroyAPIView(viewsets.ModelViewSet):
    serializer_class  = ProjectSerializer
    queryset = Project.objects.all()
   