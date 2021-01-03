<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
OpDash op = OpDash.getInstance();
HttpSession sessioni = request.getSession();
String title="";Richieste ric = null;String lista="";
String stile="";String stiloso="";
String status = (String) request.getParameter("Status");
String Ide = (String) request.getParameter("Stanza");
System.out.println("Status: "+status);
ArrayList A = new ArrayList();
boolean esito = op.setClassicText(Ide, "wt", "status", status, "ids");
if(esito==true){
	if(status.equals("SI")){
		title="<a href=\"javascript:void(0);\"  onclick=\"WinTrade('NO','"+Ide+"');\"> <i class=\"bx bx-pause-circle \" style=\"font-size:1.9rem !important;color:red;\" ></i></a>";
	}else{
		A = op.getIdrStream(Integer.parseInt(Ide));
		if(A.isEmpty()){			
			System.out.println("Richieste Vuote ");
		}else{
			for(int i=0;i<A.size();i++){
				String idreq = (String) A.get(i);
				
				String sta = op.getStatus(idreq);
				if(sta.equals("Pending")){
					System.out.println("IdRiga: "+idreq);
		
				op.setClassicText(idreq, "request", "Status", "Refused", "Id");
				}
				}
		}
		title="<a href=\"javascript:void(0);\" onclick=\"WinTrade('SI','"+Ide+"');\"> <i class=\"bx bx-play-circle\"  style=\"font-size:1.9rem !important;\" ></i></a>";

	}
}
out.println(title);
%>


    
    
    
    