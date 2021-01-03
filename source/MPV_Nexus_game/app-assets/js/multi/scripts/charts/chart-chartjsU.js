/*=========================================================================================
    File Name: chart-chartjs.js
    Description: Chartjs Examples
    ----------------------------------------------------------------------------------------
    Item Name: Frest HTML Admin Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
var sustainable_limit_LF = 10; var sustainable_limit_wfgreen = 3533; var sustainable_limit_wfblue = 1550;
var phisical_limit_LF = 21; var phisical_limit_wfgreen = 8834; var phisical_limit_wfblue = 5710;

//COSTANTI PER ENERGY E FOOD GRAFICI PRODUCTION//
var initial_value_CF_food = 0.003238332; var initial_value_LF_food = 0.003459326; var initial_value_wfg_food = 1.19415722;
var initial_value_wfb_food = 0.16009438; 
var initial_value_CF_en = 0.062843721771217 ; var initial_value_LF_en = 0.00774419419094049 ; var initial_value_wfg_en= 5.52412077113194; 
var initial_value_wfb_en = 1.10088961437177 ;

var WORLD_plant_cf_FoodY11 = 0; var WORLD_meat_cf_FoodY12 = 0; WORLD_diary_cf_FoodY13 = 0;
var WORLD_plant_lf_FoodX11 = 0.0011; WORLD_meat_lf_FoodX12 = 0; WORLD_diary_lf_FoodX13 = 0;
var WORLD_plant_WFblue_FoodW11 = 0.13; WORLD_meat_WFblue_FoodW12 = 0.39; WORLD_diary_WFblue_FoodW13 = 0.17;
var WORLD_plant_WFgreen_FoodV11 = 0.59; WORLD_meat_WFgreen_FoodV12 = 5.84; WORLD_diary_WFgreen_FoodV13 = 1.70;

//COSTANTI PER I GRAFICI INIZIALI//
var initial_value_cf_int = 24.4212022139062; var initial_value_lf_int = 13.2551883468376;
var initial_value_wfg_int = 5191.68997367378; var initial_value_wfb_int = 773.876129386631;
//

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

var RC_WFgreen = 0.32; var RC_WFblue_Plant = 0.08;  var RC_LF_Plant = 0.0005;
var RC_WFgreen = 190;  var RC_WFblue_Meat = 0.10;  var RC_LF_Meat = 0.0140;
var RC_WFgreen = 0.90;  var RC_WFblue_Diary = 0.10;  var RC_LF_Diary =  0.0070;

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

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
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

  	var themeColors = [$primary, $warning, $danger, $success, $info, $label_color];
  	var rosso = $danger;
  	var giallo = $warning;
  	var verde = $success;

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
		      label: '"Food":',
		      data: [16, 0],
		      backgroundColor: 'yellow'
		      
		    }, {
		      type: 'bar',
		      label: '"Energy":',
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
var intakeparse = Number(document.getElementById("f_D4").value);
////console.log("intake: "+intakeparse);
var wasteparse = Number(document.getElementById("f_D5").value);
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

var YeldCF = Gap_Yeld_parse*YG_closing_CF;
var Mulch = Mulching_parse*Mulching_CF;
var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_CF;
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
//CALCOLO IL VALORE PER LE SOMME DI FOOD CF INTERNAL:
//PLANT:
var plantbasedA = plantbased*(1-fip);
var plantbasedB = YeldCF+Mulch+Deficit;
var plantbasedC = RA_CF_Plant*(1-Number(plantbasedB));	
var plant_cf = (plantbasedA*plantbasedC);
/*//console.log("CALORIE E WASTE:"+cal_waste);
//console.log("PLANT % : "+plant1);
//console.log("PLANT % + WASTE+CAL: "+plantbased);
//console.log("FIP: "+(1-fip));
//console.log("PLANT c18*(1-d18): "+plantbasedA);
//console.log("PLANT REGION A (1-calcolo): "+plantbasedC);*/
console.log("PLANTBASED CF TOTAL ok = Food.K18:"+plant_cf);
//------------------------------------------------------------------------------------------------------------------
//MEAT:	
var meatbasedA = meatbased*(1-fim); 
var meatbasedB = (YeldCF)+(Mulch)+(Deficit);
var meatbasedC = (RA_CF_Meat)*(1-(meatbasedB));
var meat_cf = (meatbasedA)*(meatbasedC);
//var meatres_cf = parseFloat(meatbasedC*(1-tot_percentuale_pioggia)).toFixed(2);
//var meatres_cf = parseFloat(Number(meatbased*(1-fim)*[RA_CF_Meat*(1-tot_percentuale_pioggia)])).toFixed(2);
 console.log("MEAT CF TOT MATH parse = Food.K19: "+meat_cf);
//---------------------------------------------------------------------------------------------------------------------
//DIARY:
var diaryA = (diarybased)*(1-fid); 
var diaryB = (YeldCF)+(Mulch)+(Deficit);
var diaryC = (RA_CF_Diary)*(1-(diaryB));
var diary_cf = (diaryA)*(diaryC);
//console.log("meatparse:"+meatparse+"vegparse:"+vegparse+"vegeparse:"+vegeparse+"diary1:"+diary1+"diarybased:"+diarybased+"diaryA: "+diaryA+"diaryB: "+diaryB+"diaryC: "+diaryC+"diaryA: "+diary_cf);	 
////console.log("DIARY 1(PERCENTUALONE): "+diary1);
console.log("DIARY TOTAL = Food.K20: "+diary_cf);
//---------------------------------------------------------------------------------------------------------------------
var add1 = (plant_cf)+(meat_cf);
var add2 = (add1)+(diary_cf);
var result = (add2);
var dataCF_food_int_parse = Math.floor(result);
var dataCF_food_int = (dataCF_food_int_parse);
console.log("VALORE FOOD INT CF TOTAL = Food.K21: "+dataCF_food_int);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD CF EXTERNAL:
var plantres_cf_e = (plantbased)*(fip);
//var plantres_cf_ext = Number(plantres_cf_e)*Number(WORLD_plant_cf);
var plantres_cf_ext = (plantres_cf_e)*(WORLD_plant_cf);  // WORLD_plant_cf -> Questo si riferisce al contenuto della casella Food.Y11 che è vuota, quindi = 0!!!
console.log("PLANT EXT = Food.O18: "+plantres_cf_ext);	
var meatres_cf_e = (meatbased*fim);
var meatres_cf_ext = (meatres_cf_e)*(WORLD_meat_cf);
console.log("MEAT EXT = Food.O19: "+meatres_cf_ext);	
var diaryres_cf_e = (diarybased*fid);
var diaryres_cf_ext = (diaryres_cf_e)*(WORLD_diary_cf);
console.log("DIARY EXT = Food.O20: "+diaryres_cf_ext);	
	  
var dataCF_food_ext = Math.round(plantres_cf_ext+meatres_cf_ext+diaryres_cf_ext);
console.log("VALORE FOOD EXT CF TOTAL = Food.O21 : "+dataCF_food_ext);
//console.log("==============FINE FOOD CF=======================");


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
		  	
var e_h = (fuel_house_parse)*(((bio_house)+(fossil_house))+(el_house))*(1-(red_house));
var D6a = (1-(red_house))*((somma_valori_house)-(e_h));
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
var fossil_final_cf = (energy_fossil_val)*((RA_CF_Fossil)*0.25)/1000;
console.log("FOSSIL CF INT = EnergyJ34 (ok)= "+fossil_final_cf);
console.log("FOSSIL USER INDUSTRY:"+f_i);

//-----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di BIOFUEL USER:	  
var bio_i_primaop = (A6a)-(A6b);
var b_i = (bio_fr_parse)*(A6b);
var b_t = (bio_fr_parse)*(B6a-B6b);
var b_s = (bio_fr_parse)*(C6a-C6b);
var b_h = (bio_fr_parse)*(D6a);

var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
var bio_final_cf = (energy_bio_val)*((RA_CF_Biofuel*0.27))/1000;
console.log("BIO CF INT = EnergyJ35 (ok) =  "+bio_final_cf);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(A6a);
var e_s = (1-((red_ind_parse)*(el_s)))*100;
e_h = (((fuel_house_parse)*(bio_house+fossil_house))+el_house)*(1-red_house);
		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));

//console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);

var elec1= (PER_A_Wind)*(RA_CF_Wind);
//console.log("SOMMA ELEC1: "+elec1);
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
console.log("ELECTRICITY CF INT = Energy.J36 (ok) = : "+elec_final_cf);
//-----------------------------------------------------------------------------------------------
var datoCFen_internal = Math.round(elec_final_cf+bio_final_cf+fossil_final_cf);
console.log("TOT CF ENERGY INTERNAL = Energy.J37 (ok): "+datoCFen_internal);
//-----------------------------------------------------------------------------------------------

