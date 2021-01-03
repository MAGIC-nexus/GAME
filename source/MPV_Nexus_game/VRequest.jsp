<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
OpDash op = OpDash.getInstance();
HttpSession sessioni = request.getSession();
String title="";Richieste ric = null;String lista="";
String stile="";String stiloso="";String desc="";
String region = (String)request.getParameter("Region");
region = region.replaceAll("region", "");
region = region.trim();
String tipo = (String)request.getParameter("Tipo");
String idp = (String)request.getParameter("Id");





if(tipo.equals("Mf")){
	desc="meat and fish";
}else if(tipo.equals("Pb")){
	desc = "plant based";
}else if(tipo.equals("De")){
	desc= "diary and eggs";
}else if(tipo.equals("Ff")){
	desc = "fossil fuels";
}else if(tipo.equals("Bf")){
	desc = "biofuels";
}else if(tipo.equals("Ec")){
	desc = "electricity";
}
;

String mov="";

mov = op.getVRichieste(idp,region,desc);
if(mov.equals("")){	
	title="no";
}else{
    title="si";	
}
System.out.println("------INIZIO--------");
System.out.println("REGIONE: "+region);
System.out.println("PERSONA: "+idp);
System.out.println("DESC: "+desc);
System.out.println("ESITO: "+mov);
System.out.println("TITLE: "+title);
System.out.println("-------FINE-------");
out.println(title);
Thread thr = new Thread(); 
thr.sleep(1000);
%>


    
    
    
    