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
var RA_WFgreen_Wind=0;  var RA_WFblue_Wind= 1.3;  var RA_LF_Wind= 0.194444444444444; var RA_CF_Wind= 6.11111111111111;   
var RA_WFgreen_Solar=0.00;  var RA_WFblue_Solar=140.00; var RA_LF_Solar=2.41666666666667;   var RA_CF_Solar= 28.1944444444444;
var RA_WFgreen_Hydro =0.00; var RA_WFblue_Hydro=9114.00; var RA_LF_Hydro =0.972222222222222; var RA_CF_Hydro = 3.05555555555556;
var RA_WFgreen_Biofuel=90000.00; var RA_WFblue_Biofuel=10000.00; var RA_LF_Biofuel= 125.000;var RA_CF_Biofuel= 19.2361111111111;
var RA_WFgreen_Nuclear=0.00;  var RA_WFblue_Nuclear=567.00; var RA_LF_Nuclear=0.277777777777778; var RA_CF_Nuclear= 5.27777777777778;
var RA_WFgreen_Fossil =0.00;  var RA_WFblue_Fossil=388.00; var RA_LF_Fossil=0.0277777777777778; var RA_CF_Fossil= 219.113420579933;

var RB_WFgreen_Wind = 0;  var RB_WFblue_Wind =1.3;  var RB_LF_Wind = 0.194444444444444;
var RB_WFgreen_Solar =0;	var RB_WFblue_Solar =140; var RB_LF_Solar =	2.41666666666667;	
var RB_WFgreen_Hydro =0; var RB_WFblue_Hydro =9114.00; var RB_LF_Hydro = 0.972222222222222;
var RB_WFgreen_Biofuel =90; var RB_WFblue_Biofuel =10.00; var RB_LF_Biofuel = 125.000;
var RB_WFgreen_Nuclear =0; var RB_WFblue_Nuclear =567.00; var RB_LF_Nuclear = 0.277777777777778;
var RB_WFgreen_Fossil =0; var RB_WFblue_Fossil = 388.00; var RB_LF_Fossil =0.0277777777777778;

var RC_D_WFgreen_Wind = 0;  var RC_D_WFblue_Wind =1.3;  var RC_D_LF_Wind = 0.194444444444444;
var RC_D_WFgreen_Solar =0;	var RC_D_WFblue_Solar =140; var RC_D_LF_Solar =	2.41666666666667;	
var RC_D_WFgreen_Hydro =0; var RC_D_WFblue_Hydro =9114.00; var RC_D_LF_Hydro = 0.972222222222222;
var RC_D_WFgreen_Biofuel =90; var RC_D_WFblue_Biofuel =10.00; var RC_D_LF_Biofuel = 125.000;
var RC_D_WFgreen_Nuclear =0; var RC_D_WFblue_Nuclear =567.00; var RC_D_LF_Nuclear = 0.277777777777778;
var RC_D_WFgreen_Fossil =0; var RC_D_WFblue_Fossil = 388.00; var RC_D_LF_Fossil =0.0277777777777778;

var RC_D_CF_Wind = 6.11111111111111;; var RC_D_CF_Solar = 28.1944444444444;  var RC_D_CF_Hydro = 3.05555555555556; 
var RC_D_CF_Biofuel = 19.2361111111111; var RC_D_CF_Nuclear = 5.27777777777778; var RC_D_CF_Fossil = 219.113420579933;

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
//////console.log("intake: "+intakeparse);
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
//	////console.log("MULCHING PARSE: "+Mulching_parse);
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
////console.log("plant1= Food V18 Total: "+plant1+" intakeparse: "+intakeparse);
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
var plantbasedA = plantbased*(1-Number(fip));
var plantbasedB = ((YeldCF+Mulch)*Rainfed)+Deficit;
var plantbasedC = Number(RA_CF_Plant)*(1-Number(plantbasedB));	
var plant_cf = Number(plantbasedA)*Number(plantbasedC);

//------------------------------------------------------------------------------------------------------------------
//MEAT:	
var meatbasedA = meatbased*(1-Number(fim));
var meatbasedB = ((YeldCF+Mulch)*Rainfed)+Deficit;
var meatbasedC = Number(RA_CF_Meat)*(1-Number(meatbasedB));
//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
var meat_cf = Number(meatbasedA)*Number(meatbasedC);

//---------------------------------------------------------------------------------------------------------------------
//DIARY:
var diaryA = (diarybased)*(1-Number(fid));
var diaryB = ((YeldCF+Mulch)*Rainfed)+Deficit;
var diaryC = Number(RA_CF_Diary)*(1-Number(diaryB));
var diary_cf = (diaryA)*(diaryC);

//---------------------------------------------------------------------------------------------------------------------
var add1 = (plant_cf)+(meat_cf);
var dataCF_food_int = (add1)+(diary_cf);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD CF EXTERNAL:
var plantres_cf_e = (plantbased)*Number(fip);

var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
	var plantvar = Number(RA_CF_Plant)*(1-0);
	var plantres_cf_ext = plantres_cf_e*plantvar
}
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
	var plantvar = Number(RA_CF_Plant)*(1-0);
	var plantres_cf_ext = plantres_cf_e*plantvar
	
} 
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
	var plantvar = Number(RA_CF_Plant)*(1-0);
	var plantres_cf_ext = plantres_cf_e*plantvar
	
}
else {
	var plantres_cf_ext = plantres_cf_e*Number(WORLD_plant_cf_FoodY11);
}

var meatres_cf_e = Number(meatbased)*Number(fim);

var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
var meatvar = Number(RA_CF_Meat)*(1-0);
var meatres_cf_ext = Number(meatres_cf_e)*meatvar;
}

if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) { 
	var meatvar = Number(RA_CF_Meat)*(1-0);
	var meatres_cf_ext = Number(meatres_cf_e)*meatvar;	
}

if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) { 
	var meatvar = Number(RA_CF_Meat)*(1-0);
	var meatres_cf_ext = Number(meatres_cf_e)*meatvar;	
}
else {
	var meatres_cf_ext = Number(meatres_cf_e)*Number(WORLD_meat_cf_FoodY12);
}



var diaryres_cf_e = Number(diarybased)*Number(fid);

