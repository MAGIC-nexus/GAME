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
//System.out.println("ARegion: "+region);
session.setAttribute("Region", region);
String idp = (String)request.getParameter("Id");
Thread thr = new Thread(); 
thr.sleep(1000);
ArrayList A = new ArrayList();int count=0;

A = op.getTutteRichieste(idp);
//A = op.getRichieste(idp,region);
if(A.isEmpty()){	
}else{
for(int i=0;i<A.size();i++){
	ric = (Richieste) A.get(i);
        if(ric.getStatus().equals("Pending")){
    	 count++;
     }
     
}
}
if(count>0){
String link="MyPEU.jsp?Region="+region+"&Id="+idp;
title="<a  target=\"popup\" href=\"#\"   onclick=\"window.open('"+link+"','popup','width=800,height=600,scrollbars=no,resizable=no'); return false;\">EU</a>";

}else{
title="<a  target=\"popup\" href=\"#\"  onclick=\"window.open('EU-Index.html','popup','width=800,height=600,scrollbars=no,resizable=no'); return false;\">EU</a>";
}

out.println(title);
%>


    
    
    
    