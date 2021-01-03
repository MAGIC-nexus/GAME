<%@ page contentType="text/html; charset=iso-8859-1" language="java" import="java.util.*" import="java.sql.Timestamp" import="java.text.NumberFormat" import="java.text.DecimalFormat" import="java.util.Locale" import="java.text.NumberFormat" import="java.util.Calendar" import="javax.mail.MessagingException" import="java.util.GregorianCalendar" import="eligesoft.*" import="java.sql.Time" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<%
String id_stanza= (String) request.getParameter("id");
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
.modal.show .modal-dialog {
    transform: none;
    min-width: 1100px;
    }
 </style>

 </head>
 <script>
 window.addEventListener("load", getIdRoom);
	 var Id_room_EU_ = localStorage.getItem("Id_room_EU");
	 
	 function getIdRoom() {
 alert("TEST ID ROOM: "+Id_room_EU_);
	 }

 </script>
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
                <button type="button" class="btn btn-light-danger mr-1 mb-1" data-toggle="modal" data-target="#primary" style="margin-top: 10px;margin-left: 35px;" id="submit_score" onclick="Freeze()">
                                                       <i class="bx bx-star"></i> SUBMIT ALL DASHBOARD
                                                    </button>
                 <button type="button" class="btn btn-light-danger mr-1 mb-1" style="margin-top: 10px;margin-left: 35px;"  id="refresh_eu">
                                                       <i class="bx bx-star"></i>REFRESH DATA
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
                                                                <div class="modal-body" style="font-weight:normal;color:black;" id="tabscore1">
                                                <h6 class="media-heading"><span class="text-bold-500" id="current_dash" style="margin-left:6%">NOTE: If you have not met all four pre-conditions (see below) your Total Score will be equal to 0.</span></h6><small class="notification-text" style="color:red;font-weight:500;" ></small><br>
                                               <table name="percentages">
                                               <tr>
                                               <td>
                                               <h5 id="carbon" style="margin-left:6%"></h5>
                                               </td>
                                               </tr>
                                               <tr>
                                               <td>  <h5 id="fooden" style="margin-left:6%"></h5>
                                               </td>
                                               </tr>
                                               <tr>
                                               <td>
                                                <h5 id="energyen" style="margin-left:6%"></h5>
                                                </td>
                                                </tr>
                                                <tr>
                                                <td>
                                                  <h5 id="4thprecondition" style="margin-left:6%"><i><font style='font-weight:400'> Land, Green Water and Blue Water use in all regions below the physical limit</font></i> - <b><font color='red'>Not Reached</font></b><hr></h5>
                                               
                                                  
                                                  </td></tr>
                                               </table>
                                                 <br>
    <div class="modal-body" style="font-weight:normal;color:black;" id="tabscore">
  
                <table class="table" id="myTable">
                    <thead>
                        <tr>
                            <th><img src="icon/la.png" style="width:24px;"> Land Score</th>
                            <th>Current Points</th>
                            <th>Penality Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    
                    <tr>
                        <td>Region A</td>
                        <td id="cur_land_A"></td>
                        <td id="penalityA"></td>
                    </tr>
                    <tr>
                        <td>Region B</td>
                        <td id="cur_land_B"></td>
                        <td id="penalityB"></td>
                    </tr>
                    <tr>
                        <td>Region C</td>
                        <td id="cur_land_C"></td>
                        <td id="penalityC"></td>
                    </tr>
                    <tr>
                        <td>Region D</td>
                        <td id="cur_land_D"></td>
                        <td id="penalityD"></td>
                    </tr>
                    <tr>
                            <th><img src="icon/gww.png" style="width:24px;"> Green Water Score</th>
                            <th>Current Points</th>
                        </tr>
                    <tr>
                        <td>Region A</td>
                        <td id="cur_green_A"></td>
                    </tr>
                    <tr>
                        <td>Region B</td>
                        <td id="cur_green_B"> </td>
                    </tr>
                    <tr>
                        <td>Region C</td>
                        <td id="cur_green_C"> </td>
                    </tr>
                    <tr>
                        <td>Region D</td>
                        <td id="cur_green_D"> </td>
                    </tr>
                    <tr>
                               <th><img src="icon/bw.webp" style="width:24px;" class="bx-flip-horizontal"> Blue Water Score</th>
                            <th>Current Points</th>
                        </tr>
                    <tr>
                        <td>Region A</td>
                        <td id="cur_blue_A"></td>
                    </tr>
                    <tr>
                        <td>Region B</td>
                        <td id="cur_blue_B"> </td>
                    </tr>
                    <tr>
                        <td>Region C</td>
                        <td id="cur_blue_C"> </td>
                    </tr>
                    <tr>
                        <td>Region D</td>
                        <td id="cur_blue_D"> </td>
                    </tr>
                    </tbody>
                </table>
			
			<!-- MESSAGGI AL PRESIDENTE -->
            <!-- MESSAGGI AL PRESIDENTE -->
             <section class="multiple-select2" id="presidentMessages">
                    <div class="row" style="margin-let:3%;">
                     <div class="row"><br>
                                                                    
                                                <h6>Select three (3) key messages for the President of the European Commission.<br> Your score
