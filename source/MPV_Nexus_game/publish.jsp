<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>
<%@ include file="impaginazione/Calendar.jsp" %>

<%
OpDash op = OpDash.getInstance();
HttpSession sessioni = request.getSession();

String a = (String)request.getParameter("a");

String b = (String)request.getParameter("b");

String c= (String)request.getParameter("c");

String d = (String)request.getParameter("d");

String a1="<script>document.writeln(a)</script>";
String b1="<script>document.writeln(b)</script>";
String c1="<script>document.writeln(c)</script>";
String d1="<script>document.writeln(d)</script>";

System.out.println("AIdp: "+a);
Thread thr = new Thread(); 
thr.sleep(1000);
ArrayList A = new ArrayList();int count=0;
%>
<div id="result"><%= a %><br>
<%= b %><br>
<%= c %><br>
<%= d %>
</div>

  


    
    
    
    