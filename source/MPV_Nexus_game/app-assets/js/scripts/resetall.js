function ResetGame(){
	document.getElementById("reseticon").classList.add("green");
	document.getElementById("loadicon").classList.remove("green");
	document.getElementById("saveicon").classList.remove("green");
	
	var oldRegion = document.querySelector('input[name="region"]:checked').getAttribute('id');
	
	//localStorage.clear();
	
	//alert("SONO DENTRO RESET GAME!!!");
	
	var player = localStorage.getItem("User");
	document.getElementById("nomeplayer").innerHTML = ""+player+"";
	var Version = localStorage.getItem("GameVersion");
	var RegionStart = localStorage.getItem("RegionLogin");
	
	localStorage.setItem("trade_is_called",'0');
	localStorage.setItem("empty_is_called",'0');
	
	//var User = document.getElementById("username").value;
	//var selectRegion = document.getElementById("SelectRegionLogin").value;	
	//var selectVersion = document.getElementById("SelectVersionGame").value;
	var count = 0;
	
	localStorage.setItem("el_tr_parse_A", count);
	localStorage.setItem("el_tr_parse_B", count);
	localStorage.setItem("el_tr_parse_C", count);
	localStorage.setItem("el_tr_parse_D", count);
	
	//alert("el_tr_parse: A"+localStorage.getItem("el_tr_parse_A")+" B"+localStorage.getItem("el_tr_parse_B")+" C"+localStorage.getItem("el_tr_parse_C")+" D"+localStorage.getItem("el_tr_parse_D"));

	localStorage.setItem("bio_fr_parse_A", count);
	localStorage.setItem("bio_fr_parse_B", count);
	localStorage.setItem("bio_fr_parse_C", count);
	localStorage.setItem("bio_fr_parse_D", count);
	
	//alert("bio_fr_parse: A"+localStorage.getItem("bio_fr_parse_A")+" B"+localStorage.getItem("bio_fr_parse_B")+" C"+localStorage.getItem("bio_fr_parse_C")+" D"+localStorage.getItem("bio_fr_parse_D"));
	
	//localStorage.setItem("User", User);
	//localStorage.setItem("RegionLogin", selectRegion);
	//localStorage.setItem("GameVersion", selectVersion);
	
	//alert("User "+localStorage.getItem("User")+" Region"+localStorage.getItem("RegionLogin")+" Version"+localStorage.getItem("GameVersion"));
	
	regionAArray = {};
	regionBArray = {};
	regionCArray = {};
	regionDArray = {};
	localStorage.setItem("regionADataInput", JSON.stringify(regionAArray));
	localStorage.setItem("regionBDataInput", JSON.stringify(regionBArray));
	localStorage.setItem("regionCDataInput", JSON.stringify(regionCArray));
	localStorage.setItem("regionDDataInput", JSON.stringify(regionDArray));
	
	// ===================== GESTIONE VARIABILI E LOCALSTORAGE CHE VENGONO USATE DENTRO IL FILE RELATIONEU.JS =====================================================
	var A_CF_Food_Internal=16; var A_CF_Food_External=0; var A_CF_Energy_Internal=8; var A_CF_Energy_External=5;
	var A_LF_Food_Internal=16; var A_LF_Food_External=1; var A_LF_Energy_Internal=2; var A_LF_Energy_External=1;
	var A_WFgreen_Food_Internal=5509; var A_WFgreen_Food_External=449; var A_WFgreen_Energy_Internal=1087; var A_WFgreen_Energy_external=0;
	var A_WFblue_Food_Internal=763; var A_WFblue_Food_External=99; var A_WFblue_Energy_Internal=211; var A_WFblue_Energy_external=8;
	var A_security_food = 3348; var A_security_energy = 125;

	var B_CF_Food_Internal=10; var B_CF_Food_External=0; var B_CF_Energy_Internal=6; var B_CF_Energy_External=4;
	var B_LF_Food_Internal=15; var B_LF_Food_External=0; var B_LF_Energy_Internal=3; var B_LF_Energy_External=0;
	var B_WFgreen_Food_Internal=4266; var B_WFgreen_Food_External=447; var B_WFgreen_Energy_Internal=2; var B_WFgreen_Energy_external=0;
	var B_WFblue_Food_Internal=609; var B_WFblue_Food_External=30; var B_WFblue_Energy_Internal=170; var B_WFblue_Energy_external=8;
	var B_security_food = 3115.48776; var B_security_energy = 115;

	var C_CF_Food_Internal=12; var C_CF_Food_External=0; var C_CF_Energy_Internal=9; var C_CF_Energy_External=6;
	var C_LF_Food_Internal=13; var C_LF_Food_External=0; var C_LF_Energy_Internal=1; var C_LF_Energy_External=0;
	var C_WFgreen_Food_Internal=2203; var C_WFgreen_Food_External=656; var C_WFgreen_Energy_Internal=1; var C_WFgreen_Energy_external=0;
	var C_WFblue_Food_Internal=265; var C_WFblue_Food_External=80; var C_WFblue_Energy_Internal=51; var C_WFblue_Energy_external=11;
	var C_security_food = 3037.1971; var C_security_energy = 115;

	var D_CF_Food_Internal=14; var D_CF_Food_External=0; var D_CF_Energy_Internal=6; var D_CF_Energy_External=5;
	var D_LF_Food_Internal=15; var D_LF_Food_External=0; var D_LF_Energy_Internal=1; var D_LF_Energy_External=0;
	var D_WFgreen_Food_Internal=3357; var D_WFgreen_Food_External=0; var D_WFgreen_Energy_Internal=1; var D_WFgreen_Energy_external=0;
	var D_WFblue_Food_Internal=414; var D_WFblue_Food_External=0; var D_WFblue_Energy_Internal=63; var D_WFblue_Energy_external=9;
	var D_security_food = 3468; var D_security_energy = 97;
	
	//VARIABILI CONTENUTO RISULTATI BOTTONI
	var A_plantcf = 0;
	var A_plantlf = 0;
	var A_plantwfg = 0;
	var A_plantwfb = 0;

	var A_meatcf = 0;
	var A_meatlf = 0;
	var A_meatwfg = 0;
	var A_meatwfb = 0;

	var A_diarycf = 0;
	var A_diarylf = 0;
	var A_diarywfg = 0;
	var A_diarywfb = 0;

	//---ENERGY
	var A_fossilcf = 0;
	var A_fossillf = 0;
	var A_fossilwfg = 0;
	var A_fossilwfb = 0;

	var A_biocf = 0;
	var A_biolf = 0;
	var A_biowfg = 0;
	var A_biowfb = 0;

	var A_elecf = 0;
	var A_elelf = 0;
	var A_elewfg = 0;
	var A_elewfb = 0;

	//VARIABILI CONTENUTO RISULTATI BOTTONI
	var B_plantcf = 0;
	var B_plantlf = 0;
	var B_plantwfg = 0;
	var B_plantwfb = 0;

	var B_meatcf = 0;
	var B_meatlf = 0;
	var B_meatwfg = 0;
	var B_meatwfb = 0;

	var B_diarycf = 0;
	var B_diarylf = 0;
	var B_diarywfg = 0;
	var B_diarywfb = 0;

	//---ENERGY
	var B_fossilcf = 0;
	var B_fossillf = 0;
	var B_fossilwfg = 0;
	var B_fossilwfb = 0;

	var B_biocf = 0;
	var B_biolf = 0;
	var B_biowfg = 0;
	var B_biowfb = 0;

	var B_elecf = 0;
	var B_elelf = 0;
	var B_elewfg = 0;
	var B_elewfb = 0;

	//VARIABILI CONTENUTO RISULTATI BOTTONI
	var C_plantcf = 0;
	var C_plantlf = 0;
	var C_plantwfg = 0;
	var C_plantwfb = 0;

	var C_meatcf = 0;
	var C_meatlf = 0;
	var C_meatwfg = 0;
	var C_meatwfb = 0;

	var C_diarycf = 0;
	var C_diarylf = 0;
	var C_diarywfg = 0;
	var C_diarywfb = 0;

	//---ENERGY
	var C_fossilcf = 0;
	var C_fossillf = 0;
	var C_fossilwfg = 0;
	var C_fossilwfb = 0;

	var C_biocf = 0;
	var C_biolf = 0;
	var C_biowfg = 0;
	var C_biowfb = 0;

	var C_elecf = 0;
	var C_elelf = 0;
	var C_elewfg = 0;
	var C_elewfb = 0;

	//VARIABILI CONTENUTO RISULTATI BOTTONI
	var D_plantcf = 0;
	var D_plantlf = 0;
	var D_plantwfg = 0;
	var D_plantwfb = 0;

	var D_meatcf = 0;
	var D_meatlf = 0;
	var D_meatwfg = 0;
	var D_meatwfb = 0;

	var D_diarycf = 0;
	var D_diarylf = 0;
	var D_diarywfg = 0;
	var D_diarywfb = 0;

	//---ENERGY
	var D_fossilcf = 0;
	var D_fossillf = 0;
	var D_fossilwfg = 0;
	var D_fossilwfb = 0;

	var D_biocf = 0;
	var D_biolf = 0;
	var D_biowfg = 0;
	var D_biowfb = 0;

	var D_elecf = 0;
	var D_elelf = 0;
	var D_elewfg = 0;
	var D_elewfb = 0;
	
	var totCFyeld = 0;
	var totLFyeld = 0;
	var totWFGyeld = 0;
	var totWFByeld = 0;
	
	
	 //----- FINE

	var A_DataOutput = {
		CF_Food_Internal:A_CF_Food_Internal, CF_Food_External:A_CF_Food_External, CF_Energy_Internal:A_CF_Energy_Internal, CF_Energy_External:A_CF_Energy_External,
		LF_Food_Internal:A_LF_Food_Internal, LF_Food_External:A_LF_Food_External, LF_Energy_Internal:A_LF_Energy_Internal, LF_Energy_External:A_LF_Energy_External,
		WFgreen_Food_Internal:A_WFgreen_Food_Internal, WFgreen_Food_External:A_WFgreen_Food_External, 
		WFgreen_Energy_Internal:A_WFgreen_Energy_Internal, WFgreen_Energy_external:A_WFgreen_Energy_external,
		WFblue_Food_Internal:A_WFblue_Food_Internal, WFblue_Food_External:A_WFblue_Food_External,
		WFblue_Energy_Internal:A_WFblue_Energy_Internal, WFblue_Energy_external:A_WFblue_Energy_external,
		security_food:A_security_food, security_energy:A_security_energy,
		
		InRegionB_food:0, InRegionC_food:0, InRegionD_food:0,
		InRegionB_energy:0, InRegionC_energy:0, InRegionD_energy:0,
		totCFyeld:totCFyeld, totLyeld:totLFyeld, totWFGyeld:totWFGyeld, totWFByeld:totWFByeld,
		
		A_plantcf:A_plantcf, A_plantlf:A_plantlf, A_plantwfg:A_plantwfg, A_plantwfb:A_plantwfb,
		A_meatcf:A_meatcf, A_meatlf:A_meatlf, A_meatwfg:A_meatwfg, A_meatwfb:A_meatwfb,
		A_diarycf:A_diarycf, A_diarylf:A_diarylf, A_diarywfg:A_diarywfg, A_diarywfb:A_diarywfb,
		A_fossilcf:A_fossilcf, A_fossillf:A_fossillf, A_fossilwfg:A_fossilwfg, A_fossilwfb:A_fossilwfb,
		A_biocf:A_biocf, A_biolf:A_biolf, A_biowfg:A_biowfg, A_biowfb:A_biowfb,
		A_elecf:A_elecf, A_elelf:A_elelf, A_elewfg:A_elewfg, A_elewfb:A_elewfb,
		
		EU_A_sotto_cf:20.0, EU_A_sotto_lf:13.0, EU_A_sotto_wfg:4926.0, EU_A_sotto_wfb:706.0,
		A_lf_limitOk:1, A_wfg_limitOk:1, A_wfb_limitOk:1
	};
	localStorage.setItem("regionADataOutput", JSON.stringify(A_DataOutput));
	//alert("Foglio A Output: "+localStorage.getItem("regionADataOutput"));
	
	var B_DataOutput = {
		CF_Food_Internal:B_CF_Food_Internal, CF_Food_External:B_CF_Food_External, CF_Energy_Internal:B_CF_Energy_Internal, CF_Energy_External:B_CF_Energy_External,
		LF_Food_Internal:B_LF_Food_Internal, LF_Food_External:B_LF_Food_External, LF_Energy_Internal:B_LF_Energy_Internal, LF_Energy_External:B_LF_Energy_External,
		WFgreen_Food_Internal:B_WFgreen_Food_Internal, WFgreen_Food_External:B_WFgreen_Food_External, 
		WFgreen_Energy_Internal:B_WFgreen_Energy_Internal, WFgreen_Energy_external:B_WFgreen_Energy_external,
		WFblue_Food_Internal:B_WFblue_Food_Internal, WFblue_Food_External:B_WFblue_Food_External,
		WFblue_Energy_Internal:B_WFblue_Energy_Internal, WFblue_Energy_external:B_WFblue_Energy_external,
		security_food:B_security_food, security_energy:B_security_energy,
		
		InRegionA_food:0, InRegionC_food:0, InRegionD_food:0,
		InRegionA_energy:0, InRegionC_energy:0, InRegionD_energy:0,
		totCFyeld:totCFyeld, totLyeld:totLFyeld, totWFGyeld:totWFGyeld, totWFByeld:totWFByeld,
		
		B_plantcf:B_plantcf, B_plantlf:B_plantlf, B_plantwfg:B_plantwfg, B_plantwfb:B_plantwfb,
		B_meatcf:B_meatcf, B_meatlf:B_meatlf, B_meatwfg:B_meatwfg, B_meatwfb:B_meatwfb,
		B_diarycf:B_diarycf, B_diarylf:B_diarylf, B_diarywfg:B_diarywfg, B_diarywfb:B_diarywfb,
		B_fossilcf:B_fossilcf, B_fossillf:B_fossillf, B_fossilwfg:B_fossilwfg, B_fossilwfb:B_fossilwfb,
		B_biocf:B_biocf, B_biolf:B_biolf, B_biowfg:B_biowfg, B_biowfb:B_biowfb,
		B_elecf:B_elecf, B_elelf:B_elelf, B_elewfg:B_elewfg, B_elewfb:B_elewfb,

		EU_B_sotto_cf:16.0, EU_B_sotto_lf:18.0, EU_B_sotto_wfg:4270.0, EU_B_sotto_wfb:780.0,
		B_lf_limitOk:1, B_wfg_limitOk:1, B_wfb_limitOk:1
	};
	localStorage.setItem("regionBDataOutput", JSON.stringify(B_DataOutput));
	//alert("Foglio B Output: "+localStorage.getItem("regionBDataOutput"));

	
	var C_DataOutput = {
		CF_Food_Internal:C_CF_Food_Internal, CF_Food_External:C_CF_Food_External, CF_Energy_Internal:C_CF_Energy_Internal, CF_Energy_External:C_CF_Energy_External,
		LF_Food_Internal:C_LF_Food_Internal, LF_Food_External:C_LF_Food_External, LF_Energy_Internal:C_LF_Energy_Internal, LF_Energy_External:C_LF_Energy_External,
		WFgreen_Food_Internal:C_WFgreen_Food_Internal, WFgreen_Food_External:C_WFgreen_Food_External, 
		WFgreen_Energy_Internal:C_WFgreen_Energy_Internal, WFgreen_Energy_external:C_WFgreen_Energy_external,
		WFblue_Food_Internal:C_WFblue_Food_Internal, WFblue_Food_External:C_WFblue_Food_External,
		WFblue_Energy_Internal:C_WFblue_Energy_Internal, WFblue_Energy_external:C_WFblue_Energy_external,
		security_food:C_security_food, security_energy:C_security_energy,
		
		InRegionA_food:0, InRegionB_food:0, InRegionD_food:0,
		InRegionA_energy:0, InRegionB_energy:0, InRegionD_energy:0,
		totCFyeld:totCFyeld, totLyeld:totLFyeld, totWFGyeld:totWFGyeld, totWFByeld:totWFByeld,

		C_plantcf:C_plantcf, C_plantlf:C_plantlf, C_plantwfg:C_plantwfg, C_plantwfb:C_plantwfb,
		C_meatcf:C_meatcf, C_meatlf:C_meatlf, C_meatwfg:C_meatwfg, C_meatwfb:C_meatwfb,
		C_diarycf:C_diarycf, C_diarylf:C_diarylf, C_diarywfg:C_diarywfg, C_diarywfb:C_diarywfb,
		C_fossilcf:C_fossilcf, C_fossillf:C_fossillf, C_fossilwfg:C_fossilwfg, C_fossilwfb:C_fossilwfb,
		C_biocf:C_biocf, C_biolf:C_biolf, C_biowfg:C_biowfg, C_biowfb:C_biowfb,
		C_elecf:C_elecf, C_elelf:C_elelf, C_elewfg:C_elewfg, C_elewfb:C_elewfb,
		
		EU_C_sotto_cf:21.0, EU_C_sotto_lf:14.0, EU_C_sotto_wfg:2204.0, EU_C_sotto_wfb:316.0,
		C_lf_limitOk:1, C_wfg_limitOk:1, C_wfb_limitOk:1
	};
	localStorage.setItem("regionCDataOutput", JSON.stringify(C_DataOutput));
	//alert("Foglio C Output: "+localStorage.getItem("regionCDataOutput"));

	
	var D_DataOutput = {
		CF_Food_Internal:D_CF_Food_Internal, CF_Food_External:D_CF_Food_External, CF_Energy_Internal:D_CF_Energy_Internal, CF_Energy_External:D_CF_Energy_External,
		LF_Food_Internal:D_LF_Food_Internal, LF_Food_External:D_LF_Food_External, LF_Energy_Internal:D_LF_Energy_Internal, LF_Energy_External:D_LF_Energy_External,
		WFgreen_Food_Internal:D_WFgreen_Food_Internal, WFgreen_Food_External:D_WFgreen_Food_External, 
		WFgreen_Energy_Internal:D_WFgreen_Energy_Internal, WFgreen_Energy_external:D_WFgreen_Energy_external,
		WFblue_Food_Internal:D_WFblue_Food_Internal, WFblue_Food_External:D_WFblue_Food_External,
		WFblue_Energy_Internal:D_WFblue_Energy_Internal, WFblue_Energy_external:D_WFblue_Energy_external,
		security_food:D_security_food, security_energy:D_security_energy,
		
		InRegionA_food:0, InRegionB_food:0, InRegionC_food:0,
		InRegionA_energy:0, InRegionB_energy:0, InRegionC_energy:0,
		totCFyeld:totCFyeld, totLyeld:totLFyeld, totWFGyeld:totWFGyeld, totWFByeld:totWFByeld,
		
		D_plantcf:D_plantcf, D_plantlf:D_plantlf, D_plantwfg:D_plantwfg, D_plantwfb:D_plantwfb,
		D_meatcf:D_meatcf, D_meatlf:D_meatlf, D_meatwfg:D_meatwfg, D_meatwfb:D_meatwfb,
		D_diarycf:D_diarycf, D_diarylf:D_diarylf, D_diarywfg:D_diarywfg, D_diarywfb:D_diarywfb,
		D_fossilcf:D_fossilcf, D_fossillf:D_fossillf, D_fossilwfg:D_fossilwfg, D_fossilwfb:D_fossilwfb,
		D_biocf:D_biocf, D_biolf:D_biolf, D_biowfg:D_biowfg, D_biowfb:D_biowfb,
		D_elecf:D_elecf, D_elelf:D_elelf, D_elewfg:D_elewfg, D_elewfb:D_elewfb,
		
		EU_D_sotto_cf:20.0, EU_D_sotto_lf:16.0, EU_D_sotto_wfg:3358.0, EU_D_sotto_wfb:480.0,
		D_lf_limitOk:1, D_wfg_limitOk:1, D_wfb_limitOk:1
	};
	localStorage.setItem("regionDDataOutput", JSON.stringify(D_DataOutput));
	//alert("Foglio D Output: "+localStorage.getItem("regionDDataOutput"));
	
	// ===========================================================================================================================================================
	
		measure = 1;
		
		// CARICAMENTO DATI REGION A ---------------------------------------------------------------------------------------------------------------
		
		daysp = '7';
		
		//----------------------------------------------------------------------------------
		intakeparse = '2790';
		wasteparse = '20';
		wastevirgola = wasteparse/100;
		vegparse = '0';
		vegeparse = '6';
		meatparse = '94';
		//----------------------------------------------------------------------------------
		fip = '19';
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
		// ==============================  REGION A RACCOLTA DATI PER LA CREAZIONE DI RELATIONS EU ================================================================
		CF_Food_Internal = '16';
		CF_Food_External = '0';
		CF_Energy_Internal = '8';
		CF_Energy_External = '5';
		
		LF_Food_Internal = '16';
		LF_Food_External = '1';
		LF_Energy_Internal = '2';
		LF_Energy_External = '0';
		
		WFgreen_Food_Internal = '5509';
		WFgreen_Food_External = '449';
		WFgreen_Energy_Internal = '1087';
		WFgreen_Energy_external = '0';
		
		WFblue_Food_Internal = '763';
		WFblue_Food_External = '99';
		WFblue_Energy_Internal = '211';
		WFblue_Energy_external = '8';
		// ==================================================================================================================================================
		regionAArray= {
				daysp:daysp, intakeparse:intakeparse, wasteparse:wasteparse, wastevirgola:wastevirgola, vegparse:vegparse, vegeparse:vegeparse, 
				meatparse:meatparse, fip:fip, fim:fim, fid:fid, Gap_Yeld_parse:Gap_Yeld_parse, Mulching_parse:Mulching_parse, Full_Deficit_parse: Full_Deficit_parse, 
				windp:windp, solarp:solarp, hydrop:hydrop, biofuelp:biofuelp, nuclearp:nuclearp, fuelp:fuelp, red_ind_parse:red_ind_parse, red_tr_parse:red_tr_parse,
				red_ser_parse:red_ser_parse, red_house:red_house, el_tr_parse:el_tr_parse, fuel_house_parse:fuel_house_parse, bio_fr_parse:bio_fr_parse,
				fossilf_parse:fossilf_parse, biofuels_parse:biofuels_parse, elec_parse:elec_parse, measure:measure, radioPlant:"W", radioMeat:"W",
				radioDiary:"W", radioFossil:"W", radioBio:"W", radioElec:"W"
		}
		localStorage.setItem("regionADataInput", JSON.stringify(regionAArray));
		//alert("region A DataInput: "+localStorage.getItem("regionADataInput"));
		
		//-------------------------------------------------------------------
	
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
		// ==============================  REGION B RACCOLTA DATI PER LA CREAZIONE DI RELATIONS EU ================================================================
		CF_Food_Internal = '10';
		CF_Food_External = '0';
		CF_Energy_Internal = '6';
		CF_Energy_External = '4';
		
		LF_Food_Internal = '15';
		LF_Food_External = '0';
		LF_Energy_Internal = '3';
		LF_Energy_External = '0';
		
		WFgreen_Food_Internal = '4266';
		WFgreen_Food_External = '447';
		WFgreen_Energy_Internal = '2';
		WFgreen_Energy_external = '0';
		
		WFblue_Food_Internal = '609';
		WFblue_Food_External = '30';
		WFblue_Energy_Internal = '170';
		WFblue_Energy_external = '8';
		// ==================================================================================================================================================
		regionBArray= {
				daysp:daysp, intakeparse:intakeparse, wasteparse:wasteparse, wastevirgola:wastevirgola, vegparse:vegparse, vegeparse:vegeparse, 
				meatparse:meatparse, fip:fip, fim:fim, fid:fid, Gap_Yeld_parse:Gap_Yeld_parse, Mulching_parse:Mulching_parse, Full_Deficit_parse: Full_Deficit_parse, 
				windp:windp, solarp:solarp, hydrop:hydrop, biofuelp:biofuelp, nuclearp:nuclearp, fuelp:fuelp, red_ind_parse:red_ind_parse, red_tr_parse:red_tr_parse,
				red_ser_parse:red_ser_parse, red_house:red_house, el_tr_parse:el_tr_parse, fuel_house_parse:fuel_house_parse, bio_fr_parse:bio_fr_parse,
				fossilf_parse:fossilf_parse, biofuels_parse:biofuels_parse, elec_parse:elec_parse, measure:measure, radioPlant:"W", radioMeat:"W",
				radioDiary:"W", radioFossil:"W", radioBio:"W", radioElec:"W"
		}
		
		localStorage.setItem("regionBDataInput", JSON.stringify(regionBArray));
		//alert("region B DataInput: "+localStorage.getItem("regionBDataInput"));
		
		// ==============================================CARICAMENTO DATI REGION C ===============================================================================
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
		// ==============================  REGION C RACCOLTA DATI PER LA CREAZIONE DI RELATIONS EU ================================================================
		CF_fp_consum_init_value = '25.9678596753111';
		LF_fp_consum_init_value = '15.0396262829812';
		WFgreen_fp_consum_init_value = '3459.9586618624';
		WFblue_fp_consum_init_value = '510.124186555134';
		
		CF_fp_product_init_value = '20.3769358104986';
		LF_fp_product_init_value = '14.7453616645949';
		WFgreen_fp_product_init_value = '3094.35622127523';
		WFblue_fp_product_init_value = '454.461724873184';
		
		CF_Food_Internal = '12';
		CF_Food_External = '0';
		CF_Energy_Internal = '9';
		CF_Energy_External = '6';
		
		LF_Food_Internal = '13';
		LF_Food_External = '0';
		LF_Energy_Internal = '1';
		LF_Energy_External = '0';
		
		WFgreen_Food_Internal = '2203';
		WFgreen_Food_External = '656';
		WFgreen_Energy_Internal = '1';
		WFgreen_Energy_external = '0';
		
		WFblue_Food_Internal = '265';
		WFblue_Food_External = '80';
		WFblue_Energy_Internal = '51';
		WFblue_Energy_external = '11';
		// ==================================================================================================================================================
		regionCArray= {
				daysp:daysp, intakeparse:intakeparse, wasteparse:wasteparse, wastevirgola:wastevirgola, vegparse:vegparse, vegeparse:vegeparse, 
				meatparse:meatparse, fip:fip, fim:fim, fid:fid, Gap_Yeld_parse:Gap_Yeld_parse, Mulching_parse:Mulching_parse, Full_Deficit_parse: Full_Deficit_parse, 
				windp:windp, solarp:solarp, hydrop:hydrop, biofuelp:biofuelp, nuclearp:nuclearp, fuelp:fuelp, red_ind_parse:red_ind_parse, red_tr_parse:red_tr_parse,
				red_ser_parse:red_ser_parse, red_house:red_house, el_tr_parse:el_tr_parse, fuel_house_parse:fuel_house_parse, bio_fr_parse:bio_fr_parse,
				fossilf_parse:fossilf_parse, biofuels_parse:biofuels_parse, elec_parse:elec_parse, measure:measure, radioPlant:"W", radioMeat:"W",
				radioDiary:"W", radioFossil:"W", radioBio:"W", radioElec:"W"
		}
		
		localStorage.setItem("regionCDataInput", JSON.stringify(regionCArray));
		//alert("region C DataInput: "+localStorage.getItem("regionCDataInput"));
		
		// ===================================== CARICAMENTO DATI REGION D =======================================================================================
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
		// ==============================  REGION D RACCOLTA DATI PER LA CREAZIONE DI RELATIONS EU ================================================================
		CF_fp_consum_init_value = '25.9678596753111';
		LF_fp_consum_init_value = '15.0396262829812';
		WFgreen_fp_consum_init_value = '3459.9586618624';
		WFblue_fp_consum_init_value = '510.124186555134';
		
		CF_fp_product_init_value = '20.3769358104986';
		LF_fp_product_init_value = '14.7453616645949';
		WFgreen_fp_product_init_value = '3094.35622127523';
		WFblue_fp_product_init_value = '454.461724873184';
		
		CF_Food_Internal = '14';
		CF_Food_External = '0';
		CF_Energy_Internal = '6';
		CF_Energy_External = '5';
		
		LF_Food_Internal = '15';
		LF_Food_External = '0';
		LF_Energy_Internal = '1';
		LF_Energy_External = '0';
		
		WFgreen_Food_Internal = '3357';
		WFgreen_Food_External = '0';
		WFgreen_Energy_Internal = '1';
		WFgreen_Energy_external = '0';
		
		WFblue_Food_Internal = '414';
		WFblue_Food_External = '0';
		WFblue_Energy_Internal = '63';
		WFblue_Energy_external = '9';
		// ==================================================================================================================================================
		regionDArray= {
				daysp:daysp, intakeparse:intakeparse, wasteparse:wasteparse, wastevirgola:wastevirgola, vegparse:vegparse, vegeparse:vegeparse, 
				meatparse:meatparse, fip:fip, fim:fim, fid:fid, Gap_Yeld_parse:Gap_Yeld_parse, Mulching_parse:Mulching_parse, Full_Deficit_parse: Full_Deficit_parse, 
				windp:windp, solarp:solarp, hydrop:hydrop, biofuelp:biofuelp, nuclearp:nuclearp, fuelp:fuelp, red_ind_parse:red_ind_parse, red_tr_parse:red_tr_parse,
				red_ser_parse:red_ser_parse, red_house:red_house, el_tr_parse:el_tr_parse, fuel_house_parse:fuel_house_parse, bio_fr_parse:bio_fr_parse,
				fossilf_parse:fossilf_parse, biofuels_parse:biofuels_parse, elec_parse:elec_parse, measure:measure, radioPlant:"W", radioMeat:"W",
				radioDiary:"W", radioFossil:"W", radioBio:"W", radioElec:"W"
		}
		localStorage.setItem("regionDDataInput", JSON.stringify(regionDArray));
		//alert("region D DataInput: "+localStorage.getItem("regionDDataInput"));
		
		// =================================== WORLD SECURITY FOOD/ENERGY ===================================================================================
		WORLD_DataOutput = {
			WORLD_A_security_food:'761', WORLD_B_security_food:'77', WORLD_C_security_food:'467', WORLD_D_security_food:'0',
			WORLD_A_security_energy:'83', WORLD_B_security_energy:'77', WORLD_C_security_energy:'117', WORLD_D_security_energy:'94' 	
		}
		localStorage.setItem("WORLDDataOutput", JSON.stringify(WORLD_DataOutput));
		//alert("WORLD DATAOUTPUT: "+localStorage.getItem("WORLDDataOutput"));
	
		// =================================== VALORI DELLE REGIONI CHE VENGONO CONTROLLATI IN OVERVIEW EU - TARGET =========================================
		currents = {
			current_A_land:25.1, current_B_land:-15.8, current_C_land:70.5, current_D_land:-11.7,
			current_A_green:42.7, current_B_green:-67.4, current_C_green:-7.0, current_D_green:-32.5,
			current_A_blue:-50.0, current_B_blue:-79.6, current_C_blue:20.6, current_D_blue:38.6
		}
		localStorage.setItem("currents", JSON.stringify(currents));
		//alert("currents: "+localStorage.getItem("currents"));
		
		var EU_CF_initial_value = 20.3769358104986;
		EU_security_emissions = {
			food:94.5, energy:70, carbon:(0.8*EU_CF_initial_value)
		}
		localStorage.setItem("EU", JSON.stringify(EU_security_emissions));
		//alert("EU: "+localStorage.getItem("EU"));
		// ============================================= FINE CARICAMENTO DATI INIZIALI =========================================================================
	
		//--------- Variabili per il controllo dello stato dei numeri initial
		var A_totCFyeld = 0;
		var A_totLFyeld = 0;
		var A_totWFGyeld = 0;
		var A_totWFByeld = 0;
		var C_totCFyeld = 0;
		var C_totLFyeld = 0;
		var C_totWFGyeld = 0;
		var C_totWFByeld = 0;
		var D_totCFyeld = 0;
		var D_totLFyeld = 0;
		var D_totWFGyeld = 0;
		var D_totWFByeld = 0;
		var B_totCFyeld = 0;
		var B_totLFyeld = 0;
		var B_totWFGyeld = 0;
		var B_totWFByeld = 0;
		
		localStorage.setItem("A_totCFyeld", 0);
		localStorage.setItem("A_totLFyeld",0);
		localStorage.setItem("A_totWFGyeld",0);
		localStorage.setItem("A_totWFByeld",0);

		localStorage.setItem("B_totCFyeld", 0);
		localStorage.setItem("B_totLFyeld",0);
		localStorage.setItem("B_totWFGyeld",0);
		localStorage.setItem("B_totWFByeld",0);

		localStorage.setItem("C_totCFyeld", 0);
		localStorage.setItem("C_totLFyeld",0);
		localStorage.setItem("C_totWFGyeld",0);
		localStorage.setItem("C_totWFByeld",0);

		localStorage.setItem("D_totCFyeld", 0);
		localStorage.setItem("D_totLFyeld",0);
		localStorage.setItem("D_totWFGyeld",0);
		localStorage.setItem("D_totWFByeld",0);

		//Tasto Salva
		localStorage.setItem("SaveGameA", 0);
		localStorage.setItem("SaveGameB",0);
		localStorage.setItem("SaveGameC",0);
		localStorage.setItem("SaveGameD",0);
		
		
		localStorage.setItem("A_plantcf", 0);
		localStorage.setItem("A_meatcf",0);
		localStorage.setItem("A_diarycf",0);
		localStorage.setItem("A_plantlf", 0);
		localStorage.setItem("A_meatlf",0);
		localStorage.setItem("A_diarylf",0);
		localStorage.setItem("A_plantwfg", 0);
		localStorage.setItem("A_meatwfg",0);
		localStorage.setItem("A_diarywfg",0);
		localStorage.setItem("A_plantwfb", 0);
		localStorage.setItem("A_meatwfb",0);
		localStorage.setItem("A_diarywfb",0);

		localStorage.setItem("B_plantcf", 0);
		localStorage.setItem("B_meatcf",0);
		localStorage.setItem("B_diarycf",0);
		localStorage.setItem("B_plantlf", 0);
		localStorage.setItem("B_meatlf",0);
		localStorage.setItem("B_diarylf",0);
		localStorage.setItem("B_plantwfg", 0);
		localStorage.setItem("B_meatwfg",0);
		localStorage.setItem("B_diarywfg",0);
		localStorage.setItem("B_plantwfb", 0);
		localStorage.setItem("B_meatwfb",0);
		localStorage.setItem("B_diarywfb",0);


		localStorage.setItem("C_plantcf", 0);
		localStorage.setItem("C_meatcf",0);
		localStorage.setItem("C_diarycf",0);
		localStorage.setItem("C_plantlf", 0);
		localStorage.setItem("C_meatlf",0);
		localStorage.setItem("C_diarylf",0);
		localStorage.setItem("C_plantwfg", 0);
		localStorage.setItem("C_meatwfg",0);
		localStorage.setItem("C_diarywfg",0);
		localStorage.setItem("C_plantwfb", 0);
		localStorage.setItem("C_meatwfb",0);
		localStorage.setItem("C_diarywfb",0);


		localStorage.setItem("D_plantcf", 0);
		localStorage.setItem("D_meatcf",0);
		localStorage.setItem("D_diarycf",0);
		localStorage.setItem("D_plantlf", 0);
		localStorage.setItem("D_meatlf",0);
		localStorage.setItem("D_diarylf",0);
		localStorage.setItem("D_plantwfg", 0);
		localStorage.setItem("D_meatwfg",0);
		localStorage.setItem("D_diarywfg",0);
		localStorage.setItem("D_plantwfb", 0);
		localStorage.setItem("D_meatwfb",0);
		localStorage.setItem("D_diarywfb",0);
		//--ENERGY
		localStorage.setItem("A_fossilcf", 0);
		localStorage.setItem("A_biocf",0);
		localStorage.setItem("A_elecf",0);
		localStorage.setItem("A_fossillf", 0);
		localStorage.setItem("A_biolf",0);
		localStorage.setItem("A_elelf",0);
		localStorage.setItem("A_fossilwfg", 0);
		localStorage.setItem("A_biowfg",0);
		localStorage.setItem("A_elewfg",0);
		localStorage.setItem("A_fossilwfb", 0);
		localStorage.setItem("A_biowfb",0);
		localStorage.setItem("A_elewfb",0);


		localStorage.setItem("B_fossilcf", 0);
		localStorage.setItem("B_biocf",0);
		localStorage.setItem("B_elecf",0);
		localStorage.setItem("B_fossillf", 0);
		localStorage.setItem("B_biolf",0);
		localStorage.setItem("B_elelf",0);
		localStorage.setItem("B_fossilwfg", 0);
		localStorage.setItem("B_biowfg",0);
		localStorage.setItem("B_elewfg",0);
		localStorage.setItem("B_fossilwfb", 0);
		localStorage.setItem("B_biowfb",0);
		localStorage.setItem("B_elewfb",0);

		localStorage.setItem("C_fossilcf", 0);
		localStorage.setItem("C_biocf",0);
		localStorage.setItem("C_elecf",0);
		localStorage.setItem("C_fossillf", 0);
		localStorage.setItem("C_biolf",0);
		localStorage.setItem("C_elelf",0);
		localStorage.setItem("C_fossilwfg", 0);
		localStorage.setItem("C_biowfg",0);
		localStorage.setItem("C_elewfg",0);
		localStorage.setItem("C_fossilwfb", 0);
		localStorage.setItem("C_biowfb",0);
		localStorage.setItem("C_elewfb",0);

		localStorage.setItem("D_fossilcf", 0);
		localStorage.setItem("D_biocf",0);
		localStorage.setItem("D_elecf",0);
		localStorage.setItem("D_fossillf", 0);
		localStorage.setItem("D_biolf",0);
		localStorage.setItem("D_elelf",0);
		localStorage.setItem("D_fossilwfg", 0);
		localStorage.setItem("D_biowfg",0);
		localStorage.setItem("D_elewfg",0);
		localStorage.setItem("D_fossilwfb", 0);
		localStorage.setItem("D_biowfb",0);
		localStorage.setItem("D_elewfb",0);
		
		//alert("SONO ARRIVATO AL FONDO DELLA PARTE LOGINGLOBAL");

// =================================== FINE LOGINGLOBALVARIABLES ===============================================================================================

		//alert("SEZIONE PER CARICARE I DATI A VIDEO");
		var checkregion = document.querySelector('input[name="region"]:checked');
		if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
			document.getElementById("planta").disabled=true;
			document.getElementById("meata").disabled=true;
			document.getElementById("diarya").disabled=true;
			document.getElementById("fossila").disabled=true;
			document.getElementById("biofuela").disabled=true;
			document.getElementById("ela").disabled=true;
			
			var regionA = localStorage.getItem("regionADataInput");
			regionA = JSON.parse(regionA);
			
			document.getElementById("A8_f").value = regionA['daysp'];
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = regionA['intakeparse'];
			document.getElementById("f_D5").value = regionA['wasteparse'];
			document.getElementById("f_C6").value = regionA['vegparse'];
			document.getElementById("f_C7").value = regionA['vegeparse'];
			document.getElementById("f_C8").value = regionA['meatparse'];
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = regionA['fip'];
			document.getElementById("E31").value = regionA['fim'];
			document.getElementById("E32").value = regionA['fid']; 
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = regionA['Gap_Yeld_parse'];
			document.getElementById("G15").value = regionA['Mulching_parse']; 	
			document.getElementById("G19").value = regionA['Full_Deficit_parse'];
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = regionA['windp'];
			document.getElementById("em_J22").value = regionA['solarp'];
			document.getElementById("em_J23").value = regionA['hydrop'];
			document.getElementById("em_J24").value = regionA['biofuelp'];
			document.getElementById("em_J25").value = regionA['nuclearp'];
			document.getElementById("em_J26").value = regionA['fuelp'];
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = regionA['red_ind_parse'];
			document.getElementById("e_N6").value = regionA['red_tr_parse'];
			document.getElementById("e_N7").value = regionA['red_ser_parse'];
			document.getElementById("e_N8").value = regionA['red_house'];
			document.getElementById("e_N11").value = regionA['el_tr_parse'];  
			document.getElementById("e_N12").value = regionA['fuel_house_parse'];  
			document.getElementById("e_N13").value = regionA['bio_fr_parse'];  
			document.getElementById("L30").value = regionA['fossilf_parse'];
			document.getElementById("L31").value = regionA['biofuels_parse'];
			document.getElementById("L32").value = regionA['elec_parse'];
			document.getElementById("Measure").value = 1;
			
			LoadPlantValue("W");
			LoadMeatValue("W");
			LoadDiaryValue("W");
			LoadFossilValue("W");
			LoadBioValue("W");
			LoadElecValue("W");
			
			// Richieste alla regione A da parte della regione B
			centralExport['A_B_plant']="no"; centralExport['A_B_meat']="no"; centralExport['A_B_diary']="no"; 
			centralExport['A_B_fossil']="no"; centralExport['A_B_bio']="no"; centralExport['A_B_elec']="no";
			centralExport['A_B_plantValue_cf']=0; centralExport['A_B_meatValue_cf']=0; centralExport['A_B_diaryValue_cf']=0; 
			centralExport['A_B_fossilValue_cf']=0; centralExport['A_B_bioValue_cf']=0; centralExport['A_B_elecValue_cf']=0;
			centralExport['A_B_plantValue_lf']=0; centralExport['A_B_meatValue_lf']=0; centralExport['A_B_diaryValue_lf']=0; 
			centralExport['A_B_fossilValue_lf']=0; centralExport['A_B_bioValue_lf']=0; centralExport['A_B_elecValue_lf']=0;
			centralExport['A_B_plantValue_wfg']=0; centralExport['A_B_meatValue_wfg']=0; centralExport['A_B_diaryValue_wfg']=0; 
			centralExport['A_B_fossilValue_wfg']=0; centralExport['A_B_bioValue_wfg']=0; centralExport['A_B_elecValue_wfg']=0;
			centralExport['A_B_plantValue_wfb']=0; centralExport['A_B_meatValue_wfb']=0; centralExport['A_B_diaryValue_wfb']=0; 
			centralExport['A_B_fossilValue_wfb']=0; centralExport['A_B_bioValue_wfb']=0; centralExport['A_B_elecValue_wfb']=0;
			
			// Richieste alla regione A da parte della regione C
			centralExport['A_C_plant']="no"; centralExport['A_C_meat']="no"; centralExport['A_C_diary']="no"; 
			centralExport['A_C_fossil']="no"; centralExport['A_C_bio']="no"; centralExport['A_C_elec']="no";
			centralExport['A_C_plantValue_cf']=0; centralExport['A_C_meatValue_cf']=0; centralExport['A_C_diaryValue_cf']=0; 
			centralExport['A_C_fossilValue_cf']=0; centralExport['A_C_bioValue_cf']=0; centralExport['A_C_elecValue_cf']=0;
			centralExport['A_C_plantValue_lf']=0; centralExport['A_C_meatValue_lf']=0; centralExport['A_C_diaryValue_lf']=0; 
			centralExport['A_C_fossilValue_lf']=0; centralExport['A_C_bioValue_lf']=0; centralExport['A_C_elecValue_lf']=0;
			centralExport['A_C_plantValue_wfg']=0; centralExport['A_C_meatValue_wfg']=0; centralExport['A_C_diaryValue_wfg']=0; 
			centralExport['A_C_fossilValue_wfg']=0; centralExport['A_C_bioValue_wfg']=0; centralExport['A_C_elecValue_wfg']=0;
			centralExport['A_C_plantValue_wfb']=0; centralExport['A_C_meatValue_wfb']=0; centralExport['A_C_diaryValue_wfb']=0; 
			centralExport['A_C_fossilValue_wfb']=0; centralExport['A_C_bioValue_wfb']=0; centralExport['A_C_elecValue_wfb']=0;
			
			// Richieste alla regione A da parte della regione D
			centralExport['A_D_plant']="no"; centralExport['A_D_meat']="no"; centralExport['A_D_diary']="no"; 
			centralExport['A_D_fossil']="no"; centralExport['A_D_bio']="no"; centralExport['A_D_elec']="no";
			centralExport['A_D_plantValue_cf']=0; centralExport['A_D_meatValue_cf']=0; centralExport['A_D_diaryValue_cf']=0; 
			centralExport['A_D_fossilValue_cf']=0; centralExport['A_D_bioValue_cf']=0; centralExport['A_D_elecValue_cf']=0;
			centralExport['A_D_plantValue_lf']=0; centralExport['A_D_meatValue_lf']=0; centralExport['A_D_diaryValue_lf']=0; 
			centralExport['A_D_fossilValue_lf']=0; centralExport['A_D_bioValue_lf']=0; centralExport['A_D_elecValue_lf']=0;
			centralExport['A_D_plantValue_wfg']=0; centralExport['A_D_meatValue_wfg']=0; centralExport['A_D_diaryValue_wfg']=0; 
			centralExport['A_D_fossilValue_wfg']=0; centralExport['A_D_bioValue_wfg']=0; centralExport['A_D_elecValue_wfg']=0;
			centralExport['A_D_plantValue_wfb']=0; centralExport['A_D_meatValue_wfb']=0; centralExport['A_D_diaryValue_wfb']=0; 
			centralExport['A_D_fossilValue_wfb']=0; centralExport['A_D_bioValue_wfb']=0; centralExport['A_D_elecValue_wfb']=0;
			
			localStorage.setItem("REGIONA_B_wfg",0);
			localStorage.setItem("REGIONA_B_wfb",0); 
			localStorage.setItem("REGIONA_B_cf",0); 
			localStorage.setItem("REGIONA_B_lf",0);
			
			localStorage.setItem("REGIONA_C_wfg",0);
			localStorage.setItem("REGIONA_C_wfb",0); 
			localStorage.setItem("REGIONA_C_cf",0); 
			localStorage.setItem("REGIONA_C_lf",0);
			
			localStorage.setItem("REGIONA_D_wfg",0);
			localStorage.setItem("REGIONA_D_wfb",0); 
			localStorage.setItem("REGIONA_D_cf",0); 
			localStorage.setItem("REGIONA_D_lf",0);
		} 
		
	//---------------------------------------
		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
			document.getElementById("plantb").disabled=true;
			document.getElementById("meatb").disabled=true;
			document.getElementById("diaryb").disabled=true;
			document.getElementById("fossilb").disabled=true;
			document.getElementById("biofuelb").disabled=true;
			document.getElementById("elb").disabled=true;
			
			var regionB = localStorage.getItem("regionBDataInput");
			regionB = JSON.parse(regionB);
			
			document.getElementById("A8_f").value = regionB['daysp'];
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = regionB['intakeparse'];
			document.getElementById("f_D5").value = regionB['wasteparse'];
			document.getElementById("f_C6").value = regionB['vegparse'];
			document.getElementById("f_C7").value = regionB['vegeparse'];
			document.getElementById("f_C8").value = regionB['meatparse'];
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = regionB['fip'];
			document.getElementById("E31").value = regionB['fim'];
			document.getElementById("E32").value = regionB['fid']; 
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = regionB['Gap_Yeld_parse'];
			document.getElementById("G15").value = regionB['Mulching_parse']; 	
			document.getElementById("G19").value = regionB['Full_Deficit_parse'];
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = regionB['windp'];
			document.getElementById("em_J22").value = regionB['solarp'];
			document.getElementById("em_J23").value = regionB['hydrop'];
			document.getElementById("em_J24").value = regionB['biofuelp'];
			document.getElementById("em_J25").value = regionB['nuclearp'];
			document.getElementById("em_J26").value = regionB['fuelp'];
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = regionB['red_ind_parse'];
			document.getElementById("e_N6").value = regionB['red_tr_parse'];
			document.getElementById("e_N7").value = regionB['red_ser_parse'];
			document.getElementById("e_N8").value = regionB['red_house'];
			document.getElementById("e_N11").value = regionB['el_tr_parse'];  
			document.getElementById("e_N12").value = regionB['fuel_house_parse'];  
			document.getElementById("e_N13").value = regionB['bio_fr_parse'];  
			document.getElementById("L30").value = regionB['fossilf_parse'];
			document.getElementById("L31").value = regionB['biofuels_parse'];
			document.getElementById("L32").value = regionB['elec_parse'];
			document.getElementById("Measure").value = 1;
			
			LoadPlantValue("W");
			LoadMeatValue("W");
			LoadDiaryValue("W");
			LoadFossilValue("W");
			LoadBioValue("W");
			LoadElecValue("W");
			
			// Richieste alla regione B da parte della regione A
			centralExport['B_A_plant']="no"; centralExport['B_A_meat']="no"; centralExport['B_A_diary']="no"; 
			centralExport['B_A_fossil']="no"; centralExport['B_A_bio']="no"; centralExport['B_A_elec']="no";
			centralExport['B_A_plantValue_cf']=0; centralExport['B_A_meatValue_cf']=0; centralExport['B_A_diaryValue_cf']=0; 
			centralExport['B_A_fossilValue_cf']=0; centralExport['B_A_bioValue_cf']=0; centralExport['B_A_elecValue_cf']=0;
			centralExport['B_A_plantValue_lf']=0; centralExport['B_A_meatValue_lf']=0; centralExport['B_A_diaryValue_lf']=0; 
			centralExport['B_A_fossilValue_lf']=0; centralExport['B_A_bioValue_lf']=0; centralExport['B_A_elecValue_lf']=0;
			centralExport['B_A_plantValue_wfg']=0; centralExport['B_A_meatValue_wfg']=0; centralExport['B_A_diaryValue_wfg']=0; 
			centralExport['B_A_fossilValue_wfg']=0; centralExport['B_A_bioValue_wfg']=0; centralExport['B_A_elecValue_wfg']=0;
			centralExport['B_A_plantValue_wfb']=0; centralExport['B_A_meatValue_wfb']=0; centralExport['B_A_diaryValue_wfb']=0; 
			centralExport['B_A_fossilValue_wfb']=0; centralExport['B_A_bioValue_wfb']=0; centralExport['B_A_elecValue_wfb']=0;
			
			// Richieste alla regione B da parte della regione C
			centralExport['B_C_plant']="no"; centralExport['B_C_meat']="no"; centralExport['B_C_diary']="no"; 
			centralExport['B_C_fossil']="no"; centralExport['B_C_bio']="no"; centralExport['B_C_elec']="no";
			centralExport['B_C_plantValue_cf']=0; centralExport['B_C_meatValue_cf']=0; centralExport['B_C_diaryValue_cf']=0; 
			centralExport['B_C_fossilValue_cf']=0; centralExport['B_C_bioValue_cf']=0; centralExport['B_C_elecValue_cf']=0;
			centralExport['B_C_plantValue_lf']=0; centralExport['B_C_meatValue_lf']=0; centralExport['B_C_diaryValue_lf']=0; 
			centralExport['B_C_fossilValue_lf']=0; centralExport['B_C_bioValue_lf']=0; centralExport['B_C_elecValue_lf']=0;
			centralExport['B_C_plantValue_wfg']=0; centralExport['B_C_meatValue_wfg']=0; centralExport['B_C_diaryValue_wfg']=0; 
			centralExport['B_C_fossilValue_wfg']=0; centralExport['B_C_bioValue_wfg']=0; centralExport['B_C_elecValue_wfg']=0;
			centralExport['B_C_plantValue_wfb']=0; centralExport['B_C_meatValue_wfb']=0; centralExport['B_C_diaryValue_wfb']=0; 
			centralExport['B_C_fossilValue_wfb']=0; centralExport['B_C_bioValue_wfb']=0; centralExport['B_C_elecValue_wfb']=0;
			
			// Richieste alla regione B da parte della regione D
			centralExport['B_D_plant']="no"; centralExport['B_D_meat']="no"; centralExport['B_D_diary']="no"; 
			centralExport['B_D_fossil']="no"; centralExport['B_D_bio']="no"; centralExport['B_D_elec']="no";
			centralExport['B_D_plantValue_cf']=0; centralExport['B_D_meatValue_cf']=0; centralExport['B_D_diaryValue_cf']=0; 
			centralExport['B_D_fossilValue_cf']=0; centralExport['B_D_bioValue_cf']=0; centralExport['B_D_elecValue_cf']=0;
			centralExport['B_D_plantValue_lf']=0; centralExport['B_D_meatValue_lf']=0; centralExport['B_D_diaryValue_lf']=0; 
			centralExport['B_D_fossilValue_lf']=0; centralExport['B_D_bioValue_lf']=0; centralExport['B_D_elecValue_lf']=0;
			centralExport['B_D_plantValue_wfg']=0; centralExport['B_D_meatValue_wfg']=0; centralExport['B_D_diaryValue_wfg']=0; 
			centralExport['B_D_fossilValue_wfg']=0; centralExport['B_D_bioValue_wfg']=0; centralExport['B_D_elecValue_wfg']=0;
			centralExport['B_D_plantValue_wfb']=0; centralExport['B_D_meatValue_wfb']=0; centralExport['B_D_diaryValue_wfb']=0; 
			centralExport['B_D_fossilValue_wfb']=0; centralExport['B_D_bioValue_wfb']=0; centralExport['B_D_elecValue_wfb']=0;
		
			localStorage.setItem("REGIONB_A_wfg",0);
			localStorage.setItem("REGIONB_A_wfb",0); 
			localStorage.setItem("REGIONB_A_cf",0); 
			localStorage.setItem("REGIONB_A_lf",0);
			
			localStorage.setItem("REGIONB_C_wfg",0);
			localStorage.setItem("REGIONB_C_wfb",0); 
			localStorage.setItem("REGIONB_C_cf",0); 
			localStorage.setItem("REGIONB_C_lf",0);
			
			localStorage.setItem("REGIONB_D_wfg",0);
			localStorage.setItem("REGIONB_D_wfb",0); 
			localStorage.setItem("REGIONB_D_cf",0); 
			localStorage.setItem("REGIONB_D_lf",0);
		} 

		//---------------------------------
	
		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
			document.getElementById("plantc").disabled=true;
			document.getElementById("meatc").disabled=true;
			document.getElementById("diaryc").disabled=true;
			document.getElementById("fossilc").disabled=true;
			document.getElementById("biofuelc").disabled=true;
			document.getElementById("elc").disabled=true;
			
			var regionC = localStorage.getItem("regionCDataInput");
			regionC = JSON.parse(regionC);
			
			
			document.getElementById("A8_f").value = regionC['daysp'];
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = regionC['intakeparse'];
			document.getElementById("f_D5").value = regionC['wasteparse'];
			document.getElementById("f_C6").value = regionC['vegparse'];
			document.getElementById("f_C7").value = regionC['vegeparse'];
			document.getElementById("f_C8").value = regionC['meatparse'];
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = regionC['fip'];
			document.getElementById("E31").value = regionC['fim'];
			document.getElementById("E32").value = regionC['fid']; 
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = regionC['Gap_Yeld_parse'];
			document.getElementById("G15").value = regionC['Mulching_parse']; 	
			document.getElementById("G19").value = regionC['Full_Deficit_parse'];
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = regionC['windp'];
			document.getElementById("em_J22").value = regionC['solarp'];
			document.getElementById("em_J23").value = regionC['hydrop'];
			document.getElementById("em_J24").value = regionC['biofuelp'];
			document.getElementById("em_J25").value = regionC['nuclearp'];
			document.getElementById("em_J26").value = regionC['fuelp'];
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = regionC['red_ind_parse'];
			document.getElementById("e_N6").value = regionC['red_tr_parse'];
			document.getElementById("e_N7").value = regionC['red_ser_parse'];
			document.getElementById("e_N8").value = regionC['red_house'];
			document.getElementById("e_N11").value = regionC['el_tr_parse'];  
			document.getElementById("e_N12").value = regionC['fuel_house_parse'];  
			document.getElementById("e_N13").value = regionC['bio_fr_parse'];  
			document.getElementById("L30").value = regionC['fossilf_parse'];
			document.getElementById("L31").value = regionC['biofuels_parse'];
			document.getElementById("L32").value = regionC['elec_parse'];
			document.getElementById("Measure").value = 1;
			
			LoadPlantValue("W");
			LoadMeatValue("W");
			LoadDiaryValue("W");
			LoadFossilValue("W");
			LoadBioValue("W");
			LoadElecValue("W");
			
			// Richieste alla regione C da parte della regione A
			centralExport['C_A_plant']="no"; centralExport['C_A_meat']="no"; centralExport['C_A_diary']="no"; 
			centralExport['C_A_fossil']="no"; centralExport['C_A_bio']="no"; centralExport['C_A_elec']="no";
			centralExport['C_A_plantValue_cf']=0; centralExport['C_A_meatValue_cf']=0; centralExport['C_A_diaryValue_cf']=0; 
			centralExport['C_A_fossilValue_cf']=0; centralExport['C_A_bioValue_cf']=0; centralExport['C_A_elecValue_cf']=0;
			centralExport['C_A_plantValue_lf']=0; centralExport['C_A_meatValue_lf']=0; centralExport['C_A_diaryValue_lf']=0; 
			centralExport['C_A_fossilValue_lf']=0; centralExport['C_A_bioValue_lf']=0; centralExport['C_A_elecValue_lf']=0;
			centralExport['C_A_plantValue_wfg']=0; centralExport['C_A_meatValue_wfg']=0; centralExport['C_A_diaryValue_wfg']=0; 
			centralExport['C_A_fossilValue_wfg']=0; centralExport['C_A_bioValue_wfg']=0; centralExport['C_A_elecValue_wfg']=0;
			centralExport['C_A_plantValue_wfb']=0; centralExport['C_A_meatValue_wfb']=0; centralExport['C_A_diaryValue_wfb']=0; 
			centralExport['C_A_fossilValue_wfb']=0; centralExport['C_A_bioValue_wfb']=0; centralExport['C_A_elecValue_wfb']=0;
			
			// Richieste alla regione C da parte della regione B
			centralExport['C_B_plant']="no"; centralExport['C_B_meat']="no"; centralExport['C_B_diary']="no"; 
			centralExport['C_B_fossil']="no"; centralExport['C_B_bio']="no"; centralExport['C_B_elec']="no";
			centralExport['C_B_plantValue_cf']=0; centralExport['C_B_meatValue_cf']=0; centralExport['C_B_diaryValue_cf']=0; 
			centralExport['C_B_fossilValue_cf']=0; centralExport['C_B_bioValue_cf']=0; centralExport['C_B_elecValue_cf']=0;
			centralExport['C_B_plantValue_lf']=0; centralExport['C_B_meatValue_lf']=0; centralExport['C_B_diaryValue_lf']=0; 
			centralExport['C_B_fossilValue_lf']=0; centralExport['C_B_bioValue_lf']=0; centralExport['C_B_elecValue_lf']=0;
			centralExport['C_B_plantValue_wfg']=0; centralExport['C_B_meatValue_wfg']=0; centralExport['C_B_diaryValue_wfg']=0; 
			centralExport['C_B_fossilValue_wfg']=0; centralExport['C_B_bioValue_wfg']=0; centralExport['C_B_elecValue_wfg']=0;
			centralExport['C_B_plantValue_wfb']=0; centralExport['C_B_meatValue_wfb']=0; centralExport['C_B_diaryValue_wfb']=0; 
			centralExport['C_B_fossilValue_wfb']=0; centralExport['C_B_bioValue_wfb']=0; centralExport['C_B_elecValue_wfb']=0;
			
			// Richieste alla regione C da parte della regione D
			centralExport['C_D_plant']="no"; centralExport['C_D_meat']="no"; centralExport['C_D_diary']="no"; 
			centralExport['C_D_fossil']="no"; centralExport['C_D_bio']="no"; centralExport['C_D_elec']="no";
			centralExport['C_D_plantValue_cf']=0; centralExport['C_D_meatValue_cf']=0; centralExport['C_D_diaryValue_cf']=0; 
			centralExport['C_D_fossilValue_cf']=0; centralExport['C_D_bioValue_cf']=0; centralExport['C_D_elecValue_cf']=0;
			centralExport['C_D_plantValue_lf']=0; centralExport['C_D_meatValue_lf']=0; centralExport['C_D_diaryValue_lf']=0; 
			centralExport['C_D_fossilValue_lf']=0; centralExport['C_D_bioValue_lf']=0; centralExport['C_D_elecValue_lf']=0;
			centralExport['C_D_plantValue_wfg']=0; centralExport['C_D_meatValue_wfg']=0; centralExport['C_D_diaryValue_wfg']=0; 
			centralExport['C_D_fossilValue_wfg']=0; centralExport['C_D_bioValue_wfg']=0; centralExport['C_D_elecValue_wfg']=0;
			centralExport['C_D_plantValue_wfb']=0; centralExport['C_D_meatValue_wfb']=0; centralExport['C_D_diaryValue_wfb']=0; 
			centralExport['C_D_fossilValue_wfb']=0; centralExport['C_D_bioValue_wfb']=0; centralExport['C_D_elecValue_wfb']=0;
			
			localStorage.setItem("REGIONC_A_wfg",0);
			localStorage.setItem("REGIONC_A_wfb",0); 
			localStorage.setItem("REGIONC_A_cf",0); 
			localStorage.setItem("REGIONC_A_lf",0);
			
			localStorage.setItem("REGIONC_B_wfg",0);
			localStorage.setItem("REGIONC_B_wfb",0); 
			localStorage.setItem("REGIONC_B_cf",0); 
			localStorage.setItem("REGIONC_B_lf",0);
			
			localStorage.setItem("REGIONC_D_wfg",0);
			localStorage.setItem("REGIONC_D_wfb",0); 
			localStorage.setItem("REGIONC_D_cf",0); 
			localStorage.setItem("REGIONC_D_lf",0);
		}
		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
			document.getElementById("plantd").disabled=true;
			document.getElementById("meatd").disabled=true;
			document.getElementById("diaryd").disabled=true;
			document.getElementById("fossild").disabled=true;
			document.getElementById("biofueld").disabled=true;
			document.getElementById("eld").disabled=true;
			
			var regionD = localStorage.getItem("regionDDataInput");
			regionD = JSON.parse(regionD);
			
			document.getElementById("A8_f").value = regionD['daysp'];
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = regionD['intakeparse'];
			document.getElementById("f_D5").value = regionD['wasteparse'];
			document.getElementById("f_C6").value = regionD['vegparse'];
			document.getElementById("f_C7").value = regionD['vegeparse'];
			document.getElementById("f_C8").value = regionD['meatparse'];
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = regionD['fip'];
			document.getElementById("E31").value = regionD['fim'];
			document.getElementById("E32").value = regionD['fid']; 
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = regionD['Gap_Yeld_parse'];
			document.getElementById("G15").value = regionD['Mulching_parse']; 	
			document.getElementById("G19").value = regionD['Full_Deficit_parse'];
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = regionD['windp'];
			document.getElementById("em_J22").value = regionD['solarp'];
			document.getElementById("em_J23").value = regionD['hydrop'];
			document.getElementById("em_J24").value = regionD['biofuelp'];
			document.getElementById("em_J25").value = regionD['nuclearp'];
			document.getElementById("em_J26").value = regionD['fuelp'];
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = regionD['red_ind_parse'];
			document.getElementById("e_N6").value = regionD['red_tr_parse'];
			document.getElementById("e_N7").value = regionD['red_ser_parse'];
			document.getElementById("e_N8").value = regionD['red_house'];
			document.getElementById("e_N11").value = regionD['el_tr_parse'];  
			document.getElementById("e_N12").value = regionD['fuel_house_parse'];  
			document.getElementById("e_N13").value = regionD['bio_fr_parse'];  
			document.getElementById("L30").value = regionD['fossilf_parse'];
			document.getElementById("L31").value = regionD['biofuels_parse'];
			document.getElementById("L32").value = regionD['elec_parse'];
			document.getElementById("Measure").value = 1;
			
			LoadPlantValue("W");
			LoadMeatValue("W");
			LoadDiaryValue("W");
			LoadFossilValue("W");
			LoadBioValue("W");
			LoadElecValue("W");
			
			// Richieste alla regione D da parte della regione A
			centralExport['D_A_plant']="no"; centralExport['D_A_meat']="no"; centralExport['D_A_diary']="no"; 
			centralExport['D_A_fossil']="no"; centralExport['D_A_bio']="no"; centralExport['D_A_elec']="no";
			centralExport['D_A_plantValue_cf']=0; centralExport['D_A_meatValue_cf']=0; centralExport['D_A_diaryValue_cf']=0; 
			centralExport['D_A_fossilValue_cf']=0; centralExport['D_A_bioValue_cf']=0; centralExport['D_A_elecValue_cf']=0;
			centralExport['D_A_plantValue_lf']=0; centralExport['D_A_meatValue_lf']=0; centralExport['D_A_diaryValue_lf']=0; 
			centralExport['D_A_fossilValue_lf']=0; centralExport['D_A_bioValue_lf']=0; centralExport['D_A_elecValue_lf']=0;
			centralExport['D_A_plantValue_wfg']=0; centralExport['D_A_meatValue_wfg']=0; centralExport['D_A_diaryValue_wfg']=0; 
			centralExport['D_A_fossilValue_wfg']=0; centralExport['D_A_bioValue_wfg']=0; centralExport['D_A_elecValue_wfg']=0;
			centralExport['D_A_plantValue_wfb']=0; centralExport['D_A_meatValue_wfb']=0; centralExport['D_A_diaryValue_wfb']=0; 
			centralExport['D_A_fossilValue_wfb']=0; centralExport['D_A_bioValue_wfb']=0; centralExport['D_A_elecValue_wfb']=0;
			
			// Richieste alla regione D da parte della regione B
			centralExport['D_B_plant']="no"; centralExport['D_B_meat']="no"; centralExport['D_B_diary']="no"; 
			centralExport['D_B_fossil']="no"; centralExport['D_B_bio']="no"; centralExport['D_B_elec']="no";
			centralExport['D_B_plantValue_cf']=0; centralExport['D_B_meatValue_cf']=0; centralExport['D_B_diaryValue_cf']=0; 
			centralExport['D_B_fossilValue_cf']=0; centralExport['D_B_bioValue_cf']=0; centralExport['D_B_elecValue_cf']=0;
			centralExport['D_B_plantValue_lf']=0; centralExport['D_B_meatValue_lf']=0; centralExport['D_B_diaryValue_lf']=0; 
			centralExport['D_B_fossilValue_lf']=0; centralExport['D_B_bioValue_lf']=0; centralExport['D_B_elecValue_lf']=0;
			centralExport['D_B_plantValue_wfg']=0; centralExport['D_B_meatValue_wfg']=0; centralExport['D_B_diaryValue_wfg']=0; 
			centralExport['D_B_fossilValue_wfg']=0; centralExport['D_B_bioValue_wfg']=0; centralExport['D_B_elecValue_wfg']=0;
			centralExport['D_B_plantValue_wfb']=0; centralExport['D_B_meatValue_wfb']=0; centralExport['D_B_diaryValue_wfb']=0; 
			centralExport['D_B_fossilValue_wfb']=0; centralExport['D_B_bioValue_wfb']=0; centralExport['D_B_elecValue_wfb']=0;
			
			// Richieste alla regione D da parte della regione C
			centralExport['D_C_plant']="no"; centralExport['D_C_meat']="no"; centralExport['D_C_diary']="no"; 
			centralExport['D_C_fossil']="no"; centralExport['D_C_bio']="no"; centralExport['D_C_elec']="no";
			centralExport['D_C_plantValue_cf']=0; centralExport['D_C_meatValue_cf']=0; centralExport['D_C_diaryValue_cf']=0; 
			centralExport['D_C_fossilValue_cf']=0; centralExport['D_C_bioValue_cf']=0; centralExport['D_C_elecValue_cf']=0;
			centralExport['D_C_plantValue_lf']=0; centralExport['D_C_meatValue_lf']=0; centralExport['D_C_diaryValue_lf']=0; 
			centralExport['D_C_fossilValue_lf']=0; centralExport['D_C_bioValue_lf']=0; centralExport['D_C_elecValue_lf']=0;
			centralExport['D_C_plantValue_wfg']=0; centralExport['D_C_meatValue_wfg']=0; centralExport['D_C_diaryValue_wfg']=0; 
			centralExport['D_C_fossilValue_wfg']=0; centralExport['D_C_bioValue_wfg']=0; centralExport['D_C_elecValue_wfg']=0;
			centralExport['D_C_plantValue_wfb']=0; centralExport['D_C_meatValue_wfb']=0; centralExport['D_C_diaryValue_wfb']=0; 
			centralExport['D_C_fossilValue_wfb']=0; centralExport['D_C_bioValue_wfb']=0; centralExport['D_C_elecValue_wfb']=0;
			
			localStorage.setItem("REGIOND_A_wfg",0);
			localStorage.setItem("REGIOND_A_wfb",0); 
			localStorage.setItem("REGIOND_A_cf",0); 
			localStorage.setItem("REGIOND_A_lf",0);
			
			localStorage.setItem("REGIOND_B_wfg",0);
			localStorage.setItem("REGIOND_B_wfb",0); 
			localStorage.setItem("REGIOND_B_cf",0); 
			localStorage.setItem("REGIOND_B_lf",0);
			
			localStorage.setItem("REGIOND_C_wfg",0);
			localStorage.setItem("REGIOND_C_wfb",0); 
			localStorage.setItem("REGIOND_C_cf",0); 
			localStorage.setItem("REGIOND_C_lf",0);
		} else {}
}

