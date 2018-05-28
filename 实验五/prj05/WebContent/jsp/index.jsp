<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page import="java.io.*,java.util.*" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
<title>管理员</title>
<link href="../style/bootstrap.min.css" rel="stylesheet">
<link href="../style/admin.css" rel="stylesheet">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

</head>
<body>
	<!-- 导航栏 -->
	<div class="nav">
		<span class="nav_title">班级通讯录</span> 
		
	</div>
	<div class="container-fluid">
		<div class="container_left">
			<div class="panel-group" id="panel-981931">

				<div class="panel panel-default">
					<div class="panel-heading">
						<a class="panel-title collapsed " data-toggle="collapse"
							data-parent="#panel-981931" href="#panel-element-72579">查看</a>
					</div>
					<div id="panel-element-72579" class="panel-collapse collapse in">
						<div class="panel-body">

							<div class="list-group">
								<a href="#" class="list-group-item" id="see1"> 查看班级通讯录 </a>
							</div>

						</div>
					</div>

				</div>
				<div class="panel panel-default">
					<div class="panel-heading">
						<a class="panel-title collapsed" data-toggle="collapse"
							data-parent="#panel-981931" href="#panel-element-137063 ">修改</a>
					</div>
					<div id="panel-element-137063" class="panel-collapse collapse">
						<div class="panel-body">
							<div class="list-group">
								<a href="#" class="list-group-item" id="change1">修改通讯录信息 </a> 
							</div>
						</div>
					</div>
				</div>
				<div class="panel panel-default">
					<div class="panel-heading">
						<a class="panel-title collapsed" data-toggle="collapse"
							data-parent="#panel-981931" href="#panel-element-137061 ">添加</a>
					</div>
					<div id="panel-element-137061" class="panel-collapse collapse">
						<div class="panel-body">
							<div class="list-group">
								<a href="#" class="list-group-item" id="add1"> 添加人员 </a> 
									
							</div>
						</div>
					</div>

				</div>
				 <div class="panel panel-default">
								<div class="panel-heading">
									 <a class="panel-title collapsed" data-toggle="collapse" data-parent="#panel-981931" href="#panel-element-137064 ">删除</a>
								</div>
								<div id="panel-element-137064" class="panel-collapse collapse">
									<div class="panel-body">
									<div class="list-group">
									  <a href="#" class="list-group-item" id="delete1" >
									    删除人员
									  </a> 
									</div>
									</div>
								</div>
								
					</div>
					
			</div>

		</div>
		
		<div class="container_right" >
			
	    	
	    	
			
			
		</div>


	</div>
	<!-- 底部 -->
	<div class="footer">
		<span class="footer_text">Copyright 2018 zsp. All Rights
			Reserved.</span>
	</div>


	<script src="../js/jquery.min.js"></script>
	<script src="../js/bootstrap.min.js"></script>
	<script src="../js/admin.js"></script>
	

</body>
</html>