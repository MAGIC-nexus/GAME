<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>

<%
OpDash op = OpDash.getInstance();
String region = (String) request.getParameter("Region");
String Idp = (String) request.getParameter("Id");
ArrayList A = new ArrayList();
String tab="";
Richieste ric = null;
A = op.getRichiestePending(Idp,region);
if(A.isEmpty()){
tab="";
}else{
for(int i=0;i<A.size();i++){
ric = (Richieste)A.get(i);
     String from = ric.getFrom();
     from = from.replaceAll("region", "");
     from = from.trim();
	 
     String tipo = ric.getTipo();
     String valore = ric.getValore();
     String mitt = ric.getRegion();
     
     String to = ric.getTo();
     to = to.replaceAll("region", "");
     to = to.trim();
	 
	
tab=tab+"<tr><td>"+tipo+"</td><td class=\"text-bold-500\">From: "+from+"</td><td class=\"text-bold-500\">"+ric.getValore()+" ("+ric.getReale()+")</td></tr>";
}
}


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
       <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/forms/select/select2.min.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/vendors.min.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/tables/datatable/datatables.min.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/animate/animate.css">
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/extensions/sweetalert2.min.css">
    <!-- END: Vendor CSS-->

    <!-- BEGIN: Theme CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/css/bootstrap.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/bootstrap-extended.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/colors.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/components.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/themes/dark-layout.css">
    <link rel="stylesheet" type="text/css" href="app-assets/css/themes/semi-dark-layout.css">

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

.DA_ANNACQUARE {
visibility: hidden;
height:0.5px;
width:0.5px;
}

.GRAFICI_EU {
width:100vw!important;
}
</style>


<link rel="stylesheet" type="text/css" href="app-assets/css/plugins/forms/wizard.css">
 <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/forms/spinner/jquery.bootstrap-touchspin.css">
 <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/charts/chartist.min.css">
 <link rel="stylesheet" type="text/css" href="app-assets/css/pages/chart-chartist.css">
 <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/css/bootstrap-multiselect.css">
 <style>
 @import url("//cdnjs.cloudflare.com/ajax/libs/bootstrap-multiselect/0.9.13/css/bootstrap-multiselect.css");
 
 .blog-sticky{
    position: sticky;
    top: 100px;
}

.btn-group,
.multiselect {
  width: 100%;
}

