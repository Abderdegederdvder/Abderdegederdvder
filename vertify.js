
function check(thisform) {
 
	var name=document.getElementById("name").value; 
	var pass=document.getElementById("pass").value;
 
	if (name==="01" && pass==="123456") {  
		alert("登录成功！");
		window.document.f.action="index.html";  //此处设置登录后跳转页面
		window.document.f.submit();
	}
	else{
		alert("工号或密码错误！");
	}
 
}
