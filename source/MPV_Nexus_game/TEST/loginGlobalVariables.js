alert("Sono dentro loginGlobal");

var User = document.getElementById("username").value;
var selectRegion = document.getElementById("SelectRegionLogin").value;	
var selectVersion = document.getElementById("SelectVersionGame").value;

function loginStorage() {
	var User = document.getElementById("username").value;
	var selectRegion = document.getElementById("SelectRegionLogin").value;	
	var selectVersion = document.getElementById("SelectVersionGame").value;
	localStorage.setItem("User", User);
	localStorage.setItem("RegionLogin", selectRegion);
	localStorage.setItem("GameVersion", selectVersion);
	regionAArray = {};
	regionBArray = {};
	regionCArray = {};
	regionDArray = {};
	localStorage.setItem("regionADataInput", JSON.stringify(regionAArray));
	localStorage.setItem("regionBDataInput", JSON.stringify(regionBArray));
	localStorage.setItem("regionCDataInput", JSON.stringify(regionCArray));
	localStorage.setItem("regionDDataInput", JSON.stringify(regionDArray));
	
	alert("VARIABILI PRESE: "+localStorage.getItem("User")+ " "+localStorage.getItem("RegionLogin")+" "+localStorage.getItem("GameVersion"));
	alert("Region: "+selectRegion);
		
		// CARICAMENTO DATI REGION A ---------------------------------------------------------------------------------------------------------------
		
		daysp = '7';
		
		//----------------------------------------------------------------------------------
		intakeparse = '2790';
		//intakeparse = '5555';
		wasteparse = '20';
		wastevirgola = wasteparse/100;
		vegparse = '0';
		vegeparse = '6';
		meatparse = '94';
		//----------------------------------------------------------------------------------
		fip = '0';
		fim = '0';
		fid = '0'; 
		//----------------------------------------------------------------------------------
		Gap_Yeld_parse = '0';
		Mulching_parse = '0'; 	
		Full_Deficit_parse = '0';
		//------------------------------------------------------------------------------------
		windp = '12';
		solarp = '3';
		hydrop = '18';
		biofuelp = '3';
		nuclearp = '4';
		fuelp = '60';
		//-------------------------------------------------------------------------------------
		red_ind_parse = '0';
		red_tr_parse = '0';
		red_ser_parse = '0';
		red_house = '0';
		el_tr_parse = '2';  
		fuel_house_parse = '0';  
		bio_fr_parse = '26';  
		fossilf_parse = '74';
		biofuels_parse = '0';
		elec_parse = '0';
		regionAArray= {
				daysp:daysp, intakeparse:intakeparse, wasteparse:wasteparse, wastevirgola:wastevirgola, vegparse:vegparse, vegeparse:vegeparse, 
				meatparse:meatparse, fip:fip, fim:fim, fid:fid, Gap_Yeld_parse:Gap_Yeld_parse, Mulching_parse:Mulching_parse, Full_Deficit_parse: Full_Deficit_parse, 
				windp:windp, solarp:solarp, hydrop:hydrop, biofuelp:biofuelp, nuclearp:nuclearp, fuelp:fuelp, red_ind_parse:red_ind_parse, red_tr_parse:red_tr_parse,
				red_ser_parse:red_ser_parse, red_house:red_house, el_tr_parse:el_tr_parse, fuel_house_parse:fuel_house_parse, bio_fr_parse:bio_fr_parse,
				fossilf_parse:fossilf_parse, biofuels_parse:biofuels_parse, elec_parse:elec_parse
		}
		localStorage.setItem("regionADataInput", JSON.stringify(regionAArray));
		//alert("A Input: "+localStorage.getItem("regionADataInput"));
	
//---------------------------------------

		// ------------------------------- CARICAMENTO DATI REGION B ------------------------------------------------------------------------------------------ 
		daysp = '7';
		//----------------------------------------------------------------------------------
		intakeparse = '2660';
		//intakeparse = '6000';
		wasteparse = '20';
		wastevirgola = wasteparse/100;
		vegparse = '0';
		vegeparse = '6';
		meatparse = '94';
		//----------------------------------------------------------------------------------
		fip = '0';
		fim = '17';
		fid = '0'; 
		//----------------------------------------------------------------------------------
		Gap_Yeld_parse = '0';
		Mulching_parse = '0'; 	
		Full_Deficit_parse = '0';
		//------------------------------------------------------------------------------------
		windp = '8';
		solarp = '1';
		hydrop = '21';
		biofuelp = '8';
		nuclearp = '34';
		fuelp = '28';
		//-------------------------------------------------------------------------------------
		red_ind_parse = '0';
		red_tr_parse = '0';
		red_ser_parse = '0';
		red_house = '0';
		el_tr_parse = '2';  
		fuel_house_parse = '0';  
		bio_fr_parse = '41';  
		fossilf_parse = '81';
		biofuels_parse = '0';
		elec_parse = '0';
		regionBArray= {
				daysp:daysp, intakeparse:intakeparse, wasteparse:wasteparse, wastevirgola:wastevirgola, vegparse:vegparse, vegeparse:vegeparse, 
				meatparse:meatparse, fip:fip, fim:fim, fid:fid, Gap_Yeld_parse:Gap_Yeld_parse, Mulching_parse:Mulching_parse, Full_Deficit_parse: Full_Deficit_parse, 
				windp:windp, solarp:solarp, hydrop:hydrop, biofuelp:biofuelp, nuclearp:nuclearp, fuelp:fuelp, red_ind_parse:red_ind_parse, red_tr_parse:red_tr_parse,
				red_ser_parse:red_ser_parse, red_house:red_house, el_tr_parse:el_tr_parse, fuel_house_parse:fuel_house_parse, bio_fr_parse:bio_fr_parse,
				fossilf_parse:fossilf_parse, biofuels_parse:biofuels_parse, elec_parse:elec_parse
		}
		localStorage.setItem("regionBDataInput", JSON.stringify(regionBArray));
	

	//---------------------------------

	// ==============================================CARICAMENTO DATI REGION C ====================================================================================
		daysp = '7';
		//----------------------------------------------------------------------------------
		intakeparse = '2920';
		wasteparse = '20';
		wastevirgola = wasteparse/100;
		vegparse = '0';
		vegeparse = '6';
		meatparse = '94';
		//----------------------------------------------------------------------------------
		fip = '17';
		fim = '11';
		fid = '0'; 
		//----------------------------------------------------------------------------------
		Gap_Yeld_parse = '0';
		Mulching_parse = '0'; 	
		Full_Deficit_parse = '0';
		//------------------------------------------------------------------------------------
		windp = '12';
		solarp = '6';
		hydrop = '6';
		biofuelp = '7';
		nuclearp = '14';
		fuelp = '55';
		//-------------------------------------------------------------------------------------
		red_ind_parse = '0';
		red_tr_parse = '0';
		red_ser_parse = '0';
		red_house = '0';
		el_tr_parse = '5';  
		fuel_house_parse = '0';  
		bio_fr_parse = '13';  
		fossilf_parse = '74';
		biofuels_parse = '10';
		elec_parse = '0';
		regionCArray= {
				daysp:daysp, intakeparse:intakeparse, wasteparse:wasteparse, wastevirgola:wastevirgola, vegparse:vegparse, vegeparse:vegeparse, 
				meatparse:meatparse, fip:fip, fim:fim, fid:fid, Gap_Yeld_parse:Gap_Yeld_parse, Mulching_parse:Mulching_parse, Full_Deficit_parse: Full_Deficit_parse, 
				windp:windp, solarp:solarp, hydrop:hydrop, biofuelp:biofuelp, nuclearp:nuclearp, fuelp:fuelp, red_ind_parse:red_ind_parse, red_tr_parse:red_tr_parse,
				red_ser_parse:red_ser_parse, red_house:red_house, el_tr_parse:el_tr_parse, fuel_house_parse:fuel_house_parse, bio_fr_parse:bio_fr_parse,
				fossilf_parse:fossilf_parse, biofuels_parse:biofuels_parse, elec_parse:elec_parse
		}
		localStorage.setItem("regionCDataInput", JSON.stringify(regionCArray));

	
	// ===================================== CARICAMENTO DATI REGION D ===========================================================================================	
		daysp = '7';
		//----------------------------------------------------------------------------------
		intakeparse = '2890';
		wasteparse = '20';
		wastevirgola = wasteparse/100;
		vegparse = '0';
		vegeparse = '6';
		meatparse = '94';
		//----------------------------------------------------------------------------------
		fip = '0';
		fim = '0';
		fid = '0'; 
		//----------------------------------------------------------------------------------
		Gap_Yeld_parse = '0';
		Mulching_parse = '0'; 	
		Full_Deficit_parse = '0';
		//------------------------------------------------------------------------------------
		windp = '11';
		solarp = '2';
		hydrop = '9';
		biofuelp = '2';
		nuclearp = '35';
		fuelp = '41';
		//-------------------------------------------------------------------------------------
		red_ind_parse = '0';
		red_tr_parse = '0';
		red_ser_parse = '0';
		red_house = '0';
		el_tr_parse = '5';  
		fuel_house_parse = '0';  
		bio_fr_parse = '13';  
		fossilf_parse = '77';
		biofuels_parse = '0';
		elec_parse = '0';
		regionDArray= {
				daysp:daysp, intakeparse:intakeparse, wasteparse:wasteparse, wastevirgola:wastevirgola, vegparse:vegparse, vegeparse:vegeparse, 
				meatparse:meatparse, fip:fip, fim:fim, fid:fid, Gap_Yeld_parse:Gap_Yeld_parse, Mulching_parse:Mulching_parse, Full_Deficit_parse: Full_Deficit_parse, 
				windp:windp, solarp:solarp, hydrop:hydrop, biofuelp:biofuelp, nuclearp:nuclearp, fuelp:fuelp, red_ind_parse:red_ind_parse, red_tr_parse:red_tr_parse,
				red_ser_parse:red_ser_parse, red_house:red_house, el_tr_parse:el_tr_parse, fuel_house_parse:fuel_house_parse, bio_fr_parse:bio_fr_parse,
				fossilf_parse:fossilf_parse, biofuels_parse:biofuels_parse, elec_parse:elec_parse
		}
		localStorage.setItem("regionDDataInput", JSON.stringify(regionDArray));
	// ============================================= FINE CARICAMENTO DATI INIZIALI ===========================================================================
}