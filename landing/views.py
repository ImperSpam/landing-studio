from django.shortcuts import render
from landing.forms import CallbackForm
from .models import Request


def index(request):
    if request.POST:
        form = CallbackForm(request.POST)
        if form.is_valid():
            data = form.cleaned_data
            Request.objects.create(name=data['name'], mail=data['mail'], telegram=data['telegram'], vk=data['vk'])
    form = CallbackForm()
    context = {'form': form}
    return render(request, "index.html", context)