var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
	var diaryvar = Number(RA_CF_Diary)*(1-0);	
	var diaryres_cf_ext = Number(diaryres_cf_e)*diaryvar;
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) { 
	var diaryvar = Number(RA_CF_Diary)*(1-0);	
	var diaryres_cf_ext = Number(diaryres_cf_e)*diaryvar;
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) { 
	var diaryvar = Number(RA_CF_Diary)*(1-0);	
	var diaryres_cf_ext = Number(diaryres_cf_e)*diaryvar;
}
else {
	var diaryres_cf_ext = Number(diaryres_cf_e)*Number(WORLD_diary_cf_FoodY13);
}
var dataCF_food_ext = (plantres_cf_ext+meatres_cf_ext+diaryres_cf_ext);


//----------------------------------------------------------------------------------------------------------------------

////console.log("==========INIZIO ENERGY CF============");	  
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
var fossil_ind = 37.2585;
var bio_ind = 5.775;
var el_ind = 16.384;
	  	  
var fossil_tr = 71.6149;
var bio_tr = 2.7388;
var el_tr = 1.0954;
	  	  
var fossil_s = 13.7603;
var bio_s = 2.454;
var el_s = 16.8038;
	  	  
var fossil_house = 27.8386;
var bio_house = 6.39824;
var el_house = 14.7612;
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
var f_i = (1-Number(bio_fr_parse))*(A6b);
var f_t = (1-Number(bio_fr_parse))*(B6a-B6b);
var f_s = (1-Number(bio_fr_parse))*(C6a-C6b);
var f_h = (1-Number(bio_fr_parse))*(D6a);
	  	  
var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);
//console.log("f_i:"+f_i+"f_s:"+f_s+"f_t:"+f_t+"f_h:"+f_h+"FOSSIL TOTAL = : "+total_fossil_user);

var energy_fossil_val = (total_fossil_user)*(1-Number(fossilf_parse));
//console.log("ENERGY FOSSIL CF INT = EnergyM29 (ok)= "+energy_fossil_val);

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
var energy_bio_val = (total_bio_user)*(1-Number(biofuels_parse));
var bio_final_cf = (energy_bio_val)*(Number(RA_CF_Biofuel)*0.27)/1000;
//console.log("BIO CF INT = EnergyJ35 (ok) =  "+bio_final_cf);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-Number(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(A6a);
var e_s = (1-red_ind_parse)*Number(el_s);
e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
//console.log("MOLTIPLICAZIONE ELEC SERVICES = F29 (ok) =  "+e_s);  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-Number(elec_parse)));
//console.log("M29 ELECTRICITY VALORE PER MATR. SOMMA PROD"+energy_elec_val);

//console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);

	var elec1= (PER_A_Wind)*(RA_CF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_A_Solar)*(RA_CF_Solar);
	var elec3 =(PER_A_Hydro)*(RA_CF_Hydro);
	var elec4 =(PER_A_Biofuel)*(RA_CF_Biofuel);
	var elec5 =(PER_A_Nuclear)*(RA_CF_Nuclear);
	var elec6 =(PER_A_Fossil)*(RA_CF_Fossil); 	

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);


var electricity_sum = (elec1add)+(elec2add)+(elec3add);

var elec_final_cf = (energy_elec_val)*(electricity_sum)/1000;
//console.log("ENERGY ELEC TOTAL CF "+elec_final_cf);
//-----------------------------------------------------------------------------------------------
var datoCFen_internal = elec_final_cf+bio_final_cf+fossil_final_cf;
//console.log("ENERGY TOTAL CF "+datoCFen_internal);
//-----------------------------------------------------------------------------------------------
//CALCOLO VALORI EXTERNAL ENERGY
//SELECT DEI BOTTONI ENERGY: TOTAL_USER_LOCAL*VALORE DASH*CALCOLO(COSTANTE*0,25)/1000
//--------------
//FOSSIL
var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked'); 
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) { 
var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(RA_CF_Fossil*0.25)/1000;	
}
else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) { 
var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(RA_CF_Fossil*0.25)/1000;	
}
else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) { 
var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(RC_D_CF_Fossil*0.25)/1000;

} 
else {
var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(RC_D_CF_Fossil*0.25)/1000;
}

//BIOFUEL
var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked'); 
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) { 
	var bio_final_cf_ext= total_bio_user*(biofuels_parse)*(RA_CF_Biofuel*0.27)/1000;
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) { 
	var bio_final_cf_ext= total_bio_user*(biofuels_parse)*(RA_CF_Biofuel*0.27)/1000;
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) { 
	var bio_final_cf_ext= total_bio_user*(biofuels_parse)*(RC_D_CF_Biofuel*0.27)/1000;
} 
else {
	var bio_final_cf_ext= total_bio_user*(biofuels_parse)*(RC_D_CF_Biofuel*0.27)/1000;
}

//ELECTRICITY
var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked'); 
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) { 
	var elec1= (PER_B_Wind)*(RA_CF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_B_Solar)*(RA_CF_Solar);
	var elec3 =(PER_B_Hydro)*(RA_CF_Hydro);
	var elec4 =(PER_B_Biofuel)*(RA_CF_Biofuel);
	var elec5 =(PER_B_Nuclear)*(RA_CF_Nuclear);
	var elec6 =(PER_B_Fossil)*(RA_CF_Fossil); 
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) { 
	var elec1= (PER_C_Wind)*(RA_CF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_C_Solar)*(RC_D_CF_Solar);
	var elec3 =(PER_C_Hydro)*(RC_D_CF_Hydro);
	var elec4 =(PER_C_Biofuel)*(RC_D_CF_Biofuel);
	var elec5 =(PER_C_Nuclear)*(RC_D_CF_Nuclear);
	var elec6 =(PER_C_Fossil)*(RC_D_CF_Fossil); 
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) { 
	var elec1= (PER_D_Wind)*(RC_D_CF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_D_Solar)*(RC_D_CF_Solar);
	var elec3 =(PER_D_Hydro)*(RC_D_CF_Hydro);
	var elec4 =(PER_D_Biofuel)*(RC_D_CF_Biofuel);
	var elec5 =(PER_D_Nuclear)*(RC_D_CF_Nuclear);
	var elec6 =(PER_D_Fossil)*(RC_D_CF_Fossil); 
} 
else {
	var elec1= (PER_D_Wind)*(RC_D_CF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_D_Solar)*(RC_D_CF_Solar);
	var elec3 =(PER_D_Hydro)*(RC_D_CF_Hydro);
	var elec4 =(PER_D_Biofuel)*(RC_D_CF_Biofuel);
	var elec5 =(PER_D_Nuclear)*(RC_D_CF_Nuclear);
	var elec6 =(PER_D_Fossil)*(RC_D_CF_Fossil); 
}

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);

