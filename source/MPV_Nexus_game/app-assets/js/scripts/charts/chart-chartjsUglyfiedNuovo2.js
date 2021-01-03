//==========================================================================================*/
var sustainable_limit_LF = 10; var sustainable_limit_wfgreen = 3533; var sustainable_limit_wfblue = 1550;
var phisical_limit_LF = 21; var phisical_limit_wfgreen = 8834; var phisical_limit_wfblue = 5710;

//COSTANTI PER ENERGY E FOOD GRAFICI PRODUCTION//
var initial_value_CF_food = 0.003238332; var initial_value_LF_food = 0.003459326; var initial_value_wfg_food = 1.19415722;
var initial_value_wfb_food = 0.16009438; 
var initial_value_CF_en = 0.062843721771217 ; var initial_value_LF_en = 0.00774419419094049 ; var initial_value_wfg_en= 5.52412077113194; 
var initial_value_wfb_en = 1.10088961437177 ;


//COSTANTI PER I GRAFICI INIZIALI//
var initial_value_cf_int = 24.4212022139062; var initial_value_lf_int = 13.2551883468376;
var initial_value_wfg_int = 5191.68997367378; var initial_value_wfb_int = 773.876129386631;
//

var WORLD_plant_cf_FoodY11 = 0; var WORLD_meat_cf_FoodY12 = 0; WORLD_diary_cf_FoodY13 = 0;
var WORLD_plant_lf_FoodX11 = 0.0011; WORLD_meat_lf_FoodX12 = 0; WORLD_diary_lf_FoodX13 = 0;
var WORLD_plant_WFblue_FoodW11 = 0.13; WORLD_meat_WFblue_FoodW12 = 0.39; WORLD_diary_WFblue_FoodW13 = 0.17;
var WORLD_plant_WFgreen_FoodV11 = 0.59; WORLD_meat_WFgreen_FoodV12 = 5.84; WORLD_diary_WFgreen_FoodV13 = 1.70;

//PERCENTUALI ENERGIE PER REGIONI, VALORI FISSI	
var PER_A_Wind = 0.12;  var PER_B_Wind = 0.08;	var PER_C_wind = 0.12;	var PER_D_Wind = 0.11;
var PER_A_Solar = 0.03;  var PER_B_Solar = 0.01; var PER_C_Solar = 0.06; var PER_D_Solar = 0.02;
var PER_A_Hydro = 0.18; var PER_B_Hydro = 0.27; var PER_C_Hydro = 0.06;	var PER_D_Hydro = 0.09;
var PER_A_Biofuel =0.03; var PER_B_Biofuel = 0.08;  var PER_C_Biofuel = 0.07; var PER_D_Biofuel = 0.02;
var PER_A_Nuclear = 0.04; var PER_B_Nuclear = 0.34;  var PER_C_Nuclear = 0.14; var PER_D_Nuclear = 0.35;
var PER_A_Fossil = 0.6; var PER_B_Fossil = 0.28;  var PER_C_Fossil = 0.55; var PER_D_Fossil = 0.41;

//WORLD AVERAGE VALORI FISSI:
var WORLD_plant_cf = 0.0008; var WORLD_plant_lf = 0.0011; var WORLD_plant_wfblue = 0.144;
var WORLD_meat_cf = 0.0129; var WORLD_meat_lf = 0.0344; var WORLD_meat_wfblue = 0.18;
var WORLD_diary_cf = 0.0064; var WORLD_diary_lf = 0.0172; var WORLD_diary_wfblue = 0.14;

var WORLD_plant_wfgreen = 0.576;
var WORLD_meat_wfgreen = 3.42;
var WORLD_diary_wfgreen = 1.30;
//VALORI FOOD PER REGIONE WF GREEN, WF BLUE, LF, CF - CF è UGUALE PER TUTTE LE REGIONI

var RA_WFgreen_Plant = 0.608; var RA_WFblue_Plant = 0.152; var RA_LF_Plant = 0.0005; var RA_CF_Plant = 0.0008;  
var RA_WFgreen_Meat = 3.61; var RA_WFblue_Meat = 0.19; var RA_LF_Meat = 0.0140; var RA_CF_Meat = 0.0129;
var RA_WFgreen_Diary = 1.71; var RA_WFblue_Diary = 0.19; var RA_LF_Diary = 0.0070; var RA_CF_Diary = 0.0064;

var RB_WFgreen_Plant = 0.732; var RB_WFblue_Plant =0.183; var RB_LF_Plant = 0.0010;
var RB_WFgreen_Meat = 4.35;  var RB_WFblue_Meat = 0.23;  var RB_LF_Meat = 0.0200;
var RB_WFgreen_Diary = 2.06; var RB_WFblue_Diary = 0.23;  var RB_LF_Diary = 0.0100;

var RC_WFgreen_Plant = 0.32; var RC_WFblue_Plant = 0.08;  var RC_LF_Plant = 0.0005;
var RC_WFgreen_Meat = 190;  var RC_WFblue_Meat = 0.10;  var RC_LF_Meat = 0.0140;
var RC_WFgreen_Diary = 0.90;  var RC_WFblue_Diary = 0.10;  var RC_LF_Diary =  0.0070;

var RD_WFgreen_Plant =0.44;  var RD_WFblue_Plant = 0.11;  var RD_LF_Plant = 0.001;
var RD_WFgreen_Meat = 2.61;  var RD_WFblue_Meat = 0.14;  var RD_LF_Meat =  0.0140;
var RD_WFgreen_Diary = 1.24; var RD_WFblue_Diary = 0.14;  var RD_LF_Diary = 0.0070;
	
//VALLRI ENERGY PER REGIONE WF GREEN, WF BLUE, LF, CF - CF UGUALE PER TUTTE LE REGIONI,
// TABELLA C E D SONO IDENTICHE.
var RA_WFgreen_Wind=0;  var RA_WFblue_Wind= 1.3;  var RA_LF_Wind= 0.194; var RA_CF_Wind= 6.1;   
var RA_WFgreen_Solar=0.00;  var RA_WFblue_Solar=140.00; var RA_LF_Solar=2.417;   var RA_CF_Solar= 28.2;
var RA_WFgreen_Hydro =0.00; var RA_WFblue_Hydro=9114.00; var RA_LF_Hydro =0.972; var RA_CF_Hydro = 3.1;
var RA_WFgreen_Biofuel=90000.00; var RA_WFblue_Biofuel=10000.00; var RA_LF_Biofuel= 125.000;var RA_CF_Biofuel= 19.2;
var RA_WFgreen_Nuclear=0.00;  var RA_WFblue_Nuclear=567.00; var RA_LF_Nuclear=0.278; var RA_CF_Nuclear= 5.3;
var RA_WFgreen_Fossil =0.00;  var RA_WFblue_Fossil=388.00; var RA_LF_Fossil=0.028; var RA_CF_Fossil= 219.1;

var RB_WFgreen_Wind = 0;  var RB_WFblue_Wind =1.3;  var RB_LF_Wind = 0.194;
var RB_WFgreen_Solar =0;	var RB_WFblue_Solar =140; var RB_LF_Solar =	2.417;	
var RB_WFgreen_Hydro =0; var RB_WFblue_Hydro =9114.00; var RB_LF_Hydro = 0.927;
var RB_WFgreen_Biofuel =90; var RB_blue_Biofuel =10.00; var RB_LF_Biofuel = 125.000;
var RB_WFgreen_Nuclear =0; var RB_WFblue_Nuclear =567.00; var RB_LF_Nuclear = 0.278;
var RB_WFgreen_Fossil =0; var RB_WFblue_Fossil = 388.00; var RB_LF_Fossil =0.028;

var RC_D_WFgreen_Wind = 0;  var RC_D_WFblue_Wind =1.3;  var RC_D_LF_Wind = 0.194;
var RC_D_WFgreen_Solar =0;	var RC_D_WFblue_Solar =140; var RC_D_LF_Solar =	2.417;	
var RC_D_WFgreen_Hydro =0; var RC_D_WFblue_Hydro =9114.00; var RC_D_LF_Hydro = 0.927;
var RC_D_WFgreen_Biofuel =90; var RC_D_WFblue_Biofuel =10.00; var RC_D_LF_Biofuel = 125.000;
var RC_D_WFgreen_Nuclear =0; var RC_D_WFblue_Nuclear =567.00; var RC_D_LF_Nuclear = 0.278;
var RC_D_WFgreen_Fossil =0; var RC_D_WFblue_Fossil = 388.00; var RC_D_LF_Fossil =0.028;

var RC_D_CF_Wind = 6.1; var RC_D_CF_Solar = 28.2;  var RC_D_CF_Hydro = 3.1; 
var RC_D_CF_Biofuel = 19.2; var RC_D_CF_Nuclear = 5.3; var RC_D_CF_Fossil = 219.1;

var Rainfed = 0.84;
var Irrigated = 1-Rainfed;

var YG_closing_WFb = 0; var Mulching_WFb = 0;
var YG_closing_CF = 0; var Mulching_CF = 0; var Deficit_Irrigation_CF = 0; var Deficit_Mul_CF = 0;
var Deficit_Mul_Drip_CF = 0;
var YG_closing_LF = 0.17; var Mulching_LF = 0.25; var YG_closing_WFg = 0.17; var Mulching_WFg = 0.25;
var Deficit_Irrigation_LF = -0.10; var Deficit_Mul_LF = -0.10; var Deficit_Irrigation_WFg = -0.08;
var Deficit_Mul_WFg = 0.02; var Deficit_Irrigation_WFb = 0.15; var Deficit_Mul_WFb = 0.30;
var Deficit_Mul_Drip_LF = -0.02; var Deficit_Mul_Drip_WFg = 0.05; var Deficit_Mul_Drip_WFb = 0.035;






//////////////////////////////////////////////////////////////////////////
// ----------------------------------------------------------------------------------------------------------------------------------
//$(window).on("load", function () {
window.addEventListener("load", function () {
	
var $primary = '#5A8DEE',
    $success = '#39DA8A',
    $danger = '#FF5B5C',
    $warning = '#FDAC41',
    $info = '#00CFDD',
    $label_color = '#475F7B',
    grid_line_color = '#dae1e7',
    scatter_grid_color = '#f3f3f3',
    $scatter_point_light = '#E6EAEE',
    $scatter_point_dark = '#5A8DEE',
    $white = '#fff',
    $black = '#000';

var giallo = $warning;
var rosso = $danger;
var verde = $success;
var blu = $primary;


  	var themeColors = [$primary, $warning, $danger, $success, $info, $label_color];
  

  // Line Chart
  // ------------------------------------------

  //Get the context of the Chart canvas element we want to select
  var lineChartctx = $("#line-chart");

  // Chart Options
  var linechartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
    },
    hover: {
      mode: 'label'
    },
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
        }
      }]
    },
    title: {
      display: true,
      text: 'World population per region (in millions)'
    }
  };

  // Chart Data
  var linechartData = {
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
    datasets: [{
      label: "Local",
      data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
      borderColor: $primary,
      fill: false
    }, {
      data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
      label: "B",
      borderColor: $success,
      fill: false
    }, {
      data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
      label: "C",
      borderColor: $danger,
      fill: false
    }, {
      data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
      label: "D",
      borderColor: $warning,
      fill: false
    }, {
      data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
      label: "EU",
      borderColor: $label_color,
      fill: false
    },{
        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
        label: "WORLD",
        borderColor: $label_color,
        fill: false
      }]
  };

  var lineChartconfig = {
    type: 'line',

    // Chart Options
    options: linechartOptions,
    data: linechartData
  };
  // Create the chart
  var lineChart = new Chart(lineChartctx, lineChartconfig);

  // Bar Chart
  // ------------------------------------------

  //Get the context of the Chart canvas element we want to select
  var barChartctx = $("#bar-chart");
  // Chart Options
  var barchartOptions = {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each bar to be 2px wide
  elements: {
      rectangle: {
        borderWidth: 2,
        borderSkipped: 'left'
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: { display: false },
    scales: {
      xAxes: [{
        display: true,
        stacked:true,
        gridLines: {
        color: grid_line_color,
      },
        scaleLabel: {
          display: true,
        }
      }],
      yAxes: [{
    	  stacked:true,
        display: true,
        gridLines: {
        color: grid_line_color,
      },
        scaleLabel: {
          display: true,
        },
        ticks: { 
          beginAtZero: true,
        },
        type: 'linear',
      }],
    },
    title: {
      display: true,
      text: 'CF (kg CO2/cap/day)'
    },
  };
  // Chart Data
  var barchartData = {
    
		    labels: ["Internal", "External"],
		    datasets: [{
		      type: 'bar',
		      label: 'Food"',
		      data: [16, 0],
		      backgroundColor: 'yellow'
		      
		    }, {
		      type: 'bar',
		      label: '"Energy"',
		      backgroundColor: "green",
		      data: [8, 5],
		    }]
		  
      
  };
  var barChartconfig = {
    type: 'bar',

    // Chart Options
    options: barchartOptions,
    data: barchartData
  };
  

// Create the chart
var barChart = new Chart(barChartctx, barChartconfig);
function aggiornabar() {
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
var fip = parseFloat(document.getElementById("E30").value)/100;
var fim = parseFloat(document.getElementById("E31").value)/100;
var fid = parseFloat(document.getElementById("E32").value)/100;
//----------------------------------------------------------------------------------
var Gap_Yeld_parse = parseFloat(document.getElementById("G14").value)/100;
var Mulching_parse = parseFloat(document.getElementById("G15").value)/100; 	
//	//console.log("MULCHING PARSE: "+Mulching_parse);
var Full_Deficit_parse = parseFloat(document.getElementById("G19").value)/100;
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
//----------------------------------------------------------------------------------------------------------------
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
//calcolo i valori per PLANT BASED:
var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
plant1 = parseFloat(plant1.toFixed(2));
//console.log("plant1= Food V18 Total: "+plant1+" intakeparse: "+intakeparse);
//calcolo i valori per MEAT & FISH:
var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;
meat1 = parseFloat(meat1.toFixed(2));
//calcolo i valori per DIARY & EGGS:
var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
diary1 = parseFloat(diary1.toFixed(2));
// plant1+meat1+diary1 = intakeparse (Food.W18 + Food.W19 + Food.W20 = Food.W17)
//----------------------------------------------------------------------------------------------------------------
//calcolo WASTE:
var waste_val = (wasteparse*intakeparse)/100;
waste_val = parseFloat(waste_val.toFixed(2));
//CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
//OTTENGO LA PERCENTUALE BASE (% * calorie+waste)
var cal_waste = waste_val+intakeparse;
cal_waste = parseFloat(cal_waste.toFixed(2));
//----------------------------------------------------------------------------------------------------------------
var YeldCF = Gap_Yeld_parse*YG_closing_CF;
var Mulch = Mulching_parse*Mulching_CF;
var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_CF;

//----------------------------------------------------------------------------------------------------------------
var meatbased = (meat1*cal_waste)/100; 
var diarybased = (diary1*cal_waste)/100;
var plantbased = (plant1*cal_waste)/100;	//Food.V18*Food.W17
//----------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
//CALCOLO IL VALORE PER LE SOMME DI FOOD CF INTERNAL:
//PLANT:
//------------------------------------------------------------------------------------------------------------------
var plantbasedA = plantbased*(1-fip);
var plantbasedB = ((YeldCF+Mulch)*Rainfed)+Deficit;

  var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
   //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
  if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
	  var plantbasedC = RA_CF_Plant*(1-0);	
 	  
  } 
  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
	  var plantbasedC = RA_CF_Plant*(1-0);	
 	  
  }
  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) {
	  var plantbasedC = RA_CF_Plant*(1-0);	
 	  
  } 
  else {
var plantbasedC = RA_CF_Plant*(1-0);
  }
var plant_cf = (plantbasedA*plantbasedC);

//------------------------------------------------------------------------------------------------------------------
//MEAT:	
var meatbasedA = meatbased*(1-fim);
var meatbasedB = ((YeldCF+Mulch)*Rainfed)+Deficit;
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
	var meatbasedC = RA_CF_Meat*(1-0);  

}    
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) {
	var meatbasedC = (RA_CF_Meat)*(1-0);
	  
}
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) {
	var meatbasedC = (RA_CF_Meat)*(1-0);

	  
}
	  
else {
	var meatbasedC = (RA_CF_Meat)*(1-meatbasedB);
}

//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
var meat_cf = (meatbasedA)*(meatbasedC);

//---------------------------------------------------------------------------------------------------------------------
//DIARY:
var diaryA = (diarybased)*(1-fid);
var diaryB = ((YeldCF+Mulch)*Rainfed)+Deficit;
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
	var diaryC = (RA_CF_Diary)*(1-0);	
	}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) {
	var diaryC = (RA_CF_Diary)*(1-0);
	}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) {
	var diaryC = (RA_CF_Diary)*(1-0);
	}
else {
	var diaryC = (RA_CF_Diary)*(1-0);
}
var diary_cf = (diaryA)*(diaryC);

//---------------------------------------------------------------------------------------------------------------------
var add1 = (plant_cf)+(meat_cf);
var dataCF_food_int = (add1)+(diary_cf);
console.log("VALORE FOOD INT CF TOTAL = Food.K21: "+dataCF_food_int);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD CF EXTERNAL:
var plantres_cf_e = (plantbased)*(fip);
var plantres_cf_ext = (plantres_cf_e)*(WORLD_plant_cf_FoodY11);
var meatres_cf_e = (meatbased*fim);
var meatres_cf_ext = (meatres_cf_e)*(WORLD_meat_cf_FoodY12);
var diaryres_cf_e = (diarybased*fid);
var diaryres_cf_ext = (diaryres_cf_e)*(WORLD_diary_cf_FoodY13);
	  
var dataCF_food_ext = (plantres_cf_ext+meatres_cf_ext+diaryres_cf_ext);
console.log("VALORE FOOD EXT CF TOTAL = Food.O21 : "+dataCF_food_ext);


//----------------------------------------------------------------------------------------------------------------------

//console.log("==========INIZIO ENERGY CF============");	  
//////////////////// CALCOLO ENERGY ///////////////////////////////
var red_ind_parse = parseFloat(document.getElementById("e_N5").value)/100;
var red_tr_parse = parseFloat(document.getElementById("e_N6").value)/100;
var red_ser_parse =parseFloat(document.getElementById("e_N7").value)/100;
var red_house = parseFloat(document.getElementById("e_N8").value)/100;
var el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
var fuel_house_parse = parseFloat(document.getElementById("e_N12").value)/100;  
var bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
var fossilf_parse = parseFloat(document.getElementById("L30").value)/100;
var biofuels_parse = parseFloat(document.getElementById("L31").value)/100;
var elec_parse = parseFloat(document.getElementById("L32").value)/100;
//---------------------------------------------------------------------------------------------------
//CONSUMPTION REGION A - VALORI FISSI
var fossil_ind = 37.3;
var bio_ind = 5.8;
var el_ind = 16.4;
	  	  
var fossil_tr = 71.6;
var bio_tr = 2.7;
var el_tr = 1.1;
	  	  
var fossil_s = 13.8;
var bio_s = 2.5;
var el_s = 16.8;
	  	  
var fossil_house = 27.8;
var bio_house = 6.4;
var el_house = 14.8;
//----------------------------------------------------------------------------------------------------
var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
var somma_valori_s = (fossil_s+bio_s+el_s);
var somma_valori_house = (fossil_house+bio_house+el_house);
//----------------------------------------------------------------------------------------------------
var A6a = (1-red_ind_parse)*(somma_valori_ind);
var A6aa = (1-red_ind_parse)*el_ind;
var A6b = (A6a) - (A6aa);
		  	
var B6a = (1-red_tr_parse)*(1-(el_tr_parse*(1-0.7/2.3)))*(somma_valori_tr);
var B6b = (el_tr_parse)*(B6a);

var C6a = (1-red_ser_parse)*(somma_valori_s);
var C6b = (1-red_ind_parse)*(el_s);

var e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
var D6a = ((1-red_house)*(somma_valori_house))-(e_h);
//----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di FOSSIL USER: industry -transport -services -households
var f_i_primaop = (A6a)-(A6b);
var f_i = (1-bio_fr_parse)*(A6b);
var f_t = (1-bio_fr_parse)*(B6a-B6b);
var f_s = (1-bio_fr_parse)*(C6a-C6b);
var f_h = (1-bio_fr_parse)*(D6a);
	  	  
var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);
console.log("f_i:"+f_i+"f_s:"+f_s+"f_t:"+f_t+"f_h:"+f_h+"FOSSIL TOTAL = : "+total_fossil_user);

var energy_fossil_val = (total_fossil_user)*(1-fossilf_parse);

var fossil_final_cf = (energy_fossil_val)*((RA_CF_Fossil)*0.25)/1000;
//console.log("FOSSIL CF INT = EnergyJ34 (ok)= "+fossil_final_cf);

//-----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di BIOFUEL USER:	  
var bio_i_primaop = (A6a)-(A6b);
var b_i = (bio_fr_parse)*(A6b);
var b_t = (bio_fr_parse)*(B6a-B6b);
var b_s = (bio_fr_parse)*(C6a-C6b);
var b_h = (bio_fr_parse)*(D6a);

var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
//console.log("b_i:"+b_i+"b_s:"+b_s+"b_t:"+b_t+"b_h:"+b_h+"BIO TOTAL = : "+total_bio_user);
var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
var bio_final_cf = (energy_bio_val)*((RA_CF_Biofuel*0.27))/1000;
//console.log("BIO CF INT = EnergyJ35 (ok) =  "+bio_final_cf);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(A6a);
var e_s = (1-((red_ind_parse)*(el_s)))*100;
e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));

//console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);
var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
	var elec1= (PER_B_Wind)*(RA_CF_Wind);
	//console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_B_Solar)*(RA_CF_Solar);
	var elec3 =(PER_B_Hydro)*(RA_CF_Hydro);
	var elec4 =(PER_B_Biofuel)*(RA_CF_Biofuel);
	var elec5 =(PER_B_Nuclear)*(RA_CF_Nuclear);
	var elec6 =(PER_B_Fossil)*(RA_CF_Fossil); 	
}
else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
	var elec1= (PER_C_Wind)*(RA_CF_Wind);
	//console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_C_Solar)*(RA_CF_Solar);
	var elec3 =(PER_C_Hydro)*(RA_CF_Hydro);
	var elec4 =(PER_C_Biofuel)*(RA_CF_Biofuel);
	var elec5 =(PER_C_Nuclear)*(RA_CF_Nuclear);
	var elec6 =(PER_C_Fossil)*(RA_CF_Fossil); 	
}
else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
	var elec1= (PER_D_Wind)*(RA_CF_Wind);
	//console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_D_Solar)*(RA_CF_Solar);
	var elec3 =(PER_D_Hydro)*(RA_CF_Hydro);
	var elec4 =(PER_D_Biofuel)*(RA_CF_Biofuel);
	var elec5 =(PER_D_Nuclear)*(RA_CF_Nuclear);
	var elec6 =(PER_D_Fossil)*(RA_CF_Fossil); 	
} else {
var elec1= (PER_A_Wind)*(RA_CF_Wind);
//console.log("SOMMA ELEC1: "+elec1);
var elec2 =(PER_A_Solar)*(RA_CF_Solar);
var elec3 =(PER_A_Hydro)*(RA_CF_Hydro);
var elec4 =(PER_A_Biofuel)*(RA_CF_Biofuel);
var elec5 =(PER_A_Nuclear)*(RA_CF_Nuclear);
var elec6 =(PER_A_Fossil)*(RA_CF_Fossil); 	
}
var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);

var electricity_sum = (elec1add)+(elec2add)+(elec3add);

