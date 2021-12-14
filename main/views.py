from django.shortcuts import render
from django.http import JsonResponse
from .models import SiteSettings

def home(request):
    return render(request, 'main/vue-test.html')

def site_settings(request):
    data = SiteSettings.objects.all().values('color', 'font_color', 'entry_section_background')
    print(data)
    return JsonResponse(list(data), safe=False)
    #return render(request, 'main/vue-test.html', { "data" : data })