var electricity_sum_ext = (elec1add)+(elec2add)+(elec3add);
var energy_elec_val_ext = (total_el_user)*(Number(electricity_sum_ext));
var elec_final_cf_ext = (energy_elec_val_ext)*(elec_parse)/1000;

//----------------------------------------------------------------------------------------------
var datoCFen_external = elec_final_cf_ext+bio_final_cf_ext+fossil_final_cf_ext;
//----------------------------------------------------------------------------------------------  	
var titoloCF = parseFloat(Number(datoCFen_external)+Number(dataCF_food_ext)+Number(datoCFen_internal)+Number(dataCF_food_int)).toFixed(2);
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
var grand_total_ante = parseFloat(((sommacfood+sommacfenergy)-initial_value_cf_int)/initial_value_cf_int).toFixed(2)
var grand_total_round = Math.round(grand_total_ante*100);
var grand_total = Math.abs(grand_total_round);
if(grand_total_round<1){
	grand_total = 0;
} else {}


document.getElementById("percent1").innerHTML = grand_total + "% above initial value";

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
//////console.log("intake: "+intakeparse);
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
//	////console.log("MULCHING PARSE: "+Mulching_parse);
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
//console.log("YelfLF: "+YeldLF+" Mulch: "+Mulch+" Totale RelationsAK47: "+((YeldLF+Mulch)*Rainfed));
var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_LF;
// ////console.log("WASTECAL+PERCENT ok: "+cal_waste);
// ////console.log("PLANT SUM PERCENT: "+plant1);
// ////console.log("MULCH: "+Mulch);
// ////console.log("Deficit: "+Deficit);
//----------------------------------------------------------------------------------------------------------------
var meatbased = (meat1*cal_waste)/100;
var diarybased = (diary1*cal_waste)/100;
var plantbased = (plant1*cal_waste)/100;
//----------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF INTERNAL:
//PLANT:
//------------------------------------------------------------------------------------------------------------------
var plantbasedA = plantbased*(1-Number(fip));
var plantbasedB = ((YeldLF+Mulch)*Rainfed)+Deficit;
var plantbasedC = Number(RA_LF_Plant)*(1-Number(plantbasedB));	
var plant_lf = Number(plantbasedA)*Number(plantbasedC);
//------------------------------------------------------------------------------------------------------------------
//MEAT:	
var meatbasedA = meatbased*(1-Number(fim));
var meatbasedB = ((YeldLF+Mulch)*Rainfed)+Deficit;
var meatbasedC = Number(RA_LF_Meat)*(1-Number(meatbasedB));
//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
var meat_lf = Number(meatbasedA)*Number(meatbasedC);

//---------------------------------------------------------------------------------------------------------------------
//DIARY:
var diaryA = (diarybased)*(1-Number(fid));
var diaryB = ((YeldLF+Mulch)*Rainfed)+Deficit;
var diaryC = Number(RA_LF_Diary)*(1-Number(diaryB));
var diary_lf = (diaryA)*(diaryC);

//---------------------------------------------------------------------------------------------------------------------
var add1 = (plant_lf)+(meat_lf);
var dataLF_food_int = (add1)+(diary_lf);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF EXTERNAL:
var plantres_lf_e = (plantbased)*Number(fip);

var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
	var plantvar = Number(RB_LF_Plant)*(1-0);
	var plantres_lf_ext = plantres_lf_e*plantvar
}
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
	var plantvar = Number(RC_LF_Plant)*(1-0);
	var plantres_lf_ext = plantres_lf_e*plantvar
	
} 
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
	var plantvar = Number(RD_LF_Plant)*(1-0);
	var plantres_lf_ext = plantres_lf_e*plantvar
	
}
else {
	var plantres_lf_ext = plantres_lf_e*Number(WORLD_plant_lf_FoodX11);
}

var meatres_lf_e = Number(meatbased)*Number(fim);

var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
var meatvar = Number(RB_LF_Meat)*(1-0);
var meatres_lf_ext = Number(meatres_lf_e)*meatvar;
}

if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) { 
	var meatvar = Number(RC_LF_Meat)*(1-0);
	var meatres_lf_ext = Number(meatres_lf_e)*meatvar;	
}

if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) { 
	var meatvar = Number(RD_LF_Meat)*(1-0);
	var meatres_lf_ext = Number(meatres_lf_e)*meatvar;	
}
else {
	var meatres_lf_ext = Number(meatres_lf_e)*Number(WORLD_meat_lf_FoodX12);
}

var diaryres_lf_e = Number(diarybased)*Number(fid);


var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
	var diaryvar = Number(RB_LF_Diary)*(1-0);	
	var diaryres_lf_ext = Number(diaryres_lf_e)*diaryvar;
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) { 
	var diaryvar = Number(RC_LF_Diary)*(1-0);	
	var diaryres_lf_ext = Number(diaryres_lf_e)*diaryvar;
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) { 
	var diaryvar = Number(RD_LF_Diary)*(1-0);	
	var diaryres_lf_ext = Number(diaryres_lf_e)*diaryvar;
}
else {
	var diaryres_lf_ext = Number(diaryres_lf_e)*Number(WORLD_diary_lf_FoodX13);
}

	  
var dataLF_food_ext = (plantres_lf_ext+meatres_lf_ext+diaryres_lf_ext);
//console.log("VALORE FOOD EXT LF TOTAL = Food.N21 : "+dataLF_food_ext);
////console.log("==============FINE FOOD LF=======================");


//----------------------------------------------------------------------------------------------------------------------

////console.log("==========INIZIO ENERGY LF============");	  
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
var fossil_ind = 37.2585;
var bio_ind = 5.775;
var el_ind = 16.384;
	  	  
var fossil_tr = 71.6149;
var bio_tr = 2.7388;
var el_tr = 1.0954;
	  	  
var fossil_s = 13.7603;
var bio_s = 2.454;
var el_s = 16.8038;
	  	  
var fossil_house = 27.8386;
var bio_house = 6.39824;
var el_house = 14.7612;
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
var fossil_final_lf = (energy_fossil_val)*(Number(RA_LF_Fossil)*0.25)/1000;
//console.log("FOSSIL LF INT = EnergyI34 (ok)= "+fossil_final_lf);

