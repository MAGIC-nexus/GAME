<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
OpDash op = OpDash.getInstance();
HttpSession sessioni = request.getSession();
boolean esito = false;String title="";
String script ="";
String region = (String)request.getParameter("Region");
String tipo   = (String)request.getParameter("Tipo");
String valore = (String)request.getParameter("Valore");
String cat    = (String)request.getParameter("Cat");
String reale    = (String)request.getParameter("Reale");
int Id_Eu = 0;
int id = op.getID("Id", "request");
String ide = (String) sessioni.getAttribute("Cod");
region = region.replaceAll("REGION", "");
region = region.trim();
cat = cat.replaceAll("region", "");
cat = cat.trim();
if(cat.equals("W") || cat.equals("World")){
	title="";
	

}else{
esito = op.newRequest(Integer.parseInt(ide), cat, region, tipo, valore, "Pending", region, id,reale);
if(esito == true){
	script = "<script>function myFunc() { SendDataToDBOnClick(); }</script>";
	title="<span style=\"float:right;font-weight:bold;color:green;\">&nbsp;&nbsp;&nbsp;REQUEST SENT</span>";
int id_room=	op.getIdRoom(ide);
System.out.println("----------------ID ROOM SR: "+id_room);
Id_Eu = op.getLastEuID(ide, Integer.toString(id_room), region);
System.out.println("----------------ID EU SR: "+Id_Eu);

	op.setClassicText(Integer.toString(Id_Eu), "eu_stream", "IdR", Integer.toString(id), "Id_Eu");
}else{
	script = "<script>alert(\"NON E' ANDATO A BUON FINE LO SCRIPT!\");</script>";
	title="<span style=\"float:right;font-weight:bold;color:red;\">OPS! REQUEST NOT SENDED - TRY AGAIN</span>";
}
}
out.println(title);
out.println(script);
%>


    
    
    
    