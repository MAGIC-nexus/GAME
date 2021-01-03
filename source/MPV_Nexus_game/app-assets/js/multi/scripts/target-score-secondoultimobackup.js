var score_Messagge=0;
var score_Dashboard=0;
var precondition=0;
var final_score=0;

window.addEventListener("load", function () {
	targetScore();
});

function targetScore() {
	var EU_CF_initial_value = 20.3769358104986;
	var EU_security_emissions = {
		food:94.5, energy:70, carbon:(0.8*EU_CF_initial_value)
	}
	localStorage.setItem("EU", JSON.stringify(EU_security_emissions));
	
	
	var EU_CF_initial_value = 20.3769358104986;
	
	var target_food = 94.5;
	var target_energy = 70;
	var target_carbon = (0.8*EU_CF_initial_value);
	
	var target_A_land = 0; var target_B_land = 0; var target_C_land = 0; var target_D_land = 0;
	var target_A_green = 0; var target_B_green = 0; var target_C_green = 0; var target_D_green = 0;
	var target_A_blue = 0; var target_B_blue = 0; var target_C_blue = 0; var target_D_blue = 0;
	
	var EU = JSON.parse(localStorage.getItem("EU"));
	
	var EU_food_security = EU["food"];
	var EU_energy_security = EU["energy"];
	var EU_carbon = EU["carbon"];
	
	//var currents = JSON.parse(localStorage.getItem("currents"));
	/*
	var cur_A_land = currents["current_A_land"]; var cur_B_land = currents["current_B_land"]; 
	var cur_C_land = currents["current_C_land"]; var cur_D_land = currents["current_D_land"];
	
	var cur_A_green = currents["current_A_green"]; var cur_B_green = currents["current_B_green"];
	var cur_C_green = currents["current_C_green"]; var cur_D_green = currents["current_D_green"];
	
	var cur_A_blue = currents["current_A_blue"]; var cur_B_blue = currents["current_B_blue"];
	var cur_C_blue = currents["current_C_blue"]; var cur_D_blue = currents["current_D_blue"];
	*/
	//var score_Dashboard=0;  var final_score=0; var precondition=0;
	
	var DataA = JSON.parse(localStorage.getItem("regionADataOutput"));
	var DataB = JSON.parse(localStorage.getItem("regionBDataOutput"));
	var DataC = JSON.parse(localStorage.getItem("regionCDataOutput"));
	var DataD = JSON.parse(localStorage.getItem("regionDDataOutput"));
	
	var cur_A_land = DataA["current_A_land"]; var cur_B_land = DataB["current_B_land"]; 
	var cur_C_land = DataC["current_C_land"]; var cur_D_land = DataD["current_D_land"];
	
	var cur_A_green = DataA["current_A_green"]; var cur_B_green = DataB["current_B_green"];
	var cur_C_green = DataC["current_C_green"]; var cur_D_green = DataD["current_D_green"];
	
	var cur_A_blue = DataA["current_A_blue"]; var cur_B_blue = DataB["current_B_blue"];
	var cur_C_blue = DataC["current_C_blue"]; var cur_D_blue = DataD["current_D_blue"];
	
	// I SEGUENTI ELEMENTI VENGONO CREATI/REGISTRATI DENTRO GRAFICI-SOTTO.JS AL FONDO DELLE FUNZIONI AGGIORNASOTTO, POCO PRIMA DI PUBBLICARE A VIDEO IL RISULTATO FINALE DEI GRAFICI SOTTO.
	if(DataA["A_lf_limitOk"]==1 && DataA["A_wfg_limitOk"]==1 && DataA["A_wfb_limitOk"]==1 && DataB["B_lf_limitOk"]==1 && DataB["B_wfg_limitOk"]==1 && DataB["B_wfb_limitOk"]==1 && DataC["C_lf_limitOk"]==1 && DataC["C_wfg_limitOk"]==1 && DataC["C_wfb_limitOk"]==1 && DataD["D_lf_limitOk"]==1 && DataD["D_wfg_limitOk"]==1 && DataD["D_wfb_limitOk"]==1) {
		physical_condition = 1;
		document.getElementById("4thprecondition").innerHTML = "<i><font style='font-weight:400'> Land, Green Water and Blue Water use in all regions below the physical limit</font></i> - <b><font color='green'>Reached</font></b><hr>";
	}
	else {
		physical_condition = 0;
		var text = "";
		if(DataA["A_lf_limitOk"]==0)
			text=text+" Region A Land";
		else if(DataA["A_wfg_limitOk"]==0)
			text=text+" Region A Green Water";
		else if(DataA["A_wfb_limitOk"]==0)
			text=text+" Region A Blue Water";
		else if(DataB["B_lf_limitOk"]==0)
			text=text+" Region B Land";
		else if(DataB["B_wfg_limitOk"]==0)
			text=text+" Region B Green Water";
		else if(DataB["B_wfb_limitOk"]==0)
			text=text+" Region B Blue Water";
		else if(DataC["C_lf_limitOk"]==0)
			text=text+" Region C Land";
		else if(DataC["C_wfg_limitOk"]==0)
			text=text+" Region C Green Water";
		else if(DataC["C_wfb_limitOk"]==0)
			text=text+" Region C Blue Water";
		else if(DataD["D_lf_limitOk"]==0)
			text=text+" Region D Land";
		else if(DataD["D_wfg_limitOk"]==0)
			text=text+" Region D Green Water";
		else if(DataD["D_wfb_limitOk"]==0)
			text=text+" Region D Blue Water";
		else
			text="";
		
		document.getElementById("4thprecondition").innerHTML = "<i><font style='font-weight:400'> Land, Green Water and Blue Water use in all regions below the physical limit</font></i>- <b><font color='red'>Not Reached</font></b> - <hr>Region production above physical limit:"+text+"<hr>";
	}
		
	var A_land_score=0; var B_land_score=0; var C_land_score=0; var D_land_score=0;
	var A_green_score=0; var B_green_score=0; var C_green_score=0; var D_green_score=0;
	var A_blue_score=0; var B_blue_score=0; var C_blue_score=0; var D_blue_score=0;
	
	precondition = ((EU_food_security>target_food) && (EU_energy_security>target_energy) && (EU_carbon<target_carbon) && (physical_condition==1)) ? 1:0;
	if(precondition == 1) {
		document.getElementById("presidentMessages").innerHTML='<div class="row" style="margin-let:3%;">
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
                                            </div></div></div>';
	}
	else {
		document.getElementById("presidentMessages").innerHTML='';
	}
	
	////console.log("EU_food_security: "+EU_food_security+" target_food: "+target_food);
	////console.log("EU_energy_security: "+EU_energy_security+" target_energy: "+target_energy);
	////console.log("EU_carbon: "+EU_carbon+" target_carbon: "+target_carbon);
	////console.log("precondition: "+precondition);
	
	A_land_score = (cur_A_land<target_A_land) ? 1:0; B_land_score = (cur_B_land<target_B_land) ? 1:0;
	C_land_score = (cur_C_land<target_C_land) ? 1:0; D_land_score = (cur_D_land<target_D_land) ? 1:0;
	////console.log("cur_A_land: "+cur_A_land+" target_A_land: "+target_A_land+" A_land_score: "+A_land_score);
	////console.log("cur_B_land: "+cur_B_land+" target_B_land: "+target_B_land+" B_land_score: "+B_land_score);
	////console.log("cur_C_land: "+cur_C_land+" target_C_land: "+target_C_land+" C_land_score: "+C_land_score);
	////console.log("cur_D_land: "+cur_D_land+" target_D_land: "+target_D_land+" D_land_score: "+D_land_score);
	
	A_green_score = (cur_A_green<target_A_green) ? 1:0; B_green_score = (cur_B_green<target_B_green) ? 1:0;
	C_green_score = (cur_C_green<target_C_green) ? 1:0; D_green_score = (cur_D_green<target_D_green) ? 1:0;
	////console.log("cur_A_green: "+cur_A_green+" target_A_green: "+target_A_green+" A_green_score: "+A_green_score);
	////console.log("cur_B_green: "+cur_B_green+" target_B_green: "+target_B_green+" B_green_score: "+B_green_score);
	////console.log("cur_C_green: "+cur_C_green+" target_C_green: "+target_C_green+" C_green_score: "+C_green_score);
	////console.log("cur_D_green: "+cur_D_green+" target_D_green: "+target_D_green+" D_green_score: "+D_green_score);
	
	A_blue_score = (cur_A_blue<target_A_blue) ? 1:0; B_blue_score = (cur_B_blue<target_B_blue) ? 1:0;
	C_blue_score = (cur_C_blue<target_C_blue) ? 1:0; D_blue_score = (cur_D_blue<target_D_blue) ? 1:0;
	////console.log("cur_A_blue: "+cur_A_blue+" target_A_blue: "+target_A_blue+" A_blue_score: "+A_blue_score);
	////console.log("cur_B_blue: "+cur_B_blue+" target_B_blue: "+target_B_blue+" B_blue_score: "+B_blue_score);
	////console.log("cur_C_blue: "+cur_C_blue+" target_C_blue: "+target_C_blue+" C_blue_score: "+C_blue_score);
	////console.log("cur_D_blue: "+cur_D_blue+" target_D_blue: "+target_D_blue+" D_blue_score: "+D_blue_score);
	
	score_Dashboard = A_land_score+B_land_score+C_land_score+D_land_score+A_green_score+B_green_score+C_green_score+D_green_score+A_blue_score+B_blue_score+C_blue_score+D_blue_score;
	////console.log("score_Dashboard: "+score_Dashboard+" score_Messagge: "+score_Messagge);
	
	final_score=(score_Dashboard*precondition)*score_Messagge;
	////console.log("final_score: "+final_score);
	document.getElementById("total_score").innerHTML="TOTAL SCORE: "+final_score;

	if (EU_food_security>target_food) {
		document.getElementById("fooden").innerHTML ="<img src='icon/fs.png' style='width:30px; margin-right:1em;'><font style='font-weight:400;'> (fraction of EU  food supply met by agricolture in the EU)</font></i> - <b>"+ Math.round(EU["food"])+"% - <font color='green'><b>Reached</font></b><i><hr>";
	} else {
		document.getElementById("fooden").innerHTML ="<img src='icon/fs.png' style='width:30px; margin-right:1em;'><i><font style='font-weight:400'> (fraction of EU  food supply met by agricolture in the EU)</font></i> - <b>"+ Math.round(EU["food"])+"% - <font color='red'><b>Not Reached</font></b><hr>";
	}
	if (EU_energy_security>target_energy) {
		document.getElementById("energyen").innerHTML ="<img src='icon/es.png' style='width:30px; margin-right:1em;'><i><font style='font-weight:400'> (fraction of EU energy supply met by energy generation in the EU)</font></i> - <b>"+Math.round(EU["energy"])+"% - <font color='green'><b>Reached</font></b><hr>";
	} else {
		document.getElementById("energyen").innerHTML ="<img src='icon/es.png' style='width:30px; margin-right:1em;'><i><font style='font-weight:400'> (fraction of EU energy supply met by energy generation in the EU)</font></i> - <b>"+Math.round(EU["energy"])+"% - <font color='red'><b>Not Reached</font></b><hr>";
	}
	if (EU_carbon<=target_carbon) {
		document.getElementById("carbon").innerHTML ="<img src='icon/cb.png' style='width:30px; margin-right:1em;'><i><font style='font-weight:400'> (EU-average carbon footprint of production)</font></i> - <b>"+Math.round(EU["carbon"])+" kg/cap/day <font color='green'><b>Reached</font></b><hr>";
	} else {
		document.getElementById("carbon").innerHTML ="<img src='icon/cb.png' style='width:30px; margin-right:1em;'><i><font style='font-weight:400'> (EU-average carbon footprint of production)</font></i> - <b>"+Math.round(EU["carbon"])+" kg/cap/day <font color='red'><b>Not Reached</font></b><hr>";
	}

	localStorage.setItem("preconditions",precondition);
	console.log("Valore di precondizione: "+precondition);
	//if(precondition>0) {
		document.getElementById("cur_land_A").innerHTML = A_land_score;
		document.getElementById("penalityA").innerHTML = localStorage.getItem("penalityA");
		document.getElementById("cur_land_B").innerHTML = B_land_score;
		document.getElementById("penalityB").innerHTML = localStorage.getItem("penalityB");
		document.getElementById("cur_land_C").innerHTML = C_land_score;
		document.getElementById("penalityC").innerHTML = localStorage.getItem("penalityC");
		document.getElementById("cur_land_D").innerHTML = D_land_score;
		document.getElementById("penalityD").innerHTML = localStorage.getItem("penalityD");
		
		document.getElementById("cur_green_A").innerHTML = A_green_score;
		document.getElementById("cur_green_B").innerHTML = B_green_score;
		document.getElementById("cur_green_C").innerHTML = C_green_score;
		document.getElementById("cur_green_D").innerHTML = D_green_score;
		
		document.getElementById("cur_blue_A").innerHTML = A_blue_score;
		document.getElementById("cur_blue_B").innerHTML = B_blue_score;
		document.getElementById("cur_blue_C").innerHTML = C_blue_score;
		document.getElementById("cur_blue_D").innerHTML = D_blue_score;		
		
		document.getElementById("tabscore").classList.remove("invisible");
		document.getElementById("submit_score").setAttribute("data-toggle","modal");
		//--- AGGIORNO LA HOMEPAGE
		var Version = localStorage.getItem("GameVersion");
		var checkregiong = document.querySelector('input[name="region"]:checked'); 
		//if(Version=="SP2") {
			//document.getElementById("total_score").innerHTML = score_Dashboard;
			document.getElementById("dashboard_score").innerHTML = score_Dashboard;
		//	if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionA')) { 
				document.getElementById("current_dash").innerHTML = "On Dashboard A current Land score is: "+A_land_score+"<br>On Dashboard A current Green score is: "+A_green_score+"<br>On Dashboard A current Blue score is: "+A_blue_score;
			//}
		//	else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionB')) { 
				document.getElementById("current_dash").innerHTML += "<br>On Dashboard B current Land score is: "+B_land_score+"<br>On Dashboard B current Green score is: "+B_green_score+"<br>On Dashboard B current Blue score is: "+B_blue_score;
			//}
		//	else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionC')) { 
				document.getElementById("current_dash").innerHTML += "<br>On Dashboard C current Land score is: "+C_land_score+"<br>On Dashboard C current Green score is: "+C_green_score+"<br>On Dashboard C current Blue score is: "+C_blue_score;
			//}
		//	else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionD')) { 
				document.getElementById("current_dash").innerHTML += "<br>On Dashboard D current Land score is: "+D_land_score+"<br>On Dashboard D current Green score is: "+D_green_score+"<br>On Dashboard D current Blue score is: "+D_blue_score;
			//} 
			//else {}	
		//} 
		//else {}
		/*if(Version=="SP1"){
			document.getElementById("total_score").innerHTML = score_Dashboard;	

			if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionA')) { 
				document.getElementById("current_dash").innerHTML = "On Dashboard A current Land score is: "+A_land_score+"<br>On Dashboard A current Green score is: "+A_green_score+"<br>On Dashboard A current Blue score is: "+A_blue_score;
			}
			else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionB')) { 
				document.getElementById("current_dash").innerHTML = "On Dashboard B current Land score is: "+B_land_score+"<br>On Dashboard B current Green score is: "+B_green_score+"<br>On Dashboard B current Blue score is: "+B_blue_score;
			}
			else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionC')) { 
				document.getElementById("current_dash").innerHTML = "On Dashboard C current Land score is: "+C_land_score+"<br>On Dashboard C current Green score is: "+C_green_score+"<br>On Dashboard C current Blue score is: "+C_blue_score;
			}
			else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionD')) { 
				document.getElementById("current_dash").innerHTML = "On Dashboard D current Land score is: "+D_land_score+"<br>On Dashboard D current Green score is: "+D_green_score+"<br>On Dashboard D current Blue score is: "+D_blue_score;
			} else {
				document.getElementById("current_dash").innerHTML = "No Precondition Reached";
			} 
		}*/
		//-- FINE AGGIORNAMENTO
	//} 
	//else {
		document.getElementById("current_dash").innerHTML = "No Precondition Reached. Continue Your Game.";
		document.getElementById("tabscore").classList.add("invisible");
		document.getElementById("submit_score").setAttribute("data-toggle","modal");
	//}
}
var myVar = setInterval(targetScore, 3000);

function Multiplier() {
	score_Messagge=0;
	var boxes=document.getElementsByName("ckx");
	for(var i=0;i<boxes.length;i++){
  		if(boxes[i].checked && boxes[i].value=="true") {
    		score_Messagge++;
  		}
	}	
	//alert("Valore di score_Messagge: "+score_Messagge);
	final_score=(score_Dashboard*precondition)*score_Messagge;
	document.getElementById("total_score").innerHTML=final_score;
	//document.getElementById("total_results").innerHTML="TOTAL SCORE: "+final_score;
}