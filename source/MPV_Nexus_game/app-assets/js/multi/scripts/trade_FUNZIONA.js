

var Region_from_A = "";
	var Region_from_B = ""; 
	var Region_from_C = "";
	var Region_from_D = "";
	
	var temp_stream = "";
	var regiontoA = "";
	var regionfrA = "";
	var buttonA="";
	var valueA="";
	var xA="";
	var yA="";
	var whoCallA="";

var centralExport = {
		
	// Richieste alla regione A da parte della regione B
	A_B_plant_based:"no", A_B_meat_and_fish:"no", A_B_diary_and_eggs:"no", A_B_fossil_fuels:"no", A_B_biofuels:"no", A_B_electricity:"no",
	A_B_plantValue_cf:0, A_B_meatValue_cf:0, A_B_diaryValue_cf:0, A_B_fossilValue_cf:0, A_B_bioValue_cf:0, A_B_elecValue_cf:0,
	A_B_plantValue_lf:0, A_B_meatValue_lf:0, A_B_diaryValue_lf:0, A_B_fossilValue_lf:0, A_B_bioValue_lf:0, A_B_elecValue_lf:0,
	A_B_plantValue_wfg:0, A_B_meatValue_wfg:0, A_B_diaryValue_wfg:0, A_B_fossilValue_wfg:0, A_B_bioValue_wfg:0, A_B_elecValue_wfg:0,
	A_B_plantValue_wfb:0, A_B_meatValue_wfb:0, A_B_diaryValue_wfb:0, A_B_fossilValue_wfb:0, A_B_bioValue_wfb:0, A_B_elecValue_wfb:0,
	// Richieste alla regione A da parte della regione C
	A_C_plant_based:"no", A_C_meat_and_fish:"no", A_C_diary_and_eggs:"no", A_C_fossil_fuels:"no", A_C_biofuels:"no", A_C_electricity:"no",
	A_C_plantValue_cf:0, A_C_meatValue_cf:0, A_C_diaryValue_cf:0, A_C_fossilValue_cf:0, A_C_bioValue_cf:0, A_C_elecValue_cf:0,
	A_C_plantValue_lf:0, A_C_meatValue_lf:0, A_C_diaryValue_lf:0, A_C_fossilValue_lf:0, A_C_bioValue_lf:0, A_C_elecValue_lf:0,
	A_C_plantValue_wfg:0, A_C_meatValue_wfg:0, A_C_diaryValue_wfg:0, A_C_fossilValue_wfg:0, A_C_bioValue_wfg:0, A_C_elecValue_wfg:0,
	A_C_plantValue_wfb:0, A_C_meatValue_wfb:0, A_C_diaryValue_wfb:0, A_C_fossilValue_wfb:0, A_C_bioValue_wfb:0, A_C_elecValue_wfb:0,
	// Richieste alla regione A da parte della regione D
	A_D_plant_based:"no", A_D_meat_and_fish:"no", A_D_diary_and_eggs:"no", A_D_fossil_fuels:"no", A_D_biofuels:"no", A_D_electricity:"no",
	A_D_plantValue_cf:0, A_D_meatValue_cf:0, A_D_diaryValue_cf:0, A_D_fossilValue_cf:0, A_D_bioValue_cf:0, A_D_elecValue_cf:0,
	A_D_plantValue_lf:0, A_D_meatValue_lf:0, A_D_diaryValue_lf:0, A_D_fossilValue_lf:0, A_D_bioValue_lf:0, A_D_elecValue_lf:0,
	A_D_plantValue_wfg:0, A_D_meatValue_wfg:0, A_D_diaryValue_wfg:0, A_D_fossilValue_wfg:0, A_D_bioValue_wfg:0, A_D_elecValue_wfg:0,
	A_D_plantValue_wfb:0, A_D_meatValue_wfb:0, A_D_diaryValue_wfb:0, A_D_fossilValue_wfb:0, A_D_bioValue_wfb:0, A_D_elecValue_wfb:0,
	
	// Richieste alla regione B da parte della regione A
	B_A_plant_based:"no", B_A_meat_and_fish:"no", B_A_diary_and_eggs:"no", B_A_fossil_fuels:"no", B_A_biofuels:"no", B_A_electricity:"no",
	B_A_plantValue_cf:0, B_A_meatValue_cf:0, B_A_diaryValue_cf:0, B_A_fossilValue_cf:0, B_A_bioValue_cf:0, B_A_elecValue_cf:0,
	B_A_plantValue_lf:0, B_A_meatValue_lf:0, B_A_diaryValue_lf:0, B_A_fossilValue_lf:0, B_A_bioValue_lf:0, B_A_elecValue_lf:0,
	B_A_plantValue_wfg:0, B_A_meatValue_wfg:0, B_A_diaryValue_wfg:0, B_A_fossilValue_wfg:0, B_A_bioValue_wfg:0, B_A_elecValue_wfg:0,
	B_A_plantValue_wfb:0, B_A_meatValue_wfb:0, B_A_diaryValue_wfb:0, B_A_fossilValue_wfb:0, B_A_bioValue_wfb:0, B_A_elecValue_wfb:0,
	// Richieste alla regione B da parte della regione C
	B_C_plant_based:"no", B_C_meat_and_fish:"no", B_C_diary_and_eggs:"no", B_C_fossil_fuels:"no", B_C_biofuels:"no", B_C_electricity:"no",
	B_C_plantValue_cf:0, B_C_meatValue_cf:0, B_C_diaryValue_cf:0, B_C_fossilValue_cf:0, B_C_bioValue_cf:0, B_C_elecValue_cf:0,
	B_C_plantValue_lf:0, B_C_meatValue_lf:0, B_C_diaryValue_lf:0, B_C_fossilValue_lf:0, B_C_bioValue_lf:0, B_C_elecValue_lf:0,
	B_C_plantValue_wfg:0, B_C_meatValue_wfg:0, B_C_diaryValue_wfg:0, B_C_fossilValue_wfg:0, B_C_bioValue_wfg:0, B_C_elecValue_wfg:0,
	B_C_plantValue_wfb:0, B_C_meatValue_wfb:0, B_C_diaryValue_wfb:0, B_C_fossilValue_wfb:0, B_C_bioValue_wfb:0, B_C_elecValue_wfb:0,
	// Richieste alla regione B da parte della regione D
	B_D_plant_based:"no", B_D_meat_and_fish:"no", B_D_diary_and_eggs:"no", B_D_fossil_fuels:"no", B_D_biofuels:"no", B_D_electricity:"no",
	B_D_plantValue_cf:0, B_D_meatValue_cf:0, B_D_diaryValue_cf:0, B_D_fossilValue_cf:0, B_D_bioValue_cf:0, B_D_elecValue_cf:0,
	B_D_plantValue_lf:0, B_D_meatValue_lf:0, B_D_diaryValue_lf:0, B_D_fossilValue_lf:0, B_D_bioValue_lf:0, B_D_elecValue_lf:0,
	B_D_plantValue_wfg:0, B_D_meatValue_wfg:0, B_D_diaryValue_wfg:0, B_D_fossilValue_wfg:0, B_D_bioValue_wfg:0, B_D_elecValue_wfg:0,
	B_D_plantValue_wfb:0, B_D_meatValue_wfb:0, B_D_diaryValue_wfb:0, B_D_fossilValue_wfb:0, B_D_bioValue_wfb:0, B_D_elecValue_wfb:0,
	
	// Richieste alla regione C da parte della regione A
	C_A_plant_based:"no", C_A_meat_and_fish:"no", C_A_diary_and_eggs:"no", C_A_fossil_fuels:"no", C_A_biofuels:"no", C_A_electricity:"no",
	C_A_plantValue_cf:0, C_A_meatValue_cf:0, C_A_diaryValue_cf:0, C_A_fossilValue_cf:0, C_A_bioValue_cf:0, C_A_elecValue_cf:0,
	C_A_plantValue_lf:0, C_A_meatValue_lf:0, C_A_diaryValue_lf:0, C_A_fossilValue_lf:0, C_A_bioValue_lf:0, C_A_elecValue_lf:0,
	C_A_plantValue_wfg:0, C_A_meatValue_wfg:0, C_A_diaryValue_wfg:0, C_A_fossilValue_wfg:0, C_A_bioValue_wfg:0, C_A_elecValue_wfg:0,
	C_A_plantValue_wfb:0, C_A_meatValue_wfb:0, C_A_diaryValue_wfb:0, C_A_fossilValue_wfb:0, C_A_bioValue_wfb:0, C_A_elecValue_wfb:0,
	// Richieste alla regione C da parte della regione B
	C_B_plant_based:"no", C_B_meat_and_fish:"no", C_B_diary_and_eggs:"no", C_B_fossil_fuels:"no", C_B_biofuels:"no", C_B_electricity:"no",
	C_B_plantValue_cf:0, C_B_meatValue_cf:0, C_B_diaryValue_cf:0, C_B_fossilValue_cf:0, C_B_bioValue_cf:0, C_B_elecValue_cf:0,
	C_B_plantValue_lf:0, C_B_meatValue_lf:0, C_B_diaryValue_lf:0, C_B_fossilValue_lf:0, C_B_bioValue_lf:0, C_B_elecValue_lf:0,
	C_B_plantValue_wfg:0, C_B_meatValue_wfg:0, C_B_diaryValue_wfg:0, C_B_fossilValue_wfg:0, C_B_bioValue_wfg:0, C_B_elecValue_wfg:0,
	C_B_plantValue_wfb:0, C_B_meatValue_wfb:0, C_B_diaryValue_wfb:0, C_B_fossilValue_wfb:0, C_B_bioValue_wfb:0, C_B_elecValue_wfb:0,
	// Richieste alla regione C da parte della regione D
	C_D_plant_based:"no", C_D_meat_and_fish:"no", C_D_diary_and_eggs:"no", C_D_fossil_fuels:"no", C_D_biofuels:"no", C_D_electricity:"no",
	C_D_plantValue_cf:0, C_D_meatValue_cf:0, C_D_diaryValue_cf:0, C_D_fossilValue_cf:0, C_D_bioValue_cf:0, C_D_elecValue_cf:0,
	C_D_plantValue_lf:0, C_D_meatValue_lf:0, C_D_diaryValue_lf:0, C_D_fossilValue_lf:0, C_D_bioValue_lf:0, C_D_elecValue_lf:0,
	C_D_plantValue_wfg:0, C_D_meatValue_wfg:0, C_D_diaryValue_wfg:0, C_D_fossilValue_wfg:0, C_D_bioValue_wfg:0, C_D_elecValue_wfg:0,
	C_D_plantValue_wfb:0, C_D_meatValue_wfb:0, C_D_diaryValue_wfb:0, C_D_fossilValue_wfb:0, C_D_bioValue_wfb:0, C_D_elecValue_wfb:0,
	
	// Richieste alla regione D da parte della regione A
	D_A_plant_based:"no", D_A_meat_and_fish:"no", D_A_diary_and_eggs:"no", D_A_fossil_fuels:"no", D_A_biofuels:"no", D_A_electricyt:"no",
	D_A_plantValue_cf:0, D_A_meatValue_cf:0, D_A_diaryValue_cf:0, D_A_fossilValue_cf:0, D_A_bioValue_cf:0, D_A_elecValue_cf:0,
	D_A_plantValue_lf:0, D_A_meatValue_lf:0, D_A_diaryValue_lf:0, D_A_fossilValue_lf:0, D_A_bioValue_lf:0, D_A_elecValue_lf:0,
	D_A_plantValue_wfg:0, D_A_meatValue_wfg:0, D_A_diaryValue_wfg:0, D_A_fossilValue_wfg:0, D_A_bioValue_wfg:0, D_A_elecValue_wfg:0,
	D_A_plantValue_wfb:0, D_A_meatValue_wfb:0, D_A_diaryValue_wfb:0, D_A_fossilValue_wfb:0, D_A_bioValue_wfb:0, D_A_elecValue_wfb:0,
	// Richieste alla regione D da parte della regione B
	D_B_plant_based:"no", D_B_meat_and_fish:"no", D_B_diary_and_eggs:"no", D_B_fossil_fuels:"no", D_B_biofuels:"no", D_B_electricity:"no",
	D_B_plantValue_cf:0, D_B_meatValue_cf:0, D_B_diaryValue_cf:0, D_B_fossilValue_cf:0, D_B_bioValue_cf:0, D_B_elecValue_cf:0,
	D_B_plantValue_lf:0, D_B_meatValue_lf:0, D_B_diaryValue_lf:0, D_B_fossilValue_lf:0, D_B_bioValue_lf:0, D_B_elecValue_lf:0,
	D_B_plantValue_wfg:0, D_B_meatValue_wfg:0, D_B_diaryValue_wfg:0, D_B_fossilValue_wfg:0, D_B_bioValue_wfg:0, D_B_elecValue_wfg:0,
	D_B_plantValue_wfb:0, D_B_meatValue_wfb:0, D_B_diaryValue_wfb:0, D_B_fossilValue_wfb:0, D_B_bioValue_wfb:0, D_B_elecValue_wfb:0,
	// Richieste alla regione D da parte della regione C
	D_C_plant_based:"no", D_C_meat_and_fish:"no", D_C_diary_and_fish:"no", D_C_fossil_fuels:"no", D_C_biofuels:"no", D_C_electricity:"no",
	D_C_plantValue_cf:0, D_C_meatValue_cf:0, D_C_diaryValue_cf:0, D_C_fossilValue_cf:0, D_C_bioValue_cf:0, D_C_elecValue_cf:0,
	D_C_plantValue_lf:0, D_C_meatValue_lf:0, D_C_diaryValue_lf:0, D_C_fossilValue_lf:0, D_C_bioValue_lf:0, D_C_elecValue_lf:0,
	D_C_plantValue_wfg:0, D_C_meatValue_wfg:0, D_C_diaryValue_wfg:0, D_C_fossilValue_wfg:0, D_C_bioValue_wfg:0, D_C_elecValue_wfg:0,
	D_C_plantValue_wfb:0, D_C_meatValue_wfb:0, D_C_diaryValue_wfb:0, D_C_fossilValue_wfb:0, D_C_bioValue_wfb:0, D_C_elecValue_wfb:0,
};