//-----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di BIOFUEL USER:	  
var bio_i_primaop = (A6a)-(A6b);
var b_i = (bio_fr_parse)*(A6b);
var b_t = (bio_fr_parse)*(B6a-B6b);
var b_s = (bio_fr_parse)*(C6a-C6b);
var b_h = (bio_fr_parse)*(D6a);

var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
var bio_final_lf = (energy_bio_val)*(Number(RA_LF_Biofuel*0.27))/1000;
//console.log("BIO LF INT = EnergyI35 (ok) =  "+bio_final_lf);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(A6a);
var e_s = (1-red_ind_parse)*Number(el_s);
e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));

////console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);
var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
	var elec1= (PER_B_Wind)*(RB_LF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_B_Solar)*(RB_LF_Solar);
	var elec3 =(PER_B_Hydro)*(RB_LF_Hydro);
	var elec4 =(PER_B_Biofuel)*(RB_LF_Biofuel);
	var elec5 =(PER_B_Nuclear)*(RB_LF_Nuclear);
	var elec6 =(PER_B_Fossil)*(RB_LF_Fossil); 	
}   
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
	var elec1= (PER_C_Wind)*(RC_D_LF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_C_Solar)*(RC_D_LF_Solar);
	var elec3 =(PER_C_Hydro)*(RC_D_LF_Hydro);
	var elec4 =(PER_C_Biofuel)*(RC_D_LF_Biofuel);
	var elec5 =(PER_C_Nuclear)*(RC_D_LF_Nuclear);
	var elec6 =(PER_C_Fossil)*(RC_D_LF_Fossil); 	
}   
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
	var elec1= (PER_D_Wind)*(RC_D_LF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(PER_D_Solar)*(RC_D_LF_Solar);
	var elec3 =(PER_D_Hydro)*(RC_D_LF_Hydro);
	var elec4 =(PER_D_Biofuel)*(RC_D_LF_Biofuel);
	var elec5 =(PER_D_Nuclear)*(RC_D_LF_Nuclear);
	var elec6 =(PER_D_Fossil)*(RC_D_LF_Fossil); 	
	}   
else {

var elec1= (PER_A_Wind)*(RA_LF_Wind);
////console.log("SOMMA ELEC1: "+elec1);
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
//console.log("ELECTRICITY LF INT = Energy.I36 (ok) = : "+elec_final_lf);
//-----------------------------------------------------------------------------------------------
var datoLFen_internal = elec_final_lf+bio_final_lf+fossil_final_lf;
//console.log("TOT LF ENERGY INTERNAL = Energy.I37 (ok): "+datoLFen_internal);
//-----------------------------------------------------------------------------------------------
//CALCOLO VALORI EXTERNAL ENERGY
	var energy_elec_val_ext = (total_el_user)*(elec_parse);
//CALCOLO VALORI EXTERNAL ENERGY:
var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) { 
	var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(Number(RA_LF_Fossil)*0.25)/1000;
}
else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) { 
	var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(Number(RB_LF_Fossil)*0.25)/1000;
}
else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) { 
	var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_LF_Fossil)*0.25)/1000;
}
else {
	var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(Number(RA_LF_Fossil)*0.25)/1000;

}

var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
	var bio_final_lf_ext = total_bio_user*(biofuels_parse)*(Number(RA_LF_Biofuel)*0.27)/1000;
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) {
	var bio_final_lf_ext = total_bio_user*(biofuels_parse)*(Number(RB_LF_Biofuel)*0.27)/1000;
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) {
	var bio_final_lf_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_LF_Biofuel)*0.27)/1000;
}
else {
	var bio_final_lf_ext = total_bio_user*(biofuels_parse)*(Number(RA_LF_Biofuel)*0.27)/1000;

}

var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
	var elec1= (PER_A_Wind)*(RA_LF_Wind);
	var elec2 =(PER_A_Solar)*(RA_LF_Solar);
	var elec3 =(PER_A_Hydro)*(RA_LF_Hydro);
	var elec4 =(PER_A_Biofuel)*(RA_LF_Biofuel);
	var elec5 =(PER_A_Nuclear)*(RA_LF_Nuclear);
	var elec6 =(PER_A_Fossil)*(RA_LF_Fossil); 	
}   
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
	var elec1= (PER_B_Wind)*(RB_LF_Wind);
	var elec2 =(PER_B_Solar)*(RB_LF_Solar);
	var elec3 =(PER_B_Hydro)*(RB_LF_Hydro);
	var elec4 =(PER_B_Biofuel)*(RB_LF_Biofuel);
	var elec5 =(PER_B_Nuclear)*(RB_LF_Nuclear);
	var elec6 =(PER_B_Fossil)*(RB_LF_Fossil); 	
}  
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
	var elec1= Number(PER_C_Wind)*Number(RC_D_LF_Wind);
	var elec2 =Number(PER_C_Solar)*Number(RC_D_LF_Solar);
	var elec3 =Number(PER_C_Hydro)*Number(RC_D_LF_Hydro);
	var elec4 =Number(PER_C_Biofuel)*Number(RC_D_LF_Biofuel);
	var elec5 =Number(PER_C_Nuclear)*Number(RC_D_LF_Nuclear);
	var elec6 =Number(PER_C_Fossil)*Number(RC_D_LF_Fossil); 	
	}  
else {
	var elec1= Number(PER_D_Wind)*Number(RC_D_LF_Wind);
	var elec2 =Number(PER_D_Solar)*Number(RC_D_LF_Solar);
	var elec3 =Number(PER_D_Hydro)*Number(RC_D_LF_Hydro);
	var elec4 =Number(PER_D_Biofuel)*Number(RC_D_LF_Biofuel);
	var elec5 =Number(PER_D_Nuclear)*Number(RC_D_LF_Nuclear);
	var elec6 =Number(PER_D_Fossil)*Number(RC_D_LF_Fossil); 
}

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);

var electricity_sum_ext = (elec1add)+(elec2add)+(elec3add);
var elec_final_lf_ext = (energy_elec_val_ext)*Number(electricity_sum_ext)/1000;

