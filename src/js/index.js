//首页的业务逻辑
require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery", "header","footer"], () => {
		
		var txt = document.getElementById("text");  
            var oUl = document.getElementById("list");  
            txt.onkeyup = function(){  
            	oUl.innerHTML = "";
                var val = txt.value;  
                var oScript = document.createElement("script");//动态创建script标签  
                oScript.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+val+"&cb=callback";  
                //添加链接及回调函数  
                document.body.appendChild(oScript);//添加script标签  
                document.body.removeChild(oScript);//删除script标签  
            }  
            //回调函数  
            
            function callback(data){  
                data.s.forEach(function(value){
                 var oLi = document.createElement("li");
                 oLi.innerHTML = "<a href=https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd= + value + "\">"+ value + "</a>";
                })
            } 
		
		
		
	})

})