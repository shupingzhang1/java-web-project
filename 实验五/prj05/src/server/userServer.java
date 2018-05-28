package server;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


import com.google.gson.JsonArray;
import com.google.gson.JsonObject;


/*
 * service
 * 
 * */
public class userServer {
	private Connection coon;
	private  int date=10;  //设置分页  每页的数据
	//	数据库连接
	public userServer() {
		coon=new dataconn.coon().getConn();
	}
	/*
	 * 获取单个人通讯录信息
	 * id
	 * */
	public JsonArray getOneWithId(String id) {
		ResultSet rs=null;
		JsonArray jsonarray = new JsonArray();  
		try {
			Statement stmt=coon.createStatement();
			 rs=stmt.executeQuery("select  * from proj5 where id="+id+"");
			 while(rs.next()) {
				JsonObject jsonobj = new JsonObject(); 
				jsonobj.addProperty("id", rs.getString("id"));
				jsonobj.addProperty("name",rs.getString("name"));  
				jsonobj.addProperty("sex", rs.getString("sex"));  
				jsonobj.addProperty("college", rs.getString("college"));
				jsonobj.addProperty("classs", rs.getString("classs"));
				jsonobj.addProperty("phone", rs.getString("phone"));
				jsonobj.addProperty("email", rs.getString("email"));
				                     
				jsonarray.add(jsonobj);   
			}
			stmt.close();
			rs.close();
			
			return jsonarray;
			
		} catch (SQLException e) {
			e.printStackTrace();
			return jsonarray;   
		}
	}

	/*
	 * 获取所有人通讯录信息
	 * int  i  请求第几页数据
	 * */
	public JsonArray getAllInfo(int i) {
		ResultSet rs=null;
		int m=(i-1)*10;
		
		JsonArray jsonarray = new JsonArray();  
		try {
			Statement stmt=coon.createStatement();
			 rs=stmt.executeQuery("select  * from proj5 limit "+m+","+date+" ");
			 while(rs.next()) {
				JsonObject jsonobj = new JsonObject(); 
				jsonobj.addProperty("id", rs.getString("id"));
				jsonobj.addProperty("name",rs.getString("name"));  
				jsonobj.addProperty("sex", rs.getString("sex"));  
				jsonobj.addProperty("college", rs.getString("college"));
				jsonobj.addProperty("classs", rs.getString("classs"));
				jsonobj.addProperty("phone", rs.getString("phone"));
				jsonobj.addProperty("email", rs.getString("email"));
				                     
				jsonarray.add(jsonobj);   
			}
			stmt.close();
			rs.close();
			
			return jsonarray;
			
		} catch (SQLException e) {
			e.printStackTrace();
			return jsonarray;   
		}
	}
	/*
	 * 获取通讯录的总条数
	 * 
	 * */
	public int getNum() {
		ResultSet rs=null;
		int  num=0;
		try {
			Statement stmt=coon.createStatement();
			 rs=stmt.executeQuery("select COUNT(*) num from proj5 ");
			 while(rs.next()) {
				num=rs.getInt("num");
			}
			stmt.close();
			rs.close();
			
			return num;
			
		} catch (SQLException e) {
			e.printStackTrace();
			return num;   
		}
	}
	
	
	/*添加
	 *  id name  sex collage  classs phone email
	 * */
	public String add(String id,String name,String sex,String collage,String classs,String phone,String email) {
		String sql="insert into proj5 values(?,?,?,?,?,?,?)";
		PreparedStatement ps;
		try {
			ps = coon.prepareStatement(sql);
			ps.setString(1,id);
			ps.setString(2,name);
			ps.setString(3,sex);
			ps.setString(4,collage);
			ps.setString(5,classs);
			ps.setString(6,phone);
			ps.setString(7,email);
			int row=ps.executeUpdate();
			System.out.println(row+"aaa");
			if(row>0) {
				return "添加成功";
			}
			ps.close();
			
			return "添加失败";
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return "添加失败";
		}
	}
	
	/*
	 * 更新
	 *  id name  sex collage  classs phone email
	 * */
	public String update(String id,String name,String sex,String collage,String classs,String phone,String email) throws SQLException {
		try {
			System.out.println(name+sex+collage+classs+phone+email);	
			String sql="update proj5 set name= '"+name+"'  ,sex='"+sex+"'   ,college='"+collage+"'  ,classs='"+classs+"'  ,phone='"+phone+"'  ,email= '"+email+"'  where id='"+id+"' ";
				PreparedStatement ps=coon.prepareStatement(sql);
				int row=ps.executeUpdate();  
				if(row>0) {
					return "修改成功";
				}
				ps.close();
				
				return "修改失败";
			} catch (SQLException e) {
				e.printStackTrace();
				return "修改失败";
			}
	}
	
	
	/*
	 *删除
	 * */
	public String delete(String id) {
		try {
			
			String sql="delete from proj5 where id='"+id+"'";
			PreparedStatement ps=coon.prepareStatement(sql);
			int row=ps.executeUpdate();  
			if(row>0) {
				return "删除成功";
			}
			ps.close();
			
			return "删除失败";
		} catch (SQLException e) {
			e.printStackTrace();
			return "删除失败";
		}
	
	}
}
