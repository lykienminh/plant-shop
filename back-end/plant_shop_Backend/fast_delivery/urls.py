from rest_framework import routers
from . import views

router = routers.DefaultRouter(trailing_slash=False)
router.register('delivery', views.DeliveryAPI, basename='delivery')

urlpatterns = router.urls