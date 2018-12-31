from django.forms import ModelForm
from .models import Brand


class BrandForm(ModelForm):
    class Meta:
        model = Brand
        fields = ['companyName', 'logoFile', 'watermarkFile']
