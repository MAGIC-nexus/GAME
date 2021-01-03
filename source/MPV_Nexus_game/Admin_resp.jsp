<%@ include file="impaginazione/intestazione.jsp" %>
<%@ include file="impaginazione/Calendar.jsp" %>
<!DOCTYPE html>
<html class="loading" lang="en" data-textdirection="ltr">
<!-- BEGIN: Head-->
<%
OpDash op = OpDash.getInstance();
String risp="";
String refresh="";
if( (request.getParameter("Username").equals("admin")) && (request.getParameter("Password").equals("admin")) ){
	refresh="<META HTTP-EQUIV=\"Refresh\"CONTENT=\"1;URL=New_Fac.jsp\">";
	risp="<b style=\"color:green;\">Autentication ok... Good Job!</b>";
}else if( (request.getParameter("Username").equals("mstaiano")) && (request.getParameter("Password").equals("game2020@")) ){
	refresh="<META HTTP-EQUIV=\"Refresh\"CONTENT=\"1;URL=New_Fac.jsp\">";
	risp="<b style=\"color:green;\">Autentication ok Michele... Good Job!</b>";	
}else if( (request.getParameter("Username").equals("jfschyns")) && (request.getParameter("Password").equals("uttwente2020!")) ){
	refresh="<META HTTP-EQUIV=\"Refresh\"CONTENT=\"1;URL=New_Fac.jsp\">";
	risp="<b style=\"color:green;\">Autentication ok... Good Job!</b>";	
}else{	
	risp="<b style=\"color:red;\">OoPs! Autentication failure.</b>";
	refresh="";	
}
%>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="">
    <title>Login Page - Nexus</title>
    <link rel="apple-touch-icon" href="app-assets/images/ico/apple-icon-120.png">
    <link rel="shortcut icon" type="image/x-icon" href="app-assets/images/ico/favicon.ico">
    <link href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,600%7CIBM+Plex+Sans:300,400,500,600,700" rel="stylesheet">

    <!-- BEGIN: Vendor CSS-->
    <link rel="stylesheet" type="text/css" href="app-assets/vendors/css/vendors.min.css">
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
    <link rel="stylesheet" type="text/css" href="app-assets/css/pages/authentication.css">
    <!-- END: Page CSS-->

    <!-- BEGIN: Custom CSS-->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <!-- END: Custom CSS-->

</head>
<!-- END: Head-->

<!-- BEGIN: Body-->

<body onLoad="RandomBg();" id="Bodone" class="horizontal-layout horizontal-menu navbar-sticky 1-column  footer-static  blank-page blank-page" data-open="hover" data-menu="horizontal-menu" data-col="1-column">
    <!-- BEGIN: Content-->
    <div class="app-content content">
        <div class="content-overlay"><%=refresh %></div>
        <div class="content-wrapper">
            <div class="content-header row">
            </div>
            <div class="content-body">
                <!-- login page start -->
                <section id="auth-login" class="row flexbox-container">
                    <div class="col-xl-8 col-11">
                        <div class="card bg-authentication mb-0" style="opacity: 0.92;">
                            <div class="row m-0">
                                <!-- left section-login -->
                                <div class="col-md-6 col-12 px-0">
                                    <div class="card disable-rounded-right mb-0 p-2 h-100 d-flex justify-content-center">
                                        <div class="card-header pb-1">
                                            <div class="card-title">
                                                <h4 class="text-center mb-2"><img src="icon/avatar.jpg" style="width:48px;"> <a href="Room.jsp" title="Return to home">Welcome to Nexus Game!</a></h4>
                                            </div>
                                        </div>
                                        <div class="card-content">
                                            <div class="card-body">
                                             <div class="d-flex flex-md-row flex-column justify-content-around">
                                                    <a href="javascript:void(0);" onClick="Vis('GS');" class="btn btn-social btn-google btn-block font-small-3 mr-md-1 mb-md-0 mb-1">
                                                        <i class="bx bx-brightness font-medium-3"></i><span class="pl-50 d-block text-center">Game Setting</span></a>
                                                    <a href="javascript:void(0);" onClick="Vis('GP');" class="btn btn-social btn-block mt-0 btn-facebook font-small-3">
                                                        <i class="bx bx-bullseye font-medium-3"></i><span class="pl-50 d-block text-center">Game Purpose </span></a>
                                                </div>
