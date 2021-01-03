//alert("Sono dentro loginGlobal");
localStorage.setItem("trade_is_called",'0');
localStorage.setItem("empty_is_called",'0');

console.log("TRADE "+localStorage.getItem("trade_is_called"));

	var User = document.getElementById("username").value;
	var selectRegion = document.getElementById("SelectRegionLogin").value;	
	var selectVersion = document.getElementById("SelectVersionGame").value;
	var count = 0;

window.addEventListener("load", function () {
	loginStorage();
});


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
		
		// Registrazione titoli dei grafici di sotto utilizzati per i grafici di EU e per i calcoli di EU sotto e carbon emission
		EU_A_sotto_cf:19.4, EU_A_sotto_lf:12.8, EU_A_sotto_wfg:4926, EU_A_sotto_wfb:706,
		
		// Valori di security food ed energy della regione in cui ci si trova
		security_food:A_security_food, security_energy:A_security_energy,
		
		// Registrazione dei calcoli effettuati da Security Region A, riguardanti i  valori legati agli import di B-C-D, utilizzati in grafici-security.js
		InRegionB_food:0, InRegionC_food:0, InRegionD_food:0,
		InRegionB_energy:0, InRegionC_energy:0, InRegionD_energy:0,
		// Registrazione di Footprint Reduction Food Production with input prodotto da Region A 
		// utilizzati in grafici-sopra-ok-console.js utilizzati dai calcoli di export Food con i bottoni A
		A_totCFyeld:0, A_totLFyeld:0, A_totWFGyeld:0, A_totWFByeld:0,
		
		/*
		A_plantcf:A_plantcf, A_plantlf:A_plantlf, A_plantwfg:A_plantwfg, A_plantwfb:A_plantwfb,
		A_meatcf:A_meatcf, A_meatlf:A_meatlf, A_meatwfg:A_meatwfg, A_meatwfb:A_meatwfb,
		A_diarycf:A_diarycf, A_diarylf:A_diarylf, A_diarywfg:A_diarywfg, A_diarywfb:A_diarywfb,
		A_fossilcf:A_fossilcf, A_fossillf:A_fossillf, A_fossilwfg:A_fossilwfg, A_fossilwfb:A_fossilwfb,
		A_biocf:A_biocf, A_biolf:A_biolf, A_biowfg:A_biowfg, A_biowfb:A_biowfb,
		A_elecf:A_elecf, A_elelf:A_elelf, A_elewfg:A_elewfg, A_elewfb:A_elewfb,
		*/
		
		// Salvataggio degli input Energy Mix associati alla regione
		windp:'12', solarp:'3', hydrop:'18', biofuelp:'3', nuclearp:'4', fuelp:'60',
		
		// Registrazione delle combinazioni (Regione che riceve la richiesta + Regione che fa la richiesta + categoria della richiesta + grafico a cui è associato)
		// In questo caso B-C-D ricevono -> A fa le richiesta
		// ES: B_A_plantValue_cf - C_A_meatValue_lf - D_A_diaryValue_wfg - B_A_bioValue_wfb
		B_A_plantValue_cf:0, B_A_plantValue_lf:0, B_A_plantValue_wfg:0, B_A_plantValue_wfb:0,
		B_A_meatValue_cf:0, B_A_meatValue_lf:0, B_A_meatValue_wfg:0, B_A_meatValue_wfb:0,
		B_A_diaryValue_cf:0, B_A_diaryValue_lf:0, B_A_diaryValue_wfg:0, B_A_diaryValue_wfb:0,
		B_A_fossilValue_cf:0, B_A_fossilValue_lf:0, B_A_fossilValue_wfg:0, B_A_fossilValue_wfb:0,
		B_A_bioValue_cf:0, B_A_bioValue_lf:0, B_A_bioValue_wfg:0, B_A_bioValue_wfb:0,
		B_A_elecValue_cf:0, B_A_elecValue_lf:0, B_A_elecValue_wfg:0, B_A_elecValue_wfb:0,
		
		C_A_plantValue_cf:0, C_A_plantValue_lf:0, C_A_plantValue_wfg:0, C_A_plantValue_wfb:0,
		C_A_meatValue_cf:0, C_A_meatValue_lf:0, C_A_meatValue_wfg:0, C_A_meatValue_wfb:0,
		C_A_diaryValue_cf:0, C_A_diaryValue_lf:0, C_A_diaryValue_wfg:0, C_A_diaryValue_wfb:0,
		C_A_fossilValue_cf:0, C_A_fossilValue_lf:0, C_A_fossilValue_wfg:0, C_A_fossilValue_wfb:0,
		C_A_bioValue_cf:0, C_A_bioValue_lf:0, C_A_bioValue_wfg:0, C_A_bioValue_wfb:0,
		C_A_elecValue_cf:0, C_A_elecValue_lf:0, C_A_elecValue_wfg:0, C_A_elecValue_wfb:0,
		
		D_A_plantValue_cf:0, D_A_plantValue_lf:0, D_A_plantValue_wfg:0, D_A_plantValue_wfb:0,
		D_A_meatValue_cf:0, D_A_meatValue_lf:0, D_A_meatValue_wfg:0, D_A_meatValue_wfb:0,
		D_A_diaryValue_cf:0, D_A_diaryValue_lf:0, D_A_diaryValue_wfg:0, D_A_diaryValue_wfb:0,
		D_A_fossilValue_cf:0, D_A_fossilValue_lf:0, D_A_fossilValue_wfg:0, D_A_fossilValue_wfb:0,
		D_A_bioValue_cf:0, D_A_bioValue_lf:0, D_A_bioValue_wfg:0, D_A_bioValue_wfb:0,
		D_A_elecValue_cf:0, D_A_elecValue_lf:0, D_A_elecValue_wfg:0, D_A_elecValue_wfb:0,
		
		// Valori utilizzati registrati dentro il file susteinable-limits.js, utilizzati da target-score.js per cacolare il punteggio finale
		current_A_land:25.1, current_A_green:42.7, current_A_blue:-50.0,
		
		// Registrzione dei calcoli effettuati da Security Region A riguardante i valori legati a World, utilizzati in grafici-security.js
		WORLD_A_security_food:'0', WORLD_A_security_energy:'91', wfg_ext:0, wfb_ext:0,
		cf_ext:0, lf_ext:0,
		
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

		
		EU_B_sotto_cf:16.0, EU_B_sotto_lf:17.6, EU_B_sotto_wfg:4268, EU_B_sotto_wfb:779,
		security_food:B_security_food, security_energy:B_security_energy,
		
		// Registrazione dei calcoli effettuati da Security Region B, riguardanti i  valori legati agli import di A-C-D, utilizzati in grafici-security.js
		InRegionA_food:0, InRegionC_food:0, InRegionD_food:0,
		InRegionA_energy:0, InRegionC_energy:0, InRegionD_energy:0,
		// Registrazione di Footprint Reduction Food Production with input prodotto da Region B 
		// utilizzati in grafici-sopra-ok-console.js utilizzati dai calcoli di export Food con i bottoni B
		B_totCFyeld:0, B_totLFyeld:0, B_totWFGyeld:0, B_totWFByeld:0,
		
		/*
		B_plantcf:B_plantcf, B_plantlf:B_plantlf, B_plantwfg:B_plantwfg, B_plantwfb:B_plantwfb,
		B_meatcf:B_meatcf, B_meatlf:B_meatlf, B_meatwfg:B_meatwfg, B_meatwfb:B_meatwfb,
		B_diarycf:B_diarycf, B_diarylf:B_diarylf, B_diarywfg:B_diarywfg, B_diarywfb:B_diarywfb,
		B_fossilcf:B_fossilcf, B_fossillf:B_fossillf, B_fossilwfg:B_fossilwfg, B_fossilwfb:B_fossilwfb,
		B_biocf:B_biocf, B_biolf:B_biolf, B_biowfg:B_biowfg, B_biowfb:B_biowfb,
		B_elecf:B_elecf, B_elelf:B_elelf, B_elewfg:B_elewfg, B_elewfb:B_elewfb,
		*/
		
		// Salvataggio input Energy Mix associati alla regione
		windp:'8', solarp:'1', hydrop:'21', biofuelp:'8', nuclearp:'34', fuelp:'28',
		
		// Registrazione delle combinazioni (Regione che riceve la richiesta + Regione che fa la richiesta + categoria della richiesta + grafico a cui è associato)
		// In questo caso A-C-D ricevono -> B fa le richiesta
		// ES: A_B_plantValue_cf - C_B_meatValue_lf - D_B_diaryValue_wfg - A_B_bioValue_wfb
		A_B_plantValue_cf:0, A_B_plantValue_lf:0, A_B_plantValue_wfg:0, A_B_plantValue_wfb:0,
		A_B_meatValue_cf:0, A_B_meatValue_lf:0, A_B_meatValue_wfg:0, A_B_meatValue_wfb:0,
		A_B_diaryValue_cf:0, A_B_diaryValue_lf:0, A_B_diaryValue_wfg:0, A_B_diaryValue_wfb:0,
		A_B_fossilValue_cf:0, A_B_fossilValue_lf:0, A_B_fossilValue_wfg:0, A_B_fossilValue_wfb:0,
		A_B_bioValue_cf:0, A_B_bioValue_lf:0, A_B_bioValue_wfg:0, A_B_bioValue_wfb:0,
		A_B_elecValue_cf:0, A_B_elecValue_lf:0, A_B_elecValue_wfg:0, A_B_elecValue_wfb:0,
		
		C_B_plantValue_cf:0, C_B_plantValue_lf:0, C_B_plantValue_wfg:0, C_B_plantValue_wfb:0,
		C_B_meatValue_cf:0, C_B_meatValue_lf:0, C_B_meatValue_wfg:0, C_B_meatValue_wfb:0,
		C_B_diaryValue_cf:0, C_B_diaryValue_lf:0, C_B_diaryValue_wfg:0, C_B_diaryValue_wfb:0,
		C_B_fossilValue_cf:0, C_B_fossilValue_lf:0, C_B_fossilValue_wfg:0, C_B_fossilValue_wfb:0,
		C_B_bioValue_cf:0, C_B_bioValue_lf:0, C_B_bioValue_wfg:0, C_B_bioValue_wfb:0,
		C_B_elecValue_cf:0, C_B_elecValue_lf:0, C_B_elecValue_wfg:0, C_B_elecValue_wfb:0,
		
		D_B_plantValue_cf:0, D_B_plantValue_lf:0, D_B_plantValue_wfg:0, D_B_plantValue_wfb:0,
		D_B_meatValue_cf:0, D_B_meatValue_lf:0, D_B_meatValue_wfg:0, D_B_meatValue_wfb:0,
		D_B_diaryValue_cf:0, D_B_diaryValue_lf:0, D_B_diaryValue_wfg:0, D_B_diaryValue_wfb:0,
		D_B_fossilValue_cf:0, D_B_fossilValue_lf:0, D_B_fossilValue_wfg:0, D_B_fossilValue_wfb:0,
		D_B_bioValue_cf:0, D_B_bioValue_lf:0, D_B_bioValue_wfg:0, D_B_bioValue_wfb:0,
		D_B_elecValue_cf:0, D_B_elecValue_lf:0, D_B_elecValue_wfg:0, D_B_elecValue_wfb:0,
		
		// Valori utilizzati registrati dentro il file susteinable-limits.js, utilizzati da target-score.js per cacolare il punteggio finale
		current_B_land:-15.8, current_B_green:-67.4, current_B_blue:-79.6,
		
		// Registrzione dei calcoli effettuati da Security Region B riguardante i valori legati a World, utilizzati in grafici-security.js
		WORLD_B_security_food:'77', WORLD_B_security_energy:'77',
		wfg_ext:0, wfb_ext:0, cf_ext:0, lf_ext:0,
		
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
		
		EU_C_sotto_cf:21.7, EU_C_sotto_lf:14.0, EU_C_sotto_wfg:2204, EU_C_sotto_wfb:316,
		security_food:C_security_food, security_energy:C_security_energy,
		
		// Registrazione dei calcoli effettuati da Security Region C, riguardanti i  valori legati agli import di A-B-D, utilizzati in grafici-security.js
		InRegionA_food:0, InRegionB_food:0, InRegionD_food:0,
		InRegionA_energy:0, InRegionB_energy:0, InRegionD_energy:0,
		
		// Registrazione di Footprint Reduction Food Production with input prodotto da Region C 
		// utilizzati in grafici-sopra-ok-console.js utilizzati dai calcoli di export Food con i bottoni C
		C_totCFyeld:0, C_totLFyeld:0, C_totWFGyeld:0, C_totWFByeld:0,
		
		/*
		C_plantcf:C_plantcf, C_plantlf:C_plantlf, C_plantwfg:C_plantwfg, C_plantwfb:C_plantwfb,
		C_meatcf:C_meatcf, C_meatlf:C_meatlf, C_meatwfg:C_meatwfg, C_meatwfb:C_meatwfb,
		C_diarycf:C_diarycf, C_diarylf:C_diarylf, C_diarywfg:C_diarywfg, C_diarywfb:C_diarywfb,
		C_fossilcf:C_fossilcf, C_fossillf:C_fossillf, C_fossilwfg:C_fossilwfg, C_fossilwfb:C_fossilwfb,
		C_biocf:C_biocf, C_biolf:C_biolf, C_biowfg:C_biowfg, C_biowfb:C_biowfb,
		C_elecf:C_elecf, C_elelf:C_elelf, C_elewfg:C_elewfg, C_elewfb:C_elewfb,
		*/
		
		// Salvataggio input Energy Mix associati alla regione
		windp:'12', solarp:'6', hydrop:'6', biofuelp:'7', nuclearp:'14', fuelp:'55',
		
		// Registrazione delle combinazioni (Regione che riceve la richiesta + Regione che fa la richiesta + categoria della richiesta + grafico a cui è associato)
		// In questo caso A-B-D ricevono -> C fa le richiesta
		// ES: A_C_plantValue_cf - B_C_meatValue_lf - D_C_diaryValue_wfg - A_C_bioValue_wfb
		A_C_plantValue_cf:0, A_C_plantValue_lf:0, A_C_plantValue_wfg:0, A_C_plantValue_wfb:0,
		A_C_meatValue_cf:0, A_C_meatValue_lf:0, A_C_meatValue_wfg:0, A_C_meatValue_wfb:0,
		A_C_diaryValue_cf:0, A_C_diaryValue_lf:0, A_C_diaryValue_wfg:0, A_C_diaryValue_wfb:0,
		A_C_fossilValue_cf:0, A_C_fossilValue_lf:0, A_C_fossilValue_wfg:0, A_C_fossilValue_wfb:0,
		A_C_bioValue_cf:0, A_C_bioValue_lf:0, A_C_bioValue_wfg:0, A_C_bioValue_wfb:0,
		A_C_elecValue_cf:0, A_C_elecValue_lf:0, A_C_elecValue_wfg:0, A_C_elecValue_wfb:0,
		
		B_C_plantValue_cf:0, B_C_plantValue_lf:0, B_C_plantValue_wfg:0, B_C_plantValue_wfb:0,
		B_C_meatValue_cf:0, B_C_meatValue_lf:0, B_C_meatValue_wfg:0, B_C_meatValue_wfb:0,
		B_C_diaryValue_cf:0, B_C_diaryValue_lf:0, B_C_diaryValue_wfg:0, B_C_diaryValue_wfb:0,
		B_C_fossilValue_cf:0, B_C_fossilValue_lf:0, B_C_fossilValue_wfg:0, B_C_fossilValue_wfb:0,
		B_C_bioValue_cf:0, B_C_bioValue_lf:0, B_C_bioValue_wfg:0, B_C_bioValue_wfb:0,
		B_C_elecValue_cf:0, B_C_elecValue_lf:0, B_C_elecValue_wfg:0, B_C_elecValue_wfb:0,
		
		D_C_plantValue_cf:0, D_C_plantValue_lf:0, D_C_plantValue_wfg:0, D_C_plantValue_wfb:0,
		D_C_meatValue_cf:0, D_C_meatValue_lf:0, D_C_meatValue_wfg:0, D_C_meatValue_wfb:0,
		D_C_diaryValue_cf:0, D_C_diaryValue_lf:0, D_C_diaryValue_wfg:0, D_C_diaryValue_wfb:0,
		D_C_fossilValue_cf:0, D_C_fossilValue_lf:0, D_C_fossilValue_wfg:0, D_C_fossilValue_wfb:0,
		D_C_bioValue_cf:0, D_C_bioValue_lf:0, D_C_bioValue_wfg:0, D_C_bioValue_wfb:0,
		D_C_elecValue_cf:0, D_C_elecValue_lf:0, D_C_elecValue_wfg:0, D_C_elecValue_wfb:0,
		
		// Valori utilizzati registrati dentro il file susteinable-limits.js, utilizzati da target-score.js per cacolare il punteggio finale
		current_C_land:70.5, current_C_green:-7.0, current_C_blue:20.6,
		
		// Registrzione dei calcoli effettuati da Security Region C riguardante i valori legati a World, utilizzati in grafici-security.js
		WORLD_C_security_food:'467', WORLD_C_security_energy:'117',
		wfg_ext:0, wfb_ext:0, cf_ext:0, lf_ext:0,
		
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
		
		EU_D_sotto_cf:20.0, EU_D_sotto_lf:15.8, EU_D_sotto_wfg:3358, EU_D_sotto_wfb:477,
		security_food:D_security_food, security_energy:D_security_energy,
		
		// Registrazione dei calcoli effettuati da Security Region D, riguardanti i  valori legati agli import di A-B-C, utilizzati in grafici-security.js
		InRegionA_food:0, InRegionB_food:0, InRegionC_food:0,
		InRegionA_energy:0, InRegionB_energy:0, InRegionC_energy:0,
		// Registrazione di Footprint Reduction Food Production with input prodotto da Region D 
		// utilizzati in grafici-sopra-ok-console.js utilizzati dai calcoli di export Food con i bottoni D
		D_totCFyeld:0, D_totLFyeld:0, D_totWFGyeld:0, D_totWFByeld:0,
		
		/*
		D_plantcf:D_plantcf, D_plantlf:D_plantlf, D_plantwfg:D_plantwfg, D_plantwfb:D_plantwfb,
		D_meatcf:D_meatcf, D_meatlf:D_meatlf, D_meatwfg:D_meatwfg, D_meatwfb:D_meatwfb,
		D_diarycf:D_diarycf, D_diarylf:D_diarylf, D_diarywfg:D_diarywfg, D_diarywfb:D_diarywfb,
		D_fossilcf:D_fossilcf, D_fossillf:D_fossillf, D_fossilwfg:D_fossilwfg, D_fossilwfb:D_fossilwfb,
		D_biocf:D_biocf, D_biolf:D_biolf, D_biowfg:D_biowfg, D_biowfb:D_biowfb,
		D_elecf:D_elecf, D_elelf:D_elelf, D_elewfg:D_elewfg, D_elewfb:D_elewfb,
		*/
		
		// Salvataggio input Energy Mix associati alla regione
		windp:'11', solarp:'2', hydrop:'9', biofuelp:'2', nuclearp:'35', fuelp:'41',
		
		// Registrazione delle combinazioni (Regione che riceve la richiesta + Regione che fa la richiesta + categoria della richiesta + grafico a cui è associato)
		// In questo caso A-B-C ricevono -> D fa le richiesta
		// ES: A_D_plantValue_cf - B_D_meatValue_lf - C_D_diaryValue_wfg - A_D_bioValue_wfb
		A_D_plantValue_cf:0, A_D_plantValue_lf:0, A_D_plantValue_wfg:0, A_D_plantValue_wfb:0,
		A_D_meatValue_cf:0, A_D_meatValue_lf:0, A_D_meatValue_wfg:0, A_D_meatValue_wfb:0,
		A_D_diaryValue_cf:0, A_D_diaryValue_lf:0, A_D_diaryValue_wfg:0, A_D_diaryValue_wfb:0,
		A_D_fossilValue_cf:0, A_D_fossilValue_lf:0, A_D_fossilValue_wfg:0, A_D_fossilValue_wfb:0,
		A_D_bioValue_cf:0, A_D_bioValue_lf:0, A_D_bioValue_wfg:0, A_D_bioValue_wfb:0,
		A_D_elecValue_cf:0, A_D_elecValue_lf:0, A_D_elecValue_wfg:0, A_D_elecValue_wfb:0,
		
		B_D_plantValue_cf:0, B_D_plantValue_lf:0, B_D_plantValue_wfg:0, B_D_plantValue_wfb:0,
		B_D_meatValue_cf:0, B_D_meatValue_lf:0, B_D_meatValue_wfg:0, B_D_meatValue_wfb:0,
		B_D_diaryValue_cf:0, B_D_diaryValue_lf:0, B_D_diaryValue_wfg:0, B_D_diaryValue_wfb:0,
		B_D_fossilValue_cf:0, B_D_fossilValue_lf:0, B_D_fossilValue_wfg:0, B_D_fossilValue_wfb:0,
		B_D_bioValue_cf:0, B_D_bioValue_lf:0, B_D_bioValue_wfg:0, B_D_bioValue_wfb:0,
		B_D_elecValue_cf:0, B_D_elecValue_lf:0, B_D_elecValue_wfg:0, B_D_elecValue_wfb:0,
		
		C_D_plantValue_cf:0, C_D_plantValue_lf:0, C_D_plantValue_wfg:0, C_D_plantValue_wfb:0,
		C_D_meatValue_cf:0, C_D_meatValue_lf:0, C_D_meatValue_wfg:0, C_D_meatValue_wfb:0,
		C_D_diaryValue_cf:0, C_D_diaryValue_lf:0, C_D_diaryValue_wfg:0, C_D_diaryValue_wfb:0,
		C_D_fossilValue_cf:0, C_D_fossilValue_lf:0, C_D_fossilValue_wfg:0, C_D_fossilValue_wfb:0,
		C_D_bioValue_cf:0, C_D_bioValue_lf:0, C_D_bioValue_wfg:0, C_D_bioValue_wfb:0,
		C_D_elecValue_cf:0, C_D_elecValue_lf:0, C_D_elecValue_wfg:0, C_D_elecValue_wfb:0,
		
		// Valori utilizzati registrati dentro il file susteinable-limits.js, utilizzati da target-score.js per cacolare il punteggio finale
		current_D_land:-11.7, current_D_green:-32.5, current_D_blue:38.6, 
		
		// Registrzione dei calcoli effettuati da Security Region D riguardante i valori legati a World, utilizzati in grafici-security.js
		WORLD_D_security_food:'0', WORLD_D_security_energy:'94',
		wfg_ext:0, wfb_ext:0, cf_ext:0, lf_ext:0,
		
		D_lf_limitOk:1, D_wfg_limitOk:1, D_wfb_limitOk:1
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
		
		/*
		// =================================== WORLD SECURITY FOOD/ENERGY ===================================================================================
		WORLD_DataOutput = {
			WORLD_A_security_food:'761', WORLD_B_security_food:'77', WORLD_C_security_food:'467', WORLD_D_security_food:'0',
			WORLD_A_security_energy:'83', WORLD_B_security_energy:'77', WORLD_C_security_energy:'117', WORLD_D_security_energy:'94' 	
		}
		localStorage.setItem("WORLDDataOutput", JSON.stringify(WORLD_DataOutput));
		
	
		// =================================== VALORI DELLE REGIONI CHE VENGONO CONTROLLATI IN OVERVIEW EU - TARGET =========================================
		/*
		currents = {
			current_A_land:25.1, current_B_land:-15.8, current_C_land:70.5, current_D_land:-11.7,
			current_A_green:42.7, current_B_green:-67.4, current_C_green:-7.0, current_D_green:-32.5,
			current_A_blue:-50.0, current_B_blue:-79.6, current_C_blue:20.6, current_D_blue:38.6
		}
		localStorage.setItem("currents", JSON.stringify(currents));
		*/
		
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

//Tasto Salva
localStorage.setItem("SaveGameA", 0);
localStorage.setItem("SaveGameB",0);
localStorage.setItem("SaveGameC",0);
localStorage.setItem("SaveGameD",0);

//VARIABILI CONTENUTO RISULTATI BOTTONI
/*var A_plantcf = 0;
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
var A_eleefg = 0;
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
var B_eleefg = 0;
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
var C_eleefg = 0;
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
var D_eleefg = 0;
var D_elewfb = 0;*/

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
}