will be multiplied by the number of correct messages (x0, x1, x2, or x3).</h6><br><br><br>
                                          <!-- <form id="form-messages"> -->   
                                                <div class="form-group" style="margin-top:15px;">
                                                    <input type="checkbox" id="ckx1" class="ckx" name="ckx" value="false">
													<font style="font-weight:500" id="lckx1">Applying deficit & drip irrigation & mulching reduces the water footprint significantly</font><hr>
													<input type="checkbox" id="ckx2" class="ckx" name="ckx" value="true">
													<font style="font-weight:500" id="lckx2">Less meat (& dairy in second instance) and less food waste reduce the land & water footprint of consumption</font><hr>
													<input type="checkbox" id="ckx3" class="ckx" name="ckx" value="true">
													<font style="font-weight:500" id="lckx3">Choosing biofuels increases the land and water footprint</font><hr>
													
													<input type="checkbox" id="ckx4" class="ckx" name="ckx" value="false">
													<font style="font-weight:500" id="lckx4">All EU regions can attain self-sufficiency in food and energy supply, trade is not necessary.</font><hr>

                                                    <input type="checkbox" id="ckx5" class="ckx" name="ckx" value="false">
													<font style="font-weight:500" id="lckx5">Whatever electricity mix we have, electrification of the transport sector helps to reduce the carbon footprint a lot</font><hr>
													
													<input type="checkbox" id="ckx6" class="ckx" name="ckx" value="false">
													<font style="font-weight:500" id="lckx6">Switching from fossil to renewable energy has two positive effects: it reduces both the carbon and the water footprint</font><hr>
													
													<input type="checkbox" id="ckx7" class="ckx" name="ckx" value="true">
													 <font style="font-weight:500" id="lckx7">Switching from fossil to renewable energy has two positive effects: it reduces the carbon footprint & it increases energy security of the EU </font><hr>
													
													<input type="checkbox" id="ckx8" class="ckx" name="ckx" value="false">
													<font style="font-weight:500" id="lckx8">Saving energy barely reduces the footprints of consumptions</font><hr><br>
                                                </div>
                                                <button id="Send-messages" onclick="Multiplier();scrollToTop();">SUBMIT</button>
                                                <!-- </form> -->
                                            </div></div></div></section>
                <!--  END FORM MESSAGGI AL PRESIDENTE -->
                <h3 id="total_score"></h3><br></div>


                                                                </div></div>
                                                                <div class="modal-footer">
                                                                    <button type="button" class="btn btn-light-secondary" data-dismiss="modal">
                                                                        <i class="bx bx-x d-block d-sm-none"></i>
                                                                        <span class="d-none d-sm-block">Close</span>
                                                                    </button>
                                                                   
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                <!-- app invoice View Page -->
                <section class="invoice-edit-wrapper">
                    <div class="row">
                         <!-- invoice action col-xl-5 col-md-4 col-12 card-body-->
                        <div class="DA_ANNACQUARE">
                            <div class="card invoice-action-wrapper shadow-none border DA_ANNACQUARE">
                            <!--  start  -->
                                <div class="" >
                                    <!-- accordion start -->
                                    
                                   				<div class="col-sm-12 DA_ANNACQUARE">
                                          <div style="width:100%;">
                                    
                                                
                                                     <div class="btn-group btn-group-toggle mb-1 active" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                    <label id="labregionA" class="btn btn-a regionA  nonattivo" style="padding:0.1rem 0.7rem;line-height: 2.5rem;width:24%;float:left;">
                                                        <input type="radio" class="form-control" name="region" id="regionA" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange=" localSaveData(); localLoadData(); disableButtons('A')" checked> A
                                                    </label> 
                                                    <label id="labregionB" class="btn btn-b regionB nonattivo " style="padding:0.1rem 0.7rem;line-height: 2.5rem;width:24%;margin-left:1%;float:left; ">
                                                        <input type="radio" class="form-control" name="region" id="regionB" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange=" localSaveData(); localLoadData(); disableButtons('B')" >B
                                                    </label>
                                                    <label id="labregionC" class="btn btn-c regionC nonattivo" style="padding:0.1rem 0.7rem;line-height: 2.5rem;width:24%;margin-left:1%;float:left; ">
                                                        <input type="radio" class="form-control" name="region" id="regionC" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="  localSaveData(); localLoadData(); disableButtons('C')">C
                                                    </label>
                                                    <label id="labregionD" class="btn btn-d regionD nonattivo"  style="padding:0.1rem 0.7rem;line-height: 2.5rem;width:24%;margin-left:1%;float:left;">
                                                        <input type="radio" class="form-control" name="region" id="regionD" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="  localSaveData(); localLoadData(); disableButtons('D')">D
                                                    </label>
                                                   
                                                </div>
                                                </div>
                                            </div>
                                                <div id="accordion-icon-wrapper2" class="collapse-icon accordion-icon-rotate DA_ANNACQUARE">

                                                    <div class="accordion" id="accordionWrapar3">
                                                        <div class="card collapse-header open">
                                                            <div id="heading27" class="card-header" data-toggle="collapse" role="button" data-target="#accordion16" aria-expanded="true" aria-controls="accordion16">
                                                                <span class="collapse-title d-flex align-items-center" style="color:#4AA02C;">
                                                                 <i class="livicon-evo" data-options="name:apple.svg; size: 35px; style:lines; strokeColor:#4AA02C;"></i>
                                                                    FOOD CHOICES
                                                                    </span>
                                                            </div>
                                                            <div id="accordion16" role="tabpanel" data-parent="#accordionWrapar3" aria-labelledby="heading27" class="collapse show">
                                                                <div class="card-content">
                                                                    <div class="card-body">
                                                                                 <fieldset class="pt-0">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label for="firstName12" class="DA_ANNACQUARE">Food intake (kcal/cap/day) </label>
                                                    <input type="number"  class="form-control" name="D4" id="f_D4" placeholder="Food intake (kcal/cap/day)" value="2790" >
                                                </div>
                                                
                                                <div class="boxy DA_ANNACQUARE">
                                                  <div class="form-group" style="width:90%;margin-left:4%;">
                                                    <label for="emailAddress12">Vegan</label>
                                                      
                                                      <input type="text"  class="controllo touchspin form-control" name="C6" id="f_C6" data-bts-postfix="%" value="0" onfocus = "sessionStorage.setItem('f_C6', this.value)" onblur="Controllo('f_C6')" >
                                            
                                                </div>
                                                
                                                  <div class="form-group DA_ANNACQUARE" style="width:90%;margin-left:4%;">
                                                    <label for="emailAddress12">Vegatarian</label>
                                                      
                                                      <input type="text"  class="controllo touchspin form-control" name="C7" id="f_C7" data-bts-postfix="%" value="6" onfocus = "sessionStorage.setItem('f_C7', this.value)" onblur="Controllo('f_C7')" >
                                            
                                                </div>
                                                
                                                   <div class="form-group DA_ANNACQUARE" style="width:90%;margin-left:4%;">
                                                    <label for="emailAddress12">Flexitarian</label>
                                                      

                                                      <input type="text"  class="controllo touchspin form-control" name="C8" id="f_C8" value="94" data-bts-postfix="%" onfocus = "sessionStorage.setItem('f_C8', this.value)" onblur="Controllo('f_C8')" >
                                            
                                                   
                                                </div>
                                                
                                                <div class="form-group DA_ANNACQUARE"  style="width:90%;margin-left:4%;">
                                                    <label for="firstName12">Nr of meat/fish days per week in the average flexitarian diet </label>
                                                    <input type="number"  class="form-control" name="A8" id="A8_f" placeholder="7" value="7" minlength="1" maxlength="7">
                                                </div>
                                     
                                            </div>
                                            
                                      
                                              
                                        
                                                
                                                
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="card">
                                                
                                                  <div class="form-group DA_ANNACQUARE">
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
                                                               <i class="livicon-evo" data-options="name:gears.svg; size: 35px; style:lines; strokeColor:#4AA02C;"></i>

                                                                  FOOD PRODUCTION
                                                                </span>
                                                            </div>
                                                            <div id="accordion26" role="tabpanel" data-parent="#accordionWrapar3" aria-labelledby="heading82" class="collapse" aria-expanded="false">
                                                                <div class="card-content">
                                                                    <div class="card-body">
                                                                        <fieldset class="pt-0">
                                        <h6 class="py-50">The following measures can be applied on your rainfed land:</h6>
                                        <div class="row DA_ANNACQUARE">
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
                                            
                                            
                                            <div class="col-sm-6">
                                               
                                                                   
                                                 <div class="form-group">
                                                    <label>Measure:</label>
                                                   <select name="Measure" id="Measure" class="form-control">
                                                   <option value="1">Apply deficit instead of full irrigation</option>
                                                   <option value="2">Apply deficit irrigation and organic mulching</option>
                                                   <option value="3">Apply deficit irrigation,organic mulching and drip irrigation</option>
                                                   </select>
                                                </div>                  
                                                                   
                                            
                                            </div>
                                            <div class="col-sm-6">
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
                                                                 <i class="livicon-evo" data-options="name:truck.svg; size: 35px; style:lines; strokeColor:#4AA02C;"></i>
                                                                    FOOD IMPORT
                                                                </span>
                                                            </div>
                                                            <div id="accordion72" role="tabpanel" data-parent="#accordionWrapar3" aria-labelledby="heading37" class="collapse" aria-expanded="false">
                                                                <div class="card-content">
                                                                    <div class="card-body">
                                                                    <fieldset class="pt-0">
                                        <h6 class="py-50">Category: Plant-based</h6>
                                        <div class="row DA_ANNACQUARE">
                                       <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>% food in this category imported <b id="pb">(Source World)</b></label>
                                                   <input type="text"  class="touchspin form-control" value="0" id="E30" name="E30" value="100" data-bts-postfix="%">

                                                </div>
                                            </div>
                                            <div class="col-sm-6 DA_ANNACQUARE">
                                                <div class="form-group">
                                                     <label for="lastName1">Source </label>
                                                     <div class="btn-group btn-group-toggle mb-1" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                    <label class="btn btn-b " style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsplant" id="planta" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('A','pb')"> A
                                                    </label>
                                                    <label class="btn btn-b " style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsplant" id="plantb" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('B','pb')"> B
                                                    </label>
                                                    <label class="btn btn-c" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsplant" id="plantc" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('C','pb')"> C
                                                    </label>
                                                    <label class="btn btn-d" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsplant" id="plantd" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('D','pb')"> D
                                                    </label>
                                                    <label class="btn btn-w active" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsplant" id="plantworld" onchange="Source('WORLD','pb')" checked style="padding:0.1rem 0.7rem;line-height: 2.5rem;"> WORLD
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                             <h6 class="py-50">Category: Meat & Fish</h6>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>% food in this category imported <b id="mf">(Source World)</b></label>
                                                   <input type="text"  class="touchspin form-control" value="0"  id="E31" name="E31" value="100" data-bts-postfix="%">

                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                     <label for="lastName1">Source </label>
                                                     <div class="btn-group btn-group-toggle mb-1" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                     <label class="btn btn-b " style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsmeat" id="meata" onchange="Source('A','mf')" > A
                                                    </label>
                                                    <label class="btn btn-b " style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsmeat" id="meatb" onchange="Source('B','mf')" > B
                                                    </label>
                                                    <label class="btn btn-c" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsmeat" id="meatc" onchange="Source('C','mf')" > C
                                                    </label>
                                                    <label class="btn btn-d" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsmeat" id="meatd" onchange="Source('D','mf')" > D
                                                    </label>
                                                    <label class="btn btn-w active" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsmeat" id="meatworld" checked onchange="Source('WORLD','mf')"> WORLD
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                            
											
                                            
                                             <div class="col-12">
                                             <h6 class="py-50">Category: Diary & Eggs</h6>
                                            </div>
                                          <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>% food in this category imported <b id="de">(Source World)</b></label>
                                                   <input type="text"  class="touchspin form-control" value="0"  id="E32" name="E32" value="100" data-bts-postfix="%">

                                                </div>
                                            </div>
                                             <div class="col-sm-6">
                                                <div class="form-group">
                                                     <label for="lastName1">Source </label>
                                                     <div class="btn-group btn-group-toggle mb-1" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                    <label class="btn btn-b " style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsdiary" id="diarya" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('A','de')"> A
                                                    </label>
                                                    <label class="btn btn-b " style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsdiary" id="diaryb" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('B','de')"> B
                                                    </label>
                                                    <label class="btn btn-c" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsdiary" id="diaryc" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('C','de')"> C
                                                    </label>
                                                    <label class="btn btn-d" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsdiary" id="diaryd" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('D','de')"> D
                                                    </label>
                                                    <label class="btn btn-w active" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsdiary" id="diaryworld" onchange="Source('WORLD','de')" checked style="padding:0.1rem 0.7rem;line-height: 2.5rem;"> WORLD
                                                    </label>
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
                                                            <div id="heading83" class="card-header" data-toggle="collapse" role="button" data-target="#accordion802" aria-expanded="false" aria-controls="accordion802">
                                                                <span class=" collapse-title d-flex align-items-center"  style="color:	#E9AB17;">
                                                         <i class="livicon-evo" data-options="name:battery-charge.svg; size: 35px; style:lines; strokeColor:#E9AB17;"></i>

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
                                                    <input type="text"  class="touchspin form-control" data-bts-postfix="%" name="e_N11" id="e_N11" placeholder="Reduction in industry" value="2">
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
                                                    <input type="text"  class="touchspin form-control" data-bts-postfix="%"  name="e_N13" id="e_N13" placeholder="Reduction in the transport" value="26">
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
                                            <i class="livicon-evo" data-options="name:idea.svg; size: 35px; style:lines; strokeColor:#E9AB17;"></i>

                                                                  ELECTRICITY MIX
                                                                </span>
                                                            </div>
                                                            <div id="accordion121" role="tabpanel" data-parent="#accordionWrapar3" aria-labelledby="heading92" class="collapse" aria-expanded="false">
                                                                <div class="card-content">
                                                                    <div class="card-body">
                                                                        <fieldset class="pt-0">
                                        <h6 class="py-50"><b style="font-style:italic;">Renewable:</b></h6>
                                        <div class="row">
                                          
                                           
                                           
                                            <div class="col-sm-6">
                                            
                                            <div class="boxy">
                                            
                                            
                                              <div class="form-group"  style="width:90%;margin-left:4%;">
                                                    <label>Wind</label>
                                                   <input type="text"  class="touchspin form-control"  id="em_J21" name="J21" data-bts-postfix="%" value="12" onblur="EnergyCheck('em_J21')">
                                                </div>
                                                <div class="form-group"  style="width:90%;margin-left:4%;">
                                                    <label>Solar</label>
                                                   <input type="text"  class="touchspin form-control" id="em_J22" name="J22" data-bts-postfix="%" value="3" onblur="EnergyCheck('em_J22')">
                                                </div>
                                                <div class="form-group"  style="width:90%;margin-left:4%;">
                                                    <label>Hydro</label>
                                                   <input type="text"  class="touchspin form-control" id="em_J23" name="J23" data-bts-postfix="%" value="18" onblur="EnergyCheck('em_J23')">
                                                </div>
                                                 <div class="form-group"  style="width:90%;margin-left:4%;">
                                                    <label>Biofuels</label>
                                                   <input type="text"  class="touchspin form-control" id="em_J24" name="J24" data-bts-postfix="%" value="3" onblur="EnergyCheck('em_J24')">
                                                </div>
                                                
                                                </div>  
                                              
                                          <br>
                                           
                                            <h6 class="pb-80"><b style="font-style:italic;">Non-renewable</b></h6>
                                         
                                          
                                            
                                             <div class="form-group">
                                                    <label>Nuclear</label>
                                                   <input type="text"  class="touchspin form-control" id="em_J25" name="J25" data-bts-postfix="%" value="4" onblur="EnergyCheck('em_J25')">
                                                </div>
                                                <div class="form-group">
                                                    <label>Fossil</label>
                                                   <input type="text"  class="touchspin form-control" id="em_J26" name="J26" data-bts-postfix="%" value="60" onblur="EnergyCheck('em_J26')">
                                                </div>
                                                
                                            </div>
                                            <div class="col-sm-6">
                                              
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title DA_ANNACQUARE">Electricity Mix Chart</h4>
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
                                                                
                                      <i class="livicon-evo" data-options="name:file-import.svg; size: 35px; style:lines; strokeColor:#E9AB17;"></i>

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
                                                    <label>% energy in this category imported <b id="ff">(Source World)</b></label>
                                                   <input type="text"  class="touchspin form-control" id="L30" name="L30" value="74" data-bts-postfix="%">

                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                     <label for="lastName1">Source </label>
                                                     <div class="btn-group btn-group-toggle mb-1" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                    <label class="btn btn-b " style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsfossil" id="fossila" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('A','ff')"> A
                                                    </label>
                                                    <label class="btn btn-b " style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsfossil" id="fossilb" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('B','ff')"> B
                                                    </label>
                                                    <label class="btn btn-c" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsfossil" id="fossilc" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('C','ff')"> C
                                                    </label>
                                                    <label class="btn btn-d" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsfossil" id="fossild" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('D','ff')"> D
                                                    </label>
                                                    <label class="btn btn-w active" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsfossil" id="fossilworld" onchange="Source('WORLD','ff')" checked style="padding:0.1rem 0.7rem;line-height: 2.5rem;"> WORLD
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="col-12">
                                             <h6 class="py-50">Category: Biofuels</h6>
                                            </div>
                                          <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>% energy in this category imported <b id="bb">(Source World)</b></label>
                                                   <input type="text"  class="touchspin form-control" id="L31" name="L31" value="0" data-bts-postfix="%">

                                                </div>
                                            </div>
                                             <div class="col-sm-6">
                                                <div class="form-group">
                                                     <label for="lastName1">Source </label>
                                                     <div class="btn-group btn-group-toggle mb-1" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                    <label class="btn btn-b " style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsbio" id="biofuela" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('A','bb')"> A
                                                    </label>
                                                    <label class="btn btn-b " style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsbio" id="biofuelb" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('B','bb')"> B
                                                    </label>
                                                    <label class="btn btn-c" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonsbio" id="biofuelc" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('C','bb')"> C
                                                    </label>
                                                    <label class="btn btn-d" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsbio" id="biofueld" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('D','bb')"> D
                                                    </label>
                                                    <label class="btn btn-w active" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonsbio" id="biofuelworld" onchange="Source('WORLD','bb')" checked style="padding:0.1rem 0.7rem;line-height: 2.5rem;"> WORLD
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                            
                                            
                                             <div class="col-12">
                                             <h6 class="py-50">Category: Electricity</h6>
                                            </div>
                                          <div class="col-sm-6">
                                                <div class="form-group">
                                                    <label>% energy in this category imported <b id="ec">(Source World)</b></label>
                                                   <input type="text"  class="touchspin form-control" id="L32" name="L32" value="0" data-bts-postfix="%">

                                                </div>
                                            </div>
                                            <div class="col-sm-6">
                                                <div class="form-group">
                                                     <label for="lastName1">Source </label>
                                                     <div class="btn-group btn-group-toggle mb-1" data-toggle="buttons" style="position: relative;display: flex;flex-wrap: wrap;align-items: stretch;width: 100%;">
                                                     <label class="btn btn-b " style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonselec" id="ela" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('A','ec')"> A
                                                    </label>
                                                    <label class="btn btn-b " style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonselec" id="elb" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('B','ec')"> B
                                                    </label>
                                                    <label class="btn btn-c" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"  class="form-control" name="checkbuttonselec" id="elc" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('C','ec')"> C
                                                    </label>
                                                    <label class="btn btn-d" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonselec" id="eld" style="padding:0.1rem 0.7rem;line-height: 2.5rem;" onchange="Source('D','ec')"> D
                                                    </label>
                                                    <label class="btn btn-w active" style="padding:0.1rem 0.7rem;line-height: 2.5rem;">
                                                        <input type="radio"   class="form-control" name="checkbuttonselec" id="elworld" onchange="Source('WORLD','ec')" checked style="padding:0.1rem 0.7rem;line-height: 2.5rem;"> WORLD
                                                    </label>
                                                </div>
                                                </div>
                                            </div>
                                            
                                            
                                        </div>
                                    </fieldset>
                                    <!-- step 3 content end-->
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
														
														
														
														
														
														
														
														
														
														
														
														
														
														
														                 <div class="card collapse-header">
                                                            <div id="heading110" class="card-header" data-toggle="collapse" role="button" data-target="#accordion150" aria-expanded="false" aria-controls="accordion143">
                                                                <span class=" collapse-title d-flex align-items-center"  style="color:	blue;">
                                                                
                                      <i class="livicon-evo" data-options="name:comments.svg; size: 35px; style:lines; strokeColor:blue;"></i>

                                                                   TRADE
                                                                </span>
                                                            </div>
                                                                     <div id="accordion150" role="tabpanel" data-parent="#accordionWrapar3" aria-labelledby="heading110" class="collapse" aria-expanded="false">
                                                                <div class="card-content">
                                                                    <div class="card-body">
                                                  <fieldset class="pt-0">
                                        <h6 class="py-50">Coming soon...</h6>
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
                        
                        
                                    <!-- invoice view page col-xl-7 col-md-8 col-12 style="position: fixed;width:56%;"-->
                        <div class="col GRAFICI_EU">
                            <div class="card" >
                                <div class="card-content">
                                    <div class="card-body"  id="xhx" >
                                           
                                     <!-- collapse with icon -->
                <section id="collapsible-with-icon">
                 
                    <div class="collapsible collapse-icon accordion-icon-rotate">
                        <div class="card collapse-header open">
                            <div id="headingCollapse5" class="card-header" data-toggle="collapse" role="button" data-target="#collapse5" aria-expanded="true" aria-controls="collapse5">
                                <span class="collapse-title">
                                    <i class="livicon-evo" data-options="name:morph-glass.svg; size: 35px; style:lines; strokeColor:#15317E;"></i>
                                    <span class="align-middle">FOOTPRINTS OF CONSUMPTION</span>
                                </span>
                            </div>
                         
                            <div id="collapse5" role="tabpanel" aria-labelledby="headingCollapse5" class="collapse show">
                                <div class="card-content">
                                    <div class="card-body" style="padding: 1rem;">
                                    
                                    <div class="row" style="text-align:center;">                                    
                                    <div class="col" id="EU_GT1" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><center>28.7</center></h4></div>
                                    <div class="col" id="EU_GT2" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><center>18.2</center></h4></div>
                                    <div class="col" id="EU_GT3" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><center>7045</center></h4></div>
                                    <div class="col" id="EU_GT4" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><center>1081</center></h4></div>
                                    </div>
                                    <div class="row"  style="text-align:center;">
                                    <div class="col divi " id="EU_percent1"  style="font-size:80%;">17% above the initial value </small> </div>
                                    <div class="col divi " id="EU_percent2"  style="font-size:80%;">37% above the initial value </small> </div>
                                    <div class="col divi " id="EU_percent3"  style="font-size:80%;">36% above the initial value </small> </div>
                                    <div class="col divi " id="EU_percent4"  style="font-size:80%;">40% above the initial value </small> </div>
                                    </div>
                                    
                                    
                                    <div class="row">                                
                                                       
                                <div class="col-md-3" style="min-height:200px;">                                
                                 <div class="chartjs-size-monitor">
                                   <div class="chartjs-size-monitor-expand"></div>
                                   <div class="chartjs-size-monitor-shrink"></div>
                                 </div>
                                 <canvas id="EU-bar-chart"  class="chartjs-render-monitor" ></canvas>
                                 </div>
                                        
                               <div class="col-md-3" >                                
                                 <div class="chartjs-size-monitor">
                                   <div class="chartjs-size-monitor-expand"></div>
                                   <div class="chartjs-size-monitor-shrink"></div>
                                 </div>
                                 <canvas id="EU-bar-chart-2"  class="chartjs-render-monitor" ></canvas>
                                 </div>
                     
                               <div class="col-md-3" >                                
                                 <div class="chartjs-size-monitor">
                                   <div class="chartjs-size-monitor-expand"></div>
                                   <div class="chartjs-size-monitor-shrink"></div>
                                 </div>
                                 <canvas id="EU-bar-chart-3"  class="chartjs-render-monitor" ></canvas>
                                 </div>
                      
                                   <div class="col-md-3" >                                
                                 <div class="chartjs-size-monitor">
                                   <div class="chartjs-size-monitor-expand"></div>
                                   <div class="chartjs-size-monitor-shrink"></div>
                                 </div>
                                 <canvas id="EU-bar-chart-4"  class="chartjs-render-monitor" ></canvas>
                                 </div>       
                                        
                                        
                                                                   
                                    </div>
                  
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        
                        <div class="card collapse-header ">
                            <div id="headingCollapse6" class="card-header" data-toggle="collapse" role="button" data-target="#collapse6" aria-expanded="true" aria-controls="collapse6">
                                <span class="collapse-title">
                                    <i class="livicon-evo" data-options="name:morph-bar-chart.svg; size: 35px; style:lines; strokeColor:#15317E;"></i>
                                    <span class="align-middle">FOOTPRINTS OF PRODUCTION</span>
                                </span>
                            </div>
                            <div id="collapse6" role="tabpanel" aria-labelledby="headingCollapse2" class="collapse show">
                                <div class="card-content">
                                    <div class="card-body">
                                        <div class="row" style="text-align:center;"> 
                                     <div class="col" id="EU_GT1_sotto" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><h4><center></center></h4></div>
                                    <div class="col" id="EU_GT2_sotto" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><h4><center></center></h4></div>
                                    <div class="col" id="EU_GT3_sotto" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><h4><center></center></h4></div>
                                    <div class="col" id="EU_GT4_sotto" style="color: #5A8DEE !important;font-weight:800;font-size:24px;"><h4><center></center></h4></div>
                                    </div>
                                    <div class="row"  style="text-align:center;">
                                    <div class="col divi " id="EU-percent1_sotto"  style="font-size:80%;"><small>0% above the initial value </small> </div>
                                    <div class="col divi " id="EU-percent2_sotto"  style="font-size:80%;"><small>0% above the initial value </small> </div>
                                    <div class="col divi " id="EU-percent3_sotto"  style="font-size:80%;"><small>0% above the initial value </small> </div>
                                    <div class="col divi " id="EU-percent4_sotto"  style="font-size:80%;"><small>0% above the initial value </small> </div>
                                    </div>
                                  <div class="row">    
                  
                                                       
                                <div class="col-md-3" style="max-height:220px;margin-top:0.5em!important;">                                                                  
                                       
                                        <div class="chartjs-size-monitor">
                                        <div class="chartjs-size-monitor-expand"></div>
                                        <div class="chartjs-size-monitor-shrink"></div>
                                        </div>
                                        <canvas id="EU-bar-chart-sotto1"   style="height:220px;"  class="chartjs-render-monitor"></canvas>
                                  
                                
                                </div>
                                
                                   <div class="col-md-3" style="max-height:220px;">
                                                                  
                                       
                                        <div class="chartjs-size-monitor">
                                        <div class="chartjs-size-monitor-expand"></div>
                                        <div class="chartjs-size-monitor-shrink"></div>
                                        </div>
                                        <canvas id="EU-bar-chart-sotto-due"  style="height:220px;" class="chartjs-render-monitor"></canvas>
                                 
                                
                                </div>
                                        
                                       <div class="col-md-3" style="max-height:220px;">
                                                                  
                                     
                                        <div class="chartjs-size-monitor">
                                        <div class="chartjs-size-monitor-expand"></div>
                                        <div class="chartjs-size-monitor-shrink"></div>
                                        </div>
                                        <canvas id="EU-bar-chart-sottotre"  style="height:220px;" class="chartjs-render-monitor"></canvas>
                             
                                
                                </div>
                                
                             <div class="col-md-3" style="max-height:220px;">
                                                                  
                                       
                                        <div class="chartjs-size-monitor">
                                        <div class="chartjs-size-monitor-expand"></div>
                                        <div class="chartjs-size-monitor-shrink"></div>
                                        </div>
                                        <canvas id="EU-bar-chart-sottoquattro"  style="height:220px;" class="chartjs-render-monitor"></canvas>
                              
                                
                                </div> 
           
                                            
                                    </div>
                        
                        
                        
                         </div>
                                </div>
                            </div>
                        </div>
                        <div class="card collapse-header open">
                            <div id="headingCollapse7" class="card-header" data-toggle="collapse" role="button" data-target="#collapse7" aria-expanded="true" aria-controls="collapse7">
                                <span class="collapse-title">
                                    <i class="livicon-evo" data-options="name:lock.svg; size: 35px; style:lines; strokeColor:#15317E;"></i>
                                    <span class="align-middle">SECURITY</span>
                                </span>
                            </div>
                            <div id="collapse7" role="tabpanel" aria-labelledby="headingCollapse7" class="collapse show">
                                <div class="card-content">
                                    <div class="card-body">
                              
                              
           
                                
                              <div class="graph_container">
                                     <div class="row">
                                     <div class="col-md-4">
                                     <canvas id="EU-polar-chart-security"></canvas>
                                     </div>  
                                     
                          <!-- <div class="row" style="margin:0em 1.5em;font-size:10pt;">   -->    
 
                       <div class="col-md" style="margin-left:3em;">
        <div class="col-sm" style="float: left; background-color:#5a8dee; margin-right:0.3em; width: 46px; color:#5a8dee;">.</div>
        <div class="col-6 col-sm" style="">A</div>
        
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
        <div class="col-6 col-sm" style="margin-top:1em;">Rest of the World</div>
        
  		</div>
        
  	<!--	</div>     -->                                               
                                     <div class="col-md-4">
                                     <canvas id="EU-polar-chart-security-2"></canvas>
                                     </div></div>
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
	<!-- <script src="app-assets/js/multi/scripts/loadGlobalVariables.js"></script> -->
   	<!-- BEGIN: Vendor JS-->
   
  
    <script src="app-assets/vendors/js/vendors.min.js"></script>
    <script src="app-assets/fonts/LivIconsEvo/js/LivIconsEvo.tools.js"></script>
    <script src="app-assets/fonts/LivIconsEvo/js/LivIconsEvo.defaults.js"></script>
    <script src="app-assets/fonts/LivIconsEvo/js/LivIconsEvo.min.js"></script>
    <script src="app-assets/js/multi/scripts/target-score.js"></script> 
    <!-- BEGIN Vendor JS-->

    <!-- BEGIN: Page Vendor JS-->
      <script src= 
