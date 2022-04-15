import requests
import json
import uuid
import codecs
import hmac
import hashlib
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import action
from utils.views import AbstractView

# Create your views here.

class MomoAPI(AbstractView):

    @csrf_exempt
    @action(methods=['POST'], url_path='test', detail=False)
    def first(self, request):
        """
        """
        momo_url = 'https://test-payment.momo.vn/v2/gateway/api/create'
        partnerCode = 'MOMO6PQL20220416'
        accessKey = 'vQZBuqXFTtNMNnJK'
        secretKey = 'Meku0fGZ3LrAhivlcXrBRx3xJQbs0xnU'
        requestId = str(uuid.uuid4())
        amount = '1000'
        orderId = str(uuid.uuid4())
        orderInfo = 'info'
        redirectUrl = 'https://momo.vn'
        ipnUrl = 'https://momo.vn'
        requestType = 'captureWallet'
        extraData = ''

        rawSignature = "accessKey="+accessKey+"&amount="+amount+"&extraData="+extraData+"&ipnUrl="+ipnUrl+"&orderId="+orderId+"&orderInfo="+orderInfo+"&partnerCode="+partnerCode+"&redirectUrl="+redirectUrl+"&requestId="+requestId+"&requestType="+requestType

        h = hmac.new(codecs.encode(secretKey), codecs.encode(rawSignature), hashlib.sha256)
        signature = h.hexdigest()

        data = {
            'partnerCode' : partnerCode,
            'partnerName' : 'Plant',
            'storeId' : 'PlantStore',
            'requestId' : requestId,
            'amount' : int(amount),
            'orderId' : orderId,
            'orderInfo' : orderInfo,
            'redirectUrl' : redirectUrl,
            'ipnUrl' : ipnUrl,
            'lang' : 'en',
            'extraData' : extraData,
            'requestType' : requestType,
            'signature' : signature,
        }

        data = json.dumps(data)

        headers = {'Content-type': 'application/json; charset=UTF-8'}

        r = requests.post(momo_url, headers=headers, data=data)

        result = r.json()

        return self.response_handler.handle(data={'payUrl': result['payUrl']})