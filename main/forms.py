from django.forms import ModelForm
from django.forms.widgets import TextInput
from .models import SiteSettings

class SiteSettingsForm(ModelForm):
    class Meta:
        model = SiteSettings
        fields = '__all__'
        widgets = {
            'color': TextInput(attrs={'type': 'color'}),
            'font_color': TextInput(attrs={'type': 'color'}),
        }