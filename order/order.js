// 导航栏
$(window).scroll(function() {
	if( $(window).scrollTop() >= 100 ) {
		$(".logo").css({"position":"fixed","z-index":"200"});
		 //$(".right").css({"position":"fixed","z-index":"99"});
		$(".nav").css({"position":"fixed","z-index":"99","width":"100%","top":"0","height":"50px"});
		$(".nav li").css("line-height","50px");
	}else {
		$(".logo").css({"position":"relative","left":"0"});
		//$(".right").css({"position":"relative"});
		$(".nav").css({"position":"relative","height":"70px"});
		$(".nav li").css("line-height","70px");
	}
})
// 登录页关闭
$(".login-close").click(function() {
	$(".login-bg").css("display","none");
	$(".login").css("display","none");
});
// 登录页
$(".enter").click(function() {
	$(".login-bg").css("display","block");
	$(".login").css("display","block");;
})
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
					history.go(0);
					Cookies();
			}
		}
		
	});
	
});

	var user = Cookies.get("user"); 
	if(user !== undefined) {
		$(".header .right").css("display","none");
		$(".ul-r").css("display","block");
		$(".user1").hover(function() {
			$(".user1").css( "border-bottom", "2px solid #535353");
			console.log(11)
			$(".myCenter").slideDown();
		},function() {
			$(".myCenter").slideUp();
		});
	} else {
		$(".header .right").css("display","flex");
		$(".ul-r").css("display","none");
	}
	$(".logout").click(function() {
		Cookies.set("",name);
		// Cookies = "none"	
		// console.log($.removeCookie('user'));
		$(".header .right").css("display","flex");
		$(".ul-r").css("display","none");
	});
	// 手风琴
	$(".left-tit").click(function() {
		console.log(123);
		
	})
	$(".left-tit").each(function() {
		$(this).click(function() {
			console.log($(this).siblings("ul"))
			$(this).next("ul").slideToggle();
		})
	});
	//选项卡
	$(".user-main .left li").click(function() {
		if($(this).hasClass("active")) return;
		
	})
	
	