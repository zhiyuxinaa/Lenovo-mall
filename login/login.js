// 选项卡
$(".btn-toggle").click(function() {
	$(".phone-login").toggle();
	$(".user").toggle();
	$(".log-user").toggle();
	$(".log-code").toggle();
});
$(".login_switch").click(function() {
	$(".login_scan_tip").toggle();
	$(".login_pp_tip").toggle();
	$(".login_scan").toggle();
	$(".login-content").toggle();
	
});
// 错误信息
$(`
	<i></i>
	<p></p>
`).appendTo(".error");
var userList = JSON.parse(sessionStorage.getItem("data")).userList;
// var box = /^1\d{10}$/;
var codes = ["0","1","2","3","4","5","6","7","8","9"];
$(".code button").click(function() {
	var codeStr = '';
	for (var i = 1; i < 7; i++) {
		codeStr += codes[Math.floor(Math.random() * codes.length)]
	}
	this.innerText = codeStr;
});
userList.forEach(function(item) {

	$(".btn-login").click(function() {
		if($(".phone-login").css("display") !== 'none') {
			if( $(".phone input").val() === ''  || item.phone !== $(".phone input").val() ) {
				$(".error p").text("手机号格式不正确");
				$(".error i").css("display","block");
			}else if(item.phone !== $(".phone input").val()) {
				$(".error p").text("");
				$(".error i").css("display","none");
			} else if($(".code button").text() == $(".code input").val()) {
				$(".error p").text("");
				$(".error i").css("display","none");
			}else if($(".code input").val() === '' || $(".code button").text() !== $(".code input").val()) {
				$(".error p").text("验证码不正确");
				$(".error i").css("display","block");
			} else  {
				history.go(0);
			}
		}else {
			if($(".user-name input").val() === '' || !$(".user-name input").val() === item.name ) {
				$(".error p").text("用户名不正确");
				$(".error i").css("display","block");
			} else if($(".user-name input").val() === item.name) {
				$(".error p").text("");
				$(".error i").css("display","none");
			}else if($(".pwd input").val() === '' || $(".pwd input").val() !== item.pwd) {
				$(".error p").text("密码不正确");
				$(".error i").css("display","block");
			} else {
					Cookies.set("user",name);
					var backUrl = Cookies.remove("backUrl");
					window.location.replace(backUrl || '../index/index.html');
					// history.go(0);
					Cookies();
			}
		}
		
	});
	
});

	