var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(RC_D_CF_Fossil*0.25)/1000;
console.log("FOSSIL EXT CF = Energy.N34 (ok): "+fossil_final_cf_ext);
var bio_final_cf_ext= total_bio_user*(biofuels_parse)*(RC_D_CF_Biofuel*0.27)/1000;
console.log("BIO EXT CF = Energy.N35 (ok): "+bio_final_cf_ext);
var elec_final_cf_ext = (energy_elec_val)*(elec_parse)/1000;
console.log("ELECTRICITY EXT CF = Energy.N36 (ok): "+elec_final_cf_ext);
//----------------------------------------------------------------------------------------------
var datoCFen_external = Math.round(elec_final_cf_ext+bio_final_cf_ext+fossil_final_cf_ext);
console.log("ENERGY EXTERNAL = Energy.N37 (ok)"+datoCFen_external);
//----------------------------------------------------------------------------------------------  	
var titoloCF = parseFloat((datoCFen_external+dataCF_food_ext)+(datoCFen_internal+dataCF_food_int)).toFixed(2);
console.log("TITOLO SOPRA CF: "+titoloCF);
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

//___________________________________________
console.log("----------------------------------------------------------------------------------");
//----------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////	
	  
var GT1 = document.getElementById("GT1");
var GT1p = GT1.innerText;
	  	  
var datiaggbar = [dataCF_food_int, dataCF_food_ext];
var datiaggbar2 = [datoCFen_internal, datoCFen_external];
	
barChart.data.datasets[0].data = datiaggbar;
barChart.data.datasets[1].data = datiaggbar2;
barChart.update();
GT1pp = parseFloat(GT1p);


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
		      label: '"Food":',
		      data: [15, 3],
		      backgroundColor: 'yellow'
		      
		    }, {
		      type: 'bar',
		      label: '"Energy":',
		      backgroundColor: "green",
		      data: [2, 0],
		    }]
		  
      
  };
  var barChartconfig2 = {
    type: 'bar',

    // Chart Options
    options: barchartOptions2,
    data: barchartData2
  };
  
function aggiornabar2() {
//----------------------------------------------------------------------------------
var daysp = parseFloat(document.getElementById("A8_f").value); 
//----------------------------------------------------------------------------------
var intakeparse = parseFloat(document.getElementById("f_D4").value);
////console.log("intake: "+intakeparse);
var wasteparse = Number(document.getElementById("f_D5").value);
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
var plantbasedB = YeldLF+Mulch+Deficit;
var plantbasedC = RA_LF_Plant*(1-Number(plantbasedB));	
var plant_lf = (plantbasedA*plantbasedC);
/*//console.log("CALORIE E WASTE:"+cal_waste);
//console.log("PLANT % : "+plant1);
//console.log("PLANT % + WASTE+CAL: "+plantbased);
//console.log("FIP: "+(1-fip));
//console.log("PLANT c18*(1-d18): "+plantbasedA);
//console.log("PLANT REGION A (1-calcolo): "+plantbasedC);*/
console.log("PLANTBASED LF TOTAL ok = Food.J18:"+plant_lf);
//------------------------------------------------------------------------------------------------------------------
//MEAT:	
var meatbasedA = meatbased*(1-fim); 
var meatbasedB = (YeldLF)+(Mulch)+(Deficit);
var meatbasedC = (RA_LF_Meat)*(1-(meatbasedB));
var meat_lf = (meatbasedA)*(meatbasedC);
 console.log("MEAT LF TOT MATH parse = Food.J19: "+meat_lf);
//---------------------------------------------------------------------------------------------------------------------
//DIARY:
var diaryA = (diarybased)*(1-fid); 
var diaryB = (YeldLF)+(Mulch)+(Deficit);
var diaryC = (RA_LF_Diary)*(1-(diaryB));
var diary_lf = (diaryA)*(diaryC);	 
////console.log("DIARY 1(PERCENTUALONE): "+diary1);
console.log("DIARY LF TOTAL = Food.J20: "+diary_lf);
//---------------------------------------------------------------------------------------------------------------------
var dataLF_food_int = Math.round(plant_lf+meat_lf+diary_lf);
console.log("VALORE FOOD INT LF TOTAL = Food.J21: "+dataLF_food_int);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF EXTERNAL:
var plantres_lf_e = (plantbased)*(fip);
var plantres_lf_ext = (plantres_lf_e)*(WORLD_plant_lf);
console.log("PLANT EXT = Food.N18: "+plantres_lf_ext);	
var meatres_lf_e = (meatbased*fim);
var meatres_lf_ext = (meatres_lf_e)*(WORLD_meat_lf);
console.log("MEAT EXT = Food.N19: "+meatres_lf_ext);	
var diaryres_lf_e = (diarybased*fid);
var diaryres_lf_ext = (diaryres_lf_e)*(WORLD_diary_lf);
console.log("DIARY EXT = Food.N20: "+diaryres_lf_ext);	
	  
var dataLF_food_ext = Math.round(plantres_lf_ext+meatres_lf_ext+diaryres_lf_ext);
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
		  	
var e_h = (fuel_house_parse)*(((bio_house)+(fossil_house))+(el_house))*(1-(red_house));
var D6a = (1-(red_house))*((somma_valori_house)-(e_h));
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
e_h = (((fuel_house_parse)*(bio_house+fossil_house))+el_house)*(1-red_house);
		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));

//console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);

var elec1= (PER_A_Wind)*(RA_LF_Wind);
//console.log("SOMMA ELEC1: "+elec1);
var elec2 =(PER_A_Solar)*(RA_LF_Solar);
var elec3 =(PER_A_Hydro)*(RA_LF_Hydro);
var elec4 =(PER_A_Biofuel)*(RA_LF_Biofuel);
var elec5 =(PER_A_Nuclear)*(RA_LF_Nuclear);
var elec6 =(PER_A_Fossil)*(RA_LF_Fossil); 	

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);

var electricity_sum = (elec1add)+(elec2add)+(elec3add);

var elec_final_lf = (energy_elec_val)*(electricity_sum)/1000;
console.log("ELECTRICITY LF INT = Energy.I36 (ok) = : "+elec_final_lf);
//-----------------------------------------------------------------------------------------------
var datoLFen_internal = Math.round(elec_final_lf+bio_final_lf+fossil_final_lf);
console.log("TOT LF ENERGY INTERNAL = Energy.I37 (ok): "+datoLFen_internal);
//-----------------------------------------------------------------------------------------------

var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(RC_D_LF_Fossil*0.25)/1000;
console.log("FOSSIL EXT LF = Energy.M34 (ok): "+fossil_final_lf_ext);
var bio_final_lf_ext= total_bio_user*(biofuels_parse)*(RC_D_LF_Biofuel*0.27)/1000;
console.log("BIO EXT LF = Energy.M35 (ok): "+bio_final_lf_ext);
var elec_final_lf_ext = (energy_elec_val)*(elec_parse)/1000;
console.log("ELECTRICITY EXT LF = Energy.M36 (ok): "+elec_final_lf_ext);
//----------------------------------------------------------------------------------------------
var datoLFen_external = Math.round(elec_final_lf_ext+bio_final_lf_ext+fossil_final_lf_ext);
console.log("ENERGY EXTERNAL = Energy.M37 (ok)"+datoLFen_external);
//----------------------------------------------------------------------------------------------  	
var titoloLF = parseFloat((datoLFen_external+dataLF_food_ext)+(datoLFen_internal+dataLF_food_int)).toFixed(2);
document.getElementById("GT2").innerHTML = titoloLF;
console.log("----------------------------------------------------------------------------------");

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
// Create the chart
var barChart2 = new Chart(barChartctx2, barChartconfig2);  
  
  
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
		      label: '"Food":',
		      data: [4266, 2],
		      backgroundColor: 'yellow'
		      
		    }, {
		      type: 'bar',
		      label: '"Energy":',
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
  
function aggiornabar3() {
//----------------------------------------------------------------------------------
var daysp = parseFloat(document.getElementById("A8_f").value); 
//----------------------------------------------------------------------------------
var intakeparse = parseFloat(document.getElementById("f_D4").value);
////console.log("intake: "+intakeparse);
var wasteparse = Number(document.getElementById("f_D5").value);
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
var plantbasedB = YeldWFg+Mulch+Deficit;
var plantbasedC = RA_WFgreen_Plant*(1-Number(plantbasedB));	
var plant_WFgreen = (plantbasedA*plantbasedC);
/*//console.log("CALORIE E WASTE:"+cal_waste);
//console.log("PLANT % : "+plant1);
//console.log("PLANT % + WASTE+CAL: "+plantbased);
//console.log("FIP: "+(1-fip));
//console.log("PLANT c18*(1-d18): "+plantbasedA);
//console.log("PLANT REGION A (1-calcolo): "+plantbasedC);*/
console.log("PLANTBASED WFgreen TOTAL ok = Food.H18:"+plant_WFgreen);
//------------------------------------------------------------------------------------------------------------------
//MEAT:	
var meatbasedA = meatbased*(1-fim); 
var meatbasedB = (YeldWFg)+(Mulch)+(Deficit);
var meatbasedC = (RA_WFgreen_Meat)*(1-(meatbasedB));
var meat_WFgreen = (meatbasedA)*(meatbasedC);
 console.log("MEAT WFgreen TOT MATH parse = Food.H19: "+meat_WFgreen);
//---------------------------------------------------------------------------------------------------------------------
//DIARY:
var diaryA = (diarybased)*(1-fid); 
var diaryB = (YeldWFg)+(Mulch)+(Deficit);
var diaryC = (RA_WFgreen_Diary)*(1-(diaryB));
var diary_WFgreen = (diaryA)*(diaryC);	 
////console.log("DIARY 1(PERCENTUALONE): "+diary1);
console.log("DIARY WFgreen TOTAL = Food.H20: "+diary_WFgreen);
//---------------------------------------------------------------------------------------------------------------------
var dataWFgreen_food_int = Math.round(plant_WFgreen+meat_WFgreen+diary_WFgreen);
console.log("VALORE FOOD INT WFgreen TOTAL = Food.H21: "+dataWFgreen_food_int);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD WFgreen EXTERNAL:
var plantres_WFgreen_e = (plantbased)*(fip);
var plantres_WFgreen_ext = (plantres_WFgreen_e)*(WORLD_plant_wfgreen);
console.log("PLANT EXT = Food.L18: "+plantres_WFgreen_ext);	
var meatres_WFgreen_e = (meatbased*fim);
var meatres_WFgreen_ext = (meatres_WFgreen_e)*(WORLD_meat_wfgreen);
console.log("MEAT EXT = Food.L19: "+meatres_WFgreen_ext);	
var diaryres_WFgreen_e = (diarybased*fid);
var diaryres_WFgreen_ext = (diaryres_WFgreen_e)*(WORLD_diary_wfgreen);
console.log("DIARY EXT = Food.L20: "+diaryres_WFgreen_ext);	
	  
var dataWFgreen_food_ext = Math.round(plantres_WFgreen_ext+meatres_WFgreen_ext+diaryres_WFgreen_ext);
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
		  	
var e_h = (fuel_house_parse)*(((bio_house)+(fossil_house))+(el_house))*(1-(red_house));
var D6a = (1-(red_house))*((somma_valori_house)-(e_h));
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
e_h = (((fuel_house_parse)*(bio_house+fossil_house))+el_house)*(1-red_house);
		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));

