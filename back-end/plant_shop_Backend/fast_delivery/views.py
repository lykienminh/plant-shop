import requests
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import action
from utils.views import AbstractView

# Create your views here.

class DeliveryAPI(AbstractView):

    @csrf_exempt
    @action(methods=['POST'], url_path='create', detail=False)
    def create_order(self, request):
        """
        """
        testing_ghn_url = 'https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/create'
        shop_token = '979751ea-c3b6-11ec-ac64-422c37c6de1b'
        shop_id = '111768'
        
        # request input data
        client_name = request.POST['client_name']
        client_phone_number = "0986390396"
        client_address = "Điện Biên Phủ, TP Trà Vinh, Trà Vinh"
        client_district_id = 2091 #Thành phố Trà Vinh
        client_ward_code = "580301" #Phường 6
        order_weight = 2000 #gram
        order_length = 30 #cm
        order_width = 30 #cm
        order_height = 100 #cm
        service_type_id = 1 #express
        service_id = 53320 #Bay
        payment_type_id = 2 
        required_note = "CHOXEMHANGKHONGTHU"
        product_name = request.POST['product_name']
        product_quantity = int(request.POST['product_quantity'])
        product_price = int(request.POST['product_price'])
        product_weight = int(request.POST['product_weight'])

        item_content = {
            "name": product_name,
            "quantity": product_quantity,
            "price": product_price,
            "weight": product_weight,
        }

        data = {
            'to_name' : client_name,
            'to_phone' : client_phone_number,
            'to_address' : client_address,
            'to_ward_code' : client_ward_code,
            'to_district_id' : client_district_id,
            'weight' : order_weight,
            'length' : order_length,
            'width' : order_width,
            'height' : order_height,
            'service_type_id' : service_type_id,
            'service_id' : service_id,
            'payment_type_id' : payment_type_id,
            'required_note' : required_note,
            'items': [item_content],
            'cod_amount': product_price,
        }

        data = json.dumps(data)

        headers = {
            'Content-type': 'application/json; charset=UTF-8',
            'ShopID': shop_id,
            'Token': shop_token,
        }

        r = requests.post(testing_ghn_url, headers=headers, data=data)

        result = r.json()

        return self.response_handler.handle(data=result)

    @csrf_exempt
    @action(methods=['POST'], url_path='get', detail=False)
    def get_order(self, request):
        """
        """
        testing_ghn_url = 'https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail'
        shop_token = '979751ea-c3b6-11ec-ac64-422c37c6de1b'
        
        # request input data
        order_code = request.POST.get('order_code')

        data = {
            'order_code' : order_code,
        }

        data = json.dumps(data)

        headers = {
            'Content-type': 'application/json; charset=UTF-8',
            'Token': shop_token,
        }

        r = requests.post(testing_ghn_url, headers=headers, data=data)

        result = r.json()

        return self.response_handler.handle(data=result)
    
    @csrf_exempt
    @action(methods=['POST'], url_path='update', detail=False)
    def update_order(self, request):
        """
        """
        update_product_fields = [
            'product_name', 'product_quantity', 
            'product_price', 'product_weight',
        ]

        testing_ghn_url = 'https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/update'
        shop_token = '979751ea-c3b6-11ec-ac64-422c37c6de1b'
        shop_id = '111768'
        
        data = dict()
        items = dict()
        # request input data
        if 'order_code' in request.POST:
            data['order_code'] = request.POST['order_code']
        if 'client_name' in request.POST:
            data['to_name'] = request.POST['client_name']
        if 'client_phone_number' in request.POST:
            data['to_phone_number'] = request.POST['client_phone_number']
        if 'client_address' in request.POST:
            data['to_address'] = request.POST['client_address']
        if any(field in update_product_fields for field in request.POST):
            data['items'] = [items]
            if 'product_name' in request.POST:
                items['name'] = request.POST['product_name']
            if 'product_quantity' in request.POST:
                items['quantity'] = int(request.POST['product_quantity'])
            if 'product_price' in request.POST:
                items['price'] = int(request.POST['product_price'])
            if 'product_weight' in request.POST:
                items['weight'] = int(request.POST['product_weight'])
        
        data = json.dumps(data)

        headers = {
            'Content-type': 'application/json; charset=UTF-8',
            'ShopID': shop_id,
            'Token': shop_token,
        }

        r = requests.post(testing_ghn_url, headers=headers, data=data)

        result = r.json()

        return self.response_handler.handle(data=result)
    
    @csrf_exempt
    @action(methods=['POST'], url_path='cancel', detail=False)
    def cancel_order(self, request):
        """
        """
        testing_ghn_url = 'https://dev-online-gateway.ghn.vn/shiip/public-api/v2/switch-status/cancel'
        shop_token = '979751ea-c3b6-11ec-ac64-422c37c6de1b'
        
        # request input data
        order_code = request.POST.get('order_code')

        data = {
            'order_codes' : [order_code],
        }

        data = json.dumps(data)

        headers = {
            'Content-type': 'application/json; charset=UTF-8',
            'Token': shop_token,
        }

        r = requests.post(testing_ghn_url, headers=headers, data=data)

        result = r.json()

        return self.response_handler.handle(data=result)