<div class="divider">
                                                    <div class="divider-text text-uppercase text-muted"><small> ADMIN AUTENTICATION</small>
                                                    </div>
                                                </div>
                                                <div align="center"><b><%=risp %></b></div>
                                                   <form method="post" Id="formy" action="Admin_resp.jsp">
                                                    <div class="form-group mb-50">
                                                        <label class="text-bold-600" for="exampleInputEmail1">Username</label>
                                                        <input type="text" class="form-control" id="username" placeholder="Username" name="Username">
                                                    </div>
                                                    
                                                       <div class="form-group mb-50">
                                                        <label class="text-bold-600" for="exampleInputEmail1">Password</label>
                                                        <input type="password" class="form-control" id="password" placeholder="password" name="Password">
                                                    </div>
                                                    
                                                  
                                                     <input type="hidden" name="Action" value="Login" id="Action">
                                                    <div id="quest" style="width:100%;text-align:center;"></div>
                                                    <button type="submit" class="btn btn-primary glow w-100 position-relative" style="margin-top:20px;" id="LoginButton" >Login<i id="icon-arrow" class="bx bx-right-arrow-alt"></i></button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- right section image -->
                                <div class="col-md-6 d-md-block d-none text-center align-self-center p-3">
                                    <div class="card-content" id="Contenuto" style="min-height:350px;text-align:justify;">
                                       <iframe width="100%" height="330px" style="margin-top:60px;" src="https://www.youtube.com/embed/5KAyNd-ioEQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                     This project has received funding from the European Union’s Horizon 2020 Research and Innovation Programme under grant agreement No. 689669.<br>
The present work reflects only the author's view and the Funding Agency can not be held responsible for any use that may be made of the 
information it contains. 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- login page ends -->

            </div>
        </div>
    </div>
    <!-- END: Content-->

   <!-- BEGIN: Vendor JS-->
    <script src="app-assets/vendors/js/vendors.min.js"></script>
    <script src="app-assets/fonts/LivIconsEvo/js/LivIconsEvo.tools.js"></script>
    <script src="app-assets/fonts/LivIconsEvo/js/LivIconsEvo.defaults.js"></script>
    <script src="app-assets/fonts/LivIconsEvo/js/LivIconsEvo.min.js"></script>
    <!-- BEGIN Vendor JS-->

    <!-- BEGIN: Page Vendor JS-->
    <script src="app-assets/js/scripts/loginGlobalVariables.js"></script>
    <script src="app-assets/vendor/jquery.sticky.js"></script>
    <!-- END: Page Vendor JS-->

    <!-- BEGIN: Theme JS-->
    <script src="app-assets/js/scripts/configs/horizontal-menu.js"></script>
    <script src="app-assets/js/core/app-menu.js"></script>
    <script src="app-assets/js/core/app.js"></script>
    <script src="app-assets/js/scripts/components.js"></script>
    <script src="app-assets/js/scripts/footer.js"></script>
    <!-- END: Theme JS-->

    <!-- BEGIN: Page JS-->
    <!-- END: Page JS-->

    <!-- BEGIN: Page JS-->
    <!-- END: Page JS-->
    
    
    <script>
    function Vis(valore){
    	if(valore =='SP1'){
    		document.getElementById("Contenuto").innerHTML = "<b style='color:red;'>Single Player Level 1</b><br><br>Single Player Level 1 focuses on the challenges within an individual member state to achieve environmental sustainability by changing the consumption habits and the production practices.<br><br>The player controls one EU region, and there is no trade in food and energy.<br><br>This version is recommended for anyone with limited experience regarding the water-land-carbon-food-energy nexus."; 
    	    document.getElementById("Role").style.display = "inline";    

    	}else if(valore =='SP2'){
    		document.getElementById("Contenuto").innerHTML = "<b style='color:red;'>Single Player Level 2</b><br><br>Single Player Level 2 focuses on the challenge to achieve food and energy security for the EU as a whole, while also achieving sustainability targets in each of the member states (i.e. corresponding to one of the four EU region’s in the game).<br><br>The player controls all four EU regions and has full flexibility in changing practices and closing trade agreements.<br><br>This version is recommended for anyone with more experience regarding the water-land-carbon-food-energy nexus, and people who have mastered Single Player Level 1."; 
            document.getElementById("Role").style.display = "none";    	
		}else if(valore =='MP'){
    		document.getElementById("Contenuto").innerHTML = "<b style='color:red;'>Multiplayer focuses</b><br><br>Multiplayer focuses on the cooperation and policy alignment between the member states to attain the EU level targets.<br><br>This version requires a facilitator and a minimum of four players: each controlling one of the EU regions in the game. "; 
    	}else if(valore =='GS'){
    		document.getElementById("Contenuto").innerHTML = "<b style='color:red;'>The setting of the game</b><br><br>The EU needs to secure its future food and energy supply while keeping environmental impacts within safe boundaries: reduce carbon emissions while staying within the available land and water resources.<br>Reconciling the policy targets on food and energy security, sustainable and efficient resource use, and climate adaptation is a major challenge due to the many feedbacks in terms of the water-land-carbon-food-energy nexus.<br>Tackling this challenge requires changes in the current food and energy production and consumption patterns. Moreover, many of the related choices are not made at the EU level, but at the level of individual member states. Natural resource endowments, consumption habits, and production practices vary widely among the member states.<br>As a consequence the member states need to focus on taking different measures, and inter-regional cooperation between the member states is essential to achieve the goals of the economic block."; 
    	}else if(valore =='GP'){
    		document.getElementById("Contenuto").innerHTML = "<b style='color:red;'>The purpose and focus of the game</b><br><br>The purpose of the game is to experience the challenges and solutions for member states – as part of a larger economic block – to achieve food and energy security within the safe environmental boundaries.<br><br>The EU is schematized into four regions based on the degree of land and water scarcity and the resource-intensity of consumption patterns, in such a way that they face different challenges and have different learning points.<br>Three versions of the game can beplayed: Single Player Level 1, Single Player Level 2 and Multiplayer. Select one from the drop-down menu to see the description."; 
    	}else if(valore =='regionA'){
    		document.getElementById("Contenuto").innerHTML = "<span><b style='color:red;'>REGION A</b> / <b style='color:black;font-size:0.8rem;'>Population of EU:</b><b style='color:red;'> 12%</b><br><b  style='color:black;font-size:0.8rem;'>Land and green water (rain) availability per capita:</b><b style='color:red;'> Low</b><br><b  style='color:black;font-size:0.8rem;'>Blue water (surface and groundwater) availability per capita:</b><b style='color:red;'> Medium</b></span><br><img src='intro/Region_A.png' style='width:99%;border:2px solid #AFDCEC;box-shadow: 0 2px 4px 0 rgba(90, 141, 238, 0.5) !important;' />"; 
    	}else if(valore =='regionB'){
    		document.getElementById("Contenuto").innerHTML = "<span><b style='color:red;'>REGION B</b> / <b style='color:black;font-size:0.8rem;'>Population of EU:</b><b style='color:red;'> 8%</b><br><b  style='color:black;font-size:0.8rem;'>Land and green water (rain) availability per capita:</b><b style='color:red;'> High</b><br><b  style='color:black;font-size:0.8rem;'>Blue water (surface and groundwater) availability per capita:</b><b style='color:red;'> High</b></span><br><img src='intro/Region_B.png' style='width:99%;border:2px solid #AFDCEC;box-shadow: 0 2px 4px 0 rgba(90, 141, 238, 0.5) !important;' />"; 
    	}else if(valore =='regionC'){
    		document.getElementById("Contenuto").innerHTML = "<span><b style='color:red;'>REGION C</b> / <b style='color:black;font-size:0.8rem;'>Population of EU:</b><b style='color:red;'> 46%</b><br><b  style='color:black;font-size:0.8rem;'>Land and green water (rain) availability per capita:</b><b style='color:red;'> Medium</b><br><b  style='color:black;font-size:0.8rem;'>Blue water (surface and groundwater) availability per capita:</b><b style='color:red;'> Low</b></span><br><img src='intro/Region_C.png' style='width:99%;border:2px solid #AFDCEC;box-shadow: 0 2px 4px 0 rgba(90, 141, 238, 0.5) !important;' />"; 
    	}else if(valore =='regionD'){
    		document.getElementById("Contenuto").innerHTML = "<span><b style='color:red;'>REGION D</b> / <b style='color:black;font-size:0.8rem;'>Population of EU:</b><b style='color:red;'> 34%</b><br><b  style='color:black;font-size:0.8rem;'>Land and green water (rain) availability per capita:</b><b style='color:red;'> Low</b><br><b  style='color:black;font-size:0.8rem;'>Blue water (surface and groundwater) availability per capita:</b><b style='color:red;'> Low</b></span><br><img src='intro/Region_D.png' style='width:99%;border:2px solid #AFDCEC;box-shadow: 0 2px 4px 0 rgba(90, 141, 238, 0.5) !important;' />"; 
    	}
    }
    