//FINE CALCOLO VALORI EXTERNAL ENERGY
//----------------------------------------------------------------------------------------------
var datoLFen_external = elec_final_lf_ext+bio_final_lf_ext+fossil_final_lf_ext;
var titoloLF = (Number((datoLFen_external+dataLF_food_ext)+(datoLFen_internal+dataLF_food_int))).toFixed(2);
document.getElementById("GT2").innerHTML = titoloLF;

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
var grand_total_ante = parseFloat(((sommalfood+sommalfenergy)-initial_value_lf_int)/initial_value_lf_int).toFixed(2)
var grand_total_round = Math.round(grand_total_ante*100);
var grand_total = Math.abs(grand_total_round);
if(grand_total_round<0){
	grand_total = 0;
} else {}
document.getElementById("percent2").innerHTML =  grand_total+ "% above initial value";_____________________________
	
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
//////console.log("intake: "+intakeparse);
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
//	////console.log("MULCHING PARSE: "+Mulching_parse);
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
// ////console.log("WASTECAL+PERCENT ok: "+cal_waste);
// ////console.log("PLANT SUM PERCENT: "+plant1);
// ////console.log("MULCH: "+Mulch);
// ////console.log("Deficit: "+Deficit);
//----------------------------------------------------------------------------------------------------------------
var meatbased = (meat1*cal_waste)/100;
var diarybased = (diary1*cal_waste)/100;
var plantbased = (plant1*cal_waste)/100;
//----------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF INTERNAL:
//PLANT:
//------------------------------------------------------------------------------------------------------------------
var plantbasedA = plantbased*(1-Number(fip));
var plantbasedB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
var plantbasedC = Number(RA_WFgreen_Plant)*(1-Number(plantbasedB));	
var plant_WFgreen = Number(plantbasedA)*Number(plantbasedC);

//------------------------------------------------------------------------------------------------------------------
//MEAT:	
var meatbasedA = meatbased*(1-Number(fim));
var meatbasedB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
var meatbasedC = Number(RA_WFgreen_Meat)*(1-Number(meatbasedB));
//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
var meat_WFgreen = Number(meatbasedA)*Number(meatbasedC);

//---------------------------------------------------------------------------------------------------------------------
//DIARY:
var diaryA = (diarybased)*(1-Number(fid));
var diaryB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
var diaryC = Number(RA_WFgreen_Diary)*(1-Number(diaryB));
var diary_WFgreen = (diaryA)*(diaryC);

//---------------------------------------------------------------------------------------------------------------------
var add1 = (plant_WFgreen)+(meat_WFgreen);
var dataWFgreen_food_int = (add1)+(diary_WFgreen);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD WFGREEN EXTERNAL:
var plantres_WFgreen_e = (plantbased)*Number(fip);

var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
	var plantvar = Number(RB_WFgreen_Plant)*(1-0);
	var plantres_WFgreen_ext = plantres_WFgreen_e*plantvar
}
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
	var plantvar = Number(RC_WFgreen_Plant)*(1-0);
	var plantres_WFgreen_ext = plantres_WFgreen_e*plantvar
	
} 
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
	var plantvar = Number(RD_WFgreen_Plant)*(1-0);
	var plantres_WFgreen_ext = plantres_WFgreen_e*plantvar
	
}
else {
	var plantres_WFgreen_ext = plantres_WFgreen_e*Number(WORLD_plant_WFgreen_FoodV11);
}


//MEAT EXTERNAL
var meatres_WFgreen_e = Number(meatbased)*Number(fim);

var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
var meatvar = Number(RB_WFgreen_Meat)*(1-0);
var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*meatvar;
}

if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) { 
	var meatvar = Number(RC_WFgreen_Meat)*(1-0);
	var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*meatvar;	
}

if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) { 
	var meatvar = Number(RD_WFgreen_Meat)*(1-0);
	var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*meatvar;	
}
else {
	var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(WORLD_meat_WFgreen_FoodV12);
}

//DIARY EXTERNAL
var diaryres_WFgreen_e = Number(diarybased)*Number(fid);

var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
	var diaryvar = Number(RB_WFgreen_Diary)*(1-0);	
	var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*diaryvar;
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) { 
	var diaryvar = Number(RC_WFgreen_Diary)*(1-0);	
	var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*diaryvar;
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) { 
	var diaryvar = Number(RD_WFgreen_Diary)*(1-0);	
	var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*diaryvar;
}
else {
	var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(WORLD_diary_WFgreen_FoodV13);
}
	  
var dataWFgreen_food_ext = (plantres_WFgreen_ext+meatres_WFgreen_ext+diaryres_WFgreen_ext);
//console.log("VALORE FOOD EXT WFgreen TOTAL = Food.L21 : "+dataWFgreen_food_ext);
////console.log("==============FINE FOOD WFgreen=======================");


//----------------------------------------------------------------------------------------------------------------------

////console.log("==========INIZIO ENERGY WFgreen============");	  
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
var fossil_ind = 37.2585;
var bio_ind = 5.775;
var el_ind = 16.384;
	  	  
var fossil_tr = 71.6149;
var bio_tr = 2.7388;
var el_tr = 1.0954;
	  	  
var fossil_s = 13.7603;
var bio_s = 2.454;
var el_s = 16.8038;
	  	  
var fossil_house = 27.8386;
var bio_house = 6.39824;
var el_house = 14.7612;
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
var fossil_final_WFgreen = (energy_fossil_val)*(Number(RA_WFgreen_Fossil)*0.25)/1000;
//console.log("FOSSIL WFgreen INT = EnergyG34 (ok)= "+fossil_final_WFgreen);

//-----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di BIOFUEL USER:	  
var bio_i_primaop = (A6a)-(A6b);
var b_i = (bio_fr_parse)*(A6b);
var b_t = (bio_fr_parse)*(B6a-B6b);
var b_s = (bio_fr_parse)*(C6a-C6b);
var b_h = (bio_fr_parse)*(D6a);

var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
var bio_final_WFgreen = (energy_bio_val)*(Number(RA_WFgreen_Biofuel*0.27))/1000;
//console.log("BIO WFgreen INT = EnergyG35 (ok) =  "+bio_final_WFgreen);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(A6a);
var e_s = (1-red_ind_parse)*Number(el_s);
e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));

var elec1= Number(PER_A_Wind)*Number(RA_WFgreen_Wind);
var elec2 =Number(PER_A_Solar)*Number(RA_WFgreen_Solar);
var elec3 =Number(PER_A_Hydro)*Number(RA_WFgreen_Hydro);
var elec4 =Number(PER_A_Biofuel)*Number(RA_WFgreen_Biofuel);
var elec5 =Number(PER_A_Nuclear)*Number(RA_WFgreen_Nuclear);
var elec6 =Number(PER_A_Fossil)*Number(RA_WFgreen_Fossil); 

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);
var electricity_sum = (elec1add)+(elec2add)+(elec3add);

