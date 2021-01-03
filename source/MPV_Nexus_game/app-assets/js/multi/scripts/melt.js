var pre = localStorage.getItem("preconditions");

function Freeze() {
	if(pre == 3){
	
	document.getElementById("A8_f").disabled = true;
	//----------------------------------------------------------------------------------
	document.getElementById("f_D4").disabled = true;
	document.getElementById("f_D5").disabled = true;
	document.getElementById("f_C6").disabled = true;
	document.getElementById("f_C7").disabled = true;
	document.getElementById("f_C8").disabled = true;
	//----------------------------------------------------------------------------------
	document.getElementById("E30").disabled = true;
	document.getElementById("E31").disabled = true;
	document.getElementById("E32").disabled = true; 
	//----------------------------------------------------------------------------------
	document.getElementById("G14").disabled = true;
	document.getElementById("G15").disabled = true; 	
	document.getElementById("G19").disabled = true;
	//------------------------------------------------------------------------------------
	document.getElementById("em_J21").disabled = true;
	document.getElementById("em_J22").disabled = true;
	document.getElementById("em_J23").disabled = true;
	document.getElementById("em_J24").disabled = true;
	document.getElementById("em_J25").disabled = true;
	document.getElementById("em_J26").disabled = true;
	//-------------------------------------------------------------------------------------
	document.getElementById("e_N5").disabled = true;
	document.getElementById("e_N6").disabled = true;
	document.getElementById("e_N7").disabled = true;
	document.getElementById("e_N8").disabled = true;
	document.getElementById("e_N11").disabled = true;  
	document.getElementById("e_N12").disabled = true;  
	document.getElementById("e_N13").disabled = true;  
	document.getElementById("L30").disabled = true;
	document.getElementById("L31").disabled = true;
	document.getElementById("L32").disabled = true;
	
	// ========================== BOTTONI A
	document.getElementById("planta").disabled=false;
	document.getElementById("meata").disabled=false;
	document.getElementById("diarya").disabled=false;
	document.getElementById("fossila").disabled=false;
	document.getElementById("biofuela").disabled=false;
	document.getElementById("ela").disabled=false;
	// ========================== BOTTONI B
	document.getElementById("plantb").disabled=false;
	document.getElementById("meatb").disabled=false;
	document.getElementById("diaryb").disabled=false;
	document.getElementById("fossilb").disabled=false;
	document.getElementById("biofuelb").disabled=false;
	document.getElementById("elb").disabled=false;
	// ========================== BOTTONI C	
	document.getElementById("plantc").disabled=false;
	document.getElementById("meatc").disabled=false;
	document.getElementById("diaryc").disabled=false;
	document.getElementById("fossilc").disabled=false;
	document.getElementById("biofuelc").disabled=false;
	document.getElementById("elc").disabled=false;
	// ========================== BOTTONI D
	document.getElementById("plantd").disabled=false;
	document.getElementById("meatd").disabled=false;
	document.getElementById("diaryd").disabled=false;
	document.getElementById("fossild").disabled=false;
	document.getElementById("biofueld").disabled=false;
	document.getElementById("eld").disabled=false;
}
	else {
		
	}	
}