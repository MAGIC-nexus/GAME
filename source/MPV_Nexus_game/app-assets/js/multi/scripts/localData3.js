var region = document.querySelector('input[name="region"]:checked').getAttribute('id');

window.addEventListener("load", function () {
	/* Recupero il bottone di default che si trova appena caricata la pagina con tutti i dati */
	var region = document.querySelector('input[name="region"]:checked').getAttribute('id');
	/*
		localSaveData() viene chiamato da solo, la prima volta che viene eseguito il programma
		per registrare tutti i dati della scheda di partenza, legati al bottone di partenza preso sopra.
		In seguito, quando si far� click su una regione, localSaveData() verr� chiamato dal click
		e permetter� di salvare i dati associati alla regione selezionata dal click.
	*/
	localSaveData();
});

function localSaveData() {
	//----------------------------------------------------------------------------------
	var daysp = parseFloat(document.getElementById("A8_f").value); 
	//----------------------------------------------------------------------------------
	var intakeparse = parseFloat(document.getElementById("f_D4").value);
	////console.log("intake: "+intakeparse);
	var wasteparse = parseFloat(document.getElementById("f_D5").value);
	var wastevirgola= wasteparse/100;
	//----------------------------------------------------------------------------------
	var vegparse =parseFloat(document.getElementById("f_C6").value);
	var vegeparse = parseFloat(document.getElementById("f_C7").value);
	var meatparse = parseFloat(document.getElementById("f_C8").value);
	//----------------------------------------------------------------------------------
	var fip = parseFloat(document.getElementById("E30").value);
	var fim = parseFloat(document.getElementById("E31").value);
	var fid = parseFloat(document.getElementById("E32").value);
	//----------------------------------------------------------------------------------
	var Gap_Yeld_parse = parseFloat(document.getElementById("G14").value);
	var Mulching_parse = parseFloat(document.getElementById("G15").value); 	
	//	//console.log("MULCHING PARSE: "+Mulching_parse);
	var Full_Deficit_parse = parseFloat(document.getElementById("G19").value);
	//----------------------------------------------------------------------------------
	var days = parseFloat(document.getElementById("A8_f").value);
	//----------------------------------------------------------------------------------
	var totalone = vegparse+vegeparse+meatparse;
	//------------------------------------------------------------------------------------
	var windp = parseFloat(document.getElementById("em_J21").value);
	var solarp = parseFloat(document.getElementById("em_J22").value);
	var hydrop = parseFloat(document.getElementById("em_J23").value);
	var biofuelp = parseFloat(document.getElementById("em_J24").value);
	var nuclearp = parseFloat(document.getElementById("em_J25").value);
	var fuelp = parseFloat(document.getElementById("em_J26").value);
	//-------------------------------------------------------------------------------------
	var red_ind_parse = parseFloat(document.getElementById("e_N5").value);
	var red_tr_parse = parseFloat(document.getElementById("e_N6").value);
	var red_ser_parse =parseFloat(document.getElementById("e_N7").value);
	var red_house = parseFloat(document.getElementById("e_N8").value);
	var el_tr_parse = parseFloat(document.getElementById("e_N11").value);  
	var fuel_house_parse = parseFloat(document.getElementById("e_N12").value);  
	var bio_fr_parse = parseFloat(document.getElementById("e_N13").value);  
	var fossilf_parse = parseFloat(document.getElementById("L30").value);
	var biofuels_parse = parseFloat(document.getElementById("L31").value);
	var elec_parse = parseFloat(document.getElementById("L32").value);
	//----------------------------------------------------------------------------------------
	var measure = document.getElementById("Measure").value;
	
	// LE FUNZIONI PER SALVARE E CARICARE IL VALORE DEI BOTTONI FOOD IMPORT ED ENERGY IMPORT, SI TROVANO ALLA FINE DI QUESTO FILE
	// DALLA RIGA 325 IN AVANTI
	var radioPlant = SavePlantValue();
	var radioMeat = SaveMeatValue();
	var radioDiary = SaveDiaryValue();
	var radioFossil = SaveFossilValue();
	var radioBio = SaveBioValue();
	var radioElec = SaveElecValue();

	var DataInput = {
		daysp:daysp, intakeparse:intakeparse, wasteparse:wasteparse, wastevirgola:wastevirgola, vegparse:vegparse, vegeparse:vegeparse, 
		meatparse:meatparse, fip:fip, fim:fim, fid:fid, Gap_Yeld_parse:Gap_Yeld_parse, Mulching_parse:Mulching_parse, Full_Deficit_parse: Full_Deficit_parse, 
		windp:windp, solarp:solarp, hydrop:hydrop, biofuelp:biofuelp, nuclearp:nuclearp, fuelp:fuelp, red_ind_parse:red_ind_parse, red_tr_parse:red_tr_parse,
		red_ser_parse:red_ser_parse, red_house:red_house, el_tr_parse:el_tr_parse, fuel_house_parse:fuel_house_parse, bio_fr_parse:bio_fr_parse,
		fossilf_parse:fossilf_parse, biofuels_parse:biofuels_parse, elec_parse:elec_parse, measure:measure, radioPlant:radioPlant, radioMeat:radioMeat,
		radioDiary:radioDiary, radioFossil:radioFossil, radioBio:radioBio, radioElec:radioElec
	};
	localStorage.setItem(region+"DataInput", JSON.stringify(DataInput));
	//alert("Foglio "+region+"Input: "+localStorage.getItem(region+"DataInput"));
	//var checkRadioRegion = document.querySelector('input[name="region"]:checked');
	region = document.querySelector('input[name="region"]:checked').getAttribute('id');
}

