from django.contrib import admin
from .forms import SiteSettingsForm
from .models import SiteSettings, Project

class SiteSettingsAdmin(admin.ModelAdmin):
    form = SiteSettingsForm
    # filter_horizontal = ('questions',)
    fieldsets = [
        (None, {'fields': ['color', 'font_color', 'entry_section_background']})
    ]

admin.site.register(SiteSettings, SiteSettingsAdmin)
admin.site.register(Project)