var elec_final_cf = (energy_elec_val)*(electricity_sum)/1000;
//-----------------------------------------------------------------------------------------------
var datoCFen_internal = elec_final_cf+bio_final_cf+fossil_final_cf;
//-----------------------------------------------------------------------------------------------

var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(RC_D_CF_Fossil*0.25)/1000;
var bio_final_cf_ext= total_bio_user*(biofuels_parse)*(RC_D_CF_Biofuel*0.27)/1000;
var elec_final_cf_ext = (energy_elec_val)*(elec_parse)/1000;
//----------------------------------------------------------------------------------------------
var datoCFen_external = elec_final_cf_ext+bio_final_cf_ext+fossil_final_cf_ext;
//----------------------------------------------------------------------------------------------  	
var titoloCF = parseFloat((datoCFen_external+dataCF_food_ext)+(datoCFen_internal+dataCF_food_int)+3/100).toFixed(2);
document.getElementById("GT1").innerHTML = titoloCF;

//______calcolo valori per tabella dash______
var sommacfood = (dataCF_food_int+dataCF_food_ext);
var sommacfenergy = (datoCFen_external+datoCFen_internal);
var somma_energy_itsh = Number(total_fossil_user+total_bio_user+total_el_user);

var valfood1 = parseFloat(sommacfood/(intakeparse*(1+wastevirgola))).toFixed(3);
document.getElementById("valfood_1").innerHTML = valfood1;

var valen1 = parseFloat(sommacfenergy/somma_energy_itsh).toFixed(3);
document.getElementById("valenergy_1").innerHTML = valen1;

var valfood5 = parseFloat(((valfood1-initial_value_CF_food)/initial_value_CF_food)*100).toFixed(3);
document.getElementById("valfood_5").innerHTML = valfood5+"%";

var valen5 = parseFloat(((valen1-initial_value_CF_en)/initial_value_CF_en)*100).toFixed(3);
document.getElementById("valenergy_5").innerHTML = valen5+"%";

//----PERCENTUALE SOTTO AL TITOLO---
var grand_total = parseFloat(((sommacfood+sommacfenergy)-initial_value_cf_int)/initial_value_cf_int).toFixed(2)
document.getElementById("percent1").innerHTML = grand_total*100 + "% above initial value";


//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////	

	  	  
var datiaggbar = [dataCF_food_int, dataCF_food_ext];
var datiaggbar2 = [datoCFen_internal, datoCFen_external];
	
barChart.data.datasets[0].data = datiaggbar;
barChart.data.datasets[1].data = datiaggbar2;
barChart.update();

}

var myVarb1 = setInterval(aggiornabar, 3000);
  
  
  
  // Bar Chart-2
  // ------------------------------------------

  //Get the context of the Chart canvas element we want to select
  var barChartctx2 = $("#bar-chart-2");
  // Chart Options
  var barchartOptions2 = {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each bar to be 2px wide
  elements: {
      rectangle: {
        borderWidth: 2,
        borderSkipped: 'left'
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: { display: false },
    scales: {
      xAxes: [{
        display: true,
        stacked:true,
        gridLines: {
        color: grid_line_color,
      },
        scaleLabel: {
          display: true,
        }
      }],
      yAxes: [{
    	  stacked:true,
        display: true,
        gridLines: {
        color: grid_line_color,
      },
        scaleLabel: {
          display: true,
        },
        ticks: { 
          beginAtZero: true,
        },
        type: 'linear',
      }],
    },
    title: {
      display: true,
      text: 'LF (m2/cap/day)'
    },
  };
  // Chart Data
  var barchartData2 = {
    
		    labels: ["Internal", "External"],
		    datasets: [{
		      type: 'bar',
		      label: '"Food"',
		      data: [15, 3],
		      backgroundColor: 'yellow'
		      
		    }, {
		      type: 'bar',
		      label: '"Energy"',
		      backgroundColor: "green",
		      data: [0, 0],
		    }]
		  
      
  };
  var barChartconfig2 = {
    type: 'bar',

    // Chart Options
    options: barchartOptions2,
    data: barchartData2
  };
  
//Create the chart
  var barChart2 = new Chart(barChartctx2, barChartconfig2);  
function aggiornabar2() {
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
var fip = parseFloat(document.getElementById("E30").value)/100;
var fim = parseFloat(document.getElementById("E31").value)/100;
var fid = parseFloat(document.getElementById("E32").value)/100;
//----------------------------------------------------------------------------------
var Gap_Yeld_parse = parseFloat(document.getElementById("G14").value)/100;
var Mulching_parse = parseFloat(document.getElementById("G15").value)/100; 	
//	//console.log("MULCHING PARSE: "+Mulching_parse);
var Full_Deficit_parse = parseFloat(document.getElementById("G19").value)/100;
//----------------------------------------------------------------------------------
var days = parseFloat(document.getElementById("A8_f").value);
//------------------------------------------------------------------------------------
var windp = parseFloat(document.getElementById("em_J21").value);
var solarp = parseFloat(document.getElementById("em_J22").value);
var hydrop = parseFloat(document.getElementById("em_J23").value);
var biofuelp = parseFloat(document.getElementById("em_J24").value);
var nuclearp = parseFloat(document.getElementById("em_J25").value);
var fuelp = parseFloat(document.getElementById("em_J26").value);
//----------------------------------------------------------------------------------------------------------------
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
//calcolo i valori per PLANT BASED:
var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
//calcolo i valori per MEAT & FISH:
var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;	 
//calcolo i valori per DIARY & EGGS:
var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
//----------------------------------------------------------------------------------------------------------------
//calcolo WASTE:
var waste_val = (wasteparse*intakeparse)/100;
//CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
//OTTENGO LA PERCENTUALE BASE (% * calorie+waste)
var cal_waste = waste_val+intakeparse;
//----------------------------------------------------------------------------------------------------------------

var YeldLF = Gap_Yeld_parse*YG_closing_LF;
var Mulch = Mulching_parse*Mulching_LF;
console.log("YelfLF: "+YeldLF+" Mulch: "+Mulch+" Totale RelationsAK47: "+((YeldLF+Mulch)*Rainfed));
var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_LF;
// //console.log("WASTECAL+PERCENT ok: "+cal_waste);
// //console.log("PLANT SUM PERCENT: "+plant1);
// //console.log("MULCH: "+Mulch);
// //console.log("Deficit: "+Deficit);
//----------------------------------------------------------------------------------------------------------------
var meatbased = (meat1*cal_waste)/100;
var diarybased = (diary1*cal_waste)/100;
var plantbased = (plant1*cal_waste)/100;
//----------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF INTERNAL:
//PLANT:
var plantbasedA = plantbased*(1-fip);
var plantbasedB = ((YeldLF+Mulch)*Rainfed)+Deficit;
var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
var plantbasedC = RB_LF_Plant*(1-0);	
alert("HAI PREMUTO PLANT B: "+plantbasedC);
}
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
	var plantbasedC = RC_LF_Plant*(1-0);
	alert("HAI PREMUTO PLANT C: "+plantbasedC);
} 
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
	var plantbasedC = RD_LF_Plant*(1-0);	
	alert("HAI PREMUTO PLANT D: "+plantbasedC);
	
	} else { 
		var plantbasedC = RA_LF_Plant*(1-0);	
	//	alert("HAI PREMUTO PLANT WORLD: "+plantbasedC);
	}

var plant_lf = (plantbasedA*plantbasedC);

//------------------------------------------------------------------------------------------------------------------
//MEAT:	
var meatbasedA = meatbased*(1-fim); 
var meatbasedB = ((YeldLF+Mulch)*Rainfed)+Deficit;
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
	var meatbasedC = (RB_LF_Meat)*(1-0);
	alert("HAI PREMUTO MEAT B: "+meatbasedC);
} 
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) { 
	var meatbasedC = (RC_LF_Meat)*(1-0);
	alert("HAI PREMUTO MEAT C: "+meatbasedC);
}
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) { 
	var meatbasedC = (RD_LF_Meat)*(1-0);
	alert("HAI PREMUTO MEAT D: "+meatbasedC);
} else {
	var meatbasedC = (RA_LF_Meat)*(1-0);
//	alert("HAI PREMUTO MEAT WORLD: "+meatbasedC);
}
var meat_lf = (meatbasedA)*(meatbasedC);
//---------------------------------------------------------------------------------------------------------------------
//DIARY:
var diaryA = (diarybased)*(1-fid); 
var diaryB = ((YeldLF+Mulch)*Rainfed)+Deficit;
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) 
{ 
	var diaryC = (RB_LF_Diary)*(1-0);
	alert("HAI PREMUTO DIARY B: "+diaryC);
	}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) 
{ 
	var diaryC = (RC_LF_Diary)*(1-0);
	alert("HAI PREMUTO DIARY C: "+diaryC);
	}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) { 
	var diaryC = (RD_LF_Diary)*(1-0);
	alert("HAI PREMUTO DIARY D: "+diaryC);
	}
else {
	var diaryC = (RA_LF_Diary)*(1-0);
//	alert("HAI PREMUTO DIARY WORLD: "+diaryC);
	}


var diary_lf = (diaryA)*(diaryC);	 
////console.log("DIARY 1(PERCENTUALONE): "+diary1);
console.log("DIARY LF TOTAL = Food.J20: "+diary_lf);
//---------------------------------------------------------------------------------------------------------------------
var dataLF_food_int = (plant_lf+meat_lf+diary_lf);
console.log("VALORE FOOD INT LF TOTAL = Food.J21: "+dataLF_food_int);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF EXTERNAL:

var plantres_lf_e = (plantbased)*(fip);
var plantres_lf_ext = (plantres_lf_e)*(WORLD_plant_lf_FoodX11);
console.log("PLANT EXT = Food.N18: "+plantres_lf_ext);	
var meatres_lf_e = (meatbased*fim);
var meatres_lf_ext = (meatres_lf_e)*(WORLD_meat_lf_FoodX12);
console.log("MEAT EXT = Food.N19: "+meatres_lf_ext);	
var diaryres_lf_e = (diarybased*fid);
var diaryres_lf_ext = (diaryres_lf_e)*(WORLD_diary_lf_FoodX13);
console.log("DIARY EXT = Food.N20: "+diaryres_lf_ext);	
	  
var dataLF_food_ext = (plantres_lf_ext+meatres_lf_ext+diaryres_lf_ext);
console.log("VALORE FOOD EXT LF TOTAL = Food.N21 : "+dataLF_food_ext);
//console.log("==============FINE FOOD LF=======================");


//----------------------------------------------------------------------------------------------------------------------

//console.log("==========INIZIO ENERGY LF============");	  
//////////////////// CALCOLO ENERGY ///////////////////////////////
var red_ind_parse = parseFloat(document.getElementById("e_N5").value)/100;
var red_tr_parse = parseFloat(document.getElementById("e_N6").value)/100;
var red_ser_parse =parseFloat(document.getElementById("e_N7").value)/100;
var red_house = parseFloat(document.getElementById("e_N8").value)/100;
var el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
var fuel_house_parse = parseFloat(document.getElementById("e_N12").value)/100;  
var bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
var fossilf_parse = parseFloat(document.getElementById("L30").value)/100;
var biofuels_parse = parseFloat(document.getElementById("L31").value)/100;
var elec_parse = parseFloat(document.getElementById("L32").value)/100;
//---------------------------------------------------------------------------------------------------
//CONSUMPTION REGION A - VALORI FISSI
var fossil_ind = 37.3;
var bio_ind = 5.8;
var el_ind = 16.4;
	  	  
var fossil_tr = 71.6;
var bio_tr = 2.7;
var el_tr = 1.1;
	  	  
var fossil_s = 13.8;
var bio_s = 2.5;
var el_s = 16.8;
	  	  
var fossil_house = 27.8;
var bio_house = 6.4;
var el_house = 14.8;
//----------------------------------------------------------------------------------------------------
var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
var somma_valori_s = (fossil_s+bio_s+el_s);
var somma_valori_house = (fossil_house+bio_house+el_house);
//----------------------------------------------------------------------------------------------------
var A6a = (1-red_ind_parse)*(somma_valori_ind); 
var A6aa = (1-red_ind_parse)*el_ind;
var A6b = (A6a) - (A6aa);
		  	
var B6a = (1-red_tr_parse)*(1-(el_tr_parse*(1-0.7/2.3)))*(somma_valori_tr);
var B6b = (el_tr_parse)*(B6a);

var C6a = (1-red_ser_parse)*(somma_valori_s);
var C6b = (1-red_ind_parse)*(el_s);
		  	
var e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
var D6a = ((1-red_house)*(somma_valori_house))-(e_h);
//----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di FOSSIL USER: industry -transport -services -households
var f_i_primaop = (A6a)-(A6b);
var f_i = (1-bio_fr_parse)*(A6b);
var f_t = (1-bio_fr_parse)*(B6a-B6b);
var f_s = (1-bio_fr_parse)*(C6a-C6b);
var f_h = (1-bio_fr_parse)*(D6a);
	  	  
var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);

var energy_fossil_val = (total_fossil_user)*(1-fossilf_parse);
var fossil_final_lf = (energy_fossil_val)*((RA_LF_Fossil)*0.25)/1000;
console.log("FOSSIL LF INT = EnergyI34 (ok)= "+fossil_final_lf);

//-----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di BIOFUEL USER:	  
var bio_i_primaop = (A6a)-(A6b);
var b_i = (bio_fr_parse)*(A6b);
var b_t = (bio_fr_parse)*(B6a-B6b);
var b_s = (bio_fr_parse)*(C6a-C6b);
var b_h = (bio_fr_parse)*(D6a);

var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
var bio_final_lf = (energy_bio_val)*((RA_LF_Biofuel*0.27))/1000;
console.log("BIO LF INT = EnergyI35 (ok) =  "+bio_final_lf);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(A6a);
var e_s = (1-((red_ind_parse)*(el_s)))*100;
e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));

//console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);
var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
	var elec1= (PER_B_Wind)*(RB_LF_Wind);
	//console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_B_Solar)*(RB_LF_Solar);
	var elec3 =(PER_B_Hydro)*(RB_LF_Hydro);
	var elec4 =(PER_B_Biofuel)*(RB_LF_Biofuel);
	var elec5 =(PER_B_Nuclear)*(RB_LF_Nuclear);
	var elec6 =(PER_B_Fossil)*(RB_LF_Fossil); 	
}   
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
	var elec1= (PER_B_Wind)*(RC_D_LF_Wind);
	//console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_C_Solar)*(RC_D_LF_Solar);
	var elec3 =(PER_C_Hydro)*(RC_D_LF_Hydro);
	var elec4 =(PER_C_Biofuel)*(RC_D_LF_Biofuel);
	var elec5 =(PER_C_Nuclear)*(RC_D_LF_Nuclear);
	var elec6 =(PER_C_Fossil)*(RC_D_LF_Fossil); 	
}   
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
	var elec1= (PER_B_Wind)*(RC_D_LF_Wind);
	//console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_D_Solar)*(RC_D_LF_Solar);
	var elec3 =(PER_D_Hydro)*(RC_D_LF_Hydro);
	var elec4 =(PER_D_Biofuel)*(RC_D_LF_Biofuel);
	var elec5 =(PER_D_Nuclear)*(RC_D_LF_Nuclear);
	var elec6 =(PER_D_Fossil)*(RC_D_LF_Fossil); 	
	}   
else {

var elec1= (PER_A_Wind)*(RA_LF_Wind);
//console.log("SOMMA ELEC1: "+elec1);
var elec2 =(PER_A_Solar)*(RA_LF_Solar);
var elec3 =(PER_A_Hydro)*(RA_LF_Hydro);
var elec4 =(PER_A_Biofuel)*(RA_LF_Biofuel);
var elec5 =(PER_A_Nuclear)*(RA_LF_Nuclear);
var elec6 =(PER_A_Fossil)*(RA_LF_Fossil); 	
}

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);

var electricity_sum = (elec1add)+(elec2add)+(elec3add);

var elec_final_lf = (energy_elec_val)*(electricity_sum)/1000;
console.log("ELECTRICITY LF INT = Energy.I36 (ok) = : "+elec_final_lf);
//-----------------------------------------------------------------------------------------------
var datoLFen_internal = elec_final_lf+bio_final_lf+fossil_final_lf;
console.log("TOT LF ENERGY INTERNAL = Energy.I37 (ok): "+datoLFen_internal);
//-----------------------------------------------------------------------------------------------
var checkRadioFossil= document.querySelector('input[name="checkbuttonsfossil"]:checked');
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) { 
	var fossil_final_lf = (energy_fossil_val)*((RB_LF_Fossil)*0.25)/1000;
	alert("HAI PREMUTO FOSSIL B: "+fossil_final_lf);
}
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) { 
	var fossil_final_lf = (energy_fossil_val)*((RC_D_LF_Fossil)*0.25)/1000;
	alert("HAI PREMUTO FOSSIL C: "+fossil_final_lf);
}
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) { 
	var fossil_final_lf = (energy_fossil_val)*((RC_D_LF_Fossil)*0.25)/1000;
	alert("HAI PREMUTO FOSSIL D: "+fossil_final_lf);
}
else {
	var fossil_final_lf = (energy_fossil_val)*((RA_LF_Fossil)*0.25)/1000;
	//alert("HAI PREMUTO FOSSIL WORLD: "+fossil_final_lf);

}

var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
	var bio_final_lf = (energy_bio_val)*((RB_LF_Biofuel*0.27))/1000;
	alert("HAI PREMUTO BIO B: "+bio_final_lf);
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) {
	var bio_final_lf = (energy_bio_val)*((RC_D_LF_Biofuel*0.27))/1000;
	alert("HAI PREMUTO BIO C: "+bio_final_lf);
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) {
	var bio_final_lf = (energy_bio_val)*((RC_D_LF_Biofuel*0.27))/1000;
	alert("HAI PREMUTO BIO D: "+bio_final_lf);
}
else {
	var bio_final_lf = (energy_bio_val)*((RA_LF_Biofuel*0.27))/1000;
	//alert("HAI PREMUTO BIO WORLD: "+bio_final_lf);

}


var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(RC_D_LF_Fossil*0.25)/1000;	
var bio_final_lf_ext= total_bio_user*(biofuels_parse)*(RC_D_LF_Biofuel*0.27)/1000;
var elec_final_lf_ext = (energy_elec_val)*(elec_parse)/1000;
//----------------------------------------------------------------------------------------------
var datoLFen_external = elec_final_lf_ext+bio_final_lf_ext+fossil_final_lf_ext;
var titoloLF = parseFloat((datoLFen_external+dataLF_food_ext)+(datoLFen_internal+dataLF_food_int)+0.7/100).toFixed(2);

//______calcolo valori per tabella dash______
var sommalfood = (dataLF_food_int+dataLF_food_ext);
var sommalfenergy = (datoLFen_external+datoLFen_internal);
var somma_energy_itsh = Number(total_fossil_user+total_bio_user+total_el_user);

var valfood2 = parseFloat(sommalfood/(intakeparse*(1+wastevirgola))).toFixed(3);
document.getElementById("valfood_2").innerHTML = valfood2;

var valen2 = parseFloat(sommalfenergy/somma_energy_itsh).toFixed(3);
document.getElementById("valenergy_2").innerHTML = valen2;

var valfood6 = parseFloat(((valfood2-initial_value_LF_food)/initial_value_LF_food)*100).toFixed(3);
document.getElementById("valfood_6").innerHTML = valfood6+"%";

var valen6 = parseFloat(((valen2-initial_value_LF_en)/initial_value_LF_en)*100).toFixed(3);
document.getElementById("valenergy_6").innerHTML = valen6+"%";
//___________________________________________
//----PERCENTUALE SOTTO AL TITOLO---
var grand_total = parseFloat(((sommalfood+sommalfenergy)-initial_value_lf_int)/initial_value_lf_int).toFixed(2)
document.getElementById("percent2").innerHTML = grand_total*100 + "% above initial value";

//----------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

var datiaggbar = [dataLF_food_int, dataLF_food_ext];
var datiaggbar2 = [datoLFen_internal, datoLFen_external];
		
barChart2.data.datasets[0].data = datiaggbar;
barChart2.data.datasets[1].data = datiaggbar2;
barChart2.update();


}
 
var myVarb2 = setInterval(aggiornabar2, 3000);

  
  
//Bar Chart-3
  // ------------------------------------------

  //Get the context of the Chart canvas element we want to select
  var barChartctx3 = $("#bar-chart-3");
  // Chart Options
  var barchartOptions3 = {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each bar to be 2px wide
  elements: {
      rectangle: {
        borderWidth: 2,
        borderSkipped: 'left'
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: { display: false },
    scales: {
      xAxes: [{
        display: true,
        stacked:true,
        gridLines: {
        color: grid_line_color,
      },
        scaleLabel: {
          display: true,
        }
      }],
      yAxes: [{
    	  stacked:true,
        display: true,
        gridLines: {
        color: grid_line_color,
      },
        scaleLabel: {
          display: true,
        },
        ticks: { 
          beginAtZero: true,
        },
        type: 'linear',
      }],
    },
    title: {
      display: true,
      text: 'WF (green) (l/cap/day)'
    },
   
  };
  // Chart Data
  var barchartData3 = {
    
		    labels: ["Internal", "External"],
		    datasets: [{
		      type: 'bar',
		      label: '"Food"',
		      data: [4266, 2],
		      backgroundColor: 'yellow'
		      
		    }, {
		      type: 'bar',
		      label: '"Energy"',
		      backgroundColor: "green",
		      data: [447, 0],
		    }]		  
      
  };
  var barChartconfig3 = {
    type: 'bar',

    // Chart Options
    options: barchartOptions3,
    data: barchartData3
  };
//Create the chart
  var barChart3 = new Chart(barChartctx3, barChartconfig3);
  
function aggiornabar3() {
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
var fip = parseFloat(document.getElementById("E30").value)/100;
var fim = parseFloat(document.getElementById("E31").value)/100;
var fid = parseFloat(document.getElementById("E32").value)/100;
//----------------------------------------------------------------------------------
var Gap_Yeld_parse = parseFloat(document.getElementById("G14").value)/100;
var Mulching_parse = parseFloat(document.getElementById("G15").value)/100; 	
//	//console.log("MULCHING PARSE: "+Mulching_parse);
var Full_Deficit_parse = parseFloat(document.getElementById("G19").value)/100;
//----------------------------------------------------------------------------------
var days = parseFloat(document.getElementById("A8_f").value);
//------------------------------------------------------------------------------------
var windp = parseFloat(document.getElementById("em_J21").value);
var solarp = parseFloat(document.getElementById("em_J22").value);
var hydrop = parseFloat(document.getElementById("em_J23").value);
var biofuelp = parseFloat(document.getElementById("em_J24").value);
var nuclearp = parseFloat(document.getElementById("em_J25").value);
var fuelp = parseFloat(document.getElementById("em_J26").value);
//----------------------------------------------------------------------------------------------------------------
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
//calcolo i valori per PLANT BASED:
var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
//calcolo i valori per MEAT & FISH:
var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;	 
//calcolo i valori per DIARY & EGGS:
var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
//----------------------------------------------------------------------------------------------------------------
//calcolo WASTE:
var waste_val = (wasteparse*intakeparse)/100;
//CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
//OTTENGO LA PERCENTUALE BASE (% * calorie+waste)
var cal_waste = waste_val+intakeparse;
//----------------------------------------------------------------------------------------------------------------
var YeldWFg = Gap_Yeld_parse*YG_closing_WFg;
var Mulch = Mulching_parse*Mulching_WFg;
var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_WFg;
// //console.log("WASTECAL+PERCENT ok: "+cal_waste);
// //console.log("PLANT SUM PERCENT: "+plant1);
// //console.log("MULCH: "+Mulch);
// //console.log("Deficit: "+Deficit);
//----------------------------------------------------------------------------------------------------------------
var meatbased = (meat1*cal_waste)/100;
var diarybased = (diary1*cal_waste)/100;
var plantbased = (plant1*cal_waste)/100;
//----------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF INTERNAL:
//PLANT:
var plantbasedA = plantbased*(1-fip);
var plantbasedB = ((YeldWFg+Mulch)*Rainfed)+Deficit;

//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 

if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
var plantbasedC = RB_WFgreen_Plant*(1-0);
} 
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
    var plantbasedC = RC_WFgreen_Plant*(1-0);
}
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
	var plantbasedC = RD_WFgreen_Plant*(1-0);
}    else {
	var plantbasedC = RA_WFgreen_Plant*(1-plantbasedB);	
	
}	

