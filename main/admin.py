from django.contrib import admin
from .forms import SiteSettingsForm
from .models import SiteSettings

class SiteSettingsAdmin(admin.ModelAdmin):
    form = SiteSettingsForm
    # filter_horizontal = ('questions',)
    fieldsets = [
        (None, {'fields': ['color', 'font_color']})
    ]

admin.site.register(SiteSettings, SiteSettingsAdmin)