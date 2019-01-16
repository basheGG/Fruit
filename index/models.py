from django.db import models

# Create your models here.

#编写GoodsType实体类
class GoodsType(models.Model):
    title = models.CharField(max_length=50,verbose_name="类型名称")
    desc = models.TextField(verbose_name="类型描述")
    picture = models.ImageField(upload_to="static/upload/goodstype",null=True,verbose_name="类型图片")

    def __str__(self):
        return self.title

    class Meta:
        db_table = "goods_type"
        verbose_name = "商品类型"
        verbose_name_plural = verbose_name


class Goods(models.Model):
    title = models.CharField(max_length=50,verbose_name="商品名称")
    price = models.DecimalField(max_digits=7,decimal_places=2,verbose_name="商品价格")
    spec = models.CharField(max_length=20,verbose_name="商品规格")
    picture = models.ImageField(upload_to="static/upload/goods",verbose_name="图片")
    #与商品类型之间的关系
    goodsType = models.ForeignKey(GoodsType,verbose_name="商品类型")
    isActive = models.BooleanField(default=True,verbose_name="是否上架")

    def __str__(self):
        return self.title

    class Meta:
        db_table = "goods"
        verbose_name = "商品"
        verbose_name_plural = verbose_name

#创建用户实体
class Users(models.Model):
    uphone = models.CharField(max_length=11,verbose_name="手机号码")
    upwd = models.CharField(max_length=30,verbose_name="用户密码")
    uemail = models.EmailField(verbose_name="邮箱")
    uname = models.CharField(max_length=30,verbose_name="用户名")
    isActive = models.BooleanField(default=True,verbose_name="是否激活")

    def __str__(self):
        return self.uname

    def __repr__(self):
        return "<Users:%r>" %self.uname

    class Meta:
        db_table = "users"
        verbose_name = "用户"
        verbose_name_plural = verbose_name


#创建购物车实体类
class CartInfo(models.Model):
    #关联关系：关联Users实体(一)
    user = models.ForeignKey(Users)
    #关联关系：关联Goods实体(一)
    good = models.ForeignKey(Goods)
    #商品数量
    ccount = models.IntegerField()

    class Meta:
        db_table = "cartinfo"






