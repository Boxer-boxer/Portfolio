from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'api/projects', views.ProjectRetrieveUpdateDestroyAPIView, basename='projects')
router.register(r'api/experience', views.ExperienceRetrieveUpdateDestroyAPIView, basename='experience')
router.register(r'api/language', views.LanguageRetrieveUpdateDestroyAPIView, basename='languages')
router.register(r'api/aboutme', views.AboutMeRetrieveUpdateDestroyAPIView, basename='about_me')