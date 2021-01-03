<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
OpDash op = OpDash.getInstance();
HttpSession sessioni = request.getSession();
String title="";Richieste ric = null;String lista="";
String stile="";String stiloso="";
String region = (String)request.getParameter("Region");
System.out.println("REGIONE :"+region);
region = region.replaceAll("region", "");
region = region.trim();
System.out.println("ARegion: "+region);
session.setAttribute("Region", region);
String idp = (String)request.getParameter("Id");
String room = (String)request.getParameter("room");
System.out.println("AIdp: "+idp);
Thread thr = new Thread(); 

String Counter_Refresh = "";

ArrayList A = new ArrayList();int count=0;


A = op.getRichiesteM(idp, region, room);
if(A.isEmpty()){	
}else{
for(int i=0;i<A.size();i++){
	ric = (Richieste) A.get(i);
     if(ric.getFrom().equals(region) && ric.getStatus().equals("Pending")){
	 count++;
	 System.out.println(count);

     }
     
}
Counter_Refresh= " <span id=\"counter_notification\">("+count+")</span>";

}
out.println(count);
%>


    
    
    
    