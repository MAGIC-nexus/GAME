//alert("Sono dentro loginGlobal");

var User = document.getElementById("username").value;
var selectRegion = document.getElementById("SelectRegionLogin").value;	
var selectVersion = document.getElementById("SelectVersionGame").value;

var count = 0;


function loginStorage() {
	
	localStorage.setItem("el_tr_parse_A", count);
	localStorage.setItem("el_tr_parse_B", count);
	localStorage.setItem("el_tr_parse_C", count);
	localStorage.setItem("el_tr_parse_D", count);

	localStorage.setItem("bio_fr_parse_A", count);
	localStorage.setItem("bio_fr_parse_B", count);
	localStorage.setItem("bio_fr_parse_C", count);
	localStorage.setItem("bio_fr_parse_D", count);
	
	
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
	var B_security_food = 3115.48776; var B_security_energy = 161;

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
	
	
	//---------- REGION A YELD ETC.
	/*var A_YG_closing_WFb = 0;  var A_Mulching_WFb = 0;
	 var A_YG_closing_CF = 0;  var A_Mulching_CF = 0; var A_Deficit_Irrigation_CF = 0;  var A_Deficit_Mul_CF = 0;
	 var A_Deficit_Mul_Drip_CF = 0;
	 var A_YG_closing_LF = 0.17;  var A_Mulching_LF = 0.25;
	 var A_YG_closing_WFg = 0.17; var A_Mulching_WFg = 0.25;
	 var A_Deficit_Irrigation_LF = -0.10;  var A_Deficit_Mul_LF = -0.10;
	 var A_Deficit_Irrigation_WFg = -0.08;
	 var A_Deficit_Mul_WFg = 0.02;  var A_Deficit_Irrigation_WFb = 0.15;  var A_Deficit_Mul_WFb = 0.30;
	 var A_Deficit_Mul_Drip_LF = -0.02;  var A_Deficit_Mul_Drip_WFg = 0.05; 
	 var A_Deficit_Mul_Drip_WFb = 0.35;  var A_Rainfed = 0.84;
	 var A_Irrigated = 1-Rainfed;
	 
	 //------- REGION B YELD ETC.
	 
	 var B_YG_closing_WFb = 0;  var B_Mulching_WFb = 0;
	 var B_YG_closing_CF = 0;  var B_Mulching_CF = 0;
	 var B_Deficit_Irrigation_CF = 0;  var B_Deficit_Mul_CF = 0;
	 var B_Deficit_Mul_Drip_CF = 0;
	 var B_YG_closing_LF = 0.26;  var B_Mulching_LF = 0.25;
	 var B_YG_closing_WFg = 0.26; var B_Mulching_WFg = 0.25;
	 var B_Deficit_Irrigation_LF = -0.10; 
	 var B_Deficit_Mul_LF = -0.10;
	 var B_Deficit_Irrigation_WFg = -0.08;
	 var B_Deficit_Mul_WFg = 0.02; 
	 var B_Deficit_Irrigation_WFb = 0.15; 
	 var B_Deficit_Mul_WFb = 0.30;
	 var B_Deficit_Mul_Drip_LF = -0.02; 
	 var B_Deficit_Mul_Drip_WFg = 0.05; 
	 var B_Deficit_Mul_Drip_WFb = 0.35;	
	 
	 var B_Rainfed = 0.96;
	 var B_Irrigated = 1-Rainfed;
	 
	 //------ REGION C YELD ETC.
	 var C_YG_closing_WFb = 0;  var C_Mulching_WFb = 0;
	 var C_YG_closing_CF = 0;  var C_Mulching_CF = 0;
	 var C_Deficit_Irrigation_CF = 0;  var C_Deficit_Mul_CF = 0;
	 var C_Deficit_Mul_Drip_CF = 0;
	 var C_YG_closing_LF = 0.33;  var C_Mulching_LF = 0.25;
	 var C_YG_closing_WFg = 0.33; var C_Mulching_WFg = 0.25;
	 var C_Deficit_Irrigation_LF = -0.10; 
	 var C_Deficit_Mul_LF = -0.10;
	 var C_Deficit_Irrigation_WFg = -0.08;
	 var C_Deficit_Mul_WFg = 0.02; 
	 var C_Deficit_Irrigation_WFb = 0.15; 
	 var C_Deficit_Mul_WFb = 0.30;
	 var C_Deficit_Mul_Drip_LF = -0.02; 
	 var C_Deficit_Mul_Drip_WFg = 0.05; 
	 var C_Deficit_Mul_Drip_WFb = 0.35;	
	
	 var C_Rainfed = 0.89;
	 var C_Irrigated = 1-Rainfed;
	 //------ REGION D
	 
	 var D_YG_closing_WFb = 0;  var D_Mulching_WFb = 0;
	 var D_YG_closing_CF = 0;  var D_Mulching_CF = 0;
	 var D_Deficit_Irrigation_CF = 0;  var D_Deficit_Mul_CF = 0;
	 var D_Deficit_Mul_Drip_CF = 0;
	 var D_YG_closing_LF = 0.33;  var D_Mulching_LF = 0.25;
	 var D_YG_closing_WFg = 0.33; var D_Mulching_WFg = 0.25;
	 var D_Deficit_Irrigation_LF = -0.10; 
	 var D_Deficit_Mul_LF = -0.10;
	 var D_Deficit_Irrigation_WFg = -0.08;
	 var D_Deficit_Mul_WFg = 0.02; 
	 var D_Deficit_Irrigation_WFb = 0.15; 
	 var D_Deficit_Mul_WFb = 0.30;
	 var D_Deficit_Mul_Drip_LF = -0.02; 
	 var D_Deficit_Mul_Drip_WFg = 0.05; 
	 var D_Deficit_Mul_Drip_WFb = 0.35;	
	 
	 var D_Rainfed = 0.89;
	 var D_Irrigated = 1-Rainfed;*/
	 
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
	};
	localStorage.setItem("regionDDataOutput", JSON.stringify(D_DataOutput));
	//alert("Foglio D Output: "+localStorage.getItem("regionDDataOutput"));
	// ============================================================================================================================================================
	
	//alert("VARIABILI PRESE: "+localStorage.getItem("User")+ " "+localStorage.getItem("RegionLogin")+" "+localStorage.getItem("GameVersion"));
	//alert("Region: "+selectRegion);
		
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
		// =================================== WORLD SECURITY FOOD/ENERGY ===================================================================================
		WORLD_DataOutput = {
			WORLD_A_security_food:'761', WORLD_B_security_food:'77', WORLD_C_security_food:'467', WORLD_D_security_food:'0',
			WORLD_A_security_energy:'83', WORLD_B_security_energy:'77', WORLD_C_security_energy:'117', WORLD_D_security_energy:'94' 	
		}
		localStorage.setItem("WORLDDataOutput", JSON.stringify(WORLD_DataOutput));
	
		// =================================== VALORI DELLE REGIONI CHE VENGONO CONTROLLATI IN OVERVIEW EU - TARGET =========================================
		currents = {
			current_A_land:25.1, current_B_land:-15.8, current_C_land:70.5, current_D_land:-11.7,
			current_A_green:42.7, current_B_green:-67.4, current_C_green:-7.0, current_D_green:-32.5,
			current_A_blue:-50.0, current_B_blue:-79.6, current_C_blue:20.6, current_D_blue:38.6
		}
		localStorage.setItem("currents", JSON.stringify(currents));
		
		var EU_CF_initial_value = 20.3769358104986;
		EU_security_emissions = {
			food:94.5, energy:70, carbon:(0.8*EU_CF_initial_value)
		}
		localStorage.setItem("EU", JSON.stringify(EU_security_emissions));
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
}