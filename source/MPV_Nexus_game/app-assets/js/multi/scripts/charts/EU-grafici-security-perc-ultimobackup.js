var region = document.querySelector('input[name="region"]:checked').getAttribute('id');

// ============================ Milioni di abitanti per regione - Somma totale abitanti - Percentuale abitanti per regione =================================
var inh_A = 63.651;
var inh_B = 38.559;
var inh_C = 234.126;
var inh_D = 177.143;
	
var inhSum = inh_A+inh_B+inh_C+inh_D;

var rate_A = Math.round((inh_A/inhSum)*100);
var rate_B = Math.round((inh_B/inhSum)*100);
var rate_C = Math.round((inh_C/inhSum)*100);
var rate_D = Math.round((inh_D/inhSum)*100);

var EU_security_food_rate= 0;
	//92;
var EU_security_energy_rate= 0;
	//52;
window.addEventListener("load", function () {

function EU_security_food1() {
	//////console.log("================ EU-security-Food ===============================");
	// STO GIOCANDO IN LOCALE ED UTILIZZO IL NORMALE CODICE PER IL LOCALE
	if(localStorage.getItem("GameVersion")=="SP1" || localStorage.getItem("GameVersion")=="SP2") {
		// ============================ Recupero dati OUTPUT registrati in localStorage per ogni regione =========================================================
		regionA = localStorage.getItem("regionADataOutput"); regionA = JSON.parse(regionA);
		regionB = localStorage.getItem("regionBDataOutput"); regionB = JSON.parse(regionB);
		regionC = localStorage.getItem("regionCDataOutput"); regionC = JSON.parse(regionC);
		regionD = localStorage.getItem("regionDDataOutput"); regionD = JSON.parse(regionD);
		
		//////console.log("Region A: "+JSON.stringify(regionA)+ "Region B: "+JSON.stringify(regionB)+" Region C: "+JSON.stringify(regionC)+" Region D: "+JSON.stringify(regionD));
		//console.log("Region A: "+JSON.stringify(regionA));
		//console.log("Region B: "+JSON.stringify(regionB));
		//console.log("Region C: "+JSON.stringify(regionC));
		//console.log("Region D: "+JSON.stringify(regionD));
	}
	else {
		/*
			Sono dentro la sezione dedicata al multiplayer
			
			- Il client chiama il database e chiede gli oggetti (in formato stringa) obj_A / obj_B / obj_C / obj_D
			- Il database restituisce gli oggetti al client
			regionA = JSON.parse(obj_A);
			regionB = JSON.parse(obj_B);
			regionC = JSON.parse(obj_C);
			regionD = JSON.parse(obj_D);
		*/
	}
	
	A_security_food = regionA["security_food"];
	B_security_food = regionB["security_food"];
	C_security_food = regionC["security_food"];
	D_security_food = regionD["security_food"];
	
	A_ext=0; B_ext=0; C_ext=0; D_ext=0;
	
	A_int = A_security_food*inh_A;
	A_B_ext = regionB["InRegionA_food"];
	A_C_ext = regionC["InRegionA_food"];
	A_D_ext = regionD["InRegionA_food"];
	A_ext = (A_B_ext*inh_B)+(A_C_ext*inh_C)+(A_D_ext*inh_D);
	A = A_int+A_ext;
	
	console.log("A_security_food: "+A_security_food+" A_B_ext: "+A_B_ext+" A_C_ext: "+A_C_ext+" A_D_ext: "+A_D_ext);
	
	B_int = B_security_food*inh_B;
	B_A_ext = regionA["InRegionB_food"];
	B_C_ext = regionC["InRegionB_food"];
	B_D_ext = regionD["InRegionB_food"];
	B_ext = (B_A_ext*inh_A)+(B_C_ext*inh_C)+(B_D_ext*inh_D);
	B = B_int+B_ext;
	
	console.log("B_security_food: "+B_security_food+" B_A_ext: "+B_A_ext+" B_C_ext: "+B_C_ext+" B_D_ext: "+B_D_ext);
	
	C_int = C_security_food*inh_C;
	C_A_ext = regionA["InRegionC_food"];
	C_B_ext = regionB["InRegionC_food"];
	C_D_ext = regionD["InRegionC_food"];
	C_ext = (C_A_ext*inh_A)+(C_B_ext*inh_B)+(C_D_ext*inh_D);
	C = C_int+C_ext;
	
	console.log(" C_security_food: "+C_security_food+" C_A_ext: "+C_A_ext+" C_B_ext: "+C_B_ext+" B_D_ext: "+C_D_ext);
	
	D_int = D_security_food*inh_D;
	D_A_ext = regionA["InRegionD_food"];
	D_B_ext = regionB["InRegionD_food"];
	D_C_ext = regionC["InRegionD_food"];
	D_ext = (D_A_ext*inh_A)+(D_B_ext*inh_B)+(D_C_ext*inh_C);
	D = D_int+D_ext;
	console.log("D_security_food: "+D_security_food+" D_A_ext: "+D_A_ext+" D_B_ext: "+D_B_ext+" D_C_ext: "+D_C_ext);
	
	// I SEGUENTI VALORI SONO I NUMERI IN NERO DI MJ/CAP ENERGY PER LE REGIONI A - B - C - D
	EU_A_security_food = A/inhSum;
	EU_B_security_food = B/inhSum;
	EU_C_security_food = C/inhSum;
	EU_D_security_food = D/inhSum;
	
	console.log("KCAL/CAP FOOD: A-"+A_security_food+" B-"+B_security_food+" C-"+C_security_food+" D-"+D_security_food);
	
	console.log("EU_A_security_food: "+EU_A_security_food);
	console.log("EU_B_security_food: "+EU_B_security_food);
	console.log("EU_C_security_food: "+EU_C_security_food);
	console.log("EU_D_security_food: "+EU_D_security_food);
	
	// I SEGUENTI VALORI SONO NUMERI TEMPORANEI CHE SERVONO PER CALCOLARE SECURITY FOOD WORLD IN NERO NELLA TABELLA
	/*
	WORLD_A_security_food = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_A_security_food"];
	WORLD_B_security_food = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_B_security_food"];
	WORLD_C_security_food = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_C_security_food"];
	WORLD_D_security_food = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_D_security_food"];
	*/
	WORLD_A_security_food = regionA["WORLD_A_security_food"];
	WORLD_B_security_food = regionB["WORLD_B_security_food"];
	WORLD_C_security_food = regionC["WORLD_C_security_food"];
	WORLD_D_security_food = regionD["WORLD_D_security_food"];
	
	console.log("WORLD SECURITY KCAL/CAP FOOD: A-"+WORLD_A_security_food+" B-"+WORLD_B_security_food+" C-"+WORLD_C_security_food+" D-"+WORLD_D_security_food);
	
	WORLD_part_A_security_food = WORLD_A_security_food*inh_A;
	WORLD_part_B_security_food = WORLD_B_security_food*inh_B;
	WORLD_part_C_security_food = WORLD_C_security_food*inh_C;
	WORLD_part_D_security_food = WORLD_D_security_food*inh_D;
	
	WORLD_security_food = (WORLD_part_A_security_food+WORLD_part_B_security_food+WORLD_part_C_security_food+WORLD_part_D_security_food)/inhSum;
	
	console.log("WORLD_security_food: "+WORLD_security_food);

	somma_sopra_food = EU_A_security_food+EU_B_security_food+EU_C_security_food+EU_D_security_food;
	somma_sotto_food = EU_A_security_food+EU_B_security_food+EU_C_security_food+EU_D_security_food+WORLD_security_food;
	
	EU_security_food_rate = somma_sopra_food/somma_sotto_food*100;
	console.log("somma_sopra_food: "+somma_sopra_food+" somma_sotto_food: "+somma_sotto_food);
	console.log("EU_security_food_rate: "+EU_security_food_rate);
	EU_security_food_rate = Math.round(EU_security_food_rate);
	
	var foodperc = Math.round(EU_security_food_rate);
	foodperc = Number(Math.round(EU_security_food_rate));
	if (foodperc>=95){
	document.getElementById("eufood").innerHTML = "<font color='#B1FB17'>"+Math.round(EU_security_food_rate)+"%</font>";
	} else {
		document.getElementById("eufood").innerHTML = "<font color='red'>"+Math.round(EU_security_food_rate)+"%</font>";

	}
	var EU = JSON.parse(localStorage.getItem("EU"));
	EU["food"] = EU_security_food_rate;
	localStorage.setItem("EU", JSON.stringify(EU));

}	
setInterval(EU_security_food1, 3000);



function EU_security_energy1() {
	//////console.log("================ EU-security-Energy ===============================");
	// STO GIOCANDO IN LOCALE ED UTILIZZO IL NORMALE CODICE PER IL LOCALE
	if(localStorage.getItem("GameVersion")=="SP1" || localStorage.getItem("GameVersion")=="SP2") {
		// ============================ Recupero dati OUTPUT registrati in localStorage per ogni regione =========================================================
		regionA = localStorage.getItem("regionADataOutput"); regionA = JSON.parse(regionA);
		regionB = localStorage.getItem("regionBDataOutput"); regionB = JSON.parse(regionB);
		regionC = localStorage.getItem("regionCDataOutput"); regionC = JSON.parse(regionC);
		regionD = localStorage.getItem("regionDDataOutput"); regionD = JSON.parse(regionD);
		
		//////console.log("Region A: "+JSON.stringify(regionA)+ "Region B: "+JSON.stringify(regionB)+" Region C: "+JSON.stringify(regionC)+" Region D: "+JSON.stringify(regionD));
	}
	else {
		/*
			Sono dentro la sezione dedicata al multiplayer
			
			- Il client chiama il database e chiede gli oggetti (in formato stringa) obj_A / obj_B / obj_C / obj_D
			- Il database restituisce gli oggetti al client
			regionA = JSON.parse(obj_A);
			regionB = JSON.parse(obj_B);
			regionC = JSON.parse(obj_C);
			regionD = JSON.parse(obj_D);
		*/
	}
	
	A_security_energy = regionA["security_energy"];
	B_security_energy = regionB["security_energy"];
	C_security_energy = regionC["security_energy"];
	D_security_energy = regionD["security_energy"];
	
	//////console.log("MJ/CAP ENERGY: A-"+A_security_energy+" B-"+B_security_energy+" C-"+C_security_energy+" D-"+D_security_energy);
	
	/*
	WORLD_A_security_energy = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_A_security_energy"];
	WORLD_B_security_energy = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_B_security_energy"];
	WORLD_C_security_energy = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_C_security_energy"];
	WORLD_D_security_energy = JSON.parse(localStorage.getItem("WORLDDataOutput"))["WORLD_D_security_energy"];
	*/
	WORLD_A_security_energy = regionA["WORLD_A_security_energy"];
	WORLD_B_security_energy = regionB["WORLD_B_security_energy"];
	WORLD_C_security_energy = regionC["WORLD_C_security_energy"];
	WORLD_D_security_energy = regionD["WORLD_D_security_energy"];
	
	//////console.log("WORLD_A_security_energy: "+WORLD_A_security_energy);
	//////console.log("WORLD_B_security_energy: "+WORLD_B_security_energy);
	//////console.log("WORLD_C_security_energy: "+WORLD_C_security_energy);
	//////console.log("WORLD_D_security_energy: "+WORLD_D_security_energy);
	
	//////console.log("WORLD SECURITY MJ/CAP ENERGY: A-"+WORLD_A_security_energy+" B-"+WORLD_B_security_energy+" C-"+WORLD_C_security_energy+" D-"+WORLD_D_security_energy);
	
	A_ext=0; B_ext=0; C_ext=0; D_ext=0;
	
	A_int = A_security_energy*inh_A;
	A_B_ext = regionB["InRegionA_energy"];
	A_C_ext = regionC["InRegionA_energy"];
	A_D_ext = regionD["InRegionA_energy"];
	A_ext = (A_B_ext*inh_B)+(A_C_ext*inh_C)+(A_D_ext*inh_D);
	A = A_int+A_ext;
	
	//////console.log("A_security_energy: "+A_security_energy+" A_B_ext: "+A_B_ext+" A_C_ext: "+A_C_ext+" A_D_ext: "+A_D_ext);
	
	B_int = B_security_energy*inh_B;
	B_A_ext = regionA["InRegionB_energy"];
	B_C_ext = regionC["InRegionB_energy"];
	B_D_ext = regionD["InRegionB_energy"];
	B_ext = (B_A_ext*inh_A)+(B_C_ext*inh_C)+(B_D_ext*inh_D);
	B = B_int+B_ext;
	
	////console.log("B_security_energy: "+B_security_energy+" B_A_ext: "+B_A_ext+" B_C_ext: "+B_C_ext+" B_D_ext: "+B_D_ext);
	
	C_int = C_security_energy*inh_C;
	C_A_ext = regionA["InRegionC_energy"];
	C_B_ext = regionB["InRegionC_energy"];
	C_D_ext = regionD["InRegionC_energy"];
	C_ext = (C_A_ext*inh_A)+(C_B_ext*inh_B)+(C_D_ext*inh_D);
	C = C_int+C_ext;
	
	//////console.log("value: "+value+" inhSum: "+inhSum+" tempA: "+tempA+" tempC: "+tempC+" temp: "+temp+" C_security_energy: "+C_security_energy+" C_A_ext: "+C_A_ext+" C_B_ext: "+C_B_ext+" B_D_ext: "+C_D_ext);
	//////console.log("C_int: "+C_int+" C_ext: "+C_ext);
	//////console.log("inh_C: "+inh_C+" inh_A: "+inh_A+" inh_B: "+inh_B+" inh_D: "+inh_D);
	
	D_int = D_security_energy*inh_D;
	D_A_ext = regionA["InRegionD_energy"];
	D_B_ext = regionB["InRegionD_energy"];
	D_C_ext = regionC["InRegionD_energy"];
	D_ext = (D_A_ext*inh_A)+(D_B_ext*inh_B)+(D_C_ext*inh_C);
	D = D_int+D_ext;
	//////console.log("D_security_energy: "+D_security_energy+" D_A_ext: "+D_A_ext+" D_B_ext: "+D_B_ext+" D_C_ext: "+D_C_ext);
	
	// I SEGUENTI VALORI SONO I NUMERI IN NERO DI MJ/CAP ENERGY PER LE REGIONI A - B - C - D
	EU_A_security_energy = A/inhSum;
	EU_B_security_energy = B/inhSum;
	EU_C_security_energy = C/inhSum;
	EU_D_security_energy = D/inhSum;
	
	//////console.log("EU_A_security_energy: "+EU_A_security_energy);
	//////console.log("EU_B_security_energy: "+EU_B_security_energy);
	//////console.log("EU_C_security_energy: "+EU_C_security_energy);
	//////console.log("EU_D_security_energy: "+EU_D_security_energy);
	
	// I SEGUENTI VALORI SONO NUMERI TEMPORANEI CHE SERVONO PER CALCOLARE SECURITY ENERGY WORLD IN NERO NELLA TABELLA
	
	WORLD_part_A_security_energy = WORLD_A_security_energy*inh_A;
	WORLD_part_B_security_energy = WORLD_B_security_energy*inh_B;
	WORLD_part_C_security_energy = WORLD_C_security_energy*inh_C;
	WORLD_part_D_security_energy = WORLD_D_security_energy*inh_D;
	
	WORLD_security_energy = (WORLD_part_A_security_energy+WORLD_part_B_security_energy+WORLD_part_C_security_energy+WORLD_part_D_security_energy)/inhSum;
	
	//////console.log("WORLD_security_energy: "+WORLD_security_energy);
	
	somma_sopra_energy = EU_A_security_energy+EU_B_security_energy+EU_C_security_energy+EU_D_security_energy;
	somma_sotto_energy = EU_A_security_energy+EU_B_security_energy+EU_C_security_energy+EU_D_security_energy+WORLD_security_energy;
	
	EU_security_energy_rate = somma_sopra_energy/somma_sotto_energy*100;
	//////console.log("EU_security_energy_rate: "+EU_security_energy_rate);
	EU_security_energy_rate = EU_security_energy_rate.toFixed(2);
	
	var percen = Math.round(EU_security_energy_rate);
	percen = Number(percen);
	if(percen>=70){document.getElementById("euenergy").innerHTML = "<font color='#B1FB17'>"+Math.round(EU_security_energy_rate)+"%</font>";} 
	else {document.getElementById("euenergy").innerHTML = "<font color='red'>"+Math.round(EU_security_energy_rate)+"%</font>";}
	
	var EU = JSON.parse(localStorage.getItem("EU"));
	EU["energy"] = EU_security_energy_rate;
	localStorage.setItem("EU", JSON.stringify(EU));
}
setInterval(EU_security_energy1, 3000);

});