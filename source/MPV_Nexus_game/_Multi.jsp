<%@ include file="impaginazione/intestazione.jsp" %>
<%
OpDash op = OpDash.getInstance();
HttpSession sessioni = request.getSession(true);
String sessionid = sessioni.getId();Player play=null;
String username="";String version="";String region="";String pag="";String code="";
String stanza="";
System.out.println("Azione: "+request.getParameter("Action"));
if(request.getParameter("Action").equals("Login")){
username = (String) request.getParameter("Username");
version = (String) request.getParameter("Version");
if(request.getParameter("SelectRegionLogin")==null){
	region = "regionA";
}else{
    region = (String) request.getParameter("SelectRegionLogin");
}
String domanda=(String) request.getParameter("Security");
String risposta=(String) request.getParameter("risposta");
int id = op.getID("Id", "player");
boolean esito = false;
esito = op.newPlayer(username, domanda,risposta, version, region, id);
if(esito==true){
	String IdS = (String)request.getParameter("IdS");
	int Idpr = op.getID("Id", "prooms");
	op.newProoms(id,Integer.parseInt(IdS),region,Idpr);
	session.setAttribute("Username", username);
	session.setAttribute("Version", version);
	session.setAttribute("Region", region);
    session.setAttribute("logged","true");
    session.setAttribute("Cod",Integer.toString(id));
    session.setAttribute("IdS",IdS);
}

}else if(request.getParameter("Action").equals("Au")){
	    username = (String) request.getParameter("Username");
		String cox = op.getIdPlayer(username);
		play = (Player)op.getPlayer(cox);
	    System.out.println("Cox: "+cox);
	    version = play.getTipo();
	    region = play.getRegion();
	    session.setAttribute("Username", username);
		session.setAttribute("Version", version);
		session.setAttribute("Region", region);
		session.setAttribute("Cod",cox);
	    session.setAttribute("logged","true");
	   
}

 username = (String) session.getAttribute("Username");
 version = (String) session.getAttribute("Version");
 region = (String) session.getAttribute("Region"); 
 code = (String) session.getAttribute("Cod");
 stanza = (String)session.getAttribute("IdS");
 
 System.out.println("Username: "+username);
 System.out.println("Versione: "+version);
 System.out.println("Region: " +region);
 System.out.println("Code: " +code);
 System.out.println("IdS: " +stanza);
%>
<!DOCTYPE html>
<html class="loaded full-screen" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="Nexus Game Demo">
    <meta name="author" content="Eligesoft">
    <title>Demo | Nexus Games</title>
    <link rel="apple-touch-icon" href="app-assets/images/ico/apple-icon-120.png">
    <link rel="shortcut icon" type="image/x-icon" href="app-assets/images/ico/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,600%7CIBM+Plex+Sans:300,400,500,600,700" rel="stylesheet">

    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/vendors.min.css">
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
    <!-- END: Page CSS-->

    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <!-- END: Custom CSS-->
<style>
.valoripercentuali{

}
.btn-a{
background-color: #5A8DEE !important;
color:black;
border-color: #2c6de9 !important;
}
.btn-a:active, .btn-a.active{
background-color: red !important;
box-shadow: inset 10px 10px 10px #0000;
-webkit-box-shadow: inset 10px 10px 10px #0000;
-moz-box-shadow: inset 10px 10px 10px #0000;
-o-box-shadow: inset 10px 10px 10px #0000;
}

.btn-b{
background-color: #1c82ad !important;
color:black;
border-color: #2c6de9 !important;
}

.btn-b:active, .btn-b.active{
background-color: red !important;
box-shadow: inset 10px 10px 10px #0000;
-webkit-box-shadow: inset 10px 10px 10px #0000;
-moz-box-shadow: inset 10px 10px 10px #0000;
-o-box-shadow: inset 10px 10px 10px #0000;
}

.btn-c{
background-color: #A9B9CF !important;
color:black;
border-color: #2c6de9 !important;
}
.btn-c:active, .btn-c.active{
background-color: red !important;
box-shadow: inset 10px 10px 10px #0000;
-webkit-box-shadow: inset 10px 10px 10px #0000;
-moz-box-shadow: inset 10px 10px 10px #0000;
-o-box-shadow: inset 10px 10px 10px #0000;
}

.btn-d{
background-color: #EBEEF2 !important;
color:black;
border-color: #2c6de9 !important;
}
.btn-d:active, .btn-d.active{
background-color: red !important;
box-shadow: inset 10px 10px 10px #0000;
-webkit-box-shadow: inset 10px 10px 10px #0000;
-moz-box-shadow: inset 10px 10px 10px #0000;
-o-box-shadow: inset 10px 10px 10px #0000;
}


.btn-w{
background-color: #62768C !important;
color:black;
border-color: #2c6de9 !important;
}
.btn-w:active, .btn-w.active{
background-color: red !important;
box-shadow: inset 10px 10px 10px #0000;
-webkit-box-shadow: inset 10px 10px 10px #0000;
-moz-box-shadow: inset 10px 10px 10px #0000;
-o-box-shadow: inset 10px 10px 10px #0000;
}


.btn-eu{
background-color: #FFCC00 !important;
color:black;
border-color: #2c6de9 !important;
}
.btn-eu:hover{
background-color: #FBB117 !important;
color:black;
border-color: #2c6de9 !important;

}
.btn-eu:active, .btn-eu.active{
background-color: #FBB117 !important;
box-shadow: inset 10px 10px 10px #0000;
-webkit-box-shadow: inset 10px 10px 10px #0000;
-moz-box-shadow: inset 10px 10px 10px #0000;
-o-box-shadow: inset 10px 10px 10px #0000;
}


.boxy{
border:1px solid #5A8DEE;
box-shadow: 0px 0px 25px #aeaeae;border-radius: 5px;
}

.celle{
    vertical-align: middle;
    border-bottom: 1px solid #DFE3E7;
	border-right: 1px solid #DFE3E7;
    border-top: none;
	font-family: "Rubik", Helvetica, Arial, serif;
	padding: 1.15rem 1.20rem;
	box-sizing: content-box;
	display: table-cell;
}
.eff{
    color: #475F7B;
    border-top: none;
    vertical-align: middle;
    font-size: .8rem;
	font-weight:600;
    letter-spacing: 1px;
	border-bottom: 2px solid #DFE3E7;
}

.nonattivo {
color: #7d8490;
background-color: silver!important;
}
</style>


<link rel="stylesheet" type="text/css" href="app-assets/css/plugins/forms/wizard.css">
 <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/forms/spinner/jquery.bootstrap-touchspin.css">
 <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/charts/chartist.min.css">
 <link rel="stylesheet" type="text/css" href="app-assets/css/pages/chart-chartist.css">
 <style>
 .blog-sticky{
    position: sticky;
    top: 100px;
}
 </style>

 </head>
<!-- END: Head-->
<!-- BEGIN: Body-->