function localLoadData() {
	//alert("Sono dentro Load Data");
	var DataInput={};
	var DataOutput={};
	var region = document.querySelector('input[name="region"]:checked');
	regionname = region.getAttribute('id');
	regionnamestring = String(regionname);
	if (regionnamestring=="regionA"){
	document.getElementById("bID").innerHTML = '<b style="color:white;">REGION A</b>';	
	} else if (regionnamestring == "regionB") {
		document.getElementById("bID").innerHTML = '<b style="color:white;">REGION B</b>';	
	}
	else if (regionnamestring == "regionC") {
		document.getElementById("bID").innerHTML = '<b style="color:white;">REGION C</b>';	
	}
	else if (regionnamestring == "regionD") {
		document.getElementById("bID").innerHTML = '<b style="color:white;">REGION D</b>';	
	} else {}	//alert("regionname: "+regionname);
	DataInput = localStorage.getItem(regionname+'DataInput');
	//alert(DataInput); 
	if(DataInput != null) {
		DataInput = JSON.parse(DataInput);
		//alert(DataInput);
		//----------------------------------------------------------------------------------
		document.getElementById("A8_f").value = DataInput['daysp'];
		//----------------------------------------------------------------------------------
		document.getElementById("f_D4").value = DataInput['intakeparse'];
		document.getElementById("f_D5").value = DataInput['wasteparse'];
		document.getElementById("f_C6").value = DataInput['vegparse'];
		document.getElementById("f_C7").value = DataInput['vegeparse'];
		document.getElementById("f_C8").value = DataInput['meatparse'];
		//----------------------------------------------------------------------------------
		document.getElementById("E30").value = DataInput['fip'];
		document.getElementById("E31").value = DataInput['fim'];
		document.getElementById("E32").value = DataInput['fid']; 
		//----------------------------------------------------------------------------------
		document.getElementById("G14").value = DataInput['Gap_Yeld_parse'];
		document.getElementById("G15").value = DataInput['Mulching_parse']; 	
		document.getElementById("G19").value = DataInput['Full_Deficit_parse'];
		//------------------------------------------------------------------------------------
		document.getElementById("em_J21").value = DataInput['windp'];
		document.getElementById("em_J22").value = DataInput['solarp'];
		document.getElementById("em_J23").value = DataInput['hydrop'];
		document.getElementById("em_J24").value = DataInput['biofuelp'];
		document.getElementById("em_J25").value = DataInput['nuclearp'];
		document.getElementById("em_J26").value = DataInput['fuelp'];
		//-------------------------------------------------------------------------------------
		document.getElementById("e_N5").value = DataInput['red_ind_parse'];
		document.getElementById("e_N6").value = DataInput['red_tr_parse'];
		document.getElementById("e_N7").value = DataInput['red_ser_parse'];
		document.getElementById("e_N8").value = DataInput['red_house'];
		document.getElementById("e_N11").value = DataInput['el_tr_parse'];  
		document.getElementById("e_N12").value = DataInput['fuel_house_parse'];  
		document.getElementById("e_N13").value = DataInput['bio_fr_parse'];  
		document.getElementById("L30").value = DataInput['fossilf_parse'];
		document.getElementById("L31").value = DataInput['biofuels_parse'];
		document.getElementById("L32").value = DataInput['elec_parse'];
		document.getElementById("Measure").value = DataInput['measure'];
		//----------------------------------------------------------------------------------------
		//alert("Region: "+regionname+" DataInput Plant: "+DataInput["radioPlant"]);
		LoadPlantValue(DataInput["radioPlant"]);
		LoadMeatValue(DataInput["radioMeat"]);
		LoadDiaryValue(DataInput["radioDiary"]);
		LoadFossilValue(DataInput["radioFossil"]);
		LoadBioValue(DataInput["radioBio"]);
		LoadElecValue(DataInput["radioElec"]);
	}
	else {
		var checkregion = document.querySelector('input[name="region"]:checked'); 
		if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
			document.getElementById("A8_f").value = '7';
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = '2790';
			document.getElementById("f_D5").value = '20';
			document.getElementById("f_C6").value = '0';
			document.getElementById("f_C7").value = '6';
			document.getElementById("f_C8").value = '94';
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = '0';
			document.getElementById("E31").value = '0';
			document.getElementById("E32").value = '0'; 
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = '0';
			document.getElementById("G15").value = '0'; 	
			document.getElementById("G19").value = '0';
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = '12';
			document.getElementById("em_J22").value = '3';
			document.getElementById("em_J23").value = '18';
			document.getElementById("em_J24").value = '3';
			document.getElementById("em_J25").value = '4';
			document.getElementById("em_J26").value = '60';
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = '0';
			document.getElementById("e_N6").value = '0';
			document.getElementById("e_N7").value = '0';
			document.getElementById("e_N8").value = '0';
			document.getElementById("e_N11").value = '2';  
			document.getElementById("e_N12").value = '0';  
			document.getElementById("e_N13").value = '26';  
			document.getElementById("L30").value = '74';
			document.getElementById("L31").value = '0';
			document.getElementById("L32").value = '0';
			document.getElementById("Measure").value = 1;
			//----------------------------------------------------------------------------------
			LoadPlantValue("W");
			LoadMeatValue("W");
			LoadDiaryValue("W");
			LoadFossilValue("W");
			LoadBioValue("W");
			LoadElecValue("W");
		} 
		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
			
			document.getElementById("A8_f").value = '7';
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = '2660';
			document.getElementById("f_D5").value = '20';
			document.getElementById("f_C6").value = '0';
			document.getElementById("f_C7").value = '6';
			document.getElementById("f_C8").value = '94';
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = '0';
			document.getElementById("E31").value = '17';
			document.getElementById("E32").value = '0'; 
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = '0';
			document.getElementById("G15").value = '0'; 	
			document.getElementById("G19").value = '0';
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = '8';
			document.getElementById("em_J22").value = '1';
			document.getElementById("em_J23").value = '21';
			document.getElementById("em_J24").value = '8';
			document.getElementById("em_J25").value = '34';
			document.getElementById("em_J26").value = '28';
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = '0';
			document.getElementById("e_N6").value = '0';
			document.getElementById("e_N7").value = '0';
			document.getElementById("e_N8").value = '0';
			document.getElementById("e_N11").value = '2';  
			document.getElementById("e_N12").value = '0';  
			document.getElementById("e_N13").value = '41';  
			document.getElementById("L30").value = '81';
			document.getElementById("L31").value = '0';
			document.getElementById("L32").value = '0';
			document.getElementById("Measure").value = 1;
			//----------------------------------------------------------------------------------
			LoadPlantValue("W");
			LoadMeatValue("W");
			LoadDiaryValue("W");
			LoadFossilValue("W");
			LoadBioValue("W");
			LoadElecValue("W");
		}

		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
			
			document.getElementById("A8_f").value = '7';
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = '2920';
			document.getElementById("f_D5").value = '20';
			document.getElementById("f_C6").value = '0';
			document.getElementById("f_C7").value = '6';
			document.getElementById("f_C8").value = '94';
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = '17';
			document.getElementById("E31").value = '11';
			document.getElementById("E32").value = '0'; 
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = '0';
			document.getElementById("G15").value = '0'; 	
			document.getElementById("G19").value = '0';
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = '12';
			document.getElementById("em_J22").value = '6';
			document.getElementById("em_J23").value = '6';
			document.getElementById("em_J24").value = '7';
			document.getElementById("em_J25").value = '14';
			document.getElementById("em_J26").value = '55';
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = '0';
			document.getElementById("e_N6").value = '0';
			document.getElementById("e_N7").value = '0';
			document.getElementById("e_N8").value = '0';
			document.getElementById("e_N11").value = '5';  
			document.getElementById("e_N12").value = '0';  
			document.getElementById("e_N13").value = '13';  
			document.getElementById("L30").value = '74';
			document.getElementById("L31").value = '10';
			document.getElementById("L32").value = '0';
			document.getElementById("Measure").value = 1;
			//----------------------------------------------------------------------------------
			LoadPlantValue("W");
			LoadMeatValue("W");
			LoadDiaryValue("W");
			LoadFossilValue("W");
			LoadBioValue("W");
			LoadElecValue("W");
		}

		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
			
			document.getElementById("A8_f").value = '7';
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = '2890';
			document.getElementById("f_D5").value = '20';
			document.getElementById("f_C6").value = '0';
			document.getElementById("f_C7").value = '6';
			document.getElementById("f_C8").value = '94';
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = '0';
			document.getElementById("E31").value = '0';
			document.getElementById("E32").value = '0'; 
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = '0';
			document.getElementById("G15").value = '0'; 	
			document.getElementById("G19").value = '0';
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = '11';
			document.getElementById("em_J22").value = '2';
			document.getElementById("em_J23").value = '9';
			document.getElementById("em_J24").value = '2';
			document.getElementById("em_J25").value = '35';
			document.getElementById("em_J26").value = '41';
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = '0';
			document.getElementById("e_N6").value = '0';
			document.getElementById("e_N7").value = '0';
			document.getElementById("e_N8").value = '0';
			document.getElementById("e_N11").value = '5';  
			document.getElementById("e_N12").value = '0';  
			document.getElementById("e_N13").value = '13';  
			document.getElementById("L30").value = '77';
			document.getElementById("L31").value = '0';
			document.getElementById("L32").value = '0';
			document.getElementById("Measure").value = 1;
			//----------------------------------------------------------------------------------
			LoadPlantValue("W");
			LoadMeatValue("W");
			LoadDiaryValue("W");
			LoadFossilValue("W");
			LoadBioValue("W");
			LoadElecValue("W");
		} 
		else {}	
	}
}

