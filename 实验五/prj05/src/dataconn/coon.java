package dataconn;
import java.sql.Connection;
import java.sql.DriverManager;;
public class coon {
	public Connection getConn() {
		try {
			
			Class.forName("com.mysql.jdbc.Driver");
			String connectDB="jdbc:mysql://127.0.0.1:3306/java_web";
			String user="root";                                    
	        String password="root";
	        Connection con=DriverManager.getConnection(connectDB,user,password);
	        //System.out.print(con);
	        return con;
		} catch (Exception e) {
			
		}
		
		return null;
	}
}
