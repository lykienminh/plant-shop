from datetime import datetime
from django.http import JsonResponse
from rest_framework import viewsets
from . import messages

# Create your views here.

class JsonResponseHandler:

    @classmethod
    def handle(cls, data=None, error_code=0, message=messages.SUCCESS) -> JsonResponse:
        return JsonResponse(
            data={
                'data': data,
                'error_code': error_code,
                'message': message,
                "current_time": datetime.now(),
            }
        )

class AbstractView(viewsets.GenericViewSet):

    response_handler = JsonResponseHandler