//console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);

var elec1= (PER_A_Wind)*(RA_WFgreen_Wind);
//console.log("SOMMA ELEC1: "+elec1);
var elec2 =(PER_A_Solar)*(RA_WFgreen_Solar);
var elec3 =(PER_A_Hydro)*(RA_WFgreen_Hydro);
var elec4 =(PER_A_Biofuel)*(RA_WFgreen_Biofuel);
var elec5 =(PER_A_Nuclear)*(RA_WFgreen_Nuclear);
var elec6 =(PER_A_Fossil)*(RA_WFgreen_Fossil); 	

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);

var electricity_sum = (elec1add)+(elec2add)+(elec3add);

var elec_final_WFgreen = (energy_elec_val)*(electricity_sum)/1000;
console.log("ELECTRICITY WFgreen INT = Energy.G36 (ok) = : "+elec_final_WFgreen);
//-----------------------------------------------------------------------------------------------
var datoWFgreen_en_internal = Math.round(elec_final_WFgreen+bio_final_WFgreen+fossil_final_WFgreen);
console.log("TOT WFgreen ENERGY INTERNAL = Energy.G37 (ok): "+datoWFgreen_en_internal);
//-----------------------------------------------------------------------------------------------

var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(RC_D_WFgreen_Fossil*0.25)/1000;
console.log("FOSSIL EXT WFgreen = Energy.K34 (ok): "+fossil_final_WFgreen_ext);
var bio_final_WFgreen_ext= total_bio_user*(biofuels_parse)*(RC_D_WFgreen_Biofuel*0.27)/1000;
console.log("BIO EXT WFgreen = Energy.K35 (ok): "+bio_final_WFgreen_ext);
var elec_final_WFgreen_ext = (energy_elec_val)*(elec_parse)/1000;
console.log("ELECTRICITY EXT WFgreen = Energy.K36 (ok): "+elec_final_WFgreen_ext);
//----------------------------------------------------------------------------------------------
var datoWFgreen_en_external = Math.round(elec_final_WFgreen_ext+bio_final_WFgreen_ext+fossil_final_WFgreen_ext);
console.log("ENERGY EXTERNAL = Energy.K37 (ok)"+datoWFgreen_en_external);
//----------------------------------------------------------------------------------------------  	
var titoloWFgreen = parseFloat((datoWFgreen_en_external+dataWFgreen_food_ext)+(datoWFgreen_en_internal+dataWFgreen_food_int)).toFixed(2);
console.log("TITOLO SOPRA WFgreen: "+titoloWFgreen);
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
// Create the chart
var barChart3 = new Chart(barChartctx3, barChartconfig3);
  
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
		      label: '"Food":',
		      data: [609, 170],
		      backgroundColor: 'yellow'
		      
		    }, {
		      type: 'bar',
		      label: '"Energy":',
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
  
function aggiornabar4() {	  
//----------------------------------------------------------------------------------
var daysp = parseFloat(document.getElementById("A8_f").value); 
//----------------------------------------------------------------------------------
var intakeparse = parseFloat(document.getElementById("f_D4").value);
////console.log("intake: "+intakeparse);
var wasteparse = Number(document.getElementById("f_D5").value);
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

/*	if(totalone > 100) {
		alert("totalone: Campo Vegan+Campo Vegetarian+Campo Meat > 100. Portare la somma a 100");	
	} */

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
var plantbasedB = YeldWFb+Mulch+Deficit;
var plantbasedC = RA_WFblue_Plant*(1-Number(plantbasedB));	
var plant_WFblue = (plantbasedA*plantbasedC);
/*//console.log("CALORIE E WASTE:"+cal_waste);
//console.log("PLANT % : "+plant1);
//console.log("PLANT % + WASTE+CAL: "+plantbased);
//console.log("FIP: "+(1-fip));
//console.log("PLANT c18*(1-d18): "+plantbasedA);
//console.log("PLANT REGION A (1-calcolo): "+plantbasedC);*/
console.log("PLANTBASED WFblue TOTAL ok = Food.I18:"+plant_WFblue);
//------------------------------------------------------------------------------------------------------------------
//MEAT:	
var meatbasedA = meatbased*(1-fim); 
var meatbasedB = (YeldWFb)+(Mulch)+(Deficit);
var meatbasedC = (RA_WFblue_Meat)*(1-(meatbasedB));
var meat_WFblue = (meatbasedA)*(meatbasedC);
 console.log("MEAT WFblue TOT MATH parse = Food.I19: "+meat_WFblue);
//---------------------------------------------------------------------------------------------------------------------
//DIARY:
var diaryA = (diarybased)*(1-fid); 
var diaryB = (YeldWFb)+(Mulch)+(Deficit);
var diaryC = (RA_WFblue_Diary)*(1-(diaryB));
var diary_WFblue = (diaryA)*(diaryC);	 
////console.log("DIARY 1(PERCENTUALONE): "+diary1);
console.log("DIARY WFblue TOTAL = Food.I20: "+diary_WFblue);
//---------------------------------------------------------------------------------------------------------------------
var dataWFblue_food_int = Math.round(plant_WFblue+meat_WFblue+diary_WFblue);
console.log("VALORE FOOD INT WFblue TOTAL = Food.I21: "+dataWFblue_food_int);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD WFblue EXTERNAL:
var plantres_WFblue_e = (plantbased)*(fip);
var plantres_WFblue_ext = (plantres_WFblue_e)*(WORLD_plant_wfblue);
console.log("PLANT EXT = Food.M18: "+plantres_WFblue_ext);	
var meatres_WFblue_e = (meatbased*fim);
var meatres_WFblue_ext = (meatres_WFblue_e)*(WORLD_meat_wfblue);
console.log("MEAT EXT = Food.M19: "+meatres_WFblue_ext);	
var diaryres_WFblue_e = (diarybased*fid);
var diaryres_WFblue_ext = (diaryres_WFblue_e)*(WORLD_diary_wfblue);
console.log("DIARY EXT = Food.M20: "+diaryres_WFblue_ext);	
	  
var dataWFblue_food_ext = Math.round(plantres_WFblue_ext+meatres_WFblue_ext+diaryres_WFblue_ext);
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
		  	
var e_h = (fuel_house_parse)*(((bio_house)+(fossil_house))+(el_house))*(1-(red_house));
var D6a = (1-(red_house))*((somma_valori_house)-(e_h));
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
e_h = (((fuel_house_parse)*(bio_house+fossil_house))+el_house)*(1-red_house);
		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));

//console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);

