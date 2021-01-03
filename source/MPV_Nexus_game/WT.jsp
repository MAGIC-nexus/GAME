<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
OpDash op = OpDash.getInstance();
HttpSession sessioni = request.getSession();
String title="GO";Richieste ric = null;String lista="";
String stile="";String stiloso="";
String Ide = (String)request.getParameter("Id");
String ver = op.getWT(Ide);
System.out.println("VER "+ver);
System.out.println("IDE: "+Ide);
if(ver.equals("NO")){
	title="<b id=\"box_trading\" style=\"color:red\">(trading is closed)</b>";
}else{
	title="<b id=\"box_trading\" style=\"color:#B1FB17\">(trading is open)</b>";
}
out.println(title);
%>


    
    
    
    