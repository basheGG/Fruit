from django import forms
from django.forms import PasswordInput
from index.models import Users

class LoginForm(forms.ModelForm):
    class Meta:
        #指定实体类
        model = Users
        #指定生成控件的属性
        fields = ["uphone","upwd"]
        #指定每个控件对应的label
        labels = {
            "uphone":"手机号",
            "upwd":"密码",
        }
        #指定控件对应的小部件
        widgets = {
            "uphone":forms.TextInput(
                attrs={
                    "class":"form-control",
                }
            ),
            "upwd":forms.PasswordInput(
                attrs={
                    "class":"form-control",
                    "placeholder":"请输入6-20位的字符"
                }
            )
        }