var plant_WFgreen = (plantbasedA*plantbasedC);
//------------------------------------------------------------------------------------------------------------------
//MEAT:	
var meatbasedA = meatbased*(1-fim); 
var meatbasedB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc.
var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
	var meatbasedC = (RB_WFgreen_Meat)*(1-0);}

else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) {
	var meatbasedC = (RC_WFgreen_Plant)*(1-0);
}
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) {
	var meatbasedC = (RD_WFgreen_Plant)*(1-0);
	}
else {
	var meatbasedC = (RA_WFgreen_Meat)*(1-meatbasedB);
}

var meat_WFgreen = (meatbasedA)*(meatbasedC);
 console.log("MEAT WFgreen TOT MATH parse = Food.H19: "+meat_WFgreen);
//---------------------------------------------------------------------------------------------------------------------
//DIARY:
var diaryA = (diarybased)*(1-fid); 
var diaryB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) {
	var diaryC = (RB_WFgreen_Diary)*(1-0);
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) {
	var diaryC = (RD_WFgreen_Diary)*(1-0);
}
	else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) {
		var diaryC = (RB_WFgreen_Diary)*(1-0);
	}
 
 	else {
 		var diaryC = (RA_WFgreen_Diary)*(1-diaryB);
 	}

var diary_WFgreen = (diaryA)*(diaryC);	 
console.log("DIARY WFgreen TOTAL = Food.H20: "+diary_WFgreen);
//---------------------------------------------------------------------------------------------------------------------
var dataWFgreen_food_int = (plant_WFgreen+meat_WFgreen+diary_WFgreen);
console.log("VALORE FOOD INT WFgreen TOTAL = Food.H21: "+dataWFgreen_food_int);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD WFgreen EXTERNAL:
var plantres_WFgreen_e = (plantbased)*(fip);
var plantres_WFgreen_ext = (plantres_WFgreen_e)*(WORLD_plant_WFgreen_FoodV11);
console.log("PLANT EXT = Food.L18: "+plantres_WFgreen_ext);	
var meatres_WFgreen_e = (meatbased*fim);
var meatres_WFgreen_ext = (meatres_WFgreen_e)*(WORLD_meat_WFgreen_FoodV12);
console.log("MEAT EXT = Food.L19: "+meatres_WFgreen_ext);	
var diaryres_WFgreen_e = (diarybased*fid);
var diaryres_WFgreen_ext = (diaryres_WFgreen_e)*(WORLD_diary_WFgreen_FoodV13);
console.log("DIARY EXT = Food.L20: "+diaryres_WFgreen_ext);	
	  
var dataWFgreen_food_ext = (plantres_WFgreen_ext+meatres_WFgreen_ext+diaryres_WFgreen_ext);
console.log("VALORE FOOD EXT WFgreen TOTAL = Food.L21 : "+dataWFgreen_food_ext);
//console.log("==============FINE FOOD WFgreen=======================");


//----------------------------------------------------------------------------------------------------------------------

//console.log("==========INIZIO ENERGY WFgreen============");	  
//////////////////// CALCOLO ENERGY ///////////////////////////////
var red_ind_parse = parseFloat(document.getElementById("e_N5").value)/100;
var red_tr_parse = parseFloat(document.getElementById("e_N6").value)/100;
var red_ser_parse =parseFloat(document.getElementById("e_N7").value)/100;
var red_house = parseFloat(document.getElementById("e_N8").value)/100;
var el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
var fuel_house_parse = parseFloat(document.getElementById("e_N12").value)/100;  
var bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
var fossilf_parse = parseFloat(document.getElementById("L30").value)/100;
var biofuels_parse = parseFloat(document.getElementById("L31").value)/100;
var elec_parse = parseFloat(document.getElementById("L32").value)/100;
//---------------------------------------------------------------------------------------------------
//CONSUMPTION REGION A - VALORI FISSI
var fossil_ind = 37.3;
var bio_ind = 5.8;
var el_ind = 16.4;
	  	  
var fossil_tr = 71.6;
var bio_tr = 2.7;
var el_tr = 1.1;
	  	  
var fossil_s = 13.8;
var bio_s = 2.5;
var el_s = 16.8;
	  	  
var fossil_house = 27.8;
var bio_house = 6.4;
var el_house = 14.8;
//----------------------------------------------------------------------------------------------------
var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
var somma_valori_s = (fossil_s+bio_s+el_s);
var somma_valori_house = (fossil_house+bio_house+el_house);
//----------------------------------------------------------------------------------------------------
var A6a = (1-red_ind_parse)*(somma_valori_ind); 
var A6aa = (1-red_ind_parse)*el_ind;
var A6b = (A6a) - (A6aa);
		  	
var B6a = (1-red_tr_parse)*(1-(el_tr_parse*(1-0.7/2.3)))*(somma_valori_tr);
var B6b = (el_tr_parse)*(B6a);

var C6a = (1-red_ser_parse)*(somma_valori_s);
var C6b = (1-red_ind_parse)*(el_s);
		  	
var e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
var D6a = ((1-red_house)*(somma_valori_house))-(e_h);
//----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di FOSSIL USER: industry -transport -services -households
var f_i_primaop = (A6a)-(A6b);
var f_i = (1-bio_fr_parse)*(A6b);
var f_t = (1-bio_fr_parse)*(B6a-B6b);
var f_s = (1-bio_fr_parse)*(C6a-C6b);
var f_h = (1-bio_fr_parse)*(D6a);
	  	  
var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);

var energy_fossil_val = (total_fossil_user)*(1-fossilf_parse);
var fossil_final_WFgreen = (energy_fossil_val)*((RA_WFgreen_Fossil)*0.25)/1000;
console.log("FOSSIL WFgreen INT = EnergyG34 (ok)= "+fossil_final_WFgreen);

//-----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di BIOFUEL USER:	  
var bio_i_primaop = (A6a)-(A6b);
var b_i = (bio_fr_parse)*(A6b);
var b_t = (bio_fr_parse)*(B6a-B6b);
var b_s = (bio_fr_parse)*(C6a-C6b);
var b_h = (bio_fr_parse)*(D6a);

var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
var bio_final_WFgreen = (energy_bio_val)*((RA_WFgreen_Biofuel*0.27))/1000;
console.log("BIO WFgreen INT = EnergyG35 (ok) =  "+bio_final_WFgreen);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(A6a);
var e_s = (1-((red_ind_parse)*(el_s)))*100;
e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));


var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
	var elec1= (PER_B_Wind)*(RB_WFgreen_Wind);
	var elec2 =(PER_B_Solar)*(RB_WFgreen_Solar);
	var elec3 =(PER_B_Hydro)*(RB_WFgreen_Hydro);
	var elec4 =(PER_B_Biofuel)*(RB_WFgreen_Biofuel);
	var elec5 =(PER_B_Nuclear)*(RB_WFgreen_Nuclear);
	var elec6 =(PER_B_Fossil)*(RB_WFgreen_Fossil); 	
}   
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
	var elec1= (PER_C_Wind)*(RC_D_WFgreen_Wind);
	var elec2 =(PER_C_Solar)*(RC_D_WFgreen_Solar);
	var elec3 =(PER_C_Hydro)*(RC_D_WFgreen_Hydro);
	var elec4 =(PER_C_Biofuel)*(RC_D_WFgreen_Biofuel);
	var elec5 =(PER_C_Nuclear)*(RC_D_WFgreen_Nuclear);
	var elec6 =(PER__Fossil)*(RC_D_WFgreen_Fossil); 	
}  
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
	var elec1= (PER_B_Wind)*(RC_D_WFgreen_Wind);
	var elec2 =(PER_D_Solar)*(RC_D_WFgreen_Solar);
	var elec3 =(PER_D_Hydro)*(RC_D_WFgreen_Hydro);
	var elec4 =(PER_D_Biofuel)*(RC_D_WFgreen_Biofuel);
	var elec5 =(PER_D_Nuclear)*(RC_D_WFgreen_Nuclear);
	var elec6 =(PER_D_Fossil)*(RC_D_WFgreen_Fossil); 	
	}  
else {
var elec1= (PER_A_Wind)*(RA_WFgreen_Wind);
var elec2 =(PER_A_Solar)*(RA_WFgreen_Solar);
var elec3 =(PER_A_Hydro)*(RA_WFgreen_Hydro);
var elec4 =(PER_A_Biofuel)*(RA_WFgreen_Biofuel);
var elec5 =(PER_A_Nuclear)*(RA_WFgreen_Nuclear);
var elec6 =(PER_A_Fossil)*(RA_WFgreen_Fossil); 
}

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);

var electricity_sum = (elec1add)+(elec2add)+(elec3add);

var elec_final_WFgreen = (energy_elec_val)*(electricity_sum)/1000;
//-----------------------------------------------------------------------------------------------
var datoWFgreen_en_internal = elec_final_WFgreen+bio_final_WFgreen+fossil_final_WFgreen;
//-----------------------------------------------------------------------------------------------

var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) { 
	var fossil_final_lf = (energy_fossil_val)*((RB_WFgreen_Fossil)*0.25)/1000;
}
else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) { 
	var fossil_final_lf = (energy_fossil_val)*((RC_D_WFgreen_Fossil)*0.25)/1000;
}
else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) { 
	var fossil_final_lf = (energy_fossil_val)*((RC_D_WFgreen_Fossil)*0.25)/1000;
}
else {
	var fossil_final_lf = (energy_fossil_val)*((RA_WFgreen_Fossil)*0.25)/1000;

}

var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
	var bio_final_lf = (energy_bio_val)*((RB_WFgreen_Biofuel*0.27))/1000;
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) {
	var bio_final_lf = (energy_bio_val)*((RC_D_WFgreen_Biofuel*0.27))/1000;
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) {
	var bio_final_lf = (energy_bio_val)*((RC_D_WFgreen_Biofuel*0.27))/1000;
}
else {
	var bio_final_lf = (energy_bio_val)*((RA_WFgreen_Biofuel*0.27))/1000;

}


var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(RC_D_WFgreen_Fossil*0.25)/1000;
var bio_final_WFgreen_ext= total_bio_user*(biofuels_parse)*(RC_D_WFgreen_Biofuel*0.27)/1000;

var elec_final_WFgreen_ext = (energy_elec_val)*(elec_parse)/1000;
console.log("ELECTRICITY EXT WFgreen = Energy.K36 (ok): "+elec_final_WFgreen_ext);
//----------------------------------------------------------------------------------------------
var datoWFgreen_en_external = elec_final_WFgreen_ext+bio_final_WFgreen_ext+fossil_final_WFgreen_ext;
console.log("ENERGY EXTERNAL = Energy.K37 (ok)"+datoWFgreen_en_external);
//----------------------------------------------------------------------------------------------  	
var titoloWFgreen = Math.round((datoWFgreen_en_external+dataWFgreen_food_ext)+(datoWFgreen_en_internal+dataWFgreen_food_int));//+48

document.getElementById("GT3").innerHTML = titoloWFgreen;

console.log("----------------------------------------------------------------------------------");
//______calcolo valori per tabella dash______
var sommawfgood = (dataWFgreen_food_int+dataWFgreen_food_ext);
var sommawfgenergy = (datoWFgreen_en_internal+datoWFgreen_en_external);
var somma_energy_itsh = Number(total_fossil_user+total_bio_user+total_el_user);

var valfood3 = parseFloat(sommawfgood/(intakeparse*(1+wastevirgola))).toFixed(3);
document.getElementById("valfood_3").innerHTML = valfood3;

var valen3 = parseFloat(sommawfgenergy/somma_energy_itsh).toFixed(3);
document.getElementById("valenergy_3").innerHTML = valen3;

var valfood7 = parseFloat(((valfood3-initial_value_wfg_food)/initial_value_wfg_food)*100).toFixed(3);
document.getElementById("valfood_7").innerHTML = valfood7+"%";

var valen7 = parseFloat(((valen3-initial_value_wfg_en)/initial_value_wfg_en)*100).toFixed(3);
document.getElementById("valenergy_7").innerHTML = valen7+"%";

console.log("VAL FOOD WFG VAL1"+valfood3);
console.log("SOMMA FOOD WFG:"+sommawfgood);

console.log("VAL FOOD WFG INITIAL"+initial_value_CF_food);

console.log("WASTEVIRGOLA"+wastevirgola);

//PERCENTUALE SOTTO TITOLO
var grand_total = parseFloat(((sommawfgood+sommawfgenergy)-initial_value_wfg_int)/initial_value_wfg_int).toFixed(2)
document.getElementById("percent3").innerHTML = grand_total*100 + "% above the initial value";


//___________________________________________
	  
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////	


var datiaggbar = [dataWFgreen_food_int, dataWFgreen_food_ext];
var datiaggbar2 = [datoWFgreen_en_internal, datoWFgreen_en_external];
		
barChart3.data.datasets[0].data = datiaggbar;
barChart3.data.datasets[1].data = datiaggbar2;
barChart3.update();

}
 
var myVarb3 = setInterval(aggiornabar3, 3000);

  
//Bar Chart-4
  // ------------------------------------------

  //Get the context of the Chart canvas element we want to select
  var barChartctx4 = $("#bar-chart-4");
  // Chart Options
  var barchartOptions4 = {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each bar to be 2px wide
  elements: {
      rectangle: {
        borderWidth: 2,
        borderSkipped: 'left'
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: { display: false },
    scales: {
      xAxes: [{
        display: true,
        stacked:true,
        gridLines: {
        color: grid_line_color,
      },
        scaleLabel: {
          display: true,
        }
      }],
      yAxes: [{
    	  stacked:true,
        display: true,
        gridLines: {
        color: grid_line_color,
      },
        scaleLabel: {
          display: true,
        },
        ticks: { 
          beginAtZero: true,
        },
        type: 'linear',
      }],
    },
    title: {
      display: true,
      text: 'WF (blue) (l/cap/day)'
    },
  };
  // Chart Data
  var barchartData4 = {
    
		    labels: ["Internal", "External"],
		    datasets: [{
		      type: 'bar',
		      label: '"Food"',
		      data: [609, 170],
		      backgroundColor: 'yellow'
		      
		    }, {
		      type: 'bar',
		      label: '"Energy"',
		      backgroundColor: "green",
		      data: [30, 8],
		    }]
		  
      
  };
  var barChartconfig4 = {
    type: 'bar',

    // Chart Options
    options: barchartOptions4,
    data: barchartData4
  };
  
//Create the chart
  var barChart4 = new Chart(barChartctx4, barChartconfig4);
  
function aggiornabar4() {	  
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
var fip = parseFloat(document.getElementById("E30").value)/100;
var fim = parseFloat(document.getElementById("E31").value)/100;
var fid = parseFloat(document.getElementById("E32").value)/100;
//----------------------------------------------------------------------------------
var Gap_Yeld_parse = parseFloat(document.getElementById("G14").value)/100;
var Mulching_parse = parseFloat(document.getElementById("G15").value)/100; 	
//	//console.log("MULCHING PARSE: "+Mulching_parse);
var Full_Deficit_parse = parseFloat(document.getElementById("G19").value)/100;
//----------------------------------------------------------------------------------
var days = parseFloat(document.getElementById("A8_f").value);
//------------------------------------------------------------------------------------
var windp = parseFloat(document.getElementById("em_J21").value);
var solarp = parseFloat(document.getElementById("em_J22").value);
var hydrop = parseFloat(document.getElementById("em_J23").value);
var biofuelp = parseFloat(document.getElementById("em_J24").value);
var nuclearp = parseFloat(document.getElementById("em_J25").value);
var fuelp = parseFloat(document.getElementById("em_J26").value);
//----------------------------------------------------------------------------------------------------------------
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
//calcolo i valori per PLANT BASED:
var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
//calcolo i valori per MEAT & FISH:
var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;	 
//calcolo i valori per DIARY & EGGS:
var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
//----------------------------------------------------------------------------------------------------------------
//calcolo WASTE:
var waste_val = (wasteparse*intakeparse)/100;
//CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
//OTTENGO LA PERCENTUALE BASE (% * calorie+waste)
var cal_waste = waste_val+intakeparse;
//----------------------------------------------------------------------------------------------------------------

var YeldWFb = Gap_Yeld_parse*YG_closing_WFb;
var Mulch = Mulching_parse*Mulching_WFb;
var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_WFb;
// //console.log("WASTECAL+PERCENT ok: "+cal_waste);
// //console.log("PLANT SUM PERCENT: "+plant1);
// //console.log("MULCH: "+Mulch);
// //console.log("Deficit: "+Deficit);
//----------------------------------------------------------------------------------------------------------------
var meatbased = (meat1*cal_waste)/100;
var diarybased = (diary1*cal_waste)/100;
var plantbased = (plant1*cal_waste)/100;
//----------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF INTERNAL:
//PLANT:
var plantbasedA = plantbased*(1-fip);
var plantbasedB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
var checkRadio = document.querySelector('input[name="checkbuttons"]:checked'); 
var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked');
if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
	var plantbasedC = RB_WFblue_Plant*(1-plantbasedB);
	  
} 
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
    var plantbasedC = RC_WFblue_Plant*(1-plantbasedB);
     
}
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
	var plantbasedC = RD_WFblue_Plant*(1-plantbasedB);
}  
else {
	var plantbasedC = RA_WFblue_Plant*(1-plantbasedB);		
}

var plant_WFblue = (plantbasedA*plantbasedC);

//------------------------------------------------------------------------------------------------------------------
//MEAT:	
var meatbasedA = meatbased*(1-fim); 
var meatbasedB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
	var meatbasedC = (RB_WFblue_Meat)*(1-meatbasedB);
	  
}
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) {
	var meatbasedC = (RC_WFblue_Plant)*(1-meatbasedB);
	  
}
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) {
	var meatbasedC = (RD_WFblue_Plant)*(1-meatbasedB);
	}
else {
	var meatbasedC = (RA_WFblue_Meat)*(1-meatbasedB);	
}

var meat_WFblue = (meatbasedA)*(meatbasedC);
//---------------------------------------------------------------------------------------------------------------------
//DIARY:
var diaryA = (diarybased)*(1-fid); 
var diaryB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) {
	var diaryC = (RB_WFblue_Diary)*(1-(diaryB));
	  
}
	else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) {
		var diaryC = (RC_WFblue_Diary)*(1-(diaryB));
		  
	}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) {
	var diaryC = (RD_WFblue_Diary)*(1-(diaryB));
}
else {var diaryC = (RA_WFblue_Diary)*(1-diaryB);}

var diary_WFblue = (diaryA)*(diaryC);	 

//---------------------------------------------------------------------------------------------------------------------
var dataWFblue_food_int = (plant_WFblue+meat_WFblue+diary_WFblue);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD WFblue EXTERNAL:
var plantres_WFblue_e = (plantbased)*(fip);
var plantres_WFblue_ext = (plantres_WFblue_e)*(WORLD_plant_WFblue_FoodW11);
console.log("PLANT EXT = Food.M18: "+plantres_WFblue_ext);	
var meatres_WFblue_e = (meatbased*fim);
var meatres_WFblue_ext = (meatres_WFblue_e)*(WORLD_meat_WFblue_FoodW12);
console.log("MEAT EXT = Food.M19: "+meatres_WFblue_ext);	
var diaryres_WFblue_e = (diarybased*fid);
var diaryres_WFblue_ext = (diaryres_WFblue_e)*(WORLD_diary_WFblue_FoodW13);
console.log("DIARY EXT = Food.M20: "+diaryres_WFblue_ext);	
	  
var dataWFblue_food_ext = (plantres_WFblue_ext+meatres_WFblue_ext+diaryres_WFblue_ext);
console.log("VALORE FOOD EXT WFblue TOTAL = Food.M21 : "+dataWFblue_food_ext);
//console.log("==============FINE FOOD WFblue=======================");


//----------------------------------------------------------------------------------------------------------------------

//console.log("==========INIZIO ENERGY WFblue============");	  
//////////////////// CALCOLO ENERGY ///////////////////////////////
var red_ind_parse = parseFloat(document.getElementById("e_N5").value)/100;
var red_tr_parse = parseFloat(document.getElementById("e_N6").value)/100;
var red_ser_parse =parseFloat(document.getElementById("e_N7").value)/100;
var red_house = parseFloat(document.getElementById("e_N8").value)/100;
var el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
var fuel_house_parse = parseFloat(document.getElementById("e_N12").value)/100;  
var bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
var fossilf_parse = parseFloat(document.getElementById("L30").value)/100;
var biofuels_parse = parseFloat(document.getElementById("L31").value)/100;
var elec_parse = parseFloat(document.getElementById("L32").value)/100;
//---------------------------------------------------------------------------------------------------
//CONSUMPTION REGION A - VALORI FISSI
var fossil_ind = 37.3;
var bio_ind = 5.8;
var el_ind = 16.4;
	  	  
var fossil_tr = 71.6;
var bio_tr = 2.7;
var el_tr = 1.1;
	  	  
var fossil_s = 13.8;
var bio_s = 2.5;
var el_s = 16.8;
	  	  
var fossil_house = 27.8;
var bio_house = 6.4;
var el_house = 14.8;
//----------------------------------------------------------------------------------------------------
var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
var somma_valori_s = (fossil_s+bio_s+el_s);
var somma_valori_house = (fossil_house+bio_house+el_house);
//----------------------------------------------------------------------------------------------------
var A6a = (1-red_ind_parse)*(somma_valori_ind); 
var A6aa = (1-red_ind_parse)*el_ind;
var A6b = (A6a) - (A6aa);
		  	
var B6a = (1-red_tr_parse)*(1-(el_tr_parse*(1-0.7/2.3)))*(somma_valori_tr);
var B6b = (el_tr_parse)*(B6a);

var C6a = (1-red_ser_parse)*(somma_valori_s);
var C6b = (1-red_ind_parse)*(el_s);
	
var e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
var D6a = ((1-red_house)*(somma_valori_house))-(e_h);
//----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di FOSSIL USER: industry -transport -services -households
var f_i_primaop = (A6a)-(A6b);
var f_i = (1-bio_fr_parse)*(A6b);
var f_t = (1-bio_fr_parse)*(B6a-B6b);
var f_s = (1-bio_fr_parse)*(C6a-C6b);
var f_h = (1-bio_fr_parse)*(D6a);
	  	  
var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);

var energy_fossil_val = (total_fossil_user)*(1-fossilf_parse);
var fossil_final_WFblue = (energy_fossil_val)*((RA_WFblue_Fossil)*0.25)/1000;
console.log("FOSSIL WFblue INT = EnergyG34 (ok)= "+fossil_final_WFblue);

