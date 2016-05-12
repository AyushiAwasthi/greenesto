from django import forms


class PVForm(forms.Form):
    pincode = forms.IntegerField()
    system_load = forms.IntegerField()
    roof_area = forms.IntegerField()
