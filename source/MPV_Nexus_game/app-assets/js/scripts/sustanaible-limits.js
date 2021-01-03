window.addEventListener("load", function () {
	Sustanaible_Limit();
});

var enablePopup = 0;
var counter=0;

function Sustanaible_Limit() {
	
	// L'oggetto currents si trova al fondo del file loginGlobalVariables.js ed usa i valori registrati in questo script
	// per calcolare i punteggi di target-score.js
	var currents = JSON.parse(localStorage.getItem("currents"));
	
	var checkregion = document.querySelector('input[name="region"]:checked'); 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
		////console.log("------------------- REGION A -------------------------");
		
		var Food_Internal_LF = 0; var Energy_Internal_LF = 0; var Internal_LF = 0;
		var Food_Internal_WFgreen = 0; var Energy_Internal_WFgreen = 0; var Internal_WFgreen = 0;	
		var Food_Internal_WFblue = 0; var Energy_Internal_WFblue = 0; var Internal_WFblue = 0;
		
		// ---------------- LF -----------------------------------------
		Internal_LF = document.getElementById("GT2_sotto").innerHTML;
		// RelationA Q22
		start_limit_LF = 10.38;												// RelationA Q23
		result_limit_LF = (Internal_LF-start_limit_LF)/start_limit_LF;		// Limit = (Q22-Q23)/Q23
		result_limit_LF = result_limit_LF*100;								// Limit*100	RelationA R23
		
		currents["current_A_land"] = result_limit_LF;
		////console.log("current_A_land: "+currents["current_A_land"]);
		
		////console.log("Internal_LF: "+Internal_LF+" start_limit_LF: "+start_limit_LF+" result_limit_LF: "+result_limit_LF);
		
		// ------------------WFgreen------------------------------------------------------
		Internal_WFgreen = document.getElementById("GT3_sotto").innerHTML;
		// RelationA S22
		start_limit_WFgreen = (0.4*(11042/1.25));											// RelationA S23
		result_limit_WFgreen = (Internal_WFgreen-start_limit_WFgreen)/start_limit_WFgreen;	// Limit = (S22-S23)/S23
		result_limit_WFgreen = result_limit_WFgreen*100;									// Limit*100	RelationA T23
		
		currents["current_A_green"] = result_limit_WFgreen;
		////console.log("current_A_green: "+currents["current_A_green"]);
		
		////console.log("Internal_WFgreen: "+Internal_WFgreen+" start_limit_WFgreen: "+start_limit_WFgreen+" result_limit_WFgreen: "+result_limit_WFgreen);

		// ------------------WFblue-------------------------------------------------------
		Internal_WFblue = document.getElementById("GT4_sotto").innerHTML;
		// RelationA U22
		start_limit_WFblue = 1550;															// RelationA U23
		result_limit_WFblue = (Internal_WFblue-start_limit_WFblue)/start_limit_WFblue;		// Limit = (U22-U23)/U23
		result_limit_WFblue = result_limit_WFblue*100;										// Limit*100	RelationA V23
		
		currents["current_A_blue"] = result_limit_WFblue;
		////console.log("current_A_blue: "+currents["current_A_blue"]);
		////console.log("Internal_WFblue: "+Internal_WFblue+" start_limit_WFblue: "+start_limit_WFblue+" result_limit_WFblue: "+result_limit_WFblue);
	}

	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
		////console.log("------------------- REGION B -------------------------");
		var Food_Internal_LF = 0; var Energy_Internal_LF = 0; var Internal_LF = 0;
		var Food_Internal_WFgreen = 0; var Energy_Internal_WFgreen = 0; var Internal_WFgreen = 0;	
		var Food_Internal_WFblue = 0; var Energy_Internal_WFblue = 0; var Internal_WFblue = 0;
		
		// ---------------- LF -----------------------------------------
		Internal_LF = document.getElementById("GT2_sotto").innerHTML;
		Internal_LF = Number(Internal_LF);
		Internal_LF = Math.round(Internal_LF);
		Internal_LF = Number(Internal_LF);
		start_limit_LF = 20.86;
		result_limit_LF = (Internal_LF-start_limit_LF)/start_limit_LF;
		result_limit_LF = result_limit_LF*100;
		
		currents["current_B_land"] = result_limit_LF;
		////console.log("current_B_land: "+currents["current_B_land"]);
		
		////console.log("Internal_LF: "+Internal_LF+" start_limit_LF: "+start_limit_LF+" result_limit_LF: "+result_limit_LF);
		
		// ----------------- WFgreen -------------------------------------------
		Internal_WFgreen = document.getElementById("GT3_sotto").innerHTML;
		Internal_WFgreen = Number(Internal_WFgreen);
		Internal_WFgreen = Math.round(Internal_WFgreen);	
		Internal_WFgreen = Number(Internal_WFgreen);
		start_limit_WFgreen = (0.4*(32746));
		result_limit_WFgreen = (Internal_WFgreen-start_limit_WFgreen)/start_limit_WFgreen;
		result_limit_WFgreen = result_limit_WFgreen*100;

		currents["current_B_green"] = result_limit_WFgreen;
		////console.log("current_B_green: "+currents["current_B_green"]);
		////console.log("Internal_WFgreen: "+Internal_WFgreen+" start_limit_WFgreen: "+start_limit_WFgreen+" result_limit_WFgreen: "+result_limit_WFgreen);

		// ------------------WFblue-------------------------------------------------------
		Internal_WFblue = document.getElementById("GT4_sotto").innerHTML;
		Internal_WFblue = Number(Internal_WFblue);
		Internal_WFblue = Math.round(Internal_WFblue);
		Internal_WFblue = Number(Internal_WFblue);
		start_limit_WFblue = (0.3*(25498/2));
		result_limit_WFblue = (Internal_WFblue-start_limit_WFblue)/start_limit_WFblue;
		result_limit_WFblue = result_limit_WFblue*100;
		
		currents["current_B_blue"] = result_limit_WFblue;
		////console.log("current_B_blue: "+currents["current_B_blue"]);
		////console.log("Internal_WFblue: "+Internal_WFblue+" start_limit_WFblue: "+start_limit_WFblue+" result_limit_WFblue: "+result_limit_WFblue);	
	}

	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
		////console.log("------------------- REGION C -------------------------");
		var Food_Internal_LF = 0; var Energy_Internal_LF = 0; var Internal_LF = 0;
		var Food_Internal_WFgreen = 0; var Energy_Internal_WFgreen = 0; var Internal_WFgreen = 0;	
		var Food_Internal_WFblue = 0; var Energy_Internal_WFblue = 0; var Internal_WFblue = 0;
		
		// ---------------- LF -----------------------------------------
		Internal_LF = document.getElementById("GT2_sotto").innerHTML;
		Internal_LF = Number(Internal_LF);		
		Internal_LF = Math.round(Internal_LF);
		Internal_LF = Number(Internal_LF);
		start_limit_LF = (6.58*1.25);
		result_limit_LF = (Internal_LF-start_limit_LF)/start_limit_LF;
		result_limit_LF = result_limit_LF*100;
		
		currents["current_C_land"] = result_limit_LF;
		////console.log("current_C_land: "+currents["current_C_land"]);
		
		////console.log("Internal_LF: "+Internal_LF+" start_limit_LF: "+start_limit_LF+" result_limit_LF: "+result_limit_LF);
		
		// ----------------- WFgreen -------------------------------------------
		Internal_WFgreen = document.getElementById("GT3_sotto").innerHTML;
		Internal_WFgreen = Number(Internal_WFgreen);	
		Internal_WFgreen = Math.round(Internal_WFgreen);		
		Internal_WFgreen = Number(Internal_WFgreen);
		start_limit_WFgreen = (0.4*(5923));
		result_limit_WFgreen = (Internal_WFgreen-start_limit_WFgreen)/start_limit_WFgreen;
		result_limit_WFgreen = result_limit_WFgreen*100;

		currents["current_C_green"] = result_limit_WFgreen;
		////console.log("current_C_green: "+currents["current_C_green"]);
	
		////console.log("Internal_WFgreen: "+Internal_WFgreen+" start_limit_WFgreen: "+start_limit_WFgreen+" result_limit_WFgreen: "+result_limit_WFgreen);

		// ------------------WFblue-------------------------------------------------------
		Internal_WFblue = document.getElementById("GT4_sotto").innerHTML;
		Internal_WFblue = Number(Internal_WFblue);
		Internal_WFblue = Math.round(Internal_WFblue);
		Internal_WFblue = Number(Internal_WFblue);
		start_limit_WFblue = (0.3*(4626/5.3));
		result_limit_WFblue = (Internal_WFblue-start_limit_WFblue)/start_limit_WFblue;
		result_limit_WFblue = result_limit_WFblue*100;	
	
		currents["current_C_blue"] = result_limit_WFblue;
		////console.log("current_C_blue: "+currents["current_C_blue"]);
		////console.log("Internal_WFblue: "+Internal_WFblue+" start_limit_WFblue: "+start_limit_WFblue+" result_limit_WFblue: "+result_limit_WFblue);
	}

	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
		////console.log("------------------- REGION D -------------------------");
		var Food_Internal_LF = 0; var Energy_Internal_LF = 0; var Internal_LF = 0;
		var Food_Internal_WFgreen = 0; var Energy_Internal_WFgreen = 0; var Internal_WFgreen = 0;	
		var Food_Internal_WFblue = 0; var Energy_Internal_WFblue = 0; var Internal_WFblue = 0;
		
		// ---------------- LF -----------------------------------------
		Internal_LF = document.getElementById("GT2_sotto").innerHTML;
		Internal_LF = Number(Internal_LF);
		Internal_LF = Math.round(Internal_LF);
		Internal_LF = Number(Internal_LF);
		start_limit_LF = (14.31*1.25);
		result_limit_LF = (Internal_LF-start_limit_LF)/start_limit_LF;
		result_limit_LF = result_limit_LF*100;
		
		currents["current_D_land"] = result_limit_LF;
		////console.log("current_D_land: "+currents["current_D_land"]);
		////console.log("Internal_LF: "+Internal_LF+" start_limit_LF: "+start_limit_LF+" result_limit_LF: "+result_limit_LF);
		
		// ----------------- WFgreen -------------------------------------------
		Internal_WFgreen = document.getElementById("GT3_sotto").innerHTML;
		Internal_WFgreen = Number(Internal_WFgreen);
		Internal_WFgreen = Math.round(Internal_WFgreen);
		Internal_WFgreen = Number(Internal_WFgreen);
		start_limit_WFgreen = (0.4*(12947));
		result_limit_WFgreen = (Internal_WFgreen-start_limit_WFgreen)/start_limit_WFgreen;
		result_limit_WFgreen = result_limit_WFgreen*100;

		currents["current_D_green"] = result_limit_WFgreen;
		////console.log("current_D_green: "+currents["current_D_green"]);
		////console.log("Internal_WFgreen: "+Internal_WFgreen+" start_limit_WFgreen: "+start_limit_WFgreen+" result_limit_WFgreen: "+result_limit_WFgreen);

		// ------------------WFblue-------------------------------------------------------
		Internal_WFblue = document.getElementById("GT4_sotto").innerHTML;
		Internal_WFblue = Number(Internal_WFblue);
		Internal_WFblue = Math.round(Internal_WFblue);
		Internal_WFblue = Number(Internal_WFblue);
		start_limit_WFblue = (0.3*(9171/8));
		result_limit_WFblue = (Internal_WFblue-start_limit_WFblue)/start_limit_WFblue;
		result_limit_WFblue = result_limit_WFblue*100;	
	
		currents["current_D_blue"] = result_limit_WFblue;
		////console.log("current_D_blue: "+currents["current_D_blue"]);
		////console.log("Internal_WFblue: "+Internal_WFblue+" start_limit_WFblue: "+start_limit_WFblue+" result_limit_WFblue: "+result_limit_WFblue);
	}
	else {}
	////console.log("valore di currents: "+currents);
	localStorage.setItem("currents", JSON.stringify(currents));
	var landlimit = parseFloat(result_limit_LF).toFixed(1);
	landlimit = Number(landlimit);
	
	var greenlimit = parseFloat(result_limit_WFgreen).toFixed(1);
	greenlimit = Number(greenlimit);
	
	var bluelimit = parseFloat(result_limit_WFblue).toFixed(1);
	bluelimit = Number(bluelimit);
	
	if((landlimit<=0)) {
		$("#land_tooltip").tooltip({title: "You are actually playing very well! Mantain this value <0."}) ;
		document.getElementById("Land_limits").innerHTML = "<font color='#B1FB17'>"+result_limit_LF.toFixed(1)+"%</font>";
	} 
	else {
		$("#land_tooltip").tooltip({title: "WARNING! This value must be <0 to reach the precondition of the game."}) ;
		document.getElementById("Land_limits").innerHTML = "<font color='red'>"+result_limit_LF.toFixed(1)+"%</font>";
	}	
	if((greenlimit<=0)) {
		$("#green_tooltip").tooltip({title: "You are actually playing very well! Mantain this value <0."}) ;
		document.getElementById("GW_limits").innerHTML = "<font color='#B1FB17'>"+result_limit_WFgreen.toFixed(1)+"%</font>";
	} 
	else {
		$("#green_tooltip").tooltip({title: "WARNING! This value must be <0 to reach the precondition of the game."}) ;
		document.getElementById("GW_limits").innerHTML = "<font color='red'>"+result_limit_WFgreen.toFixed(1)+"%</font>";
	}
	if((bluelimit<=0)) {
		$("#blue_tooltip").tooltip({title: "You are actually playing very well! Mantain this value <0."}) ;
		document.getElementById("BW_limits").innerHTML = "<font color='#B1FB17'>"+result_limit_WFblue.toFixed(1)+"%</font>";		
	} 
	else {
		$("#blue_tooltip").tooltip({title: "WARNING! This value must be <0 to reach the precondition of the game."}) ;
		document.getElementById("BW_limits").innerHTML = "<font color='red'>"+result_limit_WFblue.toFixed(1)+"%</font>";
	}
	
	var Version = localStorage.getItem("GameVersion");
	if(Version == "SP1") {
		//var CF_Sotto = document.getElementById("GT1_sotto").innerHTML;
		var CF_Sopra = document.getElementById("GT1").innerHTML;
		if(counter==0) {
			//if(CF_Sotto<=16 && landlimit<=0 && greenlimit<=0 && bluelimit<=0) {
			if(CF_Sopra<=16 && landlimit<=0 && greenlimit<=0 && bluelimit<=0) {	
				enablePopup=1;
				counter=1;
			}
			else {
				enablePopup=0;
				counter=0;
			}
		}
		else {
			//if(CF_Sotto<=16 && landlimit<=0 && greenlimit<=0 && bluelimit<=0) {
			if(CF_Sopra<=16 && landlimit<=0 && greenlimit<=0 && bluelimit<=0) {	
				enablePopup=0;
				counter=1;
			}
			else {
				enablePopup=0;
				counter=0;
			}
		}
		console.log("counter: "+counter+" enablePopup: "+enablePopup);
		
		if(enablePopup==1) {
			setTimeout(
				function(){
					document.getElementById("modal-text").innerHTML = "Good job!<br>You managed to achieve the targets for carbon, water and land footprint reduction.<hr>Now you can try to:<ul><li>Replay Single Player Level 1 for one of the other EU regions and try to achieve the objective with a more desirable set of choices that have less impact on society (lower ‘desirability penalty’).</li><br><li>Step it up a notch with Single Player Level 2, taking control over all four EU regions.</li></ul>"; 
					$("#myModal").modal();
				}, 
			1000);
			enablePopup++;
		}
	}
}

var myVar = setInterval(Sustanaible_Limit, 3000);