</script>

<script>
function RandomBg(){
valore = Math.floor(Math.random() * 3); 
valore = (valore * 1) + 1;
name = 'intro_'+valore+'.jpg';
document.getElementById("Bodone").style=" background: url('intro/"+name+"') no-repeat center center; background-size: cover;";
}
</script>

<script>
function VUser(user){

    var url_ = "VUser.jsp?User="+user;
 
	var xhttp_ = new XMLHttpRequest();
	xhttp_.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    document.getElementById("Guard").innerHTML = this.responseText;
   
	}};
	xhttp_.open("GET", url_, true);
    xhttp_.send();
}


function Abilita(){
	document.getElementById("LoginButton").disabled = false;
	document.getElementById('quest').innerHTML = "";
}

function Controlla(parola,ide){
	    alert("Parola: "+parola);
	    alert("Ide: "+ide);
	    var url_ = "Controlla.jsp?Testo="+parola+"&Id="+ide;
	 
		var xhttp_ = new XMLHttpRequest();
		xhttp_.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			  var esito = this.responseText;
			    esito = esito.replace(/^\s+|\s+$/gm,'');
			   
			    if(esito=='si'){
			    	document.getElementById("LoginButton").disabled = false;
			    	document.getElementById('quest').innerHTML = "<span style=\"width:100%;text-align:center;font-weight:bold;color:green;\">WELCOME BACK! <i class='bx bx-down-arrow-circle' ></i> </span>"
			        document.getElementById('Action').value='Au';
			    }else{
			    	document.getElementById("LoginButton").disabled = true;
			    	document.getElementById('quest').innerHTML = "<span style=\"width:100%;text-align:center;font-weight:bold;color:red;\"><i class='bx bx-right-arrow-circle tada' ></i> WRONG ANSWER </span>"
			    }
	   
		}};
		xhttp_.open("GET", url_, true);
	    xhttp_.send();
}

</script>







</body>
<!-- END: Body-->

</html>