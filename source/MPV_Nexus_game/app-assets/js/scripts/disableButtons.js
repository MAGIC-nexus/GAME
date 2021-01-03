function disableButtons(whoCall) {
	//alert("Valore del bottone: "+whoCall);
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
	
	if(whoCall == 'A') {
		document.getElementById("planta").disabled=true;
		document.getElementById("meata").disabled=true;
		document.getElementById("diarya").disabled=true;
		document.getElementById("fossila").disabled=true;
		document.getElementById("biofuela").disabled=true;
		document.getElementById("ela").disabled=true;
	}
	else if(whoCall == 'B') {
		document.getElementById("plantb").disabled=true;
		document.getElementById("meatb").disabled=true;
		document.getElementById("diaryb").disabled=true;
		document.getElementById("fossilb").disabled=true;
		document.getElementById("biofuelb").disabled=true;
		document.getElementById("elb").disabled=true;
	}
	else if(whoCall == 'C') {
		document.getElementById("plantc").disabled=true;
		document.getElementById("meatc").disabled=true;
		document.getElementById("diaryc").disabled=true;
		document.getElementById("fossilc").disabled=true;
		document.getElementById("biofuelc").disabled=true;
		document.getElementById("elc").disabled=true;
	}
	else {
		document.getElementById("plantd").disabled=true;
		document.getElementById("meatd").disabled=true;
		document.getElementById("diaryd").disabled=true;
		document.getElementById("fossild").disabled=true;
		document.getElementById("biofueld").disabled=true;
		document.getElementById("eld").disabled=true;
	}
}