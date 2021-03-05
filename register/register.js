(function() {
		var codes = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
		document.querySelector('.code-item a').onclick = function() {
			console.log(123)
			var codeStr = '';
			for(var i = 1; i < 5; i++) {
				codeStr += codes[Math.floor(Math.random() * codes.length)]
			}
			this.innerText = codeStr;
		};
})();
(function() {
	var data = JSON.parse(sessionStorage.getItem("data"));
	var userList = data.userList;
	document.querySelector(".register-item").onclick = function() {
		var phone = document.querySelector(".phone-item input").value.trim();
		var pwd = document.querySelector(".pwd-item input").value.trim();
		var repwd = document.querySelector(".qpwd-item input").value.trim();
		var code = document.querySelector(".code-item input").value.trim();
		if( userList.some(function(item) { return item.phone === phone})) {
			alert("手机号已存在。");
			return;
		} 
		if(code ==='获取验证码' || code.toUpperCase() !== document.querySelector('.code-item a').innerText ) {
			console.log(code);
			alert('验证码不正确');
			return;
		}
		if(pwd === "") {
			alert("请输入密码。")
		}
		if( pwd !== repwd ) {
			alert("两次密码输入不一致，请重新输入。");
			return;
		} 
		var userobject = {
			phone: phone,
			pwd: pwd
		};
		
		userList.push(userobject);
		console.log(data.userList);
		
		
		sessionStorage.setItem("data",JSON.stringify(data));

		alert("注册成功");
	}

})();