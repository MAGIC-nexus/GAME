var region = document.querySelector('input[name="region"]:checked').getAttribute('id');

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

// ------------------------------ COSTANTI
CF_fp_product_init_value = '20.3769358104986';
LF_fp_product_init_value = '14.7453616645949';
WFgreen_fp_product_init_value = '3094.35622127523';
WFblue_fp_product_init_value = '454.461724873184';

A_CF_sust_limit = 0;
B_CF_sust_limit = 0;
C_CF_sust_limit = 0;
D_CF_sust_limit = 0;
	
A_CF_physic_limit = 0;
B_CF_physic_limit = 0;
C_CF_physic_limit = 0;
D_CF_physic_limit = 0;

A_physicalCF = 0;
A_sustainableCF = 0;
A_physicalLF = 21;
A_sustainableLF = 10;
A_physicalWFG = 8834;
A_sustainableWFG = 3533;
A_physicalWFB = 5710;
A_sustainableWFB = 1550;

physicalCF = 0;
sustainableCF = 0;
physicalLF = 21;
sustainableLF = 10;
physicalWFG = 8834;
sustainableWFG = 3533;
physicalWFB = 5710;
sustainableWFB = 1550;


	
window.addEventListener("load", function () {

	function EU_aggiornabar_sotto_CF() {
		////console.log("======= EU AGGIORNABAR SOTTO CF ========");
		// ============================ Recupero dati OUTPUT registrati in localStorage per ogni regione ==========================================================
		regionA = localStorage.getItem("regionADataOutput"); regionA = JSON.parse(regionA);
		regionB = localStorage.getItem("regionBDataOutput"); regionB = JSON.parse(regionB);
		regionC = localStorage.getItem("regionCDataOutput"); regionC = JSON.parse(regionC);
		regionD = localStorage.getItem("regionDDataOutput"); regionD = JSON.parse(regionD);

		//console.log("Region A: "+JSON.stringify(regionA)+ "Region B: "+JSON.stringify(regionB)+" Region C: "+JSON.stringify(regionC)+" Region D: "+JSON.stringify(regionD));
		
		A_CF_fp_production = regionA["EU_A_sotto_cf"]; B_CF_fp_production = regionB["EU_B_sotto_cf"];
		C_CF_fp_production = regionC["EU_C_sotto_cf"]; D_CF_fp_production = regionD["EU_D_sotto_cf"];
		
		partA_CF = A_CF_fp_production*inh_A;
		partB_CF = B_CF_fp_production*inh_B;
		partC_CF = C_CF_fp_production*inh_C;
		partD_CF = D_CF_fp_production*inh_D;
		
		//console.log("partA_CF: "+A_CF_fp_production+" partB_CF: "+B_CF_fp_production+" partC_CF: "+C_CF_fp_production+" partD_CF: "+D_CF_fp_production);
		//console.log("inh_A: "+inh_A+" inh_B: "+inh_B+" inh_C "+inh_C+" inh_D "+inh_D+ "inhSum: "+inhSum);
		
		EU_average_fp_production_CF = (partA_CF+partB_CF+partC_CF+partD_CF)/inhSum;
		//console.log("EU_average_fp_production_CF: "+EU_average_fp_production_CF);
		
		var EU = JSON.parse(localStorage.getItem("EU"));
		EU["carbon"] = EU_average_fp_production_CF;
		localStorage.setItem("EU", JSON.stringify(EU));
		
		A_per_EU_capita_CF = partA_CF/inhSum;
		B_per_EU_capita_CF = partB_CF/inhSum;
		C_per_EU_capita_CF = partC_CF/inhSum;
		D_per_EU_capita_CF = partD_CF/inhSum;
		
		A_CF_sust_limit = 10;
		B_CF_sust_limit = 12;
		C_CF_sust_limit = 10;
		D_CF_sust_limit = 12;
		
		A_CF_physic_limit =	9;
		B_CF_physic_limit = 7;
		C_CF_physic_limit = 8;
		D_CF_physic_limit = 5;
		
		CF_fp_product_rate = (EU_average_fp_production_CF - CF_fp_product_init_value)/CF_fp_product_init_value*100;
		
		var paragone = Math.round(EU_average_fp_production_CF);
		paragone = Number(paragone);
		
		if(paragone<=16){
			document.getElementById('carboneu').innerHTML = "<font color='#B1FB17'>"+Math.round(EU_average_fp_production_CF)+"</font>";
		} 
		else {
			document.getElementById('carboneu').innerHTML = "<font color='red'>"+Math.round(EU_average_fp_production_CF)+"</font>";
		}
	}
	setInterval(EU_aggiornabar_sotto_CF, 3000);
});