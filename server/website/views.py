from django.contrib.auth import authenticate, login, password_validation
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError
from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.views.generic import FormView
from app_auth.models import User
from .forms import AuthForm


def index(request):
    if not request.user.is_authenticated:
        return render(request, 'website/index.html')

    if request.user.isParent:
        return HttpResponseRedirect('/c/')

    return render(request, 'app/index.html')


class LoginView(FormView):
    form_class = AuthForm
    success_url = '/'
    template_name = 'website/login.html'

    def post(self, request, *args, **kwargs):
        form = self.get_form()
        if not form.is_valid():
            return self.form_invalid(form)

        email = form.cleaned_data.get('email')
        password = form.cleaned_data.get('password')
        user = authenticate(self.request, username=email, password=password)
        if user is None:
            form.add_error(None, Exception('Invalid credentials'))
            return self.form_invalid(form)

        login(self.request, user)
        return self.form_valid(form)


class SignupView(FormView):
    form_class = AuthForm
    success_url = '/'
    template_name = 'website/signup.html'

    def post(self, request):
        form = self.get_form()
        if not form.is_valid():
            return self.form_invalid(form)

        email = form.cleaned_data['email']
        password = form.cleaned_data['password']

        try:
            User.objects.get(email=email)
            form.add_error(None, Exception('Email address already in use'))
            return self.form_invalid(form)
        except User.DoesNotExist:
            try:
                validate_password(password)
            except ValidationError as error:
                form.add_error('password', error)
                return self.form_invalid(form)

            User.objects.create_user(email, email, password)
            user = authenticate(
                self.request,
                username=email,
                password=password
            )
            login(self.request, user)
            return self.form_valid(form)
