see1(1);

//邮箱验证函数
function checkEmail(str){
    var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/; 
    if (re.test(str)) {
      return 1;
    } else {
      return 0;
    }
  }
//点击添加管理员
$("#add1").click(function(){
	add1();
})
/*查看*/
$("#see1").click(function(){
	see1(1);
})
//修改
$("#change1").click(function(){
	change1(1)
})
//删除
$("#delete1").click(function(){
	delete1(1)
})
function change1(a){
	$(".container_right").empty();
	$(".container_right").append("<div class='see1 right_item'><div class='see_student'>	<div class='see_student_title'>信息列表</div>	<div class='see_student_table'></div></div><div class='fenye'></div></div>");
	$(".see_student_table").empty();
	$(".see_student_table").append("<table class='table table-hover see_student_tables'><tr><th>学号</th><th>姓名</th><th>性别</th><th>学院</th><th>班级</th><th>手机</th><th>邮箱</th><th>操作</th></tr></table>");
	//查询第一页数据
	$.ajax({  
		    type        : 'post',
		    url         : '../selectServlet?i='+a,
		    dataType    : 'json',
		    //data:JSON.stringify(formData),
		    contentType:'application/json;charset=UTF-8',
		    success     : function(res){
		    	for(var i=0;i<res.length;i++){
		    		$(".see_student_tables").append("<tr><td>"+res[i].id+"</td><td>"+res[i].name+"</td><td>"+res[i].sex+"</td><td>"+res[i].college+"</td><td>"+res[i].classs+"</td><td>"+res[i].phone+"</td><td>"+res[i].email+"</td><td><a href='#' class='change' data='"+res[i].id+"'>修改</a></td></tr>");
		    	}
		    	getNum(a,1);
		    	$(".change").click(function(){
		    		var id=$(this).attr("data");
		    		change2(id);
		    	})
		    },
		    error:function(errMsg){
		        console.log(errMsg);
		    }
		})
}
function change2(data){
	$.ajax({  
	    type        : 'post',
	    url         : '../selectOneSevlet?id='+data,
	    dataType    : 'json',
	    //data: JSON.stringify(formData),
	    success:function(res){
	    	$(".container_right").empty();
	    	$(".container_right").append("<div class='add9 right_item'><div class='add_student'><div class='title'>修改信息</div><div class='student_input'><form action='../addServlet' method='post'><input type='number' disabled class='form-control id' name='id' placeholder='请输入学号'><select class='form-control sex' name='sex' ><option value='男'>男</option><option value='女'>女</option></select><input class='form-control name' type='text' name='name' placeholder='请输入姓名'><input class='form-control collage' type='text ' name='collage' placeholder='请输入学院'><input class='form-control classs' type='text' name='classs' placeholder='请输入班级'><input class='form-control phone' type='number ' name='phone' placeholder='请输入电话'><input class='form-control  email' type='text' name='email' placeholder='请输入邮箱'><input type='button' class='btn btn-info student_btn' value='修改'></form></div></div>");
	    	$(".id").attr("value",res[0].id);
			$(".name").attr("value",res[0].name);
			$(".sex").find("option[value='+res[0].sex+']").attr("selected",true); 
			$(".email").attr("value",res[0].email);
			$(".collage").attr("value",res[0].college);
			$(".classs").attr("value",res[0].classs);
			$(".phone").attr("value",res[0].phone);
			$(".student_btn").click(function(){
				var id=$(".id").val();
				var name=$(".name").val();
				var sex=$(".sex").find("option:selected").val();
				var email=$(".email").val();
				var collage=$(".collage").val();
				var classs=$(".classs").val();
				var phone=$(".phone").val();
				if(id==""){
					alert("请填写学号！")
				}else if(name==""){
					alert("请填写姓名！")
				}else if(collage==""){
					alert("请填写学院！")
				}else if(classs==""){
					alert("请填写班级！")
				}else if(phone==""){
					alert("请填写电话！")
				}else if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
					alert("电话格式有误！")
				}else if(email==""){
					alert("请填写email！")
				}else if(checkEmail(email!=1)){
					alert("邮箱格式有误！")
				}else{
					
					$.ajax({  
					    type        : 'post',
					    url         : '../updateServlet?id='+id+'&name='+name+'&sex='+sex+'&email='+email+'&collage='+collage+'&classs='+classs+'&phone='+phone,
					    dataType    : 'json',
					   // data: JSON.stringify(formData),
					    success:function(res){
					    	change1(1);
					       alert("修改成功！");
					       
					    },
					    error:function(res){
					    	change1(1);
					    	alert("修改成功！");
					    }
					})
				}
			})
	    },
	    error:function(res){
	    	
	    }
	})
}
//添加辅助函数
function add1(){
	$(".container_right").empty();
	$(".container_right").append("<div class='add9 right_item'><div class='add_student'><div class='title'>添加人员</div><div class='student_input'><form action='../addServlet' method='post'><input type='number' class='form-control id' name='id' placeholder='请输入学号'><select class='form-control sex' name='sex' ><option value='男'>男</option><option value='女'>女</option></select><input class='form-control name' type='text' name='name' placeholder='请输入姓名'><input class='form-control collage' type='text ' name='collage' placeholder='请输入学院'><input class='form-control classs' type='text' name='classs' placeholder='请输入班级'><input class='form-control phone' type='number ' name='phone' placeholder='请输入电话'><input class='form-control  email' type='text' name='email' placeholder='请输入邮箱'><input type='button' class='btn btn-info student_btn' value='提交'></form></div></div>");
	$(".student_btn").click(function(){
		var id=$(".id").val();
		var name=$(".name").val();
		var sex=$(".sex").find("option:selected").val();
		var email=$(".email").val();
		var collage=$(".collage").val();
		var classs=$(".classs").val();
		var phone=$(".phone").val();
		if(id==""){
			alert("请填写学号！")
		}else if(name==""){
			alert("请填写姓名！")
		}else if(collage==""){
			alert("请填写学院！")
		}else if(classs==""){
			alert("请填写班级！")
		}else if(phone==""){
			alert("请填写电话！")
		}else if(!(/^1(3|4|5|7|8)\d{9}$/.test(phone))){
			alert("电话格式有误！")
		}else if(email==""){
			alert("请填写email！")
		}else if(checkEmail(email!=1)){
			alert("邮箱格式有误！")
		}else{
			var formData={
					"id":id,
					"name":name,		
					"sex":sex,           
					"email":email, 
					"collage":collage,
					"classs":classs,
					"phone":phone
			}
			$.ajax({  
			    type        : 'post',
			    url         : '../addServlet?id='+id+'&name='+name+'&sex='+sex+'&email='+email+'&collage='+collage+'&classs='+classs+'&phone='+phone,
			    dataType    : 'json',
			    data: JSON.stringify(formData),
			    success:function(res){
			       add1();
			       alert("添加成功！");
			       
			    },
			    error:function(res){
			    	 add1();
				       alert("添加成功！");
			    }
			})
		}
	})
}
/*查看辅助函数*/
function see1(a){
	$(".container_right").empty();
	$(".container_right").append("<div class='see1 right_item'><div class='see_student'>	<div class='see_student_title'>信息列表</div>	<div class='see_student_table'></div></div><div class='fenye'></div></div>");
	$(".see_student_table").empty();
	$(".see_student_table").append("<table class='table table-hover see_student_tables'><tr><th>学号</th><th>姓名</th><th>性别</th><th>学院</th><th>班级</th><th>手机</th><th>邮箱</th></tr></table>");
	//查询第一页数据
	$.ajax({  
		    type        : 'post',
		    url         : '../selectServlet?i='+a,
		    dataType    : 'json',
		    //data:JSON.stringify(formData),
		    contentType:'application/json;charset=UTF-8',
		    success     : function(res){
		    	for(var i=0;i<res.length;i++){
		    		$(".see_student_tables").append("<tr><td>"+res[i].id+"</td><td>"+res[i].name+"</td><td>"+res[i].sex+"</td><td>"+res[i].college+"</td><td>"+res[i].classs+"</td><td>"+res[i].phone+"</td><td>"+res[i].email+"</td></tr>");
		    	}
		    	getNum(a,0);
		    },
		    error:function(errMsg){
		        console.log(errMsg);
		    }
		})
}