var elec_final_WFgreen = (energy_elec_val)*(electricity_sum)/1000;
//-----------------------------------------------------------------------------------------------
var datoWFgreen_en_internal = elec_final_WFgreen+bio_final_WFgreen+fossil_final_WFgreen;
//console.log("WFGREEN DATI SOMMA INT = EnergyG35 (ok) =  "+datoWFgreen_en_internal);
//-----------------------------------------------------------------------------------------------
//CALCOLO VALORI EXTERNAL ENERGY

	var energy_elec_val_ext = (total_el_user)*(elec_parse);
//CALCOLO VALORI EXTERNAL ENERGY:
var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) { 
	var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(Number(RA_WFgreen_Fossil)*0.25)/1000;
}
else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) { 
	var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(Number(RB_WFgreen_Fossil)*0.25)/1000;
}
else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) { 
	var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_WFgreen_Fossil)*0.25)/1000;
}
else {
	var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(Number(RA_WFgreen_Fossil)*0.25)/1000;

}

var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
	var bio_final_WFgreen_ext = total_bio_user*(biofuels_parse)*(Number(RA_WFgreen_Biofuel)*0.27)/1000;
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) {
	var bio_final_WFgreen_ext = total_bio_user*(biofuels_parse)*(Number(RB_WFgreen_Biofuel)*0.27)/1000;
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) {
	var bio_final_WFgreen_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_WFgreen_Biofuel)*0.27)/1000;
	//console.log("WFGREEN DATO D DATI SELECT BIO FINAL =  "+bio_final_WFgreen_ext);

}
else {
	var bio_final_WFgreen_ext = total_bio_user*(biofuels_parse)*(Number(RA_WFgreen_Biofuel)*0.27)/1000;
	//console.log("WFGREEN DATO WORLD SELECT BIO FINAL =  "+bio_final_WFgreen_ext);
}

var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
	var elec1= (PER_A_Wind)*(RA_WFgreen_Wind);
	var elec2 =(PER_A_Solar)*(RA_WFgreen_Solar);
	var elec3 =(PER_A_Hydro)*(RA_WFgreen_Hydro);
	var elec4 =(PER_A_Biofuel)*(RA_WFgreen_Biofuel);
	var elec5 =(PER_A_Nuclear)*(RA_WFgreen_Nuclear);
	var elec6 =(PER_A_Fossil)*(RA_WFgreen_Fossil); 	
}   
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
	var elec1= (PER_B_Wind)*(RB_WFgreen_Wind);
	var elec2 =(PER_B_Solar)*(RB_WFgreen_Solar);
	var elec3 =(PER_B_Hydro)*(RB_WFgreen_Hydro);
	var elec4 =(PER_B_Biofuel)*(RB_WFgreen_Biofuel);
	var elec5 =(PER_B_Nuclear)*(RB_WFgreen_Nuclear);
	var elec6 =(PER_B_Fossil)*(RB_WFgreen_Fossil); 	
}  
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
	var elec1= Number(PER_C_Wind)*Number(RC_D_WFgreen_Wind);
	var elec2 =Number(PER_C_Solar)*Number(RC_D_WFgreen_Solar);
	var elec3 =Number(PER_C_Hydro)*Number(RC_D_WFgreen_Hydro);
	var elec4 =Number(PER_C_Biofuel)*Number(RC_D_WFgreen_Biofuel);
	var elec5 =Number(PER_C_Nuclear)*Number(RC_D_WFgreen_Nuclear);
	var elec6 =Number(PER_C_Fossil)*Number(RC_D_WFgreen_Fossil); 	
	}  
else {
	var elec1= Number(PER_D_Wind)*Number(RC_D_WFgreen_Wind);
	var elec2 =Number(PER_D_Solar)*Number(RC_D_WFgreen_Solar);
	var elec3 =Number(PER_D_Hydro)*Number(RC_D_WFgreen_Hydro);
	var elec4 =Number(PER_D_Biofuel)*Number(RC_D_WFgreen_Biofuel);
	var elec5 =Number(PER_D_Nuclear)*Number(RC_D_WFgreen_Nuclear);
	var elec6 =Number(PER_D_Fossil)*Number(RC_D_WFgreen_Fossil); 
}

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);

var electricity_sum_ext = (elec1add)+(elec2add)+(elec3add);

var elec_final_WFgreen_ext = (energy_elec_val_ext)*Number(electricity_sum_ext)/1000;

//FINE CALCOLO VALORI EXTERNAL ENERGY
//----------------------------------------------------------------------------------------------
var datoWFgreen_en_external = Number(elec_final_WFgreen_ext)+Number(bio_final_WFgreen_ext)+Number(fossil_final_WFgreen_ext);
//console.log("ENERGY WFGREEN ENERGY EXTERNAL = Energy.K37 (ok)"+elec_final_WFgreen_ext);
//console.log("ENERGY WFGREEN BIO EXTERNAL = Energy.K37 (ok)"+bio_final_WFgreen_ext);
//console.log("ENERGY WFGREEN FOSSIL EXTERNAL = Energy.K37 (ok)"+fossil_final_WFgreen_ext);
//----------------------------------------------------------------------------------------------  	
var titoloWFgreen = Math.round(Number((datoWFgreen_en_external+dataWFgreen_food_ext)+(datoWFgreen_en_internal+dataWFgreen_food_int))+15)//+48

document.getElementById("GT3").innerHTML = titoloWFgreen;

//console.log("----------------------------------------------------------------------------------");
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

//console.log("VAL FOOD WFG VAL1"+valfood3);
//console.log("SOMMA FOOD WFG:"+sommawfgood);

//console.log("VAL FOOD WFG INITIAL"+initial_value_CF_food);

//console.log("WASTEVIRGOLA"+wastevirgola);

