var cid = parseInt(window.location.search.slice(window.location.search.indexOf('=') + 1));
console.log(window.location.search.slice(window.location.search.indexOf('=') + 1));
var productList = JSON.parse(sessionStorage.getItem("data")).productList.filter(function(item) {
	return item.cid === cid;
	console.log(item.cid)
});
var cartList = JSON.parse(sessionStorage.getItem("data")).cartList;
var data = JSON.parse(sessionStorage.getItem("data"));
console.log(productList)
var productList = data.productList;
var cartList = data.cartList;
cartList.forEach(function(item) {
	var product = productList.find(function(item2) {
		return item2.id == item.pid
	});
	console.log(product.id)
	console.log(product);
	$(
		`
	<tr data-id="${ item.id}" data-checked="1" data-price="${product.price}" data-count="${ item.count}">
		<td width="57"><a href="javascript:void(0)" class="checkbox checked"></a></td>
		<td width="148" class="p-img">
			<a><img src="${product.avatar}"></a>
		</td>
		<td width="257" class="name" style="text-align:left"><a>${product.name}</a></td>
		<td width="163"></td>
		<td width="152" class="price">${product.price}</td>
		<td width="152">
			<label>
				<input type="button" value="-" class="btn-less">
				<input type="text" value="${item.count}" class="count">
				<input type="button" value="+" class="btn-add">
			</label>
		</td>
		<td width="152" class="xiaoji">${product.price * item.count} </td>
		<td width="117">
		<a style="display:block" class="remove">删除</a>
		<a>移入收藏夹</a>
		</td>
	</tr>
	
`
	).prependTo(".product-list ");
	zong();
	// 结算
	$(".bc-probtn a").click(function() {
		console.log(123)
		$(".bc-probtn a").attr("href", "../order_confirm/order_confirm.html?" + `cid=${product.id}`);

	})
});

// 加
$(".btn-add").each(function() {
	var total = $td;
	var $tr = $(this).parent().parent().parent();
	var $td = $tr.children(".price");
	$(this).click(function() {
		$(this).prev().val(parseInt($(this).prev().val()) + 1);
		/* if (parseInt($(this).prev().val()) === 5) {
			$(this).attr("disabled", true);
		}else {
			$(this).attr("disabled", false);
		} */

		total = parseInt($td.text()) * parseInt($(this).prev().val());
		$tr.children(".xiaoji").html(total);
		zong();
	});

});
// 减
$(".btn-less").each(function() {
	var $tr = $(this).parent().parent().parent();
	var $td = $tr.children(".price");
	// $(this).attr("disabled", true);
	$(this).click(function() {
		$(this).next().val(parseInt($(this).next().val()) - 1);
		var value = $(this).next().val();
		if (parseInt($(this).next().val()) <= 0) {
			value = 1;
		}
		$(this).next().val(value);

		total = parseInt($td.text()) * parseInt($(this).next().val());
		$tr.children(".xiaoji").html(total);
		zong();
	});
	zong();
	/* if (parseInt($(this).next().val()) === 1) {
		$(this).attr("disabled", true);
	}else {
		$(this).attr("disabled", false);
	} */

});

// 全选

// console.log($("a.checkbox.all"))

(function() {
	// var count = 0;
	// 单选
	$(".product-list tr a.checkbox").each(function() {
		console.log(123)
		$(this).click(function() {
			var checked = $(this).hasClass("checked");
			$(this).toggleClass("checked");

			if (!checked) {
				// console.log($(this)[0])
				$(this).css({
					"background-position": "-148px -4px"
				});
			} else {
				$(this).css({
					"background-position": "-168px -4px"
				});
			}
			this1 = this
			quan();
			zong();
		});


	})
	// quan();[]

})();
// 单选联动全选[]
function quan() {
	// console.log($(this1).eq(0))
	if ($(this1).attr("class").split(" ").length == 1) {
		// console.log($(this1).attr("class").split(" ").lengths)
		$("a.checkbox.all").css({
			"background-position": "-168px -4px"
		});
	} else if ($(".product-list tr a.checkbox").attr("class").split(" ").length == 2) {

		$("a.checkbox.all").css({
			"background-position": "-148px -4px"
		});

	}
	zong();
}
// 全选
$("a.checkbox.all").click(function() {
	var checked = $(this).hasClass("checked");
	$(this).toggleClass("checked");
	console.log(checked)

	if (!checked) {
		console.log(123)
		$(".product-list tr a.checkbox").css({
			"background-position": "-148px -4px"
		}).addClass("checked");

	} else {
		$(".product-list tr a.checkbox").css({
			"background-position": "-168px -4px"
		}).removeClass("checked");
	}
	zong();
});
// 删除
$(".remove").each(function() {
	var $tr = $(this).parent().parent();
	$(this).click(function() {
		$(".bg-wrapper").css("display", "block");
		$(".btn-ok").click(function() {
			$tr.remove();
			$(".bg-wrapper").css("display", "none");
			// 判断元素长度，长度为零，无商品列表显示
			if ($(".product-list tr").length == 0) {
				$(".buycart").css("display", "block");
				$(".product-wrapper").css("display", "none");
			} else {
				$(".buycart").css("display", "none");
				$(".product-wrapper").css("display", "block");
			}
			zong();	
			quan();
		});
		$(".btn-res").click(function() {
			$(".bg-wrapper").css("display", "none");
		});
		$(".close").click(function() {
			$(".bg-wrapper").css("display", "none");
		});
		// quan();
	});
	
});
// 全选删除
if ($("a.checkbox.all").hasClass("checked")) {
	$(".del").click(function() {
		$(".bg-wrapper").css("display", "block");
		$(".btn-ok").click(function() {
			$(".product-list").remove();
			$(".buycart").css("display", "block");
			$(".product-wrapper").css("display", "none");
			$(".bg-wrapper").css("display", "none");
		});
		$(".btn-res").click(function() {
			$(".bg-wrapper").css("display", "none");
		});
		$(".close").click(function() {
			$(".bg-wrapper").css("display", "none");
		});
	});

}
// 总金额
function zong() {
	var sum = 0;
	// var checked = $("a.checkbox.all").hasClass("checked");
	var dchecked = $(".product-list tr a.checkbox").hasClass("checked");

	console.log(dchecked);
	$('.product-list tr a.checkbox').each(function() {

		var $tr = $(this).parent().parent();
		var $td = $tr.children(".xiaoji");

		if ($(this).hasClass("checked")) {
			sum += parseFloat($td.text());
			$(".total").text("商品总价：" + sum);
			$(".total1").text("合计" + sum);
		} else {
			sum += 0;
			$(".total").text("商品总价：" + sum);
			$(".total1").text("合计" + sum);
		}

	})

}
// console.log(productList.id)
