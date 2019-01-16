from django.contrib import admin
from index.models import *
# Register your models here.


class GoodsAdmin(admin.ModelAdmin):
    #1.定义搜索字段
    search_fields = ("title",)
    #2.定义过滤器
    list_filter = ("goodsType",)
    #3.显示字段
    list_display = ("title","price","spec")

class UsersAdmin(admin.ModelAdmin):
    list_display = ("uphone","upwd","uemail","uname")

admin.site.register(GoodsType)
admin.site.register(Goods,GoodsAdmin)
admin.site.register(Users,UsersAdmin)


