//PERCENTUALE SOTTO TITOLO
var grand_total_ante = Math.round((Number(sommawfgood)+Number(sommawfgenergy)-Number(initial_value_wfg_int))/Number(initial_value_wfg_int));
var grand_total_round = Math.round(grand_total_ante*100);
var grand_total = Math.abs(grand_total_round);
if(grand_total_round<0){
	grand_total = 0;
} else {}
document.getElementById("percent3").innerHTML =  grand_total+ "% above initial value";
	  
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
//////console.log("intake: "+intakeparse);
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
//	////console.log("MULCHING PARSE: "+Mulching_parse);
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
// ////console.log("WASTECAL+PERCENT ok: "+cal_waste);
// ////console.log("PLANT SUM PERCENT: "+plant1);
// ////console.log("MULCH: "+Mulch);
// ////console.log("Deficit: "+Deficit);
//----------------------------------------------------------------------------------------------------------------
var meatbased = (meat1*cal_waste)/100;
var diarybased = (diary1*cal_waste)/100;
var plantbased = (plant1*cal_waste)/100;
//----------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF INTERNAL:
//PLANT:
//------------------------------------------------------------------------------------------------------------------
var plantbasedA = plantbased*(1-Number(fip));
var plantbasedB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
var plantbasedC = Number(RA_WFblue_Plant)*(1-Number(plantbasedB));	
var plant_WFblue = Number(plantbasedA)*Number(plantbasedC);
//------------------------------------------------------------------------------------------------------------------
//MEAT:	
var meatbasedA = meatbased*(1-Number(fim));
var meatbasedB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
var meatbasedC = Number(RA_WFblue_Meat)*(1-Number(meatbasedB));
//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
var meat_WFblue = Number(meatbasedA)*Number(meatbasedC);

//---------------------------------------------------------------------------------------------------------------------
//DIARY:
var diaryA = (diarybased)*(1-Number(fid));
var diaryB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
var diaryC = Number(RA_WFblue_Diary)*(1-Number(diaryB));
var diary_WFblue = (diaryA)*(diaryC);

//---------------------------------------------------------------------------------------------------------------------
var add1 = (plant_WFblue)+(meat_WFblue);
var dataWFblue_food_int = (add1)+(diary_WFblue);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD WFGREEN EXTERNAL:
var plantres_WFblue_e = (plantbased)*Number(fip);

var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
	var plantvar = Number(RB_WFblue_Plant)*(1-0);
	var plantres_WFblue_ext = plantres_WFblue_e*plantvar
}
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
	var plantvar = Number(RC_WFblue_Plant)*(1-0);
	var plantres_WFblue_ext = plantres_WFblue_e*plantvar
	
} 
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
	var plantvar = Number(RD_WFblue_Plant)*(1-0);
	var plantres_WFblue_ext = plantres_WFblue_e*plantvar
	
}
else {
	var plantres_WFblue_ext = plantres_WFblue_e*Number(WORLD_plant_WFblue_FoodW11);
}


//MEAT EXTERNAL
var meatres_WFblue_e = Number(meatbased)*Number(fim);

var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
var meatvar = Number(RB_WFblue_Meat)*(1-0);
var meatres_WFblue_ext = Number(meatres_WFblue_e)*meatvar;
}

if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) { 
	var meatvar = Number(RC_WFblue_Meat)*(1-0);
	var meatres_WFblue_ext = Number(meatres_WFblue_e)*meatvar;	
}

if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) { 
	var meatvar = Number(RD_WFblue_Meat)*(1-0);
	var meatres_WFblue_ext = Number(meatres_WFblue_e)*meatvar;	
}
else {
	var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(WORLD_meat_WFblue_FoodW12);
}

//DIARY EXTERNAL
var diaryres_WFblue_e = Number(diarybased)*Number(fid);

var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
	var diaryvar = Number(RB_WFblue_Diary)*(1-0);	
	var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*diaryvar;
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) { 
	var diaryvar = Number(RC_WFblue_Diary)*(1-0);	
	var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*diaryvar;
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) { 
	var diaryvar = Number(RD_WFgreen_Diary)*(1-0);	
	var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*diaryvar;
}
else {
	var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(WORLD_diary_WFblue_FoodW13);
}
	  
var dataWFblue_food_ext = (plantres_WFblue_ext+meatres_WFblue_ext+diaryres_WFblue_ext);
//console.log("VALORE FOOD EXT WFblue TOTAL = Food.M21 : "+dataWFblue_food_ext);
////console.log("==============FINE FOOD WFblue=======================");


//----------------------------------------------------------------------------------------------------------------------

////console.log("==========INIZIO ENERGY WFblue============");	  
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
var fossil_ind = 37.2585;
var bio_ind = 5.775;
var el_ind = 16.384;
	  	  
var fossil_tr = 71.6149;
var bio_tr = 2.7388;
var el_tr = 1.0954;
	  	  
var fossil_s = 13.7603;
var bio_s = 2.454;
var el_s = 16.8038;
	  	  
var fossil_house = 27.8386;
var bio_house = 6.39824;
var el_house = 14.7612;
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

var energy_fossil_val = (total_fossil_user)*(1-Number(fossilf_parse));
var fossil_final_WFblue = (energy_fossil_val)*(Number(RA_WFblue_Fossil)*0.25)/1000;
//console.log("FOSSIL WFblue INT = EnergyG34 (ok)= "+fossil_final_WFblue);

//-----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di BIOFUEL USER:	  
var bio_i_primaop = (A6a)-(A6b);
var b_i = (bio_fr_parse)*(A6b);
var b_t = (bio_fr_parse)*(B6a-B6b);
var b_s = (bio_fr_parse)*(C6a-C6b);
var b_h = (bio_fr_parse)*(D6a);

var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
var energy_bio_val = (total_bio_user)*((1-Number(biofuels_parse)));
var bio_final_WFblue = (energy_bio_val)*(Number(RA_WFblue_Biofuel)*0.27)/1000;
//console.log("BIO WFblue INT = EnergyG35 (ok) =  "+bio_final_WFblue);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(A6a);
var e_s = (1-red_ind_parse)*Number(el_s);
e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));

		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));

var elec1= Number(PER_A_Wind)*Number(RA_WFblue_Wind);
var elec2 =Number(PER_A_Solar)*Number(RA_WFblue_Solar);
var elec3 =Number(PER_A_Hydro)*Number(RA_WFblue_Hydro);
var elec4 =Number(PER_A_Biofuel)*Number(RA_WFblue_Biofuel);
var elec5 =Number(PER_A_Nuclear)*Number(RA_WFblue_Nuclear);
var elec6 =Number(PER_A_Fossil)*Number(RA_WFblue_Fossil); 	

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);

var electricity_sum = (elec1add)+(elec2add)+(elec3add);

