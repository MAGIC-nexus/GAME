<%@ include file="impaginazione/intestazione.jsp" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
OpDash op = OpDash.getInstance();
String visual="";boolean esito=false;
String tab="";
java.sql.Date Giorno = null;
try {
	   java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("dd-MM-yyyy",Locale.ITALIAN);
	        java.util.Date d= sdf.parse(DataI);
	        Giorno = new java.sql.Date(d.getTime());
	} catch (java.text.ParseException e) 
	{
	  e.printStackTrace();
	}
String unanno=op.getRecupeoDay(DataI, 365);
if(request.getParameter("Action")==null){	
}else if(request.getParameter("Action").equals("Ins")){
	String nome = (String) request.getParameter("Nome");
	nome = nome.replaceAll("'", "");
	String cognome = (String) request.getParameter("Surname");
	cognome = cognome.replaceAll("'", "");
	String user = (String) request.getParameter("Username");
	String password = (String) request.getParameter("Password");
	
	String email = (String) request.getParameter("Email");
	String country = (String) request.getParameter("Country");
	country = country.replaceAll("'", "");
	String orga = (String) request.getParameter("Organization");
	orga = orga.replaceAll("'", "");
	String from = (String) request.getParameter("From");
	from = from.replace("/", "-");
	if(from.equals("")){
		from = "1900-01-01";
	}
	
	
	java.sql.Date GiornoF = null;
	try {
		   java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("dd-MM-yyyy",Locale.ITALIAN);
		        java.util.Date d= sdf.parse(from);
		        GiornoF = new java.sql.Date(d.getTime());
		} catch (java.text.ParseException e) 
		{
		  e.printStackTrace();
		}
	
	
	String to = (String) request.getParameter("To");
	to = to.replace("/", "-");
	if(to.equals("")){
		to = "1900-01-01";
	}
	
	java.sql.Date GiornoT = null;
	try {
		   java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("dd-MM-yyyy",Locale.ITALIAN);
		        java.util.Date d= sdf.parse(to);
		        GiornoT = new java.sql.Date(d.getTime());
		} catch (java.text.ParseException e) 
		{
		  e.printStackTrace();
		}
	
	
	
	int Id = op.getID("Id","facilitator");
	
	
	esito = op.newFacilitator(nome,cognome,user,password,email,country,orga,GiornoF,GiornoT,Id);
	
	
	
	if(esito==true){
		visual="Operation performed successfully";
		  String mitt = "game.nexus@eligesoft.com";
	      String dest = email;
	      //String oggetto ="New Request";
	      String oggetto2="Request sent";
	     // String testo="<html><head></head><body><img src=\"cid:123logo\" /><br><br>New Request:<br>"+nome+" "+cognome+"<br>Email: "+email+"<br>si è appena registrato sul sito.<br>";
	     // testo=testo+"<br><br>Buon Lavoro.</body></html>";
	      String testo2="<html><head></head><body><img src=\"cid:123logo\" /><br><br>";
	      testo2=testo2+"Hi,<br>These are your facilitator credentials:<br>- Username: <b>"+user+"</b><br>- Password: <b>"+password+"</b><br><br>Thank you.";
	      testo2=testo2+"</body></html>";
	      //MailUtility.sendMail(dest, mitt, oggetto, testo);
	      MailUtility.sendMail(email, mitt, oggetto2, testo2);
		
		if(request.getParameter("Provenienza")==null){		
		}else{
			String pfac = (String) request.getParameter("Pfac");
			op.delTabx("fac_pending", "Id", pfac);
		}
		
		
		
	}else{
		visual="There was a problem creating your login information.";
	}
}else if(request.getParameter("Action").equals("Del")){	
String Id = (String) request.getParameter("Id");
esito = op.delTabx("facilitator", "Id", Id);
if(esito==true){
	visual="<b style=\"color:green;\">Account Deleted</b>";
}else{
	visual="<b style=\"color:red;\">OH NO! We Have a Problem!</b>";
}
}
 tab = op.getFacilitator();
%>

