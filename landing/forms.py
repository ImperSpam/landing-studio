from django import forms


class CallbackForm(forms.Form):
    name = forms.CharField(max_length=40, required=Truegit )
    mail = forms.EmailField(required=False)
    telegram = forms.CharField(max_length=40, required=False)
    vk = forms.CharField(max_length=40, required=False)
