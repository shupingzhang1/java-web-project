package dataconn;

import server.userServer;

public class test {

	public static void main(String[] args) {
		userServer user=new userServer();
		System.out.println(user.getOneWithId("6103115049"));
		
	}

}
