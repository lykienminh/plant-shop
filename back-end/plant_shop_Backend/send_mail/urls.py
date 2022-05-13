from rest_framework import routers
from . import views

router = routers.DefaultRouter(trailing_slash=False)
router.register('mail', views.SendMailAPI, basename='delivery_mail')

urlpatterns = router.urls