// ===============================================================================================================================================================
// 								FUNZIONI PER SALVARE E CARICARE IL VALORE DEI BOTTONI FOOD IMPORT ED ENERGY IMPORT
// ===============================================================================================================================================================

// ------------ SAVE SECTION ------------------------------------------

function SavePlantValue() {
	//alert("Vecchia Regione: "+region);
	var plantRadio = document.getElementsByName('checkbuttonsplant');
  	var plantValue;
  	for(var i = 0; i < plantRadio.length; i++){
   		if(plantRadio[i].checked){
        	plantValue = plantRadio[i].value;
        	//alert("Plant salvato: "+plantRadio[i].value);
      	}
  	}
  	return plantValue;
}

function SaveMeatValue() {
	var meatRadio = document.getElementsByName('checkbuttonsmeat');
  	var meatValue;
  	for(var i = 0; i < meatRadio.length; i++){
   		if(meatRadio[i].checked){
        	meatValue = meatRadio[i].value;
        	//alert("Meat salvato: "+meatRadio[i].value);
      	}
  	}
  	return meatValue;
}

function SaveDiaryValue() {
	var diaryRadio = document.getElementsByName('checkbuttonsdiary');
  	var diaryValue;
  	for(var i = 0; i < diaryRadio.length; i++){
   		if(diaryRadio[i].checked){
        	diaryValue = diaryRadio[i].value;
      		//alert("Diary salvato: "+diaryRadio[i].value);
      	}
  	}
  	return diaryValue;
}