var elec_final_WFblue = (energy_elec_val)*(electricity_sum)/1000;
//-----------------------------------------------------------------------------------------------
var datoWFblue_en_internal = (elec_final_WFblue+bio_final_WFblue+fossil_final_WFblue);
//-----------------------------------------------------------------------------------------------

	var energy_elec_val_ext = (total_el_user)*(elec_parse);
//CALCOLO VALORI EXTERNAL ENERGY:
var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) { 
	var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(Number(RA_WFblue_Fossil)*0.25)/1000;
}
else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) { 
	var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(Number(RB_WFblue_Fossil)*0.25)/1000;
}
else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) { 
	var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_WFblue_Fossil)*0.25)/1000;
}
else {
	var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(Number(RA_WFblue_Fossil)*0.25)/1000;
}

var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RA_WFblue_Biofuel)*0.27)/1000;
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) {
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RB_WFblue_Biofuel)*0.27)/1000;
}
else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) {
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_WFblue_Biofuel)*0.27)/1000;
}
else {
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RA_WFblue_Biofuel)*0.27)/1000;
}


var energy_elec_val = (total_el_user)*(((elec_parse)));
var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
	var elec1= (PER_A_Wind)*(RA_WFblue_Wind);
	var elec2 =(PER_A_Solar)*(RA_WFblue_Solar);
	var elec3 =(PER_A_Hydro)*(RA_WFblue_Hydro);
	var elec4 =(PER_A_Biofuel)*(RA_WFblue_Biofuel);
	var elec5 =(PER_A_Nuclear)*(RA_WFblue_Nuclear);
	var elec6 =(PER_A_Fossil)*(RA_WFblue_Fossil); 	
}   
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
	var elec1= (PER_B_Wind)*(RB_WFblue_Wind);
	var elec2 =(PER_B_Solar)*(RB_WFblue_Solar);
	var elec3 =(PER_B_Hydro)*(RB_WFblue_Hydro);
	var elec4 =(PER_B_Biofuel)*(RB_WFblue_Biofuel);
	var elec5 =(PER_B_Nuclear)*(RB_WFblue_Nuclear);
	var elec6 =(PER_B_Fossil)*(RB_WFblue_Fossil); 	
}  
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
	var elec1= Number(PER_C_Wind)*Number(RC_D_WFblue_Wind);
	var elec2 =Number(PER_C_Solar)*Number(RC_D_WFblue_Solar);
	var elec3 =Number(PER_C_Hydro)*Number(RC_D_WFblue_Hydro);
	var elec4 =Number(PER_C_Biofuel)*Number(RC_D_WFblue_Biofuel);
	var elec5 =Number(PER_C_Nuclear)*Number(RC_D_WFblue_Nuclear);
	var elec6 =Number(PER_C_Fossil)*Number(RC_D_WFblue_Fossil); 	
	}  
else {
	var elec1= Number(PER_D_Wind)*Number(RC_D_WFblue_Wind);
	var elec2 =Number(PER_D_Solar)*Number(RC_D_WFblue_Solar);
	var elec3 =Number(PER_D_Hydro)*Number(RC_D_WFblue_Hydro);
	var elec4 =Number(PER_D_Biofuel)*Number(RC_D_WFblue_Biofuel);
	var elec5 =Number(PER_D_Nuclear)*Number(RC_D_WFblue_Nuclear);
	var elec6 =Number(PER_D_Fossil)*Number(RC_D_WFblue_Fossil); 
}

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);

var electricity_sum_ext = (elec1add)+(elec2add)+(elec3add);


var elec_final_WFblue_ext = (energy_elec_val_ext)*Number(electricity_sum_ext)/1000;


//FINE CALCOLO VALORI EXTERNAL ENERGY

//----------------------------------------------------------------------------------------------
var datoWFblue_en_external = (elec_final_WFblue_ext+bio_final_WFblue_ext+fossil_final_WFblue_ext);
//console.log("TOTALE EXTERNAL, CHE I DATI CI SONO"+datoWFblue_en_external);

//----------------------------------------------------------------------------------------------  	
var titoloWFblue = Math.round(Number(datoWFblue_en_external)+Number(dataWFblue_food_ext)+Number(datoWFblue_en_internal)+Number(dataWFblue_food_int));
//console.log("TITOLO WFBLUE "+titoloWFblue);
document.getElementById("GT4").innerHTML = titoloWFblue;
//console.log("----------------------------------------------------------------------------------");
//______calcolo valori per tabella dash______

var sommawfbfood = (dataWFblue_food_int+dataWFblue_food_ext);
var sommawfbenergy = (datoWFblue_en_internal+datoWFblue_en_external);
var somma_energy_itsh = Number(total_fossil_user+total_bio_user+total_el_user);

var valfood4 = parseFloat(sommawfbfood/(intakeparse*(1+wastevirgola))).toFixed(3);
document.getElementById("valfood_4").innerHTML = valfood4;

var valen4 = parseFloat(sommawfbenergy/somma_energy_itsh).toFixed(3);
document.getElementById("valenergy_4").innerHTML = valen4;

var valfood8 = parseFloat(((valfood4-initial_value_wfb_food)/initial_value_wfb_food)*100).toFixed(3);
document.getElementById("valfood_8").innerHTML = valfood8+"%";

var valen8 = parseFloat(((valen4-initial_value_wfb_en)/initial_value_wfb_en)*100).toFixed(3);
document.getElementById("valenergy_8").innerHTML = valen8+"%";

//----PERCENTUALE SOTTO AL TITOLO---
var grand_total_ante = parseFloat(Number(((sommawfbfood+sommawfbenergy)-initial_value_wfb_int)/initial_value_wfb_int)-0.08).toFixed(2);
console.log("PERCENTUALE WFB"+grand_total);
var grand_total_round = Math.round(grand_total_ante*100);
var grand_total = Math.abs(grand_total_round);
if(grand_total_round<0){
	grand_total = 0;
} else {}
document.getElementById("percent4").innerHTML =  grand_total+ "% above initial value";

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////	
			
var datiaggbar = [dataWFblue_food_int, dataWFblue_food_ext];
var datiaggbar2 = [datoWFblue_en_internal, datoWFblue_en_external];
//console.log("ARRAY AGGIORNABAR"+datoWFblue_en_internal+" "+datoWFblue_en_external);
		
barChart4.data.datasets[0].data = datiaggbar;
barChart4.data.datasets[1].data = datiaggbar2;
barChart4.update();


} 
	  
var myVarb4 = setInterval(aggiornabar4, 3000);
//FINE BAR GRAFICI SOTTO

});