var elec1= (PER_A_Wind)*(RA_WFblue_Wind);
//console.log("SOMMA ELEC1: "+elec1);
var elec2 =(PER_A_Solar)*(RA_WFblue_Solar);
var elec3 =(PER_A_Hydro)*(RA_WFblue_Hydro);
var elec4 =(PER_A_Biofuel)*(RA_WFblue_Biofuel);
var elec5 =(PER_A_Nuclear)*(RA_WFblue_Nuclear);
var elec6 =(PER_A_Fossil)*(RA_WFblue_Fossil); 	

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);

var electricity_sum = (elec1add)+(elec2add)+(elec3add);

var elec_final_WFblue = (energy_elec_val)*(electricity_sum)/1000;
console.log("ELECTRICITY WFblue INT = Energy.G36 (ok) = : "+elec_final_WFblue);
//-----------------------------------------------------------------------------------------------
var datoWFblue_en_internal = Math.round(elec_final_WFblue+bio_final_WFblue+fossil_final_WFblue);
console.log("TOT WFblue ENERGY INTERNAL = Energy.G37 (ok): "+datoWFblue_en_internal);
//-----------------------------------------------------------------------------------------------

var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(RC_D_WFblue_Fossil*0.25)/1000;
console.log("FOSSIL EXT WFblue = Energy.K34 (ok): "+fossil_final_WFblue_ext);
var bio_final_WFblue_ext= total_bio_user*(biofuels_parse)*(RC_D_WFblue_Biofuel*0.27)/1000;
console.log("BIO EXT WFblue = Energy.K35 (ok): "+bio_final_WFblue_ext);
var elec_final_WFblue_ext = (energy_elec_val)*(elec_parse)/1000;
console.log("ELECTRICITY EXT WFblue = Energy.K36 (ok): "+elec_final_WFblue_ext);
//----------------------------------------------------------------------------------------------
var datoWFblue_en_external = Math.round(elec_final_WFblue_ext+bio_final_WFblue_ext+fossil_final_WFblue_ext);
console.log("ENERGY EXTERNAL = Energy.K37 (ok)"+datoWFblue_en_external);
//----------------------------------------------------------------------------------------------  	
var titoloWFblue = parseFloat((datoWFblue_en_external+dataWFblue_food_ext)+(datoWFblue_en_internal+dataWFblue_food_int)).toFixed(2);
console.log("TITOLO SOPRA WFblue: "+titoloWFblue);
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
var grand_total = parseFloat(((sommawfbood+sommawfbenergy)-initial_value_wfb_int)/initial_value_wfb_int).toFixed(2)
document.getElementById("percent4").innerHTML = grand_total*100 + "% above initial value";

//----------------------------------------------------------------------------------------------

//___________________________________________
	  
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////	
			
var datiaggbar = [dataWFblue_food_int, dataWFblue_food_ext];
var datiaggbar2 = [datoWFblue_en_internal, datoWFblue_en_external];
		
barChart4.data.datasets[0].data = datiaggbar;
barChart4.data.datasets[1].data = datiaggbar2;
barChart4.update();

document.getElementById("GT4").innerHTML = titoloWFblue;
 
} 
	  
var myVarb4 = setInterval(aggiornabar4, 3000);
// Create the chart
var barChart4 = new Chart(barChartctx4, barChartconfig4);
  

//Bar Chart
//------------------------------------------

//Get the context of the Chart canvas element we want to select
var barChartctxEn = $("#bar-chart-energy");
//Chart Options
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
//Chart Data
var barchartDataEn = {

		    labels: ["Industry", "Transport", "Services", "Households"],
		    datasets: [{
		      type: 'bar',
		      label: 'Serie "Fossil"',
		      data: [30.29505029, 41.04872569, 6.233821031, 17.90441711],
		      backgroundColor: 'brown'
		      
		    }, {
		      type: 'bar',
		      label: 'Serie "Biofuels"',
		      backgroundColor: "green",
		      data: [21.31074971, 28.87531496, 4.385118969, 12.59468289],
		    },
		    {
			      type: 'bar',
			      label: 'Serie "Electricity"',
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


//Create the chart
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
	  
		var A6a = Number(1-red_ind_parse)*Number(somma_valori_ind); 
	  	var A6aa = parseFloat(Number((1-red_ind_parse)*el_ind)).toFixed(2);
	  	var A6b = Number(A6a) - Number(A6aa);
	  	
	  	var B6a = parseFloat(Number((1-red_tr_parse))*Number(1-(el_tr_parse*Number(1-0.7/2.3)))*Number(somma_valori_tr)).toFixed(2);
	  	//var B6aA = Number((1-red_tr_parse))*[Number(1-el_tr_parse) *Number(1-(0.7/2.3))]*Number(somma_valori_tr);
	  	//var B6a = parseFloat(B6aA).toFixed(2);
	  	var B6b = parseFloat(Number(el_tr_parse)*Number(B6a)).toFixed(2);
	  	//console.log("B6A: "+B6a+" B6B: "+B6b+" Biofuel_Fraction: "+bio_fr_parse+" Electrification parse: "+el_tr_parse);

	  	var C6a = Number(1-red_ser_parse)*Number(somma_valori_s);
	  	var C6b = Number(1-red_ind_parse)*Number(el_s);
	  	
	  	var D6a = parseFloat(Number((1-red_house))*Number(somma_valori_house)-Number(fuel_house_parse)*(Number(somma_valori_house)+Number(el_house)*Number(1-red_house))).toFixed(2);
	  //	var D6b = Number(fuel_house_parse)*[Number(somma_valori_house)+Number(el_house)]*Number(1-red_house);
	  	  
//calcolo valori iniziali di FOSSIL : industry -transport -services -households
	var f_i_primaop = Number(A6a)-Number(A6b);
	  var f_i = parseFloat(Number((1-bio_fr_parse))*Number(A6b)).toFixed(2);
	  var f_t = parseFloat((1-bio_fr_parse)*(B6a-B6b)).toFixed(2);
	  var f_s = parseFloat((1-bio_fr_parse)*(C6a-C6b)).toFixed(2);
	  var f_h = parseFloat((1-bio_fr_parse)*(D6a)).toFixed(2);
//caoclo valori iniziali di BIOFUEL	  
	  var b_i = parseFloat((bio_fr_parse)*(A6a-A6b)).toFixed(2);
	  var b_t = parseFloat((bio_fr_parse)*(B6a-B6b)).toFixed(2);
	  var b_s = parseFloat((bio_fr_parse)*(C6a-C6b)).toFixed(2);
	  var b_h = parseFloat((bio_fr_parse)*(D6a)).toFixed(2);
//calcolo valori iniziali ELECTRICITY:
	  var e_i = parseFloat((1-red_ind_parse)*el_ind).toFixed(2);
	  var e_t = parseFloat((el_tr_parse)*(A6a)).toFixed(2);
	  var e_s = parseFloat((1-(Number(red_ind_parse)*Number(somma_valori_s)))).toFixed(2);
	  var e_h = parseFloat((fuel_house_parse)*(somma_valori_house + el_house)*(1-red_house)).toFixed(2);
	  
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
    },
    legend: {
        display: false
    },
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
		//Controllo sul totale//
  
/*function ControlloTotale() {
	  var veg = document.getElementById("f_C6").value;
	  var vegparse =parseInt(veg);
	  var vege = document.getElementById("f_C7").value;
	  var vegeparse = parseInt(vege);
	  var meat = document.getElementById("f_C8").value;
	  var meatparse = parseInt(meat);

	  var array = [vegeparse, vegparse, meatparse]; 
	  var suma = array.reduce((total, amount) => total + amount , 0);
	  suma = parseInt(suma);
	   if (suma >100) {
	  var differenza =  suma-100/array.lenght;
	  var a = array[0]-differenza;
	  var b= array[1]-differenza;
	  var c=array[2]-differenza;
	  alert("COSA SUCCEDE?"+array);
	  vegparse = a;
	  vegeparse = b;
	  meatparse = c;
	  
	   }
	   else	if((array[0]<differenza)||(array[1]<differenza)||(array[2]<differenza)) {
		   var arraydue = array.reduce((x) => (x < differenza && x.push(x),x),[]);
		  alert("COSA SUCCEDE?"+arraydue);
	  	}
	   else {}
	 
	  

} 
var controllo = setInterval(ControlloTotale, 3000);*/
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------
//-------------------------------------------------------------


  
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
  
  
  
  

  // Doughnut Chart
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
      data: [4664,0,0,0,0, 203425],
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
	  var daysp = parseFloat(document.getElementById("A8_f").value); 
	  //----------------------------------------------------------------------------------
	  var intakeparse = parseFloat(document.getElementById("f_D4").value);
	  ////console.log("intake: "+intakeparse);
	  var wasteparse = Number(document.getElementById("f_D5").value);
	  var wastevirgola= wasteparse/100;
	  //----------------------------------------------------------------------------------
	  var vegparse =parseFloat(document.getElementById("f_C6").value)/100;
	  console.log("PARSING: VEGANI"+vegparse);
	  var vegeparse = parseFloat(document.getElementById("f_C7").value)/100;
	  console.log("PARSING: VEGETARIANI"+vegeparse);
	  var meatparse = parseFloat(document.getElementById("f_C8").value)/100;
	  console.log("PARSING: CARNE"+meatparse);

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
	  var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70));
	  console.log("PLANT %:"+plant1);
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

	  var YeldCF = Gap_Yeld_parse*YG_closing_CF;
	  var Mulch = Mulching_parse*Mulching_CF;
	  var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_CF;

	  //----------------------------------------------------------------------------------------------------------------
	  		//calcolo WASTE:
		  var waste_val = parseFloat((wasteparse*intakeparse)/100).toFixed(2);
		  waste_val = parseFloat(waste_val).toFixed(2);  
		  var cal_waste = Number(waste_val)+Number(intakeparse);
		  var plantbased = Number(plant1)*Number(cal_waste)/100;
		  var meatbased = Number(meat1)*Number(cal_waste)/100;
		  var diarybased = Number(diary1)*Number(cal_waste)/100;
		  
	  //----------------------------------------------------------------------------------------------------------------
	  //CALCOLO IL VALORE PER LE SOMME DI FOOD:
	  //CALCOLO IL VALORE PER LE SOMME DI FOOD CF INTERNAL:
	  //PLANT:
	  var plantbasedA = (1-Number(fip))*plantbased;	  
	  var plantbasedWorld = Number(fip)*plantbased;
	  console.log("PLAAAAAAANT:"+plantbasedWorld);
	  console.log("fip"+fip);
	  console.log("plantbased:"+plantbased);

	  //------------------------------------------------------------------------------------------------------------------
	  //MEAT:	
	  var meatbasedA = (1-Number(fim))*meatbased; 
	  var meatbasedWorld = Number(fim)*plantbased;
	  //---------------------------------------------------------------------------------------------------------------------
	  //DIARY:
	  var diarybasedA = Number(fid)*(diarybased); 
	  var diarybasedWorld = Number(fid)*plantbased;

	  //---------------------------------------------------------------------------------------------------------------------

	//VALORI PER LOCAL, B, C, D, EU, WORLD: (1-%utente)*(total_food+waste*cal)
 

	  var add1 = Number(plantbasedA)+Number(meatbasedA);
	  var add2 = Number(add1)+Number(diarybasedA);
	  var result = add2;
	  var data_local_food_int_parse = Math.ceil(result);
	  var local_food = parseFloat(data_local_food_int_parse).toFixed(2);




