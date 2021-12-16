from django.db import models
from django.core.exceptions import ValidationError
from tinymce.models import HTMLField
from django.conf import settings
# Create your models here.

class SiteSettings(models.Model):
    color = models.CharField(max_length=7)
    font_color = models.CharField(max_length=7)
    entry_section_background = models.ImageField(upload_to="static/img", default="")
    
    def __str__(self):
        return "Site Settings"
    
    def save(self, *args, **kwargs):
        if not self.pk and SiteSettings.objects.exists():
            raise ValidationError('There is can be only one SiteSettings instance')
        return super(SiteSettings, self).save(*args, **kwargs)

class Project(models.Model):
    project_name = models.CharField(max_length=250)
    project_subtitle = models.CharField(max_length=450)
    project_description = HTMLField()
    
    def __str__(self):
        return self.project_name

if settings.DEBUG == False:
    upload_project_img_path = './../var/static_root/img/projects'
else :
    upload_project_img_path = 'static/img/projects'
    
class Image(models.Model):
    name = models.CharField(max_length=255)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="project_image")
    image = models.ImageField(upload_to=upload_project_img_path)
    thumbnail = models.BooleanField(default=False)