//-----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di BIOFUEL USER:	  
var bio_i_primaop = (A6a)-(A6b);
var b_i = (bio_fr_parse)*(A6b);
var b_t = (bio_fr_parse)*(B6a-B6b);
var b_s = (bio_fr_parse)*(C6a-C6b);
var b_h = (bio_fr_parse)*(D6a);

var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
var bio_final_WFblue = (energy_bio_val)*((RA_WFblue_Biofuel*0.27))/1000;
console.log("BIO WFblue INT = EnergyG35 (ok) =  "+bio_final_WFblue);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(A6a);
var e_s = (1-((red_ind_parse)*(el_s)))*100;
e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));

		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));

//console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);
var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
	var elec1= (PER_B_Wind)*(RB_WFgreen_Wind);
	//console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_B_Solar)*(RB_WFblue_Solar);
	var elec3 =(PER_B_Hydro)*(RB_WFblue_Hydro);
	var elec4 =(PER_B_Biofuel)*(RB_WFblue_Biofuel);
	var elec5 =(PER_B_Nuclear)*(RB_WFblue_Nuclear);
	var elec6 =(PER_B_Fossil)*(RB_WFblue_Fossil); 	
}   
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
	var elec1= (PER_C_Wind)*(RC_D_WFblue_Wind);
	//console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_C_Solar)*(RC_D_WFblue_Solar);
	var elec3 =(PER_C_Hydro)*(RC_D_WFblue_Hydro);
	var elec4 =(PER_C_Biofuel)*(RC_D_WFblue_Biofuel);
	var elec5 =(PER_C_Nuclear)*(RC_D_WFblue_Nuclear);
	var elec6 =(PER__Fossil)*(RC_D_WFblue_Fossil); 	
}   
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
	var elec1= (PER_B_Wind)*(RC_D_WFblue_Wind);
	//console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_D_Solar)*(RC_D_WFblue_Solar);
	var elec3 =(PER_D_Hydro)*(RC_D_WFblue_Hydro);
	var elec4 =(PER_D_Biofuel)*(RC_D_WFblue_Biofuel);
	var elec5 =(PER_D_Nuclear)*(RC_D_WFblue_Nuclear);
	var elec6 =(PER_D_Fossil)*(RC_D_WFblue_Fossil); 	
	}  
else {

var elec1= (PER_A_Wind)*(RA_WFblue_Wind);
var elec2 =(PER_A_Solar)*(RA_WFblue_Solar);
var elec3 =(PER_A_Hydro)*(RA_WFblue_Hydro);
var elec4 =(PER_A_Biofuel)*(RA_WFblue_Biofuel);
var elec5 =(PER_A_Nuclear)*(RA_WFblue_Nuclear);
var elec6 =(PER_A_Fossil)*(RA_WFblue_Fossil); 	
}

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);

var electricity_sum = (elec1add)+(elec2add)+(elec3add);

var elec_final_WFblue = (energy_elec_val)*(electricity_sum)/1000;
//-----------------------------------------------------------------------------------------------
var datoWFblue_en_internal = (elec_final_WFblue+bio_final_WFblue+fossil_final_WFblue);
//-----------------------------------------------------------------------------------------------
var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) { 
	var fossil_final_lf = (energy_fossil_val)*((RB_WFblue_Fossil)*0.25)/1000;
}
else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) { 
	var fossil_final_lf = (energy_fossil_val)*((RC_D_WFblue_Fossil)*0.25)/1000;
}
else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) { 
	var fossil_final_lf = (energy_fossil_val)*((RC_D_WFblue_Fossil)*0.25)/1000;
}
else {
	var fossil_final_lf = (energy_fossil_val)*((RA_WFblue_Fossil)*0.25)/1000;

}

var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
	var bio_final_lf = (energy_bio_val)*((RB_WFblue_Biofuel*0.27))/1000;
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) {
	var bio_final_lf = (energy_bio_val)*((RC_D_WFblue_Biofuel*0.27))/1000;
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) {
	var bio_final_lf = (energy_bio_val)*((RC_D_WFblue_Biofuel*0.27))/1000;
}
else {
	var bio_final_lf = (energy_bio_val)*((RA_WFblue_Biofuel*0.27))/1000;

}


var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(RC_D_WFblue_Fossil*0.25)/1000;
var bio_final_WFblue_ext= total_bio_user*(biofuels_parse)*(RC_D_WFblue_Biofuel*0.27)/1000;


var elec_final_WFblue_ext = (energy_elec_val)*(elec_parse)/1000;
//----------------------------------------------------------------------------------------------
var datoWFblue_en_external = (elec_final_WFblue_ext+bio_final_WFblue_ext+fossil_final_WFblue_ext);
//----------------------------------------------------------------------------------------------  	
var titoloWFblue = parseFloat((datoWFblue_en_external+dataWFblue_food_ext)+(datoWFblue_en_internal+dataWFblue_food_int)).toFixed(2);

console.log("----------------------------------------------------------------------------------");
//______calcolo valori per tabella dash______
var sommawfbood = (dataWFblue_food_int+dataWFblue_food_ext);
var sommawfbenergy = (datoWFblue_en_internal+datoWFblue_en_external);
var somma_energy_itsh = Number(total_fossil_user+total_bio_user+total_el_user);

var valfood4 = parseFloat(sommawfbood/(intakeparse*(1+wastevirgola))).toFixed(3);
document.getElementById("valfood_4").innerHTML = valfood4;

var valen4 = parseFloat(sommawfbenergy/somma_energy_itsh).toFixed(3);
document.getElementById("valenergy_4").innerHTML = valen4;

var valfood8 = parseFloat(((valfood4-initial_value_wfb_food)/initial_value_wfb_food)*100).toFixed(3);
document.getElementById("valfood_8").innerHTML = valfood8+"%";

var valen8 = parseFloat(((valen4-initial_value_wfb_en)/initial_value_wfb_en)*100).toFixed(3);
document.getElementById("valenergy_8").innerHTML = valen8+"%";

//----PERCENTUALE SOTTO AL TITOLO---
var grand_total = parseFloat(Math.round(((sommawfbood+sommawfbenergy)-initial_value_wfb_int)/initial_value_wfb_int)).toFixed(2);
document.getElementById("percent4").innerHTML = grand_total + "% above initial value";

//----------------------------------------------------------------------------------------------

     /*ENERGY*/

//________________________________________
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////	
			
var datiaggbar = [dataWFblue_food_int, dataWFblue_food_ext];
var datiaggbar2 = [datoWFblue_en_internal, datoWFblue_en_external];
		
barChart4.data.datasets[0].data = datiaggbar;
barChart4.data.datasets[1].data = datiaggbar2;
barChart4.update();


} 
	  
var myVarb4 = setInterval(aggiornabar4, 3000);

  
//Bar Chart
// ------------------------------------------

//Get the context of the Chart canvas element we want to select
var barChartctxEn = $("#bar-chart-energy");
// Chart Options
var barchartOptionsEn = {
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each bar to be 2px wide
elements: {
    rectangle: {
      borderWidth: 2,
      borderSkipped: 'left'
    }
  },
  responsive: true,
  maintainAspectRatio: false,
  responsiveAnimationDuration: 500,
  legend: { display: false },
  scales: {
    xAxes: [{
      display: true,
      stacked:true,
      gridLines: {
      color: grid_line_color,
    },
      scaleLabel: {
        display: true,
      }
    }],
    yAxes: [{
  	  stacked:true,
      display: true,
      gridLines: {
      color: grid_line_color,
    },
      scaleLabel: {
        display: true,
      },
      ticks: { 
        beginAtZero: true,
      },
      type: 'linear',
    }],
  },
  title: {
    display: true,
    text: 'Energy Consumption in Different Sectors'
  },
};
// Chart Data
var barchartDataEn = {
  
		    labels: ["Industry", "Transport", "Services", "Households"],
		    datasets: [{
		      type: 'bar',
		      label: '"Fossil"',
		      data: [30.29505029, 41.04872569, 6.233821031, 17.90441711],
		      backgroundColor: 'brown'
		      
		    }, {
		      type: 'bar',
		      label: '"Biofuels"',
		      backgroundColor: "green",
		      data: [21.31074971, 28.87531496, 4.385118969, 12.59468289],
		    },
		    {
			      type: 'bar',
			      label: '"Electricity"',
			      backgroundColor: "orange",
			      data: [31.6153, 1.277991085, 18.1069, 24.6744],
			    }]
		  
    
};
var barChartconfigEn = {
  type: 'bar',

  // Chart Options
  options: barchartOptionsEn,
  data: barchartDataEn
};


// Create the chart
var barChartEn = new Chart(barChartctxEn, barChartconfigEn);
//operazioni di calcolo   

var reduction_ind = document.getElementById("e_N5").value;
var red_ind_parse = parseInt(reduction_ind);
////console.log("red_ind: "+red_ind_parse);
var reduction_transp = document.getElementById("e_N6").value;
var red_tr_parse = parseInt(reduction_transp);
var reduction_services = document.getElementById("e_N7").value;
var red_ser_parse =parseInt(reduction_services);
var reduction_household = document.getElementById("e_N8").value;
var red_house = parseInt(reduction_household);
var elect_transp = document.getElementById("e_N11").value;
var el_tr_parse = parseInt(elect_transp);  
var fuel_reduction_house = document.getElementById("e_N12").value;
var fuel_house_parse = parseInt(fuel_reduction_house);  
var biofuel_fraction= document.getElementById("e_N13").value;
var bio_fr_parse = parseInt(biofuel_fraction);  

var fossil_ind = 25.0;
var bio_ind = 26.6;
var el_ind = 31.6;

var fossil_tr = 63.6;
var bio_tr = 7.3;
var el_tr = 1.3;

var fossil_s = 8.9
var bio_s =1.8;
var el_s = 18.1;

var fossil_house = 12.9;
var bio_house = 17.6;
var el_house = 24.7;

var somma_valori_tr = fossil_tr+bio_tr+el_tr;
////console.log(somma_valori_tr);
var somma_valori_ind = fossil_ind+bio_ind+el_ind;
var somma_valori_s = fossil_s+bio_s+el_s;
var somma_valori_house = fossil_house+bio_house+el_house;

function aggiorna_en() {	  
		//////////////////// CALCOLO ENERGY ///////////////////////////////
		var red_ind_parse = parseFloat(document.getElementById("e_N5").value)/100;
		var red_tr_parse = parseFloat(document.getElementById("e_N6").value)/100;
		var red_ser_parse =parseFloat(document.getElementById("e_N7").value)/100;
		var red_house = parseFloat(document.getElementById("e_N8").value)/100;
		var el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
		var fuel_house_parse = parseFloat(document.getElementById("e_N12").value)/100;  
		var bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
		var fossilf_parse = parseFloat(document.getElementById("L30").value)/100;
		var biofuels_parse = parseFloat(document.getElementById("L31").value)/100;
		var elec_parse = parseFloat(document.getElementById("L32").value)/100;
		//---------------------------------------------------------------------------------------------------
		//CONSUMPTION REGION A - VALORI FISSI
		var fossil_ind = 37.3;
		var bio_ind = 5.8;
		var el_ind = 16.4;
			  	  
		var fossil_tr = 71.6;
		var bio_tr = 2.7;
		var el_tr = 1.1;
			  	  
		var fossil_s = 13.8;
		var bio_s = 2.5;
		var el_s = 16.8;
			  	  
		var fossil_house = 27.8;
		var bio_house = 6.4;
		var el_house = 14.8;
		//----------------------------------------------------------------------------------------------------
		var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
		var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
		var somma_valori_s = (fossil_s+bio_s+el_s);
		var somma_valori_house = (fossil_house+bio_house+el_house);
		//----------------------------------------------------------------------------------------------------
		var A6a = (1-red_ind_parse)*(somma_valori_ind); 
		var A6aa = (1-red_ind_parse)*el_ind;
		var A6b = (A6a) - (A6aa);
				  	
		var B6a = (1-red_tr_parse)*(1-(el_tr_parse*(1-0.7/2.3)))*(somma_valori_tr);
		var B6b = (el_tr_parse)*(B6a);

		var C6a = (1-red_ser_parse)*(somma_valori_s);
		var C6b = (1-red_ind_parse)*(el_s);
				  	
		var e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
		var D6a = ((1-red_house)*(somma_valori_house))-(e_h);
		//----------------------------------------------------------------------------------------------------
		//calcolo valori iniziali di FOSSIL USER: industry -transport -services -households
		var f_i_primaop = (A6a)-(A6b);
		var f_i = (1-bio_fr_parse)*(A6b);
		var f_t = (1-bio_fr_parse)*(B6a-B6b);
		var f_s = (1-bio_fr_parse)*(C6a-C6b);
		var f_h = (1-bio_fr_parse)*(D6a);
			  	  
		var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
		var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);

		var energy_fossil_val = (total_fossil_user)*(1-fossilf_parse);
		var fossil_final_lf = (energy_fossil_val)*((RA_LF_Fossil)*0.25)/1000;
		console.log("FOSSIL LF INT = EnergyI34 (ok)= "+fossil_final_lf);

		//-----------------------------------------------------------------------------------------------------
		//calcolo valori iniziali di BIOFUEL USER:	  
		var bio_i_primaop = (A6a)-(A6b);
		var b_i = (bio_fr_parse)*(A6b);
		var b_t = (bio_fr_parse)*(B6a-B6b);
		var b_s = (bio_fr_parse)*(C6a-C6b);
		var b_h = (bio_fr_parse)*(D6a);

		var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
		var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
		var bio_final_lf = (energy_bio_val)*((RA_LF_Biofuel*0.27))/1000;
		console.log("BIO LF INT = EnergyI35 (ok) =  "+bio_final_lf);

		//-----------------------------------------------------------------------------------------------------
		var e_i = (1-(red_ind_parse))*el_ind;
		var e_t = (el_tr_parse)*(A6a);
		var e_s = (1-((red_ind_parse)*(el_s)))*100;
		e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
	  
	  var datiaggF = [f_i, f_t, f_s, f_h];
	  var datiaggB = [b_i, b_t, b_s, b_h];
	  var datiaggE = [e_i, e_t, e_s, e_h];
	  ////console.log("lista " +datiaggF);
	  

	  barChartEn.data.datasets[0].data = datiaggF;
	  barChartEn.data.datasets[1].data = datiaggB;
	  barChartEn.data.datasets[2].data = datiaggE;
	  barChartEn.update();
		}

var myVar = setInterval(aggiorna_en, 3000);  

// 


  
  // Horizontal Chart
  // -------------------------------------

  // Get the context of the Chart canvas element we want to select
  var horizontalChartctx = $("#horizontal-bar");

  var horizontalchartOptions = {
    // Elements options apply to all of the options unless overridden in a dataset
    // In this case, we are setting the border of each horizontal bar to be 2px wide
    elements: {
      rectangle: {
        borderWidth: 2,
        borderSkipped: 'right',
        borderSkipped: 'top',
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: {
      display: true,
    },
    scales: {
      xAxes: [{
    	  stacked:true,
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        stacked: true,
        scaleLabel: {
          display: true,
        }
      }],
      yAxes: [{
        display: true,
        stacked: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
        }
      }]
    },
    title: {
      display: true,
      text: 'Production of Food (Kcal/cap/day)'
    }
  };

  // Chart Data
  var horizontalchartData = {
    //labels: ["Local", "B", "C", "D", "EU", "WORLD"],
    datasets: [{
      label: "Local",
      data: [4664.2],
      backgroundColor: themeColors,
      borderColor: "transparent"
    },{
         data: [0],
        backgroundColor: themeColors,
        borderColor: "transparent"
      },{
           data: [0],
          backgroundColor: themeColors,
          borderColor: "transparent"
        },{
              data: [0],
            backgroundColor: themeColors,
            borderColor: "transparent"
          },{
               data: [0],
              backgroundColor: themeColors,
              borderColor: "transparent"
            },{
                 data: [760.796],
                backgroundColor: themeColors,
                borderColor: "transparent"
              }]
  };

  var horizontalChartconfig = {
    type: 'bar',

    // Chart Options
    options: horizontalchartOptions,

    data: horizontalchartData
  };

 
  
  // Create the chart
  var horizontalChart = new Chart(horizontalChartctx, horizontalChartconfig);
  

  
  
    
  
  

  // Pie Chart
  // --------------------------------
  //Get the context of the Chart canvas element we want to select
  var pieChartctx = $("#simple-pie-chart");

  // Chart Options
  var piechartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    title: {
      display: true,
      text: 'Food Choices'
    }
  };

  
  
  // Chart Data
  var piechartData = {
    labels: ["Plant-based Products", "Meat & Fish", "Diary & Eggs", "Waste"],
    datasets: [{
      label: "label",
      data: [1886,375, 399, 2660],
      backgroundColor: themeColors,
    }]
  };

  var pieChartconfig = {
    type: 'pie',

    // Chart Options
    options: piechartOptions,

    data: piechartData
  };

  // Create the chart
  var pieSimpleChart = new Chart(pieChartctx, pieChartconfig); 
  

  
  
  
   
  function aggiorna() {	  
	  var daysp = parseInt(days); 
	  var intake = document.getElementById("f_D4").value;
	  var intakeparse = parseInt(intake);
	  ////console.log("intake: "+intakeparse);
	  var waste = document.getElementById("f_D5").value;
	  var wasteparse = parseInt(waste);
	  var wastevirgola= wasteparse/100;
	  var veg = document.getElementById("f_C6").value;
	  var vegparse =parseInt(veg);
	  var vege = document.getElementById("f_C7").value;
	  var vegeparse = parseInt(vege);
	  var meat = document.getElementById("f_C8").value;
	  var meatparse = parseInt(meat);
	  
	  var days = document.getElementById("A8_f").value;
	  var totalone = vegparse+vegeparse+meatparse;
	  ////console.log("totalone: "+totalone);	
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
	  var vegan_val = vegparse/totalone*100;
	  ////console.log("S17: "+vegan_val);
	  var vege_val = (vegeparse/totalone*100)+[meatparse/totalone*(7-days)/7]*100;
	  ////console.log("T17: "+vege_val);
	  var meat_val = [(meatparse/totalone)*(days/7)]*100;
	  ////console.log("U17: "+meat_val);
	  
//calcolo i valori per PLANT BASED:
	  var plant0=  (vegan_val*100)+(vege_val*85)+(meat_val*70);
	  var plant1 = parseFloat(plant0/100).toFixed(2);
	   plant1 = parseFloat(plant1).toFixed(2);
	  ////console.log("precalories plant: "+plant1);
	  var plant_based = (plant1*intakeparse)/100;
	  var plantbased_val = plant_based;		
	  ////console.log("totale PLANT: "+plantbased_val);
//calcolo i valori per MEAT & FISH:
	  var meat1 = parseFloat((vegan_val*0)+(vege_val*0)+(meat_val*15)).toFixed(2);
	   meat1 = parseFloat(meat1).toFixed(2);
	  ////console.log("precalories MEAT: "+meat1);
	  var meat_based = (meat1*intakeparse)/10000;
	  var meatfish_val = meat_based;		
	  ////console.log("totale MEAT: "+meatfish_val);
//calcolo i valori per DIARY & EGGS:
	  var diary1 = parseFloat((vegan_val*0)+(vege_val*15)+(meat_val*15)).toFixed(2)/100;
	   diary1 = parseFloat(diary1).toFixed(2);
	  ////console.log("prima moltiplicazione: "+(vegan_val*0));
	  ////console.log("seconda: "+(vege_val*15));
	  ////console.log("terza: "+(meat_val*15));
	 ////console.log("precalories DIARY: "+diary1);
	  var diary_based = (diary1*intakeparse)/100;
	  var diary_val = diary_based;		
	  ////console.log("totale DIARY: "+diary_val);
//calcolo WASTE:
	  var waste_val = parseFloat((wasteparse*intakeparse)/100).toFixed(2);
	  waste_val = parseFloat(waste_val).toFixed(2);
	  ////console.log("waste: "+waste_val);
	  

		  	  //////console.log("vege input:" +vege);	

	  
	  var datiagg = [plantbased_val, meatfish_val, diary_val, waste_val];
	  //////console.log("lista " +datiagg);
	  

	  pieSimpleChart.data.datasets[0].data = datiagg;
pieSimpleChart.update();
		}
	  var myVar = setInterval(aggiorna, 3000);
 
  
  
  
  // Doughnut Chart
  // ---------------------------------------------
  //Get the context of the Chart canvas element we want to select
  var doughnutChartctx = $("#simple-doughnut-chart");

  // Chart Options
  var doughnutchartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  };

  // Chart Data
  var doughnutchartData = {
    labels: ["Wind", "Solar", "Hydro", "Biofuels", "Nuclear", "Fossil"],
    datasets: [{
      label: "My First dataset",
      data: [12, 3, 18, 3, 4, 60],
      backgroundColor: themeColors,
    }]
  };

  var doughnutChartconfig = {
    type: 'doughnut',

    // Chart Options
    options: doughnutchartOptions,

    data: doughnutchartData
  };

  // Create the chart
  var doughnutSimpleChart = new Chart(doughnutChartctx, doughnutChartconfig);

  function aggiorna_em() {	  
	  var wind = document.getElementById("em_J21").value;
	  var windp = parseInt(wind);
	  ////console.log("red_ind: "+windp);
	  var solar = document.getElementById("em_J22").value;
	  var solarp = parseInt(solar);
	  var hydro = document.getElementById("em_J23").value;
	  var hydrop =parseInt(hydro);
	  var biofu = document.getElementById("em_J24").value;
	  var biofup = parseInt(biofu);
	  var nuclear = document.getElementById("em_J25").value;
	  var nuclearp = parseInt(nuclear);  
	  var fuel = document.getElementById("em_J26").value;
	  var fuelp = parseInt(fuel);
	    
   var emagg = [windp, solarp, hydrop, biofup, nuclearp, fuelp]
	  doughnutSimpleChart.data.datasets[0].data = emagg;
	
   doughnutSimpleChart.update();
		}

  var myVar = setInterval(aggiorna_em, 3000);   
  
  
  
  
  
  
  
  
  
  // Radar Chart
  // ----------------------------------------
  //Get the context of the Chart canvas element we want to select
  var radarChartctx = $("#radar-chart");

  // Chart Options
  var radarchartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: {
      position: 'top',
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItems, data) {
          return data.datasets[tooltipItems.datasetIndex].label + ": " + tooltipItems.yLabel;
        }
      }
    },
    title: {
      display: true,
      text: 'Distribution in % of world population'
    },
    scale: {
      reverse: false,
      ticks: {
        beginAtZero: true,
        stepSize: 10
      }
    }
  };

  // Chart Data
  var radarchartData = {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "1950",
      fill: true,
      backgroundColor: "rgba(255,91,92,0.2)",
      borderColor: $danger,
      pointBorderColor: $white,
      pointBackgroundColor: $danger,
      data: [8.77, 55.61, 21.69, 6.62, 6.82],
    }, {
      label: "2050",
      fill: true,
      backgroundColor: "rgba(255,91,92,0.2)",
      borderColor: $danger,
      pointBorderColor: $white,
      pointBackgroundColor: $danger,
      data: [25.48, 54.16, 7.61, 8.06, 4.45],
    },]
  };

  var radarChartconfig = {
    type: 'radar',

    // Chart Options
    options: radarchartOptions,

    data: radarchartData
  };

  // Create the chart
  var polarChartradar = new Chart(radarChartctx, radarChartconfig);
  
  
  
  