//INSERISCI: RADIO BUTTON, IF SELECTED.VALUE = IMPORT CODE DELLA REGIONE,
	  //ALLORA ESEGUE: (TOTAL DI PLANT-MEAT-DIARY IN %)*(CAL+WASTE) DELLA DASH IN OGGETTO.
	  var code_import = 6;
	  var World = 6;
	  var B = 2;
	  var C = 3;
	  var D = 4;
	  var EU = 5;
	  			 
	  
	
		  var world_plant = plantbasedWorld;
		  var world_meat = 0; 
		  var world_diary = 0; 
		  var world_food = Math.round(Number(world_plant)+Number(world_meat)+Number(world_diary));//local_food;
		  console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWORLD: "+world_food);
		  
		  var B_food = 0;
		  var C_food = 0;
		  var D_food = 0;
		  var EU_food = 0;
//C'è UN CICLO IF-ELSE : IL CODE_IMPORT è SEMPRE SU 6, NON SEMBRA VARIARE. SE NON CORRISPONDESSE	
// A 6, MA A 2 = REGION B, 3 = REGION C ETC. ALLORA I VALORI DELLE REGIONI NON SAREBBERO 0, MA
// = ALLE STESSE OPERAZIONI DI LOCAL E WORLD.
	

var datiagghor = [local_food, B_food, C_food, D_food, EU_food, world_food];


doughnutSimpleChart2.data.datasets[0].data = datiagghor;


	  
  }
  

  var myVarpolar = setInterval(aggiornaSecurity, 3000);   
  


  
  // Doughnut Chart
  // ---------------------------------------------
  //Get the context of the Chart canvas element we want to select
  var doughnutChartctx3 = $("#polar-chart-security-2");
  var horizonalLinePlugin = {
		  afterDraw: function(chartInstance) {
		    var yScale = chartInstance.scales["y-axis-0"];
		    var canvas = chartInstance.chart;
		    var ctx = canvas.ctx;
		    var index;
		    var line;
		    var style;

		    if (chartInstance.options.horizontalLine) {
		      for (index = 0; index < chartInstance.options.horizontalLine.length; index++) {
		        line = chartInstance.options.horizontalLine[index];

		        if (!line.style) {
		          style = "rgba(169,169,169, .6)";
		        } else {
		          style = line.style;
		        }

		        if (line.y) {
		          yValue = yScale.getPixelForValue(line.y);
		        } else {
		          yValue = 0;
		        }

		        ctx.lineWidth = 3;

		        if (yValue) {
		          ctx.beginPath();
		          ctx.setLineDash([3, 5]);/*dashes are 3px and spaces are 5px*/
		          ctx.moveTo(0, yValue);
		          ctx.lineTo(canvas.width, yValue);
		          ctx.strokeStyle = style;
		          ctx.stroke();
		        }

		        if (line.text) {
		          ctx.fillStyle = style;
		          ctx.fillText(line.text, 0, yValue + ctx.lineWidth);
		        }
		      }
		      return;
		    };
		  }
		};
		Chart.pluginService.register(horizonalLinePlugin);
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
	  var daysp = parseInt(days); 
	  var intake = document.getElementById("f_D4").value;
	  var intakeparse = parseInt(intake);
	  ////console.log("intake: "+intakeparse);
	  var waste = document.getElementById("f_D5").value;
	  var wasteparse = parseInt(waste);    		  
	  var days = document.getElementById("A8_f").value;	  
	  var wind = document.getElementById("em_J21").value;
	  var windp = parseInt(wind);	
	  var fuel = document.getElementById("em_J26").value;
	  var fuelp = parseInt(fuel);


//////////////////// CALCOLO ENERGY ///////////////////////////////
	  		var reduction_ind = document.getElementById("e_N5").value;
	  	  var red_ind_parse = parseInt(reduction_ind)/100;
	  	  ////console.log("red_ind: "+red_ind_parse);
	  	  var reduction_transp = document.getElementById("e_N6").value;
	  	  var red_tr_parse = parseInt(reduction_transp)/100;
	  	  var reduction_services = document.getElementById("e_N7").value;
	  	  var red_ser_parse =parseInt(reduction_services)/100;
	  	  var reduction_household = document.getElementById("e_N8").value;
	  	  var red_house = parseInt(reduction_household)/100;
	  	  var elect_transp = document.getElementById("e_N11").value;
	  	  var el_tr_parse = parseInt(elect_transp)/100;  
	  	  var fuel_reduction_house = document.getElementById("e_N12").value;
	  	  var fuel_house_parse = parseInt(fuel_reduction_house)/100;  
	  	  var biofuel_fraction= document.getElementById("e_N13").value;
	  	  var bio_fr_parse = parseInt(biofuel_fraction)/100;  
	  	  	//console.log("SECURITY bio: "+bio_fr_parse);
	  	  
	  	  var fossilfuels = document.getElementById("L30").value;
	  	  		var fossilf_parse = parseInt(fossilfuels)/100;
	  	  		////console.log("SECURITY fossilparse: "+fossilf_parse);
	  	  var biofuels = document.getElementById("L31").value;
	  	  		var biofuels_parse = parseInt(biofuels)/100;
	  	  var elctfuels = document.getElementById("L32").value;
	  	  		var elec_parse = parseInt(elctfuels)/100;
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
		  
	  	  var somma_valori_tr = Number(fossil_tr+bio_tr+el_tr);
	  	  ////console.log("Fossil IND:"+fossil_ind+" - FOSSIL TR: "+fossil_tr+" - FOSSIL S: "+fossil_s+" - FOSSIL HOUSE: "+fossil_house);
	   	  var somma_valori_ind = Number(parseFloat(fossil_ind+bio_ind+el_ind).toFixed(2));
	  	  var somma_valori_s = Number(parseFloat(fossil_s+bio_s+el_s).toFixed(2));
	  	  var somma_valori_house = Number(parseFloat(fossil_house+bio_house+el_house).toFixed(2));
	  	//FINE CONSUMPTION  
var fuels_sum = Number(fossil_ind)+Number(fossil_tr)+Number(fossil_s)+Number(fossil_house);
//console.log("FOSSIL TOTALE SECURITY: "+fuels_sum);