<body onLoad="myHeight();MyTradeMulti('<%=region %>','<%=code %>','<%=stanza %>'); MyTrade('<%=region %>','<%=code %>'); VRequest('<%=region %>','<%=code %>','Mf');VRequest('<%=region %>','<%=code %>','Pb');VRequest('<%=region %>','<%=code %>','De');VRequest('<%=region %>','<%=code %>','Ff');VRequest('<%=region %>','<%=code %>','Bf');VRequest('<%=region %>','<%=code %>','Ec');" class="horizontal-layout horizontal-menu navbar-sticky 2-columns   footer-static  " data-open="hover" data-menu="horizontal-menu" data-col="2-columns">

       <!-- BEGIN: Header-->
    <nav class="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed bg-primary navbar-brand-center" style="min-height:0rem;max-height:3rem;">
    
        <div class="navbar-wrapper">
            <div class="navbar-container content">
                <div class="navbar-collapse" id="navbar-mobile">
                    <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                       
                        
                        <ul class="nav navbar-nav">
                            
                             <li class="nav-item d-none d-lg-block" style="padding-top:13px;"><a class="nav-link bookmark-star" title="Load a saved region configuration, selected by Region button"><i class="ficon bx bx-reset warning" onclick="LoadGame()"></i></a>
                            <li class="nav-item d-none d-lg-block" style="padding-top:13px;"><a class="nav-link bookmark-star" title="Save a region configuration, selected by Region button"><i class="ficon bx bx-save warning" onclick="SaveGame()"></i></a>
                            <li class="nav-item d-none d-lg-block" style="padding-top:13px;"><a class="nav-link bookmark-star"><i class="ficon bx bx-arrow-back warning"></i></a></li>
				
                             <li class="nav-item d-none d-lg-block" style="margin-left:60px;padding-top:18px;text-align:left;">
                             <a data-toggle="tooltip" data-placement="bottom" 
                             title="Food security (>=95%) -% of food supply met by food production in the EU" id="">   
                             <img src="icon/fs.png" style="width:24px;" >
                             </a>
                             </li>
                             
                             <li class="nav-item d-none d-lg-block" style="margin-left:10px;padding-top:20px;">
                             <a data-toggle="tooltip" data-placement="bottom"  style="font-size:1.2rem;color:#E55B3C;" 
                             title="Food security (>=95%) - % of food supply met by food production in the EU" id="">
                             <span id="eufood"></span>
                             </a>
                             </li>
                             
                              <li class="nav-item d-none d-lg-block" style="margin-left:15px;padding-top:18px;"> 
                              <a data-toggle="tooltip" data-placement="bottom" title="Energy security (70%) - % of energy supply met by energy generation in the EU" id="">   
                              <img src="icon/es.png" style="width:24px;"  >
                              </a>
                              </li>
                             
                             <li class="nav-item d-none d-lg-block" style="margin-left:10px;padding-top:20px;">
                             <a data-toggle="tooltip" data-placement="bottom" style="font-size:1.2rem;color:#E55B3C;" 
                             title="Energy security (70%) - % of energy supply met by energy generation in the EU" id="">   
                             <span id="euenergy"></span>
                             </a>                         
                             </li>
                             
                              <li class="nav-item d-none d-lg-block" style="margin-left:15px;padding-top:18px;">   
                              <a data-toggle="tooltip" data-placement="bottom" 
                              title="Carbon emissions (16) - EU-average carbon footprint of production in kg/cap/day (reduce 20%)" id="">
                             <img src="icon/cb.png" style="width:24px;">
                              </a>
                              </li>
                              
                             <li class="nav-item d-none d-lg-block" style="margin-left:10px;padding-top:20px;">
                             <a data-toggle="tooltip" data-placement="bottom" 
                             title="Carbon emissions (16) - EU-average carbon footprint of production in kg/cap/day (reduce 20%)" id="" style="font-size:1.2rem;color:#E55B3C;">
                             <span id="carboneu"></span>
                             </a>
                             
                             </li>
							 
							 
						<li class="dropdown dropdown-notification nav-item d-none d-lg-block" id="tradecenter"></li>
                        <li class="nav-item d-none d-lg-block" style="margin-left:15px;padding-top:25px;font-size:1rem;color:#FFFFFF;font-style:italic;" id="loadimport">   </li>
                            
                        </ul>
                    </div>
                    <ul class="nav navbar-nav float-right d-flex align-items-center">
                    <div id="user-status"><span style="color:#fff"></span></div>
                    
							 
							
                    			<li class="nav-item d-none d-lg-block" style="padding-top:8px;text-align:right;padding-right:15px;">   
                               	<div id="bID"><b style="color:white;">REGION A</b></div> 
                               	</li>
                               
                              <li class="nav-item d-none d-lg-block" style="padding-top:8px;text-align:right;padding-right:5px;">   
                              <a data-toggle="tooltip" data-placement="bottom" title="Exceedance sustainable limits → Land" id=""> 
                              <img src="icon/la.png" style="width:24px;" >
                              </a>
                              </li>
                               
                             <li class="nav-item d-none d-lg-block" style="text-align:right;padding-right:15px;padding-top:8px;">
                             <a data-toggle="tooltip" data-placement="bottom" title="Exceedance sustainable limits → Land" id="" style="font-size:1.2rem;color:#E55B3C;">
                              <span id="Land_limits"></span></a>
                             </li>
                             
                               <li class="nav-item d-none d-lg-block" style="padding-top:8px;text-align:right;padding-right:5px;">   
                               <a data-toggle="tooltip" data-placement="bottom" title="Exceedance sustainable limits → Green Water" id="">
                               <img src="icon/gww.png" style="width:24px;">
                               </a>
                               </li>
                             <li class="nav-item d-none d-lg-block" style="text-align:right;padding-right:15px;padding-top:8px;">
                            
                             <a data-toggle="tooltip" data-placement="bottom" title="Region A: Exceedance sustainable limits → Green Water" id="" style="font-size:1.2rem;color:#E55B3C;">
                              <span id="GW_limits"></span></a>
                             
                             </li>
                             
                               <li class="nav-item d-none d-lg-block" style="padding-top:8px;text-align:right;padding-right:5px;"> 
                                <a data-toggle="tooltip" data-placement="bottom" title="Exceedance sustainable limits → Blue Water" id="">
                                <img src="icon/bw.webp" style="width:24px;"  class="bx-flip-horizontal"></a>
                                
                                </li>
                             <li class="nav-item d-none d-lg-block" style="text-align:right;padding-right:20px;padding-top:8px;">
                            
                             <a data-toggle="tooltip" data-placement="bottom" title="Exceedance sustainable limits → Blue Water" id="" style="font-size:1.2rem;color:#B1FB17;">
                              <span id="BW_limits"></span></a>
                            
                             </li>  
                             
                               <li class="nav-item d-none d-lg-block" style="padding-top:8px;text-align:right;padding-right:5px;"> 
                                <a data-toggle="tooltip" data-placement="bottom" title="Desirability Penalty" id="">
                                <img src="icon/penalty.png" style="width:24px;"  class="bx-tada bx-flip-horizontal"></a>
                                
                                </li>
                             <li class="nav-item d-none d-lg-block" style="text-align:right;padding-right:20px;padding-top:8px;">
                            
                             <a data-toggle="tooltip" data-placement="bottom" title="Desirability Penalty" id="penality" style="font-size:1.2rem;color:#B1FB17;">0</a>
                            
                             </li>  

                     
                   <li class="nav-item d-none d-lg-block"><a class="nav-link nav-link-expand" ><i class="ficon bx bx-fullscreen"></i></a></li>
                   <li class="dropdown dropdown-user nav-item"><a class="dropdown-toggle nav-link dropdown-user-link" href="#" data-toggle="dropdown">
                                <div class="user-nav d-lg-flex d-none"><span class="user-name">Nexus</span><span class="user-status" id="nomeplayer"></span></div><span><img class="round" src="icon/avatar.jpg" alt="avatar" height="40" width="40"></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right pb-0">
                            <a class="dropdown-item" href="auth-login.html"><i class="bx bx-power-off mr-50"></i> Logout</a>
                            </div>
                        </li>
                     
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    <!-- END: Header-->


    <!-- BEGIN: Content-->
    <div class="app-content content">
        <div class="content-overlay"></div>
        <div class="content-wrapper" style="margin-top:30px !important;">
            <div class="content-body">
                <!-- app invoice View Page -->
                <section class="invoice-edit-wrapper">
                    <div class="row">

                         <!-- invoice action  -->
                        <div class="col-xl-5 col-md-4 col-12">
                            <div class="card invoice-action-wrapper shadow-none border">
                                <div class="card-body">
                                    <!-- accordion start -->
                                          <h4 class="card-title" style="font-weight:700;color:#F62817;width:100%;"><i class="livicon-evo" data-options="name:angle-wide-right.svg; size: 35px; style:lines; strokeColor:#F62817;"></i>
                                     Play now: make your choices!
                                        <div class="modal-primary mr-1 mb-1 d-inline-block" style="text-align:right;float:right;">
                                                    <!-- Button trigger for primary themes modal -->
                                                    <button type="button" class="btn btn-light-danger mr-1 mb-1" data-toggle="modal" data-target="#primary">
                                                       <i class="bx bx-star"></i> SUBMIT DASHBOARD
                                                    </button>

                                                    <!--primary theme Modal -->
                                                    <div class="modal fade text-left" id="primary" tabindex="-1" role="dialog" aria-labelledby="myModalLabel160" aria-hidden="true">
                                                        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
                                                            <div class="modal-content">
                                                                <div class="modal-header bg-primary">
                                                                    <h5 class="modal-title white" id="myModalLabel160">My Scores</h5>
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        <i class="bx bx-x"></i>
                                                                    </button>
                                                                </div>
                                                                <div class="modal-body" style="font-weight:normal;color:black;" id="tabscore">

                                                                </div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-light-secondary" data-dismiss="modal">
                                                                        <i class="bx bx-x d-block d-sm-none"></i>
                                                                        <span class="d-none d-sm-block">Close</span>
                                                                    </button>
                                                                   
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    
                                                    
                                                </div>
                                     
                                     
                                     
                                     
                                     
                                     
                                     
                                     </h4>
                                   				<div class="col-sm-12">
                                          <div style="width:100%;">
                                    
                                                
                                                    <label for="lastNameRegion"><i class="livicon-evo" data-options="name:globe.svg; size: 35px; style:original; strokeColor: #22A7F0; "></i> <b>CHOOSE THE REGION</b>: </label>
                                                     <div class="btn-group btn-group-toggle mb-1 active" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                    <label id="labregionA" class="btn btn-a regionA nonattivo" style="padding:0.1rem 0.7rem;line-height: 2.5rem;width:19%;float:left;">
                                                        <input type="radio" class="form-control" name="region" id="regionA" style="padding:0.1rem 0.7rem;line-height: 2.5rem;height:auto;" onchange=" localSaveData(); localLoadData(); disableButtons('A'); MyTrade('A','<%=code %>'); VRequest('A','<%=code %>','Mf');VRequest('A','<%=code %>','Pb');VRequest('A','<%=code %>','De');VRequest('A','<%=code %>','Ff');VRequest('A','<%=code %>','Bf');VRequest('A','<%=code %>','Ec');" checked> A
                                                    </label> 
                                                    <label id="labregionB" class="btn btn-b regionB nonattivo " style="padding:0.1rem 0.7rem;line-height: 2.5rem;width:19%;margin-left:1%;float:left; ">
                                                        <input type="radio" class="form-control" name="region" id="regionB" style="padding:0.1rem 0.7rem;line-height: 2.5rem;height:auto;" onchange=" localSaveData(); localLoadData(); disableButtons('B'); MyTrade('B','<%=code %>'); VRequest('B','<%=code %>','Mf');VRequest('B','<%=code %>','Pb');VRequest('B','<%=code %>','De');VRequest('B','<%=code %>','Ff');VRequest('B','<%=code %>','Bf');VRequest('B','<%=code %>','Ec');" >B
                                                    </label>
                                                    <label id="labregionC" class="btn btn-c regionC nonattivo" style="padding:0.1rem 0.7rem;line-height: 2.5rem;width:19%;margin-left:1%;float:left; ">
                                                        <input type="radio" class="form-control" name="region" id="regionC" style="padding:0.1rem 0.7rem;line-height: 2.5rem;height:auto;" onchange="  localSaveData(); localLoadData(); disableButtons('C'); MyTrade('C','<%=code %>'); VRequest('C','<%=code %>','Mf');VRequest('C','<%=code %>','Pb');VRequest('C','<%=code %>','De');VRequest('C','<%=code %>','Ff');VRequest('C','<%=code %>','Bf');VRequest('C','<%=code %>','Ec');">C
                                                    </label>
                                                    <label id="labregionD" class="btn btn-d regionD nonattivo"  style="padding:0.1rem 0.7rem;line-height: 2.5rem;width:19%;margin-left:1%;float:left;">
                                                        <input type="radio" class="form-control" name="region" id="regionD" style="padding:0.1rem 0.7rem;line-height: 2.5rem;height:auto;" onchange="  localSaveData(); localLoadData(); disableButtons('D'); MyTrade('D','<%=code %>'); VRequest('D','<%=code %>','Mf');VRequest('D','<%=code %>','Pb');VRequest('D','<%=code %>','De');VRequest('D','<%=code %>','Ff');VRequest('D','<%=code %>','Bf');VRequest('D','<%=code %>','Ec');">D
                                                    </label>
													
													<!-- <a  target="_blank" href="EU-Index.html" class="form-control btn btn-eu" style="padding:0.1rem 0.7rem;line-height: 2.5rem;width:19%;margin-left:1%;float:left;text-align:center;background-color:#FFCC00;color:white;height:auto;">EU</a> -->
													<a  target="_blank" href="#" class="form-control btn btn-eu" style="padding:0.1rem 0.7rem;line-height: 2.5rem;width:19%;margin-left:1%;float:left;text-align:center;background-color:#FFCC00;color:white;height:auto;" onclick='window.open("EU-Index.html");return false;'>EU</a>
                                                </div>
                                                </div>
                                             
                                            </div>
                                                <div id="accordion-icon-wrapper2" class="collapse-icon accordion-icon-rotate">

                                                    <div class="accordion" id="accordionWrapar3">
                                                        <div class="card collapse-header open">
                                                            <div id="heading27" class="card-header" data-toggle="collapse" role="button" data-target="#accordion16" aria-expanded="true" aria-controls="accordion16">
                                                                <span class="collapse-title d-flex align-items-center" style="color:#4AA02C;">
                                                                 <img src="icon/fc.png" style="width:30px;color:#4AA02C;">
                                                                    &nbsp;FOOD CHOICES
                                                                    </span>
                                                            </div>
                                                            <div id="accordion16" role="tabpanel" data-parent="#accordionWrapar3" aria-labelledby="heading27" class="collapse show">
                                                                <div class="card-content">
                                                                    <div class="card-body">
                                                                                 <fieldset class="pt-0">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="firstName12">Food intake (kcal/cap/day) </label>
                                                    <input type="number"  class="form-control" name="D4" id="f_D4" placeholder="Food intake (kcal/cap/day)" value="2790" oninput="NOTNEG('f_D4')";>
                                                </div>
                                                
                                                <div class="boxy">
                                                  <div class="form-group" style="width:90%;margin-left:4%;">
                                                    <label for="emailAddress12">Vegan</label>
                                                      
                                                      <input type="text"  class="controllo touchspin form-control" name="C6" id="f_C6" data-bts-postfix="%" value="0" onfocus = "sessionStorage.setItem('f_C6', this.value)" onblur="Controllo('f_C6')" >
                                            
                                                </div>
                                                
                                                  <div class="form-group" style="width:90%;margin-left:4%;">
                                                    <label for="emailAddress12">Vegetarian</label>
                                                      
                                                      <input type="text"  class="controllo touchspin form-control" name="C7" id="f_C7" data-bts-postfix="%" value="6" onfocus = "sessionStorage.setItem('f_C7', this.value)" onblur="Controllo('f_C7')" >
                                            
                                                </div>
                                                
                                                   <div class="form-group" style="width:90%;margin-left:4%;">
                                                    <label for="emailAddress12">Flexitarian</label>
                                                      

                                                      <input type="text"  class="controllo touchspin form-control" name="C8" id="f_C8" value="94" data-bts-postfix="%" onfocus = "sessionStorage.setItem('f_C8', this.value)" onblur="Controllo('f_C8')" >
                                            
                                                   
                                                </div>
                                                
                                                <div class="form-group"  style="width:90%;margin-left:4%;">
                                                    <label for="firstName12">Nr of meat/fish days per week in the average flexitarian diet </label>
                                                    <input type="number"  class="form-control" name="A8" id="A8_f" placeholder="7" value="7" min="1" max="7" oninput="MINMAX('A8_f')";>
                                                </div>
                                     
                                            </div>
                                            
                                      
                                              
                                        
                                                
                                                
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="card">
                                                
                                                  <div class="form-group">
                                                    <label for="lastName1">Food waste </label>
                                                    <input type="text" class="touchspin form-control" data-bts-postfix="%" name="D5" id="f_D5"  value="20" >
                                                </div>
                                                
                             
                                <div class="card-content">
                                    <div class="card-body pl-0">
                                        <div class="height-300">
                                            <canvas id="simple-pie-chart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                            </div>
                                        </div>
                                        
                                   
                      
                                        
                                        
                                        
                                    </fieldset>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card collapse-header">
                                                            <div id="heading82" class="card-header" data-toggle="collapse" role="button" data-target="#accordion26" aria-expanded="false" aria-controls="accordion26">
                                                                <span class=" collapse-title d-flex align-items-center" style="color:#4AA02C;">
                                                               <img src="icon/fp.png" style="width:30px;color:#4AA02C;">&nbsp;

                                                                  FOOD PRODUCTION
                                                                </span>
                                                            </div>
                                                            <div id="accordion26" role="tabpanel" data-parent="#accordionWrapar3" aria-labelledby="heading82" class="collapse" aria-expanded="false">
                                                                <div class="card-content">
                                                                    <div class="card-body">
                                                                        <fieldset class="pt-0">
                                        <h6 class="py-50">The following measures can be applied on your rainfed land:</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="proposalTitle1">Measure:</label>                                 
                                                                   </div>
                                                <div class="form-group">
                                                   <span style="font-style:italic;"> Closing the water limited yield gap </span>
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>% of rainfed land</label>
                                                   <input type="text"  class="touchspin form-control" value="10" id="G14" name="G14" data-bts-postfix="%">
                                                </div>
                                                <div class="form-group">
                                                   
                                                </div>
                                            </div>
                                            
                                               <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="proposalTitle1">Measure:</label>                                 
                                                                   </div>
                                                <div class="form-group">
                                                 <span style="font-style:italic;">  Applying organic mulching </span> 
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>% of rainfed land</label>
                                                   <input type="text"  class="touchspin form-control" value="10"  id="G15" name="G15" data-bts-postfix="%">
                                                </div>
                                                <div class="form-group">
                                                   
                                                </div>
                                            </div>
                                            
                                            
                                            
                                            <div class="col-sm-12">
                                               <h6 class="py-50">For your irrigated land you can choose one combination from the list.</h6>
                                            </div>
                                            
                                            
                                            <div class="col-sm-8">
                                               
                                                                   
                                                 <div class="form-group">
                                                    <label>Measure:</label>
                                                   <select name="Measure" id="Measure" class="form-control" style="font-size:12px;">
                                                   <option value="1">Apply deficit instead of full irrigation</option>
                                                   <option value="2">Apply deficit irrigation and organic mulching</option>
                                                   <option value="3">Apply deficit irrigation,organic mulching and drip irrigation</option>
                                                   </select>
                                                </div>                  
                                                                   
                                            
                                            </div>
                                            <div class="col-sm-4">
                                                <div class="form-group">
                                                    <label>% of irrigated land</label>
                                                   <input type="text"  class="touchspin form-control" value="0"  name="G19" id="G19" data-bts-postfix="%">
                                                </div>
                                                <div class="form-group">
                                                   
                                                </div>
                                            </div>
                                            
                                            
                                            
                                        </div>
                                    </fieldset>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                           <div class="card collapse-header">
                                                            <div id="heading37" class="card-header" data-toggle="collapse" role="button" data-target="#accordion72" aria-expanded="false" aria-controls="accordion72">
                                                                <span class=" collapse-title d-flex align-items-center"  style="color:#4AA02C;">
                                                                 <img src="icon/fi.png" style="width:30px;color:#4AA02C;">&nbsp;
                                                                    FOOD IMPORT
                                                                </span>
                                                            </div>
                                                            <div id="accordion72" role="tabpanel" data-parent="#accordionWrapar3" aria-labelledby="heading37" class="collapse" aria-expanded="false">
                                                                <div class="card-content">
                                                                    <div class="card-body">
                                                                    <fieldset class="pt-0">
                                        <h6 class="py-50">Category: Plant-based</h6>
                                        <div class="row">
                                       <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label style="font-size:11px;">% food in this category imported <b id="pb">(Source World)</b></label>
                                                   <input type="text"  class="touchspin form-control" value="0" id="E30" name="E30" value="100" data-bts-postfix="%" onchange="Quest('plant based',this.value,document.getElementById('pb').innerHTML,'<%=code%>','<%=version%>');">

                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                     <label for="lastName1">Source </label>
                                                     <div class="btn-group btn-group-toggle mb-1" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                    <label class="btn btn-a" id="labelPlantA" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsplant" id="planta" value="A" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('A','pb');Quest('plant based',document.getElementById('E30').value,'A','<%=code%>','<%=version%>');"> A
                                                    </label>
                                                    <label class="btn btn-b" id="labelPlantB" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsplant" id="plantb" value="B" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('B','pb');Quest('plant based',document.getElementById('E30').value,'B','<%=code%>','<%=version%>');"> B
                                                    </label>
                                                    <label class="btn btn-c" id="labelPlantC" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsplant" id="plantc" value="C" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('C','pb');Quest('plant based',document.getElementById('E30').value,'C','<%=code%>','<%=version%>');"> C
                                                    </label>
                                                    <label class="btn btn-d" id="labelPlantD" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsplant" id="plantd" value="D" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('D','pb');Quest('plant based',document.getElementById('E30').value,'D','<%=code%>','<%=version%>');"> D
                                                    </label>
                                                    <label class="btn btn-w active" id="labelPlantW" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsplant" id="plantworld" value="W" onchange="Source('WORLD','pb');Clean('plant based',<%=version %>);" checked style="padding:0.1rem 0.7rem;line-height: 2.5rem;"> WORLD
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                            
                                             <div class="col-12">
                                            <div id="quest_plant_based" style="width:100%;"></div>
                                            </div>
                                            
                                            <div class="col-12">
                                             <h6 class="py-50">Category: Meat & Fish</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label  style="font-size:11px;">% food in this category imported <b id="mf">(Source World)</b></label>
                                                   <input type="text"  class="touchspin form-control" value="0"  id="E31" name="E31" value="100" data-bts-postfix="%" onchange="Quest('meat and fish',this.value,document.getElementById('mf').innerHTML,'<%=code%>','<%=version%>');">

                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                     <label for="lastName1">Source </label>
                                                     <div class="btn-group btn-group-toggle mb-1" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                     <label class="btn btn-a " id="labelMeatA" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsmeat" id="meata" value="A" onchange="Source('A','mf');Quest('meat and fish',document.getElementById('E31').value,'A','<%=code%>','<%=version%>');" > A
                                                    </label>
                                                    <label class="btn btn-b " id="labelMeatB" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsmeat" id="meatb" value="B" onchange="Source('B','mf');Quest('meat and fish',document.getElementById('E31').value,'B','<%=code%>','<%=version%>');" > B
                                                    </label>
                                                    <label class="btn btn-c" id="labelMeatC" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsmeat" id="meatc" value="C" onchange="Source('C','mf');Quest('meat and fish',document.getElementById('E31').value,'C','<%=code%>','<%=version%>');" > C
                                                    </label>
                                                    <label class="btn btn-d" id="labelMeatD" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsmeat" id="meatd" value="D" onchange="Source('D','mf');Quest('meat and fish',document.getElementById('E31').value,'D','<%=code%>','<%=version%>');" > D
                                                    </label>
                                                    <label class="btn btn-w active" id="labelMeatW" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsmeat" id="meatworld" value="W" checked onchange="Source('WORLD','mf')"> WORLD
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                            
												<div class="col-12">
											 <div id="quest_meat_and_fish" style="width:100%;"></div>
                                            </div>
                                            
                                             <div class="col-12">
                                             <h6 class="py-50">Category: Diary & Eggs</h6>
                                            </div>
                                          <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label  style="font-size:11px;">% food in this category imported <b id="de">(Source World)</b></label>
                                                   <input type="text"  class="touchspin form-control" value="0"  id="E32" name="E32" value="100" data-bts-postfix="%" onchange="Quest('diary and eggs',this.value,document.getElementById('de').innerHTML,'<%=code%>','<%=version%>');">

                                                </div>
                                            </div>
                                             <div class="col-sm-6">
                                                <div class="form-group">
                                                     <label for="lastName1">Source </label>
                                                     <div class="btn-group btn-group-toggle mb-1" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                    <label class="btn btn-a " id="labelDiaryA" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsdiary" id="diarya" value="A" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('A','de');Quest('diary and eggs',document.getElementById('E32').value,'A','<%=code%>','<%=version%>');"> A
                                                    </label>
                                                    <label class="btn btn-b " id="labelDiaryB" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsdiary" id="diaryb" value="B" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('B','de');Quest('diary and eggs',document.getElementById('E32').value,'B','<%=code%>','<%=version%>');"> B
                                                    </label>
                                                    <label class="btn btn-c" id="labelDiaryC" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsdiary" id="diaryc" value="C" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('C','de');Quest('diary and eggs',document.getElementById('E32').value,'C','<%=code%>','<%=version%>');"> C
                                                    </label>
                                                    <label class="btn btn-d" id="labelDiaryD" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsdiary" id="diaryd" value="D" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('D','de');Quest('diary and eggs',document.getElementById('E32').value,'D','<%=code%>','<%=version%>');"> D
                                                    </label>
                                                    <label class="btn btn-w active" id="labelDiaryW" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsdiary" id="diaryworld" value="W" onchange="Source('WORLD','de')" checked style="padding:0.1rem 0.7rem;line-height: 2.5rem;"> WORLD
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                            
                                              <div class="col-12">
                                                <div id="quest_diary_and_eggs" style="width:100%;"></div>
                                                </div>
                                        </div>
                                    </fieldset>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card collapse-header">
                                                            <div id="heading83" class="card-header" data-toggle="collapse" role="button" data-target="#accordion802" aria-expanded="false" aria-controls="accordion802">
                                                                <span class=" collapse-title d-flex align-items-center"  style="color:	#E9AB17;">
                                                            <img src="icon/ec.png" style="width:30px;color:#E9AB17;">&nbsp;

                                                                  ENERGY CONSUMPTION
                                                                </span>
                                                            </div>
                                                            <div id="accordion802" role="tabpanel" data-parent="#accordionWrapar3" aria-labelledby="heading83" class="collapse" aria-expanded="false">
                                                                <div class="card-content">
                                                                    <div class="card-body">
                                                                       <fieldset class="pt-0">
                                        <h6 class="pb-50"><b style="font-style:italic;">Reduction of energy consumption</b></h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="firstName12"> <i class="ficon bx bxs-factory"></i> Reduction in industry </label>
                                                    <input type="text"  class="touchspin form-control" data-bts-postfix="%" name="e_N5" id="e_N5" placeholder="Reduction in industry" value="0">
                                                </div>
                                            </div>
											
											  <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="lastName1"><i class="ficon bx bx-home"></i> Reduction in households  </label>
                                                    <input type="text"  class="touchspin form-control" data-bts-postfix="%"  name="e_N8" id="e_N8" placeholder="Reduction in households" value="0">
                                                </div>
                                            </div>
											
                                            
                                        </div>
                                        
                                         <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="firstName12"><i class="ficon bx bxs-briefcase"></i> Reduction in the service sector</label>
                                                    <input type="text"  class="touchspin form-control" data-bts-postfix="%"  name="e_N7" id="e_N7" placeholder="Reduction in the service sector" value="0">
                                                </div>
                                            </div>
                                          
										  
										  <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="lastName1"><i class="ficon bx bx-train"></i> Reduction in the transp. sector  </label>
                                                    <input type="text"  class="touchspin form-control" data-bts-postfix="%"  name="e_N6" id="e_N6" placeholder="Reduction in the transport" value="0">
                                                </div>
                                            </div>
										  
                                        </div>
                                         <div class="row">
                                            <div class="col-sm-12">
                                            <hr>
                                            </div>
                                            </div>
                                         <h6 class="pb-50"><b style="font-style:italic;">Changes in consumption patterns</b></h6>
                                          <div class="row">
                                            <div class="col-sm-12">
                                            <hr>
                                            </div>
                                            </div>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="firstName12"><i class="ficon bx bxs-truck"></i> Electrification of the transport sector</label>
                                                    <input type="text"  class="touchspin form-control" data-bts-postfix="%" name="e_N11" id="e_N11" placeholder="Reduction in industry" value="2" onchange="ResultBalancer()">
                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="lastName1"><i class="ficon bx bxs-bolt"></i> Replace gas/coal use in the household by electricity </label>
                                                    <input type="text"  class="touchspin form-control" data-bts-postfix="%"  name="e_N12" id="e_N12" placeholder="Reduction in the transport" value="0">
                                                </div>
                                            </div>
                                            
                                              <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="lastName1"><i class="ficon bx bxs-hot"></i> Percentage of biofuels in total fuel consumption </label>
                                                    <input type="text"  class="touchspin form-control" data-bts-postfix="%"  name="e_N13" id="e_N13" placeholder="Reduction in the transport" value="26" onchange="ResultBalancer()">
                                                </div>
                                            </div>
                                            
                                            <div class="col-sm-12">
                                             <div class="card">
                                <div class="card-header">
                                    <h6 class="card-title">Stacked Bar Chart</h6>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="height-300"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                                            <canvas id="bar-chart-energy" width="80%" height="600" class="chartjs-render-monitor" style="display: block; height: 500px; width: 660px;"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                    </div>        
                                            
                                            
                                        </div>
                                    </fieldset>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card collapse-header">
                                                            <div id="heading92" class="card-header" data-toggle="collapse" role="button" data-target="#accordion121" aria-expanded="false" aria-controls="accordion121">
                                                                <span class=" collapse-title d-flex align-items-center"  style="color:	#E9AB17;">
                                           <img src="icon/em.png" style="width:30px;color:#E9AB17;">&nbsp;

                                                                  ELECTRICITY MIX
                                                                </span>
                                                            </div>
                                                            <div id="accordion121" role="tabpanel" data-parent="#accordionWrapar3" aria-labelledby="heading92" class="collapse" aria-expanded="false">
                                                                <div class="card-content">
                                                                    <div class="card-body">
                                                                    	<div id="freePoints"> <h6 class="py-50"><b style="font-style:italic;">Free Points: 0</b></h6></div>
                                                                        <fieldset class="pt-0">
                                        <h6 class="py-50"><b style="font-style:italic;">Renewable:</b></h6>
                                        <div class="row">
                                          
                                           
                                           
                                            <div class="col-sm-6">
                                            
                                            <div class="boxy">
                                            
                                            
                                              <div class="form-group"  style="width:90%;margin-left:4%;">
                                                    <label>Wind</label>
                                                   <input type="text"  class="touchspin form-control"  id="em_J21" name="J21" data-bts-postfix="%" value="12" onblur="EnergyCheck('em_J21')" onfocus = "sessionStorage.setItem('em_J21', this.value)">
                                                </div>
                                                <div class="form-group"  style="width:90%;margin-left:4%;">
                                                    <label>Solar</label>
                                                   <input type="text"  class="touchspin form-control" id="em_J22" name="J22" data-bts-postfix="%" value="3" onblur="EnergyCheck('em_J22')" onfocus = "sessionStorage.setItem('em_J22', this.value)">
                                                </div>
                                                <div class="form-group"  style="width:90%;margin-left:4%;">
                                                    <label>Hydro</label>
                                                   <input type="text"  class="touchspin form-control" id="em_J23" name="J23" data-bts-postfix="%" value="18" onblur="EnergyCheck('em_J23')" onfocus = "sessionStorage.setItem('em_J23', this.value)">
                                                </div>
                                                 <div class="form-group"  style="width:90%;margin-left:4%;">
                                                    <label>Biofuels</label>
                                                   <input type="text"  class="touchspin form-control" id="em_J24" name="J24" data-bts-postfix="%" value="3" onblur="EnergyCheck('em_J24')" onfocus = "sessionStorage.setItem('em_J24', this.value)">
                                                </div>
                                                
                                                </div>  
                                              
                                          <br>
                                           
                                            <h6 class="pb-80"><b style="font-style:italic;">Non-renewable</b></h6>
                                         
                                          
                                            
                                             <div class="form-group">
                                                    <label>Nuclear</label>
                                                   <input type="text"  class="touchspin form-control" id="em_J25" name="J25" data-bts-postfix="%" value="4" onblur="EnergyCheck('em_J25')" onfocus = "sessionStorage.setItem('em_J25', this.value)">
                                                </div>
                                                <div class="form-group">
                                                    <label>Fossil</label>
                                                   <input type="text"  class="touchspin form-control" id="em_J26" name="J26" data-bts-postfix="%" value="60" onblur="EnergyCheck('em_J26')" onfocus = "sessionStorage.setItem('em_J26', this.value)">
                                                </div>
                                                
                                            </div>
                                            <div class="col-sm-6">
                                              
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Electricity Mix Chart</h4>
                                </div>
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="height-300">
                                            <canvas id="simple-doughnut-chart"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                                               
                                            </div>

                                        </div>
                                    </fieldset>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="card collapse-header">
                                                            <div id="heading104" class="card-header" data-toggle="collapse" role="button" data-target="#accordion143" aria-expanded="false" aria-controls="accordion143">
                                                                <span class=" collapse-title d-flex align-items-center"  style="color:	#E9AB17;">
                                                                
                                    <img src="icon/ei.png" style="width:30px;color:#E9AB17;">&nbsp;

                                                                   ENERGY IMPORT
                                                                </span>
                                                            </div>
                                                                     <div id="accordion143" role="tabpanel" data-parent="#accordionWrapar3" aria-labelledby="heading104" class="collapse" aria-expanded="false">
                                                                <div class="card-content">
                                                                    <div class="card-body">
                                                                        <fieldset class="pt-0">
                                        <h6 class="py-50">Category: Fossil fuels</h6>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label style="font-size:11px;">% energy in this category imported <b id="ff">(Source World)</b></label>
                                                   <input type="text"  class="touchspin form-control" id="L30" name="L30" value="74" data-bts-postfix="%" onchange="Quest('fossil fuels',this.value,document.getElementById('ff').innerHTML,'<%=code%>','<%=version%>');">

                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                     <label for="lastName1">Source </label>
                                                     <div class="btn-group btn-group-toggle mb-1" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                    <label class="btn btn-a " id="labelFossilA" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsfossil" id="fossila" value="A" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('A','ff');Quest('fossil fuels',document.getElementById('L30').value,'A','<%=code%>','<%=version%>');"> A
                                                    </label>
                                                    <label class="btn btn-b " id="labelFossilB" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsfossil" id="fossilb" value="B" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('B','ff');Quest('fossil fuels',document.getElementById('L30').value,'B','<%=code%>','<%=version%>');"> B
                                                    </label>
                                                    <label class="btn btn-c" id="labelFossilC" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsfossil" id="fossilc" value="C" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('C','ff');Quest('fossil fuels',document.getElementById('L30').value,'C','<%=code%>','<%=version%>');"> C
                                                    </label>
                                                    <label class="btn btn-d" id="labelFossilD" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsfossil" id="fossild" value="D"style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('D','ff');Quest('fossil fuels',document.getElementById('L30').value,'D','<%=code%>','<%=version%>');"> D
                                                    </label>
                                                    <label class="btn btn-w active" id="labelFossilW" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsfossil" id="fossilworld" value="W" onchange="Source('WORLD','ff')" checked style="padding:0.1rem 0.7rem;line-height: 2.5rem;"> WORLD
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                             <div class="col-12">
                                             <div id="quest_fossil_fuels" style="width:100%;"></div>
                                             </div>
                                            <div class="col-12">
                                             <h6 class="py-50">Category: Biofuels</h6>
                                            </div>
                                          <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label style="font-size:11px;">% energy in this category imported <b id="bb">(Source World)</b></label>
                                                   <input type="text"  class="touchspin form-control" id="L31" name="L31" value="0" data-bts-postfix="%" onchange="Quest('biofuels',this.value,document.getElementById('bb').innerHTML,'<%=code%>','<%=version%>');">

                                                </div>
                                            </div>
                                             <div class="col-sm-6">
                                                <div class="form-group">
                                                     <label for="lastName1">Source </label>
                                                     <div class="btn-group btn-group-toggle mb-1" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                    <label class="btn btn-a " id="labelBioA" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsbio" id="biofuela" value="A" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('A','bb');Quest('biofuels',document.getElementById('L31').value,'A','<%=code%>','<%=version%>');"> A
                                                    </label>
                                                    <label class="btn btn-b " id="labelBioB" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsbio" id="biofuelb" value="B" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('B','bb');Quest('biofuels',document.getElementById('L31').value,'B','<%=code%>','<%=version%>');"> B
                                                    </label>
                                                    <label class="btn btn-c" id="labelBioC" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsbio" id="biofuelc" value="C" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('C','bb');Quest('biofuels',document.getElementById('L31').value,'C','<%=code%>','<%=version%>');"> C
                                                    </label>
                                                    <label class="btn btn-d" id="labelBioD" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsbio" id="biofueld" value="D" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('D','bb');Quest('biofuels',document.getElementById('L31').value,'D','<%=code%>','<%=version%>');"> D
                                                    </label>
                                                    <label class="btn btn-w active" id="labelBioW" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsbio" id="biofuelworld" value="W" onchange="Source('WORLD','bb')" checked style="padding:0.1rem 0.7rem;line-height: 2.5rem;"> WORLD
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                            
                                             <div class="col-12">
                                             <div id="quest_biofuels" style="width:100%;"></div>
                                             </div>
                                             <div class="col-12">
                                             <h6 class="py-50">Category: Electricity</h6>
                                            </div>
                                          <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label style="font-size:11px;">% energy in this category imported <b id="ec">(Source World)</b></label>
                                                   <input type="text"  class="touchspin form-control" id="L32" name="L32" value="0" data-bts-postfix="%"  onchange="Quest('electricity',this.value,document.getElementById('ec').innerHTML);">

                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                     <label for="lastName1">Source </label>
                                                     <div class="btn-group btn-group-toggle mb-1" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                     <label class="btn btn-a " id="labelElecA" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonselec" id="ela" value="A" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('A','ec');Quest('electricity',document.getElementById('L32').value,'A','<%=code%>');"> A
                                                    </label>
                                                    <label class="btn btn-b " id="labelElecB" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonselec" id="elb" value="B" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('B','ec');Quest('electricity',document.getElementById('L32').value,'B','<%=code%>');"> B
                                                    </label>
                                                    <label class="btn btn-c" id="labelElecC" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonselec" id="elc" value="C" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('C','ec');Quest('electricity',document.getElementById('L32').value,'C','<%=code%>');"> C
                                                    </label>
                                                    <label class="btn btn-d" id="labelElecD" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonselec" id="eld" value="D" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('D','ec');Quest('electricity',document.getElementById('L32').value,'D','<%=code%>');"> D
                                                    </label>
                                                    <label class="btn btn-w active" id="labelElecW" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonselec" id="elworld" value="W" onchange="Source('WORLD','ec')" checked style="padding:0.1rem 0.7rem;line-height: 2.5rem;"> WORLD
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                            
                                              <div class="col-sm-12">
                                            <div id="quest_electricity" style="width:100%;"></div>
                                            </div>
                                        </div>
                                    </fieldset>
                                    <!-- step 3 content end-->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
														

                                                 
                                                    </div>
                                                </div>
                                                <!-- Accordion end -->
                           
                                </div>
                            </div>
                        
                         
                        </div>
                        
                        
                                    <!-- invoice view page -->
                        <div class="col-xl-7 col-md-8 col-12">
                            <div class="card" style="position: fixed;width:56%;">
                                <div class="card-content">
                                    <div class="card-body pb-0 mx-25"  id="xhx" >
                                           
                                     <!-- collapse with icon -->
                <section id="collapsible-with-icon">
                 
                    <div class="collapsible collapse-icon accordion-icon-rotate">
                        <div class="card collapse-header open">
                            <div id="headingCollapse5" class="card-header" data-toggle="collapse" role="button" data-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                <span class="collapse-title">
									 <img src="icon/fcon.png" style="width:30px;color:#15317E;">&nbsp;
                                    <span class="align-middle">FOOTPRINTS OF CONSUMPTION</span>
                                </span>
                            </div>
                         
                            <div id="collapse5" role="tabpanel" aria-labelledby="headingCollapse5" class="collapse show">
                                <div class="card-content">
                                    <div class="card-body" style="padding: 1rem;">
                                    
                                    <div class="row" style="text-align:center;">                                    
                                    <div class="col" id="GT1" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><center>28.7</center></h4></div>
                                    <div class="col" id="GT2" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><center>18.2</center></h4></div>
                                    <div class="col" id="GT3" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><center>7045</center></h4></div>
                                    <div class="col" id="GT4" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><center>1081</center></h4></div>
                                    </div>
                                    <div class="row"  style="text-align:center;">
                                    <div class="col divi " id="percent1"  style="font-size:80%;">17% above the initial value </small> </div>
                                    <div class="col divi " id="percent2"  style="font-size:80%;">37% above the initial value </small> </div>
                                    <div class="col divi " id="percent3"  style="font-size:80%;">36% above the initial value </small> </div>
                                    <div class="col divi " id="percent4"  style="font-size:80%;">40% above the initial value </small> </div>
                                    </div>
                                    
                                    
                                    <div class="row">                                
                                                       
                                <div class="col-md-3" style="min-height:200px;">                                
                                 <div class="chartjs-size-monitor">
                                   <div class="chartjs-size-monitor-expand"></div>
                                   <div class="chartjs-size-monitor-shrink"></div>
                                 </div>
                                 <canvas id="bar-chart"  class="chartjs-render-monitor" ></canvas>
                                 </div>
                                        
                               <div class="col-md-3" >                                
                                 <div class="chartjs-size-monitor">
                                   <div class="chartjs-size-monitor-expand"></div>
                                   <div class="chartjs-size-monitor-shrink"></div>
                                 </div>
                                 <canvas id="bar-chart-2"  class="chartjs-render-monitor" ></canvas>
                                 </div>
                     
                               <div class="col-md-3" >                                
                                 <div class="chartjs-size-monitor">
                                   <div class="chartjs-size-monitor-expand"></div>
                                   <div class="chartjs-size-monitor-shrink"></div>
                                 </div>
                                 <canvas id="bar-chart-3"  class="chartjs-render-monitor" ></canvas>
                                 </div>
                      
                                   <div class="col-md-3" >                                
                                 <div class="chartjs-size-monitor">
                                   <div class="chartjs-size-monitor-expand"></div>
                                   <div class="chartjs-size-monitor-shrink"></div>
                                 </div>
                                 <canvas id="bar-chart-4"  class="chartjs-render-monitor" ></canvas>
                                 </div>       
                                        
                                        
                                                                   
                                    </div>
                  
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="card collapse-header">
                            <div id="headingCollapse6" class="card-header" data-toggle="collapse" role="button" data-target="#collapse6" aria-expanded="false" aria-controls="collapse6">
                                <span class="collapse-title">
									 <img src="icon/fpro.png" style="width:30px;color:#15317E;">&nbsp;
                                    <span class="align-middle">FOOTPRINTS OF PRODUCTION</span>
                                </span>
                            </div>
                            <div id="collapse6" role="tabpanel" aria-labelledby="headingCollapse2" class="collapse">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row" style="text-align:center;"> 
                                     <div class="col" id="GT1_sotto" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><h4><center></center></h4></div>
                                    <div class="col" id="GT2_sotto" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><h4><center></center></h4></div>
                                    <div class="col" id="GT3_sotto" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><h4><center></center></h4></div>
                                    <div class="col" id="GT4_sotto" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><h4><center></center></h4></div>
                                    </div>
                                    <div class="row"  style="text-align:center;">
                                    <div class="col divi " id="percent1_sotto"  style="font-size:80%;"><small>0% above the initial value </small> </div>
                                    <div class="col divi " id="percent2_sotto"  style="font-size:80%;"><small>0% above the initial value </small> </div>
                                    <div class="col divi " id="percent3_sotto"  style="font-size:80%;"><small>0% above the initial value </small> </div>
                                    <div class="col divi " id="percent4_sotto"  style="font-size:80%;"><small>0% above the initial value </small> </div>
                                    </div>
                                  <div class="row">    
                  
                                                       
                                <div class="col-md-3" style="min-height:220px;margin-top:0.5em!important;">                                                                  
                                       
                                        <div class="chartjs-size-monitor">
                                        <div class="chartjs-size-monitor-expand"></div>
                                        <div class="chartjs-size-monitor-shrink"></div>
                                        </div>
                                        <canvas id="bar-chart-sotto1"   style="height:220px;"  class="chartjs-render-monitor"></canvas>
                                  
                                
                                </div>
                                
                                   <div class="col-md-3" style="min-height:220px;">
                                                                  
                                       
                                        <div class="chartjs-size-monitor">
                                        <div class="chartjs-size-monitor-expand"></div>
                                        <div class="chartjs-size-monitor-shrink"></div>
                                        </div>
                                        <canvas id="bar-chart-sotto-due"  style="height:220px;" class="chartjs-render-monitor"></canvas>
                                   </div>
                                        
                                       <div class="col-md-3" style="min-height:220px;">
                                                                  
                                     
                                        <div class="chartjs-size-monitor">
                                        <div class="chartjs-size-monitor-expand"></div>
                                        <div class="chartjs-size-monitor-shrink"></div>
                                        </div>
                                        <canvas id="bar-chart-sottotre"  style="height:220px;" class="chartjs-render-monitor"></canvas>
                             
                                
                                </div>
                                
                             <div class="col-md-3" style="min-height:220px;">
                                                                  
                                       
                                        <div class="chartjs-size-monitor">
                                        <div class="chartjs-size-monitor-expand"></div>
                                        <div class="chartjs-size-monitor-shrink"></div>
                                        </div>
                                        <canvas id="bar-chart-sottoquattro"  style="height:220px;" class="chartjs-render-monitor"></canvas>
                              
                                
                                </div> 
           
                                            
                                    </div>
                        
                        
                        
                         </div>
                                </div>
                            </div>
                        </div>
                        <div class="card collapse-header open">
                            <div id="headingCollapse7" class="card-header" data-toggle="collapse" role="button" data-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                <span class="collapse-title">
									 <img src="icon/sec.png" style="width:30px;color:#15317E;">&nbsp;
                                    <span class="align-middle">SECURITY</span>
                                </span>
                            </div>
                            <div id="collapse7" role="tabpanel" aria-labelledby="headingCollapse7" class="collapse show">
                                <div class="card-content">
                                    <div class="card-body">
                              
                              
           
                                
                              <div class="graph_container">
                                     <div class="row">
                                     <div class="col-md-4">
                                     <canvas id="polar-chart-security"></canvas>
                                     </div>  
                                     
                          <!-- <div class="row" style="margin:0em 1.5em;font-size:10pt;">   -->    
 
                    <div class="col-md" style="margin-left:3em;">
        <div class="col-sm" style="float: left; background-color:#5a8dee; margin-right:0.3em; width: 46px; color:#5a8dee;">.</div>
        <div class="col-6 col-sm" style="">Local</div>
        
        <div class="w-100"></div>                  
             <div class="col-sm" style="margin-top:1em; float: left; background-color:#236e89; margin-right:0.3em; width: 46px; color:#1c82ad; ">.</div>
        <div class="col-6 col" style="margin-top:1em;">A</div>
        
         <div class="w-100"></div>                  
             <div class="col-sm" style="margin-top:1em; float: left; background-color:#1c82ad; margin-right:0.3em; width: 46px; color:#1c82ad; ">.</div>
        <div class="col-6 col" style="margin-top:1em;">B</div>
        
         <div class="w-100"></div>
            <div class="col-sm" style="margin-top:1em; float: left; background-color:#A9B9CF; margin-right:0.3em; width: 46px; color:#A9B9CF;">.</div>
        <div class="col-6 col" style="margin-top:1em;">C</div>
        
         <div class="w-100"></div>
             <div class="col-sm" style="margin-top:1em; float: left; background-color:#EBEEF2; margin-right:0.3em; width: 46px; color:#EBEEF2;">.</div>
        <div class="col-6 col" style="margin-top:1em;">D</div> 
        
         <div class="w-100"></div>
             <div class="col-sm" style="margin-top:1em; float: left; background-color:#62768C; margin-right:0.3em; width: 46px; color:#62768C;">.</div>
        <div class="col-6 col-sm" style="margin-top:1em;">World</div>
        
		
  		</div>
        
  	<!--	</div>     -->                                               
                                     <div class="col-md-4">
                                     <canvas id="polar-chart-security-2"></canvas>
                                     </div></div>
                               </div>
                         

                                   </div>
                                </div>
                            </div>
                        </div>
                        <div class="card collapse-header">
                            <div id="headingCollapse8" class="card-header" data-toggle="collapse" role="button" data-target="#collapse8" aria-expanded="false" aria-controls="collapse4">
                                <span class="collapse-title">
									 <img src="icon/eff.png" style="width:30px;color:#15317E;">&nbsp;
                                    <span class="align-middle">EFFICIENCY</span>
                                </span>
                            </div>
                            <div id="collapse8" role="tabpanel" aria-labelledby="headingCollapse8" class="collapse">
                                <div class="card-content">
                                    <div class="card-body">
									<div class="eff" style="width:100%;color:#008000;"><i class="bx bx-subdirectory-right"></i> EFFICIENCY OF CONSUMED FOOD <small>(Footprint per Kcal)</small></div>
                                                <div class="valoripercentuali">
                                                <div class="row">
		                                        
												<div class="col-sm celle" > 
		                                        <div class="user-analytics">
                                                <img class="mr-25 align-middle" src="icon/cb.png" style="width:1.5rem;" />
                                                <span class="align-middle text-muted" style="font-weight:600;">Carbon</span>
                                                </div>
												</div>
       
		                                       <div class="col-sm celle" > 
		                                        <div class="user-analytics">
                                                <img class="mr-25 align-middle" src="icon/la.png" style="width:1.5rem;" />
                                                <span class="align-middle text-muted" style="font-weight:600;">Land</span>
                                                </div>
		                                       </div>
        
		
		                                       <div class="col-sm celle" >
		                                        <div class="user-analytics">
                                                <img class="mr-25 align-middle" src="icon/gww.png" style="width:1.5rem;" />
                                                <span class="align-middle text-muted" style="font-weight:600;">Green Water</span>
                                                </div>
		                                      </div>
											  
                                                <div class="col-sm celle" >
		                                        <div class="user-analytics">
                                                <img class="mr-25 align-middle" src="icon/bw.webp" style="width:1.5rem;" />
                                                <span class="align-middle text-muted" style="font-weight:600;">Blue Water</span>
                                                </div>
		                                       </div>
		
		<div style="float:left;width:100%;height:10px;"></div>
												
        <div class="col-sm celle" id="valfood_1" ></div>
        <div class="col-sm celle" id="valfood_2" ></div>
        <div class="col-sm celle" id="valfood_3" ></div>
        <div class="col-sm celle" id="valfood_4" ></div>
		
		<div style="float:left;width:100%;height:10px;"></div>
		
		<div class="col-sm celle" id="valfood_5"  ></div>
        <div class="col-sm celle" id="valfood_6"  ></div>
        <div class="col-sm celle" id="valfood_7"  ></div>
        <div class="col-sm celle" id="valfood_8"  ></div>
     
    </div>
	<div class="eff" style="width:100%;color:#FDAC41;margin-top:10px;"><i class="bx bx-subdirectory-right"></i> EFFICIENCY OF CONSUMED ENERGY <small>(Footprint per MJ)</small></div>
    <div class="row">
	<div class="col-sm celle" > 
		                                        <div class="user-analytics">
                                                <img class="mr-25 align-middle" src="icon/cb.png" style="width:1.5rem;" />
                                                <span class="align-middle text-muted" style="font-weight:600;">Carbon</span>
                                                </div>
												</div>
       
		                                       <div class="col-sm celle" > 
		                                        <div class="user-analytics">
                                                <img class="mr-25 align-middle" src="icon/la.png" style="width:1.5rem;" />
                                                <span class="align-middle text-muted" style="font-weight:600;">Land</span>
                                                </div>
		                                       </div>
        
		
		                                       <div class="col-sm celle" >
		                                        <div class="user-analytics">
                                                <img class="mr-25 align-middle" src="icon/gww.png" style="width:1.5rem;" />
                                                <span class="align-middle text-muted" style="font-weight:600;">Green Water</span>
                                                </div>
		                                      </div>
											  
                                                <div class="col-sm celle" >
		                                        <div class="user-analytics">
                                                <img class="mr-25 align-middle" src="icon/bw.webp" style="width:1.5rem;" />
                                                <span class="align-middle text-muted" style="font-weight:600;">Blue Water</span>
                                                </div>
		                                       </div>
		
		<div style="float:left;width:100%;height:10px;"></div>
	
	   <div class="col-sm celle" id="valenergy_1"  ></div>
       <div class="col-sm celle" id="valenergy_2"  ></div>
       <div class="col-sm celle" id="valenergy_3"  ></div>
       <div class="col-sm celle" id="valenergy_4"  ></div>
       
	   <div style="float:left;width:100%;height:10px;"></div>
     
       <div class="col-sm celle" id="valenergy_5"  ></div>
       <div class="col-sm celle" id="valenergy_6"  ></div>
       <div class="col-sm celle" id="valenergy_7" ></div>
       <div class="col-sm celle" id="valenergy_8" ></div>

		
    </div>
