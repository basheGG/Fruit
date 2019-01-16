/**
 * Created by tarena on 18-11-21.
 */

function check_login() {
    $.get("/check_login/",function (data) {
        if(data.loginStatus == 1){
            //有用户登录：欢迎xxx 退出
            html += "欢迎:"+data.uname;
            html += "<a href='/login/'>退出</a>";
        }else{
            //无用户登录
            html += "<a href='/login/'>[登录]&nbsp</a>"
            html += "<a href='/register/'>[注册,有惊喜]</a>"
        }
        //将html赋值给#fightNav>li:first
        $("#fightNav>li:first").html(html);
    },"json");
}

// 页面加载时要执行的内容
$(document).ready(function () {
    check_login();
});











