from django.contrib import admin
from .forms import SiteSettingsForm
from .models import SiteSettings, Project, Image, Experience, Language, AboutMe

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

class ExperienceAdmin(admin.ModelAdmin):
    model = Experience

class LanguageAdmin(admin.ModelAdmin):
    model = Language
    
class AboutMeAdmin(admin.ModelAdmin):
    model = AboutMe

admin.site.register(SiteSettings, SiteSettingsAdmin)
admin.site.register(Project, ProjectAdmin)
admin.site.register(Experience, ExperienceAdmin)
admin.site.register(Language, LanguageAdmin)
admin.site.register(AboutMe, AboutMeAdmin)