function SaveFossilValue() {
	var fossilRadio = document.getElementsByName('checkbuttonsfossil');
  	var fossilValue;
  	for(var i = 0; i < fossilRadio.length; i++){
   		if(fossilRadio[i].checked){
        	fossilValue = fossilRadio[i].value;
        	//alert("Fossil salvato: "+fossilRadio[i].value);
      	}
  	}
  	return fossilValue;
}

function SaveBioValue() {
	var bioRadio = document.getElementsByName('checkbuttonsbio');
  	var bioValue;
  	for(var i = 0; i < bioRadio.length; i++){
   		if(bioRadio[i].checked){
        	bioValue = bioRadio[i].value;
        	//alert("Bio salvato: "+bioRadio[i].value);
      	}
  	}
  	return bioValue;
}

function SaveElecValue() {
	var elecRadio = document.getElementsByName('checkbuttonselec');
  	var elecValue;
  	for(var i = 0; i < elecRadio.length; i++){
   		if(elecRadio[i].checked){
        	elecValue = elecRadio[i].value;
        	//alert("Elec salvato: "+elecRadio[i].value);
      	}
  	}
  	return elecValue;
}

// ----------------------- LOAD SECTION -------------------------------------------

function LoadPlantValue(plantValue) {
	//alert("Nuova Regione: "+document.querySelector('input[name="region"]:checked').getAttribute('id'));
	//alert("Plant Value: "+plantValue);
	var plantRadio = document.getElementsByName('checkbuttonsplant');
  	for(var i = 0; i < plantRadio.length; i++) {
    	var label = document.getElementById("labelPlant"+plantRadio[i].value);
    	//alert("Valore di label: "+label);
    	if(plantRadio[i].value == plantValue) {
        	plantRadio[i].checked = true;
        	//alert("Plant caricato: "+plantRadio[i].value);
        	//alert("classList TRUE: "+label.classList);
        	label.classList.add('active');
        	//alert("NUOVO classList TRUE: "+label.classList);
      	}
      	else {
			plantRadio[i].checked = false;
			//alert("classList FALSE: "+label.classList);
			//alert("Contiene active PRIMA? "+label.classList.contains('active'));
        	if(label.classList.contains('active')) {
        		label.classList.remove('active');
        	}
        	//alert("Contiene active DOPO? "+label.classList.contains('active'));
        	//alert("NUOVO classList FALSE: "+label.classList);
		}
      	//alert("Plant "+plantRadio[i].value+" checked: "+plantRadio[i].checked);
  	}
}

