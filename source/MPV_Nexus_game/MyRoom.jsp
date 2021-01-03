<%@ include file="impaginazione/intestazione.jsp" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
OpDash op = OpDash.getInstance();
String visual="";boolean esito=false;
String tab="";boolean ver=false;String tabella="";
java.sql.Date Giorno = null;Richieste richieste = null;
try {
	   java.text.SimpleDateFormat sdf = new java.text.SimpleDateFormat("dd-MM-yyyy",Locale.ITALIAN);
	        java.util.Date d= sdf.parse(DataI);
	        Giorno = new java.sql.Date(d.getTime());
	} catch (java.text.ParseException e) 
	{
	  e.printStackTrace();
	}
String idf="";String Ide="";
if(request.getParameter("IdF")==null){
	Ide=(String)session.getAttribute("IdF");
	session.setAttribute("IdF", Ide);
	idf = Ide;
}else{
	idf = (String)request.getParameter("IdF");
}
String Ids = (String) request.getParameter("Id");
String nome = op.getDinamicInfoStanze2(Integer.parseInt(Ids), "Nome");
String info = op.getInfoStanze(Integer.parseInt(Ids));

if(request.getParameter("Action")==null){
	tab = op.getComponenti(Integer.parseInt(Ids));
}else{
	
	String idp = (String) request.getParameter("IdP");
	ArrayList I = new ArrayList();
	I = op.getIdrStream(Integer.parseInt(Ids));
	if(I.isEmpty()){	
		System.out.println("Vuoto");
	}else{
		for(int k=0;k<I.size();k++){
			String Idr = (String) I.get(k);
			int Idd = op.getVPR(Idr);
			if(Idd==Integer.parseInt(idp)){
			ver=true;
			}
		}
		
	if(ver==false){
		esito = op.delTabx("player", "Id", idp);
		esito = op.delTabx("prooms", "IdP", idp);
		if(esito==true){
			visual="<b>Operation performed successfully</b><br>";
		}else{
			visual="<b>Problems while deleting</b><br>";
		}
	}else{
		visual="<b>Cancellation not made, the Player has requests<b><br>";
	}
	tab = op.getComponenti(Integer.parseInt(Ids));
}

}
String stiloso="";
ArrayList I = new ArrayList();
I = op.getIdrStream(Integer.parseInt(Ids));
if(I.isEmpty()){	
}else{
	for(int k=0;k<I.size();k++){
		String Idr = (String) I.get(k);
		if(op.getRPRoom(Idr)==null){			
		}else{
			richieste = (Richieste) op.getRPRoom(Idr);
			if( richieste.getStatus().equals("Pending")){
				
				 String from = richieste.getFrom();
			     from = from.replaceAll("region", "");
			     from = from.trim();
			     String tipo = richieste.getTipo();
			     String valore = richieste.getValore();
			     String mitt = richieste.getRegion();
			     
			     String to = richieste.getTo();
			     to = to.replaceAll("region", "");
			     to = to.trim();
			     
			     if(tipo.equals("plant based") || tipo.equals("meat and fish") || tipo.equals("diary and eggs")){
			    	 stiloso=" style=\"color:green;\" ";
			     }else{
			    	 stiloso=" style=\"color:#E9AB17;\" ";
			     }
				
                tabella = tabella+"<tr><td>"+to+"</td><td>"+from+"</td><td><b "+stiloso+">"+tipo+"</b></td></tr>";
			}		
		}
	}
}	
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
                    
                        <h2 class="brand-text mb-0">FaciliBoard</h2>
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
                            <a class="dropdown-item" href="logout.jsp"><i class="bx bx-power-off mr-50"></i> Logout</a>
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
                 <li class="nav-item"><a class="navbar-brand" href="F-home.jsp">
                    
                        <h2 class="brand-text mb-0">FaciliBoard</h2>
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
                        <li data-menu=""><a class="dropdown-item align-items-center" href="F-home.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Home</a>
                        </li>
                      
                    </ul>
                </li>
                    <li class="dropdown nav-item" data-menu="dropdown"><a class="dropdown-toggle nav-link" href="#" data-toggle="dropdown"><i class="menu-livicon" data-icon="comments"></i><span>Rooms</span></a>
                    <ul class="dropdown-menu">
                
                        <li data-menu=""><a class="dropdown-item align-items-center" href="New_Istance.jsp" data-toggle="dropdown"><i class="bx bx-right-arrow-alt"></i>Manage Rooms</a></li>
                       
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
            
             <section class="users-list-wrapper">
                    <div class="users-list-filter px-1">
                    <b>Room :</b> <b style="color:red;"><%=nome %></b> | <a href="F-switch.jsp?Ids=<%=Ids%>&IdF=<%=Ide%>">CLICK AND SWITCH TO ROOM</a><hr>
                    </div>
                      <div class="users-list-table">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                <div align="center"><%=visual %></div>
                                    <!-- datatable start -->
                                    <div class="table-responsive">
                                        <table id="users-list-datatable" class="table">
                                            <thead>
                                                <tr>
                                                    <th>id</th>
                                                    <th>username</th>
                                                    <th>region</th>
                                                    <th>action</th>
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                               <%=tab %>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- datatable ends -->
                                    <hr>
                                    <b style="color:red;"> ---> PENDING REQUEST: </b>
                                    <hr>
                                     <!-- datatable start -->
                                    <div class="table-responsive">
                                        <table id="users-list-datatable" class="table">
                                            <thead>
                                                <tr>
                                                    <th>Region From</th>
                                                    <th>Region To</th>
                                                    <th>Request</th>
                                                 
                                                    
                                                </tr>
                                            </thead>
                                            <tbody>
                                               <%=tabella %>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!-- datatable ends -->
                                    
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    </section>
            
            
            
            
            
            
            
            
            
            
            </div>
                   
            
         

            </div>
        </div>
    </div>
    <!-- END: Content-->

    
    </div>
   <%@ include file="impaginazione/footer.jsp" %>