<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="Frest admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords" content="admin template, Frest admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="Eligesoft">
    <title>Dashboard | Nexus</title>
    <link rel="apple-touch-icon" href="app-assets/images/ico/apple-icon-120.png">
    <link rel="shortcut icon" type="image/x-icon" href="app-assets/images/ico/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,600%7CIBM+Plex+Sans:300,400,500,600,700" rel="stylesheet">

    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/vendors.min.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/charts/apexcharts.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/extensions/dragula.min.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/tables/datatable/datatables.min.css">
    <!-- END: Vendor CSS-->

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/bootstrap-extended.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/colors.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/components.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/themes/dark-layout.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/themes/semi-dark-layout.css">
    <!-- END: Theme CSS-->

    <!-- BEGIN: Page CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/css/core/menu/menu-types/horizontal-menu.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/pages/dashboard-analytics.css">
        <link rel="stylesheet" type="text/css" href="app-assets/css/pages/app-invoice.css">
    <!-- END: Page CSS-->

    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <!-- END: Custom CSS-->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>


</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body class="horizontal-layout horizontal-menu navbar-sticky 2-columns   footer-static  " data-open="hover" data-menu="horizontal-menu" data-col="2-columns">

    <!-- BEGIN: Header-->
    <nav class="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed bg-primary navbar-brand-center">
        <div class="navbar-header d-xl-block d-none">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item"><a class="navbar-brand" href="F-home.jsp">
                    
                        <h2 class="brand-text mb-0">Administrator</h2>
                    </a></li>
            </ul>
        </div>
        <div class="navbar-wrapper">
            <div class="navbar-container content">
                <div class="navbar-collapse" id="navbar-mobile">
                    <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                        <ul class="nav navbar-nav">
                            <li class="nav-item mobile-menu mr-auto"><a class="nav-link nav-menu-main menu-toggle" href="#"><i class="bx bx-menu"></i></a></li>
                        </ul>
                        
                       
                    </div>
                    <ul class="nav navbar-nav float-right d-flex align-items-center">
                      
                 
                        <li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-expand" ><i class="ficon bx bx-fullscreen"></i></a></li>
                   <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                                <div class="user-nav d-lg-flex d-none"><span class="user-name">Nexus</span><span class="user-status" id="nomeplayer"></span></div><span><img class="round" src="icon/avatar.jpg" alt="avatar" height="40" width="40"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right pb-0">
                            <a class="dropdown-item" href="logx.jsp"><i class="bx bx-power-off mr-50"></i> Logout</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!-- END: Header-->