function LoadMeatValue(meatValue) {
	var meatRadio = document.getElementsByName('checkbuttonsmeat');
  	for(var i = 0; i < meatRadio.length; i++){
  		var label = document.getElementById("labelMeat"+meatRadio[i].value);
    	if(meatRadio[i].value == meatValue){
        	meatRadio[i].checked = true;
        	label.classList.add('active');
        	//alert("Meat caricato: "+meatRadio[i].value);
      	}
      	else {
			meatRadio[i].checked = false;
			if(label.classList.contains('active')) {
        		label.classList.remove('active');
        	}
		}
      	//alert("Meat "+meatRadio[i].value+" checked: "+meatRadio[i].checked);
  	}
}

function LoadDiaryValue(diaryValue) {
	var diaryRadio = document.getElementsByName('checkbuttonsdiary');
  	for(var i = 0; i < diaryRadio.length; i++){
    	var label = document.getElementById("labelDiary"+diaryRadio[i].value);
    	if(diaryRadio[i].value == diaryValue){
        	diaryRadio[i].checked = true;
        	label.classList.add('active');
      		//alert("Diary caricato: "+diaryRadio[i].value);
      	}
      	else {
			diaryRadio[i].checked = false;
			if(label.classList.contains('active')) {
        		label.classList.remove('active');
        	}
		}
      	//alert("Diary "+diaryRadio[i].value+" checked: "+diaryRadio[i].checked);
  	}
}

