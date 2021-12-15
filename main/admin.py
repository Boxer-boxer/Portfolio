from django.contrib import admin
from .forms import SiteSettingsForm
from .models import SiteSettings, Project, Image

class SiteSettingsAdmin(admin.ModelAdmin):
    form = SiteSettingsForm
    # filter_horizontal = ('questions',)
    fieldsets = [
        (None, {'fields': ['color', 'font_color', 'entry_section_background']})
    ]

class ProjectImageInline(admin.TabularInline):
    model = Image
    extra = 3

class ProjectAdmin(admin.ModelAdmin):
    inlines = [ ProjectImageInline, ]

admin.site.register(SiteSettings, SiteSettingsAdmin)
admin.site.register(Project, ProjectAdmin)