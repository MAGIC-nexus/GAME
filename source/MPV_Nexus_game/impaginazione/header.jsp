
<%
HttpSession sessioni = request.getSession(true);
String sessionid = sessioni.getId();
String pag="";
String attivazione="";
if ( (sessioni.getAttribute("logged") == null) || (sessioni.getAttribute("logged") == "false") ) {
    pag="index.html";
%>


<jsp:forward page="<%=pag %>">
    <jsp:param name="" value=""/>
    </jsp:forward>

<% 
    
}else{
    
}

%>