function NoTrade(keyRequest) {
	//////////alert("Sono dentro noTrade. Valore di keyR: "+keyRequest);
	for (var key in centralRequest) {
		if(key==keyRequest) {
			// La richiesta è stata ricevuta quindi metto a false l'indicatore che la richiesta è stata inviata.
			// l'oggetto centralRequest si trova dentro il file sendRequest.js
			centralRequest[key]=false;
		}
	}
	//////////alert("Richiesta "+keyRequest+": "+centralRequest[keyRequest]);
	// La funzione numberRequest() si trova dentro il file localData_3_f.js
	numberRequest();
	document.getElementById(keyRequest).remove();
}


function Trade_Calc(regiontoA, regionfrA, buttonA, valueA, xA, yA, whoCallA) {
	////alert("DATA FETCH TRADE CALC: "+regiontoA+" "+regionfrA+" "+buttonA+" "+valueA+" "+xA+" "+yA+" "+whoCallA);

	//alert("PRIMA RIGA DENTRO LA FUNZIONE TRADE CALC ");
	
	


	/*var test = localStorage.getItem["region"+containerRegionAddebt+"DataOutput"];
	test = JSON.parse(test);
	//////alert("TEST DA CALC: "+test);
	//////alert("CONTENUTO DI TEST: "+test["biofuelp"]);*/
regionfr = regionfrA;
	regionto = regiontoA;
		button = buttonA;
			value = valueA;
				x = xA;
					y = yA;
						whoCall = whoCallA; 
		
	
	
	var temp = button.replace(' ', '_');
	//var temp2 = button.replace(/ /g, '_');
if(temp == "diary_and eggs") {
	temp = "diary_and_eggs";
}
if (temp == "meat_and fish") {
	temp = "meat_and_fish";
}else{}
//////alert("Replace di meat or diary: "+temp);
	var keyExport=regionto+"_"+regionfr+"_"+temp;
	////////alert("Valore di keyExport: "+keyExport);
	
	////////alert("Whocall: "+whoCall);
	// REGISTRO IL BOTTONE Yes - Test - No che ha mandato la richiesta di Trade.
	if(whoCall=="yes") {
		centralExport[keyExport]="yes";
		////////alert(keyExport+" Export: "+centralExport[keyExport]);
	}
	else if(whoCall=="test") {
		centralExport[keyExport]="test";
	}
	else {
		centralExport[keyExport]="no";
	}
	
/*//alert("Valore di centralExport[keyExport]: "+centralExport[keyExport]);
for(var key in centralExport){
	//alert("ELEMENTO"+key+" central export:"+key+" = "+centralExport[key]+" ");
}*/
	// ==========================================================================================================================
	
	//////alert("SONO DENTRO LA FUNZIONE TRADE, DOPO KEY EXPORTS");
	////////alert("Se sono qui dentro, vuol dire che ho cliccato sì alla richiesta di Trade, quindi aggiorno il valore di centralExport a sì");

	//inizio IF Trade
	
	var EUrA = 63.651;
	var EUrB = 38.559;
	var EUrC = 234.126;
	var EUrD = 177.143;
	
	var pwfg = 0;
	var mwfg = 0;
	var dwfg = 0;
	var fwfg = 0;
	var bwfg = 0;
	var ewfg = 0;

	var pwfb = 0;
	var mwfb = 0;
	var dwfb = 0;
	var fwfb = 0;
	var bwfb = 0;
	var ewfb = 0;

	var pcf = 0;
	var mcf = 0;
	var dcf = 0;
	var fcf = 0;
	var bcf = 0;
	var ecf = 0;

	var plf = 0;
	var mlf = 0;
	var dlf = 0;
	var flf = 0;
	var blf = 0;
	var elf = 0;

	var reslf= 0;
	var reslfen= 0;
	var rescf= 0;
	var rescfen= 0;
	var reswfb= 0;
	var reswfben= 0;
	var reswfg= 0;
	var reswfgen= 0;
	
	var Afood_wfg = 0; var Bfood_wfg = 0; var Cfood_wfg = 0; var Dfood_wfg = 0;
	var Afood_wfb = 0; var Bfood_wfb = 0; var Cfood_wfb = 0; var Dfood_wfb = 0;
	var Afood_lf = 0; var Bfood_lf = 0; var Cfood_lf = 0; var Dfood_lf = 0;
	var Afood_cf = 0; var Bfood_cf = 0; var Cfood_cf = 0; var Dfood_cf = 0;
	
	//var REGIONA_B_wfg = (localStorage.getItem("REGIONA_B_wfg")!=null)?localStorage.getItem("REGIONA_B_wfg"):0;
	var REGIONA_B_wfg = (localStorage.getItem("REGIONA_B_wfg")!=null)?localStorage.getItem("REGIONA_B_wfg"):0;
	var REGIONA_B_wfb = (localStorage.getItem("REGIONA_B_wfb")!=null)?localStorage.getItem("REGIONA_B_wfb"):0; 
	var REGIONA_B_cf = (localStorage.getItem("REGIONA_B_cf")!=null)?localStorage.getItem("REGIONA_B_cf"):0; 
	var REGIONA_B_lf = (localStorage.getItem("REGIONA_B_lf")!=null)?localStorage.getItem("REGIONA_B_lf"):0;
	
	var REGIONA_C_wfg = (localStorage.getItem("REGIONA_C_wfg")!=null)?localStorage.getItem("REGIONA_C_wfg"):0;
	var REGIONA_C_wfb = (localStorage.getItem("REGIONA_C_wfb")!=null)?localStorage.getItem("REGIONA_C_wfb"):0; 
	var REGIONA_C_cf = (localStorage.getItem("REGIONA_C_cf")!=null)?localStorage.getItem("REGIONA_C_cf"):0; 
	var REGIONA_C_lf = (localStorage.getItem("REGIONA_C_lf")!=null)?localStorage.getItem("REGIONA_C_lf"):0;
	
	var REGIONA_D_wfg = (localStorage.getItem("REGIONA_D_wfg")!=null)?localStorage.getItem("REGIONA_D_wfg"):0;
	var REGIONA_D_wfb = (localStorage.getItem("REGIONA_D_wfb")!=null)?localStorage.getItem("REGIONA_D_wfb"):0; 
	var REGIONA_D_cf = (localStorage.getItem("REGIONA_D_cf")!=null)?localStorage.getItem("REGIONA_D_cf"):0; 
	var REGIONA_D_lf = (localStorage.getItem("REGIONA_D_lf")!=null)?localStorage.getItem("REGIONA_D_lf"):0;
	
	var REGIONB_A_wfg = (localStorage.getItem("REGIONB_A_wfg")!=null)?localStorage.getItem("REGIONB_A_wfg"):0;
	var REGIONB_A_wfb = (localStorage.getItem("REGIONB_A_wfb")!=null)?localStorage.getItem("REGIONB_A_wfb"):0; 
	var REGIONB_A_cf = (localStorage.getItem("REGIONB_A_cf")!=null)?localStorage.getItem("REGIONB_A_cf"):0; 
	var REGIONB_A_lf = (localStorage.getItem("REGIONB_A_lf")!=null)?localStorage.getItem("REGIONB_A_lf"):0;
	
	var REGIONB_C_wfg = (localStorage.getItem("REGIONB_C_wfg")!=null)?localStorage.getItem("REGIONB_C_wfg"):0;
	var REGIONB_C_wfb = (localStorage.getItem("REGIONB_C_wfb")!=null)?localStorage.getItem("REGIONB_C_wfb"):0; 
	var REGIONB_C_cf = (localStorage.getItem("REGIONB_C_cf")!=null)?localStorage.getItem("REGIONB_C_cf"):0; 
	var REGIONB_C_lf = (localStorage.getItem("REGIONB_C_lf")!=null)?localStorage.getItem("REGIONB_C_lf"):0;
	
	var REGIONB_D_wfg = (localStorage.getItem("REGIONB_D_wfg")!=null)?localStorage.getItem("REGIONB_D_wfg"):0;
	var REGIONB_D_wfb = (localStorage.getItem("REGIONB_D_wfb")!=null)?localStorage.getItem("REGIONB_D_wfb"):0; 
	var REGIONB_D_cf = (localStorage.getItem("REGIONB_D_cf")!=null)?localStorage.getItem("REGIONB_D_cf"):0; 
	var REGIONB_D_lf = (localStorage.getItem("REGIONB_D_lf")!=null)?localStorage.getItem("REGIONB_D_lf"):0;
	
	var REGIONC_A_wfg = (localStorage.getItem("REGIONC_A_wfg")!=null)?localStorage.getItem("REGIONC_A_wfg"):0;
	var REGIONC_A_wfb = (localStorage.getItem("REGIONC_A_wfb")!=null)?localStorage.getItem("REGIONC_A_wfb"):0; 
	var REGIONC_A_cf = (localStorage.getItem("REGIONC_A_cf")!=null)?localStorage.getItem("REGIONC_A_cf"):0; 
	var REGIONC_A_lf = (localStorage.getItem("REGIONC_A_lf")!=null)?localStorage.getItem("REGIONC_A_lf"):0;
	
	var REGIONC_B_wfg = (localStorage.getItem("REGIONC_B_wfg")!=null)?localStorage.getItem("REGIONC_B_wfg"):0;
	var REGIONC_B_wfb = (localStorage.getItem("REGIONC_B_wfb")!=null)?localStorage.getItem("REGIONC_B_wfb"):0; 
	var REGIONC_B_cf = (localStorage.getItem("REGIONC_B_cf")!=null)?localStorage.getItem("REGIONC_B_cf"):0; 
	var REGIONC_B_lf = (localStorage.getItem("REGIONC_B_lf")!=null)?localStorage.getItem("REGIONC_B_lf"):0;
	
	var REGIONC_D_wfg = (localStorage.getItem("REGIONC_D_wfg")!=null)?localStorage.getItem("REGIONC_D_wfg"):0;
	var REGIONC_D_wfb = (localStorage.getItem("REGIONC_D_wfb")!=null)?localStorage.getItem("REGIONC_D_wfb"):0; 
	var REGIONC_D_cf = (localStorage.getItem("REGIONC_D_cf")!=null)?localStorage.getItem("REGIONC_D_cf"):0; 
	var REGIONC_D_lf = (localStorage.getItem("REGIONC_D_lf")!=null)?localStorage.getItem("REGIONC_D_lf"):0;
	
	var REGIOND_A_wfg = (localStorage.getItem("REGIOND_A_wfg")!=null)?localStorage.getItem("REGIOND_A_wfg"):0;
	var REGIOND_A_wfb = (localStorage.getItem("REGIOND_A_wfb")!=null)?localStorage.getItem("REGIOND_A_wfb"):0; 
	var REGIOND_A_cf = (localStorage.getItem("REGIOND_A_cf")!=null)?localStorage.getItem("REGIOND_A_cf"):0; 
	var REGIOND_A_lf = (localStorage.getItem("REGIOND_A_lf")!=null)?localStorage.getItem("REGIOND_A_lf"):0;
	
	var REGIOND_B_wfg = (localStorage.getItem("REGIOND_B_wfg")!=null)?localStorage.getItem("REGIOND_B_wfg"):0;
	var REGIOND_B_wfb = (localStorage.getItem("REGIOND_B_wfb")!=null)?localStorage.getItem("REGIOND_B_wfb"):0; 
	var REGIOND_B_cf = (localStorage.getItem("REGIOND_B_cf")!=null)?localStorage.getItem("REGIOND_B_cf"):0; 
	var REGIOND_B_lf = (localStorage.getItem("REGIOND_B_lf")!=null)?localStorage.getItem("REGIOND_B_lf"):0;
	
	var REGIOND_C_wfg = (localStorage.getItem("REGIOND_C_wfg")!=null)?localStorage.getItem("REGIOND_C_wfg"):0;
	var REGIOND_C_wfb = (localStorage.getItem("REGIOND_C_wfb")!=null)?localStorage.getItem("REGIOND_C_wfb"):0; 
	var REGIOND_C_cf = (localStorage.getItem("REGIOND_C_cf")!=null)?localStorage.getItem("REGIOND_C_cf"):0; 
	var REGIOND_C_lf = (localStorage.getItem("REGIOND_C_lf")!=null)?localStorage.getItem("REGIOND_C_lf"):0;
	
	//////alert("DOPO LE VARIABILI, INIZIO DEGLI IF ");
//////alert("VALORE REGION TO: "+regionto);
//////alert("VALORE REGION FROM: "+regionfr);
//var xx = localStorage.getItem("region"+containerRegionAddebt+"DataOutput");
//////alert("RICHIAMO OGGETTO: "+xx);
//var yy = localStorage.getItem("region"+regionfr+"DataOutput");
//////alert("LO RICHIAMO CON UN ALTRO DEI PARAMETRI: "+yy);
//var test = localStorage.getItem("region"+containerRegionAddebt+"DataOutput");
//test = JSON.parse(test);
//////alert("TEST NAME  "+containerRegionAddebt+" : "+yy);
//////alert("PROVA KEY: "+yy["A_B_plantValue_wfg"]);
//	//console.log("VALORE DELL'OGGETTO B: "+localStorage.getItem("region"+containerRegionAddebt+"DataOutput"));
//	//console.log("VALORE DELL'OGGETTO B DUE: "+localStorage.getItem("regionBDataOutput"));
////////alert("CONTENUTO DI A_B_PLANTVALUE: "+localStorage.getItem("region"+containerRegionAddebt+"DataOutput")["A_B_plantValue_wfg"]);
////////alert("CONTENUTO DI A_B_PLANTVALUE: "+JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_plantValue_wfg"]);

	//------ REGION A ------
	if((regionto == "A" ) && (regionfr=="B")) {
	//alert("DENTRO FROM B TO A ");

		chi_da =  EUrA;
		chi_chiede = EUrB;
		//////alert("EURA"+EUrA);
		//////alert("EURB"+EUrB);
		//wfg
		//var sumwfg = pwfg+mwfg+dwfg;
	


tempPlant = (centralExport['A_B_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_plantValue_wfg"]);
		tempMeat = (centralExport['A_B_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_meatValue_wfg"]);
		tempDiary = (centralExport['A_B_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_diaryValue_wfg"]);
		
		if((tempPlant==null)||(tempMeat==null)||(tempDiary==null)) {
			tempPlant = 0;
			tempMeat = 0;
			tempDiary = 0;
		} else {
			tempPlant = tempPlant;
			tempMeat = tempMeat;
			tempDiary = tempDiary;
		}
	//alert("WFG: Plant: "+tempPlant+" Meat: "+tempMeat+" Diary: "+tempDiary);
		
		var sumwfg = tempPlant+tempMeat+tempDiary;
		var molwfg = sumwfg*(chi_chiede/chi_da);
		reswfg = molwfg;


		tempFossil = (centralExport['A_B_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_fossilValue_wfg"]);
		tempBio = (centralExport['A_B_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_bioValue_wfg"]);
		tempElec = (centralExport['A_B_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_elecValue_wfg"]);
		
		if((tempFossil==null)||(tempBio==null)||(tempElec==null)) {
			tempFossil = 0;
			tempBio = 0;
			tempElec = 0;
		} else {
			tempFossil = tempFossil;
			tempBio = tempBio;
			tempElec = tempElec;
		}
		
		//alert("WFG: Fossil: "+tempFossil+" Bio: "+tempBio+" Elec: "+tempElec);
		
		var sumwfgen = tempFossil+tempBio+tempElec;
		var molwfgen = sumwfgen*(chi_chiede/chi_da);
		reswfgen = molwfgen;

		//Afood_wfg = reswfg+reswfgen;
		//REGIONA_B_wfg = Afood_wfg;
		Bfood_wfg = reswfg+reswfgen;
		
	//alert("WFG: Food: "+reswfg+" Energy: "+reswfgen+" Sum: "+Bfood_wfg);
		
		REGIONA_B_wfg = Bfood_wfg;	
		
	//alert("WFG: Region: "+REGIONA_B_wfg);
	
		tempPlant = (centralExport['A_B_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_plantValue_wfb"]);
		tempMeat = (centralExport['A_B_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_meatValue_wfb"]);
		tempDiary = (centralExport['A_B_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_diaryValue_wfb"]);
		
		if((tempPlant==null)||(tempMeat==null)||(tempDiary==null)) {
			tempPlant = 0;
			tempMeat = 0;
			tempDiary = 0;
		} else {
			tempPlant = tempPlant;
			tempMeat = tempMeat;
			tempDiary = tempDiary;
		}
	//alert("WFB: Plant: "+tempPlant+" Meat: "+tempMeat+" Diary: "+tempDiary);
		
		var sumwfb = tempPlant+tempMeat+tempDiary;
		var molwfb = sumwfb*(chi_chiede/chi_da);
		reswfb = molwfb;

		tempFossil = (centralExport['A_B_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_fossilValue_wfb"]);
		tempBio = (centralExport['A_B_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_bioValue_wfb"]);
		tempElec = (centralExport['A_B_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_elecValue_wfb"]);
		
		if((tempFossil==null)||(tempBio==null)||(tempElec==null)) {
			tempFossil = 0;
			tempBio = 0;
			tempElec = 0;
		} else {
			tempFossil = tempFossil;
			tempBio = tempBio;
			tempElec = tempElec;
		}
	//alert("WFB: Fossil: "+tempFossil+" Bio: "+tempBio+" Elec: "+tempElec);
		
		var sumwfben = tempFossil+tempBio+tempElec;
		var molwfben = sumwfben*(chi_chiede/chi_da);
		reswfben = molwfben;

		Bfood_wfb = reswfb+reswfben;
		REGIONA_B_wfb = Bfood_wfb;
		
	//alert("WFB: Region: "+REGIONA_B_wfb);
		
	
		tempPlant = (centralExport['A_B_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_plantValue_cf"]);
		tempMeat = (centralExport['A_B_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_meatValue_cf"]);
		tempDiary = (centralExport['A_B_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_diaryValue_cf"]);
		//alert("Valore di tempPlant: "+tempPlant+" Valore di tempMeat: "+tempMeat);
		if((tempPlant==null)||(tempMeat==null)||(tempDiary==null)) {
			tempPlant = 0;
			tempMeat = 0;
			tempDiary = 0;
		} else {
			tempPlant = tempPlant;
			tempMeat = tempMeat;
			tempDiary = tempDiary;
		}
//alert("CF: Plant: "+tempPlant+" Meat: "+tempMeat+" Diary: "+tempDiary);
		
		var sumcf = tempPlant+tempMeat+tempDiary;
		////////alert("Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molcf = sumcf*(chi_chiede/chi_da);
		rescf = molcf;

		
		tempFossil = (centralExport['A_B_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_fossilValue_cf"]);
		tempBio = (centralExport['A_B_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_bioValue_cf"]);
		tempElec = (centralExport['A_B_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_elecValue_cf"]);
		
		if((tempFossil==null)||(tempBio==null)||(tempElec==null)) {
			tempFossil = 0;
			tempBio = 0;
			tempElec = 0;
		} else {
			tempFossil = tempFossil;
			tempBio = tempBio;
			tempElec = tempElec;
		}
		////////alert("CF: Fossil: "+tempFossil+" Bio: "+tempBio+" Elec: "+tempElec);
		
		var sumcfen = tempFossil+tempBio+tempElec;
		var molcfen = sumcfen*(chi_chiede/chi_da);
		rescfen = molcfen;
		

		//Afood_cf = rescf+rescfen;
		//REGIONA_B_cf = Afood_cf;
		
		Bfood_cf = rescf+rescfen;
		REGIONA_B_cf = Number(Bfood_cf);

		//////alert("CF: Region: "+REGIONA_B_cf);

		
		tempPlant = (centralExport['A_B_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_plantValue_lf"]);
		tempMeat = (centralExport['A_B_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_meatValue_lf"]);
		tempDiary = (centralExport['A_B_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_diaryValue_lf"]);
		
		////////alert("LF: Plant: "+tempPlant+" Meat: "+tempMeat+" Diary: "+tempDiary);
		if((tempPlant==null)||(tempMeat==null)||(tempDiary==null)) {
			tempPlant = 0;
			tempMeat = 0;
			tempDiary = 0;
		} else {
			tempPlant = tempPlant;
			tempMeat = tempMeat;
			tempDiary = tempDiary;
		}
		
	  	var sumlf = tempPlant+tempMeat+tempDiary;
	  	var mollf = sumlf*(chi_chiede/chi_da);
	  	reslf = mollf;

	  	
		tempFossil = (centralExport['A_B_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_fossilValue_lf"]);
		tempBio = (centralExport['A_B_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_bioValue_lf"]);
		tempElec = (centralExport['A_B_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_B_elecValue_lf"]);
		
		if((tempFossil==null)||(tempBio==null)||(tempElec==null)) {
			tempFossil = 0;
			tempBio = 0;
			tempElec = 0;
		} else {
			tempFossil = tempFossil;
			tempBio = tempBio;
			tempElec = tempElec;
		}
		////////alert("LF: Fossil: "+tempFossil+" Bio: "+tempBio+" Elec: "+tempElec);
		
	  	var sumlfen = tempFossil+tempBio+tempElec;
	  	var mollfen = sumlfen*(chi_chiede/chi_da);
	  	reslfen = mollfen;
		
		//Afood_lf = reslf+reslfen;
		//REGIONA_B_lf = Afood_lf;
		Bfood_lf = reslf+reslfen;
		REGIONA_B_lf = Number(Bfood_lf);
		
		////////alert("LF: Region: "+REGIONA_B_lf);
		

		//console.log("Valore dell'oggetto B: "+localStorage.getItem("regionBDataOutput"));
	}
	else if((regionto == "A" )&&(regionfr=="C")) {
		////////alert("REGION FROM: "+regionfr+" REGION TO: "+regionto+" REGION CHECKATA: "+Actual_Region_id);
		chi_da = EUrA;
		chi_chiede = EUrC;

		tempPlant = (centralExport['A_C_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_plantValue_wfg"]);
		tempMeat = (centralExport['A_C_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_meatValue_wfg"]);
		tempDiary = (centralExport['A_C_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_diaryValue_wfg"]);
		
		if((tempPlant==null)||(tempMeat==null)||(tempDiary==null)) {
			tempPlant = 0;
			tempMeat = 0;
			tempDiary = 0;
		} else {
			tempPlant = tempPlant;
			tempMeat = tempMeat;
			tempDiary = tempDiary;
		}
		
		var sumwfg = tempPlant+tempMeat+tempDiary;
		var molwfg = sumwfg*(chi_chiede/chi_da);
		reswfg = molwfg;

		//var sumwfgen = fwfg+bwfg+ewfg;
		tempFossil = (centralExport['A_C_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_fossilValue_wfg"]);
		tempBio = (centralExport['A_C_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_bioValue_wfg"]);
		tempElec = (centralExport['A_C_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_elecValue_wfg"]);
		
		if((tempFossil==null)||(tempBio==null)||(tempElec==null)) {
			tempFossil = 0;
			tempBio = 0;
			tempElec = 0;
		} else {
			tempFossil = tempFossil;
			tempBio = tempBio;
			tempElec = tempElec;
		}
		
		var sumwfgen = tempFossil+tempBio+tempElec;
		var molwfgen = sumwfgen*(chi_chiede/chi_da);
		reswfgen = molwfgen;

		//Afood_wfg = reswfg+reswfgen;
		//REGIONA_C_wfg = Afood_wfg;
		Cfood_wfg = reswfg+reswfgen;
		REGIONA_C_wfg = Number(Cfood_wfg);
		
		//wfb
		//var sumwfb = pwfb+mwfb+dwfb;
		tempPlant = (centralExport['A_C_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_plantValue_wfb"]);
		tempMeat = (centralExport['A_C_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_meatValue_wfb"]);
		tempDiary = (centralExport['A_C_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_diaryValue_wfb"]);
		
		if((tempPlant==null)||(tempMeat==null)||(tempDiary==null)) {
			tempPlant = 0;
			tempMeat = 0;
			tempDiary = 0;
		} else {
			tempPlant = tempPlant;
			tempMeat = tempMeat;
			tempDiary = tempDiary;
		}
		
		var sumwfb = tempPlant+tempMeat+tempDiary;
		var molwfb = sumwfb*(chi_chiede/chi_da);
		reswfb = molwfb;

		//var sumwfben = fwfb+bwfb+ewfb;
		tempFossil = (centralExport['A_C_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_fossilValue_wfb"]);
		tempBio = (centralExport['A_C_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_bioValue_wfb"]);
		tempElec = (centralExport['A_C_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_elecValue_wfb"]);
		
		if((tempFossil==null)||(tempBio==null)||(tempElec==null)) {
			tempFossil = 0;
			tempBio = 0;
			tempElec = 0;
		} else {
			tempFossil = tempFossil;
			tempBio = tempBio;
			tempElec = tempElec;
		}
		var sumwfben = tempFossil+tempBio+tempElec;
		var molwfben = sumwfben*(chi_chiede/chi_da);
		reswfben = molwfben;

		//Afood_wfb = reswfb+reswfben;
		//REGIONA_C_wfb = Afood_wfb;
		Cfood_wfb = reswfb+reswfben;
		REGIONA_C_wfb = Number(Cfood_wfb);
		
		//cf
		//var sumcf = pcf+mcf+dcf;
		//var sumcf = centralExport['A_C_plantValue_cf']+centralExport['A_C_meatValue_cf']+centralExport['A_C_diaryValue_cf'];
		tempPlant = (centralExport['A_C_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_plantValue_cf"]);
		tempMeat = (centralExport['A_C_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_meatValue_cf"]);
		tempDiary = (centralExport['A_C_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_diaryValue_cf"]);
		////////alert("Valore di tempPlant: "+tempPlant+" Valore di tempMeat: "+tempMeat);
		
		if((tempPlant==null)||(tempMeat==null)||(tempDiary==null)) {
			tempPlant = 0;
			tempMeat = 0;
			tempDiary = 0;
		} else {
			tempPlant = tempPlant;
			tempMeat = tempMeat;
			tempDiary = tempDiary;
		}
		
		var sumcf = tempPlant+tempMeat+tempDiary;
		////////alert("Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molcf = sumcf*(chi_chiede/chi_da);
		rescf = molcf;

		//var sumcfen = fcf+bcf+ecf;
		tempFossil = (centralExport['A_C_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_fossilValue_cf"]);
		tempBio = (centralExport['A_C_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_bioValue_cf"]);
		tempElec = (centralExport['A_C_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_elecValue_cf"]);
		if((tempFossil==null)||(tempBio==null)||(tempElec==null)) {
			tempFossil = 0;
			tempBio = 0;
			tempElec = 0;
		} else {
			tempFossil = tempFossil;
			tempBio = tempBio;
			tempElec = tempElec;
		}
		var sumcfen = tempFossil+tempBio+tempElec;
		var molcfen = sumcfen*(chi_chiede/chi_da);
		rescfen = molcfen;
		
		
		
		Cfood_cf = rescf+rescfen;
		REGIONA_C_cf = Number(Cfood_cf);

		//lf
		//var sumlf = plf+mlf+dlf;
		tempPlant = (centralExport['A_C_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_plantValue_lf"]);
		tempMeat = (centralExport['A_C_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_meatValue_lf"]);
		tempDiary = (centralExport['A_C_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_diaryValue_lf"]);
		
		if((tempPlant==null)||(tempMeat==null)||(tempDiary==null)) {
			tempPlant = 0;
			tempMeat = 0;
			tempDiary = 0;
		} else {
			tempPlant = tempPlant;
			tempMeat = tempMeat;
			tempDiary = tempDiary;
		}
		
	  	var sumlf = tempPlant+tempMeat+tempDiary;
	  	var mollf = sumlf*(chi_chiede/chi_da);
	  	reslf = mollf;

	  	//var sumlfen = flf+blf+elf;
	  	tempFossil = (centralExport['A_C_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_fossilValue_lf"]);
		tempBio = (centralExport['A_C_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_bioValue_lf"]);
		tempElec = (centralExport['A_C_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_C_elecValue_lf"]);
		
		if((tempFossil==null)||(tempBio==null)||(tempElec==null)) {
			tempFossil = 0;
			tempBio = 0;
			tempElec = 0;
		} else {
			tempFossil = tempFossil;
			tempBio = tempBio;
			tempElec = tempElec;
		}
		
	  	var sumlfen = tempFossil+tempBio+tempElec;
	  	var mollfen = sumlfen*(chi_chiede/chi_da);
	  	reslfen = mollfen;
		
		//Afood_lf = reslf+reslfen;
		//REGIONA_C_lf = Afood_lf;
		Cfood_lf = reslf+reslfen;
		REGIONA_C_lf = Number(Cfood_lf);
	}
	else if((regionto == "A" )&&(regionfr=="D")) {
		chi_da =  EUrA;
		chi_chiede = EUrD;
		//wfg
		//var sumwfg = pwfg+mwfg+dwfg;
		tempPlant = (centralExport['A_D_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_plantValue_wfg"]);
		tempMeat = (centralExport['A_D_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_meatValue_wfg"]);
		tempDiary = (centralExport['A_D_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_diaryValue_wfg"]);
		
		if((tempPlant==null)||(tempMeat==null)||(tempDiary==null)) {
			tempPlant = 0;
			tempMeat = 0;
			tempDiary = 0;
		} else {
			tempPlant = tempPlant;
			tempMeat = tempMeat;
			tempDiary = tempDiary;
		}
		
		var sumwfg = tempPlant+tempMeat+tempDiary;
		var molwfg = sumwfg*(chi_chiede/chi_da);
		reswfg = molwfg;

		//var sumwfgen = fwfg+bwfg+ewfg;
		tempFossil = (centralExport['A_D_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_fossilValue_wfg"]);
		tempBio = (centralExport['A_D_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_bioValue_wfg"]);
		tempElec = (centralExport['A_D_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_elecValue_wfg"]);
		
		if((tempFossil==null)||(tempBio==null)||(tempElec==null)) {
			tempFossil = 0;
			tempBio = 0;
			tempElec = 0;
		} else {
			tempFossil = tempFossil;
			tempBio = tempBio;
			tempElec = tempElec;
		}
		
		var sumwfgen = tempFossil+tempBio+tempElec;
		var molwfgen = sumwfgen*(chi_chiede/chi_da);
		reswfgen = molwfgen;

		//Afood_wfg = reswfg+reswfgen;
		//REGIONA_D_wfg = Afood_wfg;
		Dfood_wfg = reswfg+reswfgen;
		REGIONA_D_wfg = Number(Dfood_wfg);
		
		//wfb
		//var sumwfb = pwfb+mwfb+dwfb;
		tempPlant = (centralExport['A_D_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_plantValue_wfb"]);
		tempMeat = (centralExport['A_D_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_meatValue_wfb"]);
		tempDiary = (centralExport['A_D_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_diaryValue_wfb"]);
		
		if((tempPlant==null)||(tempMeat==null)||(tempDiary==null)) {
			tempPlant = 0;
			tempMeat = 0;
			tempDiary = 0;
		} else {
			tempPlant = tempPlant;
			tempMeat = tempMeat;
			tempDiary = tempDiary;
		}
		
		var sumwfb = tempPlant+tempMeat+tempDiary;
		var molwfb = sumwfb*(chi_chiede/chi_da);
		reswfb = molwfb;

		//var sumwfben = fwfb+bwfb+ewfb;
		tempFossil = (centralExport['A_D_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_fossilValue_wfb"]);
		tempBio = (centralExport['A_D_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_bioValue_wfb"]);
		tempElec = (centralExport['A_D_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_elecValue_wfb"]);
		
		if((tempFossil==null)||(tempBio==null)||(tempElec==null)) {
			tempFossil = 0;
			tempBio = 0;
			tempElec = 0;
		} else {
			tempFossil = tempFossil;
			tempBio = tempBio;
			tempElec = tempElec;
		}
		
		var sumwfben = tempFossil+tempBio+tempElec;
		var molwfben = sumwfben*(chi_chiede/chi_da);
		reswfben = molwfben;

		//Afood_wfb = reswfb+reswfben;
		//REGIONA_D_wfb = Afood_wfb;
		Dfood_wfb = reswfb+reswfben;
		REGIONA_D_wfb = Number(Dfood_wfb);
		
		//cf
		//var sumcf = pcf+mcf+dcf;
		//var sumcf = centralExport['A_D_plantValue_cf']+centralExport['A_D_meatValue_cf']+centralExport['A_D_diaryValue_cf'];
		tempPlant = (centralExport['A_D_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_plantValue_cf"]);
		tempMeat = (centralExport['A_D_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_meatValue_cf"]);
		tempDiary = (centralExport['A_D_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_diaryValue_cf"]);
		////////alert("Valore di tempPlant: "+tempPlant+" Valore di tempMeat: "+tempMeat);
		
		if((tempPlant==null)||(tempMeat==null)||(tempDiary==null)) {
			tempPlant = 0;
			tempMeat = 0;
			tempDiary = 0;
		} else {
			tempPlant = tempPlant;
			tempMeat = tempMeat;
			tempDiary = tempDiary;
		}
		
		
		var sumcf = tempPlant+tempMeat+tempDiary;
		////////alert("Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molcf = sumcf*(chi_chiede/chi_da);
		rescf = molcf;

		//var sumcfen = fcf+bcf+ecf;
		tempFossil = (centralExport['A_D_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_fossilValue_cf"]);
		tempBio = (centralExport['A_D_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_bioValue_cf"]);
		tempElec = (centralExport['A_D_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_elecValue_cf"]);
		
		if((tempFossil==null)||(tempBio==null)||(tempElec==null)) {
			tempFossil = 0;
			tempBio = 0;
			tempElec = 0;
		} else {
			tempFossil = tempFossil;
			tempBio = tempBio;
			tempElec = tempElec;
		}
		
		var sumcfen = tempFossil+tempBio+tempElec;
		var molcfen = sumcfen*(chi_chiede/chi_da);
		rescfen = molcfen;
		
		
		Dfood_cf = rescf+rescfen;
		REGIONA_D_cf = Number(Dfood_cf);

		//lf
		//var sumlf = plf+mlf+dlf;
		tempPlant = (centralExport['A_D_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_plantValue_lf"]);
		tempMeat = (centralExport['A_D_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_meatValue_lf"]);
		tempDiary = (centralExport['A_D_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_diaryValue_lf"]);
		
		if((tempPlant==null)||(tempMeat==null)||(tempDiary==null)) {
			tempPlant = 0;
			tempMeat = 0;
			tempDiary = 0;
		} else {
			tempPlant = tempPlant;
			tempMeat = tempMeat;
			tempDiary = tempDiary;
		}
		
	  	var sumlf = tempPlant+tempMeat+tempDiary;
	  	var mollf = sumlf*(chi_chiede/chi_da);
	  	reslf = mollf;

	  	//var sumlfen = flf+blf+elf;
	  	tempFossil = (centralExport['A_D_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_fossilValue_lf"]);
		tempBio = (centralExport['A_D_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_bioValue_lf"]);
		tempElec = (centralExport['A_D_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["A_D_elecValue_lf"]);
		
		if((tempFossil==null)||(tempBio==null)||(tempElec==null)) {
			tempFossil = 0;
			tempBio = 0;
			tempElec = 0;
		} else {
			tempFossil = tempFossil;
			tempBio = tempBio;
			tempElec = tempElec;
		}
		
	  	var sumlfen = tempFossil+tempBio+tempElec;
	  	var mollfen = sumlfen*(chi_chiede/chi_da);
	  	reslfen = mollfen;
		
		//Afood_lf = reslf+reslfen;
		//REGIONA_D_lf = Afood_lf;
		Dfood_lf = reslf+reslfen;
		REGIONA_D_lf = Number(Dfood_lf);
		
	} 
	else if((regionto == "B" ) && (regionfr=="A")) {
		chi_da =  EUrB;
		chi_chiede = EUrA;
		
	//alert("SONO IN REGION FROM A TO B");
		
		//wfg
		//var sumwfg = pwfg+mwfg+dwfg;
		tempPlant = (centralExport['B_A_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_plantValue_wfg"]);
		tempMeat = (centralExport['B_A_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_meatValue_wfg"]);
		tempDiary = (centralExport['B_A_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_diaryValue_wfg"]);
		
		var sumwfg = tempPlant+tempMeat+tempDiary;
		var molwfg = sumwfg*(chi_chiede/chi_da);
		reswfg = molwfg;

		//var sumwfgen = fwfg+bwfg+ewfg;
		tempFossil = (centralExport['B_A_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_fossilValue_wfg"]);
		tempBio = (centralExport['B_A_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_bioValue_wfg"]);
		tempElec = (centralExport['B_A_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_elecValue_wfg"]);
		
		var sumwfgen = tempFossil+tempBio+tempElec;
		var molwfgen = sumwfgen*(chi_chiede/chi_da);
		reswfgen = molwfgen;

		//Afood_wfg = reswfg+reswfgen;
		//REGIONB_A_wfg = Afood_wfg;
		Afood_wfg = reswfg+reswfgen;
		REGIONB_A_wfg = Afood_wfg;
		
		//wfb
		//var sumwfb = pwfb+mwfb+dwfb;
		tempPlant = (centralExport['B_A_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_plantValue_wfb"]);
		tempMeat = (centralExport['B_A_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_meatValue_wfb"]);
		tempDiary = (centralExport['B_A_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_diaryValue_wfb"]);
		
		var sumwfb = tempPlant+tempMeat+tempDiary;
		var molwfb = sumwfb*(chi_chiede/chi_da);
		reswfb = molwfb;

		//var sumwfben = fwfb+bwfb+ewfb;
		tempFossil = (centralExport['B_A_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_fossilValue_wfb"]);
		tempBio = (centralExport['B_A_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_bioValue_wfb"]);
		tempElec = (centralExport['B_A_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_elecValue_wfb"]);
		
		var sumwfben = tempFossil+tempBio+tempElec;
		var molwfben = sumwfben*(chi_chiede/chi_da);
		reswfben = molwfben;

		//Afood_wfb = reswfb+reswfben;
		//REGIONB_A_wfb = Afood_wfb;
		Afood_wfb = reswfb+reswfben;
		REGIONB_A_wfb = Afood_wfb;
		
		//cf
		//var sumcf = pcf+mcf+dcf;
		//var sumcf = centralExport['B_A_plantValue_cf']+centralExport['B_A_meatValue_cf']+centralExport['B_A_diaryValue_cf'];
		tempPlant = (centralExport['B_A_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_plantValue_cf"]);
		tempMeat = (centralExport['B_A_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_meatValue_cf"]);
		tempDiary = (centralExport['B_A_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_diaryValue_cf"]);
		////////alert("Valore di tempPlant: "+tempPlant+" Valore di tempMeat: "+tempMeat);
		
		var sumcf = tempPlant+tempMeat+tempDiary;
		//("Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molcf = sumcf*(chi_chiede/chi_da);
		rescf = molcf;

		//var sumcfen = fcf+bcf+ecf;
		tempFossil = (centralExport['B_A_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_fossilValue_cf"]);
		tempBio = (centralExport['B_A_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_bioValue_cf"]);
		tempElec = (centralExport['B_A_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_elecValue_cf"]);
		
		var sumcfen = tempFossil+tempBio+tempElec;
		var molcfen = sumcfen*(chi_chiede/chi_da);
		rescfen = molcfen;
		
		////console.log("chi da: "+chi_da);
		////console.log("chi_chiede "+chi_chiede);
		////console.log("sumwfg "+sumwfg);
		////console.log("molwfg "+molwfg);
		////console.log("PCF "+pcf);
		////console.log("MCF "+mcf);
		////console.log("DIARY "+dcf);

		//Afood_cf = rescf+rescfen;
		//REGIONB_A_cf = Afood_cf;
		
		Afood_cf = rescf+rescfen;
		REGIONB_A_cf = Afood_cf;

		//lf
		//var sumlf = plf+mlf+dlf;
		tempPlant = (centralExport['B_A_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_plantValue_lf"]);
		tempMeat = (centralExport['B_A_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_meatValue_lf"]);
		tempDiary = (centralExport['B_A_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_diaryValue_lf"]);
		
	  	var sumlf = tempPlant+tempMeat+tempDiary;
	  	var mollf = sumlf*(chi_chiede/chi_da);
	  	reslf = mollf;

	  	//var sumlfen = flf+blf+elf;
	  	tempFossil = (centralExport['B_A_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_fossilValue_lf"]);
		tempBio = (centralExport['B_A_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_bioValue_lf"]);
		tempElec = (centralExport['B_A_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_A_elecValue_lf"]);
		
	  	var sumlfen = tempFossil+tempBio+tempElec;
	  	var mollfen = sumlfen*(chi_chiede/chi_da);
	  	reslfen = mollfen;
		
		//Afood_lf = reslf+reslfen;
		//REGIONB_A_lf = Afood_lf;
		Afood_lf = reslf+reslfen;
		REGIONB_A_lf = Afood_lf;
	}
	else if((regionto == "B" )&&(regionfr=="C")) {
		chi_da =  EUrB;
		chi_chiede = EUrC;
		
		//wfg
		//var sumwfg = pwfg+mwfg+dwfg;
		tempPlant = (centralExport['B_C_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_plantValue_wfg"]);
		tempMeat = (centralExport['B_C_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_meatValue_wfg"]);
		tempDiary = (centralExport['B_C_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_diaryValue_wfg"]);
		
		var sumwfg = tempPlant+tempMeat+tempDiary;
		var molwfg = sumwfg*(chi_chiede/chi_da);
		reswfg = molwfg;

		//var sumwfgen = fwfg+bwfg+ewfg;
		tempFossil = (centralExport['B_C_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_fossilValue_wfg"]);
		tempBio = (centralExport['B_C_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_bioValue_wfg"]);
		tempElec = (centralExport['B_C_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_elecValue_wfg"]);
		
		var sumwfgen = tempFossil+tempBio+tempElec;
		var molwfgen = sumwfgen*(chi_chiede/chi_da);
		reswfgen = molwfgen;

		//Afood_wfg = reswfg+reswfgen;
		//REGIONB_C_wfg = Afood_wfg;
		Cfood_wfg = reswfg+reswfgen;
		REGIONB_C_wfg = Cfood_wfg;
		
		//wfb
		//var sumwfb = pwfb+mwfb+dwfb;
		tempPlant = (centralExport['B_C_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_plantValue_wfb"]);
		tempMeat = (centralExport['B_C_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_meatValue_wfb"]);
		tempDiary = (centralExport['B_C_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_diaryValue_wfb"]);
		
		var sumwfb = tempPlant+tempMeat+tempDiary;
		var molwfb = sumwfb*(chi_chiede/chi_da);
		reswfb = molwfb;

		//var sumwfben = fwfb+bwfb+ewfb;
		tempFossil = (centralExport['B_C_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_fossilValue_wfb"]);
		tempBio = (centralExport['B_C_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_bioValue_wfb"]);
		tempElec = (centralExport['B_C_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_elecValue_wfb"]);
		
		var sumwfben = tempFossil+tempBio+tempElec;
		var molwfben = sumwfben*(chi_chiede/chi_da);
		reswfben = molwfben;

		//Afood_wfb = reswfb+reswfben;
		//REGIONB_C_wfb = Afood_wfb;
		Cfood_wfb = reswfb+reswfben;
		REGIONB_C_wfb = Cfood_wfb;
		
		//cf
		//var sumcf = pcf+mcf+dcf;
		//var sumcf = centralExport['B_C_plantValue_cf']+centralExport['B_C_meatValue_cf']+centralExport['B_C_diaryValue_cf'];
		tempPlant = (centralExport['B_C_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_plantValue_cf"]);
		tempMeat = (centralExport['B_C_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_meatValue_cf"]);
		tempDiary = (centralExport['B_C_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_diaryValue_cf"]);
		////////alert("Valore di tempPlant: "+tempPlant+" Valore di tempMeat: "+tempMeat);
		
		var sumcf = tempPlant+tempMeat+tempDiary;
		////////alert("Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molcf = sumcf*(chi_chiede/chi_da);
		rescf = molcf;

		//var sumcfen = fcf+bcf+ecf;
		tempFossil = (centralExport['B_C_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_fossilValue_cf"]);
		tempBio = (centralExport['B_C_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_bioValue_cf"]);
		tempElec = (centralExport['B_C_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_elecValue_cf"]);
		
		var sumcfen = tempFossil+tempBio+tempElec;
		var molcfen = sumcfen*(chi_chiede/chi_da);
		rescfen = molcfen;
		
		////console.log("chi da: "+chi_da);
		////console.log("chi_chiede "+chi_chiede);
		////console.log("sumwfg "+sumwfg);
		////console.log("molwfg "+molwfg);
		////console.log("PCF "+pcf);
		////console.log("MCF "+mcf);
		////console.log("DIARY "+dcf);

		//Afood_cf = rescf+rescfen;
		//REGIONB_C_cf = Afood_cf;
		
		Cfood_cf = rescf+rescfen;
		REGIONB_C_cf = Cfood_cf;

		//lf
		//var sumlf = plf+mlf+dlf;
		tempPlant = (centralExport['B_C_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_plantValue_lf"]);
		tempMeat = (centralExport['B_C_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_meatValue_lf"]);
		tempDiary = (centralExport['B_C_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_diaryValue_lf"]);
		
	  	var sumlf = tempPlant+tempMeat+tempDiary;
	  	var mollf = sumlf*(chi_chiede/chi_da);
	  	reslf = mollf;

	  	//var sumlfen = flf+blf+elf;
	  	tempFossil = (centralExport['B_C_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_fossilValue_lf"]);
		tempBio = (centralExport['B_C_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_bioValue_lf"]);
		tempElec = (centralExport['B_C_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_C_elecValue_lf"]);
		
	  	var sumlfen = tempFossil+tempBio+tempElec;
	  	var mollfen = sumlfen*(chi_chiede/chi_da);
	  	reslfen = mollfen;
		
		//Afood_lf = reslf+reslfen;
		//REGIONB_C_lf = Afood_lf;
		Cfood_lf = reslf+reslfen;
		REGIONB_C_lf = Cfood_lf;
	}
	else if((regionto == "B" )&&(regionfr=="D")) {
		chi_da =  EUrB;
		chi_chiede = EUrD;
		
		//wfg
		//var sumwfg = pwfg+mwfg+dwfg;
		tempPlant = (centralExport['B_D_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_plantValue_wfg"]);
		tempMeat = (centralExport['B_D_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_meatValue_wfg"]);
		tempDiary = (centralExport['B_D_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_diaryValue_wfg"]);
		
		var sumwfg = tempPlant+tempMeat+tempDiary;
		var molwfg = sumwfg*(chi_chiede/chi_da);
		reswfg = molwfg;

		//var sumwfgen = fwfg+bwfg+ewfg;
		tempFossil = (centralExport['B_D_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_fossilValue_wfg"]);
		tempBio = (centralExport['B_D_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_bioValue_wfg"]);
		tempElec = (centralExport['B_D_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_elecValue_wfg"]);
		
		var sumwfgen = tempFossil+tempBio+tempElec;
		var molwfgen = sumwfgen*(chi_chiede/chi_da);
		reswfgen = molwfgen;

		//Afood_wfg = reswfg+reswfgen;
		//REGIONB_D_wfg = Afood_wfg;
		Dfood_wfg = reswfg+reswfgen;
		REGIONB_D_wfg = Dfood_wfg;
		
		//wfb
		//var sumwfb = pwfb+mwfb+dwfb;
		tempPlant = (centralExport['B_D_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_plantValue_wfb"]);
		tempMeat = (centralExport['B_D_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_meatValue_wfb"]);
		tempDiary = (centralExport['B_D_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_diaryValue_wfb"]);
		
		var sumwfb = tempPlant+tempMeat+tempDiary;
		var molwfb = sumwfb*(chi_chiede/chi_da);
		reswfb = molwfb;

		//var sumwfben = fwfb+bwfb+ewfb;
		tempFossil = (centralExport['B_D_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_fossilValue_wfb"]);
		tempBio = (centralExport['B_D_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_bioValue_wfb"]);
		tempElec = (centralExport['B_D_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_elecValue_wfb"]);
		
		var sumwfben = tempFossil+tempBio+tempElec;
		var molwfben = sumwfben*(chi_chiede/chi_da);
		reswfben = molwfben;

		//Afood_wfb = reswfb+reswfben;
		//REGIONB_D_wfb = Afood_wfb;
		Dfood_wfb = reswfb+reswfben;
		REGIONB_D_wfb = Dfood_wfb;
		
		//cf
		//var sumcf = pcf+mcf+dcf;
		//var sumcf = centralExport['B_D_plantValue_cf']+centralExport['B_D_meatValue_cf']+centralExport['B_D_diaryValue_cf'];
		tempPlant = (centralExport['B_D_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_plantValue_cf"]);
		tempMeat = (centralExport['B_D_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_meatValue_cf"]);
		tempDiary = (centralExport['B_D_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_diaryValue_cf"]);
		////////alert("Valore di tempPlant: "+tempPlant+" Valore di tempMeat: "+tempMeat);
		
		var sumcf = tempPlant+tempMeat+tempDiary;
		////////alert("Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molcf = sumcf*(chi_chiede/chi_da);
		rescf = molcf;

		//var sumcfen = fcf+bcf+ecf;
		tempFossil = (centralExport['B_D_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_fossilValue_cf"]);
		tempBio = (centralExport['B_D_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_bioValue_cf"]);
		tempElec = (centralExport['B_D_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_elecValue_cf"]);
		
		var sumcfen = tempFossil+tempBio+tempElec;
		var molcfen = sumcfen*(chi_chiede/chi_da);
		rescfen = molcfen;
		
		////console.log("chi da: "+chi_da);
		////console.log("chi_chiede "+chi_chiede);
		////console.log("sumwfg "+sumwfg);
		////console.log("molwfg "+molwfg);
		////console.log("PCF "+pcf);
		////console.log("MCF "+mcf);
		////console.log("DIARY "+dcf);

		//Afood_cf = rescf+rescfen;
		//REGIONB_D_cf = Afood_cf;
		
		Dfood_cf = rescf+rescfen;
		REGIONB_D_cf = Dfood_cf;

		//lf
		//var sumlf = plf+mlf+dlf;
		tempPlant = (centralExport['B_D_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_plantValue_lf"]);
		tempMeat = (centralExport['B_D_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_meatValue_lf"]);
		tempDiary = (centralExport['B_D_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_diaryValue_lf"]);
		
	  	var sumlf = tempPlant+tempMeat+tempDiary;
	  	var mollf = sumlf*(chi_chiede/chi_da);
	  	reslf = mollf;

	  	//var sumlfen = flf+blf+elf;
	  	tempFossil = (centralExport['B_D_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_fossilValue_lf"]);
		tempBio = (centralExport['B_D_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_bioValue_lf"]);
		tempElec = (centralExport['B_D_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["B_D_elecValue_lf"]);
		
	  	var sumlfen = tempFossil+tempBio+tempElec;
	  	var mollfen = sumlfen*(chi_chiede/chi_da);
	  	reslfen = mollfen;
		
		//Afood_lf = reslf+reslfen;
		//REGIONB_D_lf = Afood_lf;
		Dfood_lf = reslf+reslfen;
		REGIONB_D_lf = Dfood_lf;
	} 
	else if ((regionto == "C")&&(regionfr=="A")) {
		chi_da = EUrC;
		chi_chiede = EUrA;
		
		tempPlant = (centralExport['C_A_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_plantValue_wfg"]);
		tempMeat = (centralExport['C_A_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_meatValue_wfg"]);
		tempDiary = (centralExport['C_A_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_diaryValue_wfg"]);
		
		var sumwfg = tempPlant+tempMeat+tempDiary;
		////////alert("WFG - Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molwfg = sumwfg*(chi_chiede/chi_da);
		reswfg = molwfg;

		//var sumwfgen = fwfg+bwfg+ewfg;
		tempFossil = (centralExport['C_A_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_fossilValue_wfg"]);
		tempBio = (centralExport['C_A_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_bioValue_wfg"]);
		tempElec = (centralExport['C_A_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_elecValue_wfg"]);
		
		var sumwfgen = tempFossil+tempBio+tempElec;
		var molwfgen = sumwfgen*(chi_chiede/chi_da);
		reswfgen = molwfgen;

		//Afood_wfg = reswfg+reswfgen;
		//REGIONC_A_wfg = Afood_wfg;
		Afood_wfg = reswfg+reswfgen;
		REGIONC_A_wfg = Afood_wfg;
		
		//wfb
		//var sumwfb = pwfb+mwfb+dwfb;
		tempPlant = (centralExport['C_A_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_plantValue_wfb"]);
		tempMeat = (centralExport['C_A_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_meatValue_wfb"]);
		tempDiary = (centralExport['C_A_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_diaryValue_wfb"]);
		
		var sumwfb = tempPlant+tempMeat+tempDiary;
		////////alert("WFB - Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molwfb = sumwfb*(chi_chiede/chi_da);
		reswfb = molwfb;

		//var sumwfben = fwfb+bwfb+ewfb;
		tempFossil = (centralExport['C_A_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_fossilValue_wfb"]);
		tempBio = (centralExport['C_A_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_bioValue_wfb"]);
		tempElec = (centralExport['C_A_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_elecValue_wfb"]);
		
		var sumwfben = tempFossil+tempBio+tempElec;
		var molwfben = sumwfben*(chi_chiede/chi_da);
		reswfben = molwfben;

		//Afood_wfb = reswfb+reswfben;
		//REGIONC_A_wfb = Afood_wfb;
		Afood_wfb = reswfb+reswfben;
		REGIONC_A_wfb = Afood_wfb;
		
		//cf
		//var sumcf = pcf+mcf+dcf;
		//var sumcf = centralExport['C_A_plantValue_cf']+centralExport['C_A_meatValue_cf']+centralExport['C_A_diaryValue_cf'];
		tempPlant = (centralExport['C_A_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_plantValue_cf"]);
		tempMeat = (centralExport['C_A_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_meatValue_cf"]);
		tempDiary = (centralExport['C_A_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_diaryValue_cf"]);
		////////alert("Valore di tempPlant: "+tempPlant+" Valore di tempMeat: "+tempMeat);
		
		var sumcf = tempPlant+tempMeat+tempDiary;
		////////alert("CF - Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molcf = sumcf*(chi_chiede/chi_da);
		rescf = molcf;

		//var sumcfen = fcf+bcf+ecf;
		tempFossil = (centralExport['C_A_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_fossilValue_cf"]);
		tempBio = (centralExport['C_A_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_bioValue_cf"]);
		tempElec = (centralExport['C_A_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_elecValue_cf"]);
		
		var sumcfen = tempFossil+tempBio+tempElec;
		var molcfen = sumcfen*(chi_chiede/chi_da);
		rescfen = molcfen;
		
		////console.log("chi da: "+chi_da);
		////console.log("chi_chiede "+chi_chiede);
		////console.log("sumwfg "+sumwfg);
		////console.log("molwfg "+molwfg);
		////console.log("PCF "+pcf);
		////console.log("MCF "+mcf);
		////console.log("DIARY "+dcf);

		//Afood_cf = rescf+rescfen;
		//REGIONC_A_cf = Afood_cf;
		
		Afood_cf = rescf+rescfen;
		REGIONC_A_cf = Afood_cf;

		//lf
		//var sumlf = plf+mlf+dlf;
		tempPlant = (centralExport['C_A_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_plantValue_lf"]);
		tempMeat = (centralExport['C_A_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_meatValue_lf"]);
		tempDiary = (centralExport['C_A_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_diaryValue_lf"]);
		
	  	var sumlf = tempPlant+tempMeat+tempDiary;
	  	////////alert("LF - Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
	  	var mollf = sumlf*(chi_chiede/chi_da);
	  	reslf = mollf;

	  	//var sumlfen = flf+blf+elf;
	  	tempFossil = (centralExport['C_A_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_fossilValue_lf"]);
		tempBio = (centralExport['C_A_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_bioValue_lf"]);
		tempElec = (centralExport['C_A_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_A_elecValue_lf"]);
		
	  	var sumlfen = tempFossil+tempBio+tempElec;
	  	var mollfen = sumlfen*(chi_chiede/chi_da);
	  	reslfen = mollfen;
		
		//Afood_lf = reslf+reslfen;
		//REGIONC_A_lf = Afood_lf;
		Afood_lf = reslf+reslfen;
		REGIONC_A_lf = Afood_lf;
	}
	else if ((regionto == "C")&&(regionfr=="B")) {
		chi_da = EUrC;
	    chi_chiede = EUrB;
		    
		//wfg
		//var sumwfg = pwfg+mwfg+dwfg;
		tempPlant = (centralExport['C_B_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_plantValue_wfg"]);
		tempMeat = (centralExport['C_B_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_meatValue_wfg"]);
		tempDiary = (centralExport['C_B_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_diaryValue_wfg"]);
		
		var sumwfg = tempPlant+tempMeat+tempDiary;
		var molwfg = sumwfg*(chi_chiede/chi_da);
		reswfg = molwfg;

		//var sumwfgen = fwfg+bwfg+ewfg;
		tempFossil = (centralExport['C_B_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_fossilValue_wfg"]);
		tempBio = (centralExport['C_B_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_bioValue_wfg"]);
		tempElec = (centralExport['C_B_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_elecValue_wfg"]);
		
		var sumwfgen = tempFossil+tempBio+tempElec;
		var molwfgen = sumwfgen*(chi_chiede/chi_da);
		reswfgen = molwfgen;

		//Afood_wfg = reswfg+reswfgen;
		//REGIONC_B_wfg = Afood_wfg;
		Bfood_wfg = reswfg+reswfgen;
		REGIONC_B_wfg = Bfood_wfg;
		
		//wfb
		//var sumwfb = pwfb+mwfb+dwfb;
		tempPlant = (centralExport['C_B_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_plantValue_wfb"]);
		tempMeat = (centralExport['C_B_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_meatValue_wfb"]);
		tempDiary = (centralExport['C_B_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_diaryValue_wfb"]);
		
		var sumwfb = tempPlant+tempMeat+tempDiary;
		var molwfb = sumwfb*(chi_chiede/chi_da);
		reswfb = molwfb;

		//var sumwfben = fwfb+bwfb+ewfb;
		tempFossil = (centralExport['C_B_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_fossilValue_wfb"]);
		tempBio = (centralExport['C_B_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_bioValue_wfb"]);
		tempElec = (centralExport['C_B_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_elecValue_wfb"]);
		
		var sumwfben = tempFossil+tempBio+tempElec;
		var molwfben = sumwfben*(chi_chiede/chi_da);
		reswfben = molwfben;

		//Afood_wfb = reswfb+reswfben;
		//REGIONC_B_wfb = Afood_wfb;
		Bfood_wfb = reswfb+reswfben;
		REGIONC_B_wfb = Bfood_wfb;
		
		//cf
		//var sumcf = pcf+mcf+dcf;
		//var sumcf = centralExport['C_B_plantValue_cf']+centralExport['C_B_meatValue_cf']+centralExport['C_B_diaryValue_cf'];
		tempPlant = (centralExport['C_B_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_plantValue_cf"]);
		tempMeat = (centralExport['C_B_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_meatValue_cf"]);
		tempDiary = (centralExport['C_B_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_diaryValue_cf"]);
		////////alert("Valore di tempPlant: "+tempPlant+" Valore di tempMeat: "+tempMeat);
		
		var sumcf = tempPlant+tempMeat+tempDiary;
		////////alert("Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molcf = sumcf*(chi_chiede/chi_da);
		rescf = molcf;

		//var sumcfen = fcf+bcf+ecf;
		tempFossil = (centralExport['C_B_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_fossilValue_cf"]);
		tempBio = (centralExport['C_B_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_bioValue_cf"]);
		tempElec = (centralExport['C_B_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_elecValue_cf"]);
		
		var sumcfen = tempFossil+tempBio+tempElec;
		var molcfen = sumcfen*(chi_chiede/chi_da);
		rescfen = molcfen;
		
		////console.log("chi da: "+chi_da);
		////console.log("chi_chiede "+chi_chiede);
		////console.log("sumwfg "+sumwfg);
		////console.log("molwfg "+molwfg);
		////console.log("PCF "+pcf);
		////console.log("MCF "+mcf);
		////console.log("DIARY "+dcf);

		//Afood_cf = rescf+rescfen;
		//REGIONC_B_cf = Afood_cf;
		
		Bfood_cf = rescf+rescfen;
		REGIONC_B_cf = Bfood_cf;

		//lf
		//var sumlf = plf+mlf+dlf;
		tempPlant = (centralExport['C_B_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_plantValue_lf"]);
		tempMeat = (centralExport['C_B_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_meatValue_lf"]);
		tempDiary = (centralExport['C_B_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_diaryValue_lf"]);
		
	  	var sumlf = tempPlant+tempMeat+tempDiary;
	  	var mollf = sumlf*(chi_chiede/chi_da);
	  	reslf = mollf;

	  	//var sumlfen = flf+blf+elf;
	  	tempFossil = (centralExport['C_B_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_fossilValue_lf"]);
		tempBio = (centralExport['C_B_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_bioValue_lf"]);
		tempElec = (centralExport['C_B_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_B_elecValue_lf"]);
		
	  	var sumlfen = tempFossil+tempBio+tempElec;
	  	var mollfen = sumlfen*(chi_chiede/chi_da);
	  	reslfen = mollfen;
		
		//Afood_lf = reslf+reslfen;
		//REGIONC_B_lf = Afood_lf;
		Bfood_lf = reslf+reslfen;
		REGIONC_B_lf = Bfood_lf;
	}
	else if ((regionto == "C")&&(regionfr=="D")) {
		chi_da = EUrC;
	    chi_chiede = EUrD;
		    
		//wfg
		//var sumwfg = pwfg+mwfg+dwfg;
		tempPlant = (centralExport['C_D_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_plantValue_wfg"]);
		tempMeat = (centralExport['C_D_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_meatValue_wfg"]);
		tempDiary = (centralExport['C_D_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_diaryValue_wfg"]);
		
		var sumwfg = tempPlant+tempMeat+tempDiary;
		var molwfg = sumwfg*(chi_chiede/chi_da);
		reswfg = molwfg;

		//var sumwfgen = fwfg+bwfg+ewfg;
		tempFossil = (centralExport['C_D_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_fossilValue_wfg"]);
		tempBio = (centralExport['C_D_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_bioValue_wfg"]);
		tempElec = (centralExport['C_D_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_elecValue_wfg"]);
		
		var sumwfgen = tempFossil+tempBio+tempElec;
		var molwfgen = sumwfgen*(chi_chiede/chi_da);
		reswfgen = molwfgen;

		//Afood_wfg = reswfg+reswfgen;
		//REGIONC_D_wfg = Afood_wfg;
		Dfood_wfg = reswfg+reswfgen;
		REGIONC_D_wfg = Dfood_wfg;
		
		//wfb
		//var sumwfb = pwfb+mwfb+dwfb;
		tempPlant = (centralExport['C_D_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_plantValue_wfb"]);
		tempMeat = (centralExport['C_D_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_meatValue_wfb"]);
		tempDiary = (centralExport['C_D_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_diaryValue_wfb"]);
		
		var sumwfb = tempPlant+tempMeat+tempDiary;
		var molwfb = sumwfb*(chi_chiede/chi_da);
		reswfb = molwfb;

		//var sumwfben = fwfb+bwfb+ewfb;
		tempFossil = (centralExport['C_D_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_fossilValue_wfb"]);
		tempBio = (centralExport['C_D_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_bioValue_wfb"]);
		tempElec = (centralExport['C_D_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_elecValue_wfb"]);
		
		var sumwfben = tempFossil+tempBio+tempElec;
		var molwfben = sumwfben*(chi_chiede/chi_da);
		reswfben = molwfben;

		//Afood_wfb = reswfb+reswfben;
		//REGIONC_D_wfb = Afood_wfb;
		Dfood_wfb = reswfb+reswfben;
		REGIONC_D_wfb = Dfood_wfb;
		
		//cf
		//var sumcf = pcf+mcf+dcf;
		//var sumcf = centralExport['C_D_plantValue_cf']+centralExport['C_D_meatValue_cf']+centralExport['C_D_diaryValue_cf'];
		tempPlant = (centralExport['C_D_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_plantValue_cf"]);
		tempMeat = (centralExport['C_D_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_meatValue_cf"]);
		tempDiary = (centralExport['C_D_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_diaryValue_cf"]);
		////////alert("Valore di tempPlant: "+tempPlant+" Valore di tempMeat: "+tempMeat);
		
		var sumcf = tempPlant+tempMeat+tempDiary;
		////////alert("Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molcf = sumcf*(chi_chiede/chi_da);
		rescf = molcf;

		//var sumcfen = fcf+bcf+ecf;
		tempFossil = (centralExport['C_D_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_fossilValue_cf"]);
		tempBio = (centralExport['C_D_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_bioValue_cf"]);
		tempElec = (centralExport['C_D_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_elecValue_cf"]);
		
		var sumcfen = tempFossil+tempBio+tempElec;
		var molcfen = sumcfen*(chi_chiede/chi_da);
		rescfen = molcfen;
		
		////console.log("chi da: "+chi_da);
		////console.log("chi_chiede "+chi_chiede);
		////console.log("sumwfg "+sumwfg);
		////console.log("molwfg "+molwfg);
		////console.log("PCF "+pcf);
		////console.log("MCF "+mcf);
		////console.log("DIARY "+dcf);

		//Afood_cf = rescf+rescfen;
		//REGIONC_D_cf = Afood_cf;
		
		Dfood_cf = rescf+rescfen;
		REGIONC_D_cf = Dfood_cf;

		//lf
		//var sumlf = plf+mlf+dlf;
		tempPlant = (centralExport['C_D_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_plantValue_lf"]);
		tempMeat = (centralExport['C_D_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_meatValue_lf"]);
		tempDiary = (centralExport['C_D_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_diaryValue_lf"]);
		
	  	var sumlf = tempPlant+tempMeat+tempDiary;
	  	var mollf = sumlf*(chi_chiede/chi_da);
	  	reslf = mollf;

	  	//var sumlfen = flf+blf+elf;
	  	tempFossil = (centralExport['C_D_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_fossilValue_lf"]);
		tempBio = (centralExport['C_D_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_bioValue_lf"]);
		tempElec = (centralExport['C_D_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["C_D_elecValue_lf"]);
		
	  	var sumlfen = tempFossil+tempBio+tempElec;
	  	var mollfen = sumlfen*(chi_chiede/chi_da);
	  	reslfen = mollfen;
		
		//Afood_lf = reslf+reslfen;
		//REGIONC_D_lf = Afood_lf;
		Dfood_lf = reslf+reslfen;
		REGIONC_D_lf = Dfood_lf;
		}
	else if ((regionto =="D")&&(regionfr=="A")) {
		chi_da = EUrD;
		chi_chiede = EUrA;
		
		tempPlant = (centralExport['D_A_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_plantValue_wfg"]);
		tempMeat = (centralExport['D_A_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_meatValue_wfg"]);
		tempDiary = (centralExport['D_A_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_diaryValue_wfg"]);
		
		var sumwfg = tempPlant+tempMeat+tempDiary;
		var molwfg = sumwfg*(chi_chiede/chi_da);
		reswfg = molwfg;

		//var sumwfgen = fwfg+bwfg+ewfg;
		tempFossil = (centralExport['D_A_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_fossilValue_wfg"]);
		tempBio = (centralExport['D_A_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_bioValue_wfg"]);
		tempElec = (centralExport['D_A_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_elecValue_wfg"]);
		
		var sumwfgen = tempFossil+tempBio+tempElec;
		var molwfgen = sumwfgen*(chi_chiede/chi_da);
		reswfgen = molwfgen;

		//Afood_wfg = reswfg+reswfgen;
		//REGIOND_A_wfg = Afood_wfg;
		Afood_wfg = reswfg+reswfgen;
		REGIOND_A_wfg = Afood_wfg;
		
		//wfb
		//var sumwfb = pwfb+mwfb+dwfb;
		tempPlant = (centralExport['D_A_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_plantValue_wfb"]);
		tempMeat = (centralExport['D_A_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_meatValue_wfb"]);
		tempDiary = (centralExport['D_A_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_diaryValue_wfb"]);
		
		var sumwfb = tempPlant+tempMeat+tempDiary;
		var molwfb = sumwfb*(chi_chiede/chi_da);
		reswfb = molwfb;

		//var sumwfben = fwfb+bwfb+ewfb;
		tempFossil = (centralExport['D_A_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_fossilValue_wfb"]);
		tempBio = (centralExport['D_A_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_bioValue_wfb"]);
		tempElec = (centralExport['D_A_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_elecValue_wfb"]);
		
		var sumwfben = tempFossil+tempBio+tempElec;
		var molwfben = sumwfben*(chi_chiede/chi_da);
		reswfben = molwfben;

		//Afood_wfb = reswfb+reswfben;
		//REGIOND_A_wfb = Afood_wfb;
		Afood_wfb = reswfb+reswfben;
		REGIOND_A_wfb = Afood_wfb;
		
		//cf
		//var sumcf = pcf+mcf+dcf;
		//var sumcf = centralExport['D_A_plantValue_cf']+centralExport['D_A_meatValue_cf']+centralExport['D_A_diaryValue_cf'];
		tempPlant = (centralExport['D_A_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_plantValue_cf"]);
		tempMeat = (centralExport['D_A_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_meatValue_cf"]);
		tempDiary = (centralExport['D_A_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_diaryValue_cf"]);
		////////alert("Valore di tempPlant: "+tempPlant+" Valore di tempMeat: "+tempMeat);
		
		var sumcf = tempPlant+tempMeat+tempDiary;
		var molcf = sumcf*(chi_chiede/chi_da);
		rescf = molcf;

		//var sumcfen = fcf+bcf+ecf;
		tempFossil = (centralExport['D_A_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_fossilValue_cf"]);
		tempBio = (centralExport['D_A_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_bioValue_cf"]);
		tempElec = (centralExport['D_A_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_elecValue_cf"]);
		
		////////alert("Valore di Fossil: "+tempFossil+" Valore di Bio: "+tempBio+" Valore di Elec: "+tempElec);
		
		var sumcfen = tempFossil+tempBio+tempElec;
		var molcfen = sumcfen*(chi_chiede/chi_da);
		rescfen = molcfen;
		
		////console.log("chi da: "+chi_da);
		////console.log("chi_chiede "+chi_chiede);
		////console.log("sumwfg "+sumwfg);
		////console.log("molwfg "+molwfg);
		////console.log("PCF "+pcf);
		////console.log("MCF "+mcf);
		////console.log("DIARY "+dcf);

		//Afood_cf = rescf+rescfen;
		//REGIOND_A_cf = Afood_cf;
		
		Afood_cf = rescf+rescfen;
		REGIOND_A_cf = Afood_cf;

		//lf
		//var sumlf = plf+mlf+dlf;
		tempPlant = (centralExport['D_A_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_plantValue_lf"]);
		tempMeat = (centralExport['D_A_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_meatValue_lf"]);
		tempDiary = (centralExport['D_A_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_diaryValue_lf"]);
		
	  	var sumlf = tempPlant+tempMeat+tempDiary;
	  	var mollf = sumlf*(chi_chiede/chi_da);
	  	reslf = mollf;

	  	//var sumlfen = flf+blf+elf;
	  	tempFossil = (centralExport['D_A_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_fossilValue_lf"]);
		tempBio = (centralExport['D_A_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_bioValue_lf"]);
		tempElec = (centralExport['D_A_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_A_elecValue_lf"]);
		
	  	var sumlfen = tempFossil+tempBio+tempElec;
	  	var mollfen = sumlfen*(chi_chiede/chi_da);
	  	reslfen = mollfen;
		
		//Afood_lf = reslf+reslfen;
		//REGIOND_A_lf = Afood_lf;
		Afood_lf = reslf+reslfen;
		REGIOND_A_lf = Afood_lf;
	}
	else if ((regionto =="D")&&(regionfr=="B")) {
		chi_da = EUrD;
	  	chi_chiede = EUrB;
		
		//wfg
		//var sumwfg = pwfg+mwfg+dwfg;
		tempPlant = (centralExport['D_B_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_plantValue_wfg"]);
		tempMeat = (centralExport['D_B_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_meatValue_wfg"]);
		tempDiary = (centralExport['D_B_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_diaryValue_wfg"]);
		
		var sumwfg = tempPlant+tempMeat+tempDiary;
		var molwfg = sumwfg*(chi_chiede/chi_da);
		reswfg = molwfg;

		//var sumwfgen = fwfg+bwfg+ewfg;
		tempFossil = (centralExport['D_B_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_fossilValue_wfg"]);
		tempBio = (centralExport['D_B_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_bioValue_wfg"]);
		tempElec = (centralExport['D_B_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_elecValue_wfg"]);
		
		var sumwfgen = tempFossil+tempBio+tempElec;
		var molwfgen = sumwfgen*(chi_chiede/chi_da);
		reswfgen = molwfgen;

		//Afood_wfg = reswfg+reswfgen;
		//REGIOND_B_wfg = Afood_wfg;
		Bfood_wfg = reswfg+reswfgen;
		REGIOND_B_wfg = Bfood_wfg;
		
		//wfb
		//var sumwfb = pwfb+mwfb+dwfb;
		tempPlant = (centralExport['D_B_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_plantValue_wfb"]);
		tempMeat = (centralExport['D_B_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_meatValue_wfb"]);
		tempDiary = (centralExport['D_B_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_diaryValue_wfb"]);
		
		var sumwfb = tempPlant+tempMeat+tempDiary;
		var molwfb = sumwfb*(chi_chiede/chi_da);
		reswfb = molwfb;

		//var sumwfben = fwfb+bwfb+ewfb;
		tempFossil = (centralExport['D_B_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_fossilValue_wfb"]);
		tempBio = (centralExport['D_B_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_bioValue_wfb"]);
		tempElec = (centralExport['D_B_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_elecValue_wfb"]);
		
		var sumwfben = tempFossil+tempBio+tempElec;
		var molwfben = sumwfben*(chi_chiede/chi_da);
		reswfben = molwfben;

		//Afood_wfb = reswfb+reswfben;
		//REGIOND_B_wfb = Afood_wfb;
		Bfood_wfb = reswfb+reswfben;
		REGIOND_B_wfb = Bfood_wfb;
		
		//cf
		//var sumcf = pcf+mcf+dcf;
		//var sumcf = centralExport['D_B_plantValue_cf']+centralExport['D_B_meatValue_cf']+centralExport['D_B_diaryValue_cf'];
		tempPlant = (centralExport['D_B_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_plantValue_cf"]);
		tempMeat = (centralExport['D_B_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_meatValue_cf"]);
		tempDiary = (centralExport['D_B_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_diaryValue_cf"]);
		////////alert("Valore di tempPlant: "+tempPlant+" Valore di tempMeat: "+tempMeat);
		
		var sumcf = tempPlant+tempMeat+tempDiary;
		////////alert("Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molcf = sumcf*(chi_chiede/chi_da);
		rescf = molcf;

		//var sumcfen = fcf+bcf+ecf;
		tempFossil = (centralExport['D_B_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_fossilValue_cf"]);
		tempBio = (centralExport['D_B_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_bioValue_cf"]);
		tempElec = (centralExport['D_B_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_elecValue_cf"]);
		
		var sumcfen = tempFossil+tempBio+tempElec;
		var molcfen = sumcfen*(chi_chiede/chi_da);
		rescfen = molcfen;
		
		////console.log("chi da: "+chi_da);
		////console.log("chi_chiede "+chi_chiede);
		////console.log("sumwfg "+sumwfg);
		////console.log("molwfg "+molwfg);
		////console.log("PCF "+pcf);
		////console.log("MCF "+mcf);
		////console.log("DIARY "+dcf);

		//Afood_cf = rescf+rescfen;
		//REGIOND_B_cf = Afood_cf;
		
		Bfood_cf = rescf+rescfen;
		REGIOND_B_cf = Bfood_cf;

		//lf
		//var sumlf = plf+mlf+dlf;
		tempPlant = (centralExport['D_B_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_plantValue_lf"]);
		tempMeat = (centralExport['D_B_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_meatValue_lf"]);
		tempDiary = (centralExport['D_B_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_diaryValue_lf"]);
		
	  	var sumlf = tempPlant+tempMeat+tempDiary;
	  	var mollf = sumlf*(chi_chiede/chi_da);
	  	reslf = mollf;

	  	//var sumlfen = flf+blf+elf;
	  	tempFossil = (centralExport['D_B_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_fossilValue_lf"]);
		tempBio = (centralExport['D_B_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_bioValue_lf"]);
		tempElec = (centralExport['D_B_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_B_elecValue_lf"]);
		
	  	var sumlfen = tempFossil+tempBio+tempElec;
	  	var mollfen = sumlfen*(chi_chiede/chi_da);
	  	reslfen = mollfen;
		
		//Afood_lf = reslf+reslfen;
		//REGIOND_B_lf = Afood_lf;
		Bfood_lf = reslf+reslfen;
		REGIOND_B_lf = Bfood_lf;
	}
	else if ((regionto =="D")&&(regionfr=="C")) {
		chi_da = EUrD;
		chi_chiede = EUrC;

		//wfg
		//var sumwfg = pwfg+mwfg+dwfg;
		tempPlant = (centralExport['D_C_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_plantValue_wfg"]);
		tempMeat = (centralExport['D_C_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_meatValue_wfg"]);
		tempDiary = (centralExport['D_C_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_diaryValue_wfg"]);
		
		var sumwfg = tempPlant+tempMeat+tempDiary;
		var molwfg = sumwfg*(chi_chiede/chi_da);
		reswfg = molwfg;

		//var sumwfgen = fwfg+bwfg+ewfg;
		tempFossil = (centralExport['D_C_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_fossilValue_wfg"]);
		tempBio = (centralExport['D_C_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_bioValue_wfg"]);
		tempElec = (centralExport['D_C_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_elecValue_wfg"]);
		
		var sumwfgen = tempFossil+tempBio+tempElec;
		var molwfgen = sumwfgen*(chi_chiede/chi_da);
		reswfgen = molwfgen;

		//Afood_wfg = reswfg+reswfgen;
		//REGIOND_C_wfg = Afood_wfg;
		Cfood_wfg = reswfg+reswfgen;
		REGIOND_C_wfg = Cfood_wfg;
		
		//wfb
		//var sumwfb = pwfb+mwfb+dwfb;
		tempPlant = (centralExport['D_C_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_plantValue_wfb"]);
		tempMeat = (centralExport['D_C_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_meatValue_wfb"]);
		tempDiary = (centralExport['D_C_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_diaryValue_wfb"]);
		
		var sumwfb = tempPlant+tempMeat+tempDiary;
		var molwfb = sumwfb*(chi_chiede/chi_da);
		reswfb = molwfb;

		//var sumwfben = fwfb+bwfb+ewfb;
		tempFossil = (centralExport['D_C_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_fossilValue_wfb"]);
		tempBio = (centralExport['D_C_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_bioValue_wfb"]);
		tempElec = (centralExport['D_C_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_elecValue_wfb"]);
		
		var sumwfben = tempFossil+tempBio+tempElec;
		var molwfben = sumwfben*(chi_chiede/chi_da);
		reswfben = molwfben;

		//Afood_wfb = reswfb+reswfben;
		//REGIOND_C_wfb = Afood_wfb;
		Cfood_wfb = reswfb+reswfben;
		REGIOND_C_wfb = Cfood_wfb;
		
		//cf
		//var sumcf = pcf+mcf+dcf;
		//var sumcf = centralExport['D_C_plantValue_cf']+centralExport['D_C_meatValue_cf']+centralExport['D_C_diaryValue_cf'];
		tempPlant = (centralExport['D_C_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_plantValue_cf"]);
		tempMeat = (centralExport['D_C_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_meatValue_cf"]);
		tempDiary = (centralExport['D_C_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_diaryValue_cf"]);
		////////alert("Valore di tempPlant: "+tempPlant+" Valore di tempMeat: "+tempMeat);
		
		var sumcf = tempPlant+tempMeat+tempDiary;
		////////alert("Valore di Plant: "+tempPlant+" Valore di Meat: "+tempMeat+" Valore di diary: "+tempDiary);
		var molcf = sumcf*(chi_chiede/chi_da);
		rescf = molcf;

		//var sumcfen = fcf+bcf+ecf;
		tempFossil = (centralExport['D_C_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_fossilValue_cf"]);
		tempBio = (centralExport['D_C_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_bioValue_cf"]);
		tempElec = (centralExport['D_C_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_elecValue_cf"]);
		
		var sumcfen = tempFossil+tempBio+tempElec;
		var molcfen = sumcfen*(chi_chiede/chi_da);
		rescfen = molcfen;
		
		////console.log("chi da: "+chi_da);
		////console.log("chi_chiede "+chi_chiede);
		////console.log("sumwfg "+sumwfg);
		////console.log("molwfg "+molwfg);
		////console.log("PCF "+pcf);
		////console.log("MCF "+mcf);
		////console.log("DIARY "+dcf);

		//Afood_cf = rescf+rescfen;
		//REGIOND_C_cf = Afood_cf;
		
		Cfood_cf = rescf+rescfen;
		REGIOND_C_cf = Cfood_cf;

		//lf
		//var sumlf = plf+mlf+dlf;
		tempPlant = (centralExport['D_C_plant']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_plantValue_lf"]);
		tempMeat = (centralExport['D_C_meat']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_meatValue_lf"]);
		tempDiary = (centralExport['D_C_diary']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_diaryValue_lf"]);
		
	  	var sumlf = tempPlant+tempMeat+tempDiary;
	  	var mollf = sumlf*(chi_chiede/chi_da);
	  	reslf = mollf;

	  	//var sumlfen = flf+blf+elf;
	  	tempFossil = (centralExport['D_C_fossil']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_fossilValue_lf"]);
		tempBio = (centralExport['D_C_bio']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_bioValue_lf"]);
		tempElec = (centralExport['D_C_elec']=="no")?(0):(JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"DataOutput"))["D_C_elecValue_lf"]);
		
	  	var sumlfen = tempFossil+tempBio+tempElec;
	  	var mollfen = sumlfen*(chi_chiede/chi_da);
	  	reslfen = mollfen;
		
		//Afood_lf = reslf+reslfen;
		//REGIOND_C_lf = Afood_lf;
		Cfood_lf = reslf+reslfen;
		REGIOND_C_lf = Cfood_lf;
		//////alert("FINE DEGLI IF");
	} 

	else {
		//////alert("FINE DEGLI IF DENTRO ELSE");
	}
		
	localStorage.setItem("Afood_wfg",Afood_wfg); localStorage.setItem("Bfood_wfg",Bfood_wfg); localStorage.setItem("Cfood_wfg",Cfood_wfg) ; localStorage.setItem("Dfood_wfg",Dfood_wfg);
	localStorage.setItem("Afood_wfb",Afood_wfb); localStorage.setItem("Bfood_wfb",Bfood_wfb); localStorage.setItem("Cfood_wfb",Cfood_wfb); localStorage.setItem("Dfood_wfb", Dfood_wfb);
	localStorage.setItem("Afood_lf",Afood_lf); localStorage.setItem("Bfood_lf",Bfood_lf); localStorage.setItem("Cfood_lf",Cfood_lf); localStorage.setItem("Dfood_lf",Dfood_lf);
	localStorage.setItem("Afood_cf",Afood_cf); localStorage.setItem("Bfood_cf",Bfood_cf); localStorage.setItem("Cfood_cf",Cfood_cf); localStorage.setItem("Dfood_cf",Dfood_cf);
		
	localStorage.setItem("REGIONA_B_wfb",REGIONA_B_wfb); localStorage.setItem("REGIONA_B_cf",REGIONA_B_cf); localStorage.setItem("REGIONA_B_lf",REGIONA_B_lf) ;		localStorage.setItem("REGIONA_B_wfg",REGIONA_B_wfg);
	localStorage.setItem("REGIONA_C_wfb",REGIONA_C_wfb); localStorage.setItem("REGIONA_C_cf",REGIONA_C_cf); localStorage.setItem("REGIONA_C_lf",REGIONA_C_lf) ; 	localStorage.setItem("REGIONA_C_wfg",REGIONA_C_wfg);
	localStorage.setItem("REGIONA_D_wfb",REGIONA_D_wfb); localStorage.setItem("REGIONA_D_cf",REGIONA_D_cf); localStorage.setItem("REGIONA_D_lf",REGIONA_D_lf) ; 	localStorage.setItem("REGIONA_D_wfg",REGIONA_D_wfg);

	localStorage.setItem("REGIONB_A_wfb",REGIONB_A_wfb); localStorage.setItem("REGIONB_A_cf",REGIONB_A_cf); localStorage.setItem("REGIONB_A_lf",REGIONB_A_lf) ; 	localStorage.setItem("REGIONB_A_wfg",REGIONB_A_wfg);
	localStorage.setItem("REGIONB_C_wfb",REGIONB_C_wfb); localStorage.setItem("REGIONB_C_cf",REGIONB_C_cf); localStorage.setItem("REGIONB_C_lf",REGIONB_C_lf) ; 	localStorage.setItem("REGIONB_C_wfg",REGIONB_C_wfg);
	localStorage.setItem("REGIONB_D_wfb",REGIONB_D_wfb); localStorage.setItem("REGIONB_D_cf",REGIONB_D_cf); localStorage.setItem("REGIONB_D_lf",REGIONB_D_lf) ; 	localStorage.setItem("REGIONB_D_wfg",REGIONB_D_wfg);

	localStorage.setItem("REGIONC_A_wfb",REGIONC_A_wfb); localStorage.setItem("REGIONC_A_cf",REGIONC_A_cf); localStorage.setItem("REGIONC_A_lf",REGIONC_A_lf) ; 	localStorage.setItem("REGIONC_A_wfg",REGIONC_A_wfg);
	localStorage.setItem("REGIONC_B_wfb",REGIONC_B_wfb); localStorage.setItem("REGIONC_B_cf",REGIONC_B_cf); localStorage.setItem("REGIONC_B_lf",REGIONC_B_lf) ; 	localStorage.setItem("REGIONC_B_wfg",REGIONC_B_wfg);
	localStorage.setItem("REGIONC_D_wfb",REGIONC_D_wfb); localStorage.setItem("REGIONC_D_cf",REGIONC_D_cf); localStorage.setItem("REGIONC_D_lf",REGIONC_D_lf) ; 	localStorage.setItem("REGIONC_D_wfg",REGIONC_D_wfg);

	localStorage.setItem("REGIOND_A_wfb",REGIOND_A_wfb); localStorage.setItem("REGIOND_A_cf",REGIOND_A_cf); localStorage.setItem("REGIOND_A_lf",REGIOND_A_lf) ; 	localStorage.setItem("REGIOND_A_wfg",REGIOND_A_wfg);
	localStorage.setItem("REGIOND_B_wfb",REGIOND_B_wfb); localStorage.setItem("REGIOND_B_cf",REGIOND_B_cf); localStorage.setItem("REGIOND_B_lf",REGIOND_B_lf) ; 	localStorage.setItem("REGIOND_B_wfg",REGIOND_B_wfg);
	localStorage.setItem("REGIOND_C_wfb",REGIOND_C_wfb); localStorage.setItem("REGIOND_C_cf",REGIOND_C_cf); localStorage.setItem("REGIOND_C_lf",REGIOND_C_lf) ; 	localStorage.setItem("REGIOND_C_wfg",REGIOND_C_wfg);
		///////////////// PUT DATA IN DATA OUTPUT OBJ ////////////////
		/////////////////////////////////////////////////////////////
	
	var Afood_wfg_sr = localStorage.getItem("Afood_wfg"); var Bfood_wfg_sr = localStorage.getItem("Bfood_wfg"); var Cfood_wfg_sr = localStorage.getItem("Cfood_wfg") ; var Dfood_wfg_sr = localStorage.getItem("Dfood_wfg");
	var Afood_wfb_sr = localStorage.getItem("Afood_wfb"); var Bfood_wfb_sr = localStorage.getItem("Bfood_wfb"); var Cfood_wfb_sr =localStorage.getItem("Cfood_wfb"); var Dfood_wfb_sr = localStorage.getItem("Dfood_wfb");
	var Afood_lf_sr = localStorage.getItem("Afood_lf"); var Bfood_lf_sr = localStorage.getItem("Bfood_lf"); var Cfood_lf_sr = localStorage.getItem("Cfood_lf"); var Dfood_lf_sr = localStorage.getItem("Dfood_lf");
	var Afood_cf_sr = localStorage.getItem("Afood_cf"); var Bfood_cf_sr = localStorage.getItem("Bfood_cf"); var Cfood_cf_sr = localStorage.getItem("Cfood_cf"); var Dfood_cf_sr = localStorage.getItem("Dfood_cf");
		


		/////////////// END PUTTING DATA //////////////////////////
		//////////////////////////////////////////////////////////
	
	
	////console.log("TRADE CF A FOOD: "+localStorage.getItem("Afood_cf"));
	////console.log("TRADE LF A FOOD: "+localStorage.getItem("Afood_lf"));
	////console.log("TRADE WFG A FOOD: "+localStorage.getItem("Afood_wfg"));
	////console.log("TRADE WFB A FOOD: "+localStorage.getItem("Afood_wfb"));

console.log("SIAMO ALLA FINE DI TRADE");


	//	FINE WFGREEN //

}

function Empty(regionfrA) {
	var container = {"key":0};
	localStorage.setItem("region"+regionfrA+"DataOutput", container);
	//alert("REGION "+regionfrA);

}