"https://code.jquery.com/jquery-3.3.1.min.js"> 
  </script> 
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
        <script src="app-assets/vendors/js/extensions/jquery.steps.min.js"></script>
        <script src="app-assets/js/multi/scripts/forms/wizard-steps.js"></script>
        <script src="app-assets/vendors/js/forms/spinner/jquery.bootstrap-touchspin.js"></script>
        <script src="app-assets/js/multi/scripts/forms/number-input.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.6.0/Chart.min.js"></script>
  	<!-- SCRIPT LOCAL STORAGE -->
 		<script src="app-assets/js/multi/scripts/disableButtons.js"></script>
 		<script src="app-assets/js/multi/scripts/localData_3.js"></script>
 		<script>
 		document.getElementById("refresh_eu").addEventListener("click", myFunction);

 		function myFunction() {
 			getRoomRefresh(Id_room_EU_);
 		}
 		</script>
 	 <script src="app-assets/js/multi/scripts/EU_load_data.js"></script>  
 		<script src="app-assets/js/multi/scripts/charts/EU-grafici-sopra.js"></script>
 		<script src="app-assets/js/multi/scripts/charts/EU-grafici-security.js"></script>
 		<script src="app-assets/js/multi/scripts/charts/EU-grafici-sotto.js"></script>
 		<script src="app-assets/js/multi/scripts/target-score.js"></script>
 		
 	
    <!--  <script src="app-assets/js/multi/scripts/charts/plugin/chartjs-plugin-annotation.min.js"></script> -->
     	<script src="https://cdnjs.cloudflare.com/ajax/libs/chartjs-plugin-annotation/0.5.5/chartjs-plugin-annotation.js"></script>
       	<script src="https://cdn.rawgit.com/chartjs/Chart.js/master/samples/utils.js"></script>
      	<script src="app-assets/js/multi/scripts/charts/chart-chartist.js"></script>
        <script src="app-assets/vendors/js/charts/chartist.min.js"></script>

          <script src="app-assets/js/multi/scripts/extensions/sweet-alerts.js"></script>

        
    <!-- BEGIN: Page JS-->
    	<script src="app-assets/js/multi/scripts/pages/app-invoice.js"></script>
    	  <script src="app-assets/vendors/js/forms/select/select2.full.min.js"></script>
    	      	 	<script src="app-assets/js/multi/scripts/forms/select/form-select2.js"></script>
    	  
    <!-- END: Page JS-->


</body>
<!-- END: Body-->
<script>

/* $('#invoice-edit-wrapper').scroll(function() { 
    $('#FixedDiv').animate({top:$(this).scrollTop()});
}); */

$(document).ready(function() {
	$('.ckx').on('change', function() {
   		if($('.ckx:checked').length > 3) {
       		this.checked = false;
   		}
	});
});

function Source(valore,id){
	document.getElementById(id).innerHTML = "(Source "+valore+")";
}

</script>


<script>
function Source(valore,id){
	document.getElementById(id).innerHTML = "(Source "+valore+")";
}

</script>

 <script> 
        function scrollToTop() { 
            $(window).scrollTop(0); 
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
   