</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- collapse with icon end -->
                                </div>
                                 
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

            </div>
        </div>
    </div>
        <!-- <div id="TEST">Results from DB: </div> -->
    <input type="hidden" id="external_cf" value=""></input>
        <input type="hidden" id="external_lf" value=""></input>
            <input type="hidden" id="external_wfg" value=""></input>
                <input type="hidden" id="external_wfb" value=""></input>
  	<script src="app-assets/js/multi/scripts/load_GlobalVariables.js"></script> 
   	<!-- BEGIN: Vendor JS-->
   	 <script>
 var stanza = '<%=stanza%>';
 localStorage.setItem("stanza", stanza);
 </script>
    <script src="app-assets/vendors/js/vendors.min.js"></script>
    <script src="app-assets/vendors/js/extensions/jquery.steps.min.js"></script>
    <script src="app-assets/fonts/LivIconsEvo/js/LivIconsEvo.tools.js"></script>
    <script src="app-assets/fonts/LivIconsEvo/js/LivIconsEvo.defaults.js"></script>
    <script src="app-assets/fonts/LivIconsEvo/js/LivIconsEvo.min.js"></script>
    <!-- BEGIN Vendor JS-->


    <!-- BEGIN: Page Vendor JS-->
    <script src="app-assets/vendors/js/ui/jquery.sticky.js"></script>
    <script src="app-assets/vendors/js/tables/datatable/datatables.min.js"></script>
    <script src="app-assets/vendors/js/tables/datatable/dataTables.bootstrap4.min.js"></script>
    <!-- END: Page Vendor JS-->

    <!-- BEGIN: Theme JS-->
    <script src="app-assets/js/multi/scripts/configs/horizontal-menu.js"></script>
    <script src="app-assets/js/multi/core/app-menu.js"></script>
    <script src="app-assets/js/multi/core/app.js"></script>
    <script src="app-assets/js/multi/scripts/components.js"></script>
    <script src="app-assets/js/multi/scripts/footer.js"></script>
    <!-- END: Theme JS-->

   
    
    <!-- BEGIN: Page JS-->
   		<!--	<script src='https://cdn.plot.ly/plotly-latest.min.js'></script> LIB per SUNBURST-->
        <script src="app-assets/js/multi/scripts/forms/wizard-steps.js"></script>
        <script src="app-assets/vendors/js/forms/spinner/jquery.bootstrap-touchspin.js"></script>
        <script src="app-assets/js/multi/scripts/forms/number-input.js"></script>
    <!--  <script src="app-assets/vendors/js/charts/chart.min.js"></script> -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
        	        	<script src="app-assets/js/multi/scripts/trade-script.js"></script>
        	
        <script src="app-assets/js/multi/scripts/charts/grafici-sopra-ok-console.js"></script><!-- PRIMI 4 GRAFICI A BARRE -->
       	<script src="app-assets/js/multi/scripts/charts/grafici-security.js"></script><!-- 2 GRAFICI SECURITY -->
       	<script src="app-assets/js/multi/scripts/charts/grafici-sotto.js"></script><!-- 4 GRAFICI SOTTO CON LIMITI -->
       	<script src="app-assets/js/multi/scripts/charts/EU-grafici-security-perc.js"></script><!-- 4 GRAFICI SOTTO CON LIMITI -->
       	<script src="app-assets/js/multi/scripts/charts/EU-grafici-sotto-carbon-emission.js"></script><!-- 4 GRAFICI SOTTO CON LIMITI -->
       	
       	
       	
       	<script src="app-assets/js/multi/scripts/charts/grafici-pie-e-mix-energy.js"></script>
       	<!-- TORTA FOOD E ENERGY MIX -->
  	<!-- SCRIPT LOCAL STORAGE -->
 		<script src="app-assets/js/multi/scripts/disableButtons.js"></script>
 		<script src="app-assets/js/multi/scripts/localData_3_f.js"></script>
 	 			
 		<script src="_trade_multi.js"></script>
 		<script src="app-assets/js/multi/scripts/trade.js"></script> 	
 			<script src="app-assets/js/multi/scripts/penalityok.js"></script>  	 	
 		
 		<script src="app-assets/js/multi/scripts/sustanaible-limits.js"></script> 
 		
 		<script src="app-assets/js/multi/scripts/result-balancer.js"></script>
 		 		<script src="app-assets/js/multi/scripts/resetall.js"></script>
 		 		 		 		<script src="app-assets/js/multi/scripts/freeze.js"></script>
 		 	
 		 		 		 		
 		 		
 		
 		<script>
 	
 		document.addEventListener('DOMContentLoaded', function() {
 			setTimeout(SendDataToDB(), 10000);
 		}, false);
 		</script> 		
 		 		
 		 		
 		
 	<!--  BALANCER -->
  		<script src="app-assets/js/multi/scripts/balancer_Food_Energy.js"></script>
        
    <!--  <script src="app-assets/js/multi/scripts/charts/plugin/chartjs-plugin-annotation.min.js"></script> -->
     	<script src="https://rawgit.com/chartjs/chartjs-plugin-annotation/master/chartjs-plugin-annotation.js"></script>
       	<script src="https://cdn.rawgit.com/chartjs/Chart.js/master/samples/utils.js"></script>
      	<script src="app-assets/js/multi/scripts/charts/chart-chartist.js"></script>
        <script src="app-assets/vendors/js/charts/chartist.min.js"></script>
          <script src="app-assets/js/multi/scripts/extensions/sweet-alerts.js"></script>
        
    <!-- BEGIN: Page JS-->
    	<script src="app-assets/js/multi/scripts/pages/app-invoice.js"></script>
    	<script src="load_trade.js"></script>
    	
    <!-- END: Page JS-->



