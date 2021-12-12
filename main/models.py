from django.db import models
from django.core.exceptions import ValidationError
# Create your models here.

class SiteSettings(models.Model):
    color = models.CharField(max_length=7)
    font_color = models.CharField(max_length=7)
    
    def __str__(self):
        return "Site Settings"
    
    def save(self, *args, **kwargs):
        if not self.pk and SiteSettings.objects.exists():
            raise ValidationError('There is can be only one SiteSettings instance')
        return super(SiteSettings, self).save(*args, **kwargs)