<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
OpDash op = OpDash.getInstance();
HttpSession sessioni = request.getSession();
String title="";Richieste ric = null;String lista="";
String stile="";String stiloso="";
String region = (String)request.getParameter("Region");
region = region.replaceAll("region", "");
region = region.trim();
System.out.println("ARegion: "+region);
session.setAttribute("Region", region);
String room = (String)request.getParameter("room");
int count = 0;
count = op.controlloNotifiche(room, region);
System.out.println("COUNTER: "+count);
out.println(count);
%>


    
    
    
    