</body>
<!-- END: Body-->
<script>
$('#invoice-edit-wrapper').scroll(function() { 
    $('#FixedDiv').animate({top:$(this).scrollTop()});
});
</script>

<script>
function Source(valore,id){
	document.getElementById(id).innerHTML = "(Source "+valore+")";
}

</script>
<script>
setInterval(function() {
	Counter('<%=region %>','<%=stanza %>');
}, 8000);

setInterval(function(){
	  WT('<%=stanza%>');
}, 15000);
</script>



<script>

var id_player_sust = <%=code%>;
var Region_start = <%=region%>;
Region_start = Region_start.replaceAll("region","");
var id_room_p = <%=stanza%>;


/*alert("ID PLAYER: "+id_player_sust);
alert("REGION SELEZIONATA: "+Region_start);
alert("ID ROOM: "+id_room_p);

window.addEventListener("scroll", function () {
	/*alert("ID PLAYER: "+id_player_sust);
	alert("REGION SELEZIONATA: "+Region_start);
	alert("ID ROOM: "+id_room_p);*/

</script>
<script>
function myHeight() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var nh = h-50;
  //alert("H: "+nh);
  //if(h<=550){
  document.getElementById("xhx").style = "max-height: "+nh+"px;overflow-y: scroll;";
  //}

}
</script>