//Doughnut Chart
  // ---------------------------------------------
  //Get the context of the Chart canvas element we want to select
  var doughnutChartctx2 = $("#polar-chart-security");

  // Chart Options
  var doughnutchartOptions2 = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    title: {
      display: true,
      text: 'Security'
    },
    legend: {
        display: false
    },
  };

  // Chart Data
  var doughnutchartData2 = {
    labels: ["Local", "B", "C", "D", "EU", "WORLD"],
    datasets: [{
      label: "Production of Food",
      data: [4664,0,0,0,0,203425],
      backgroundColor: themeColors,
    }]
  };

  var doughnutChartconfig2 = {
    type: 'doughnut',

    // Chart Options
    options: doughnutchartOptions2,

    data: doughnutchartData2
  };

  // Create the chart
  var doughnutSimpleChart2 = new Chart(doughnutChartctx2, doughnutChartconfig2);
   
   
  function aggiornaSecurity() {  	
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
	  var fip = parseFloat(document.getElementById("E30").value)/100;
	  var fim = parseFloat(document.getElementById("E31").value)/100;
	  var fid = parseFloat(document.getElementById("E32").value)/100;
	  //----------------------------------------------------------------------------------
	  var Gap_Yeld_parse = parseFloat(document.getElementById("G14").value)/100;
	  var Mulching_parse = parseFloat(document.getElementById("G15").value)/100; 	
//	  	//console.log("MULCHING PARSE: "+Mulching_parse);
	  var Full_Deficit_parse = parseFloat(document.getElementById("G19").value)/100;
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
	  //----------------------------------------------------------------------------------------------------------------
	  //Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
	  //calcolo i valori per PLANT BASED:
	  var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
	  plant1 = parseFloat(plant1.toFixed(2));
	  //console.log("plant1= Food V18 Total: "+plant1+" intakeparse: "+intakeparse);
	  //calcolo i valori per MEAT & FISH:
	  var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;
	  meat1 = parseFloat(meat1.toFixed(2));
	  //calcolo i valori per DIARY & EGGS:
	  var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
	  diary1 = parseFloat(diary1.toFixed(2));
	  // plant1+meat1+diary1 = intakeparse (Food.W18 + Food.W19 + Food.W20 = Food.W17)
	  //----------------------------------------------------------------------------------------------------------------
	  //calcolo WASTE:
	  var waste_val = (wasteparse*intakeparse)/100;
	  waste_val = parseFloat(waste_val.toFixed(2));
	  //CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
	  //OTTENGO LA PERCENTUALE BASE (% * calorie+waste)
	  var cal_waste = waste_val+intakeparse;
	  cal_waste = parseFloat(cal_waste.toFixed(2));
	  //----------------------------------------------------------------------------------------------------------------
	  var YeldCF = Gap_Yeld_parse*YG_closing_CF;
	  var Mulch = Mulching_parse*Mulching_CF;
	  var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_CF;

	  //----------------------------------------------------------------------------------------------------------------
	  var meatbased = (meat1*cal_waste)/100; 
	  var diarybased = (diary1*cal_waste)/100;
	  var plantbased = (plant1*cal_waste)/100;	//Food.V18*Food.W17
	  //----------------------------------------------------------------------------------------------------------------
	  //CALCOLO IL VALORE PER LE SOMME DI FOOD:
	  //CALCOLO IL VALORE PER LE SOMME DI FOOD CF INTERNAL:
	  //PLANT:
	  //------------------------------------------------------------------------------------------------------------------
	  var plantbasedA = (1-fip)*plantbased;
	var meatbasedA = (1-fim)*meatbased;
	var diarybasedA = (1-fid)*diarybased;
	var local_food = Number(plantbasedA)+Number(meatbasedA)+Number(diarybasedA);
	 //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
	var plantB = 0;
	var plantC = 0;
	var plantD = 0;
	var plantWORLD =0;
	
	var meatB =0;
	var meatC=0;
	var meatD =0;
	var meatWORLD =0;
	
	var diaryB2=0;
	var diaryC2=0;
	var diaryD=0;
	var diaryWORLD = 0;
	
	  var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 	    
	  if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
		plantB =  (fip)*plantbased;
	
	  } 
	  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
		  plantC =  (fip)*plantbased;
	  }
	  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) {
		  plantD =  (fip)*plantbased;
	  } 
	  else {
	plantB = 0;
	palntC = 0;
	plantD = 0;
	plantWORLD = plantbasedA;
	  }
	

	//------------------------------------------------------------------------------------------------------------------
	//MEAT:	
	var meatbasedA = meatbased*(1-fim);
	 //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
	  var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked'); 

	if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
		meatB = (fim)*meatbased;
	}    
	else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) {
		(fim)*meatbased;
	}
	else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) {
		(fim)*meatbased;
	}
	else {
		meatB = 0;
		meatC = 0;
		meatD = 0;
		meatWORLD = meatbasedA;
	}

	//---------------------------------------------------------------------------------------------------------------------
	//DIARY:
	var diaryA = (diarybased)*(1-fid);
	var diaryB = ((YeldCF+Mulch)*Rainfed)+Deficit;
	 //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
	  var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked'); 
	if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
		diaryB2 = (fid)*diarybased;
		}
	else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) {
		diaryC2 = (1-fid)*diarybased;
		}
	else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) {
		diaryD = (1-fid)*diarybased;
		}
	else {
		diaryB2 = 0;
		diaryC2=0;
		diaryD=0;
		diaryWORLD = diarybasedA;
	}
	

	

var sumfoodsecurityB = Number(plantB)+Number(meatB)+Number(diaryB2);	
var sumfoodsecurityC = Number(plantC)+Number(meatC)+Number(diaryC2);	
var sumfoodsecurityD = Number(plantD)+Number(meatD)+Number(diaryD);	
var sumfoodsecurityWORLD = Number(plantWORLD)+Number(meatWORLD)+Number(diaryWORLD);

	
		  var world_food = sumfoodsecurityWORLD;
	      var B_food = sumfoodsecurityB;
	      var C_food = sumfoodsecurityC;
		  var D_food = sumfoodsecurityD;
		  var EU_food = 0;

		
	var datiagghor = [local_food, B_food, C_food, D_food, EU_food, world_food];
	console.log ("VALORI SECURITY FOOD: "+B_food+" "+C_food+" "+D_food);
	doughnutSimpleChart2.data.datasets[0].data = datiagghor;
	}
  

  var myVarpolar = setInterval(aggiornaSecurity, 3000);   
  


  
  // Doughnut Chart
  // ---------------------------------------------
  //Get the context of the Chart canvas element we want to select
  var doughnutChartctx3 = $("#polar-chart-security-2");

  // Chart Options
  var doughnutchartOptions3 = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    title: {
      display: true,
      text: 'Security'
    },
    legend: {
        display: false
    },
  };

  // Chart Data
  var doughnutchartData3 = {
    labels: ["Local", "B", "C", "D", "EU", "WORLD"],
    datasets: [{
      label: "Production of Energy (MJ/cap/day)",
      data: [115,0,0,0,0, 83],
      backgroundColor: themeColors,
    }]
  };

  var doughnutChartconfig3 = {
    type: 'doughnut',

    // Chart Options
    options: doughnutchartOptions3,

    data: doughnutchartData3
  };

  // Create the chart
  var doughnutSimpleChart3 = new Chart(doughnutChartctx3, doughnutChartconfig3);
   
  function aggiornaSecuritydue() {

	//console.log("==========INIZIO ENERGY LF============");	  
	//////////////////// CALCOLO ENERGY ///////////////////////////////
	var red_ind_parse = parseFloat(document.getElementById("e_N5").value)/100;
	var red_tr_parse = parseFloat(document.getElementById("e_N6").value)/100;
	var red_ser_parse =parseFloat(document.getElementById("e_N7").value)/100;
	var red_house = parseFloat(document.getElementById("e_N8").value)/100;
	var el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
	var fuel_house_parse = parseFloat(document.getElementById("e_N12").value)/100;  
	var bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
	var fossilf_parse = parseFloat(document.getElementById("L30").value)/100;
	var biofuels_parse = parseFloat(document.getElementById("L31").value)/100;
	var elec_parse = parseFloat(document.getElementById("L32").value)/100;
	//---------------------------------------------------------------------------------------------------
	//CONSUMPTION REGION A - VALORI FISSI
	var fossil_ind = 37.3;
	var bio_ind = 5.8;
	var el_ind = 16.4;
		  	  
	var fossil_tr = 71.6;
	var bio_tr = 2.7;
	var el_tr = 1.1;
		  	  
	var fossil_s = 13.8;
	var bio_s = 2.5;
	var el_s = 16.8;
		  	  
	var fossil_house = 27.8;
	var bio_house = 6.4;
	var el_house = 14.8;
	//----------------------------------------------------------------------------------------------------
	var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
	var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
	var somma_valori_s = (fossil_s+bio_s+el_s);
	var somma_valori_house = (fossil_house+bio_house+el_house);
	//----------------------------------------------------------------------------------------------------
	var A6a = (1-red_ind_parse)*(somma_valori_ind); 
	var A6aa = (1-red_ind_parse)*el_ind;
	var A6b = (A6a) - (A6aa);
			  	
	var B6a = (1-red_tr_parse)*(1-(el_tr_parse*(1-0.7/2.3)))*(somma_valori_tr);
	var B6b = (el_tr_parse)*(B6a);

	var C6a = (1-red_ser_parse)*(somma_valori_s);
	var C6b = (1-red_ind_parse)*(el_s);
			  	
	var e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
	var D6a = ((1-red_house)*(somma_valori_house))-(e_h);
	//----------------------------------------------------------------------------------------------------
	//calcolo valori iniziali di FOSSIL USER: industry -transport -services -households
	var f_i_primaop = (A6a)-(A6b);
	var f_i = (1-bio_fr_parse)*(A6b);
	var f_t = (1-bio_fr_parse)*(B6a-B6b);
	var f_s = (1-bio_fr_parse)*(C6a-C6b);
	var f_h = (1-bio_fr_parse)*(D6a);
		  	  
	var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
	var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);


	//-----------------------------------------------------------------------------------------------------
	//calcolo valori iniziali di BIOFUEL USER:	  
	var bio_i_primaop = (A6a)-(A6b);
	var b_i = (bio_fr_parse)*(A6b);
	var b_t = (bio_fr_parse)*(B6a-B6b);
	var b_s = (bio_fr_parse)*(C6a-C6b);
	var b_h = (bio_fr_parse)*(D6a);

	var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));

	//-----------------------------------------------------------------------------------------------------
	var e_i = (1-(red_ind_parse))*el_ind;
	var e_t = (el_tr_parse)*(A6a);
	var e_s = (1-((red_ind_parse)*(el_s)))*100;
	e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
			  	
	var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
//----calcoli per SECURITY ENERGY 
	var FOSSILA = Number(total_fossil_user)*(1-fossilf_parse);
	var BIOA = Number(total_bio_user)*Number(1-biofuels_parse);
	var ELECA = Number(total_el_user)*Number(1-elec_parse);
	
	var FOSSILB = 0;
	var FOSSILC = 0;
	var FOSSILD = 0;
	var FOSSILWORLD = 0;
	
	var BIOB =0;
	var BIOC=0;
	var BIOD =0;
var BIOWORLD =0;

	var SUMELECB=0;
	var SUMELECC =0;
	var SUMELECD =0;
	var ELECB=0;
	var ELECC=0;
	var ELECD=0;
	var ELECWORLD = 0;
	

	 var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked'); 
	 if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
	BIOB = Number(total_bio_user)*Number(biofuels_parse);
	
	}
		else if ((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) {
		BIOC = Number(total_bio_user)*Number(biofuels_parse);
	}
		else if ((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) {
		BIOD = Number(total_bio_user)*Number(biofuels_parse);	
	} else {
		BIOB = 0;
		BIOC = 0;
		BIOD =0;
		BIOWORLD = BIOA;	
	}
	
	  var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked'); 
		if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) {
		FOSSILB = Number(total_fossil_user)*Number(fossilf_parse);		
		}
			else if ((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) {
			FOSSILC = Number(total_fossil_user)*Number(fossilf_parse);		
		}
			else if ((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) {
			FOSSILD = Number(total_fossil_user)*Number(fossilf_parse);		
		} else {
		FOSSILB = 0;
		FOSSILC=0;
		FOSSILD=0;
		FOSSILWORLD = FOSSILA;		
		}
		
		
		  var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked'); 		
	if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
		ELECB = Number(total_el_user)*Number(elec_parse);		
		}
		else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
			ELECC = Number(total_el_user)*Number(elec_parse);		
		}
		else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
			ELECD = Number(total_el_user)*Number(elec_parse);	
		} else {
		ELECB = 0;
		ELECC = 0;
		ELECD= 0;
		ELECWORLD = ELECA;		
		}
	

 var SUMB = Number(FOSSILB)+Number(BIOB)+Number(ELECB);
 var SUMC = Number(FOSSILC)+Number(BIOC)+Number(ELECC);
 var SUMD = Number(FOSSILD)+Number(BIOD)+Number(ELECD);
 var SUMWORLD = Number(FOSSILWORLD)+Number(BIOWORLD)+Number(ELECWORLD);
 var SUMLOCALENERGY = Number(FOSSILA)+Number(BIOA)+Number(ELECA);
 
	//-----------------------------------------------------------------------------------------------
	
	//-----------------------------------------------------------------------------------------------

	
	//----------------------------------------------------------------------------------------------
	
			var local_energy = SUMLOCALENERGY;
	  	  
	  	  	
	  	  var B_en = SUMB;
		  var C_en = SUMC;
		  var D_en = SUMD;
		  var EU_en = 0;
		
		  var world_en = SUMWORLD;

	
var datiaggsec2 = [local_energy, B_en, C_en, D_en, EU_en, world_en];
doughnutSimpleChart3.data.datasets[0].data = datiaggsec2;
}

  var myVarpolar_due = setInterval(aggiornaSecuritydue, 3000);   
  
  
  
  
  

  
  
  // Bubble Chart
  // ---------------------------------------
  //Get the context of the Chart canvas element we want to select
  var bubbleChartctx = $("#bubble-chart");

  var randomScalingFactor = function () {
    return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
  };

  // Chart Options
  var bubblechartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
          labelString: "GDP (PPP)"
        }
      }],
      yAxes: [{
        display: true,
        gridLines: {
          color: grid_line_color,
        },
        scaleLabel: {
          display: true,
          labelString: "Happiness"
        },
        ticks: {
          stepSize: 0.5
        },
      }]
    },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    }
  };

  // Chart Data
  var bubblechartData = {
    animation: {
      duration: 10000
    },
    datasets: [{
      label: ["China"],
      backgroundColor: "rgb(253, 172, 65,.2)",
      borderColor: $warning,
      data: [{
        x: 21269017,
        y: 5.245,
        r: 15
      }],
    }, {
      label: ["Denmark"],
      backgroundColor: "rgba(57,218,138,0.2)",
      borderColor: $success,
      data: [{
        x: 258702,
        y: 7.526,
        r: 10
      }]
    }, {
      label: ["Germany"],
      backgroundColor: "rgba(0,0,0,0.2)",
      borderColor: $black,
      data: [{
        x: 3979083,
        y: 6.994,
        r: 15
      }]
    }, {
      label: ["Japan"],
      backgroundColor: "rgba(255,91,92,0.2)",
      borderColor: $danger,
      data: [{
        x: 4931877,
        y: 5.921,
        r: 15
      }]
    }]
  };

  var bubbleChartconfig = {
    type: 'bubble',

    // Chart Options
    options: bubblechartOptions,

    data: bubblechartData
  };

  // Create the chart
  var bubbleChart = new Chart(bubbleChartctx, bubbleChartconfig);

  // Scatter Chart
  // ------------------------------------
  //Get the context of the Chart canvas element we want to select
  var scatterChartctx = $("#scatter-chart");

  // Chart Options
  var scatterchartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 800,
    title: {
      display: false,
      text: 'Chart.js Scatter Chart'
    },
    scales: {
      xAxes: [{
        position: 'top',
        gridLines: {
          color: scatter_grid_color,
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'x axis'
        }
      }],
      yAxes: [{
        position: 'right',
        gridLines: {
          color: scatter_grid_color,
          drawTicks: false,
        },
        scaleLabel: {
          display: true,
          labelString: 'y axis'
        }
      }]
    }
  };

  // Chart Data
  var scatterchartData = {
    datasets: [{
      label: "My First dataset",
      data: [{
        x: 65,
        y: 28,
      }, {
        x: 59,
        y: 48,
      }, {
        x: 80,
        y: 40,
      }, {
        x: 81,
        y: 19,
      }, {
        x: 56,
        y: 86,
      }, {
        x: 55,
        y: 27,
      }, {
        x: 40,
        y: 89,
      }],
      backgroundColor: "#E6EAEE",
      borderColor: "transparent",
      pointBorderColor: $scatter_point_light,
      pointBackgroundColor: $white,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    }, {
      label: "My Second dataset",
      data: [{
        x: 45,
        y: 17,
      }, {
        x: 25,
        y: 62,
      }, {
        x: 16,
        y: 78,
      }, {
        x: 36,
        y: 88,
      }, {
        x: 67,
        y: 26,
      }, {
        x: 18,
        y: 48,
      }, {
        x: 76,
        y: 73,
      }],
      backgroundColor: "rgba(90,141,238,.6)",
      borderColor: "transparent",
      pointBorderColor: $scatter_point_dark,
      pointBackgroundColor: $white,
      pointBorderWidth: 2,
      pointHoverBorderWidth: 2,
      pointRadius: 4,
    }]
  };

  var scatterChartconfig = {
    type: 'scatter',

    // Chart Options
    options: scatterchartOptions,

    data: scatterchartData
  };

  // Create the chart
  var scatterChart = new Chart(scatterChartctx, scatterChartconfig);
  //
  
  
  
  
  
  

  //BAR GRAFICI SOTTO
//Bar Chart  Sotto1
  
