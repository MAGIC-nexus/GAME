/* *************************************************************************************************************************************************************

	GRAFICI-SECURITY.JS -> CALCOLA I VALORI DI FOOD-SECURITY ED ENERGY-SECURITY
	RELATIONEU.JS -> UTILIZZA I VALORI CALCOLATI DA GRAFICI-SECURITY E REGISTRATI NELLE LOCALSTORAGE
	
	QUINDI L'ORDINE DI CARIMENTO DEGLI SCRIPT E': 1) GRAFICI-SECURITY 2) RELATIONEU	

   *************************************************************************************************************************************************************
*/
var region = document.querySelector('input[name="region"]:checked').getAttribute('id');

function getEUvalues(){
	// ============================ Milioni di abitanti per regione - Somma totale abitanti - Percentuale abitanti per regione =================================
	var inh_A = 63.651;
	var inh_B = 38.559;
	var inh_C = 234.126;
	var inh_D = 177.143;
	
	var inhSum = inh_A+inh_B+inh_C+inh_D;
	
	rate_A = Math.round((inh_A/inhSum)*100);
	rate_B = Math.round((inh_B/inhSum)*100);
	rate_C = Math.round((inh_C/inhSum)*100);
	rate_D = Math.round((inh_D/inhSum)*100);
	// ============================ Recupero dati OUTPUT registratin localStorage per ogni regione =================================================================
	regionA = localStorage.getItem("regionADataOutput"); regionA = JSON.parse(regionA);
	regionB = localStorage.getItem("regionBDataOutput"); regionB = JSON.parse(regionB);
	regionC = localStorage.getItem("regionCDataOutput"); regionC = JSON.parse(regionC);
	regionD = localStorage.getItem("regionDDataOutput"); regionD = JSON.parse(regionD);
	
	console.log("Region A: "+JSON.stringify(regionA)+ "Region B: "+JSON.stringify(regionB)+" Region C: "+JSON.stringify(regionC)+" Region D: "+JSON.stringify(regionD));
	// ------------------------------------------------------------------------------------------------------------------------------------
	A_CF_Food_Int = regionA['CF_Food_Internal']; A_CF_Food_Ext = regionA['CF_Food_External']; 
	A_CF_Ener_Int = regionA['CF_Energy_Internal']; A_CF_Ener_Ext = regionA['CF_Energy_External'];
	A_LF_Food_Int = regionA['LF_Food_Internal']; A_LF_Food_Ext = regionA['LF_Food_External']; 
	A_LF_Ener_Int = regionA['LF_Energy_Internal']; A_LF_Ener_Ext = regionA['LF_Energy_External'];
	A_WFgreen_Food_Int = regionA['WFgreen_Food_Internal']; A_WFgreen_Food_Ext = regionA['WFgreen_Food_External']; 
	A_WFgreen_Ener_Int = regionA['WFgreen_Energy_Internal']; A_WFgreen_Ener_Ext = regionA['WFgreen_Energy_external'];
	A_WFblue_Food_Int = regionA['WFblue_Food_Internal']; A_WFblue_Food_Ext = regionA['WFblue_Food_External']; 
	A_WFblue_Ener_Int = regionA['WFblue_Energy_Internal']; A_WFblue_Ener_Ext = regionA['WFblue_Energy_external'];
	
	A_EU_CF_consum_init_value = regionA['CF_fp_consum_init_value'];
	A_EU_LF_consum_init_value = regionA['LF_fp_consum_init_value'];
	A_EU_WFgreen_consum_init_value = regionA['WFgreen_fp_consum_init_value'];
	A_EU_WFblue_consum_init_value = regionA['WFblue_fp_consum_init_value'];
	
	A_EU_CF_produc_init_value = regionA['CF_fp_product_init_value'];
	A_EU_LF_produc_init_value = regionA['LF_fp_product_init_value'];
	A_EU_WFgreen_produc_init_value = regionA['WFgreen_fp_product_init_value'];
	A_EU_WFblue_produc_init_value = regionA['WFblue_fp_product_init_value'];

	B_CF_Food_Int = regionB['CF_Food_Internal']; B_CF_Food_Ext = regionB['CF_Food_External']; 
	B_CF_Ener_Int = regionB['CF_Energy_Internal']; B_CF_Ener_Ext = regionB['CF_Energy_External'];
	B_LF_Food_Int = regionB['LF_Food_Internal']; B_LF_Food_Ext = regionB['LF_Food_External']; 
	B_LF_Ener_Int = regionB['LF_Energy_Internal']; B_LF_Ener_Ext = regionB['LF_Energy_External'];
	B_WFgreen_Food_Int = regionB['WFgreen_Food_Internal']; B_WFgreen_Food_Ext = regionB['WFgreen_Food_External']; 
	B_WFgreen_Ener_Int = regionB['WFgreen_Energy_Internal']; B_WFgreen_Ener_Ext = regionB['WFgreen_Energy_external'];
	B_WFblue_Food_Int = regionB['WFblue_Food_Internal']; B_WFblue_Food_Ext = regionB['WFblue_Food_External']; 
	B_WFblue_Ener_Int = regionB['WFblue_Energy_Internal']; B_WFblue_Ener_Ext = regionB['WFblue_Energy_external'];
	
	B_EU_CF_consum_init_value = regionB['CF_fp_consum_init_value'];
	B_EU_LF_consum_init_value = regionB['LF_fp_consum_init_value'];
	B_EU_WFgreen_consum_init_value = regionB['WFgreen_fp_consum_init_value'];
	B_EU_WFblue_consum_init_value = regionB['WFblue_fp_consum_init_value'];
	
	B_EU_CF_produc_init_value = regionB['CF_fp_product_init_value'];
	B_EU_LF_produc_init_value = regionB['LF_fp_product_init_value'];
	B_EU_WFgreen_produc_init_value = regionB['WFgreen_fp_product_init_value'];
	B_EU_WFblue_produc_init_value = regionB['WFblue_fp_product_init_value'];
	// --------------------------------------------------------------------------------------------------------------------------------------
	C_CF_Food_Int = regionC['CF_Food_Internal']; C_CF_Food_Ext = regionC['CF_Food_External']; 
	C_CF_Ener_Int = regionC['CF_Energy_Internal']; C_CF_Ener_Ext = regionC['CF_Energy_External'];
	C_LF_Food_Int = regionC['LF_Food_Internal']; C_LF_Food_Ext = regionC['LF_Food_External']; 
	C_LF_Ener_Int = regionC['LF_Energy_Internal']; C_LF_Ener_Ext = regionC['LF_Energy_External'];
	C_WFgreen_Food_Int = regionC['WFgreen_Food_Internal']; C_WFgreen_Food_Ext = regionC['WFgreen_Food_External']; 
	C_WFgreen_Ener_Int = regionC['WFgreen_Energy_Internal']; C_WFgreen_Ener_Ext = regionC['WFgreen_Energy_external'];
	C_WFblue_Food_Int = regionC['WFblue_Food_Internal']; C_WFblue_Food_Ext = regionC['WFblue_Food_External']; 
	C_WFblue_Ener_Int = regionC['WFblue_Energy_Internal']; C_WFblue_Ener_Ext = regionC['WFblue_Energy_external'];
	
	C_EU_CF_consum_init_value = regionC['CF_fp_consum_init_value'];
	C_EU_LF_consum_init_value = regionC['LF_fp_consum_init_value'];
	C_EU_WFgreen_consum_init_value = regionC['WFgreen_fp_consum_init_value'];
	C_EU_WFblue_consum_init_value = regionC['WFblue_fp_consum_init_value'];
	
	C_EU_CF_produc_init_value = regionC['CF_fp_product_init_value'];
	C_EU_LF_produc_init_value = regionC['LF_fp_product_init_value'];
	C_EU_WFgreen_produc_init_value = regionC['WFgreen_fp_product_init_value'];
	C_EU_WFblue_produc_init_value = regionC['WFblue_fp_product_init_value'];
	// ----------------------------------------------------------------------------------------------------------------------------------------
	D_CF_Food_Int = regionD['CF_Food_Internal']; D_CF_Food_Ext = regionD['CF_Food_External']; 
	D_CF_Ener_Int = regionD['CF_Energy_Internal']; D_CF_Ener_Ext = regionD['CF_Energy_External'];
	D_LF_Food_Int = regionD['LF_Food_Internal']; D_LF_Food_Ext = regionD['LF_Food_External']; 
	D_LF_Ener_Int = regionD['LF_Energy_Internal']; D_LF_Ener_Ext = regionD['LF_Energy_External'];
	D_WFgreen_Food_Int = regionD['WFgreen_Food_Internal']; D_WFgreen_Food_Ext = regionD['WFgreen_Food_External']; 
	D_WFgreen_Ener_Int = regionD['WFgreen_Energy_Internal']; D_WFgreen_Ener_Ext = regionD['WFgreen_Energy_external'];
	D_WFblue_Food_Int = regionD['WFblue_Food_Internal']; D_WFblue_Food_Ext = regionD['WFblue_Food_External']; 
	D_WFblue_Ener_Int = regionD['WFblue_Energy_Internal']; D_WFblue_Ener_Ext = regionD['WFblue_Energy_external'];
	
	D_EU_CF_consum_init_value = regionD['CF_fp_consum_init_value'];
	D_EU_LF_consum_init_value = regionD['LF_fp_consum_init_value'];
	D_EU_WFgreen_consum_init_value = regionD['WFgreen_fp_consum_init_value'];
	D_EU_WFblue_consum_init_value = regionD['WFblue_fp_consum_init_value'];
	
	D_EU_CF_produc_init_value = regionD['CF_fp_product_init_value'];
	D_EU_LF_produc_init_value = regionD['LF_fp_product_init_value'];
	D_EU_WFgreen_produc_init_value = regionD['WFgreen_fp_product_init_value'];
	D_EU_WFblue_produc_init_value = regionD['WFblue_fp_product_init_value'];
	// ----------------------------------------------------------------------------------------------------------------------------------------
	// ============================================= FORMULE LEGATE A RelationsEU =================================================================================
	// --------------------------------------------- CONSUMPTION -------------------------------------------------------------------------------------------------
	console.log(" ===== "+region+" =====");
	console.log(" ===== RELATION EU ===== ");
	console.log(" === FOOTPRINT OF CONSUMPTION === ");
	// --------------------------------------------- CF Average ---------------------------------------------------------------------------------------------------
	CF_fp_consum_init_value = '25.9678596753111';
	LF_fp_consum_init_value = '15.0396262829812';
	WFgreen_fp_consum_init_value = '3459.9586618624';
	WFblue_fp_consum_init_value = '510.124186555134';
	
	CF_fp_product_init_value = '20.3769358104986';
	LF_fp_product_init_value = '14.7453616645949';
	WFgreen_fp_product_init_value = '3094.35622127523';
	WFblue_fp_product_init_value = '454.461724873184';
	
	A_CF_Food = Number(A_CF_Food_Int)+Number(A_CF_Food_Ext);
	A_CF_Energy = Number(A_CF_Ener_Int)+Number(A_CF_Ener_Ext);
	partA = (A_CF_Food+A_CF_Energy)*inh_A;
	
	B_CF_Food = Number(B_CF_Food_Int)+Number(B_CF_Food_Ext);
	B_CF_Energy = Number(B_CF_Ener_Int)+Number(B_CF_Ener_Ext);
	partB = (B_CF_Food+B_CF_Energy)*inh_B;
	
	C_CF_Food = Number(C_CF_Food_Int)+Number(C_CF_Food_Ext);
	C_CF_Energy = Number(C_CF_Ener_Int)+Number(C_CF_Ener_Ext);
	partC = (C_CF_Food+C_CF_Energy)*inh_C;
	
	D_CF_Food = Number(D_CF_Food_Int)+Number(D_CF_Food_Ext);
	D_CF_Energy = Number(D_CF_Ener_Int)+Number(D_CF_Ener_Ext);
	partD = (D_CF_Food+D_CF_Energy)*inh_D;
	
	EU_CF_average = (partA+partB+partC+partD)/inhSum;
	EU_CF_average_rate = (EU_CF_average-Number(CF_fp_consum_init_value))/Number(CF_fp_consum_init_value)*100;
	
	console.log("EU_CF_average: "+EU_CF_average+" CF_fp_consum_init_value: "+CF_fp_consum_init_value);
	console.log("Valore di EU_CF_average: "+EU_CF_average+" Rate: "+EU_CF_average_rate);
	
	// --------------------------------------------- LF AVERAGE ------------------------------------------------------------------------------------------------
	
	A_LF_Food = Number(A_LF_Food_Int)+Number(A_LF_Food_Ext);
	A_LF_Energy = Number(A_LF_Ener_Int)+Number(A_LF_Ener_Ext);
	partA = (A_LF_Food+A_LF_Energy)*inh_A;
	
	B_LF_Food = Number(B_LF_Food_Int)+Number(B_LF_Food_Ext);
	B_LF_Energy = Number(B_LF_Ener_Int)+Number(B_LF_Ener_Ext);
	partB = (B_LF_Food+B_LF_Energy)*inh_B;
	
	C_LF_Food = Number(C_LF_Food_Int)+Number(C_LF_Food_Ext);
	C_LF_Energy = Number(C_LF_Ener_Int)+Number(C_LF_Ener_Ext);
	partC = (C_LF_Food+C_LF_Energy)*inh_C;
	
	D_LF_Food = Number(D_LF_Food_Int)+Number(D_LF_Food_Ext);
	D_LF_Energy = Number(D_LF_Ener_Int)+Number(D_LF_Ener_Ext);
	partD = (D_LF_Food+D_LF_Energy)*inh_D;
	
	EU_LF_average = (partA+partB+partC+partD)/inhSum;
	EU_LF_average_rate = (EU_LF_average-Number(LF_fp_consum_init_value))/Number(LF_fp_consum_init_value)*100;
	
	console.log("EU_LF_average: "+EU_LF_average+" LF_fp_consum_init_value: "+LF_fp_consum_init_value);
	console.log("Valore di EU_LF_average: "+EU_LF_average+" Rate: "+EU_LF_average_rate);
	
	// --------------------------------------------- WFgreen AVERAGE ---------------------------------------------------------------------------------------------
	
	A_WFgreen_Food = Number(A_WFgreen_Food_Int)+Number(A_WFgreen_Food_Ext);
	A_WFgreen_Energy = Number(A_WFgreen_Ener_Int)+Number(A_WFgreen_Ener_Ext);
	partA = (A_WFgreen_Food+A_WFgreen_Energy)*inh_A;
	
	B_WFgreen_Food = Number(B_WFgreen_Food_Int)+Number(B_WFgreen_Food_Ext);
	B_WFgreen_Energy = Number(B_WFgreen_Ener_Int)+Number(B_WFgreen_Ener_Ext);
	partB = (B_WFgreen_Food+B_WFgreen_Energy)*inh_B;
	
	C_WFgreen_Food = Number(C_WFgreen_Food_Int)+Number(C_WFgreen_Food_Ext);
	C_WFgreen_Energy = Number(C_WFgreen_Ener_Int)+Number(C_WFgreen_Ener_Ext);
	partC = (C_WFgreen_Food+C_WFgreen_Energy)*inh_C;
	
	D_WFgreen_Food = Number(D_WFgreen_Food_Int)+Number(D_WFgreen_Food_Ext);
	D_WFgreen_Energy = Number(D_WFgreen_Ener_Int)+Number(D_WFgreen_Ener_Ext);
	partD = (D_WFgreen_Food+D_WFgreen_Energy)*inh_D;
	
	EU_WFgreen_average = (partA+partB+partC+partD)/inhSum;
	EU_WFgreen_average_rate = (EU_WFgreen_average-Number(WFgreen_fp_consum_init_value))/Number(WFgreen_fp_consum_init_value)*100;
	
	console.log("EU_WFgreen_average: "+EU_WFgreen_average+" WFgreen_fp_consum_init_value: "+WFgreen_fp_consum_init_value);
	console.log("Valore di EU_WFgreen_average: "+EU_WFgreen_average+" Rate: "+EU_WFgreen_average_rate);
	
	// --------------------------------------------- WFblue AVERAGE ---------------------------------------------------------------------------------------------
	
	A_WFblue_Food = Number(A_WFblue_Food_Int)+Number(A_WFblue_Food_Ext);
	A_WFblue_Energy = Number(A_WFblue_Ener_Int)+Number(A_WFblue_Ener_Ext);
	partA = (A_WFblue_Food+A_WFblue_Energy)*inh_A;
	
	B_WFblue_Food = Number(B_WFblue_Food_Int)+Number(B_WFblue_Food_Ext);
	B_WFblue_Energy = Number(B_WFblue_Ener_Int)+Number(B_WFblue_Ener_Ext);
	partB = (B_WFblue_Food+B_WFblue_Energy)*inh_B;
	
	C_WFblue_Food = Number(C_WFblue_Food_Int)+Number(C_WFblue_Food_Ext);
	C_WFblue_Energy = Number(C_WFblue_Ener_Int)+Number(C_WFblue_Ener_Ext);
	partC = (C_WFblue_Food+C_WFblue_Energy)*inh_C;
	
	D_WFblue_Food = Number(D_WFblue_Food_Int)+Number(D_WFblue_Food_Ext);
	D_WFblue_Energy = Number(D_WFblue_Ener_Int)+Number(D_WFblue_Ener_Ext);
	partD = (D_WFblue_Food+D_WFblue_Energy)*inh_D;
	
	EU_WFblue_average = (partA+partB+partC+partD)/inhSum;
	EU_WFblue_average_rate = (EU_WFblue_average-Number(WFblue_fp_consum_init_value))/Number(WFblue_fp_consum_init_value)*100;
	
	console.log("EU_WFblue_average: "+EU_WFblue_average+" WFblue_fp_consum_init_value: "+WFblue_fp_consum_init_value);
	console.log("Valore di EU_WFblue_average: "+EU_WFblue_average+" Rate: "+EU_WFblue_average_rate);
	// ------------------------------------------------------------------------------------------------------------------------------------------------------------
	// ------------------------------------------------- PRODUCTION -----------------------------------------------------------------------------------------------
	console.log(" === FOOTPRINT OF PRODUCTION === ");
	
	// ------------------------------ COSTANTI
	CF_fp_product_init_value = '20.3769358104986';
	LF_fp_product_init_value = '14.7453616645949';
	WFgreen_fp_product_init_value = '3094.35622127523';
	WFblue_fp_product_init_value = '454.461724873184';
	// ----------------------------------------
	
	// ------------------- SEZIONE CF --------------------------------
	A_CF_fp_production = Number(A_CF_Food_Int)+Number(A_CF_Ener_Int);
	B_CF_fp_production = Number(B_CF_Food_Int)+Number(B_CF_Ener_Int);
	C_CF_fp_production = Number(C_CF_Food_Int)+Number(C_CF_Ener_Int);
	D_CF_fp_production = Number(D_CF_Food_Int)+Number(D_CF_Ener_Int);
	
	partA_CF = A_CF_fp_production*inh_A;
	partB_CF = B_CF_fp_production*inh_B;
	partC_CF = C_CF_fp_production*inh_C;
	partD_CF = D_CF_fp_production*inh_D;
	
	console.log("partA_CF: "+A_CF_fp_production+" partB_CF: "+B_CF_fp_production+" partC_CF: "+C_CF_fp_production+" partD_CF: "+D_CF_fp_production);
	console.log("inh_A: "+inh_A+" inh_B: "+inh_B+" inh_C "+inh_C+" inh_D "+inh_D+ "inhSum: "+inhSum);
	
	EU_average_fp_production_CF = (partA_CF+partB_CF+partC_CF+partD_CF)/inhSum;
	console.log("EU_average_fp_production_CF: "+EU_average_fp_production_CF);
	
	A_per_EU_capita_CF = partA_CF/inhSum;
	B_per_EU_capita_CF = partB_CF/inhSum;
	C_per_EU_capita_CF = partC_CF/inhSum;
	D_per_EU_capita_CF = partD_CF/inhSum;
	
	A_CF_sust_limit = 0;
	B_CF_sust_limit = 0;
	C_CF_sust_limit = 0;
	D_CF_sust_limit = 0;
	
	A_CF_physic_limit = 0;
	B_CF_physic_limit = 0;
	C_CF_physic_limit = 0;
	D_CF_physic_limit = 0;
	
	CF_fp_product_rate = (EU_average_fp_production_CF - CF_fp_product_init_value)/CF_fp_product_init_value*100;
	console.log("EU_average_fp_production_CF_rate: "+CF_fp_product_rate);
	
	// --------------------- SEZIONE LF --------------------------------------
	A_LF_fp_production = Number(A_LF_Food_Int)+Number(A_LF_Ener_Int);
	B_LF_fp_production = Number(B_LF_Food_Int)+Number(B_LF_Ener_Int);
	C_LF_fp_production = Number(C_LF_Food_Int)+Number(C_LF_Ener_Int);
	D_LF_fp_production = Number(D_LF_Food_Int)+Number(D_LF_Ener_Int);
	
	partA_LF = A_LF_fp_production*inh_A;
	partB_LF = B_LF_fp_production*inh_B;
	partC_LF = C_LF_fp_production*inh_C;
	partD_LF = D_LF_fp_production*inh_D;
	
	console.log("partA_LF: "+A_LF_fp_production+" partB_LF: "+B_LF_fp_production+" partC_LF: "+C_LF_fp_production+" partD_LF: "+D_LF_fp_production);
	EU_average_fp_production_LF = (partA_LF+partB_LF+partC_LF+partD_LF)/inhSum;
	console.log("EU_average_fp_production_LF: "+EU_average_fp_production_LF);
	
	A_per_EU_capita_LF = partA_LF/inhSum;
	B_per_EU_capita_LF = partB_LF/inhSum;
	C_per_EU_capita_LF = partC_LF/inhSum;
	D_per_EU_capita_LF = partD_LF/inhSum;
	
	A_LF_sust_limit = 10.38;
	B_LF_sust_limit = 20.86;
	C_LF_sust_limit = 8.225;
	D_LF_sust_limit = 17.8875;
	
	A_LF_physic_limit = 21.36;
	B_LF_physic_limit = 72.12;
	C_LF_physic_limit = 14.066;
	D_LF_physic_limit = 29.875;
	
	LF_fp_product_rate = (EU_average_fp_production_LF - LF_fp_product_init_value)/LF_fp_product_init_value*100;
	console.log("EU_average_fp_production_LF_rate: "+LF_fp_product_rate);
	// ---------------------- SEZIONE WFgreen
	A_WFgreen_fp_production = Number(A_WFgreen_Food_Int)+Number(A_WFgreen_Ener_Int);
	B_WFgreen_fp_production = Number(B_WFgreen_Food_Int)+Number(B_WFgreen_Ener_Int);
	C_WFgreen_fp_production = Number(C_WFgreen_Food_Int)+Number(C_WFgreen_Ener_Int);
	D_WFgreen_fp_production = Number(D_WFgreen_Food_Int)+Number(D_WFgreen_Ener_Int);
	
	partA_WFgreen = A_WFgreen_fp_production*inh_A;
	partB_WFgreen = B_WFgreen_fp_production*inh_B;
	partC_WFgreen = C_WFgreen_fp_production*inh_C;
	partD_WFgreen = D_WFgreen_fp_production*inh_D;
	
	console.log("partA_WFgreen: "+A_WFgreen_fp_production+" partB_WFgreen: "+B_WFgreen_fp_production+" partC_WFgreen: "+C_WFgreen_fp_production+" partD_WFgreen: "+D_WFgreen_fp_production);
	
	EU_average_fp_production_WFgreen = (partA_WFgreen+partB_WFgreen+partC_WFgreen+partD_WFgreen)/inhSum;
	console.log("EU_average_fp_production_WFgreen: "+EU_average_fp_production_WFgreen);
	
	A_per_EU_capita_WFgreen = partA_WFgreen/inhSum;
	B_per_EU_capita_WFgreen = partB_WFgreen/inhSum;
	C_per_EU_capita_WFgreen = partC_WFgreen/inhSum;
	D_per_EU_capita_WFgreen = partD_WFgreen/inhSum;
	
	A_WFgreen_sust_limit = 3533.44;
	B_WFgreen_sust_limit = 13098.4;
	C_WFgreen_sust_limit = 2369.2;
	D_WFgreen_sust_limit = 5178.8;
	
	A_WFgreen_physic_limit = 8833.6;
	B_WFgreen_physic_limit = 32746;
	C_WFgreen_physic_limit = 5923;
	D_WFgreen_physic_limit = 12947;
	
	WFgreen_fp_product_rate = (EU_average_fp_production_WFgreen - WFgreen_fp_product_init_value)/WFgreen_fp_product_init_value*100;
	console.log("EU_average_fp_production_WFgreen_rate: "+WFgreen_fp_product_rate);
	// ----------------------------- SEZIONE WFblue
	A_WFblue_fp_production = Number(A_WFblue_Food_Int)+Number(A_WFblue_Ener_Int);
	B_WFblue_fp_production = Number(B_WFblue_Food_Int)+Number(B_WFblue_Ener_Int);
	C_WFblue_fp_production = Number(C_WFblue_Food_Int)+Number(C_WFblue_Ener_Int);
	D_WFblue_fp_production = Number(D_WFblue_Food_Int)+Number(D_WFblue_Ener_Int);
	
	partA_WFblue = A_WFblue_fp_production*inh_A;
	partB_WFblue = B_WFblue_fp_production*inh_B;
	partC_WFblue = C_WFblue_fp_production*inh_C;
	partD_WFblue = D_WFblue_fp_production*inh_D;
	
	console.log("partA_WFblue: "+A_WFblue_fp_production+" partB_WFblue: "+B_WFblue_fp_production+" partC_WFblue: "+C_WFblue_fp_production+" partD_WFblue: "+D_WFblue_fp_production);
	
	EU_average_fp_production_WFblue = (partA_WFblue+partB_WFblue+partC_WFblue+partD_WFblue)/inhSum;
	console.log("EU_average_fp_production_WFblue: "+EU_average_fp_production_WFblue);
	
	A_per_EU_capita_WFblue = partA_WFblue/inhSum;
	B_per_EU_capita_WFblue = partB_WFblue/inhSum;
	C_per_EU_capita_WFblue = partC_WFblue/inhSum;
	D_per_EU_capita_WFblue = partD_WFblue/inhSum;
	
	A_WFblue_sust_limit = 1550;
	B_WFblue_sust_limit = 3824.85;
	C_WFblue_sust_limit = 261.8490;
	D_WFblue_sust_limit = 343.9125;
	
	A_WFblue_physic_limit = 5709.5;
	B_WFblue_physic_limit = 12749.5;
	C_WFblue_physic_limit = 872.8301;
	D_WFblue_physic_limit = 1146.375;
	
	WFblue_fp_product_rate = (EU_average_fp_production_WFblue - WFblue_fp_product_init_value)/WFblue_fp_product_init_value*100;
	console.log("EU_average_fp_production_WFblue_rate: "+WFblue_fp_product_rate);
	// =================================================== EU SECURITY ===========================================================================================
	console.log(" === SECURITY === ");
	
	A_security_food = JSON.parse(localStorage.getItem("regionADataOutput"))["security_food"];
	A_security_energy = JSON.parse(localStorage.getItem("regionADataOutput"))["security_energy"];
	
	B_security_food = JSON.parse(localStorage.getItem("regionBDataOutput"))["security_food"];
	B_security_energy = JSON.parse(localStorage.getItem("regionBDataOutput"))["security_energy"];
	
	C_security_food = JSON.parse(localStorage.getItem("regionCDataOutput"))["security_food"];
	C_security_energy = JSON.parse(localStorage.getItem("regionCDataOutput"))["security_energy"];
	
	D_security_food = JSON.parse(localStorage.getItem("regionDDataOutput"))["security_food"];
	D_security_energy = JSON.parse(localStorage.getItem("regionDDataOutput"))["security_energy"];
	
	WORLD_A_security_food = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_A_security_food"];
	WORLD_A_security_energy = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_A_security_energy"];
	
	WORLD_B_security_food = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_B_security_food"];
	WORLD_B_security_energy = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_B_security_energy"];
	
	WORLD_C_security_food = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_C_security_food"];
	WORLD_C_security_energy = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_C_security_energy"];
	
	WORLD_D_security_food = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_D_security_food"];
	WORLD_D_security_energy = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_D_security_energy"];
	
	EU_A_security_food = (A_security_food*inh_A)/inhSum;
	EU_B_security_food = (B_security_food*inh_B)/inhSum;
	EU_C_security_food = (C_security_food*inh_C)/inhSum;
	EU_D_security_food = (D_security_food*inh_D)/inhSum;
	
	EU_A_security_energy = (A_security_energy*inh_A)/inhSum;
	EU_B_security_energy = (B_security_energy*inh_B)/inhSum;
	EU_C_security_energy = (C_security_energy*inh_C)/inhSum;
	EU_D_security_energy = (D_security_energy*inh_D)/inhSum;
	
	console.log("A_security_food: "+A_security_food+" A_security_energy"+A_security_energy);
	console.log("B_security_food: "+B_security_food+" B_security_energy"+B_security_energy);
	console.log("C_security_food: "+C_security_food+" C_security_energy"+C_security_energy);
	console.log("D_security_food: "+D_security_food+" D_security_energy"+D_security_energy);
	
	console.log("EU_A_security_food: "+EU_A_security_food+" EU_A_security_energy: "+EU_A_security_energy);
	console.log("EU_B_security_food: "+EU_B_security_food+" EU_B_security_energy: "+EU_B_security_energy);
	console.log("EU_C_security_food: "+EU_C_security_food+" EU_C_security_energy: "+EU_C_security_energy);
	console.log("EU_D_security_food: "+EU_D_security_food+" EU_D_security_energy: "+EU_D_security_energy);
	
	console.log("WORLD_A_security_food: "+WORLD_A_security_food+" WORLD_A_security_energy: "+WORLD_A_security_energy);
	console.log("WORLD_B_security_food: "+WORLD_B_security_food+" WORLD_B_security_energy: "+WORLD_B_security_energy);
	console.log("WORLD_C_security_food: "+WORLD_C_security_food+" WORLD_C_security_energy: "+WORLD_C_security_energy);
	console.log("WORLD_D_security_food: "+WORLD_D_security_food+" WORLD_D_security_energy: "+WORLD_D_security_energy);
	
	WORLD_part_A_security_food = WORLD_A_security_food*inh_A;
	WORLD_part_B_security_food = WORLD_B_security_food*inh_B;
	WORLD_part_C_security_food = WORLD_C_security_food*inh_C;
	WORLD_part_D_security_food = WORLD_D_security_food*inh_D;
	
	WORLD_part_A_security_energy = WORLD_A_security_energy*inh_A;
	WORLD_part_B_security_energy = WORLD_B_security_energy*inh_B;
	WORLD_part_C_security_energy = WORLD_C_security_energy*inh_C;
	WORLD_part_D_security_energy = WORLD_D_security_energy*inh_D;
	
	WORLD_security_food = (WORLD_part_A_security_food+WORLD_part_B_security_food+WORLD_part_C_security_food+WORLD_part_D_security_food)/inhSum;
	WORLD_security_energy = (WORLD_part_A_security_energy+WORLD_part_B_security_energy+WORLD_part_C_security_energy+WORLD_part_D_security_energy)/inhSum;

	console.log("WORLD_security_food: "+WORLD_security_food+" WORLD_security_energy: "+WORLD_security_energy);
	
	somma_sopra_food = EU_A_security_food+EU_B_security_food+EU_C_security_food+EU_D_security_food;
	somma_sotto_food = EU_A_security_food+EU_B_security_food+EU_C_security_food+EU_D_security_food+WORLD_security_food;
	
	EU_security_food_rate = somma_sopra_food/somma_sotto_food*100;
	console.log("EU_security_food_rate: "+EU_security_food_rate);
	
	somma_sopra_energy = EU_A_security_energy+EU_B_security_energy+EU_C_security_energy+EU_D_security_energy;
	somma_sotto_energy = EU_A_security_energy+EU_B_security_energy+EU_C_security_energy+EU_D_security_energy+WORLD_security_energy;
	
	EU_security_energy_rate = somma_sopra_energy/somma_sotto_energy*100;
	console.log("EU_security_energy_rate: "+EU_security_energy_rate);
	
	console.log(" ===== FINE "+region+" ======");
	console.log(" ===== FINE RELATION EU ===== ");
}

setInterval(getEUvalues, 3000);