<script>
/*function MINMAX(id){
var x = document.getElementById(id).value;
if(x.substring(0,1)=='-'){
document.getElementById(id).value = 1;
}else{
if(x>0 && x>7){
document.getElementById(id).value = 7;
}
}
}*/
</script>


<script>
function NOTNEG(id){
var x = document.getElementById(id).value;
if(x.substring(0,1)=='-'){
var y = x.substring(1,x.length);
document.getElementById(id).value = y;
}
}
</script>
<script>
function incrementValue(e) {
	  e.preventDefault();
	  var fieldName = $(e.target).data('field');
	  var parent = $(e.target).closest('div');
	  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
	  if(currentVal<=6) {
		  currentVal = currentVal;
		  } else {
		  currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(7), 10);
		  }

	 /* if (!isNaN(currentVal)) {
	    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
	  } else {
	    parent.find('input[name=' + fieldName + ']').val(1);
	  }
	}

	function decrementValue(e) {
	  e.preventDefault();
	  var fieldName = $(e.target).data('field');
	  var parent = $(e.target).closest('div');
	  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(1), 10);

	  if (!isNaN(currentVal) && currentVal > 0) {
	    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
	  } else {
	    parent.find('input[name=' + fieldName + ']').val(1);
	  }
	}

	$('.input-group').on('click', '.button-plus-days', function(e) {
	  incrementValue(e);
	});

	$('.input-group').on('click', '.button-minus-days', function(e) {
	  decrementValue(e);
	});*/

	  if (!isNaN(currentVal)) {
	    parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
	  } else {
	    parent.find('input[name=' + fieldName + ']').val(1);
	  }
	}

	function decrementValue(e) {
	  e.preventDefault();
	  var fieldName = $(e.target).data('field');
	  var parent = $(e.target).closest('div');
	  var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

	  if (!isNaN(currentVal) && currentVal > 0) {
	    parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
	    if (currentVal == 1) {
	    	parent.find('input[name=' + fieldName + ']').val(1);
	    }
	  } 
	  
	  else {
	    parent.find('input[name=' + fieldName + ']').val(1);
	  }
	  

	}

	$('.input-group').on('click', '.button-plus-days', function(e) {
	  incrementValue(e);
	});

	$('.input-group').on('click', '.button-minus-days', function(e) {
	  decrementValue(e);
	});

	</script>

</html>
   