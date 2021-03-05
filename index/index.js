// banner
var mySwiper = new Swiper('.swiper-container', {
	loop: true,
	autoplay: { //自动播放
		delay: 5000, //切换的间隔时间
		stopOnLastSlide: false, //最后一个对否停止切换
		disableOnInteraction: false //用户操作是否停止
	},
	pagination: {
		el: '.swiper-pagination',
		clickable :true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});
// 选项卡
$(".center-top li").click(function() {
	console.log(1);
	if ($(this).hasClass("show")) return;
	$(this).addClass("show").siblings(".show").removeClass("show");
	$(".product-list").hide().eq($(this).index()).show();
	//$(".product-list").eq($(".center-top li").index(this)).addClass("stimulate").siblings().removeClass('stimulate');
});
// 左侧边栏
//当滚动条的位置处于距顶部400像素以下时，跳转链接出现，否则消失

$(window).scroll(function() {
	if ($(window).scrollTop() > 400) {
		$(".left-sort").fadeIn();
	} else {
		$(".left-sort").fadeOut();
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 500) {
		$(".no1 em").addClass("action");
		$(".no1 em").css("display", "block");
		$(".no1 span").css("display", "none");
	} else {
		$(".no1 em").removeClass("action");
		$(".no1 em").css("display", "none");
		$(".no1 span").css("display", "inline-block");
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 700) {
		$(".no1 em").removeClass("action");
		$(".no1 em").css("display", "none");
		$(".no1 span").css("display", "inline-block");
		$(".no2 em").addClass("action");
		$(".no2 em").css("display", "block");
		$(".no2 span").css("display", "none");
	} else {
		$(".no2 em").css("display", "none");
		$(".no2 span").css("display", "inline-block");
		$(".no2 em").removeClass("action");
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 1200) {
		$(".no2 em").removeClass("action");
		$(".no2 em").css("display", "none");
		$(".no2 span").css("display", "inline-block");
		$(".no3 em").addClass("action");
		$(".no3 em").css("display", "block");
		$(".no3 span").css("display", "none");
	} else {
		$(".no3 em").removeClass("action");
		$(".no3 em").css("display", "none");
		$(".no3 span").css("display", "inline-block");
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 1800) {
		$(".no3 em").removeClass("action");
		$(".no3 em").css("display", "none");
		$(".no3 span").css("display", "inline-block");
		$(".no4 em").addClass("action");
		$(".no4 em").css("display", "block");
		$(".no4 span").css("display", "none");
	} else {
		$(".no4 em").removeClass("action");
		$(".no4 em").css("display", "none");
		$(".no4 span").css("display", "inline-block");
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 2300) {
		$(".no4 em").removeClass("action");
		$(".no4 em").css("display", "none");
		$(".no4 span").css("display", "inline-block");
		$(".no5 em").addClass("action");
		$(".no5 em").css("display", "block");
		$(".no5 span").css("display", "none");
	} else {
		$(".no5 em").removeClass("action");
		$(".no5 em").css("display", "none");
		$(".no5 span").css("display", "inline-block");
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 2900) {
		$(".no5 em").removeClass("action");
		$(".no5 em").css("display", "none");
		$(".no5 span").css("display", "inline-block");
		$(".no6 em").addClass("action");
		$(".no6 em").css("display", "block");
		$(".no6 span").css("display", "none");
	} else {
		$(".no6 em").removeClass("action");
		$(".no6 em").css("display", "none");
		$(".no6 span").css("display", "inline-block");
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 3600) {
		$(".no6 em").removeClass("action");
		$(".no6 em").css("display", "none");
		$(".no6 span").css("display", "inline-block");
		$(".no7 em").addClass("action");
		$(".no7 em").css("display", "block");
		$(".no7 span").css("display", "none");
	} else {
		$(".no7 em").removeClass("action");
		$(".no7 em").css("display", "none");
		$(".no7 span").css("display", "inline-block");
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 4000) {
		$(".no7 em").removeClass("action");
		$(".no7 em").css("display", "none");
		$(".no7 span").css("display", "inline-block");
		$(".no8 em").addClass("action");
		$(".no8 em").css("display", "block");
		$(".no8 span").css("display", "none");
	} else {
		$(".no8 em").removeClass("action");
		$(".no8 em").css("display", "none");
		$(".no8 span").css("display", "inline-block");
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 4700) {
		$(".no8 em").removeClass("action");
		$(".no8 em").css("display", "none");
		$(".no8 span").css("display", "inline-block");
		$(".no9 em").addClass("action");
		$(".no9 em").css("display", "block");
		$(".no9 span").css("display", "none");
	} else {
		$(".no9 em").removeClass("action");
		$(".no9 em").css("display", "none");
		$(".no9 span").css("display", "inline-block");
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 5300) {
		$(".no9 em").removeClass("action");
		$(".no9 em").css("display", "none");
		$(".no9 span").css("display", "inline-block");
		$(".no10 em").addClass("action");
		$(".no10 em").css("display", "block");
		$(".no10 span").css("display", "none");
	} else {
		$(".no10 em").removeClass("action");
		$(".no10 em").css("display", "none");
		$(".no10 span").css("display", "inline-block");
	}
});
$(window).scroll(function() {
	if ($(window).scrollTop() > 5800) {
		$(".no10 em").removeClass("action");
		$(".no10 em").css("display", "none");
		$(".no10 span").css("display", "inline-block");
		$(".no11 em").addClass("action");
		$(".no11 em").css("display", "block");
		$(".no11 span").css("display", "none");
	} else {
		$(".no11 em").removeClass("action");
		$(".no11 em").css("display", "none");
		$(".no11 span").css("display", "inline-block");
	}
});
function scrollTo(ele, speed){
	if(!speed) speed = 300;
	if(!ele){
		$("html,body").amate({scrollTop:0},speed);
	}else{
		if(ele.length>0) $("html,body").animate({scrollTop:$(ele).offset().top},speed);
	}
	return false;
}
$(".no1").click(function() {
	 scrollTo(".no1");
})


$(window).scroll(function() {
	if($(window).scrollTop() >= 6700 ) {
		$(".left-sort").css("opacity","0");
	}else {
		$(".left-sort").css("opacity","1");
	}
})

// 右侧边栏
$(window).scroll(function() {
	if ($(window).scrollTop() >= 300) {
		$(".sort").fadeIn(1000);
	} else {
		$(".sort").hide();
	}
});
$(".gotop").click(function() {
	$('body,html').animate({scrollTop:0},500);
});
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
	})

// console.log(Cookies.get(name));

	
	
	
	/* $(".btn-login").click(function() {
		
		var phone = $(".phone input").val();
		var code = $(".code input").val();
		var userName = $(".user-name input").val();
		var pwd = $(".pwd input").val();
		if(!$(".phone-login").css("display") === 'none'){
		
		
	}) */
	