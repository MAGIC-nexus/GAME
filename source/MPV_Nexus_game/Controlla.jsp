<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
OpDash op = OpDash.getInstance();
HttpSession sessioni = request.getSession();
String title="";String ide="";
Player p = null;
String stile="";String stiloso="";
String user = (String)request.getParameter("Testo");
user = user.toLowerCase();
//System.out.println("Testo: "+user);
ide = (String)request.getParameter("Id");
//System.out.println("ide: "+ide);
if(ide.equals("") || user.equals("")){
}else{
	if(op.getPlayer(ide)==null){
		 title=title+"<label class=\"text-bold-600\" for=\"SecurityGame\">CHOOSE SECURITY QUESTION</label>";
		 title=title+" <select class=\"form-control\" id=\"SecurityGame\" name=\"Security\">";
		
		 title=title+"<option value=\"1\">What is your favorite color?</option>";
		 title=title+"<option value=\"2\">What is your favorite season?</option>";
		 title=title+"<option value=\"3\">What is the name of  your close friend?</option>";
	     title=title+"</select>";
	     title=title+"<label class=\"text-bold-600\" for=\"risposta\">INSERT YOUR ANSWER</label>";
	     title=title+"<input type=\"text\" class=\"form-control\" id=\"risposta\" placeholder=\"Inserisci risposta\" name=\"risposta\" onchange=\"Abilita();\">";
	}else{
		p = (Player)op.getPlayer(ide);
		String risposta = p.getRisposta();
		//System.out.println("Risposta: "+risposta);
		risposta = risposta.toLowerCase();
		if(risposta.equals(user)){
			title="si";
		}else{
			title="no";
		}
		
	}
}
out.println(title);
%>


    
    
    
    