//Horizontal Chart
  // -------------------------------------

  // Get the context of the Chart canvas element we want to select
  var horizontalChartctx = $("#bar-chart-sotto1");

  var horizontalchartOptions = {
		    // Elements options apply to all of the options unless overridden in a dataset
		    // In this case, we are setting the border of each horizontal bar to be 2px wide
		    elements: {
		      rectangle: {
		        borderWidth: 2,
		        borderSkipped: 'right',
		        borderSkipped: 'top',
		      }
		    },
		    
		    responsive: true,
		    maintainAspectRatio: false,
		    responsiveAnimationDuration: 500,
		    legend: {
		      display: false,
		    },
		    scales: {
		      xAxes: [{
		        display: true,
		        stacked: true,
		        gridLines: {
		          color: grid_line_color,
		        },
		        scaleLabel: {
		          display: true,
		        }
		      }],
		      yAxes: [{
		        display: true,
		        stacked: true,
		        gridLines: {
		          color: grid_line_color,
		        },
		        scaleLabel: {
		          display: true,
		        }
		      }]
		    },
		    title: {
		      display: true,
		      text: ''
		    },
		 
		  };

		  // Chart Data
		  var horizontalchartData = {
		  //  labels: ["Local", "B", "C", "D", "EU", "WORLD"],
	            
		    datasets: [{
		      label: "Base Value CF",
		      data: [23,0,0,0,0,0],
		      backgroundColor: themeColors,
		      borderColor: "transparent",
		     
		    },
		    {
			      label: ["Sustainable Limit"],
			      data: [0],
			      backgroundColor: giallo,
			      borderColor: "transparent"
			    },
			    {
				      label: ["Phisical Limit"],
				      data: [0],
				      backgroundColor: rosso,
				      borderColor: "transparent"
				    }]
		  };

		  var horizontalChartconfig = {
		    type: 'bar',

		    // Chart Options
		    options: horizontalchartOptions,

		    data: horizontalchartData
		  };

		  // Create the chart
		  var horizontalChart = new Chart(horizontalChartctx, horizontalChartconfig);
  

  function aggiornabarSottouno() {	
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
	  var fip = parseFloat(document.getElementById("E30").value)/100;
	  var fim = parseFloat(document.getElementById("E31").value)/100;
	  var fid = parseFloat(document.getElementById("E32").value)/100;
	  //----------------------------------------------------------------------------------
	  var Gap_Yeld_parse = parseFloat(document.getElementById("G14").value)/100;
	  var Mulching_parse = parseFloat(document.getElementById("G15").value)/100; 	
//	  	//console.log("MULCHING PARSE: "+Mulching_parse);
	  var Full_Deficit_parse = parseFloat(document.getElementById("G19").value)/100;
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
	  //----------------------------------------------------------------------------------------------------------------
	  //Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
	  //calcolo i valori per PLANT BASED:
	  var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
	  plant1 = parseFloat(plant1.toFixed(2));
	  //console.log("plant1= Food V18 Total: "+plant1+" intakeparse: "+intakeparse);
	  //calcolo i valori per MEAT & FISH:
	  var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;
	  meat1 = parseFloat(meat1.toFixed(2));
	  //calcolo i valori per DIARY & EGGS:
	  var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
	  diary1 = parseFloat(diary1.toFixed(2));
	  // plant1+meat1+diary1 = intakeparse (Food.W18 + Food.W19 + Food.W20 = Food.W17)
	  //----------------------------------------------------------------------------------------------------------------
	  //calcolo WASTE:
	  var waste_val = (wasteparse*intakeparse)/100;
	  waste_val = parseFloat(waste_val.toFixed(2));
	  //CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
	  //OTTENGO LA PERCENTUALE BASE (% * calorie+waste)
	  var cal_waste = waste_val+intakeparse;
	  cal_waste = parseFloat(cal_waste.toFixed(2));
	  //----------------------------------------------------------------------------------------------------------------
	  var YeldCF = Gap_Yeld_parse*YG_closing_CF;
	  var Mulch = Mulching_parse*Mulching_CF;
	  var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_CF;

	  //----------------------------------------------------------------------------------------------------------------
	  var meatbased = (meat1*cal_waste)/100; 
	  var diarybased = (diary1*cal_waste)/100;
	  var plantbased = (plant1*cal_waste)/100;	//Food.V18*Food.W17
	  //----------------------------------------------------------------------------------------------------------------
	  //CALCOLO IL VALORE PER LE SOMME DI FOOD:
	  //CALCOLO IL VALORE PER LE SOMME DI FOOD CF INTERNAL:
	  //PLANT:
	  //------------------------------------------------------------------------------------------------------------------
	  var plantbasedA = plantbased*(1-fip);
	  var plantbasedB = ((YeldCF+Mulch)*Rainfed)+Deficit;

	    var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
	     //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
	    if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
	  	  var plantbasedC = RA_CF_Plant*(1-0);	
	   	  
	    } 
	    else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
	  	  var plantbasedC = RA_CF_Plant*(1-0);	
	   	  
	    }
	    else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) {
	  	  var plantbasedC = RA_CF_Plant*(1-0);	
	   	  
	    } 
	    else {
	  var plantbasedC = RA_CF_Plant*(1-0);
	    }
	  var plant_cf = (plantbasedA*plantbasedC);

	  //------------------------------------------------------------------------------------------------------------------
	  //MEAT:	
	  var meatbasedA = meatbased*(1-fim);
	  var meatbasedB = ((YeldCF+Mulch)*Rainfed)+Deficit;
	  //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
	  var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
	  if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
	  	var meatbasedC = RA_CF_Meat*(1-0);  

	  }    
	  else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) {
	  	var meatbasedC = (RA_CF_Meat)*(1-0);
	  	  
	  }
	  else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) {
	  	var meatbasedC = (RA_CF_Meat)*(1-0);

	  	  
	  }
	  	  
	  else {
	  	var meatbasedC = (RA_CF_Meat)*(1-meatbasedB);
	  }

	  //meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
	  var meat_cf = (meatbasedA)*(meatbasedC);

	  //---------------------------------------------------------------------------------------------------------------------
	  //DIARY:
	  var diaryA = (diarybased)*(1-fid);
	  var diaryB = ((YeldCF+Mulch)*Rainfed)+Deficit;
	  //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
	  var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
	  if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
	  	var diaryC = (RA_CF_Diary)*(1-0);	
	  	}
	  else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) {
	  	var diaryC = (RA_CF_Diary)*(1-0);
	  	}
	  else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) {
	  	var diaryC = (RA_CF_Diary)*(1-0);
	  	}
	  else {
	  	var diaryC = (RA_CF_Diary)*(1-0);
	  }
	  var diary_cf = (diaryA)*(diaryC);

	  //---------------------------------------------------------------------------------------------------------------------
	  var add1 = (plant_cf)+(meat_cf);
	  var dataCF_food_int = (add1)+(diary_cf);
	  console.log("VALORE FOOD INT CF TOTAL = Food.K21: "+dataCF_food_int);
	  //---------------------------------------------------------------------------------------------------------------------
	  //CALCOLO IL VALORE PER LE SOMME DI FOOD CF EXTERNAL:
	  var plantres_cf_e = (plantbased)*(fip);
	  var plantres_cf_ext = (plantres_cf_e)*(WORLD_plant_cf_FoodY11);
	  var meatres_cf_e = (meatbased*fim);
	  var meatres_cf_ext = (meatres_cf_e)*(WORLD_meat_cf_FoodY12);
	  var diaryres_cf_e = (diarybased*fid);
	  var diaryres_cf_ext = (diaryres_cf_e)*(WORLD_diary_cf_FoodY13);
	  	  
	  var dataCF_food_ext = (plantres_cf_ext+meatres_cf_ext+diaryres_cf_ext);
	  console.log("VALORE FOOD EXT CF TOTAL = Food.O21 : "+dataCF_food_ext);


	  //----------------------------------------------------------------------------------------------------------------------

	  //console.log("==========INIZIO ENERGY CF============");	  
	  //////////////////// CALCOLO ENERGY ///////////////////////////////
	  var red_ind_parse = parseFloat(document.getElementById("e_N5").value)/100;
	  var red_tr_parse = parseFloat(document.getElementById("e_N6").value)/100;
	  var red_ser_parse =parseFloat(document.getElementById("e_N7").value)/100;
	  var red_house = parseFloat(document.getElementById("e_N8").value)/100;
	  var el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
	  var fuel_house_parse = parseFloat(document.getElementById("e_N12").value)/100;  
	  var bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
	  var fossilf_parse = parseFloat(document.getElementById("L30").value)/100;
	  var biofuels_parse = parseFloat(document.getElementById("L31").value)/100;
	  var elec_parse = parseFloat(document.getElementById("L32").value)/100;
	  //---------------------------------------------------------------------------------------------------
	  //CONSUMPTION REGION A - VALORI FISSI
	  var fossil_ind = 37.3;
	  var bio_ind = 5.8;
	  var el_ind = 16.4;
	  	  	  
	  var fossil_tr = 71.6;
	  var bio_tr = 2.7;
	  var el_tr = 1.1;
	  	  	  
	  var fossil_s = 13.8;
	  var bio_s = 2.5;
	  var el_s = 16.8;
	  	  	  
	  var fossil_house = 27.8;
	  var bio_house = 6.4;
	  var el_house = 14.8;
	  //----------------------------------------------------------------------------------------------------
	  var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
	  var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
	  var somma_valori_s = (fossil_s+bio_s+el_s);
	  var somma_valori_house = (fossil_house+bio_house+el_house);
	  //----------------------------------------------------------------------------------------------------
	  var A6a = (1-red_ind_parse)*(somma_valori_ind);
	  var A6aa = (1-red_ind_parse)*el_ind;
	  var A6b = (A6a) - (A6aa);
	  		  	
	  var B6a = (1-red_tr_parse)*(1-(el_tr_parse*(1-0.7/2.3)))*(somma_valori_tr);
	  var B6b = (el_tr_parse)*(B6a);

	  var C6a = (1-red_ser_parse)*(somma_valori_s);
	  var C6b = (1-red_ind_parse)*(el_s);

	  var e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
	  var D6a = ((1-red_house)*(somma_valori_house))-(e_h);
	  //----------------------------------------------------------------------------------------------------
	  //calcolo valori iniziali di FOSSIL USER: industry -transport -services -households
	  var f_i_primaop = (A6a)-(A6b);
	  var f_i = (1-bio_fr_parse)*(A6b);
	  var f_t = (1-bio_fr_parse)*(B6a-B6b);
	  var f_s = (1-bio_fr_parse)*(C6a-C6b);
	  var f_h = (1-bio_fr_parse)*(D6a);
	  	  	  
	  var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
	  var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);
	  console.log("f_i:"+f_i+"f_s:"+f_s+"f_t:"+f_t+"f_h:"+f_h+"FOSSIL TOTAL = : "+total_fossil_user);

	  var energy_fossil_val = (total_fossil_user)*(1-fossilf_parse);

	  var fossil_final_cf = (energy_fossil_val)*((RA_CF_Fossil)*0.25)/1000;
	  //console.log("FOSSIL CF INT = EnergyJ34 (ok)= "+fossil_final_cf);

	  //-----------------------------------------------------------------------------------------------------
	  //calcolo valori iniziali di BIOFUEL USER:	  
	  var bio_i_primaop = (A6a)-(A6b);
	  var b_i = (bio_fr_parse)*(A6b);
	  var b_t = (bio_fr_parse)*(B6a-B6b);
	  var b_s = (bio_fr_parse)*(C6a-C6b);
	  var b_h = (bio_fr_parse)*(D6a);

	  var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
	  //console.log("b_i:"+b_i+"b_s:"+b_s+"b_t:"+b_t+"b_h:"+b_h+"BIO TOTAL = : "+total_bio_user);
	  var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
	  var bio_final_cf = (energy_bio_val)*((RA_CF_Biofuel*0.27))/1000;
	  //console.log("BIO CF INT = EnergyJ35 (ok) =  "+bio_final_cf);

	  //-----------------------------------------------------------------------------------------------------
	  var e_i = (1-(red_ind_parse))*el_ind;
	  var e_t = (el_tr_parse)*(A6a);
	  var e_s = (1-((red_ind_parse)*(el_s)))*100;
	  e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
	  		  	
	  var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
	  var energy_elec_val = (total_el_user)*((1-(elec_parse)));

	  //console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);
	  var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
	  if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
	  	var elec1= (PER_B_Wind)*(RA_CF_Wind);
	  	//console.log("SOMMA ELEC1: "+elec1);
	  	var elec2 =(PER_B_Solar)*(RA_CF_Solar);
	  	var elec3 =(PER_B_Hydro)*(RA_CF_Hydro);
	  	var elec4 =(PER_B_Biofuel)*(RA_CF_Biofuel);
	  	var elec5 =(PER_B_Nuclear)*(RA_CF_Nuclear);
	  	var elec6 =(PER_B_Fossil)*(RA_CF_Fossil); 	
	  }
	  else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
	  	var elec1= (PER_C_Wind)*(RA_CF_Wind);
	  	//console.log("SOMMA ELEC1: "+elec1);
	  	var elec2 =(PER_C_Solar)*(RA_CF_Solar);
	  	var elec3 =(PER_C_Hydro)*(RA_CF_Hydro);
	  	var elec4 =(PER_C_Biofuel)*(RA_CF_Biofuel);
	  	var elec5 =(PER_C_Nuclear)*(RA_CF_Nuclear);
	  	var elec6 =(PER_C_Fossil)*(RA_CF_Fossil); 	
	  }
	  else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
	  	var elec1= (PER_D_Wind)*(RA_CF_Wind);
	  	//console.log("SOMMA ELEC1: "+elec1);
	  	var elec2 =(PER_D_Solar)*(RA_CF_Solar);
	  	var elec3 =(PER_D_Hydro)*(RA_CF_Hydro);
	  	var elec4 =(PER_D_Biofuel)*(RA_CF_Biofuel);
	  	var elec5 =(PER_D_Nuclear)*(RA_CF_Nuclear);
	  	var elec6 =(PER_D_Fossil)*(RA_CF_Fossil); 	
	  } else {
	  var elec1= (PER_A_Wind)*(RA_CF_Wind);
	  //console.log("SOMMA ELEC1: "+elec1);
	  var elec2 =(PER_A_Solar)*(RA_CF_Solar);
	  var elec3 =(PER_A_Hydro)*(RA_CF_Hydro);
	  var elec4 =(PER_A_Biofuel)*(RA_CF_Biofuel);
	  var elec5 =(PER_A_Nuclear)*(RA_CF_Nuclear);
	  var elec6 =(PER_A_Fossil)*(RA_CF_Fossil); 	
	  }
	  var elec1add = (elec1)+(elec2);
	  var elec2add = (elec3)+(elec4);
	  var elec3add = (elec5)+(elec6);

	  var electricity_sum = (elec1add)+(elec2add)+(elec3add);

	  var elec_final_cf = (energy_elec_val)*(electricity_sum)/1000;
	  //-----------------------------------------------------------------------------------------------
	  var datoCFen_internal = elec_final_cf+bio_final_cf+fossil_final_cf;
	  //-----------------------------------------------------------------------------------------------

	  var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(RC_D_CF_Fossil*0.25)/1000;
	  var bio_final_cf_ext= total_bio_user*(biofuels_parse)*(RC_D_CF_Biofuel*0.27)/1000;
	  var elec_final_cf_ext = (energy_elec_val)*(elec_parse)/1000;
	  //----------------------------------------------------------------------------------------------
	  var datoCFen_external = elec_final_cf_ext+bio_final_cf_ext+fossil_final_cf_ext;

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////	
	  	  

		
var sumEnFood = Math.round(parseInt(Number(dataCF_food_int)+Number(datoCFen_internal)));
	  
	  var datiaggbar = [sumEnFood,0,0,0,0,0];
	
	  horizontalChart.data.datasets[0].data[0] = datiaggbar;
	 // barChartSottouno.data.datasets[1].data = datiaggbar2;
	  horizontalChart.update();



}


  var myVarbsottouno = setInterval(aggiornabarSottouno, 3000);
  

  
  
//Bar Chart-Sotto2
  // ------------------------------------------

  // -------------------------------------

  // Get the context of the Chart canvas element we want to select
  var horizontalChartctx2 = $("#bar-chart-sotto-due");

  var horizontalchartOptions2 = {
		    // Elements options apply to all of the options unless overridden in a dataset
		    // In this case, we are setting the border of each horizontal bar to be 2px wide
		    elements: {
		      rectangle: {
		        borderWidth: 2,
		        borderSkipped: 'right',
		        borderSkipped: 'top',
		      }
		    },
		    responsive: true,
		    maintainAspectRatio: false,
		    responsiveAnimationDuration: 500,
		    legend: {
		      display: false,
		    },
		    scales: {
		      xAxes: [{
		        display: true,
		        stacked: true,
		        gridLines: {
		          color: grid_line_color,
		        },
		        scaleLabel: {
		          display: true,
		        }
		      }],
		      yAxes: [{
		        display: true,
stacked: true,
		        gridLines: {
		          color: grid_line_color,
		        },
		        scaleLabel: {
		          display: true,
		        }
		      }]
		    },
		    title: {
		      display: true,
		      text: ''
		    },
		    annotation: {
		    	events: ['mouseover', 'mouseout'],
		        annotations: [
		          {
		        	    drawTime: "afterDatasetsDraw",
		                id: "hline2",
		                type: "line",
		                mode: "horizontal",
		                scaleID: "y-axis-0",
		                value: "10",
		                borderColor: "yellow",
		                borderWidth: 3,
		                label: {
		                  backgroundColor: "yellow",
		                  content: "sustainable limit: 10",
		                  enabled: false
		                },
		                onMouseover: function(e) {
		    				var element = this;
		    				element.options.borderWidth = 5;
		    				element.options.label.enabled = true;
		    				element.options.label.backgroundColor = "black";
		    				element.options.label.content = "sustainable limit: 10";
		    				element.chartInstance.update();
		    				element.chartInstance.chart.canvas.style.cursor = 'pointer';
		    			},
		    			onMouseout: function(e) {
							var element = this;
							element.options.borderWidth = 3;
							element.options.label.enabled = true;
							element.options.label.content = false;
							element.chartInstance.update();
							setTimeout(function() {
								element.options.label.enabled = false;
								element.chartInstance.update();
							}, 500);
		    			}
		          },
		          {
		        	    drawTime: "afterDatasetsDraw",
		                id: "hline2_2",
		                type: "line",
		                mode: "horizontal",
		                scaleID: "y-axis-0",
		                value: "21",
		                borderColor: "red",
		                borderWidth: 3,
		                label: {
		                  backgroundColor: "red",
		                  content: "phisical limit: 21",
		                  enabled: false
		                },
		                onMouseover: function(e) {
		    				var element = this;
		    				element.options.borderWidth = 5;
		    				element.options.label.enabled = true;
		    				element.options.label.content = "phisical limit: 21";
		    				element.chartInstance.update();
		    				element.chartInstance.chart.canvas.style.cursor = 'pointer';
		    			},
		    			onMouseout: function(e) {
							var element = this;
							element.options.borderWidth = 3;
							element.options.label.enabled = true;						
							element.options.label.content = false;
							element.chartInstance.update();
							setTimeout(function() {
								element.options.label.enabled = false;
								element.chartInstance.update();
							}, 500);
		    			}
		            }
		          ]
		    },
		    
		  };

		  // Chart Data
		  var horizontalchartData2 = {
		    //labels: ["Local", "B", "C", "D", "EU", "WORLD"],
		    datasets: [{
		      label: "Base Value",
		      data: [17,0,0,0,0,3],
		      backgroundColor: themeColors,
		      borderColor: "transparent"
		    },
		 /*   {
			      label: ["Sustainable Limit"],
			      data: [sustainable_limit_LF],
			      backgroundColor: giallo,
			      borderColor: "transparent"
			    },
			    {
				      label: ["Phisical Limit"],
				      data: [phisical_limit_LF],
				      backgroundColor: rosso,
				      borderColor: "transparent"
				    }*/]
		  };

		  var horizontalChartconfig2 = {
		    type: 'bar',

		    // Chart Options
		    options: horizontalchartOptions2,

		    data: horizontalchartData2
		  };

		  // Create the chart
		  var horizontalChart2 = new Chart(horizontalChartctx2, horizontalChartconfig2);
  
 
  var days = document.getElementById("A8_f").value;
  var daysp = parseInt(days); 
  
 
	  function aggiornabarSottod() {	 
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
		  var fip = parseFloat(document.getElementById("E30").value)/100;
		  var fim = parseFloat(document.getElementById("E31").value)/100;
		  var fid = parseFloat(document.getElementById("E32").value)/100;
		  //----------------------------------------------------------------------------------
		  var Gap_Yeld_parse = parseFloat(document.getElementById("G14").value)/100;
		  var Mulching_parse = parseFloat(document.getElementById("G15").value)/100; 	
//		  	//console.log("MULCHING PARSE: "+Mulching_parse);
		  var Full_Deficit_parse = parseFloat(document.getElementById("G19").value)/100;
		  //----------------------------------------------------------------------------------
		  var days = parseFloat(document.getElementById("A8_f").value);
		  //------------------------------------------------------------------------------------
		  var windp = parseFloat(document.getElementById("em_J21").value);
		  var solarp = parseFloat(document.getElementById("em_J22").value);
		  var hydrop = parseFloat(document.getElementById("em_J23").value);
		  var biofuelp = parseFloat(document.getElementById("em_J24").value);
		  var nuclearp = parseFloat(document.getElementById("em_J25").value);
		  var fuelp = parseFloat(document.getElementById("em_J26").value);
		  //----------------------------------------------------------------------------------------------------------------
		  //Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
		  //calcolo i valori per PLANT BASED:
		  var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
		  //calcolo i valori per MEAT & FISH:
		  var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;	 
		  //calcolo i valori per DIARY & EGGS:
		  var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
		  //----------------------------------------------------------------------------------------------------------------
		  //calcolo WASTE:
		  var waste_val = (wasteparse*intakeparse)/100;
		  //CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
		  //OTTENGO LA PERCENTUALE BASE (% * calorie+waste)
		  var cal_waste = waste_val+intakeparse;
		  //----------------------------------------------------------------------------------------------------------------

		  var YeldLF = Gap_Yeld_parse*YG_closing_LF;
		  var Mulch = Mulching_parse*Mulching_LF;
		  console.log("YelfLF: "+YeldLF+" Mulch: "+Mulch+" Totale RelationsAK47: "+((YeldLF+Mulch)*Rainfed));
		  var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_LF;
		  // //console.log("WASTECAL+PERCENT ok: "+cal_waste);
		  // //console.log("PLANT SUM PERCENT: "+plant1);
		  // //console.log("MULCH: "+Mulch);
		  // //console.log("Deficit: "+Deficit);
		  //----------------------------------------------------------------------------------------------------------------
		  var meatbased = (meat1*cal_waste)/100;
		  var diarybased = (diary1*cal_waste)/100;
		  var plantbased = (plant1*cal_waste)/100;
		  //----------------------------------------------------------------------------------------------------------------
		  //CALCOLO IL VALORE PER LE SOMME DI FOOD:
		  //CALCOLO IL VALORE PER LE SOMME DI FOOD LF INTERNAL:
		  //PLANT:
		  var plantbasedA = plantbased*(1-fip);
		  var plantbasedB = ((YeldLF+Mulch)*Rainfed)+Deficit;
		  var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
		  //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
		  if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
		  var plantbasedC = RB_LF_Plant*(1-0);	
		  console.log(plantbasedC);
		  }
		  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
		  	var plantbasedC = RC_LF_Plant*(1-0);
		  } 
		  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
		  	var plantbasedC = RD_LF_Plant*(1-0);	
		  	
		  	} else { 
		  		var plantbasedC = RA_LF_Plant*(1-0);	
		  	}

		  var plant_lf = (plantbasedA*plantbasedC);

		  //------------------------------------------------------------------------------------------------------------------
		  //MEAT:	
		  var meatbasedA = meatbased*(1-fim); 
		  var meatbasedB = ((YeldLF+Mulch)*Rainfed)+Deficit;
		  //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
		  var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
		  if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
		  	var meatbasedC = (RB_LF_Meat)*(1-0);
		  } 
		  else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) { 
		  	var meatbasedC = (RC_LF_Meat)*(1-0);
		  }
		  else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) { 
		  	var meatbasedC = (RD_LF_Meat)*(1-0);
		  } else {
		  	var meatbasedC = (RA_LF_Meat)*(1-0);
		  }
		  var meat_lf = (meatbasedA)*(meatbasedC);
		  //---------------------------------------------------------------------------------------------------------------------
		  //DIARY:
		  var diaryA = (diarybased)*(1-fid); 
		  var diaryB = ((YeldLF+Mulch)*Rainfed)+Deficit;
		  //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
		  var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
		  if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) 
		  { 
		  	var diaryC = (RB_LF_Diary)*(1-0);
		  	console.log(diaryC);
		  	}
		  else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) 
		  { 
		  	var diaryC = (RC_LF_Diary)*(1-0);
		  	console.log(diaryC);
		  	}
		  else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) { 
		  	var diaryC = (RD_LF_Diary)*(1-0);
		  	console.log(diaryC);
		  	}
		  else {
		  	var diaryC = (RA_LF_Diary)*(1-0);
		  	}


		  var diary_lf = (diaryA)*(diaryC);	 
		  ////console.log("DIARY 1(PERCENTUALONE): "+diary1);
		  console.log("DIARY LF TOTAL = Food.J20: "+diary_lf);
		  //---------------------------------------------------------------------------------------------------------------------
		  var dataLF_food_int = (plant_lf+meat_lf+diary_lf);
		  console.log("VALORE FOOD INT LF TOTAL = Food.J21: "+dataLF_food_int);
		  //---------------------------------------------------------------------------------------------------------------------
		  //CALCOLO IL VALORE PER LE SOMME DI FOOD LF EXTERNAL:

		  var plantres_lf_e = (plantbased)*(fip);
		  var plantres_lf_ext = (plantres_lf_e)*(WORLD_plant_lf_FoodX11);
		  console.log("PLANT EXT = Food.N18: "+plantres_lf_ext);	
		  var meatres_lf_e = (meatbased*fim);
		  var meatres_lf_ext = (meatres_lf_e)*(WORLD_meat_lf_FoodX12);
		  console.log("MEAT EXT = Food.N19: "+meatres_lf_ext);	
		  var diaryres_lf_e = (diarybased*fid);
		  var diaryres_lf_ext = (diaryres_lf_e)*(WORLD_diary_lf_FoodX13);
		  console.log("DIARY EXT = Food.N20: "+diaryres_lf_ext);	
		  	  
		  var dataLF_food_ext = (plantres_lf_ext+meatres_lf_ext+diaryres_lf_ext);
		  console.log("VALORE FOOD EXT LF TOTAL = Food.N21 : "+dataLF_food_ext);
		  //console.log("==============FINE FOOD LF=======================");


		  //----------------------------------------------------------------------------------------------------------------------

		  //console.log("==========INIZIO ENERGY LF============");	  
		  //////////////////// CALCOLO ENERGY ///////////////////////////////
		  var red_ind_parse = parseFloat(document.getElementById("e_N5").value)/100;
		  var red_tr_parse = parseFloat(document.getElementById("e_N6").value)/100;
		  var red_ser_parse =parseFloat(document.getElementById("e_N7").value)/100;
		  var red_house = parseFloat(document.getElementById("e_N8").value)/100;
		  var el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
		  var fuel_house_parse = parseFloat(document.getElementById("e_N12").value)/100;  
		  var bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
		  var fossilf_parse = parseFloat(document.getElementById("L30").value)/100;
		  var biofuels_parse = parseFloat(document.getElementById("L31").value)/100;
		  var elec_parse = parseFloat(document.getElementById("L32").value)/100;
		  //---------------------------------------------------------------------------------------------------
		  //CONSUMPTION REGION A - VALORI FISSI
		  var fossil_ind = 37.3;
		  var bio_ind = 5.8;
		  var el_ind = 16.4;
		  	  	  
		  var fossil_tr = 71.6;
		  var bio_tr = 2.7;
		  var el_tr = 1.1;
		  	  	  
		  var fossil_s = 13.8;
		  var bio_s = 2.5;
		  var el_s = 16.8;
		  	  	  
		  var fossil_house = 27.8;
		  var bio_house = 6.4;
		  var el_house = 14.8;
		  //----------------------------------------------------------------------------------------------------
		  var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
		  var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
		  var somma_valori_s = (fossil_s+bio_s+el_s);
		  var somma_valori_house = (fossil_house+bio_house+el_house);
		  //----------------------------------------------------------------------------------------------------
		  var A6a = (1-red_ind_parse)*(somma_valori_ind); 
		  var A6aa = (1-red_ind_parse)*el_ind;
		  var A6b = (A6a) - (A6aa);
		  		  	
		  var B6a = (1-red_tr_parse)*(1-(el_tr_parse*(1-0.7/2.3)))*(somma_valori_tr);
		  var B6b = (el_tr_parse)*(B6a);

		  var C6a = (1-red_ser_parse)*(somma_valori_s);
		  var C6b = (1-red_ind_parse)*(el_s);
		  		  	
		  var e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
		  var D6a = ((1-red_house)*(somma_valori_house))-(e_h);
		  //----------------------------------------------------------------------------------------------------
		  //calcolo valori iniziali di FOSSIL USER: industry -transport -services -households
		  var f_i_primaop = (A6a)-(A6b);
		  var f_i = (1-bio_fr_parse)*(A6b);
		  var f_t = (1-bio_fr_parse)*(B6a-B6b);
		  var f_s = (1-bio_fr_parse)*(C6a-C6b);
		  var f_h = (1-bio_fr_parse)*(D6a);
		  	  	  
		  var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
		  var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);

		  var energy_fossil_val = (total_fossil_user)*(1-fossilf_parse);
		  var fossil_final_lf = (energy_fossil_val)*((RA_LF_Fossil)*0.25)/1000;
		  console.log("FOSSIL LF INT = EnergyI34 (ok)= "+fossil_final_lf);

		  //-----------------------------------------------------------------------------------------------------
		  //calcolo valori iniziali di BIOFUEL USER:	  
		  var bio_i_primaop = (A6a)-(A6b);
		  var b_i = (bio_fr_parse)*(A6b);
		  var b_t = (bio_fr_parse)*(B6a-B6b);
		  var b_s = (bio_fr_parse)*(C6a-C6b);
		  var b_h = (bio_fr_parse)*(D6a);

		  var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
		  var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
		  var bio_final_lf = (energy_bio_val)*((RA_LF_Biofuel*0.27))/1000;
		  console.log("BIO LF INT = EnergyI35 (ok) =  "+bio_final_lf);

		  //-----------------------------------------------------------------------------------------------------
		  var e_i = (1-(red_ind_parse))*el_ind;
		  var e_t = (el_tr_parse)*(A6a);
		  var e_s = (1-((red_ind_parse)*(el_s)))*100;
		  e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
		  		  	
		  var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
		  var energy_elec_val = (total_el_user)*((1-(elec_parse)));

		  //console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);
		  var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
		  if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
		  	var elec1= (PER_B_Wind)*(RB_LF_Wind);
		  	//console.log("SOMMA ELEC1: "+elec1);
		  	var elec2 =(PER_B_Solar)*(RB_LF_Solar);
		  	var elec3 =(PER_B_Hydro)*(RB_LF_Hydro);
		  	var elec4 =(PER_B_Biofuel)*(RB_LF_Biofuel);
		  	var elec5 =(PER_B_Nuclear)*(RB_LF_Nuclear);
		  	var elec6 =(PER_B_Fossil)*(RB_LF_Fossil); 	
		  }   
		  if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
		  	var elec1= (PER_B_Wind)*(RC_D_LF_Wind);
		  	//console.log("SOMMA ELEC1: "+elec1);
		  	var elec2 =(PER_C_Solar)*(RC_D_LF_Solar);
		  	var elec3 =(PER_C_Hydro)*(RC_D_LF_Hydro);
		  	var elec4 =(PER_C_Biofuel)*(RC_D_LF_Biofuel);
		  	var elec5 =(PER_C_Nuclear)*(RC_D_LF_Nuclear);
		  	var elec6 =(PER_C_Fossil)*(RC_D_LF_Fossil); 	
		  }   
		  if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
		  	var elec1= (PER_B_Wind)*(RC_D_LF_Wind);
		  	//console.log("SOMMA ELEC1: "+elec1);
		  	var elec2 =(PER_D_Solar)*(RC_D_LF_Solar);
		  	var elec3 =(PER_D_Hydro)*(RC_D_LF_Hydro);
		  	var elec4 =(PER_D_Biofuel)*(RC_D_LF_Biofuel);
		  	var elec5 =(PER_D_Nuclear)*(RC_D_LF_Nuclear);
		  	var elec6 =(PER_D_Fossil)*(RC_D_LF_Fossil); 	
		  	}   
		  else {

		  var elec1= (PER_A_Wind)*(RA_LF_Wind);
		  //console.log("SOMMA ELEC1: "+elec1);
		  var elec2 =(PER_A_Solar)*(RA_LF_Solar);
		  var elec3 =(PER_A_Hydro)*(RA_LF_Hydro);
		  var elec4 =(PER_A_Biofuel)*(RA_LF_Biofuel);
		  var elec5 =(PER_A_Nuclear)*(RA_LF_Nuclear);
		  var elec6 =(PER_A_Fossil)*(RA_LF_Fossil); 	
		  }

		  var elec1add = (elec1)+(elec2);
		  var elec2add = (elec3)+(elec4);
		  var elec3add = (elec5)+(elec6);

		  var electricity_sum = (elec1add)+(elec2add)+(elec3add);

		  var elec_final_lf = (energy_elec_val)*(electricity_sum)/1000;
		  console.log("ELECTRICITY LF INT = Energy.I36 (ok) = : "+elec_final_lf);
		  //-----------------------------------------------------------------------------------------------
		  var datoLFen_internal = elec_final_lf+bio_final_lf+fossil_final_lf;
		  console.log("TOT LF ENERGY INTERNAL = Energy.I37 (ok): "+datoLFen_internal);
		  //-----------------------------------------------------------------------------------------------
		  var checkRadioFossil= document.querySelector('input[name="checkbuttonsfossil"]:checked');
		  if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) { 
		  	var fossil_final_lf = (energy_fossil_val)*((RB_LF_Fossil)*0.25)/1000;
		  }
		  if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) { 
		  	var fossil_final_lf = (energy_fossil_val)*((RC_D_LF_Fossil)*0.25)/1000;
		  }
		  if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) { 
		  	var fossil_final_lf = (energy_fossil_val)*((RC_D_LF_Fossil)*0.25)/1000;
		  }
		  else {
			  	var fossil_final_lf = (energy_fossil_val)*((RA_LF_Fossil)*0.25)/1000;
		  }

		  var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
		  if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
		  	var bio_final_lf = (energy_bio_val)*((RB_LF_Biofuel*0.27))/1000;
		  }
		  else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) {
		  	var bio_final_lf = (energy_bio_val)*((RC_D_LF_Biofuel*0.27))/1000;
		  }
		  else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) {
		  	var bio_final_lf = (energy_bio_val)*((RC_D_LF_Biofuel*0.27))/1000;
		  }
		  else {
			  	var bio_final_lf = (energy_bio_val)*((RA_LF_Biofuel*0.27))/1000;

		  }
		  
		  	var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(RC_D_LF_Fossil*0.25)/1000;	
		  	var bio_final_lf_ext= total_bio_user*(biofuels_parse)*(RC_D_LF_Biofuel*0.27)/1000;
		  var elec_final_lf_ext = (energy_elec_val)*(elec_parse)/1000;
		  //----------------------------------------------------------------------------------------------
		  var datoLFen_external = elec_final_lf_ext+bio_final_lf_ext+fossil_final_lf_ext;
		  //----------------------------------------------------------------------------------------------  	

		  //////////////////////////////////////////////////////////////////
		  /////////////////////////////////////////////////////////////////	   