// Le funzioni LoadPlant-Meat-Diary-Fossil-Bio-Elec vengono scritte e caricate dentro localData3
// Ma lascio queste commentate in caso di necessità
/*
function LoadPlantValue(plantValue) {
	////alert("Nuova Regione: "+document.querySelector('input[name="region"]:checked').getAttribute('id'));
	////alert("Plant Value: "+plantValue);
	var plantRadio = document.getElementsByName('checkbuttonsplant');
  	for(var i = 0; i < plantRadio.length; i++) {
    	var label = document.getElementById("labelPlant"+plantRadio[i].value);
    	////alert("Valore di label: "+label);
    	if(plantRadio[i].value == plantValue) {
        	plantRadio[i].checked = true;
        	////alert("Plant caricato: "+plantRadio[i].value);
        	////alert("classList TRUE: "+label.classList);
        	label.classList.add('active');
        	////alert("NUOVO classList TRUE: "+label.classList);
      	}
      	else {
			plantRadio[i].checked = false;
			////alert("classList FALSE: "+label.classList);
			////alert("Contiene active PRIMA? "+label.classList.contains('active'));
        	if(label.classList.contains('active')) {
        		label.classList.remove('active');
        	}
        	////alert("Contiene active DOPO? "+label.classList.contains('active'));
        	////alert("NUOVO classList FALSE: "+label.classList);
		}
      	////alert("Plant "+plantRadio[i].value+" checked: "+plantRadio[i].checked);
  	}
}

function LoadMeatValue(meatValue) {
	var meatRadio = document.getElementsByName('checkbuttonsmeat');
  	for(var i = 0; i < meatRadio.length; i++){
  		var label = document.getElementById("labelMeat"+meatRadio[i].value);
    	if(meatRadio[i].value == meatValue){
        	meatRadio[i].checked = true;
        	label.classList.add('active');
        	////alert("Meat caricato: "+meatRadio[i].value);
      	}
      	else {
			meatRadio[i].checked = false;
			if(label.classList.contains('active')) {
        		label.classList.remove('active');
        	}
		}
      	////alert("Meat "+meatRadio[i].value+" checked: "+meatRadio[i].checked);
  	}
}

function LoadDiaryValue(diaryValue) {
	var diaryRadio = document.getElementsByName('checkbuttonsdiary');
  	for(var i = 0; i < diaryRadio.length; i++){
    	var label = document.getElementById("labelDiary"+diaryRadio[i].value);
    	if(diaryRadio[i].value == diaryValue){
        	diaryRadio[i].checked = true;
        	label.classList.add('active');
      		////alert("Diary caricato: "+diaryRadio[i].value);
      	}
      	else {
			diaryRadio[i].checked = false;
			if(label.classList.contains('active')) {
        		label.classList.remove('active');
        	}
		}
      	////alert("Diary "+diaryRadio[i].value+" checked: "+diaryRadio[i].checked);
  	}
}

function LoadFossilValue(fossilValue) {
	var fossilRadio = document.getElementsByName('checkbuttonsfossil');
  	for(var i = 0; i < fossilRadio.length; i++){
  		////alert("Valore value: "+fossilRadio[i].value);
  		////alert("Name: labelFossil"+fossilRadio[i].value);
  		var label = document.getElementById("labelFossil"+fossilRadio[i].value);
    	////alert("Valore di label: "+label);
    	if(fossilRadio[i].value == fossilValue){
        	fossilRadio[i].checked = true;
        	label.classList.add('active');
      		////alert("Fossil caricato: "+fossilRadio[i].value);
      	}
      	else {
			fossilRadio[i].checked = false;
			if(label.classList.contains('active')) {
        		label.classList.remove('active');
        	}
		}
      	////alert("Fossil "+fossilRadio[i].value+" checked: "+fossilRadio[i].checked);
  	}
}

function LoadBioValue(bioValue) {
	var bioRadio = document.getElementsByName('checkbuttonsbio');
  	for(var i = 0; i < bioRadio.length; i++){
    	var label = document.getElementById("labelBio"+bioRadio[i].value);
    	if(bioRadio[i].value == bioValue){
        	bioRadio[i].checked = true;
        	label.classList.add('active');
        	////alert("Bio caricato: "+bioRadio[i].value);
      	}
      	else {
			bioRadio[i].checked = false;
			if(label.classList.contains('active')) {
        		label.classList.remove('active');
        	}
		}
      	////alert("Bio "+bioRadio[i].value+" checked: "+bioRadio[i].checked);
  	}
}

function LoadElecValue(elecValue) {
	var elecRadio = document.getElementsByName('checkbuttonselec');
  	for(var i = 0; i < elecRadio.length; i++){
    	var label = document.getElementById("labelElec"+elecRadio[i].value);
    	if(elecRadio[i].value == elecValue){
        	elecRadio[i].checked = true;
        	label.classList.add('active');
      		////alert("Elec caricato: "+elecRadio[i].value);
      	}
      	else {
			elecRadio[i].checked = false;
			if(label.classList.contains('active')) {
        		label.classList.remove('active');
        	}
		}
      	////alert("Elec "+elecRadio[i].value+" checked: "+elecRadio[i].checked);
  	}
}
*/