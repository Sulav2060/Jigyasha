from django import forms
from .models import NewsletterSubscriber

class SubscriptionForm(forms.ModelForm):
    class Meta:
        model = NewsletterSubscriber
        fields = ['email']
        widgets = {
            'email': forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Enter your email'}),
        }
        labels = {
            'email': '',  # Remove label for cleaner UI
        }