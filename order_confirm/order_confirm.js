var cid = parseInt(window.location.search.slice(window.location.search.indexOf('=') + 1));
console.log(cid)
var productList = JSON.parse(sessionStorage.getItem('data')).productList.find(function(item) {
	return item.id === cid;
});
var name = productList.name;
var brief = productList.brief;
var price = productList.price;
var avatar = productList.avatar;
$(`
	<img src="${avatar}">
	<div class="proInfo">
		<div>
			<p class="name">${name}</p>
			<span class="price">￥${price}</span>
			<span class="num">x1</span>
		</div>
		<p class="brief">${brief}</p>
	</div>
`).appendTo(".product li");
// 选项卡
$(".promotionTabs .left li").click(function() {
	if($(this).hasClass("active")) return;
	$(this).addClass("active").siblings(".active").removeClass("active");
	$(".test").hide().eq($(this).index()).show();
});
$(".couponsDiv span").click(function() {
	if($(this).hasClass("active")) return;
	$(this).addClass("active").siblings(".active").removeClass("active");
	$(".couponsInfo").hide().eq($(this).index()).show();
});
$(".totalPrice").text("￥" + `${price}`);
$(".shiFuKuan .settlementListPrice").text("￥" + `${price}`);
// 
$(".close").click(function() {
	$(".mask").css("display","none");
	$(".dialog").css("display","none");
});
$(".btn-res").click(function() {
	$(".mask").css("display","none");
	$(".dialog").css("display","none");
});
$(".address").click(function() {
	$(".mask").css("display","block");
	$(".dialog").css("display","block");
});
// 提交
$(".submitBtn").click(function() {
	location.assign("../pay/pay.html");
});
/* 动态渲染地址 */
var addressList = JSON.parse(sessionStorage.getItem("data")).addressList
var userAddressList = addressList.filter(function(item){ return item.name;})
userAddressList.forEach(function(item) {
	$(`
		<li class="${item.isDefault ?" default" : ""}">
			<p class="customerName">${item.receiveName}</p>
			<p class="phoneNum">${item.receivePhone}</p>
			<p class="addressInfo">${item.receiveRegion},${item.receiveAddress}</p>
			<a class="delAddress fr">修改</a>
			<a class="editAddress fr">删除</a>
		</li>
	`).appendTo(".address-list");
})
// 地址选择
$("li.default").addClass("select")
$(".address-list li").click(function() {
	$(this).addClass("select");
	$(this).siblings().removeClass("select");
});

// 新增

$(".xin input").click(function() {
	$(this).next().css("display","none")
})
$(".col").click(function() {
	$(this).next().css("display","none")
})
$(".btn-ok").click(function() {
	var address = {
		receiveName:$(".user-name input").val(),
		receivePhone:$(".phone input").val(),
		receiveRegion:$(".input").val(),
		receiveAddress:$(".col textarea").val()
	}
	addressList.push(address);
	sessionStorage.setItem('data',JSON.stringify(data));
	$(`
		<li>
			<p class="customerName">${address.receiveName}</p>
			<p class="phoneNum">${address.receivePhone}</p>
			<p class="addressInfo">${address.receiveRegion},${address.receiveAddress}</p>
			<a class="delAddress fr">修改</a>
			<a class="editAddress fr">删除</a>
		</li>
	`).appendTo(".address-list");
	$(".mask").css("display","none");
	$(".dialog").css("display","none");
	// 删除
	$(".editAddress").click(function() {
		console.log(123)
		$(this).parent().remove();
	});
});
