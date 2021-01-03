<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
OpDash op = OpDash.getInstance();
HttpSession sessioni = request.getSession();
String title="";String ide="";
Player p = null;
String stile="";String stiloso="";
String user = (String)request.getParameter("Id");
System.out.println("User: "+user);
if(user.equals("")){
}else{
	String result=op.getFacilitator(user);
	if(result.equals("")){
    title="no";
	}else{
    title="si";		
	}
}
out.println(title);
System.out.println("Title: "+title);

%>


    
    
    
    