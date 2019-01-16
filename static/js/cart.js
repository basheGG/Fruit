$(function(){
	countItem();
	//1.全选和取消全选
	var isTrue = false;
	$("#checkall").click(function(){
		isTrue = !isTrue;
		if(isTrue){
			//选中操作checked = "true"
			//获取所有商品的选择框,设置选中属性
			//prop()类似于attr(),为元素设置属性
			$("[name=check]").prop("checked","true");
		}else{
			//取消反选
			$("[name=check]").removeAttr("checked");
		}
	});

	//2.通过商品选择框反选操作全选按钮
	$("[name=check]").click(function(){
		//input:checked表示匹配被选中的元素
		if($("input[name=check]").not("input:checked").size()<=0){//获取未被选中的元素个数，判断是否小于等于0
			//全选按钮也应该是选中状态
			$("#checkall").prop("checked",true);
			//标记全选按钮的状态
			isTrue = true;
		}else{
			//存在未勾选的元素
			$("#checkall").prop("checked",false);
			isTrue = false;
//			$("#checkall").removeAttr("checked");
		}

	});

	//3.数量操作
	$(".increment").click(function(){
		//点击+,操作输入框
		var value = $(this).prev().val();
		//数值自增之后重新赋给输入框显示
		$(this).prev().val(++value);
		//价格联动
		//通过层级结构获取当前商品的价格
		var priceStr = $(this).parent().prev().text();//单价
		//截取字符串获取价格
		var price = Number(priceStr.substring(1,priceStr.length));
		//获取小计
        $(this).parent().next().html("<strong>&yen;"+value*price+"</strong>");
		countItem();

	});

	$(".decrement").click(function(){
		if($(this).next().val()>1){
			//数量大于1做--操作
			var value = $(this).next().val();
			$(this).next().val(--value);
			//价格联动
			//通过层级结构获取当前商品的价格
			var priceStr = $(this).parent().prev().text();//单价
			//截取字符串获取价格
			var price = Number(priceStr.substring(1,priceStr.length));
			//获取小计
			 $(this).parent().next().html("<strong>&yen;"+value*price+"</strong>");
		}else{
			//将当前商品移除
			$(this).parent().parent().remove();
		}
		countItem();
	});

	//4.移除按钮操作
	$(".removeItem").click(function(){
		//移除当前的商品
		$(this).parent().parent().remove();
	});

	//5.动态修改商品数量，实现价格联动
	//输入框失去焦点时，修改商品价格
	$("[name=count]").blur(function(){
		var value = $(this).val();
		if(isNaN(value) != "NaN"){
			//如果输入非法字符，重新获取焦点
			//可以显示红线提示
		}else{
			//操作价格
			//通过层级结构获取当前商品的价格
			var priceStr = $(this).parent().prev().text();//单价
			//截取字符串获取价格
			var price = Number(priceStr.substring(1,priceStr.length));
			//获取小计
			$(this).parent().next().html("<strong>&yen;"+value*price+"</strong>");
		}
		//调整总数量和总价格
		countItem();
	});
	//6.总数量和总价格变动
	function countItem(){
		//各类商品的数量值和总价
		//获取各类商品的总数
		var sum = 0;
		$("[name=count]").each(function(){
			//遍历所有的name=count的输入框，做取值相加
			sum += Number($(this).val());
		});
		//获取所有商品的总价格 
		var priceSum = 0;
		$(".t-sum strong").each(function(){
			var priceStr = $(this).text();
			var price = Number(priceStr.substring(1,priceStr.length));
			priceSum += price;
		});

		//在页面底部显示数量和价格
		$(".submit-count span").html(sum);
		$(".submit-price span").html("&yen;"+priceSum);
	}
	

});


















