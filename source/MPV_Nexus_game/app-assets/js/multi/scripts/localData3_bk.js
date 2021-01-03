/*
	Recupero il bottone di default che si trova appena caricata la pagina con tutti i dati
*/
var region = document.querySelector('input[name="region"]:checked').getAttribute('id');
/*
localSaveData() viene chiaamto da solo, la prima volta che viene eseguito il programma
per registrare tutti i dati della scheda di partenza, legati al bottone di partenza preso sopra.
In seguito, quando si far� click su una regione, localSaveData() verr� chiamato dal click
e permetter� di salvare i dati associati alla regione selezionata dal click.
*/
localSaveData();

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

	var DataInput = {
		daysp:daysp, intakeparse:intakeparse, wasteparse:wasteparse, wastevirgola:wastevirgola, vegparse:vegparse, vegeparse:vegeparse, 
		meatparse:meatparse, fip:fip, fim:fim, fid:fid, Gap_Yeld_parse:Gap_Yeld_parse, Mulching_parse:Mulching_parse, Full_Deficit_parse: Full_Deficit_parse, 
		windp:windp, solarp:solarp, hydrop:hydrop, biofuelp:biofuelp, nuclearp:nuclearp, fuelp:fuelp, red_ind_parse:red_ind_parse, red_tr_parse:red_tr_parse,
		red_ser_parse:red_ser_parse, red_house:red_house, el_tr_parse:el_tr_parse, fuel_house_parse:fuel_house_parse, bio_fr_parse:bio_fr_parse,
		fossilf_parse:fossilf_parse, biofuels_parse:biofuels_parse, elec_parse:elec_parse
	};
	var DataOutput = {
		CF_Food_Internal:CF_Food_Internal, CF_Food_External:CF_Food_External, CF_Energy_Internal:CF_Energy_Internal, CF_Energy_External:CF_Energy_External,
		LF_Food_Internal:LF_Food_Internal, LF_Food_External:LF_Food_External, LF_Energy_Internal:LF_Energy_Internal, LF_Energy_External:LF_Energy_External,
		WFgreen_Food_Internal:WFgreen_Food_Internal, WFgreen_Food_External:WFgreen_Food_External, 
		WFgreen_Energy_Internal:WFgreen_Energy_Internal, WFgreen_Energy_external:WFgreen_Energy_external,
		WFblue_Food_Internal:WFblue_Food_Internal, WFblue_Food_External:WFblue_Food_External,
		WFblue_Energy_Internal:WFblue_Energy_Internal, WFblue_Energy_external:WFblue_Energy_external
	};
	
	sessionStorage.setItem(region+"DataInput", JSON.stringify(DataInput));
	sessionStorage.setItem(region+"DataOutput", JSON.stringify(DataOutput));
	//alert("Foglio "+region+"Input: "+sessionStorage.getItem(region+"DataInput"));
	//alert("Foglio "+region+"Output: "+sessionStorage.getItem(region+"DataOutput"));
	//var checkRadioRegion = document.querySelector('input[name="region"]:checked');
	region = document.querySelector('input[name="region"]:checked').getAttribute('id');
}

function localLoadData() {
	//alert("Sono dentro Load Data");
	var DataInput={};
	var DataOutput={};
	var region = document.querySelector('input[name="region"]:checked');
	regionname = region.getAttribute('id');
	//alert("regionname: "+regionname);
	DataInput = sessionStorage.getItem(regionname+'DataInput');
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
	//----------------------------------------------------------------------------------------
	}
	else{
		
		var checkregion = document.querySelector('input[name="region"]:checked'); 
		if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA') && (DataInput === null)) { 
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

		} 
		
	//---------------------------------------

		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB') && (DataInput === null)) { 
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

		} 
		

		//---------------------------------
	
		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC') && (DataInput === null)) { 
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

		} 

		
		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')&&(DataInput===null)) {
			
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
			
		} else {}
	}

}