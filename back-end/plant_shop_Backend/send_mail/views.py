import requests
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import action
from utils.views import AbstractView
from django.core.mail import send_mail
from django.conf import settings

# Create your views here.

class SendMailAPI(AbstractView):

    @csrf_exempt
    @action(methods=['POST'], url_path='send', detail=False)
    def send_mail(self, request):
        """
        """

        # request input data
        subject = request.POST['subject']
        message = request.POST['message']

        send_mail(
            subject=subject,
            message=message,
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_HOST_USER],
        )

        return self.response_handler.handle(data='SUCCESS')

    