var A6a = Number(1-red_ind_parse)*Number(somma_valori_ind); 
	var A6aa = parseFloat(Number((1-red_ind_parse)*el_ind)).toFixed(2);
	var A6b = Number(A6a) - Number(A6aa);
	
	var B6a = parseFloat(Number((1-red_tr_parse))*Number(1-(el_tr_parse*Number(1-0.7/2.3)))*Number(somma_valori_tr)).toFixed(2);
	//var B6aA = Number((1-red_tr_parse))*[Number(1-el_tr_parse) *Number(1-(0.7/2.3))]*Number(somma_valori_tr);
	//var B6a = parseFloat(B6aA).toFixed(2);
	var B6b = parseFloat(Number(el_tr_parse)*Number(B6a)).toFixed(2);
	//console.log("B6A: "+B6a+" B6B: "+B6b+" Biofuel_Fraction: "+bio_fr_parse+" Electrification parse: "+el_tr_parse);

	var C6a = Number(1-red_ser_parse)*Number(somma_valori_s);
	var C6b = Number(1-red_ind_parse)*Number(el_s);
	
	var D6a = parseFloat(Number((1-red_house))*Number(somma_valori_house)-Number(fuel_house_parse)*(Number(somma_valori_house)+Number(el_house)*Number(1-red_house))).toFixed(2);
//	var D6b = Number(fuel_house_parse)*[Number(somma_valori_house)+Number(el_house)]*Number(1-red_house);
	  
	  //calcolo valori iniziali di FOSSIL USER: industry -transport -services -households
	  	var f_i_primaop = Number(A6a)-Number(A6b);
	  	  var f_i = parseFloat(Number((1-bio_fr_parse))*Number(A6b)).toFixed(2);	   
	  	  var f_t = parseFloat(Number((1-bio_fr_parse)*(B6a-B6b))).toFixed(2);
	  	  var f_s = parseFloat(Number((1-bio_fr_parse)*(C6a-C6b))).toFixed(2);
	  	  var f_h = parseFloat(Number((1-bio_fr_parse)*(D6a))).toFixed(2);
	  	  var somma_tutto_fuel_user = Number((1-bio_fr_parse)*(A6a-A6b));
	  	  var total_fossil_user = parseFloat(Number(f_i)+Number(f_t)+Number(f_s)+Number(f_h)).toFixed(2); 
	

	  //caoclo valori iniziali di BIOFUEL USER:	  
	  	  var b_i = parseFloat((bio_fr_parse)*(A6a-A6b)).toFixed(2);
	  	  var b_t = parseFloat((bio_fr_parse)*(B6a-B6b)).toFixed(2);
	  	  var b_s = parseFloat((bio_fr_parse)*(C6a-C6b)).toFixed(2);
	  	  var b_h = parseFloat((bio_fr_parse)*(D6a)).toFixed(2);
	  	var total_bio_user = parseFloat(Number(b_i)+Number(b_t)+Number(b_s)+Number(b_h)).toFixed(2); 
			//console.log("TOTAL BIO USER IND: "+total_bio_user);
	  //calcolo valori iniziali ELECTRICITY USER:
	  	  var e_i = parseFloat((1-red_ind_parse)*el_ind).toFixed(2);
	  	  var e_t = parseFloat((el_tr_parse)*(A6a)).toFixed(2);
	  	  var e_s = parseFloat((1-(Number(red_ind_parse)*Number(somma_valori_s)))).toFixed(2);
	  	var e_h = parseFloat((fuel_house_parse)*(bio_house + el_house)*(1-red_house)).toFixed(2);
	  		var total_el_user = parseFloat(Number(e_i)+Number(e_t)+Number(e_s)+Number(e_h)).toFixed(2);
		  	//console.log("TOTAL ELE USER IND: "+total_el_user);
  	  

		  	var fossil_security_energy = Number(total_fossil_user)*Number(1-fossilf_parse);
			 var biof_security_energy = Number(total_bio_user)*Number(1-biofuels_parse);
			 var elec_security_energy = Number(total_el_user)*Number(1-elec_parse);
			 
			 var tot = Number(fossil_security_energy)+Number(biof_security_energy)+Number(elec_security_energy);
	  	  var local_energy = tot;
	  	//console.log("TOTALE ENERGY SECURITY:"+fossil_security_energy);
	  	//console.log("TOTALE ENERGY SECURITY:"+tot);


//INSERISCI: RADIO BUTTON, IF SELECTED.VALUE = IMPORT CODE DELLA REGIONE,
	  //ALLORA ESEGUE: (TOTAL DI PLANT-MEAT-DIARY IN %)*(CAL+WASTE) DELLA DASH IN OGGETTO.
	  var code_import = 6;
	  var World = 6;
	  var B = 2;
	  var C = 3;
	  var D = 4;
	  var EU = 5;
	  			 
	  
	
		/*  var world_plant = [(1-fip)*plantbased]/1000;
		  var world_meat = [(1-fim)*meatbased]/1000;
		  var world_diary = (1-fid)*diary1*[(waste_val+intakeparse)+intakeparse];
		  var world_food = [(1-fid)*diarybased]/1000;
		  //console.log("WORLD: "+world_food); */
		  
		  var B_en = 0;
		  var C_en = 0;
		  var D_en = 0;
		  var EU_en = 0;
		  var world_en = 0;
