//alert($)
$(document).ready(function(){//页面加载完成再加载脚本
	$('input[name="button"]').click(function(event){
		var $name = $('input[name="username"]');
		var $password = $('input[name="password"]'); 
		var $text = $(".text");
		var _name = $.trim($name.val());//去掉字符串多余空格
		var _password = $.trim($password.val());

		if(_name==''){
			$text.text('请输入要找的游戏名');
			$name.focus();
			return;
		}
		
		if(_name=="Dota2" ){
			$text.text("请稍后...");
		    window.location.href = "single1.html";
		}else{
			$text.text("没有该游戏的介绍。");
		}
		
		if(_name=="英雄联盟" ){
			$text.text("请稍后...");
		    window.location.href = "single2.html";
		}else{
			$text.text("没有该游戏的介绍。");
		}
		
		if(_name=="阴阳师" ){
			$text.text("请稍后...");
		    window.location.href = "single3.html";
		}else{
			$text.text("没有该游戏的介绍。");
		}
		
		if(_name=="荒野大镖客" ){
			$text.text("请稍后...");
		    window.location.href = "single4.html";
		}else{
			$text.text("没有该游戏的介绍。");
		}
		
		if(_name=="奇异人生" ){
			$text.text("请稍后...");
		    window.location.href = "single5.html";
		}else{
			$text.text("没有该游戏的介绍。");
		}
		
		if(_name=="绝地求生" ){
			$text.text("请稍后...");
		    window.location.href = "single6.html";
		}else{
			$text.text("没有该游戏的介绍。");
		}
		
		if(_name=="巫师3" ){
			$text.text("请稍后...");
		    window.location.href = "single7.html";
		}else{
			$text.text("没有该游戏的介绍。");
		}
		
		if(_name=="最终幻想" ){
			$text.text("请稍后...");
		    window.location.href = "single8.html";
		}else{
			$text.text("没有该游戏的介绍。");
		}

		
	});

});