//查询数据总量
function getNum(b,c){
		//查询数据总量
		$.ajax({  
		    type        : 'post',
		    url         : '../numServlet',
		    dataType    : 'json',
		    contentType:'application/json;charset=UTF-8',
		    success     : function(res){
		    	$(".fenye").empty();
		    	var i=Math.ceil(res/10);
		    	$(".fenye").append("<nav aria-label='Page navigation'><ul class='pagination pagination-lg'><li><a href='#' data='1' class='see '  aria-label='Previous'><span aria-hidden='true'>首页</span></a></li><li><a href='#'  data='"+i+"' class='see' aria-label='Next'><span aria-hidden='true'>尾页</span> </a></li></ul></nav>");
		    	$(".pagination").empty();
		    	if(b==1){
		    		$(".pagination").append("<li><a href='#' data='1' class='see selected'  aria-label='Previous'><span aria-hidden='true'>首页</span></a></li>")
		    	}else{
		    		$(".pagination").append("<li><a href='#' data='1' class='see '  aria-label='Previous'><span aria-hidden='true'>首页</span></a></li>")
		    	}
		    	
		    	for(var a=1;a<=i;a++){
		    		if(a==b){
		    			$(".pagination").append("<li><a href='#' class='see selected' data='"+a+"'>"+a+"</a></li>");
		    		}else{
		    			$(".pagination").append("<li><a href='#' class='see ' data='"+a+"'>"+a+"</a></li>");
		    		}
		    		
		    	}
		    	if(b==i){
		    		$(".pagination").append("<li><a href='#'  data='"+i+"' class='see selected' aria-label='Next'><span aria-hidden='true'>尾页</span> </a></li>")
		    	}else{
		    		$(".pagination").append("<li><a href='#'  data='"+i+"' class='see ' aria-label='Next'><span aria-hidden='true'>尾页</span> </a></li>")
		    	}
		    	$(".see").click(function(){
		    		var i=$(this).attr("data");
		    		if(c==0){
		    			see1(i)
		    		}else if(c==-1){
		    			delete1(i)
		    		}else{
		    			change1(i)
		    		}
		    		
		    	})
		    },
		    error:function(errMsg){
		        console.log(errMsg);
		    }
		})
}


