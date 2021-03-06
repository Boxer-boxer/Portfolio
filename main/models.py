from django.db import models
from django.core.exceptions import ValidationError
from tinymce.models import HTMLField
from django.conf import settings
# Create your models here.

upload_project_img_path = 'images/'

class SiteSettings(models.Model):
    color = models.CharField(max_length=7)
    font_color = models.CharField(max_length=7)
    entry_section_background = models.ImageField(upload_to=upload_project_img_path, default="")
    
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
    
class Image(models.Model):
    name = models.CharField(max_length=255)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name="project_image")
    image = models.ImageField(upload_to=upload_project_img_path)
    thumbnail = models.BooleanField(default=False)

class Experience(models.Model):
    name = models.CharField(max_length=455)
    job = models.CharField(max_length=455)
    start_date = models.CharField(max_length=455)
    end_date = models.CharField(max_length=455)
    
class Language(models.Model):
    name = models.CharField(max_length=455)
    image = models.ImageField(upload_to=upload_project_img_path)

class AboutMe(models.Model):
    image = models.ImageField(upload_to=upload_project_img_path)
    image_shadow = models.ImageField(upload_to=upload_project_img_path)
    content = HTMLField()