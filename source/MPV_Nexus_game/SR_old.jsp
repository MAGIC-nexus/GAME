<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
OpDash op = OpDash.getInstance();
HttpSession sessioni = request.getSession();
boolean esito = false;String title="";
String region = (String)request.getParameter("Region");
String tipo   = (String)request.getParameter("Tipo");
String valore = (String)request.getParameter("Valore");
String cat    = (String)request.getParameter("Cat");
int id = op.getID("Id", "request");
String ide = (String) sessioni.getAttribute("Cod");
region = region.replaceAll("region", "");
region = region.trim();
cat = cat.replaceAll("region", "");
cat = cat.trim();
if(cat.equals("W") || cat.equals("World")){
	title="";
}else{
esito = op.newRequest(Integer.parseInt(ide), cat, region, tipo, valore, "Pending", region, id);
if(esito == true){
	title="<span style=\"float:right;font-weight:bold;color:green;\">&nbsp;&nbsp;&nbsp;REQUEST SENDED</span>";
}else{
	title="<span style=\"float:right;font-weight:bold;color:red;\">OPS! REQUEST NOT SENDED - TRY AGAIN</span>";
}
}
out.println(title);
%>


    
    
    
    