//var sumLFfooden = Math.round(parseInt(Number(dataLF_food_int)+Number(datoLFen_internal)));
		  var sumLFfooden = Math.round(dataLF_food_int+datoLFen_internal);
		  
		  var datiaggbar = [sumLFfooden,0,0,0,0,3];
		//  var datiaggbar2 = [0,0];
		
		  horizontalChart2.data.datasets[0].data[0] = datiaggbar;
		//  barChartSottod.data.datasets[1].data = datiaggbar2;
		  horizontalChart2.update();

	  }
 
    
	  var myVarbSottod = setInterval(aggiornabarSottod, 3000);
  // Create the chart
  
  
  
//Bar Chart-3
  // ------------------------------------------
	  var horizontalChartctx3 = $("#bar-chart-sottotre");
	  var horizontalchartOptions3 = {
			    // Elements options apply to all of the options unless overridden in a dataset
			    // In this case, we are setting the border of each horizontal bar to be 2px wide
			    elements: {
			      rectangle: {
			        borderWidth: 2,
			        borderSkipped: 'right',
			        borderSkipped: 'top',
			      }
			    },
			    responsive: true,
			    maintainAspectRatio: false,
			    responsiveAnimationDuration: 500,
			    legend: {
			      display: false,
			    },
			    scales: {
			      xAxes: [{
			        display: true,
			        stacked: true,
			        gridLines: {
			          color: grid_line_color,
			        },
			        scaleLabel: {
			          display: true,
			        }
			      }],
			      yAxes: [{
			        display: true,
	stacked: true,
			        gridLines: {
			          color: grid_line_color,
			        },
			        scaleLabel: {
			          display: true,
			        }
			      }]
			    },
			    title: {
			      display: true,
			      text: ''
			    },
			    annotation: {
			    	events: ['mouseover', 'mouseout'],
			        annotations: [
			          {
			        	    drawTime: "afterDatasetsDraw",
			                id: "hline3",
			                type: "line",
			                mode: "horizontal",
			                scaleID: "y-axis-0",
			                value: "8834",
			                borderColor: "red",
			                borderWidth: 3,
			                label: {
			                  backgroundColor: "red",
			                  content: "phisical limit",
			                  enabled: false
			                },
			                onMouseover: function(e) {
			    				var element = this;
			    				element.options.borderWidth = 5;
			    				element.options.label.enabled = true;
			    				element.options.label.content = "phisical limit: 8834";
			    				element.chartInstance.update();
			    				element.chartInstance.chart.canvas.style.cursor = 'pointer';
			    			},
			    			onMouseout: function(e) {
								var element = this;
								element.options.borderWidth = 3;
								element.options.label.enabled = true;
								element.options.label.content = false;								
								element.chartInstance.update();
								setTimeout(function() {
									element.options.label.enabled = false;
									element.chartInstance.update();
								}, 500);
			    			}
			           
			          },
			          {
			        	    drawTime: "afterDatasetsDraw",
			                id: "hline3_2",
			                type: "line",
			                mode: "horizontal",
			                scaleID: "y-axis-0",
			                value: "3533",
			                borderColor: "yellow",
			                borderWidth: 3,
			                label: {
			                  backgroundColor: "yellow",
			                  content: "sustainable limit",
			                  enabled: false
			                },
			                onMouseover: function(e) {
			    				var element = this;
			    				element.options.borderWidth = 5;
			    				element.options.label.enabled = true;
			    				element.options.label.backgroundColor = "black";
			    				element.options.label.content = "sustainable limit: 3533";
			    				element.chartInstance.update();
			    				element.chartInstance.chart.canvas.style.cursor = 'pointer';
			    			},
			    			onMouseout: function(e) {
								var element = this;
								element.options.borderWidth = 3;
								element.options.label.enabled = true;
								element.options.label.content = false;							
								element.chartInstance.update();
								setTimeout(function() {
									element.options.label.enabled = false;
									element.chartInstance.update();
								}, 500);
			    			}
			              
			            }
			          ]
			    } 
			    
			  };

			  // Chart Data
			  var horizontalchartData3 = {
			   // labels: ["Local", "B", "C", "D", "EU", "WORLD"],
			    datasets: [{
			      label: "Base Value",
			      data: [4662,0,0,0,0,760],
			      backgroundColor: themeColors,
			      borderColor: "transparent"
			    },
			 /*   {
				      label: ["Sustainable Limit"],
				      data: [sustainable_limit_wfgreen],
				      backgroundColor: giallo,
				      borderColor: "transparent"
				    },
				    {
					      label: ["Phisical Limit"],
					      data: [phisical_limit_wfgreen],
					      backgroundColor: rosso,
					      borderColor: "transparent"
					    }*/]
			  };

			  var horizontalChartconfig3 = {
			    type: 'bar',

			    // Chart Options
			    options: horizontalchartOptions3,

			    data: horizontalchartData3
			  };

			  // Create the chart
			  var horizontalChart3 = new Chart(horizontalChartctx3, horizontalChartconfig3);
  
  var days = document.getElementById("A8_f").value;
  var daysp = parseInt(days); 
	  
   
 
	  function aggiornabarSottot() {	  
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
		  var fip = parseFloat(document.getElementById("E30").value)/100;
		  var fim = parseFloat(document.getElementById("E31").value)/100;
		  var fid = parseFloat(document.getElementById("E32").value)/100;
		  //----------------------------------------------------------------------------------
		  var Gap_Yeld_parse = parseFloat(document.getElementById("G14").value)/100;
		  var Mulching_parse = parseFloat(document.getElementById("G15").value)/100; 	
		  var Full_Deficit_parse = parseFloat(document.getElementById("G19").value)/100;
		  //----------------------------------------------------------------------------------
		  var days = parseFloat(document.getElementById("A8_f").value);
		  //------------------------------------------------------------------------------------
		  var windp = parseFloat(document.getElementById("em_J21").value);
		  var solarp = parseFloat(document.getElementById("em_J22").value);
		  var hydrop = parseFloat(document.getElementById("em_J23").value);
		  var biofuelp = parseFloat(document.getElementById("em_J24").value);
		  var nuclearp = parseFloat(document.getElementById("em_J25").value);
		  var fuelp = parseFloat(document.getElementById("em_J26").value);
		  //----------------------------------------------------------------------------------------------------------------
		  //Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
		  //calcolo i valori per PLANT BASED:
		  var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
		  //calcolo i valori per MEAT & FISH:
		  var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;	 
		  //calcolo i valori per DIARY & EGGS:
		  var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
		  //----------------------------------------------------------------------------------------------------------------
		  //calcolo WASTE:
		  var waste_val = (wasteparse*intakeparse)/100;
		  //CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
		  //OTTENGO LA PERCENTUALE BASE (% * calorie+waste)
		  var cal_waste = waste_val+intakeparse;
		  //----------------------------------------------------------------------------------------------------------------
		  var YeldWFg = Gap_Yeld_parse*YG_closing_WFg;
		  var Mulch = Mulching_parse*Mulching_WFg;
		  var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_WFg;

		  //----------------------------------------------------------------------------------------------------------------
		  var meatbased = (meat1*cal_waste)/100;
		  var diarybased = (diary1*cal_waste)/100;
		  var plantbased = (plant1*cal_waste)/100;
		  //----------------------------------------------------------------------------------------------------------------
		  //CALCOLO IL VALORE PER LE SOMME DI FOOD:
		  //CALCOLO IL VALORE PER LE SOMME DI FOOD LF INTERNAL:
		  //PLANT:
		  var plantbasedA = plantbased*(1-fip);
		  var plantbasedB = ((YeldWFg+Mulch)*Rainfed)+Deficit;

		  //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
		  var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 

		  if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
		  var plantbasedC = RB_WFgreen_Plant*(1-0);
		  } 
		  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
		      var plantbasedC = RC_WFgreen_Plant*(1-0);
		  }
		  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
		  	var plantbasedC = RD_WFgreen_Plant*(1-0);
		  }    else {
		  	var plantbasedC = RA_WFgreen_Plant*(1-plantbasedB);	
		  	
		  }	

		  var plant_WFgreen = (plantbasedA*plantbasedC);
		  //------------------------------------------------------------------------------------------------------------------
		  //MEAT:	
		  var meatbasedA = meatbased*(1-fim); 
		  var meatbasedB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
		  //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc.
		  var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
		  if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
		  	var meatbasedC = (RB_WFgreen_Meat)*(1-0);}

		  else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) {
		  	var meatbasedC = (RC_WFgreen_Plant)*(1-0);
		  }
		  else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) {
		  	var meatbasedC = (RD_WFgreen_Plant)*(1-0);
		  	}
		  else {
		  	var meatbasedC = (RA_WFgreen_Meat)*(1-meatbasedB);
		  }

		  var meat_WFgreen = (meatbasedA)*(meatbasedC);
		  //---------------------------------------------------------------------------------------------------------------------
		  //DIARY:
		  var diaryA = (diarybased)*(1-fid); 
		  var diaryB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
		  //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
		  var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
		  if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) {
		  	var diaryC = (RB_WFgreen_Diary)*(1-0);
		  }
		  else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) {
		  	var diaryC = (RD_WFgreen_Diary)*(1-0);
		  }
		  	else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) {
		  		var diaryC = (RB_WFgreen_Diary)*(1-0);
		  	}
		   
		   	else {
		   		var diaryC = (RA_WFgreen_Diary)*(1-diaryB);
		   	}

		  var diary_WFgreen = (diaryA)*(diaryC);	 
		  //---------------------------------------------------------------------------------------------------------------------
		  var dataWFgreen_food_int = (plant_WFgreen+meat_WFgreen+diary_WFgreen);
		  //---------------------------------------------------------------------------------------------------------------------
		  //CALCOLO IL VALORE PER LE SOMME DI FOOD WFgreen EXTERNAL:
		  var plantres_WFgreen_e = (plantbased)*(fip);
		  var plantres_WFgreen_ext = (plantres_WFgreen_e)*(WORLD_plant_WFgreen_FoodV11);
		  console.log("PLANT EXT = Food.L18: "+plantres_WFgreen_ext);	
		  var meatres_WFgreen_e = (meatbased*fim);
		  var meatres_WFgreen_ext = (meatres_WFgreen_e)*(WORLD_meat_WFgreen_FoodV12);
		  console.log("MEAT EXT = Food.L19: "+meatres_WFgreen_ext);	
		  var diaryres_WFgreen_e = (diarybased*fid);
		  var diaryres_WFgreen_ext = (diaryres_WFgreen_e)*(WORLD_diary_WFgreen_FoodV13);
		  console.log("DIARY EXT = Food.L20: "+diaryres_WFgreen_ext);	
		  	  
		  var dataWFgreen_food_ext = (plantres_WFgreen_ext+meatres_WFgreen_ext+diaryres_WFgreen_ext);
	

		  //----------------------------------------------------------------------------------------------------------------------

		  //console.log("==========INIZIO ENERGY WFgreen============");	  
		  //////////////////// CALCOLO ENERGY ///////////////////////////////
		  var red_ind_parse = parseFloat(document.getElementById("e_N5").value)/100;
		  var red_tr_parse = parseFloat(document.getElementById("e_N6").value)/100;
		  var red_ser_parse =parseFloat(document.getElementById("e_N7").value)/100;
		  var red_house = parseFloat(document.getElementById("e_N8").value)/100;
		  var el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
		  var fuel_house_parse = parseFloat(document.getElementById("e_N12").value)/100;  
		  var bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
		  var fossilf_parse = parseFloat(document.getElementById("L30").value)/100;
		  var biofuels_parse = parseFloat(document.getElementById("L31").value)/100;
		  var elec_parse = parseFloat(document.getElementById("L32").value)/100;
		  //---------------------------------------------------------------------------------------------------
		  //CONSUMPTION REGION A - VALORI FISSI
		  var fossil_ind = 37.3;
		  var bio_ind = 5.8;
		  var el_ind = 16.4;
		  	  	  
		  var fossil_tr = 71.6;
		  var bio_tr = 2.7;
		  var el_tr = 1.1;
		  	  	  
		  var fossil_s = 13.8;
		  var bio_s = 2.5;
		  var el_s = 16.8;
		  	  	  
		  var fossil_house = 27.8;
		  var bio_house = 6.4;
		  var el_house = 14.8;
		  //----------------------------------------------------------------------------------------------------
		  var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
		  var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
		  var somma_valori_s = (fossil_s+bio_s+el_s);
		  var somma_valori_house = (fossil_house+bio_house+el_house);
		  //----------------------------------------------------------------------------------------------------
		  var A6a = (1-red_ind_parse)*(somma_valori_ind); 
		  var A6aa = (1-red_ind_parse)*el_ind;
		  var A6b = (A6a) - (A6aa);
		  		  	
		  var B6a = (1-red_tr_parse)*(1-(el_tr_parse*(1-0.7/2.3)))*(somma_valori_tr);
		  var B6b = (el_tr_parse)*(B6a);

		  var C6a = (1-red_ser_parse)*(somma_valori_s);
		  var C6b = (1-red_ind_parse)*(el_s);
		  		  	
		  var e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
		  var D6a = ((1-red_house)*(somma_valori_house))-(e_h);
		  //----------------------------------------------------------------------------------------------------
		  //calcolo valori iniziali di FOSSIL USER: industry -transport -services -households
		  var f_i_primaop = (A6a)-(A6b);
		  var f_i = (1-bio_fr_parse)*(A6b);
		  var f_t = (1-bio_fr_parse)*(B6a-B6b);
		  var f_s = (1-bio_fr_parse)*(C6a-C6b);
		  var f_h = (1-bio_fr_parse)*(D6a);
		  	  	  
		  var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
		  var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);

		  var energy_fossil_val = (total_fossil_user)*(1-fossilf_parse);
		  var fossil_final_WFgreen = (energy_fossil_val)*((RA_WFgreen_Fossil)*0.25)/1000;

		  //-----------------------------------------------------------------------------------------------------
		  //calcolo valori iniziali di BIOFUEL USER:	  
		  var bio_i_primaop = (A6a)-(A6b);
		  var b_i = (bio_fr_parse)*(A6b);
		  var b_t = (bio_fr_parse)*(B6a-B6b);
		  var b_s = (bio_fr_parse)*(C6a-C6b);
		  var b_h = (bio_fr_parse)*(D6a);

		  var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
		  var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
		  var bio_final_WFgreen = (energy_bio_val)*((RA_WFgreen_Biofuel*0.27))/1000;

		  //-----------------------------------------------------------------------------------------------------
		  var e_i = (1-(red_ind_parse))*el_ind;
		  var e_t = (el_tr_parse)*(A6a);
		  var e_s = (1-((red_ind_parse)*(el_s)))*100;
		  e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
		  		  	
		  var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
		  var energy_elec_val = (total_el_user)*((1-(elec_parse)));


		  var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
		  if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
		  	var elec1= (PER_B_Wind)*(RB_WFgreen_Wind);
		  	var elec2 =(PER_B_Solar)*(RB_WFgreen_Solar);
		  	var elec3 =(PER_B_Hydro)*(RB_WFgreen_Hydro);
		  	var elec4 =(PER_B_Biofuel)*(RB_WFgreen_Biofuel);
		  	var elec5 =(PER_B_Nuclear)*(RB_WFgreen_Nuclear);
		  	var elec6 =(PER_B_Fossil)*(RB_WFgreen_Fossil); 	
		  }   
		  else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
		  	var elec1= (PER_C_Wind)*(RC_D_WFgreen_Wind);
		  	var elec2 =(PER_C_Solar)*(RC_D_WFgreen_Solar);
		  	var elec3 =(PER_C_Hydro)*(RC_D_WFgreen_Hydro);
		  	var elec4 =(PER_C_Biofuel)*(RC_D_WFgreen_Biofuel);
		  	var elec5 =(PER_C_Nuclear)*(RC_D_WFgreen_Nuclear);
		  	var elec6 =(PER__Fossil)*(RC_D_WFgreen_Fossil); 	
		  }  
		  else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
		  	var elec1= (PER_B_Wind)*(RC_D_WFgreen_Wind);
		  	var elec2 =(PER_D_Solar)*(RC_D_WFgreen_Solar);
		  	var elec3 =(PER_D_Hydro)*(RC_D_WFgreen_Hydro);
		  	var elec4 =(PER_D_Biofuel)*(RC_D_WFgreen_Biofuel);
		  	var elec5 =(PER_D_Nuclear)*(RC_D_WFgreen_Nuclear);
		  	var elec6 =(PER_D_Fossil)*(RC_D_WFgreen_Fossil); 	
		  	}  
		  else {
		  var elec1= (PER_A_Wind)*(RA_WFgreen_Wind);
		  var elec2 =(PER_A_Solar)*(RA_WFgreen_Solar);
		  var elec3 =(PER_A_Hydro)*(RA_WFgreen_Hydro);
		  var elec4 =(PER_A_Biofuel)*(RA_WFgreen_Biofuel);
		  var elec5 =(PER_A_Nuclear)*(RA_WFgreen_Nuclear);
		  var elec6 =(PER_A_Fossil)*(RA_WFgreen_Fossil); 
		  }

		  var elec1add = (elec1)+(elec2);
		  var elec2add = (elec3)+(elec4);
		  var elec3add = (elec5)+(elec6);

		  var electricity_sum = (elec1add)+(elec2add)+(elec3add);

		  var elec_final_WFgreen = (energy_elec_val)*(electricity_sum)/1000;
		  //-----------------------------------------------------------------------------------------------
		  var datoWFgreen_en_internal = elec_final_WFgreen+bio_final_WFgreen+fossil_final_WFgreen;
		  //-----------------------------------------------------------------------------------------------

		  var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');
		  if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) { 
		  	var fossil_final_lf = (energy_fossil_val)*((RB_WFgreen_Fossil)*0.25)/1000;
		  }
		  else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) { 
		  	var fossil_final_lf = (energy_fossil_val)*((RC_D_WFgreen_Fossil)*0.25)/1000;
		  }
		  else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) { 
		  	var fossil_final_lf = (energy_fossil_val)*((RC_D_WFgreen_Fossil)*0.25)/1000;
		  }
		  else {
		  	var fossil_final_lf = (energy_fossil_val)*((RC_D_WFgreen_Fossil)*0.25)/1000;

		  }

		  var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
		  if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
		  	var bio_final_lf = (energy_bio_val)*((RB_WFgreen_Biofuel*0.27))/1000;
		  }
		  else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) {
		  	var bio_final_lf = (energy_bio_val)*((RC_D_WFgreen_Biofuel*0.27))/1000;
		  }
		  else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) {
		  	var bio_final_lf = (energy_bio_val)*((RC_D_WFgreen_Biofuel*0.27))/1000;
		  }
		  else {
		  	var bio_final_lf = (energy_bio_val)*((RA_WFgreen_Biofuel*0.27))/1000;

		  }


		  var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(RC_D_WFgreen_Fossil*0.25)/1000;
		  var bio_final_WFgreen_ext= total_bio_user*(biofuels_parse)*(RC_D_WFgreen_Biofuel*0.27)/1000;

		  var elec_final_WFgreen_ext = (energy_elec_val)*(elec_parse)/1000;
		  //----------------------------------------------------------------------------------------------
		  var datoWFgreen_en_external = elec_final_WFgreen_ext+bio_final_WFgreen_ext+fossil_final_WFgreen_ext;
		  //----------------------------------------------------------------------------------------------  	
		  //////////////////////////////////////////////////////////////////
		  /////////////////////////////////////////////////////////////////	