<!-- BEGIN: Main Menu-->
    <div class="header-navbar navbar-expand-sm navbar navbar-horizontal navbar-fixed navbar-light navbar-without-dd-arrow" role="navigation" data-menu="menu-wrapper">
        <div class="navbar-header d-xl-none d-block">
            <ul class="nav navbar-nav flex-row">
                <li class="nav-item mr-auto"><a class="navbar-brand" href="#">
                        <div class="brand-logo"></div>
                        <h2 class="brand-text mb-0">Administrator</h2>
                    </a></li>
                <li class="nav-item nav-toggle"><a class="nav-link modern-nav-toggle pr-0" data-toggle="collapse"><i class="bx bx-x d-block d-xl-none font-medium-4 primary toggle-icon"></i></a></li>
            </ul>
        </div>
        <div class="shadow-bottom"></div>
        <!-- Horizontal menu content-->
        <div class="navbar-container main-menu-content" data-menu="menu-container">
            <!-- include includes/mixins-->
            <ul class="nav navbar-nav" id="main-menu-navigation" data-menu="menu-navigation" data-icon-style="filled">
                   <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="menu-livicon" data-icon="desktop"></i><span data-i18n="Dashboard">Dashboard</span></a>
                    <ul class="dropdown-menu">
                        <li data-menu=""><a class="dropdown-item align-items-center" href="New_Fac.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Home</a>
                        </li>
                         <li data-menu=""><a class="dropdown-item align-items-center" href="Listap.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Pending Request</a>
                        </li>
                     
                      
                    </ul>
                </li>
                    
                
            </ul>
        </div>
        <!-- /horizontal menu content-->
    </div>
    <!-- END: Main Menu-->



    <!-- BEGIN: Content-->
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
            
            <section id="multiple-column-form">
                    <div class="row match-height">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">New Account</h4>
                                </div>
                                 <div align="center"><%=visual %></div>
                                <div class="card-content">
                                 
                                    <div class="card-body">
                                  
                                            <form method="post"  action="New_Fac.jsp" name="Prodotto"  class="form">

                                            <div class="form-body">
                                                <div class="row">
                                                  
                                                     
                                                    
                                                    <div class="col-md-6 col-12">
                                                        <div class="form-label-group">
                                                        <input id="Nome" type="text"  class="form-control" placeholder="Name" name="Nome" required>                        
                                                            <label for="Nome">Name</label>
                                                        </div>
                                                    </div>
                                                    
                                                      <div class="col-md-6 col-12">
                                                        <div class="form-label-group">
                                                        <input id="Surname" type="text"  class="form-control" placeholder="Surname" name="Surname" required>                        
                                                            <label for="Surname">Surname</label>
                                                        </div>
                                                    </div>
                                                    
                                                     <div class="col-md-6 col-12">
                                                        <div class="form-label-group">
                                                        <input id="Email" type="text"  class="form-control" placeholder="Email" name="Email" required>                        
                                                            <label for="Email">Email</label>
                                                        </div>
                                                    </div>
                                                    
                                                     <div class="col-md-6 col-12">
                                                        <div class="form-label-group">
                                                        <input id="Organization" type="text"  class="form-control" placeholder="Organization" name="Organization" required>                        
                                                            <label for="Organization">Organization</label>
                                                        </div>
                                                    </div>
                                                    
                                                      <div class="col-md-6 col-12">
                                                        <div class="form-label-group">
                                                        <input id="Country" type="text"  class="form-control" placeholder="Country/Town of Organization" name="Country" required>                        
                                                            <label for="Country">Country/Town of Organization</label>
                                                        </div>
                                                    </div>
                                                    
                                                      <div class="col-md-6 col-12">
                                                        <div class="form-label-group">
                                                        <input id="User" type="text"  class="form-control" placeholder="Username" name="Username" required>                        
                                                            <label for="User" id="LUser">Username</label>
                                                        </div>
                                                    </div>
                                                    
                                                     <div class="col-md-6 col-12">
                                                        <div class="form-label-group">
                                                        <input id="Password" type="password"  placeholder="Password"  onFocus="VUSERF(document.getElementById('User').value);" class="form-control" name="Password" required>                        
                                                            <label for="Password">Password</label>
                                                        </div>
                                                    </div>
                                                    
                                                   <div class="col-md-6 col-12">
                                                        <div class="form-label-group">
                                                        <input id="From" type="text"  class="form-control" value="<%=DataI %>" placeholder="Valid FROM" name="From" required>                        
                                                            <label for="From">Valid FROM</label>
                                                        </div>
                                                    </div>
                                                    
                                                     <div class="col-md-6 col-12">
                                                        <div class="form-label-group">
                                                        <input id="To" type="text"  placeholder="Valid TO"  class="form-control" value="<%=unanno %>" name="To" required>                        
                                                            <label for="To">Valid TO</label>
                                                        </div>
                                                    </div>
                                                    
                                                     <div class="col-md-6 col-12">
                                                        <div class="form-label-group">
                                                       <div id="resux"></div>
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                    <div class="col-12 d-flex justify-content-end">
                                                        <input type="hidden" name="Action" value="Ins">
                                                        <button type="submit" class="btn btn-primary mr-1 mb-1">Send</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                         <hr>
                              <div class="table-responsive">
                                            <table class="table zero-configuration">
                                                <thead>
                                                    <tr>
                                                          <th>Name</th>
                      <th>Surname</th>
                      <th>User</th>
                      <th>Pass</th>
                      <th>Email</th>
                      <th>Org</th>
                      <th>Country</th>        
                      <th>Validity</th>
                      <th>Action</th>
                      
                      
                                                        
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                   <%=tab %> 
                                                </tbody>
                                            </table>
                                        </div>  
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- // Basic multiple Column Form section end -->
            </div>
                   
            
         

            </div>
        </div>
    </div>
    </div>
    
    
    
   <script>
   
    function VUSERF(code){
    var url = "VUSERF.jsp?Id="+code;
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	   var esito__ = this.responseText;
	   esito__ = esito__.replace(/^\s+|\s+$/gm,'');
	   if(esito__=='si'){
		   document.getElementById('resux').innerHTML = "<b style=\"color:red;\">Username presente</b>";
		   document.getElementById('User').style  = " border:2px solid red; ";
		   document.getElementById('User').value  = "";
		   document.getElementById('Password').value  = "";
		   document.getElementById('User').focus();
	   }else if(esito__=='no'){
		   document.getElementById('User').style  = " border:2px solid green; ";  
		   document.getElementById('resux').innerHTML = "<b style=\"color:green;\">Username valida</b>";
	   }
   
	}else{
    document.getElementById('resux').innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
    }
	};
	xhttp.open("GET", url, true);
    xhttp.send();	
    }
    
    </script> 
    
   <%@ include file="impaginazione/footer.jsp" %>