.multiselect {
  text-align: left;
  padding-right: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.multiselect .caret {
  right: 12px;
  top: 45%;
  position: absolute;
}

.multiselect-container.dropdown-menu {
    min-width: 0px;
}

.multiselect-container>li>a>label {
    white-space: normal;
    padding: 5px 15px 5px 35px;
}

.multiselect-container > li > a > label > input[type="checkbox"] {
    margin-top: 3px;
}
/*
.multiselect-container>li>a>label {
  padding-right: 0;
  padding-left: 20px;
}
*/
 </style>

 </head>
<!-- END: Head-->
<!-- BEGIN: Body onLoad="myHeight();"-->

<body  class="horizontal-layout horizontal-menu navbar-sticky 2-columns   footer-static  " data-open="hover" data-menu="horizontal-menu" data-col="2-columns">

       <!-- BEGIN: Header-->
    <nav class="header-navbar navbar-expand-lg navbar navbar-with-menu navbar-fixed bg-primary navbar-brand-center" style="min-height:0rem;max-height:3rem;">
    
        <div class="navbar-wrapper">
            <div class="navbar-container content">
                <div class="navbar-collapse" id="navbar-mobile">
                    <div class="mr-auto float-left bookmark-wrapper d-flex align-items-center">
                       
                        
                         
                        <ul class="nav navbar-nav">
                            
                           
              <!--                     <li class="nav-item d-none d-lg-block" style="margin-left:10px;padding-top:10px;">
                             <a data-toggle="tooltip" data-placement="bottom" title="Game Dashboards" target="_self" id="" style="font-size:1.2rem;color:#E55B3C;" href="#">
                          Game Dashboards
                             </a> 
                             </li>-->
                            
                        
                        </ul>
                    </div>
                    <ul class="nav navbar-nav float-right d-flex align-items-center">
                    <div id="user-status"><span style="color:#fff"></span></div>
                    
                    			

                     
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
                       <!-- Basic Tables start -->
                <div class="row" id="basic-table">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Pending request</h4>
                            </div>
                            <div class="card-content">
                                <div class="card-body">
                                    <p class="card-text">Accept or refuse your pending request.</p>
                                    <!-- Table with outer spacing -->
                                    <div class="table-responsive">
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th>TYPE</th>
                                                    <th>IMPORT NEED</th>
                                                    <th>DEMAND</th>
                                                   
                                                </tr>
                                            </thead>
                                            <tbody>
                                               <%=tab%>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
             

                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Basic Tables end -->
            
                                        
        </div>
    </div>
    <!-- END: Content-->
     <div class="sidenav-overlay"></div>
    <div class="drag-target"></div>

    <!-- BEGIN: Footer-->
 
    <footer class="footer footer-static footer-light">
        <p class="clearfix mb-0"><span class="float-left d-inline-block">2020 Nexus Games</span><span class="float-right d-sm-inline-block d-none"></span>
            <button class="btn btn-primary btn-icon scroll-top" type="button"><i class="bx bx-up-arrow-alt"></i></button>
        </p>
    </footer>
    <!-- END: Footer-->
	<!-- <script src="app-assets/js/scripts/loadGlobalVariables.js"></script> -->
   	<!-- BEGIN: Vendor JS-->
   
  
    <script src="app-assets/vendors/js/vendors.min.js"></script>
    <script src="app-assets/fonts/LivIconsEvo/js/LivIconsEvo.tools.js"></script>
    <script src="app-assets/fonts/LivIconsEvo/js/LivIconsEvo.defaults.js"></script>
    <script src="app-assets/fonts/LivIconsEvo/js/LivIconsEvo.min.js"></script>
    <script src="app-assets/js/scripts/target-score.js"></script> 
    <!-- BEGIN Vendor JS-->

    <!-- BEGIN: Page Vendor JS-->
    <script src="app-assets/vendors/js/ui/jquery.sticky.js"></script>
 
    <script src="app-assets/vendors/js/tables/datatable/datatables.min.js"></script>
    <script src="app-assets/vendors/js/tables/datatable/dataTables.bootstrap4.min.js"></script>
    <!-- END: Page Vendor JS-->

    <!-- BEGIN: Theme JS-->
       
    <script src="app-assets/js/scripts/configs/horizontal-menu.js"></script>
    <script src="app-assets/js/core/app-menu.js"></script>
    <script src="app-assets/js/core/app.js"></script>
    <script src="app-assets/js/scripts/components.js"></script>
    <script src="app-assets/js/scripts/footer.js"></script>
    <!-- END: Theme JS-->

   
    
    <!-- BEGIN: Page JS-->
        <script src="app-assets/vendors/js/extensions/jquery.steps.min.js"></script>
   		<!--	<script src='https://cdn.plot.ly/plotly-latest.min.js'></script> LIB per SUNBURST-->
        <script src="app-assets/js/scripts/forms/wizard-steps.js"></script>
        <script src="app-assets/vendors/js/forms/spinner/jquery.bootstrap-touchspin.js"></script>
        <script src="app-assets/js/scripts/forms/number-input.js"></script>
    <!--  <script src="app-assets/vendors/js/charts/chart.min.js"></script> -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
        <!-- <script src="app-assets/js/scripts/charts/grafici-pie-e-mix-energy.js"></script><!-- TORTA FOOD E ENERGY MIX --> 
  	<!-- SCRIPT LOCAL STORAGE -->
 		<script src="app-assets/js/scripts/disableButtons.js"></script>
 		<script src="app-assets/js/scripts/localData_3.js"></script>
 		<script src="app-assets/js/scripts/charts/EU-grafici-sopra.js"></script>
 		<script src="app-assets/js/scripts/charts/EU-grafici-security.js"></script>
 		<script src="app-assets/js/scripts/charts/EU-grafici-sotto.js"></script>
 		 		<script src="app-assets/js/scripts/target-score.js"></script>
 		
 	
    <!--  <script src="app-assets/js/scripts/charts/plugin/chartjs-plugin-annotation.min.js"></script> -->
     	<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/0.5.5/chartjs-plugin-annotation.js"></script>
       	<script src="https://cdn.rawgit.com/chartjs/Chart.js/master/samples/utils.js"></script>
      	<script src="app-assets/js/scripts/charts/chart-chartist.js"></script>
        <script src="app-assets/vendors/js/charts/chartist.min.js"></script>

          <script src="app-assets/js/scripts/extensions/sweet-alerts.js"></script>

        
    <!-- BEGIN: Page JS-->
    	<script src="app-assets/js/scripts/pages/app-invoice.js"></script>
    	  <script src="app-assets/vendors/js/forms/select/select2.full.min.js"></script>
    	      	 	<script src="app-assets/js/scripts/forms/select/form-select2.js"></script>
    	  
    <!-- END: Page JS-->


</body>
<!-- END: Body-->
<script>
/* $('#invoice-edit-wrapper').scroll(function() { 
    $('#FixedDiv').animate({top:$(this).scrollTop()});
}); */
</script>

<script>
function Source(valore,id){
	document.getElementById(id).innerHTML = "(Source "+valore+")";
}

</script>


<script>
/* function myHeight() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  var nh = h-50;
  //alert("H: "+nh);
  //if(h<=550){
  document.getElementById("xhx").style = "max-height: "+nh+"px;overflow-y: scroll;";
  //}
} */
</script>


</html>
   