function delete1(a){
	$(".container_right").empty();
	$(".container_right").append("<div class='see1 right_item'><div class='see_student'>	<div class='see_student_title'>信息列表</div>	<div class='see_student_table'></div></div><div class='fenye'></div></div>");
	$(".see_student_table").empty();
	$(".see_student_table").append("<table class='table table-hover see_student_tables'><tr><th>学号</th><th>姓名</th><th>性别</th><th>学院</th><th>班级</th><th>手机</th><th>邮箱</th><th>操作</th></tr></table>");
	//查询第一页数据
	$.ajax({  
		    type        : 'post',
		    url         : '../selectServlet?i='+a,
		    dataType    : 'json',
		    //data:JSON.stringify(formData),
		    contentType:'application/json;charset=UTF-8',
		    success     : function(res){
		    	for(var i=0;i<res.length;i++){
		    		$(".see_student_tables").append("<tr><td>"+res[i].id+"</td><td>"+res[i].name+"</td><td>"+res[i].sex+"</td><td>"+res[i].college+"</td><td>"+res[i].classs+"</td><td>"+res[i].phone+"</td><td>"+res[i].email+"</td><td><a href='#' class='deletes' data='"+res[i].id+"'>删除</a></td></tr>");
		    	}
		    	getNum(a,-1);
		    	$(".deletes").click(function(){
		    		var id=$(this).attr("data");
		    		var com=confirm("确认删除 【"+id+" 】吗?");
		    		if(com==true){
		    			$.ajax({  
		    			    type        : 'post',
		    			    url         : '../deleteServlet?id='+id,
		    			    dataType    : 'json',
		    			    //data:JSON.stringify(formData),
		    			    contentType:'application/json;charset=UTF-8',
		    			    success     : function(res){
		    			    	alert(res);
		    			    	delete1(1);
		    			    },
		    			    error:function(errMsg){
		    			    	alert("删除成功！");
		    			    	delete1(1);
		    			    }
		    			})
		    		}
		    	})
		    },
		    error:function(errMsg){
		        console.log(errMsg);
		    }
		})
}






