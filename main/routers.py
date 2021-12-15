from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r'api/projects', views.ProjectRetrieveUpdateDestroyAPIView, basename='projects')