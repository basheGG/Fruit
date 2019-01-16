from django.conf.urls import url
from .views import *

urlpatterns = [
    # url(r"^01-index/$",index_views),
    url(r"^$",index_views),

    url(r"^login/$",login_views,name="login"),

    url(r"^register/$",register_views,name="register"),

    url(r"^check_login/$",check_login_views),

    url(r"^logout/$",logout_views)


]