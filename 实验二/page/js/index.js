  $(function(){
  	  //导航栏吸顶 
    	var a = $('.nav'),  
     	 b =a.offset();//返回或设置导航栏相对于文档的偏移(位置)
     	 var d=$('.contents');
     	 var f=$('.right_list');
     	 var e=$('.time_list');

  		//加个屏幕滚动事件，c是滚动条相当于文档最顶端的距离  
    	$(document).on('scroll',function(){  
      		var c = $(document).scrollTop();  
  			/*当滚动的屏幕距离大于等于导航栏本身离最顶端的距离时（判断条件）给它加样式（根据自己业务的条件加样式，一般如下）*/ 
      		if(b.top<=c){  
		        a.css({'position':'fixed','top':'0px'}) 
		        d.css({'position':'absolute','top':'10vh'})
		        f.css({'position':'fixed','top':'15vh','left':'8/12*100vw','width':'14.5vw'}) 
		        
		    }else{  
		        a.css({'position':'absolute','top':'0px'}) 

		    } 
		})  
  });  