$(document).ready(function(){//页面加载完成再加载脚本
	$('input[name="button2"]').click(function(event){
		var $name = $('input[name="Name"]');
		var $password = $('input[name="Password"]'); 
		var $email = $('input[name="Email"]'); 
		var $phone = $('input[name="Phone"]'); 
		var $text = $(".text");
		var _name = $.trim($name.val());//去掉字符串多余空格
		var _password = $.trim($password.val());
		var _email = $.trim($email.val());
		var _phone = $.trim($phone.val());

		if(_name==''){
			$text.text('请输入用户名');
			$name.focus();
			return;
		}
		
		if(_password==''){
			$text.text('请输入密码');
			$name.focus();
			return;
		}
		
		if(_email==''){
			$text.text('请输入邮箱');
			$name.focus();
			return;
		}
		
		if(_phone==''){
			$text.text('请输入手机号');
			$name.focus();
			return;
		}
		
		
		if(_name=='ss'){
			$text.text('用户名已被注册');
			$name.focus();
			return;
		}
		
		if(_name=='qqq'){
			$text.text('用户名已被注册');
			$name.focus();
			return;
		}
		
		if(_name=='swe'){
			$text.text('用户名已被注册');
			$name.focus();
			return;
		}
		
		if(_name=='rty'){
			$text.text('用户名已被注册');
			$name.focus();
			return;
		}
		
		if(_name=='wdfr'){
			$text.text('用户名已被注册');
			$name.focus();
			return;
		}
		
		if(_name=='wedsf'){
			$text.text('用户名已被注册');
			$name.focus();
			return;
		}
		
		if(_name!=''&&_password!=''&&_email!=''&&_phone!=''){
			$text.text('注册成功');
			$name.focus();
			return;
		}
		
	});

});