//C'è UN CICLO IF-ELSE : IL CODE_IMPORT è SEMPRE SU 6, NON SEMBRA VARIARE. SE NON CORRISPONDESSE	
// A 6, MA A 2 = REGION B, 3 = REGION C ETC. ALLORA I VALORI DELLE REGIONI NON SAREBBERO 0, MA
// = ALLE STESSE OPERAZIONI DI LOCAL E WORLD.
	

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
		    }
		  };

		  // Chart Data
		  var horizontalchartData = {
		    labels: ["Local", "B", "C", "D", "EU", "WORLD"],
		    labels: ["Local", "B", "C", "D", "EU", "WORLD"],
		    datasets: [{
		      label: "Base Value CF",
		      data: [23,0,0,0,0,0],
		      backgroundColor: themeColors,
		      borderColor: "transparent"
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
		    type: 'horizontalBar',

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
	  var wasteparse = Number(document.getElementById("f_D5").value);
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

	  var YeldCF = Gap_Yeld_parse*YG_closing_CF;
	  var Mulch = Mulching_parse*Mulching_CF;
	  var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_CF;

	  //----------------------------------------------------------------------------------------------------------------
	  var meatbased = (meat1*cal_waste)/100;
	  var diarybased = (diary1*cal_waste)/100;
	  var plantbased = (plant1*cal_waste)/100;
	  //----------------------------------------------------------------------------------------------------------------
	  //CALCOLO IL VALORE PER LE SOMME DI FOOD:
	  //CALCOLO IL VALORE PER LE SOMME DI FOOD CF INTERNAL:
	  //PLANT:
	  var plantbasedA = plantbased*(1-fip);
	  var plantbasedB = YeldCF+Mulch+Deficit;
	  var plantbasedC = RA_CF_Plant*(1-Number(plantbasedB));	
	  var plant_cf = (plantbasedA*plantbasedC);

	  //------------------------------------------------------------------------------------------------------------------
	  //MEAT:	
	  var meatbasedA = meatbased*(1-fim); 
	  var meatbasedB = (YeldCF)+(Mulch)+(Deficit);
	  var meatbasedC = (RA_CF_Meat)*(1-(meatbasedB));
	  var meat_cf = (meatbasedA)*(meatbasedC);
	  //---------------------------------------------------------------------------------------------------------------------
	  //DIARY:
	  var diaryA = (diarybased)*(1-fid); 
	  var diaryB = (YeldCF)+(Mulch)+(Deficit);
	  var diaryC = (RA_CF_Diary)*(1-(diaryB));
	  var diary_cf = (diaryA)*(diaryC);
	  //---------------------------------------------------------------------------------------------------------------------
	  var add1 = (plant_cf)+(meat_cf);
	  var add2 = (add1)+(diary_cf);
	  var result = (add2);
	  var dataCF_food_int_parse = Math.floor(result);
	  var dataCF_food_int = (dataCF_food_int_parse);
	  //---------------------------------------------------------------------------------------------------------------------
	  //CALCOLO IL VALORE PER LE SOMME DI FOOD CF EXTERNAL:
	  var plantres_cf_e = (plantbased)*(fip);
	  //var plantres_cf_ext = Number(plantres_cf_e)*Number(WORLD_plant_cf);
	  var plantres_cf_ext = (plantres_cf_e)*(WORLD_plant_cf);  // WORLD_plant_cf -> Questo si riferisce al contenuto della casella Food.Y11 che è vuota, quindi = 0!!!
	  var meatres_cf_e = (meatbased*fim);
	  var meatres_cf_ext = (meatres_cf_e)*(WORLD_meat_cf);
	  var diaryres_cf_e = (diarybased*fid);
	  var diaryres_cf_ext = (diaryres_cf_e)*(WORLD_diary_cf);
	  	  
	  var dataCF_food_ext = (plantres_cf_ext+meatres_cf_ext+diaryres_cf_ext);
	

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
	  		  	
	  var e_h = (fuel_house_parse)*(((bio_house)+(fossil_house))+(el_house))*(1-(red_house));
	  var D6a = (1-(red_house))*((somma_valori_house)-(e_h));
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
	  var fossil_final_cf = (energy_fossil_val)*((RA_CF_Fossil)*0.25)/1000;
	 
	  //-----------------------------------------------------------------------------------------------------
	  //calcolo valori iniziali di BIOFUEL USER:	  
	  var bio_i_primaop = (A6a)-(A6b);
	  var b_i = (bio_fr_parse)*(A6b);
	  var b_t = (bio_fr_parse)*(B6a-B6b);
	  var b_s = (bio_fr_parse)*(C6a-C6b);
	  var b_h = (bio_fr_parse)*(D6a);

	  var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
	  var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
	  var bio_final_cf = (energy_bio_val)*((RA_CF_Biofuel*0.27))/1000;

	  //-----------------------------------------------------------------------------------------------------
	  var e_i = (1-(red_ind_parse))*el_ind;
	  var e_t = (el_tr_parse)*(A6a);
	  var e_s = (1-((red_ind_parse)*(el_s)))*100;
	  e_h = (((fuel_house_parse)*(bio_house+fossil_house))+el_house)*(1-red_house);
	  		  	
	  var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
	  var energy_elec_val = (total_el_user)*((1-(elec_parse)));


	  var elec1= (PER_A_Wind)*(RA_CF_Wind);
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
	  var datoCFen_internal = elec_final_cf+bio_final_cf+fossil_final_cf;
	
	  var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(RC_D_CF_Fossil*0.25)/1000;
	  var bio_final_cf_ext= total_bio_user*(biofuels_parse)*(RC_D_CF_Biofuel*0.27)/1000;
	  var elec_final_cf_ext = (energy_elec_val)*(elec_parse)/1000;
	  var datoCFen_external = elec_final_cf_ext+bio_final_cf_ext+fossil_final_cf_ext;

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////	
	  	  
	  var GT1 = document.getElementById("GT1");
	  var GT1p = GT1.innerText;	  
		
var sumEnFood = Math.round(parseInt(Number(dataCF_food_int)+Number(datoCFen_internal)));
	  
	  var datiaggbar = [sumEnFood];
	
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
		    }
		  };

		  // Chart Data
		  var horizontalchartData2 = {
		    labels: ["Local", "B", "C", "D", "EU", "WORLD"],
		    datasets: [{
		      label: "Base Value",
		      data: [17,0,0,0,0,3],
		      backgroundColor: themeColors,
		      borderColor: "transparent"
		    },
		    {
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
				    }]
		  };

		  var horizontalChartconfig2 = {
		    type: 'horizontalBar',

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
		  var wasteparse = Number(document.getElementById("f_D5").value);
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
		  var plantbasedB = YeldLF+Mulch+Deficit;
		  var plantbasedC = RA_LF_Plant*(1-Number(plantbasedB));	
		  var plant_lf = (plantbasedA*plantbasedC);

		  //------------------------------------------------------------------------------------------------------------------
		  //MEAT:	
		  var meatbasedA = meatbased*(1-fim); 
		  var meatbasedB = (YeldLF)+(Mulch)+(Deficit);
		  var meatbasedC = (RA_LF_Meat)*(1-(meatbasedB));
		  var meat_lf = (meatbasedA)*(meatbasedC);
		  //---------------------------------------------------------------------------------------------------------------------
		  //DIARY:
		  var diaryA = (diarybased)*(1-fid); 
		  var diaryB = (YeldLF)+(Mulch)+(Deficit);
		  var diaryC = (RA_LF_Diary)*(1-(diaryB));
		  var diary_lf = (diaryA)*(diaryC);	 

		  //---------------------------------------------------------------------------------------------------------------------
		  var dataLF_food_int = (plant_lf+meat_lf+diary_lf);
		  //---------------------------------------------------------------------------------------------------------------------
		  //CALCOLO IL VALORE PER LE SOMME DI FOOD LF EXTERNAL:
		  var plantres_lf_e = (plantbased)*(fip);
		  var plantres_lf_ext = (plantres_lf_e)*(WORLD_plant_lf);
		  var meatres_lf_e = (meatbased*fim);
		  var meatres_lf_ext = (meatres_lf_e)*(WORLD_meat_lf);
		  var diaryres_lf_e = (diarybased*fid);
		  var diaryres_lf_ext = (diaryres_lf_e)*(WORLD_diary_lf);
		  	  
		  var dataLF_food_ext = (plantres_lf_ext+meatres_lf_ext+diaryres_lf_ext);
	

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
		  		  	
		  var e_h = (fuel_house_parse)*(((bio_house)+(fossil_house))+(el_house))*(1-(red_house));
		  var D6a = (1-(red_house))*((somma_valori_house)-(e_h));
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

		  //-----------------------------------------------------------------------------------------------------
		  var e_i = (1-(red_ind_parse))*el_ind;
		  var e_t = (el_tr_parse)*(A6a);
		  var e_s = (1-((red_ind_parse)*(el_s)))*100;
		  e_h = (((fuel_house_parse)*(bio_house+fossil_house))+el_house)*(1-red_house);
		  		  	
		  var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
		  var energy_elec_val = (total_el_user)*((1-(elec_parse)));

		  //console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);

		  var elec1= (PER_A_Wind)*(RA_LF_Wind);
		  //console.log("SOMMA ELEC1: "+elec1);
		  var elec2 =(PER_A_Solar)*(RA_LF_Solar);
		  var elec3 =(PER_A_Hydro)*(RA_LF_Hydro);
		  var elec4 =(PER_A_Biofuel)*(RA_LF_Biofuel);
		  var elec5 =(PER_A_Nuclear)*(RA_LF_Nuclear);
		  var elec6 =(PER_A_Fossil)*(RA_LF_Fossil); 	

		  var elec1add = (elec1)+(elec2);
		  var elec2add = (elec3)+(elec4);
		  var elec3add = (elec5)+(elec6);

		  var electricity_sum = (elec1add)+(elec2add)+(elec3add);

		  var elec_final_lf = (energy_elec_val)*(electricity_sum)/1000;
		  //-----------------------------------------------------------------------------------------------
		  var datoLFen_internal = elec_final_lf+bio_final_lf+fossil_final_lf;
		  //-----------------------------------------------------------------------------------------------

		  var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(RC_D_LF_Fossil*0.25)/1000;
		  var bio_final_lf_ext= total_bio_user*(biofuels_parse)*(RC_D_LF_Biofuel*0.27)/1000;
		  var elec_final_lf_ext = (energy_elec_val)*(elec_parse)/1000;
		  //----------------------------------------------------------------------------------------------
		  var datoLFen_external = elec_final_lf_ext+bio_final_lf_ext+fossil_final_lf_ext;
		  //----------------------------------------------------------------------------------------------  	

		  //////////////////////////////////////////////////////////////////
		  /////////////////////////////////////////////////////////////////	   

var sumLFfooden = Math.round(parseInt(Number(dataLF_food_int)+Number(datoLFen_internal)));
		  
		  var datiaggbar = [sumLFfooden];
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
			    }
			  };

			  // Chart Data
			  var horizontalchartData3 = {
			    labels: ["Local", "B", "C", "D", "EU", "WORLD"],
			    datasets: [{
			      label: "Base Value",
			      data: [4662,0,0,0,0,760],
			      backgroundColor: themeColors,
			      borderColor: "transparent"
			    },
			    {
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
					    }]
			  };

			  var horizontalChartconfig3 = {
			    type: 'horizontalBar',

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
		  var wasteparse = Number(document.getElementById("f_D5").value);
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
		  var plantbasedB = YeldWFg+Mulch+Deficit;
		  var plantbasedC = RA_WFgreen_Plant*(1-Number(plantbasedB));	
		  var plant_WFgreen = (plantbasedA*plantbasedC);

		  //------------------------------------------------------------------------------------------------------------------
		  //MEAT:	
		  var meatbasedA = meatbased*(1-fim); 
		  var meatbasedB = (YeldWFg)+(Mulch)+(Deficit);
		  var meatbasedC = (RA_WFgreen_Meat)*(1-(meatbasedB));
		  var meat_WFgreen = (meatbasedA)*(meatbasedC);
		  //---------------------------------------------------------------------------------------------------------------------
		  //DIARY:
		  var diaryA = (diarybased)*(1-fid); 
		  var diaryB = (YeldWFg)+(Mulch)+(Deficit);
		  var diaryC = (RA_WFgreen_Diary)*(1-(diaryB));
		  var diary_WFgreen = (diaryA)*(diaryC);	 
		  ////console.log("DIARY 1(PERCENTUALONE): "+diary1);
		  //---------------------------------------------------------------------------------------------------------------------
		  var dataWFgreen_food_int = (plant_WFgreen+meat_WFgreen+diary_WFgreen);
		  //---------------------------------------------------------------------------------------------------------------------
		  //CALCOLO IL VALORE PER LE SOMME DI FOOD WFgreen EXTERNAL:
		  var plantres_WFgreen_e = (plantbased)*(fip);
		  var plantres_WFgreen_ext = (plantres_WFgreen_e)*(WORLD_plant_wfgreen);
		  var meatres_WFgreen_e = (meatbased*fim);
		  var meatres_WFgreen_ext = (meatres_WFgreen_e)*(WORLD_meat_wfgreen);
		  var diaryres_WFgreen_e = (diarybased*fid);
		  var diaryres_WFgreen_ext = (diaryres_WFgreen_e)*(WORLD_diary_wfgreen);
		  	  
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
		  		  	
		  var e_h = (fuel_house_parse)*(((bio_house)+(fossil_house))+(el_house))*(1-(red_house));
		  var D6a = (1-(red_house))*((somma_valori_house)-(e_h));
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
		  e_h = (((fuel_house_parse)*(bio_house+fossil_house))+el_house)*(1-red_house);
		  		  	
		  var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
		  var energy_elec_val = (total_el_user)*((1-(elec_parse)));

		  //console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);

		  var elec1= (PER_A_Wind)*(RA_WFgreen_Wind);
		  //console.log("SOMMA ELEC1: "+elec1);
		  var elec2 =(PER_A_Solar)*(RA_WFgreen_Solar);
		  var elec3 =(PER_A_Hydro)*(RA_WFgreen_Hydro);
		  var elec4 =(PER_A_Biofuel)*(RA_WFgreen_Biofuel);
		  var elec5 =(PER_A_Nuclear)*(RA_WFgreen_Nuclear);
		  var elec6 =(PER_A_Fossil)*(RA_WFgreen_Fossil); 	

		  var elec1add = (elec1)+(elec2);
		  var elec2add = (elec3)+(elec4);
		  var elec3add = (elec5)+(elec6);

		  var electricity_sum = (elec1add)+(elec2add)+(elec3add);

		  var elec_final_WFgreen = (energy_elec_val)*(electricity_sum)/1000;
		  //-----------------------------------------------------------------------------------------------
		  var datoWFgreen_en_internal = elec_final_WFgreen+bio_final_WFgreen+fossil_final_WFgreen;
		  //-----------------------------------------------------------------------------------------------

		  var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(RC_D_WFgreen_Fossil*0.25)/1000;
		  var bio_final_WFgreen_ext= total_bio_user*(biofuels_parse)*(RC_D_WFgreen_Biofuel*0.27)/1000;
		  var elec_final_WFgreen_ext = (energy_elec_val)*(elec_parse)/1000;
		  //----------------------------------------------------------------------------------------------
		  var datoWFgreen_en_external = elec_final_WFgreen_ext+bio_final_WFgreen_ext+fossil_final_WFgreen_ext;
		  //----------------------------------------------------------------------------------------------  	
		  //////////////////////////////////////////////////////////////////
		  /////////////////////////////////////////////////////////////////	

var sumWFgfooden = Math.round(parseInt(Number(dataWFgreen_food_int)+Number(datoWFgreen_en_internal)));

		  var datiaggbar = [sumWFgfooden];
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
			    }
			  };

			  // Chart Data
			  var horizontalchartData4 = {
			    labels: ["Local", "B", "C", "D", "EU", "WORLD"],
			    datasets: [{
			      label: "Base Value",
			      data: [984,0,0,0,0,0],
			      backgroundColor: themeColors,
			      borderColor: "transparent"
			    },
			    {
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
					    }]
			  };

			  var horizontalChartconfig4 = {
			    type: 'horizontalBar',

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
		  var wasteparse = Number(document.getElementById("f_D5").value);
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
		  var plantbasedB = YeldWFb+Mulch+Deficit;
		  var plantbasedC = RA_WFblue_Plant*(1-Number(plantbasedB));	
		  var plant_WFblue = (plantbasedA*plantbasedC);

		  //------------------------------------------------------------------------------------------------------------------
		  //MEAT:	
		  var meatbasedA = meatbased*(1-fim); 
		  var meatbasedB = (YeldWFb)+(Mulch)+(Deficit);
		  var meatbasedC = (RA_WFblue_Meat)*(1-(meatbasedB));
		  var meat_WFblue = (meatbasedA)*(meatbasedC);
		  //---------------------------------------------------------------------------------------------------------------------
		  //DIARY:
		  var diaryA = (diarybased)*(1-fid); 
		  var diaryB = (YeldWFb)+(Mulch)+(Deficit);
		  var diaryC = (RA_WFblue_Diary)*(1-(diaryB));
		  var diary_WFblue = (diaryA)*(diaryC);	 
		  ////console.log("DIARY 1(PERCENTUALONE): "+diary1);
		  //---------------------------------------------------------------------------------------------------------------------
		  var dataWFblue_food_int = Math.round(plant_WFblue+meat_WFblue+diary_WFblue);
		  //---------------------------------------------------------------------------------------------------------------------
		  //CALCOLO IL VALORE PER LE SOMME DI FOOD WFblue EXTERNAL:
		  var plantres_WFblue_e = (plantbased)*(fip);
		  var plantres_WFblue_ext = (plantres_WFblue_e)*(WORLD_plant_wfblue);
		  var meatres_WFblue_e = (meatbased*fim);
		  var meatres_WFblue_ext = (meatres_WFblue_e)*(WORLD_meat_wfblue);
		  var diaryres_WFblue_e = (diarybased*fid);
		  var diaryres_WFblue_ext = (diaryres_WFblue_e)*(WORLD_diary_wfblue);
		  	  
		  var dataWFblue_food_ext = Math.round(plantres_WFblue_ext+meatres_WFblue_ext+diaryres_WFblue_ext);
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
		  		  	
		  var e_h = (fuel_house_parse)*(((bio_house)+(fossil_house))+(el_house))*(1-(red_house));
		  var D6a = (1-(red_house))*((somma_valori_house)-(e_h));
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

		  //-----------------------------------------------------------------------------------------------------
		  var e_i = (1-(red_ind_parse))*el_ind;
		  var e_t = (el_tr_parse)*(A6a);
		  var e_s = (1-((red_ind_parse)*(el_s)))*100;
		  e_h = (((fuel_house_parse)*(bio_house+fossil_house))+el_house)*(1-red_house);
		  		  	
		  var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
		  var energy_elec_val = (total_el_user)*((1-(elec_parse)));

		  //console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);

		  var elec1= (PER_A_Wind)*(RA_WFblue_Wind);
		  //console.log("SOMMA ELEC1: "+elec1);
		  var elec2 =(PER_A_Solar)*(RA_WFblue_Solar);
		  var elec3 =(PER_A_Hydro)*(RA_WFblue_Hydro);
		  var elec4 =(PER_A_Biofuel)*(RA_WFblue_Biofuel);
		  var elec5 =(PER_A_Nuclear)*(RA_WFblue_Nuclear);
		  var elec6 =(PER_A_Fossil)*(RA_WFblue_Fossil); 	

		  var elec1add = (elec1)+(elec2);
		  var elec2add = (elec3)+(elec4);
		  var elec3add = (elec5)+(elec6);

		  var electricity_sum = (elec1add)+(elec2add)+(elec3add);

		  var elec_final_WFblue = (energy_elec_val)*(electricity_sum)/1000;
		  //-----------------------------------------------------------------------------------------------
		  var datoWFblue_en_internal = Math.round(elec_final_WFblue+bio_final_WFblue+fossil_final_WFblue);
		  //-----------------------------------------------------------------------------------------------

		  var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(RC_D_WFblue_Fossil*0.25)/1000;
		  var bio_final_WFblue_ext= total_bio_user*(biofuels_parse)*(RC_D_WFblue_Biofuel*0.27)/1000;
		  var elec_final_WFblue_ext = (energy_elec_val)*(elec_parse)/1000;
		  //----------------------------------------------------------------------------------------------
		  var datoWFblue_en_external = Math.round(elec_final_WFblue_ext+bio_final_WFblue_ext+fossil_final_WFblue_ext);
		  //----------------------------------------------------------------------------------------------  	
		  var titoloWFblue = parseFloat((datoWFblue_en_external+dataWFblue_food_ext)+(datoWFblue_en_internal+dataWFblue_food_int)).toFixed(2);
		  //////////////////////////////////////////////////////////////////
		  /////////////////////////////////////////////////////////////////	

			var sumfoodenWFblue = Math.round(parseInt(Number(dataWFblue_food_int)+Number(datoWFblue_en_internal)));
			
		  var datiaggbar = [sumfoodenWFblue];
		 // var datiaggbar2 = [0, 0];
		
		  horizontalChart4.data.datasets[0].data[0] = datiaggbar;
		 // barChartSottoq.data.datasets[1].data = datiaggbar2;
		  horizontalChart4.update();

 } 
	  
	  var myVarbSottoq = setInterval(aggiornabarSottoq, 3000);
 
  
  
  //FINE BAR GRAFICI SOTTO

});