function LoadFossilValue(fossilValue) {
	var fossilRadio = document.getElementsByName('checkbuttonsfossil');
  	for(var i = 0; i < fossilRadio.length; i++){
  		//alert("Valore value: "+fossilRadio[i].value);
  		//alert("Name: labelFossil"+fossilRadio[i].value);
  		var label = document.getElementById("labelFossil"+fossilRadio[i].value);
    	//alert("Valore di label: "+label);
    	if(fossilRadio[i].value == fossilValue){
        	fossilRadio[i].checked = true;
        	label.classList.add('active');
      		//alert("Fossil caricato: "+fossilRadio[i].value);
      	}
      	else {
			fossilRadio[i].checked = false;
			if(label.classList.contains('active')) {
        		label.classList.remove('active');
        	}
		}
      	//alert("Fossil "+fossilRadio[i].value+" checked: "+fossilRadio[i].checked);
  	}
}

function LoadBioValue(bioValue) {
	var bioRadio = document.getElementsByName('checkbuttonsbio');
  	for(var i = 0; i < bioRadio.length; i++){
    	var label = document.getElementById("labelBio"+bioRadio[i].value);
    	if(bioRadio[i].value == bioValue){
        	bioRadio[i].checked = true;
        	label.classList.add('active');
        	//alert("Bio caricato: "+bioRadio[i].value);
      	}
      	else {
			bioRadio[i].checked = false;
			if(label.classList.contains('active')) {
        		label.classList.remove('active');
        	}
		}
      	//alert("Bio "+bioRadio[i].value+" checked: "+bioRadio[i].checked);
  	}
}

function LoadElecValue(elecValue) {
	var elecRadio = document.getElementsByName('checkbuttonselec');
  	for(var i = 0; i < elecRadio.length; i++){
    	var label = document.getElementById("labelElec"+elecRadio[i].value);
    	if(elecRadio[i].value == elecValue){
        	elecRadio[i].checked = true;
        	label.classList.add('active');
      		//alert("Elec caricato: "+elecRadio[i].value);
      	}
      	else {
			elecRadio[i].checked = false;
			if(label.classList.contains('active')) {
        		label.classList.remove('active');
        	}
		}
      	//alert("Elec "+elecRadio[i].value+" checked: "+elecRadio[i].checked);
  	}
}