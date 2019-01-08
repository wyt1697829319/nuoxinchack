require(["./requirejs.config"], () => {
	//引入index需要依赖的模块
	require(["jquery","footer"], () => {
			 $(function(){
  
            $(".menu").on("click ", "li", function () {
                var index = $(this).index(); // 设index为当前点击索引
                $(this).addClass("active").siblings().removeClass("active"); // 添加样式并清除兄弟节点样式
                $(this).parents(".wrap").find(".main li").eq(index).show().siblings().hide(); // 同理显示与隐藏
            })

        });

			
	})

})