var sumWFgfooden = Math.round(parseInt(Number(dataWFgreen_food_int)+Number(datoWFgreen_en_internal)));

		  var datiaggbar = [sumWFgfooden,0,0,0,0,760];
		//  var datiaggbar2 = [0,0];
		
		  horizontalChart3.data.datasets[0].data[0] = datiaggbar;
		//  barChartSottot.data.datasets[1].data = datiaggbar2;
		  horizontalChart3.update();

	  }
 
 	  var myVarbSottot = setInterval(aggiornabarSottot, 3000);
  
  
//Bar Chart-Sotto4
  // ------------------------------------------
 	 // ------------------------------------------
	  var horizontalChartctx4 = $("#bar-chart-sottoquattro");
	  var horizontalchartOptions4 = {
			    // Elements options apply to all of the options unless overridden in a dataset
			    // In this case, we are setting the border of each horizontal bar to be 2px wide
			    elements: {
			      rectangle: {
			        borderWidth: 2,
			        borderSkipped: 'right',
			        borderSkipped: 'top',
			      }
			    },
			    responsive: true,
			    maintainAspectRatio: false,
			    responsiveAnimationDuration: 500,
			    legend: {
			      display: false,
			    },
			    scales: {
			      xAxes: [{
			        display: true,
			        stacked: true,
			        gridLines: {
			          color: grid_line_color,
			        },
			        scaleLabel: {
			          display: true,
			        }
			      }],
			      yAxes: [{
			        display: true,
	stacked: true,
			        gridLines: {
			          color: grid_line_color,
			        },
			        scaleLabel: {
			          display: true,
			        }
			      }]
			    },
			    title: {
			      display: true,
			      text: ''
			    },
			    annotation: {
			    	events: ['mouseover', 'mouseout'],
			        annotations: [
			          {
			        	    drawTime: "afterDatasetsDraw",
			                id: "hline4",
			                type: "line",
			                mode: "horizontal",
			                scaleID: "y-axis-0",
			                value: "5710",
			                borderColor: "red",
			                borderWidth: 3,
			                label: {
			                  backgroundColor: "red",
			                  content: "phisical limit",
			                  enabled: false
			                },
			                onMouseover: function(e) {
			    				var element = this;
			    				element.options.borderWidth = 5;
			    				element.options.label.enabled = true;
			    				element.options.label.content = "phisical limit: 5710";
			    				element.chartInstance.update();
			    				element.chartInstance.chart.canvas.style.cursor = 'pointer';
			    			},
			    			onMouseout: function(e) {
								var element = this;
								element.options.borderWidth = 3;
								element.options.label.enabled = true;
								element.options.label.content = false;
								element.chartInstance.update();
								setTimeout(function() {
									element.options.label.enabled = false;
									element.chartInstance.update();
								}, 500);
			    			}
			           
			          },
			          {
			        	    drawTime: "afterDatasetsDraw",
			                id: "hline4_2",
			                type: "line",
			                mode: "horizontal",
			                scaleID: "y-axis-0",
			                value: "1550",
			                borderColor: "yellow",
			                borderWidth: 3,
			                label: {
			                  backgroundColor: "yellow",
			                  content: "sustainable limit",
			                  enabled: false
			                },
			                onMouseover: function(e) {
			    				var element = this;
			    				element.options.borderWidth = 5;
			    				element.options.label.enabled = true;
			    				element.options.label.backgroundColor = "black";
			    				element.options.label.content = "sustainable limit: 1550";
			    				element.chartInstance.update();
			    				element.chartInstance.chart.canvas.style.cursor = 'pointer';
			    			},
			    			onMouseout: function(e) {
								var element = this;
								element.options.borderWidth = 3;
								element.options.label.enabled = true;
								element.options.label.content = false;						
								element.chartInstance.update();
								setTimeout(function() {
									element.options.label.enabled = false;
									element.chartInstance.update();
								}, 500);
			    			}
			              
			            }
			          ]
			    }
			  };

			  // Chart Data
			  var horizontalchartData4 = {
			  //  labels: ["Local", "B", "C", "D", "EU", "WORLD"],
			    datasets: [{
			      label: "Base Value",
			      data: [984,0,0,0,0,0],
			      backgroundColor: themeColors,
			      borderColor: "transparent"
			    },
			   /* {
				      label: ["Sustainable Limit"],
				      data: [sustainable_limit_wfblue],
				      backgroundColor: giallo,
				      borderColor: "transparent"
				    },
				    {
					      label: ["Phisical Limit"],
					      data: [phisical_limit_wfblue],
					      backgroundColor: rosso,
					      borderColor: "transparent"
					    }*/]
			  };

			  var horizontalChartconfig4 = {
			    type: 'bar',

			    // Chart Options
			    options: horizontalchartOptions4,

			    data: horizontalchartData4
			  };

			  // Create the chart
			  var horizontalChart4 = new Chart(horizontalChartctx4, horizontalChartconfig4);
  
  
  var days = document.getElementById("A8_f").value;
  var daysp = parseInt(days); 


 
	  function aggiornabarSottoq() {	  
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
		  var fip = parseFloat(document.getElementById("E30").value)/100;
		  var fim = parseFloat(document.getElementById("E31").value)/100;
		  var fid = parseFloat(document.getElementById("E32").value)/100;
		  //----------------------------------------------------------------------------------
		  var Gap_Yeld_parse = parseFloat(document.getElementById("G14").value)/100;
		  var Mulching_parse = parseFloat(document.getElementById("G15").value)/100; 	
//		  	//console.log("MULCHING PARSE: "+Mulching_parse);
		  var Full_Deficit_parse = parseFloat(document.getElementById("G19").value)/100;
		  //----------------------------------------------------------------------------------
		  var days = parseFloat(document.getElementById("A8_f").value);
		  //------------------------------------------------------------------------------------
		  var windp = parseFloat(document.getElementById("em_J21").value);
		  var solarp = parseFloat(document.getElementById("em_J22").value);
		  var hydrop = parseFloat(document.getElementById("em_J23").value);
		  var biofuelp = parseFloat(document.getElementById("em_J24").value);
		  var nuclearp = parseFloat(document.getElementById("em_J25").value);
		  var fuelp = parseFloat(document.getElementById("em_J26").value);
		  //----------------------------------------------------------------------------------------------------------------
		  //Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
		  //calcolo i valori per PLANT BASED:
		  var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
		  //calcolo i valori per MEAT & FISH:
		  var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;	 
		  //calcolo i valori per DIARY & EGGS:
		  var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
		  //----------------------------------------------------------------------------------------------------------------
		  //calcolo WASTE:
		  var waste_val = (wasteparse*intakeparse)/100;
		  //CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
		  //OTTENGO LA PERCENTUALE BASE (% * calorie+waste)
		  var cal_waste = waste_val+intakeparse;
		  //----------------------------------------------------------------------------------------------------------------

		  var YeldWFb = Gap_Yeld_parse*YG_closing_WFb;
		  var Mulch = Mulching_parse*Mulching_WFb;
		  var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_WFb;
		  // //console.log("WASTECAL+PERCENT ok: "+cal_waste);
		  // //console.log("PLANT SUM PERCENT: "+plant1);
		  // //console.log("MULCH: "+Mulch);
		  // //console.log("Deficit: "+Deficit);
		  //----------------------------------------------------------------------------------------------------------------
		  var meatbased = (meat1*cal_waste)/100;
		  var diarybased = (diary1*cal_waste)/100;
		  var plantbased = (plant1*cal_waste)/100;
		  //----------------------------------------------------------------------------------------------------------------
		  //CALCOLO IL VALORE PER LE SOMME DI FOOD:
		  //CALCOLO IL VALORE PER LE SOMME DI FOOD LF INTERNAL:
		  //PLANT:
		  var plantbasedA = plantbased*(1-fip);
		  var plantbasedB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
		  var checkRadio = document.querySelector('input[name="checkbuttons"]:checked'); 
		  var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked');
		  if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
		  	var plantbasedC = RB_WFblue_Plant*(1-plantbasedB);
		  	  
		  } 
		  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
		      var plantbasedC = RC_WFblue_Plant*(1-plantbasedB);
		       
		  }
		  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
		  	var plantbasedC = RD_WFblue_Plant*(1-plantbasedB);
		  }  
		  else {
		  	var plantbasedC = RA_WFblue_Plant*(1-plantbasedB);		
		  }

		  var plant_WFblue = (plantbasedA*plantbasedC);

		  //------------------------------------------------------------------------------------------------------------------
		  //MEAT:	
		  var meatbasedA = meatbased*(1-fim); 
		  var meatbasedB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
		  var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
		  if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
		  	var meatbasedC = (RB_WFblue_Meat)*(1-meatbasedB);
		  	  
		  }
		  else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) {
		  	var meatbasedC = (RC_WFblue_Plant)*(1-meatbasedB);
		  	  
		  }
		  else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) {
		  	var meatbasedC = (RD_WFblue_Plant)*(1-meatbasedB);
		  	}
		  else {
		  	var meatbasedC = (RA_WFblue_Meat)*(1-meatbasedB);	
		  }

		  var meat_WFblue = (meatbasedA)*(meatbasedC);
		  //---------------------------------------------------------------------------------------------------------------------
		  //DIARY:
		  var diaryA = (diarybased)*(1-fid); 
		  var diaryB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
		  var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
		  if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) {
		  	var diaryC = (RB_WFblue_Diary)*(1-(diaryB));
		  	  
		  }
		  	else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) {
		  		var diaryC = (RC_WFblue_Diary)*(1-(diaryB));
		  		  
		  	}
		  else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) {
		  	var diaryC = (RD_WFblue_Diary)*(1-(diaryB));
		  }
		  else {var diaryC = (RA_WFblue_Diary)*(1-diaryB);}

		  var diary_WFblue = (diaryA)*(diaryC);	 

		  //---------------------------------------------------------------------------------------------------------------------
		  var dataWFblue_food_int = (plant_WFblue+meat_WFblue+diary_WFblue);
		  //---------------------------------------------------------------------------------------------------------------------
		  //CALCOLO IL VALORE PER LE SOMME DI FOOD WFblue EXTERNAL:
		  var plantres_WFblue_e = (plantbased)*(fip);
		  var plantres_WFblue_ext = (plantres_WFblue_e)*(WORLD_plant_WFblue_FoodW11);
		  console.log("PLANT EXT = Food.M18: "+plantres_WFblue_ext);	
		  var meatres_WFblue_e = (meatbased*fim);
		  var meatres_WFblue_ext = (meatres_WFblue_e)*(WORLD_meat_WFblue_FoodW12);
		  console.log("MEAT EXT = Food.M19: "+meatres_WFblue_ext);	
		  var diaryres_WFblue_e = (diarybased*fid);
		  var diaryres_WFblue_ext = (diaryres_WFblue_e)*(WORLD_diary_WFblue_FoodW13);
		  console.log("DIARY EXT = Food.M20: "+diaryres_WFblue_ext);	
		  	  
		  var dataWFblue_food_ext = (plantres_WFblue_ext+meatres_WFblue_ext+diaryres_WFblue_ext);
		  console.log("VALORE FOOD EXT WFblue TOTAL = Food.M21 : "+dataWFblue_food_ext);
		  //console.log("==============FINE FOOD WFblue=======================");


		  //----------------------------------------------------------------------------------------------------------------------

		  //console.log("==========INIZIO ENERGY WFblue============");	  
		  //////////////////// CALCOLO ENERGY ///////////////////////////////
		  var red_ind_parse = parseFloat(document.getElementById("e_N5").value)/100;
		  var red_tr_parse = parseFloat(document.getElementById("e_N6").value)/100;
		  var red_ser_parse =parseFloat(document.getElementById("e_N7").value)/100;
		  var red_house = parseFloat(document.getElementById("e_N8").value)/100;
		  var el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
		  var fuel_house_parse = parseFloat(document.getElementById("e_N12").value)/100;  
		  var bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
		  var fossilf_parse = parseFloat(document.getElementById("L30").value)/100;
		  var biofuels_parse = parseFloat(document.getElementById("L31").value)/100;
		  var elec_parse = parseFloat(document.getElementById("L32").value)/100;
		  //---------------------------------------------------------------------------------------------------
		  //CONSUMPTION REGION A - VALORI FISSI
		  var fossil_ind = 37.3;
		  var bio_ind = 5.8;
		  var el_ind = 16.4;
		  	  	  
		  var fossil_tr = 71.6;
		  var bio_tr = 2.7;
		  var el_tr = 1.1;
		  	  	  
		  var fossil_s = 13.8;
		  var bio_s = 2.5;
		  var el_s = 16.8;
		  	  	  
		  var fossil_house = 27.8;
		  var bio_house = 6.4;
		  var el_house = 14.8;
		  //----------------------------------------------------------------------------------------------------
		  var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
		  var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
		  var somma_valori_s = (fossil_s+bio_s+el_s);
		  var somma_valori_house = (fossil_house+bio_house+el_house);
		  //----------------------------------------------------------------------------------------------------
		  var A6a = (1-red_ind_parse)*(somma_valori_ind); 
		  var A6aa = (1-red_ind_parse)*el_ind;
		  var A6b = (A6a) - (A6aa);
		  		  	
		  var B6a = (1-red_tr_parse)*(1-(el_tr_parse*(1-0.7/2.3)))*(somma_valori_tr);
		  var B6b = (el_tr_parse)*(B6a);

		  var C6a = (1-red_ser_parse)*(somma_valori_s);
		  var C6b = (1-red_ind_parse)*(el_s);
		  	
		  var e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
		  var D6a = ((1-red_house)*(somma_valori_house))-(e_h);
		  //----------------------------------------------------------------------------------------------------
		  //calcolo valori iniziali di FOSSIL USER: industry -transport -services -households
		  var f_i_primaop = (A6a)-(A6b);
		  var f_i = (1-bio_fr_parse)*(A6b);
		  var f_t = (1-bio_fr_parse)*(B6a-B6b);
		  var f_s = (1-bio_fr_parse)*(C6a-C6b);
		  var f_h = (1-bio_fr_parse)*(D6a);
		  	  	  
		  var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
		  var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);

		  var energy_fossil_val = (total_fossil_user)*(1-fossilf_parse);
		  var fossil_final_WFblue = (energy_fossil_val)*((RA_WFblue_Fossil)*0.25)/1000;
		  console.log("FOSSIL WFblue INT = EnergyG34 (ok)= "+fossil_final_WFblue);

		  //-----------------------------------------------------------------------------------------------------
		  //calcolo valori iniziali di BIOFUEL USER:	  
		  var bio_i_primaop = (A6a)-(A6b);
		  var b_i = (bio_fr_parse)*(A6b);
		  var b_t = (bio_fr_parse)*(B6a-B6b);
		  var b_s = (bio_fr_parse)*(C6a-C6b);
		  var b_h = (bio_fr_parse)*(D6a);

		  var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
		  var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
		  var bio_final_WFblue = (energy_bio_val)*((RA_WFblue_Biofuel*0.27))/1000;
		  console.log("BIO WFblue INT = EnergyG35 (ok) =  "+bio_final_WFblue);

		  //-----------------------------------------------------------------------------------------------------
		  var e_i = (1-(red_ind_parse))*el_ind;
		  var e_t = (el_tr_parse)*(A6a);
		  var e_s = (1-((red_ind_parse)*(el_s)))*100;
		  e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));

		  		  	
		  var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
		  var energy_elec_val = (total_el_user)*((1-(elec_parse)));

		  //console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);
		  var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
		  if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
		  	var elec1= (PER_B_Wind)*(RB_WFgreen_Wind);
		  	//console.log("SOMMA ELEC1: "+elec1);
		  	var elec2 =(PER_B_Solar)*(RB_WFblue_Solar);
		  	var elec3 =(PER_B_Hydro)*(RB_WFblue_Hydro);
		  	var elec4 =(PER_B_Biofuel)*(RB_WFblue_Biofuel);
		  	var elec5 =(PER_B_Nuclear)*(RB_WFblue_Nuclear);
		  	var elec6 =(PER_B_Fossil)*(RB_WFblue_Fossil); 	
		  }   
		  else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
		  	var elec1= (PER_C_Wind)*(RC_D_WFblue_Wind);
		  	//console.log("SOMMA ELEC1: "+elec1);
		  	var elec2 =(PER_C_Solar)*(RC_D_WFblue_Solar);
		  	var elec3 =(PER_C_Hydro)*(RC_D_WFblue_Hydro);
		  	var elec4 =(PER_C_Biofuel)*(RC_D_WFblue_Biofuel);
		  	var elec5 =(PER_C_Nuclear)*(RC_D_WFblue_Nuclear);
		  	var elec6 =(PER__Fossil)*(RC_D_WFblue_Fossil); 	
		  }   
		  else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
		  	var elec1= (PER_B_Wind)*(RC_D_WFblue_Wind);
		  	//console.log("SOMMA ELEC1: "+elec1);
		  	var elec2 =(PER_D_Solar)*(RC_D_WFblue_Solar);
		  	var elec3 =(PER_D_Hydro)*(RC_D_WFblue_Hydro);
		  	var elec4 =(PER_D_Biofuel)*(RC_D_WFblue_Biofuel);
		  	var elec5 =(PER_D_Nuclear)*(RC_D_WFblue_Nuclear);
		  	var elec6 =(PER_D_Fossil)*(RC_D_WFblue_Fossil); 	
		  	}  
		  else {

		  var elec1= (PER_A_Wind)*(RA_WFblue_Wind);
		  var elec2 =(PER_A_Solar)*(RA_WFblue_Solar);
		  var elec3 =(PER_A_Hydro)*(RA_WFblue_Hydro);
		  var elec4 =(PER_A_Biofuel)*(RA_WFblue_Biofuel);
		  var elec5 =(PER_A_Nuclear)*(RA_WFblue_Nuclear);
		  var elec6 =(PER_A_Fossil)*(RA_WFblue_Fossil); 	
		  }

		  var elec1add = (elec1)+(elec2);
		  var elec2add = (elec3)+(elec4);
		  var elec3add = (elec5)+(elec6);

		  var electricity_sum = (elec1add)+(elec2add)+(elec3add);

		  var elec_final_WFblue = (energy_elec_val)*(electricity_sum)/1000;
		  //-----------------------------------------------------------------------------------------------
		  var datoWFblue_en_internal = (elec_final_WFblue+bio_final_WFblue+fossil_final_WFblue);
		  //-----------------------------------------------------------------------------------------------
		  var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');
		  if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) { 
		  	var fossil_final_lf = (energy_fossil_val)*((RB_WFblue_Fossil)*0.25)/1000;
		  }
		  else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) { 
		  	var fossil_final_lf = (energy_fossil_val)*((RC_D_WFblue_Fossil)*0.25)/1000;
		  }
		  else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) { 
		  	var fossil_final_lf = (energy_fossil_val)*((RC_D_WFblue_Fossil)*0.25)/1000;
		  }
		  else {
			  	var fossil_final_lf = (energy_fossil_val)*((RA_WFblue_Fossil)*0.25)/1000;
		  }

		  var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
		  if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
		  	var bio_final_lf = (energy_bio_val)*((RB_WFblue_Biofuel*0.27))/1000;
		  }
		  else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) {
		  	var bio_final_lf = (energy_bio_val)*((RC_D_WFblue_Biofuel*0.27))/1000;
		  }
		  else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) {
		  	var bio_final_lf = (energy_bio_val)*((RC_D_WFblue_Biofuel*0.27))/1000;
		  }
		  else {
			  var bio_final_lf = (energy_bio_val)*((RA_WFblue_Biofuel*0.27))/1000;
		  	
		  }

		//  var electricity_sum = (elec1add)+(elec2add)+(elec3add);

		  //var elec_final_WFblue = (energy_elec_val)*(electricity_sum)/1000;
		  //-----------------------------------------------------------------------------------------------
		 // var datoWFblue_en_internal = Math.round(elec_final_WFblue+bio_final_WFblue+fossil_final_WFblue);
		  //-----------------------------------------------------------------------------------------------
		  var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(RC_D_WFblue_Fossil*0.25)/1000;
		  var bio_final_WFblue_ext= total_bio_user*(biofuels_parse)*(RC_D_WFblue_Biofuel*0.27)/1000;
		  var elec_final_WFblue_ext = (energy_elec_val)*(elec_parse)/1000;
		  //----------------------------------------------------------------------------------------------
		  var datoWFblue_en_external = Math.round(elec_final_WFblue_ext+bio_final_WFblue_ext+fossil_final_WFblue_ext);
		  //----------------------------------------------------------------------------------------------  	
		  //////////////////////////////////////////////////////////////////
		  /////////////////////////////////////////////////////////////////	

			var sumfoodenWFblue = Math.round(parseInt(Number(dataWFblue_food_int)+Number(datoWFblue_en_internal)));
			
		  var datiaggbar = [sumfoodenWFblue,0,0,0,0,0];
		 // var datiaggbar2 = [0, 0];
		
		  horizontalChart4.data.datasets[0].data[0] = datiaggbar;
		 // barChartSottoq.data.datasets[1].data = datiaggbar2;
		  horizontalChart4.update();

 } 
	  
	  var myVarbSottoq = setInterval(aggiornabarSottoq, 3000);
 
  
  
  //FINE BAR GRAFICI SOTTO

});
