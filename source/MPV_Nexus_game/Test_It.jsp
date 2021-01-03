<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
OpDash op = OpDash.getInstance();
HttpSession sessioni = request.getSession();
String title="";Richieste ric = null;String lista="";
String stile="";String stiloso="";String unita="";
String region = (String)request.getParameter("Region");
region = region.replaceAll("region", "");
region = region.trim();
//System.out.println("ARegion: "+region);
session.setAttribute("Region", region);
String idp = (String)request.getParameter("Id");
String room = (String)request.getParameter("room");
//System.out.println("AIdp: "+idp);
//System.out.println("ROOOOOOOOOOOOOOOOOOOOOOM: "+room);
Thread thr = new Thread(); 
thr.sleep(3000);
ArrayList A = new ArrayList();int count=0;


A = op.getRichiesteM(idp, region, room);
if(A.isEmpty()){	
}else{
for(int i=0;i<A.size();i++){
	ric = (Richieste) A.get(i);
     if(ric.getFrom().equals(region) && ric.getStatus().equals("Pending")){
    	 count++;
     }
     
     String from = ric.getFrom();
     from = from.replaceAll("region", "");
     from = from.trim();
     String tipo = ric.getTipo();
     String valore = ric.getValore();
     String mitt = ric.getRegion();
     
     String to = ric.getTo();
     to = to.replaceAll("region", "");
     to = to.trim();
     
     lista=lista+"<li class=\"scrollable-container media-list\">";
     lista=lista+"<div class=\"d-flex justify-content-between cursor-pointer\">";
     lista=lista+"<div class=\"media d-flex align-items-center py-0\">";
     lista=lista+"<div class=\"media-left pr-0\">";
     if(mitt.equals(region)){
     lista=lista+"<div class=\"avatar bg-primary bg-lighten-5 mr-1 m-0 p-25\"><span class=\"avatar-content text-primary font-medium-2\"><i class=\"bx bx-import\"></i></span></div>";
     }else{
     lista=lista+"<div class=\"avatar bg-primary bg-lighten-5 mr-1 m-0 p-25\"><span class=\"avatar-content text-primary font-medium-2\"><i class=\"bx bx-export\"></i></span></div>"; 
     }
     lista=lista+"</div>";
     lista=lista+"<div class=\"media-body\">";
     
     if(tipo.equals("plant based") || tipo.equals("meat and fish") || tipo.equals("diary and eggs")){
    	 stiloso=" style=\"color:green;\" ";
		 unita="Kcal";
     }else{
    	 stiloso=" style=\"color:#E9AB17;\" ";
		 unita = "MJ";
     }
     
     if(mitt.equals(region)){
     lista=lista+"<h6 class=\"media-heading\"><span class=\"text-bold-500\" "+stiloso+">"+tipo+"<br><small class=\"notification-text\">Import Need</small></span></h6><small class=\"notification-text\" style=\"color:red;font-weight:500;\">From: "+from+" -</small> <small id = \"trade_request\" class=\"notification-text\" style=\"color:red;font-weight:500;\"> Demand: "+ric.getValore()+"("+ric.getReale()+")</small>";
     }else{
     lista=lista+"<h6 class=\"media-heading\"><span class=\"text-bold-500\" "+stiloso+">"+tipo+"<br><small class=\"notification-text\">Export Request</small></span></h6><small class=\"notification-text\" style=\"color:red;font-weight:500;\">From: "+to+" -</small> <small id = \"trade_request\" class=\"notification-text\" style=\"color:red;font-weight:500;\"> Demand: "+ric.getValore()+"("+ric.getReale()+")</small>";	 
     }
     lista=lista+"</div>";
     lista=lista+"<div class=\"media-right pl-0\">";
     lista=lista+"<div class=\"row border-left text-center\">";
     if(mitt.equals(region)){
    	
    	 lista=lista+"<div class=\"col-12 px-30 py-75 border-bottom\">";
    	 if(ric.getStatus().equals("Pending")){
    		 stile=" style=\"color:orange;\" ";
    	 }else if(ric.getStatus().equals("Accepted")){
			 stile=" style=\"color:#306EFF;\" ";
		 }else{	 
    		 stile=" style=\"color:red;text-decoration:line-through;\" "; 
    	 }
         lista=lista+"<h6 class=\"media-heading text-bold-500 mb-0\">Status: <b "+stile+">"+ric.getStatus()+"</b></h6>";
         lista=lista+"</div>";
    	 
     }else{
    	 if(ric.getStatus().equals("Refused")){
       	  stile=" style=\"color:red;text-decoration:line-through;\" ";
       	  lista=lista+"<div class=\"col-12 px-30 py-75 border-bottom\">";
       	  lista=lista+"<h6 class=\"media-heading text-bold-500 mb-0\">Status: <b "+stile+">"+ric.getStatus()+"</b></h6>";
       	  lista=lista+"</div>";
         }else if(ric.getStatus().equals("Accepted")){
    	  stile=" style=\"color:#306EFF;\" ";
    	  lista=lista+"<div class=\"col-12 px-30 py-75 border-bottom\">";
    	  lista=lista+"<h6 class=\"media-heading text-bold-500 mb-0\" >Status: <b "+stile+">"+ric.getStatus()+"</b></h6>";
    	  lista=lista+"</div>";
      }else{
  lista=lista+"<div class=\"col-12 px-30 py-75 border-bottom\">";
     lista=lista+"<h6 class=\"media-heading text-bold-500 mb-0\"><a href=\"javascript:void(0);\" onclick=\"Trade('"+ric.getFrom()+"','"+ric.getTo()+"','"+ric.getTipo()+"','"+ric.getValore()+"','"+ric.getIdp()+"','"+ric.getId()+"','yes');Accept('"+region+"','"+idp+"','"+ric.getId()+"');\" >Yes</a></h6>";
     lista=lista+"</div>";
     lista=lista+"<div class=\"col-12 px-30 py-75 border-bottom\">";
     lista=lista+"<h6 class=\"media-heading mb-0\"><a href=\"javascript:void(0);\" onclick=\"Trade('"+ric.getFrom()+"','"+ric.getTo()+"','"+ric.getTipo()+"','"+ric.getValore()+"','"+ric.getIdp()+"','"+ric.getId()+"','no');RefuseTestIt('"+ric.getFrom()+"','"+ric.getTo()+"','"+ric.getIdp()+"','"+ric.getId()+"');\">No</a></h6>";
     lista=lista+"</div>";
     lista=lista+"<div class=\"col-12 px-30 py-75\">";
     lista=lista+"<h6 class=\"media-heading mb-0\"><a href=\"#\" onclick=\"Trade('"+ric.getFrom()+"','"+ric.getTo()+"','"+ric.getTipo()+"','"+ric.getValore()+"','"+ric.getIdp()+"','"+ric.getId()+"','test');Test_It('"+region+"','"+idp+"','"+ric.getId()+"');\">Test it</a></h6>";
     lista=lista+"</div>";
         }
     }
     
     lista=lista+"</div>";
     lista=lista+"</div></div></div></li>";
     
     
     
     
}
}
/*if(count>0){
title=title+"<a data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Notification Center\"><a  class=\"nav-link nav-link-label\" href=\"#\" data-toggle=\"dropdown\" style=\"margin-left:10px;\"><b style=\"color:white;\">TRADE </b><b id=\"VREG\" style=\"color:white;\">"+region+"</b>&nbsp;</a> </a>"; 


}else{
title=title+"<a data-toggle=\"tooltip\" data-placement=\"bottom\" title=\"Notification Center\"><a class=\"nav-link nav-link-label\" href=\"#\" data-toggle=\"dropdown\" style=\"margin-left:10px;\"><b style=\"color:white;\">TRADE </b><b id=\"VREG\" style=\"color:white;\">"+region+"</b>&nbsp;</a></a>"; 	

//<span class=\"badge badge-pill badge-danger badge-up\">"+count+"</span> - <a  onclick=\"MyTradeMulti('"+region+"','"+idp+"','"+room+"');\"><b style=\"color:#fff\">REF</b></a>
}*/
System.out.println("lista: "+lista);


title=title+"<ul class=\"dropdown-menu dropdown-menu-media dropdown-menu-right\">";
title=title+"<li class=\"dropdown-menu-header\">";
title=title+"<div class=\"dropdown-header px-1 py-75 d-flex justify-content-between\"><span class=\"notification-title\">"+count+" new request</span><span class=\"text-bold-400 cursor-pointer\"></span></div>";
title=title+"</li>";
title=title+lista;
title=title+"<li class=\"dropdown-menu-footer\"><a class=\"dropdown-item p-50 text-primary justify-content-center\" href=\"javascript:void(0)\" onclick=\"CloseNote()\">Close Notification</a></li>";
title=title+"</ul></li>";
//System.out.println("Title: "+title);
out.println(title);
%>


    
    
    
    