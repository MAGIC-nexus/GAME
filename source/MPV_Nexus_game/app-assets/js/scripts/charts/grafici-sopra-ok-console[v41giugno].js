//==========================================================================================*/
var sustainable_limit_LF = 10; var sustainable_limit_wfgreen = 3533; var sustainable_limit_wfblue = 1550;
var phisical_limit_LF = 21; var phisical_limit_wfgreen = 8834; var phisical_limit_wfblue = 5710;

//COSTANTI PER I GRAFICI INIZIALI//
var initial_value_cf_int = 0; var initial_value_lf_int = 0;
var initial_value_wfg_int = 0; var initial_value_wfb_int = 0;
//

//COSTANTI PER ENERGY E FOOD GRAFICI PRODUCTION//
var initial_value_CF_food = 0.003238332; var initial_value_LF_food = 0.003459326; var initial_value_wfg_food = 1.19415722;
var initial_value_wfb_food = 0.16009438; 
var initial_value_CF_en = 0.062843721771217 ; var initial_value_LF_en = 0.00774419419094049 ; var initial_value_wfg_en= 5.52412077113194; 
var initial_value_wfb_en = 1.10088961437177 ;


//COSTANTI PER I GRAFICI INIZIALI//
var initial_value_cf_int = 24.4212022139062; var initial_value_lf_int = 13.2551883468376;
var initial_value_wfg_int = 5191.68997367378; var initial_value_wfb_int = 773.876129386631;
//

var WORLD_plant_cf_FoodY11 = 0; var WORLD_meat_cf_FoodY12 = 0; var WORLD_diary_cf_FoodY13 = 0;
var WORLD_plant_lf_FoodX11 = 0.0011; var WORLD_meat_lf_FoodX12 = 0; var WORLD_diary_lf_FoodX13 = 0;
var WORLD_plant_WFblue_FoodW11 = 0.13; var WORLD_meat_WFblue_FoodW12 = 0.39; var WORLD_diary_WFblue_FoodW13 = 0.17;
var WORLD_plant_WFgreen_FoodV11 = 0.59; var WORLD_meat_WFgreen_FoodV12 = 5.84; var WORLD_diary_WFgreen_FoodV13 = 1.70;



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

var RB_WFgreen_Plant = 0.732; var RB_WFblue_Plant =0.183; var RB_LF_Plant = 0.0010; var RB_CF_Plant = 0.0008;
var RB_WFgreen_Meat = 4.34625;  var RB_WFblue_Meat = 0.22875;  var RB_LF_Meat = 0.0200; var RB_CF_Meat = 0.0129;
var RB_WFgreen_Diary = 2.05875; var RB_WFblue_Diary = 0.22875;  var RB_LF_Diary = 0.0100; var RB_CF_Diary = 0.0064;

var RC_WFgreen_Plant = 0.32; var RC_WFblue_Plant = 0.08;  var RC_LF_Plant = 0.0005; 
var RC_CF_Plant = 0.0008;
var RC_CF_Meat = 0.0129;
var RC_CF_Diary = 0.0064;
var RC_WFgreen_Meat = parseFloat("1.90").toFixed(2);  var RC_WFblue_Meat = 0.10;  var RC_LF_Meat = 0.0140;
console.log("RC_WFGREEN VALORE PURO: "+RC_WFgreen_Meat);
var pippo = parseFloat("1.90").toFixed(2);
var RC_WFgreen_Diary = 0.90;  var RC_WFblue_Diary = 0.10;  var RC_LF_Diary =  0.0070;

var RD_WFgreen_Plant =0.44;  var RD_WFblue_Plant = 0.11;  var RD_LF_Plant = 0.001;
var RD_WFgreen_Meat = 2.6125;  var RD_WFblue_Meat = 0.1375;  var RD_LF_Meat =  0.0140;
var RD_WFgreen_Diary = 1.2375; var RD_WFblue_Diary = 0.1375;  var RD_LF_Diary = 0.0070;
var RD_CF_Plant = 0.0008;
var RD_CF_Meat = 0.0129;
var RD_CF_Diary = 0.0064;
//VALLRI ENERGY PER REGIONE WF GREEN, WF BLUE, LF, CF - CF UGUALE PER TUTTE LE REGIONI,
// TABELLA C E D SONO IDENTICHE.
var RA_WFgreen_Wind=0;  var RA_WFblue_Wind= 1.3;  var RA_LF_Wind= 0.194444444444444; var RA_CF_Wind= 6.11111111111111;   
var RA_WFgreen_Solar=0.00;  var RA_WFblue_Solar=140.00; var RA_LF_Solar=2.41666666666667;   var RA_CF_Solar= 28.1944444444444;
var RA_WFgreen_Hydro =0.00; var RA_WFblue_Hydro=9114.00; var RA_LF_Hydro =0.972222222222222; var RA_CF_Hydro = 3.05555555555556;
var RA_WFgreen_Biofuel=90000.00; var RA_WFblue_Biofuel=10000.00; var RA_LF_Biofuel= 125.000; var RA_CF_Biofuel= 19.2361111111111;
var RA_WFgreen_Nuclear=0.00;  var RA_WFblue_Nuclear=567.00; var RA_LF_Nuclear=0.277777777777778; var RA_CF_Nuclear= 5.27777777777778;
var RA_WFgreen_Fossil =0.00;  var RA_WFblue_Fossil=388.00; var RA_LF_Fossil=0.0277777777777778; var RA_CF_Fossil= 219.113420579933;

var RB_WFgreen_Wind = 0;  var RB_WFblue_Wind =1.3;  var RB_LF_Wind = 0.194444444444444; var RB_CF_Wind= 6.11111111111111;   
var RB_WFgreen_Solar =0;	var RB_WFblue_Solar =140; var RB_LF_Solar =	2.41666666666667;	var RB_CF_Solar= 28.1944444444444;
var RB_WFgreen_Hydro =0; var RB_WFblue_Hydro =9114.00; var RB_LF_Hydro = 0.972222222222222; var RB_CF_Hydro = 3.05555555555556;
var RB_WFgreen_Biofuel =90; var RB_WFblue_Biofuel =10.00; var RB_LF_Biofuel = 125.000; var RB_CF_Biofuel= 19.2361111111111;
var RB_WFgreen_Nuclear =0; var RB_WFblue_Nuclear =567.00; var RB_LF_Nuclear = 0.277777777777778; var RB_CF_Nuclear= 5.27777777777778;
var RB_WFgreen_Fossil =0; var RB_WFblue_Fossil = 388.00; var RB_LF_Fossil =0.0277777777777778; var RB_CF_Fossil= 219.113420579933;

var RC_D_WFgreen_Wind = 0;  var RC_D_WFblue_Wind =1.3;  var RC_D_LF_Wind = 0.194444444444444;
var RC_D_WFgreen_Solar =0;	var RC_D_WFblue_Solar =140; var RC_D_LF_Solar =	2.41666666666667;	
var RC_D_WFgreen_Hydro = 0; var RC_D_WFblue_Hydro =9114.00; var RC_D_LF_Hydro = 0.972222222222222;
var RC_D_WFgreen_Biofuel =90; var RC_D_WFblue_Biofuel =10.00; var RC_D_LF_Biofuel = 125.000;
var RC_D_WFgreen_Nuclear =0; var RC_D_WFblue_Nuclear =567.00; var RC_D_LF_Nuclear = 0.277777777777778;
var RC_D_WFgreen_Fossil =0; var RC_D_WFblue_Fossil = 388.00; var RC_D_LF_Fossil =0.0277777777777778;

var RC_D_CF_Wind = 6.11111111111111;; var RC_D_CF_Solar = 28.1944444444444;  var RC_D_CF_Hydro = 3.05555555555556; 
var RC_D_CF_Biofuel = 19.2361111111111; var RC_D_CF_Nuclear = 5.27777777777778; var RC_D_CF_Fossil = 219.113420579933;


//CAMBIO DEI VALORI STATICI YGCLOSING E MULCHING ETC. A SECONDA DELLA REGIONE:
var YG_closing_WFb = 0; var Mulching_WFb = 0;
var YG_closing_CF = 0; var Mulching_CF = 0;
var Deficit_Irrigation_CF = 0; var Deficit_Mul_CF = 0;
var Deficit_Mul_Drip_CF = 0;
var YG_closing_LF = 0; var Mulching_LF = 0;
var YG_closing_WFg = 0;var Mulching_WFg = 0;
var Deficit_Irrigation_LF = 0; 
var Deficit_Mul_LF = 0;
var Deficit_Irrigation_WFg = 0;
var Deficit_Mul_WFg = 0; 
var Deficit_Irrigation_WFb = 0; 
var Deficit_Mul_WFb = 0;
var Deficit_Mul_Drip_LF = -0; 
var Deficit_Mul_Drip_WFg = 0; 
var Deficit_Mul_Drip_WFb = 0;	


var Rainfed = 0;
var Irrigated = 0;

var checkregionyg = document.querySelector('input[name="region"]:checked'); 
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) { 
		
 YG_closing_WFb = 0;  Mulching_WFb = 0;
 YG_closing_CF = 0;  Mulching_CF = 0; Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
 Deficit_Mul_Drip_CF = 0;
 YG_closing_LF = 0.17;  Mulching_LF = 0.25;
 YG_closing_WFg = 0.17; Mulching_WFg = 0.25;
 Deficit_Irrigation_LF = -0.10;  Deficit_Mul_LF = -0.10;
 Deficit_Irrigation_WFg = -0.08;
 Deficit_Mul_WFg = 0.02;  Deficit_Irrigation_WFb = 0.15;  Deficit_Mul_WFb = 0.30;
 Deficit_Mul_Drip_LF = -0.02;  Deficit_Mul_Drip_WFg = 0.05; 
 Deficit_Mul_Drip_WFb = 0.35;
 
 Rainfed = 0.84;
 Irrigated = 1-Rainfed;
	
	}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) { 
		
		 YG_closing_WFb = 0;  Mulching_WFb = 0;
		 YG_closing_CF = 0;  Mulching_CF = 0;
		 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
		 Deficit_Mul_Drip_CF = 0;
		 YG_closing_LF = 0.26;  Mulching_LF = 0.25;
		 YG_closing_WFg = 0.26; Mulching_WFg = 0.25;
		 Deficit_Irrigation_LF = -0.10; 
		 Deficit_Mul_LF = -0.10;
		 Deficit_Irrigation_WFg = -0.08;
		 Deficit_Mul_WFg = 0.02; 
		 Deficit_Irrigation_WFb = 0.15; 
		 Deficit_Mul_WFb = 0.30;
		 Deficit_Mul_Drip_LF = -0.02; 
		 Deficit_Mul_Drip_WFg = 0.05; 
		 Deficit_Mul_Drip_WFb = 0.35;	
		 
		 Rainfed = 0.96;
		 Irrigated = 1-Rainfed;
		
	}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) { 
		
		 YG_closing_WFb = 0;  Mulching_WFb = 0;
		 YG_closing_CF = 0;  Mulching_CF = 0;
		 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
		 Deficit_Mul_Drip_CF = 0;
		 YG_closing_LF = 0.33;  Mulching_LF = 0.25;
		 YG_closing_WFg = 0.33; Mulching_WFg = 0.25;
		 Deficit_Irrigation_LF = -0.10; 
		 Deficit_Mul_LF = -0.10;
		 Deficit_Irrigation_WFg = -0.08;
		 Deficit_Mul_WFg = 0.02; 
		 Deficit_Irrigation_WFb = 0.15; 
		 Deficit_Mul_WFb = 0.30;
		 Deficit_Mul_Drip_LF = -0.02; 
		 Deficit_Mul_Drip_WFg = 0.05; 
		 Deficit_Mul_Drip_WFb = 0.35;	
		
		 Rainfed = 0.89;
		 Irrigated = 1-Rainfed;
	}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) { 
		
		 YG_closing_WFb = 0;  Mulching_WFb = 0;
		 YG_closing_CF = 0;  Mulching_CF = 0;
		 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
		 Deficit_Mul_Drip_CF = 0;
		 YG_closing_LF = 0.33;  Mulching_LF = 0.25;
		 YG_closing_WFg = 0.33; Mulching_WFg = 0.25;
		 Deficit_Irrigation_LF = -0.10; 
		 Deficit_Mul_LF = -0.10;
		 Deficit_Irrigation_WFg = -0.08;
		 Deficit_Mul_WFg = 0.02; 
		 Deficit_Irrigation_WFb = 0.15; 
		 Deficit_Mul_WFb = 0.30;
		 Deficit_Mul_Drip_LF = -0.02; 
		 Deficit_Mul_Drip_WFg = 0.05; 
		 Deficit_Mul_Drip_WFb = 0.35;	
		 
		 Rainfed = 0.89;
		 Irrigated = 1-Rainfed;
		
	} else {}


//VARIABILI GLOBALI PER LOCAL STORAGE
var CF_Food_Internal=0; var CF_Food_External=0; var CF_Energy_Internal=0; var CF_Energy_External=0;
var LF_Food_Internal=0; var LF_Food_External=0; var LF_Energy_Internal=0; var LF_Energy_External=0;
var WFblue_Food_Internal=0; var WFblue_Food_External=0; var WFblue_Energy_Internal=0; var WFblue_Energy_external=0;
var WFgreen_Food_Internal=0; var WFgreen_Food_External=0; var WFgreen_Energy_Internal=0; var WFgreen_Energy_external=0;

//////////////////////////////////////////////////////////////////////////
// ----------------------------------------------------------------------------------------------------------------------------------
//$(window).on("load", function () {
window.addEventListener("load", function () {
	
var $primary = '#5A8DEE',
    //$success = '#39DA8A',
$success = '#A3A800',
    $danger = '#FF5B5C',
    //$warning = '#FDAC41',
    $warning = '#FFED75',
    $info = '#00CFDD',
    $label_color = '#475F7B',
    grid_line_color = '#dae1e7',
    scatter_grid_color = '#f3f3f3',
    $scatter_point_light = '#E6EAEE',
    $scatter_point_dark = '#5A8DEE',
    $white = '#fff',
    $black = '#000',
    $world = '#62768C',
    
    $security1 = '#97B5B8',
    	$security2 = '#IC82AD',
    		$security3 = '#A9B9CF',
    			$security4 = '#EBEEF2',
    				$security5 = '#62768C';

var giallo = $warning;
var rosso = $danger;
var verde = $success;
var blu = $primary;


  	var themeColors = [$primary, $warning, $danger, $success, $info, $world];
  	var securitycharts = [$security1, $security2, $security3, $security4, $security5];
  //[primary, warning, danger, success, info, label_color]

  // Line Chart
  // ------------------------------------------

  //Get the context of the Chart canvas element we want to select
 /* var lineChartctx = $("#line-chart");

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
  var lineChart = new Chart(lineChartctx, lineChartconfig); */

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
      text: 'Carbon Footprint (kg CO2/cap/day)'
    },
  };
  // Chart Data
  var barchartData = {
    
		    labels: ["Internal", "External"],
		    datasets: [{
		      type: 'bar',
		      label: 'Food"',
		      data: [16, 0],
		      backgroundColor: giallo
		      
		    }, {
		      type: 'bar',
		      label: '"Energy"',
		      backgroundColor: verde,
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

	console.log("================================== CF =====================================================");
	
	var checkregiong = document.querySelector('input[name="region"]:checked'); 
		if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionA')) { 
			//percentuali sotto al titolo sopra

		 initial_value_cf_int = 24.4212022139062;  initial_value_lf_int = 13.2551883468376;
		 initial_value_wfg_int = 5191.68997367378;  initial_value_wfb_int = 773.876129386631;
		 
		 initial_value_CF_food = 0.003238332; 
		 initial_value_LF_food = 0.003459326; 
		 initial_value_wfg_food = 1.19415722;
		 initial_value_wfb_food = 0.16009438; 
		 initial_value_CF_en = 0.062843721771217 ; 
		 initial_value_LF_en = 0.00774419419094049 ; 
		 initial_value_wfg_en= 5.52412077113194; 
		 initial_value_wfb_en = 1.10088961437177 ;
		 
		 YG_closing_WFb = 0;  Mulching_WFb = 0;
		 YG_closing_CF = 0;  Mulching_CF = 0; Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
		 Deficit_Mul_Drip_CF = 0;
		 YG_closing_LF = 0.17;  Mulching_LF = 0.25;
		 YG_closing_WFg = 0.17; Mulching_WFg = 0.25;
		 Deficit_Irrigation_LF = -0.10;  Deficit_Mul_LF = -0.10;
		 Deficit_Irrigation_WFg = -0.08;
		 Deficit_Mul_WFg = 0.02;  Deficit_Irrigation_WFb = 0.15;  Deficit_Mul_WFb = 0.30;
		 Deficit_Mul_Drip_LF = -0.02;  Deficit_Mul_Drip_WFg = 0.05; 
		 Deficit_Mul_Drip_WFb = 0.35;
		 
		 Rainfed = 0.84;
		 Irrigated = 1-Rainfed;


		}
		else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionB')) { 
			initial_value_cf_int = 20.2748418808954;  
		     initial_value_lf_int = 17.5727719925233;
			 initial_value_wfg_int = 4714.93177211245;  
			 initial_value_wfb_int = 816.233412273386;
			 
			 initial_value_CF_food = 0.003036887; 
			 initial_value_LF_food = 0.0045496; 
			 initial_value_wfg_food = 1.4764269375;
			 initial_value_wfb_food = 0.2001784125; 
			 initial_value_CF_en = 0.0443982411716406 ; 
			 initial_value_LF_en = 0.0127996691636463 ; 
			 initial_value_wfg_en= 0.00913463005213692; 
			 initial_value_wfb_en = 0.743798594735205 ;
			 
			 YG_closing_WFb = 0;  Mulching_WFb = 0;
			 YG_closing_CF = 0;  Mulching_CF = 0;
			 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
			 Deficit_Mul_Drip_CF = 0;
			 YG_closing_LF = 0.26;  Mulching_LF = 0.25;
			 YG_closing_WFg = 0.26; Mulching_WFg = 0.25;
			 Deficit_Irrigation_LF = -0.10; 
			 Deficit_Mul_LF = -0.10;
			 Deficit_Irrigation_WFg = -0.08;
			 Deficit_Mul_WFg = 0.02; 
			 Deficit_Irrigation_WFb = 0.15; 
			 Deficit_Mul_WFb = 0.30;
			 Deficit_Mul_Drip_LF = -0.02; 
			 Deficit_Mul_Drip_WFg = 0.05; 
			 Deficit_Mul_Drip_WFb = 0.35;	
			 
			 Rainfed = 0.96;
			 Irrigated = 1-Rainfed;
		} 
		else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionC')) { 
			initial_value_cf_int =  27.9584617302096;  
		     initial_value_lf_int = 14.5325751112248;
			 initial_value_wfg_int = 2859.81844233148;  
			 initial_value_wfb_int = 406.478627692298;
			 
			 initial_value_CF_food = 0.003557996; 
			 initial_value_LF_food = 0.003791004; 
			 initial_value_wfg_food = 0.815905;
			 initial_value_wfb_food = 0.0983842; 
			 initial_value_CF_en = 0.0666778336593583 ; 
			 initial_value_LF_en = 0.00537553692507286 ; 
			 initial_value_wfg_en= 0.00381923696961862; 
			 initial_value_wfb_en = 0.265744673663643 ;
			 
			 YG_closing_WFb = 0;  Mulching_WFb = 0;
			 YG_closing_CF = 0;  Mulching_CF = 0;
			 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
			 Deficit_Mul_Drip_CF = 0;
			 YG_closing_LF = 0.33;  Mulching_LF = 0.25;
			 YG_closing_WFg = 0.33; Mulching_WFg = 0.25;
			 Deficit_Irrigation_LF = -0.10; 
			 Deficit_Mul_LF = -0.10;
			 Deficit_Irrigation_WFg = -0.08;
			 Deficit_Mul_WFg = 0.02; 
			 Deficit_Irrigation_WFb = 0.15; 
			 Deficit_Mul_WFb = 0.30;
			 Deficit_Mul_Drip_LF = -0.02; 
			 Deficit_Mul_Drip_WFg = 0.05; 
			 Deficit_Mul_Drip_WFb = 0.35;	
			
			 Rainfed = 0.89;
			 Irrigated = 1-Rainfed;
		}
		else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionD')) { 
			 initial_value_cf_int =  25.1318778442795;  
		     initial_value_lf_int = 15.7995747782528;
			 initial_value_wfg_int = 3357.73329112609;  
			 initial_value_wfb_int = 485.707639283664;
			 
			 initial_value_CF_food = 0.0039148; 
			 initial_value_LF_food = 0.004344; 
			 initial_value_wfg_food = 0.968055;
			 initial_value_wfb_food = 0.119295; 
			 initial_value_CF_en = 0.0605563780410342 ; 
			 initial_value_LF_en = 0.00384961657261653 ; 
			 initial_value_wfg_en= 0.00271749225250921; 
			 initial_value_wfb_en = 0.377280593175422 ;
			 
			 YG_closing_WFb = 0;  Mulching_WFb = 0;
			 YG_closing_CF = 0;  Mulching_CF = 0;
			 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
			 Deficit_Mul_Drip_CF = 0;
			 YG_closing_LF = 0.33;  Mulching_LF = 0.25;
			 YG_closing_WFg = 0.33; Mulching_WFg = 0.25;
			 Deficit_Irrigation_LF = -0.10; 
			 Deficit_Mul_LF = -0.10;
			 Deficit_Irrigation_WFg = -0.08;
			 Deficit_Mul_WFg = 0.02; 
			 Deficit_Irrigation_WFb = 0.15; 
			 Deficit_Mul_WFb = 0.30;
			 Deficit_Mul_Drip_LF = -0.02; 
			 Deficit_Mul_Drip_WFg = 0.05; 
			 Deficit_Mul_Drip_WFb = 0.35;	
			 
			 Rainfed = 0.89;
			 Irrigated = 1-Rainfed;
		}
		else {}
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
var windp = parseFloat(document.getElementById("em_J21").value)/100;
var solarp = parseFloat(document.getElementById("em_J22").value)/100;
var hydrop = parseFloat(document.getElementById("em_J23").value)/100;
var biofuelp = parseFloat(document.getElementById("em_J24").value)/100;
var nuclearp = parseFloat(document.getElementById("em_J25").value)/100;
var fuelp = parseFloat(document.getElementById("em_J26").value)/100;
//----------------------------------------------------------------------------------------------------------------
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
//calcolo i valori per PLANT BASED:
	var checkregion = document.querySelector('input[name="region"]:checked'); 
  	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
  	//var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
  		var meat0_1 =(vegeparse/totalone);
		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
		var meat0_3 = (meat0_1)+(meat0_2);
  	
  	var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*70);
  	//calcolo i valori per MEAT & FISH:
  	//var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;	

  	var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*15);
  	//calcolo i valori per DIARY & EGGS:
  	//var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
  	var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);

  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
  		var meat0_1 =(vegeparse/totalone);
  		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
  		var meat0_3 = (meat0_1)+(meat0_2);
  	
  		var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*70);
  		var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*15);
  		var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);
  		
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
  		var meat0_1 =(vegeparse/totalone);
  		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
  		var meat0_3 = (meat0_1)+(meat0_2);
  		
  		var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*65);
  		var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*20);
  		var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
  		var meat0_1 =(vegeparse/totalone);
  		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
  		var meat0_3 = (meat0_1)+(meat0_2);
  		
  		var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*65);
  		var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*20);
  		var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);
  	} else {}
	//console.log("plant1: "+plant1+" meat1: "+meat1+" diary1: "+diary1);
	
	//plant1+meat1+diary1 = intakeparse (Food.W18 + Food.W19 + Food.W20 = Food.W17)
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
//var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_CF;
var measure = document.getElementById("Measure").value;	
//console.log("measure: "+measure);
var Deficit;
var checkregionyg = document.querySelector('input[name="region"]:checked'); 
if (measure=='1') {
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Irrigation_CF;	
	Deficit = Irrigated* deficit_irrigation_cf;
	//console.log("DEFICIT: "+Deficit);
	}
	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
		var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Irrigation_CF;
			Deficit = Irrigated* deficit_irrigation_cf;
		//	//console.log("DEFICIT: "+Deficit);
		} 	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
		
		var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Irrigation_CF;	
			Deficit = Irrigated* deficit_irrigation_cf;
		//	//console.log("DEFICIT: "+Deficit);
		} 	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
		var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Irrigation_CF;
			Deficit = Irrigated* deficit_irrigation_cf;
		//	//console.log("DEFICIT: "+Deficit);
		}
	}//VALUE 1 FINE
//VALUE 2 INIZIO
	
else if(measure=='2') {
	//console.log("SONO DENTRO MEASURE 2");
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
		var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_CF;
		//console.log("Irrigated: "+Irrigated+" Full_Deficit_parse: "+Full_Deficit_parse+" deficit_mulch_cf(Reduction when applied): "+Deficit_Mul_CF+" deficit_mulch_cf(Footprint with reduction input): "+deficit_irrigation_cf);
		Deficit = Irrigated* deficit_irrigation_cf;
		//console.log("DEFICIT: "+Deficit);
	}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
		var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_CF;	
		Deficit = Irrigated* deficit_irrigation_cf;
		//console.log("DEFICIT: "+Deficit);
	}

	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
		var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_CF;	
		Deficit = Irrigated* deficit_irrigation_cf;
		//console.log("DEFICIT: "+Deficit);
	}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
		var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_CF;	
		Deficit = Irrigated* deficit_irrigation_cf;
		//console.log("DEFICIT: "+Deficit);
	}
	else{}
}
//VALUE 2 FINE
//VALUE 3 INIZIO
else if(measure=='3') {
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
	var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_Drip_CF;
	Deficit = Irrigated* deficit_irrigation_cf;
	//console.log("DEFICIT: "+Deficit);
	}	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
		var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_Drip_CF;
		Deficit = Irrigated* deficit_irrigation_cf;
		//console.log("DEFICIT: "+Deficit);
		} 
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
		var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_Drip_CF;
		Deficit = Irrigated* deficit_irrigation_cf;
		//console.log("DEFICIT: "+Deficit);
		} 
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
		var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_Drip_CF;
		Deficit = Irrigated* deficit_irrigation_cf;
		} else{}
	
	} //VALUE 3 FINE
else {
	}


//----------------------------------------------------------------------------------------------------------------
var meatbased = (meat1*cal_waste)/100; 
var diarybased = (diary1*cal_waste)/100;
var plantbased = (plant1*cal_waste)/100;	//Food.V18*Food.W17
//console.log("plantbased: "+plantbased+" meatbased: "+meatbased+" diarybased: "+diarybased);

//----------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
//CALCOLO IL VALORE PER LE SOMME DI FOOD CF INTERNAL:
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
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


	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
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

		}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
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

		}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
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

		} else {}

		console.log("plantbasedA: "+plantbasedA+" plantbasedB: "+plantbasedB+" plantbasedC: "+plantbasedC+" RA_CF_Plant"+RA_CF_Plant+" plant_cf: "+plant_cf);
		console.log("meatbasedA: "+meatbasedA+" meatbasedB: "+meatbasedB+" meatbasedC: "+meatbasedC+" RA_CF_Meat"+RA_CF_Meat+" meat_cf: "+meat_cf);
		console.log("diaryA: "+diaryA+" diaryB: "+diaryB+" diaryC: "+diaryC+" RA_CF_Diary"+RA_CF_Diary+" diary_cf: "+diary_cf);

//---------------------------------------------------------------------------------------------------------------------
var add1 = (plant_cf)+(meat_cf);
var dataCF_food_int = (add1)+(diary_cf);
var CF_Food_Internal=dataCF_food_int;
console.log("CF_Food_Int: "+CF_Food_Internal);
//console.log("FOOD CF INTERNAL"+dataCF_food_int);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD CF EXTERNAL:
var plantres_cf_e = (plantbased)*Number(fip);

// else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionA')) {
var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
//BOTTONE A PLANT
if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='planta')) {
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
	var plantres_cf_ext = Number(plantres_cf_e)*Number(RA_CF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var plantres_cf_ext = Number(plantres_cf_e)*Number(RA_CF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);

	}
	else { 
		var plantres_cf_ext = Number(plantres_cf_e)*Number(RA_CF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);

	}
}

//BOTTONE PLANT B
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		
		var plantres_cf_ext = Number(plantres_cf_e)*(RB_CF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var plantres_cf_ext = Number(plantres_cf_e)*(RB_CF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);

	}
	else { 
		var plantres_cf_ext = Number(plantres_cf_e)*(RB_CF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);

	} 
}

//BOTTONE PLANT C
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var plantres_cf_ext = Number(plantres_cf_e)*(RC_CF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var plantres_cf_ext = Number(plantres_cf_e)*(RC_CF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);

	}
	else { 
		var plantres_cf_ext = Number(plantres_cf_e)*(RC_CF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);

	} 
} 

//BOTTONE PLANT D
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var plantres_cf_ext = Number(plantres_cf_e)*(RD_CF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var plantres_cf_ext = Number(plantres_cf_e)*(RD_CF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);

	}
	else  { 
		var plantres_cf_ext = Number(plantres_cf_e)*(RD_CF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);

	}	
}
	
	//BOTTONE PLANT WORLD
else {
	var plantres_cf_ext = plantres_cf_e*Number(WORLD_plant_cf_FoodY11);
	plantres_cf_ext = Number(plantres_cf_ext);

}
console.log("plantres_cf_ext: "+plantres_cf_ext);
console.log("REGION B CLICK B PLANT USCITA VAR B: "+plantres_cf_ext);

console.log("REGION B CLICK B PLANT USCITA VAR C: "+plantres_cf_ext);

//MEAT EXTERNAL
var meatres_cf_e = Number(meatbased)*Number(fim);

//BOTTONE MEAT A
var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meata')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var meatres_cf_ext = Number(meatres_cf_e)*Number(RA_CF_Meat);	
		meatres_cf_ext = Number(meatres_cf_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var meatres_cf_ext = Number(meatres_cf_e)*Number(RA_CF_Meat);	
		meatres_cf_ext = Number(meatres_cf_ext);
	}
	else { 
		var meatres_cf_ext = Number(meatres_cf_e)*Number(RA_CF_Meat);	
		meatres_cf_ext = Number(meatres_cf_ext);
	} 
}
//MEAT BOTTONE B
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var meatres_cf_ext = Number(meatres_cf_e)*Number(RB_CF_Meat);	
		meatres_cf_ext = Number(meatres_cf_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var meatres_cf_ext = Number(meatres_cf_e)*Number(RB_CF_Meat);	
		meatres_cf_ext = Number(meatres_cf_ext);
	}
	else { 
		var meatres_cf_ext = Number(meatres_cf_e)*Number(RB_CF_Meat);	
		meatres_cf_ext = Number(meatres_cf_ext);
	}
}
//MEAT BOTTONE C
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	var meatres_cf_ext = Number(meatres_cf_e)*Number(RC_CF_Meat);	
	meatres_cf_ext = Number(meatres_cf_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var meatres_cf_ext = Number(meatres_cf_e)*Number(RC_CF_Meat);	
		meatres_cf_ext = Number(meatres_cf_ext);
	}
	else { 
		var meatres_cf_ext = Number(meatres_cf_e)*Number(RC_CF_Meat);	
		meatres_cf_ext = Number(meatres_cf_ext);
	}
}
//BOTTONE MEAT D
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	var meatres_cf_ext = Number(meatres_cf_e)*Number(RD_CF_Meat);	
	meatres_cf_ext = Number(meatres_cf_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var meatres_cf_ext = Number(meatres_cf_e)*Number(RD_CF_Meat);	
		meatres_cf_ext = Number(meatres_cf_ext);
	}
	else { 
		var meatres_cf_ext = Number(meatres_cf_e)*Number(RD_CF_Meat);	
		meatres_cf_ext = Number(meatres_cf_ext);
	}
}
else {
	var meatres_cf_ext = Number(meatres_cf_e)*Number(WORLD_meat_cf_FoodY12);
	meatres_cf_ext = Number(meatres_cf_ext);
}

console.log("meatres_cf_ext: "+meatres_cf_ext);

//DIARY EXTERNAL
var diaryres_cf_e = Number(diarybased)*Number(fid);

var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diarya')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var diaryres_cf_ext = Number(diaryres_cf_e)*Number(RA_CF_Diary);	
		diaryres_cf_ext = Number(diaryres_cf_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var diaryres_cf_ext = Number(diaryres_cf_e)*Number(RA_CF_Diary);	
		diaryres_cf_ext = Number(diaryres_cf_ext);

	}
	else { 
		var diaryres_cf_ext = Number(diaryres_cf_e)*Number(RA_CF_Diary);	
		diaryres_cf_ext = Number(diaryres_cf_ext);

	}
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var diaryres_cf_ext = Number(diaryres_cf_e)*Number(RB_CF_Diary);	
		diaryres_cf_ext = Number(diaryres_cf_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var diaryres_cf_ext = Number(diaryres_cf_e)*Number(RB_CF_Diary);	
		diaryres_cf_ext = Number(diaryres_cf_ext);

	}
	else { 
		var diaryres_cf_ext = Number(diaryres_cf_e)*Number(RB_CF_Diary);	
		diaryres_cf_ext = Number(diaryres_cf_ext);

	}
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var diaryres_cf_ext = Number(diaryres_cf_e)*Number(RC_CF_Diary);	
		diaryres_cf_ext = Number(diaryres_cf_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var diaryres_cf_ext = Number(diaryres_cf_e)*Number(RC_CF_Diary);	
		diaryres_cf_ext = Number(diaryres_cf_ext);

	}
	else { 
		var diaryres_cf_ext = Number(diaryres_cf_e)*Number(RC_CF_Diary);	
		diaryres_cf_ext = Number(diaryres_cf_ext);

	}
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var diaryres_cf_ext = Number(diaryres_cf_e)*Number(RD_CF_Diary);	
		diaryres_cf_ext = Number(diaryres_cf_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var diaryres_cf_ext = Number(diaryres_cf_e)*Number(RD_CF_Diary);	
		diaryres_cf_ext = Number(diaryres_cf_ext);

	}
	else { 
		var diaryres_cf_ext = Number(diaryres_cf_e)*Number(RD_CF_Diary);	
		diaryres_cf_ext = Number(diaryres_cf_ext);

	}
}
else {
	var diaryres_cf_ext = Number(diaryres_cf_e)*Number(WORLD_diary_cf_FoodY13);
	diaryres_cf_ext = Number(diaryres_cf_ext);

}




console.log("diaryres_cf_ext: "+diaryres_cf_ext);
var dataCF_food_ext = (plantres_cf_ext+meatres_cf_ext+diaryres_cf_ext);
dataCF_Food_External = dataCF_food_ext;

console.log("dataCF_food_ext: "+dataCF_food_ext);
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
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
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
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
	var fossil_ind = 25.0209;
	var bio_ind = 26.5849;
	var el_ind = 31.6153;
		  	  
	var fossil_tr = 63.5554;
	var bio_tr = 7.25276;
	var el_tr = 1.29415;
		  	  
	var fossil_s = 8.8585;
	var bio_s = 1.76044;
	var el_s = 18.1069;
		  	  
	var fossil_house = 12.8533;
	var bio_house = 17.6458;
	var el_house = 24.6744;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
	var fossil_ind = 30.8979;
	var bio_ind = 2.60221;
	var el_ind = 21.1867;
		  	  
	var fossil_tr = 70.3915;
	var bio_tr = 2.707273;
	var el_tr = 1.33063;
		  	  
	var fossil_s = 21.0933;
	var bio_s = 3.41282;
	var el_s = 16.0308;
		  	  
	var fossil_house = 43.0607;
	var bio_house = 8.01203;
	var el_house = 14.1642;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
	var fossil_ind = 24.0465;
	var bio_ind = 3.36426;
	var el_ind = 16.1288;
		  	  
	var fossil_tr = 66.283;
	var bio_tr = 3.50512;
	var el_tr = 1.09532;
		  	  
	var fossil_s = 12.6046;
	var bio_s = 1.06047;
	var el_s = 15.6423;
		  	  
	var fossil_house = 23.5779;
	var bio_house = 10.2351;
	var el_house = 15.7147;
}
else {}
//----------------------------------------------------------------------------------------------------
var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
var somma_valori_s = (fossil_s+bio_s+el_s);
var somma_valori_house = (fossil_house+bio_house+el_house);
console.log("somma_valori_tr: "+somma_valori_tr+" somma_valori_ind: "+somma_valori_ind+" somma_valori_s: "+somma_valori_s+" somma_valori_house: "+somma_valori_house);
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
console.log("f_i:"+f_i+"f_s:"+f_s+"f_t:"+f_t+"f_h:"+f_h+"FOSSIL TOTAL = : "+total_fossil_user);

var energy_fossil_val = (total_fossil_user)*(1-Number(fossilf_parse));

if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	var fossil_final_cf = (energy_fossil_val)*((RA_CF_Fossil)*0.25)/1000;
} else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
	var fossil_final_cf = (energy_fossil_val)*((RA_CF_Fossil)*0.25)/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
	var fossil_final_cf = (energy_fossil_val)*((RC_D_CF_Fossil)*0.25)/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
	var fossil_final_cf = (energy_fossil_val)*((RC_D_CF_Fossil)*0.25)/1000;
} else {}
console.log("FOSSIL CF INT = EnergyJ34 (ok)= "+fossil_final_cf);

//-----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di BIOFUEL USER:	  
var bio_i_primaop = (A6a)-(A6b);
var b_i = (bio_fr_parse)*(A6b);
b_i = parseFloat(b_i).toFixed(1);
b_i = Number(b_i);
var b_t = (bio_fr_parse)*(B6a-B6b);
b_t = parseFloat(b_t).toFixed(1);
b_t = Number(b_t);
var b_s = (bio_fr_parse)*(C6a-C6b);
b_s = parseFloat(b_s).toFixed(1);
b_s = Number(b_s);
var b_h = (bio_fr_parse)*(D6a);
b_h = parseFloat(b_h).toFixed(1);
b_h = Number(Math.round(b_h));

var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
console.log("b_i:"+b_i+"b_s:"+b_s+"b_t:"+b_t+"b_h:"+b_h+"BIO TOTAL = : "+total_bio_user);
var energy_bio_val = (total_bio_user)*(1-Number(biofuels_parse));
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	var bio_final_cf = (energy_bio_val)*(Number(RA_CF_Biofuel)*0.27)/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
	var bio_final_cf = (energy_bio_val)*(Number(RA_CF_Biofuel)*0.27)/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
	var bio_final_cf = (energy_bio_val)*(Number(RC_D_CF_Biofuel)*0.27)/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
	var bio_final_cf = (energy_bio_val)*(Number(RC_D_CF_Biofuel)*0.27)/1000;
} else {}

console.log("BIO CF INT = EnergyJ35 (ok) =  "+bio_final_cf);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-Number(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(B6a);
var e_s = (1-red_ind_parse)*Number(el_s);
e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
//console.log(e_i+" "+e_t+" "+e_s+" "+e_h);  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
var energy_elec_val = (total_el_user)*((1-Number(elec_parse)));
//console.log("M29 ELECTRICITY VALORE PER MATR. SOMMA PROD"+energy_elec_val);

console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);
//var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
//if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='ela')) {
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 

	var elec1= (windp)*(RA_CF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(solarp)*(RA_CF_Solar);
	var elec3 =(hydrop)*(RA_CF_Hydro);
	var elec4 =(biofuelp)*(RA_CF_Biofuel);
	var elec5 =(nuclearp)*(RA_CF_Nuclear);
	var elec6 =(fuelp)*(RA_CF_Fossil); 	
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 

	var elec1= (windp)*(RA_CF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(solarp)*(RA_CF_Solar);
	var elec3 =(hydrop)*(RA_CF_Hydro);
	var elec4 =(biofuelp)*(RA_CF_Biofuel);
	var elec5 =(nuclearp)*(RA_CF_Nuclear);
	var elec6 =(fuelp)*(RA_CF_Fossil); 	
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 

	var elec1= (windp)*(RA_CF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(solarp)*(RC_D_CF_Solar);
	var elec3 =(hydrop)*(RC_D_CF_Hydro);
	var elec4 =(biofuelp)*(RC_D_CF_Biofuel);
	var elec5 =(nuclearp)*(RC_D_CF_Nuclear);
	var elec6 =(fuelp)*(RC_D_CF_Fossil); 	
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 

	var elec1= (windp)*(RA_CF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(solarp)*(RC_D_CF_Solar);
	var elec3 =(hydrop)*(RC_D_CF_Hydro);
	var elec4 =(biofuelp)*(RC_D_CF_Biofuel);
	var elec5 =(nuclearp)*(RC_D_CF_Nuclear);
	var elec6 =(fuelp)*(RC_D_CF_Fossil); 	
} 
else {
	
}
var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);
console.log("ELECTRICITY SUM ELEC1ADD: "+elec1add);
console.log("ELECTRICITY SUM ELEC2ADD: "+elec2add);
console.log("ELECTRICITY SUM ELEC3ADD: "+elec3add);

var electricity_sum = (elec1add)+(elec2add)+(elec3add);

var elec_final_cf = (energy_elec_val)*(electricity_sum)/1000;
console.log("ENERGY ELEC TOTAL CF "+elec_final_cf);
//-----------------------------------------------------------------------------------------------
var datoCFen_internal = elec_final_cf+bio_final_cf+fossil_final_cf;
CF_Energy_Internal=datoCFen_internal;
console.log("ENERGY TOTAL CF "+datoCFen_internal);
//-----------------------------------------------------------------------------------------------
//CALCOLO VALORI EXTERNAL ENERGY
//SELECT DEI BOTTONI ENERGY: TOTAL_USER_LOCAL*VALORE DASH*CALCOLO(COSTANTE*0,25)/1000
//--------------
//FOSSIL
//CALCOLO VALORI EXTERNAL ENERGY:
var energy_elec_val_ext = (total_el_user)*(elec_parse);
//INIZIO FOSSIL WFB EXTERNAL
var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossila')) { 
var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(Number(RA_CF_Fossil)*0.25)/1000;
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilb')&&(checkregion.getAttribute('id')=='regionA')) {
var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(Number(RA_CF_Fossil)*0.25)/1000;

}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilb')&&(checkregion.getAttribute('id')=='regionC')||(checkregion.getAttribute('id')=='regionD')) {
var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(Number(RB_CF_Fossil)*0.25)/1000;
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilc')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')) {
var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(Number(RB_CF_Fossil)*0.25)/1000;
}
else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilc')&&(checkregion.getAttribute('id')=='regionD')) {	
var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_CF_Fossil)*0.25)/1000;

}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossild')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')||(checkregion.getAttribute('id')=='regionC')) {
var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_CF_Fossil)*0.25)/1000;
}
else {
var fossil_final_cf_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_CF_Fossil)*0.25)/1000;
}
console.log("fossil_final_cf_ext: "+fossil_final_cf_ext);
//FINE FOSSIL WFBLUE EXTERNAL

//BIOFUEL EXTERNAL WFBLUE
var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuela')) {
var bio_final_cf_ext = total_bio_user*(biofuels_parse)*(Number(RA_CF_Biofuel)*0.27)/1000;
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelb')&&(checkregion.getAttribute('id')=='regionA')) {
var bio_final_cf_ext = total_bio_user*(biofuels_parse)*(Number(RA_CF_Biofuel)*0.27)/1000;
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelb')&&(checkregion.getAttribute('id')=='regionC')||(checkregion.getAttribute('id')=='regionD')) {
var bio_final_cf_ext = total_bio_user*(biofuels_parse)*(Number(RB_CF_Biofuel)*0.27)/1000;
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelb')&&(checkregion.getAttribute('id')=='regionA')) {
var bio_final_cf_ext = total_bio_user*(biofuels_parse)*(Number(RA_CF_Biofuel)*0.27)/1000;

}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelc')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')) {
var bio_final_cf_ext = total_bio_user*(biofuels_parse)*(Number(RB_CF_Biofuel)*0.27)/1000;
}

else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelc')&&(checkregion.getAttribute('id')=='regionD')) {	
var bio_final_cf_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_CF_Biofuel)*0.27)/1000;

}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofueld')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')||(checkregion.getAttribute('id')=='regionC')) {
var bio_final_cf_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_CF_Biofuel)*0.27)/1000;
}
else {
var bio_final_cf_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_CF_Biofuel)*0.27)/1000;
}
console.log("bio_final_cf_ext: "+bio_final_cf_ext);
//FINE WFBLUE BIOFUEL EXTERNAL

//INIZIO ELECTRICITY WFBLUE EXTERNAL
var energy_elec_val = (total_el_user)*((elec_parse));

var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='ela')) {
// CORRISPONDE A IMPORT CODE 1
windp = JSON.parse(localStorage.getItem("regionADataInput"))["windp"];
solarp = JSON.parse(localStorage.getItem("regionADataInput"))["solarp"];
hydrop =  JSON.parse(localStorage.getItem("regionADataInput"))["hydrop"];
biofuelp = JSON.parse(localStorage.getItem("regionADataInput"))["biofuelp"];
nuclearp = JSON.parse(localStorage.getItem("regionADataInput"))["nuclearp"];
fuelp = JSON.parse(localStorage.getItem("regionADataInput"))["fuelp"];
var elec1= (windp)*(RA_CF_Wind);
var elec2 =(solarp)*(RA_CF_Solar);
var elec3 =(hydrop)*(RA_CF_Hydro);
var elec4 =(biofuelp)*(RA_CF_Biofuel);
var elec5 =(nuclearp)*(RA_CF_Nuclear);
var elec6 =(fuelp)*(RA_CF_Fossil); 	
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionA')) {
windp = JSON.parse(localStorage.getItem("regionADataInput"))["windp"];
solarp = JSON.parse(localStorage.getItem("regionADataInput"))["solarp"];
hydrop =  JSON.parse(localStorage.getItem("regionADataInput"))["hydrop"];
biofuelp = JSON.parse(localStorage.getItem("regionADataInput"))["biofuelp"];
nuclearp = JSON.parse(localStorage.getItem("regionADataInput"))["nuclearp"];
fuelp = JSON.parse(localStorage.getItem("regionADataInput"))["fuelp"];
var elec1= (windp)*(RA_CF_Wind);
var elec2 =(solarp)*(RA_CF_Solar);
var elec3 =(hydrop)*(RA_CF_Hydro);
var elec4 =(biofuelp)*(RA_CF_Biofuel);
var elec5 =(nuclearp)*(RA_CF_Nuclear);
var elec6 =(fuelp)*(RA_CF_Fossil); 	
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionC')||(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionD')) {

windp = JSON.parse(localStorage.getItem("regionBDataInput"))["windp"];
solarp = JSON.parse(localStorage.getItem("regionBDataInput"))["solarp"];
hydrop =  JSON.parse(localStorage.getItem("regionBDataInput"))["hydrop"];
biofuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["biofuelp"];
nuclearp = JSON.parse(localStorage.getItem("regionBDataInput"))["nuclearp"];
fuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["fuelp"];
	var elec1= Number(windp)*Number(RB_CF_Wind);
	var elec2 =Number(solarp)*Number(RB_CF_Solar);
	var elec3 =Number(hydrop)*Number(RB_CF_Hydro);
	var elec4 =Number(biofuelp)*Number(RB_CF_Biofuel);
	var elec5 =Number(nuclearp)*Number(RB_CF_Nuclear);
	var elec6 =Number(fuelp)*Number(RB_CF_Fossil);
}   
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionA')||(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionB')) {


windp = JSON.parse(localStorage.getItem("regionBDataInput"))["windp"];
solarp = JSON.parse(localStorage.getItem("regionBDataInput"))["solarp"];
hydrop =  JSON.parse(localStorage.getItem("regionBDataInput"))["hydrop"];
biofuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["biofuelp"];
nuclearp = JSON.parse(localStorage.getItem("regionBDataInput"))["nuclearp"];
fuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["fuelp"];
var elec1= (windp)*(RB_CF_Wind);
var elec2 =(solarp)*(RB_CF_Solar);
var elec3 =(hydrop)*(RB_CF_Hydro);
var elec4 =(biofuelp)*(RB_CF_Biofuel);
var elec5 =(nuclearp)*(RB_CF_Nuclear);
var elec6 =(fuelp)*(RB_CF_Fossil); 
}

else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionD')) {	
windp = JSON.parse(localStorage.getItem("regionDDataInput"))["windp"];
solarp = JSON.parse(localStorage.getItem("regionDDataInput"))["solarp"];
hydrop =  JSON.parse(localStorage.getItem("regionDDataInput"))["hydrop"];
biofuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["biofuelp"];
nuclearp = JSON.parse(localStorage.getItem("regionDDataInput"))["nuclearp"];
fuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["fuelp"];
	var elec1= Number(windp)*Number(RC_D_CF_Wind);
	var elec2 =Number(solarp)*Number(RC_D_CF_Solar);
	var elec3 =Number(hydrop)*Number(RC_D_CF_Hydro);
	var elec4 =Number(biofuelp)*Number(RC_D_CF_Biofuel);
	var elec5 =Number(nuclearp)*Number(RC_D_CF_Nuclear);
	var elec6 =Number(fuelp)*Number(RC_D_CF_Fossil);
}  
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')&&(checkregion.getAttribute('id')=='regionA')||(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionB')||(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionC')) {

windp = JSON.parse(localStorage.getItem("regionCDataInput"))["windp"];
solarp = JSON.parse(localStorage.getItem("regionCDataInput"))["solarp"];
hydrop =  JSON.parse(localStorage.getItem("regionCDataInput"))["hydrop"];
biofuelp = JSON.parse(localStorage.getItem("regionCDataInput"))["biofuelp"];
nuclearp = JSON.parse(localStorage.getItem("regionCDataInput"))["nuclearp"];
fuelp = JSON.parse(localStorage.getItem("regionCDataInput"))["fuelp"];
	var elec1= Number(windp)*Number(RC_D_CF_Wind);
	var elec2 =Number(solarp)*Number(RC_D_CF_Solar);
	var elec3 =Number(hydrop)*Number(RC_D_CF_Hydro);
	var elec4 =Number(biofuelp)*Number(RC_D_CF_Biofuel);
	var elec5 =Number(nuclearp)*Number(RC_D_CF_Nuclear);
	var elec6 =Number(fuelp)*Number(RC_D_CF_Fossil);
}


else {

windp = JSON.parse(localStorage.getItem("regionDDataInput"))["windp"];
solarp = JSON.parse(localStorage.getItem("regionDDataInput"))["solarp"];
hydrop =  JSON.parse(localStorage.getItem("regionDDataInput"))["hydrop"];
biofuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["biofuelp"];
nuclearp = JSON.parse(localStorage.getItem("regionDDataInput"))["nuclearp"];
fuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["fuelp"];
var elec1= Number(windp)*Number(RC_D_CF_Wind);
var elec2 =Number(solarp)*Number(RC_D_CF_Solar);
var elec3 =Number(hydrop)*Number(RC_D_CF_Hydro);
var elec4 =Number(biofuelp)*Number(RC_D_CF_Biofuel);
var elec5 =Number(nuclearp)*Number(RC_D_CF_Nuclear);
var elec6 =Number(fuelp)*Number(RC_D_CF_Fossil);

}

//FINE ELECTRICITY CF EXTERNAL


var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);
console.log("elec1 e 2: "+elec1+" e "+elec2);
console.log("elec3 e 4: "+elec3+" e "+elec4);
console.log("elec5 e 6: "+elec5+" e "+elec6);


var electricity_sum_ext = (elec1add)+(elec2add)+(elec3add);
console.log("SOMMA DEI VALORI ELECTRICITY EXTERNAL: "+elec1+" "+elec2+" "+elec3+" "+elec4+" "+elec5+" "+elec6);
electricity_sum_ext = parseFloat(electricity_sum_ext).toFixed(1);

var energy_elec_val_ext = (total_el_user)*(Number(electricity_sum_ext));
var elec_final_cf_ext = (energy_elec_val_ext)*(elec_parse)/1000;
elec_final_cf_ext = parseFloat(elec_final_cf_ext/100).toFixed(1);
elec_final_cf_ext = Number(elec_final_cf_ext);
console.log("elec_final_cf_ext: "+elec_final_cf_ext);

//----------------------------------------------------------------------------------------------
var datoCFen_external = elec_final_cf_ext+bio_final_cf_ext+fossil_final_cf_ext;
var CF_Energy_External=datoCFen_external;

console.log("datoCFen_external: "+datoCFen_external);

//----------------------------------------------------------------------------------------------  	
var titoloCF = parseFloat(Number(datoCFen_external)+Number(dataCF_food_ext)+Number(datoCFen_internal)+Number(dataCF_food_int)).toFixed(1);
document.getElementById("GT1").innerHTML = titoloCF;

//______calcolo valori per tabella dash______
var sommacfood = (dataCF_food_int+dataCF_food_ext);
var sommacfenergy = (datoCFen_external+datoCFen_internal);
var somma_energy_itsh = Number(total_fossil_user+total_bio_user+total_el_user);

//console.log("energy_itsh: "+somma_energy_itsh);

var valfood01 = (sommacfood/(intakeparse*(1+wastevirgola)));
var valfood11_1 = (valfood01)-(initial_value_CF_food);
var valfood11_2 = valfood11_1/initial_value_CF_food;
var valfood11_3 = valfood11_2*100;
var valfood11 = parseFloat(valfood11_3).toFixed(1);
console.log("COSTANTE PERCENTUALE VALFOOD 5: "+initial_value_CF_food);
console.log("COSTANTE PERCENTUALE VALFOOD TOT: "+valfood11);
console.log("OPERAZIONE COSTANTE MENO VALFOOD: "+valfood11_1);
console.log("OPERAZIONE TOT VALFOOD: "+valfood11);

document.getElementById("valfood_1").innerHTML = parseFloat(valfood01).toFixed(4);
document.getElementById("valfood_5").innerHTML = valfood11+"%";

var valen01 = ((sommacfenergy)/somma_energy_itsh);
console.log("ENERGY O1: "+(sommacfenergy)/somma_energy_itsh);
console.log("ENERGY O1: somma "+sommacfenergy);
console.log("ENERGY O1: somma 2 "+somma_energy_itsh);

//var valen11 = ((valen01-initial_value_CF_en)/initial_value_CF_en);
var valen11_1 = (valen01)-(initial_value_CF_en);
var valen11_2 = valen11_1/initial_value_CF_en;
var valen11_3 = valen11_2*100;
var valen11 = parseFloat(valen11_3).toFixed(1);

document.getElementById("valenergy_1").innerHTML = parseFloat(valen01).toFixed(4);
document.getElementById("valenergy_5").innerHTML = valen11+"%";

//----PERCENTUALE SOTTO AL TITOLO---
var grand_total_1 = (Number(sommacfood)+Number(sommacfenergy));
console.log("GRAND TOTAL ANTE FOOD ENERGY SOMMA: "+grand_total_1);
var grand_total_2 = grand_total_1-(Number(initial_value_cf_int));
console.log("GRAND TOTAL ANTE FOOD ENERGY SECONDA DOMMA: "+grand_total_2);
var grand_total_ante = (grand_total_2/Number(initial_value_cf_int));
console.log("GRAND TOTAL ANTE FOOD ENERGY: "+grand_total_ante);
var grand_total_round = (grand_total_ante)*100;
var number= (grand_total_round);
console.log("GRAND TOTAL ROUND 2: "+number);

var neg_to_pos = Math.abs(number);
var grand_total = Math.round(neg_to_pos); //0
console.log("GRAND TOTAL ROUND 2-2 : "+grand_total);

var grand_total_abs = 0;
//if(number<0){
	//console.log("SONO DENTRO IF 1 (again)");
	 //grand_total_abs = Math.abs(number);	
	//console.log("CF TOTAL ABS"+grand_total_abs);
//}
	/*if((grand_total_abs<=0.09)&&(grand_total_abs>0.04)){
		//console.log("SONO DENTRO IF 2");
		grand_total = 1;
		//console.log("CF TOTAL ABS SECONDO IF CASO ok1"+grand_total_abs);
		}
		else if(grand_total_abs<0.05){
			//console.log("SONO DENTRO IF 3");
			grand_total = 0;
			//console.log("CF TOTAL ABS ELSE CASO 0"+grand_total_abs);
		} 
		else {
			//console.log("SONO DENTRO ELSE 3");
			grand_total_abs = Math.abs(number);	
			 grand_total = Math.ceil(grand_total_abs*100);
				//console.log("WFB TOTAL NUMERO POSITIVO	"+grand_total_abs);
				}
			} 
else {
	}*/
//console.log("grand_total_cf_NUOVO NEGATIVO"+grand_total_round);
//console.log("grand_total_cf_ABS NUOVO DOPO IF (dovrebbe..ora)"+grand_total);
//console.log("grand_total_cf"+number);



document.getElementById("percent1").innerHTML = grand_total+ "% above initial value";//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////	

// ===================== AGGIORNAMENTO DATI DA UTILIZZARE IN RELATIONSEU.JS ======================================================================
var checkregion = document.querySelector('input[name="region"]:checked');
var region = checkregion.getAttribute("id");
regionDataOutput = localStorage.getItem(region+'DataOutput');
regionDataOutput = JSON.parse(regionDataOutput);

regionDataOutput["CF_Food_Internal"] = CF_Food_Internal;
regionDataOutput["CF_Food_External"] = CF_Food_External;
regionDataOutput["CF_Energy_Internal"] = CF_Energy_Internal;
regionDataOutput["CF_Energy_External"] = CF_Energy_External;

if(region == "regionA") {
	localStorage.setItem("regionADataOutput", JSON.stringify(regionDataOutput));
}
else if(region == "regionB") {
	localStorage.setItem("regionBDataOutput", JSON.stringify(regionDataOutput));
}
else if(region == "regionC") {
	localStorage.setItem("regionCDataOutput", JSON.stringify(regionDataOutput));
}
else {
	localStorage.setItem("regionDDataOutput", JSON.stringify(regionDataOutput));
}
// ===============================================================================================================================================
	  	  
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
      text: 'Land Footprint (m2/cap/day)'
    },
  };
  // Chart Data
  var barchartData2 = {
    
		    labels: ["Internal", "External"],
		    datasets: [{
		      type: 'bar',
		      label: '"Food"',
		      data: [15, 3],
		      backgroundColor: giallo
		      
		    }, {
		      type: 'bar',
		      label: '"Energy"',
		      backgroundColor: verde,
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

	console.log("================================== LF =====================================================");

	var checkregiong = document.querySelector('input[name="region"]:checked'); 
		if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionA')) { 
			
		 initial_value_cf_int = 24.4212022139062;  initial_value_lf_int = 13.2551883468376;
		 initial_value_wfg_int = 5191.68997367378;  initial_value_wfb_int = 773.876129386631;
		 
		 initial_value_CF_food = 0.003238332; 
		 initial_value_LF_food = 0.003459326; 
		 initial_value_wfg_food = 1.19415722;
		 initial_value_wfb_food = 0.16009438; 
		 initial_value_CF_en = 0.062843721771217 ; 
		 initial_value_LF_en = 0.00774419419094049 ; 
		 initial_value_wfg_en= 5.52412077113194; 
		 initial_value_wfb_en = 1.10088961437177 ;
		 
		 YG_closing_WFb = 0;  Mulching_WFb = 0;
		 YG_closing_CF = 0;  Mulching_CF = 0; Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
		 Deficit_Mul_Drip_CF = 0;
		 YG_closing_LF = 0.17;  Mulching_LF = 0.25;
		 YG_closing_WFg = 0.17; Mulching_WFg = 0.25;
		 Deficit_Irrigation_LF = -0.10;  Deficit_Mul_LF = -0.10;
		 Deficit_Irrigation_WFg = -0.08;
		 Deficit_Mul_WFg = 0.02;  Deficit_Irrigation_WFb = 0.15;  Deficit_Mul_WFb = 0.30;
		 Deficit_Mul_Drip_LF = -0.02;  Deficit_Mul_Drip_WFg = 0.05; 
		 Deficit_Mul_Drip_WFb = 0.35;
		 
		 Rainfed = 0.84;
		 Irrigated = 1-Rainfed;


		}
		else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionB')) { 
			initial_value_cf_int = 20.2748418808954;  
		     initial_value_lf_int = 17.5727719925233;
			 initial_value_wfg_int = 4714.93177211245;  
			 initial_value_wfb_int = 816.233412273386;
			 
			 initial_value_CF_food = 0.003036887; 
			 initial_value_LF_food = 0.0045496; 
			 initial_value_wfg_food = 1.4764269375;
			 initial_value_wfb_food = 0.2001784125; 
			 initial_value_CF_en = 0.0443982411716406 ; 
			 initial_value_LF_en = 0.0127996691636463 ; 
			 initial_value_wfg_en= 0.00913463005213692; 
			 initial_value_wfb_en = 0.743798594735205 ;
			 
			 YG_closing_WFb = 0;  Mulching_WFb = 0;
			 YG_closing_CF = 0;  Mulching_CF = 0;
			 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
			 Deficit_Mul_Drip_CF = 0;
			 YG_closing_LF = 0.26;  Mulching_LF = 0.25;
			 YG_closing_WFg = 0.26; Mulching_WFg = 0.25;
			 Deficit_Irrigation_LF = -0.10; 
			 Deficit_Mul_LF = -0.10;
			 Deficit_Irrigation_WFg = -0.08;
			 Deficit_Mul_WFg = 0.02; 
			 Deficit_Irrigation_WFb = 0.15; 
			 Deficit_Mul_WFb = 0.30;
			 Deficit_Mul_Drip_LF = -0.02; 
			 Deficit_Mul_Drip_WFg = 0.05; 
			 Deficit_Mul_Drip_WFb = 0.35;	
			 
			 Rainfed = 0.96;
			 Irrigated = 1-Rainfed;
		} 
		else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionC')) { 
			initial_value_cf_int =  27.9584617302096;  
		     initial_value_lf_int = 14.5325751112248;
			 initial_value_wfg_int = 2859.81844233148;  
			 initial_value_wfb_int = 406.478627692298;
			 
			 initial_value_CF_food = 0.003557996; 
			 initial_value_LF_food = 0.003791004; 
			 initial_value_wfg_food = 0.815905;
			 initial_value_wfb_food = 0.0983842; 
			 initial_value_CF_en = 0.0666778336593583 ; 
			 initial_value_LF_en = 0.00537553692507286 ; 
			 initial_value_wfg_en= 0.00381923696961862; 
			 initial_value_wfb_en = 0.265744673663643 ;
			 
			 YG_closing_WFb = 0;  Mulching_WFb = 0;
			 YG_closing_CF = 0;  Mulching_CF = 0;
			 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
			 Deficit_Mul_Drip_CF = 0;
			 YG_closing_LF = 0.33;  Mulching_LF = 0.25;
			 YG_closing_WFg = 0.33; Mulching_WFg = 0.25;
			 Deficit_Irrigation_LF = -0.10; 
			 Deficit_Mul_LF = -0.10;
			 Deficit_Irrigation_WFg = -0.08;
			 Deficit_Mul_WFg = 0.02; 
			 Deficit_Irrigation_WFb = 0.15; 
			 Deficit_Mul_WFb = 0.30;
			 Deficit_Mul_Drip_LF = -0.02; 
			 Deficit_Mul_Drip_WFg = 0.05; 
			 Deficit_Mul_Drip_WFb = 0.35;	
			
			 Rainfed = 0.89;
			 Irrigated = 1-Rainfed;
		}
		else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionD')) { 
			initial_value_cf_int =  25.1318778442795;  
		     initial_value_lf_int = 15.7995747782528;
			 initial_value_wfg_int = 3357.73329112609;  
			 initial_value_wfb_int = 485.707639283664;
			 
			 initial_value_CF_food = 0.0039148; 
			 initial_value_LF_food = 0.004344; 
			 initial_value_wfg_food = 0.968055;
			 initial_value_wfb_food = 0.119295; 
			 initial_value_CF_en = 0.0605563780410342 ; 
			 initial_value_LF_en = 0.00384961657261653 ; 
			 initial_value_wfg_en= 0.00271749225250921; 
			 initial_value_wfb_en = 0.377280593175422 ;
			 
			 YG_closing_WFb = 0;  Mulching_WFb = 0;
			 YG_closing_CF = 0;  Mulching_CF = 0;
			 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
			 Deficit_Mul_Drip_CF = 0;
			 YG_closing_LF = 0.33;  Mulching_LF = 0.25;
			 YG_closing_WFg = 0.33; Mulching_WFg = 0.25;
			 Deficit_Irrigation_LF = -0.10; 
			 Deficit_Mul_LF = -0.10;
			 Deficit_Irrigation_WFg = -0.08;
			 Deficit_Mul_WFg = 0.02; 
			 Deficit_Irrigation_WFb = 0.15; 
			 Deficit_Mul_WFb = 0.30;
			 Deficit_Mul_Drip_LF = -0.02; 
			 Deficit_Mul_Drip_WFg = 0.05; 
			 Deficit_Mul_Drip_WFb = 0.35;	
			 
			 Rainfed = 0.89;
			 Irrigated = 1-Rainfed;
		}
		else {}
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
var totalone = vegparse+vegeparse+meatparse;
//------------------------------------------------------------------------------------
var windp = parseFloat(document.getElementById("em_J21").value)/100;
var solarp = parseFloat(document.getElementById("em_J22").value)/100;
var hydrop = parseFloat(document.getElementById("em_J23").value)/100;
var biofuelp = parseFloat(document.getElementById("em_J24").value)/100;
var nuclearp = parseFloat(document.getElementById("em_J25").value)/100;
var fuelp = parseFloat(document.getElementById("em_J26").value)/100;
//----------------------------------------------------------------------------------------------------------------
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
//calcolo i valori per PLANT BASED:
	var checkregion = document.querySelector('input[name="region"]:checked'); 
  	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
  	//var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
  		var meat0_1 =(vegeparse/totalone);
		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
		var meat0_3 = (meat0_1)+(meat0_2);
  	var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*70);
  	//calcolo i valori per MEAT & FISH:
  	//var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;	

		
  	var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*15);
  	//calcolo i valori per DIARY & EGGS:
  	//var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
  	var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);

  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
  		var meat0_1 =(vegeparse/totalone);
  		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
  		var meat0_3 = (meat0_1)+(meat0_2);
  	
  		var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*70);
  		var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*15);
  		var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);
  		
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
  		var meat0_1 =(vegeparse/totalone);
  		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
  		var meat0_3 = (meat0_1)+(meat0_2);
  		
  		var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*65);
  		var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*20);
  		var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);
  		

  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
  		var meat0_1 =(vegeparse/totalone);
  		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
  		var meat0_3 = (meat0_1)+(meat0_2);
  		
  		var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*65);
  		var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*20);
  		var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);
  		

  	} else {}
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
var measure = document.getElementById("Measure").value;	
var Deficit;
var checkregionyg = document.querySelector('input[name="region"]:checked'); 
if (measure=='1') {
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Irrigation_LF;	
	Deficit = Irrigated* deficit_irrigation_lf;
	}
	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
		var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Irrigation_LF;
			Deficit = Irrigated* deficit_irrigation_lf;
		} 	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
		
		var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Irrigation_LF;	
			Deficit = Irrigated* deficit_irrigation_lf;
		} 	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
		var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Irrigation_LF;
			Deficit = Irrigated* deficit_irrigation_lf;
		}
	}//VALUE 1 FINE
//VALUE 2 INIZIO
	
else if(measure=='2') {
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
		var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Mul_LF;
		Deficit = Irrigated* deficit_irrigation_lf;
		}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
		var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Mul_LF;	
		Deficit = Irrigated* deficit_irrigation_lf;
	}

	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
		var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Mul_LF;	
		Deficit = Irrigated* deficit_irrigation_lf;
	}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
		var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Mul_LF;	
		Deficit = Irrigated* deficit_irrigation_lf;
		}else{}
	}
//VALUE 2 FINE
//VALUE 3 INIZIO
else if(measure=='3') {
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
	var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Mul_Drip_LF;
	Deficit = Irrigated* deficit_irrigation_lf;
	}	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
		var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Mul_Drip_LF;
		Deficit = Irrigated* deficit_irrigation_lf;
		} 
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
		var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Mul_Drip_LF;
		Deficit = Irrigated* deficit_irrigation_lf;
		} 
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
		var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Mul_Drip_LF;
		Deficit = Irrigated* deficit_irrigation_cl;
		} else{}
	
	} //VALUE 3 FINE
else {
	}
//----------------------------------------------------------------------------------------------------------------
var meatbased = (meat1*cal_waste)/100;
var diarybased = (diary1*cal_waste)/100;
var plantbased = (plant1*cal_waste)/100;
//----------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF INTERNAL:
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
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

}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
	//PLANT:
	//------------------------------------------------------------------------------------------------------------------
	var plantbasedA = plantbased*(1-Number(fip));
	var plantbasedB = ((YeldLF+Mulch)*Rainfed)+Deficit;
	var plantbasedC = Number(RB_LF_Plant)*(1-Number(plantbasedB));	
	var plant_lf = Number(plantbasedA)*Number(plantbasedC);
	//------------------------------------------------------------------------------------------------------------------
	//MEAT:	
	var meatbasedA = meatbased*(1-Number(fim));
	var meatbasedB = ((YeldLF+Mulch)*Rainfed)+Deficit;
	var meatbasedC = Number(RB_LF_Meat)*(1-Number(meatbasedB));
	//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
	var meat_lf = Number(meatbasedA)*Number(meatbasedC);
	//---------------------------------------------------------------------------------------------------------------------
	//DIARY:
	var diaryA = (diarybased)*(1-Number(fid));
	var diaryB = ((YeldLF+Mulch)*Rainfed)+Deficit;
	var diaryC = Number(RB_LF_Diary)*(1-Number(diaryB));
	var diary_lf = (diaryA)*(diaryC);

	}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
	//PLANT:
	//------------------------------------------------------------------------------------------------------------------
	var plantbasedA = plantbased*(1-Number(fip));
	var plantbasedB = ((YeldLF+Mulch)*Rainfed)+Deficit;
	var plantbasedC = Number(RC_LF_Plant)*(1-Number(plantbasedB));	
	var plant_lf = Number(plantbasedA)*Number(plantbasedC);
	//------------------------------------------------------------------------------------------------------------------
	//MEAT:	
	var meatbasedA = meatbased*(1-Number(fim));
	var meatbasedB = ((YeldLF+Mulch)*Rainfed)+Deficit;
	var meatbasedC = Number(RC_LF_Meat)*(1-Number(meatbasedB));
	//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
	var meat_lf = Number(meatbasedA)*Number(meatbasedC);
	//---------------------------------------------------------------------------------------------------------------------
	//DIARY:
	var diaryA = (diarybased)*(1-Number(fid));
	var diaryB = ((YeldLF+Mulch)*Rainfed)+Deficit;
	var diaryC = Number(RC_LF_Diary)*(1-Number(diaryB));
	var diary_lf = (diaryA)*(diaryC);

	}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
	//PLANT:
	//------------------------------------------------------------------------------------------------------------------
	var plantbasedA = plantbased*(1-Number(fip));
	var plantbasedB = ((YeldLF+Mulch)*Rainfed)+Deficit;
	var plantbasedC = Number(RD_LF_Plant)*(1-Number(plantbasedB));	
	var plant_lf = Number(plantbasedA)*Number(plantbasedC);
	//------------------------------------------------------------------------------------------------------------------
	//MEAT:	
	var meatbasedA = meatbased*(1-Number(fim));
	var meatbasedB = ((YeldLF+Mulch)*Rainfed)+Deficit;
	var meatbasedC = Number(RD_LF_Meat)*(1-Number(meatbasedB));
	//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
	var meat_lf = Number(meatbasedA)*Number(meatbasedC);
	//---------------------------------------------------------------------------------------------------------------------
	//DIARY:
	var diaryA = (diarybased)*(1-Number(fid));
	var diaryB = ((YeldLF+Mulch)*Rainfed)+Deficit;
	var diaryC = Number(RD_LF_Diary)*(1-Number(diaryB));
	var diary_lf = (diaryA)*(diaryC);

	} else {}

console.log("plantbasedA: "+plantbasedA+" plantbasedB: "+plantbasedB+" plantbasedC: "+plantbasedC+" RA_LF_Plant"+RA_LF_Plant+" plant_lf: "+plant_lf);
console.log("meatbasedA: "+meatbasedA+" meatbasedB: "+meatbasedB+" meatbasedC: "+meatbasedC+" RA_LF_Meat"+RA_LF_Meat+" meat_lf: "+meat_lf);
console.log("diaryA: "+diaryA+" diaryB: "+diaryB+" diaryC: "+diaryC+" RA_LF_Diary"+RA_LF_Diary+" diary_lf: "+diary_lf);

//---------------------------------------------------------------------------------------------------------------------
var add1 = (plant_lf)+(meat_lf);
var dataLF_food_int = (add1)+(diary_lf);
LF_Food_Internal=dataLF_food_int; 

console.log("LF_Food_Internal: "+LF_Food_Internal);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF EXTERNAL:

var plantres_lf_e = (plantbased)*Number(fip);
var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
//BOTTONE A PLANT
if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='planta')) {
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
	var plantres_lf_ext = Number(plantres_lf_e)*Number(RA_LF_Plant);
		plantres_lf_ext = Number(plantres_lf_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var plantres_lf_ext = Number(plantres_lf_e)*Number(RA_LF_Plant);
		plantres_lf_ext = Number(plantres_lf_ext);

	}
	else { 
		var plantres_lf_ext = Number(plantres_lf_e)*Number(RA_LF_Plant);
		plantres_lf_ext = Number(plantres_lf_ext);

	}
}

//BOTTONE PLANT B
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		
		var plantres_lf_ext = Number(plantres_lf_e)*(RB_LF_Plant);
		plantres_lf_ext = Number(plantres_lf_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var plantres_cf_ext = Number(plantres_lf_e)*(RB_LF_Plant);
		plantres_cf_ext = Number(plantres_cf_ext);

	}
	else { 
		var plantres_lf_ext = Number(plantres_lf_e)*(RB_LF_Plant);
		plantres_lf_ext = Number(plantres_lf_ext);

	} 
}

//BOTTONE PLANT C
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var plantres_lf_ext = Number(plantres_lf_e)*(RC_LF_Plant);
		plantres_lf_ext = Number(plantres_lf_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var plantres_lf_ext = Number(plantres_lf_e)*(RC_LF_Plant);
		plantres_lf_ext = Number(plantres_lf_ext);

	}
	else { 
		var plantres_lf_ext = Number(plantres_lf_e)*(RC_LF_Plant);
		plantres_lf_ext = Number(plantres_lf_ext);

	} 
} 

//BOTTONE PLANT D
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var plantres_lf_ext = Number(plantres_lf_e)*(RD_LF_Plant);
		plantres_lf_ext = Number(plantres_lf_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var plantres_lf_ext = Number(plantres_lf_e)*(RD_LF_Plant);
		plantres_lf_ext = Number(plantres_lf_ext);

	}
	else  { 
		var plantres_lf_ext = Number(plantres_lf_e)*(RD_LF_Plant);
		plantres_lf_ext = Number(plantres_lf_ext);

	}	
}
	
	//BOTTONE PLANT WORLD
else {
	var plantres_lf_ext = plantres_lf_e*Number(WORLD_plant_lf_FoodX11);
	plantres_lf_ext = Number(plantres_lf_ext);

}
console.log("plantres_cf_ext: "+plantres_cf_ext);
console.log("REGION B CLICK B PLANT USCITA VAR B: "+plantres_cf_ext);

console.log("REGION B CLICK B PLANT USCITA VAR C: "+plantres_cf_ext);

//MEAT EXTERNAL
var meatres_lf_e = Number(meatbased)*Number(fim);

//BOTTONE MEAT A
var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meata')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var meatres_lf_ext = Number(meatres_lf_e)*Number(RA_LF_Meat);	
		meatres_lf_ext = Number(meatres_lf_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var meatres_lf_ext = Number(meatres_lf_e)*Number(RA_LF_Meat);	
		meatres_lf_ext = Number(meatres_lf_ext);
	}
	else { 
		var meatres_lf_ext = Number(meatres_lf_e)*Number(RA_LF_Meat);	
		meatres_lf_ext = Number(meatres_lf_ext);
	} 
}
//MEAT BOTTONE B
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var meatres_lf_ext = Number(meatres_lf_e)*Number(RB_LF_Meat);	
		meatres_lf_ext = Number(meatres_lf_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var meatres_lf_ext = Number(meatres_lf_e)*Number(RB_LF_Meat);	
		meatres_lf_ext = Number(meatres_lf_ext);
	}
	else { 
		var meatres_lf_ext = Number(meatres_lf_e)*Number(RB_LF_Meat);	
		meatres_lf_ext = Number(meatres_lf_ext);
	}
}
//MEAT BOTTONE C
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	var meatres_lf_ext = Number(meatres_lf_e)*Number(RC_LF_Meat);	
	meatres_lf_ext = Number(meatres_lf_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var meatres_lf_ext = Number(meatres_lf_e)*Number(RC_LF_Meat);	
		meatres_lf_ext = Number(meatres_lf_ext);
	}
	else { 
		var meatres_lf_ext = Number(meatres_lf_e)*Number(RC_LF_Meat);	
		meatres_lf_ext = Number(meatres_lf_ext);
	}
}
//BOTTONE MEAT D
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	var meatres_lf_ext = Number(meatres_lf_e)*Number(RD_LF_Meat);	
	meatres_lf_ext = Number(meatres_lf_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var meatres_lf_ext = Number(meatres_lf_e)*Number(RD_LF_Meat);	
		meatres_lf_ext = Number(meatres_lf_ext);
	}
	else { 
		var meatres_lf_ext = Number(meatres_lf_e)*Number(RD_LF_Meat);	
		meatres_lf_ext = Number(meatres_lf_ext);
	}
}
else {
	var meatres_lf_ext = Number(meatres_lf_e)*Number(WORLD_meat_lf_FoodX12);
	meatres_lf_ext = Number(meatres_lf_ext);
}

console.log("meatres_lf_ext: "+meatres_lf_ext);

//DIARY EXTERNAL
var diaryres_lf_e = Number(diarybased)*Number(fid);

var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diarya')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var diaryres_lf_ext = Number(diaryres_lf_e)*Number(RA_LF_Diary);	
		diaryres_lf_ext = Number(diaryres_lf_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var diaryres_lf_ext = Number(diaryres_lf_e)*Number(RA_LF_Diary);	
		diaryres_lf_ext = Number(diaryres_lf_ext);

	}
	else { 
		var diaryres_lf_ext = Number(diaryres_lf_e)*Number(RA_LF_Diary);	
		diaryres_lf_ext = Number(diaryres_lf_ext);

	}
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var diaryres_lf_ext = Number(diaryres_lf_e)*Number(RB_LF_Diary);	
		diaryres_lf_ext = Number(diaryres_lf_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var diaryres_lf_ext = Number(diaryres_lf_e)*Number(RB_LF_Diary);	
		diaryres_lf_ext = Number(diaryres_lf_ext);

	}
	else { 
		var diaryres_lf_ext = Number(diaryres_lf_e)*Number(RB_LF_Diary);	
		diaryres_lf_ext = Number(diaryres_lf_ext);

	}
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var diaryres_lf_ext = Number(diaryres_lf_e)*Number(RC_LF_Diary);	
		diaryres_lf_ext = Number(diaryres_lf_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var diaryres_lf_ext = Number(diaryres_lf_e)*Number(RC_LF_Diary);	
		diaryres_lf_ext = Number(diaryres_lf_ext);

	}
	else { 
		var diaryres_lf_ext = Number(diaryres_lf_e)*Number(RC_LF_Diary);	
		diaryres_lf_ext = Number(diaryres_lf_ext);

	}
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var diaryres_lf_ext = Number(diaryres_lf_e)*Number(RD_LF_Diary);	
		diaryres_lf_ext = Number(diaryres_lf_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var diaryres_lf_ext = Number(diaryres_lf_e)*Number(RD_LF_Diary);	
		diaryres_lf_ext = Number(diaryres_lf_ext);

	}
	else { 
		var diaryres_lf_ext = Number(diaryres_WFblue_e)*Number(RD_LF_Diary);	
		diaryres_lf_ext = Number(diaryres_lf_ext);

	}
}
else {
	var diaryres_lf_ext = Number(diaryres_lf_e)*Number(WORLD_diary_lf_FoodX13);
	diaryres_lf_ext = Number(diaryres_lf_ext);

}
console.log("diaryres_lf_ext: "+diaryres_lf_ext);
	  
var dataLF_food_ext = (plantres_lf_ext+meatres_lf_ext+diaryres_lf_ext);
var LF_Food_External=dataLF_food_ext; 
console.log("LF_Food_External = Food.N21 : "+dataLF_food_ext);
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
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
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
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var fossil_ind = 25.0209;
		var bio_ind = 26.5849;
		var el_ind = 31.6153;
			  	  
		var fossil_tr = 63.5554;
		var bio_tr = 7.25276;
		var el_tr = 1.29415;
			  	  
		var fossil_s = 8.8585;
		var bio_s = 1.76044;
		var el_s = 18.1069;
			  	  
		var fossil_house = 12.8533;
		var bio_house = 17.6458;
		var el_house = 24.6744;
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var fossil_ind = 30.8979;
		var bio_ind = 2.60221;
		var el_ind = 21.1867;
			  	  
		var fossil_tr = 70.3915;
		var bio_tr = 2.707273;
		var el_tr = 1.33063;
			  	  
		var fossil_s = 21.0933;
		var bio_s = 3.41282;
		var el_s = 16.0308;
			  	  
		var fossil_house = 43.0607;
		var bio_house = 8.01203;
		var el_house = 14.1642;
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
		var fossil_ind = 24.0465;
		var bio_ind = 3.36426;
		var el_ind = 16.1288;
			  	  
		var fossil_tr = 66.283;
		var bio_tr = 3.50512;
		var el_tr = 1.09532;
			  	  
		var fossil_s = 12.6046;
		var bio_s = 1.06047;
		var el_s = 15.6423;
			  	  
		var fossil_house = 23.5779;
		var bio_house = 10.2351;
		var el_house = 15.7147;
	}
	else {}
//----------------------------------------------------------------------------------------------------
var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
var somma_valori_s = (fossil_s+bio_s+el_s);
var somma_valori_house = (fossil_house+bio_house+el_house);

console.log("somma_valori_tr: "+somma_valori_tr+" somma_valori_ind: "+somma_valori_ind+" somma_valori_s: "+somma_valori_s+" somma_valori_house: "+somma_valori_house);
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

console.log("f_i: "+f_i+" f_t: "+f_t+" f_s: "+f_s+" f_h: "+f_h);
	  	  
var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);

var energy_fossil_val = (total_fossil_user)*(1-fossilf_parse);
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
var fossil_final_lf = (energy_fossil_val)*(Number(RA_LF_Fossil)*0.25)/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
var fossil_final_lf = (energy_fossil_val)*(Number(RB_LF_Fossil)*0.25)/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
	var fossil_final_lf = (energy_fossil_val)*(Number(RC_D_LF_Fossil)*0.25)/1000;
	}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
	var fossil_final_lf = (energy_fossil_val)*(Number(RC_D_LF_Fossil)*0.25)/1000;
	} else {}
console.log("FOSSIL LF INT = EnergyI34 (ok)= "+fossil_final_lf);

//-----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di BIOFUEL USER:	  
var bio_i_primaop = (A6a)-(A6b);
/*var b_i = (bio_fr_parse)*(A6b);
var b_t = (bio_fr_parse)*(B6a-B6b);
var b_s = (bio_fr_parse)*(C6a-C6b);
var b_h = (bio_fr_parse)*(D6a);*/
var b_i = (bio_fr_parse)*(A6b);
b_i = parseFloat(b_i).toFixed(1);
b_i = Number(b_i);
var b_t = (bio_fr_parse)*(B6a-B6b);
b_t = parseFloat(b_t).toFixed(1);
b_t = Number(b_t);
var b_s = (bio_fr_parse)*(C6a-C6b);
b_s = parseFloat(b_s).toFixed(1);
b_s = Number(b_s);
var b_h = (bio_fr_parse)*(D6a);
b_h = parseFloat(b_h).toFixed(1);
b_h = Number(Math.round(b_h));

console.log("b_i: "+b_i+" b_t: "+b_t+" b_s: "+b_s+" b_h: "+b_h);

var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));

console.log("total_bio_user: "+total_bio_user);

var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
var bio_final_lf = (energy_bio_val)*(Number(RA_LF_Biofuel*0.27))/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
var bio_final_lf = (energy_bio_val)*(Number(RB_LF_Biofuel*0.27))/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
	var bio_final_lf = (energy_bio_val)*(Number(RC_D_LF_Biofuel*0.27))/1000;
	}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
	var bio_final_lf = (energy_bio_val)*(Number(RC_D_LF_Biofuel*0.27))/1000;
	} else{}
//console.log("BIO LF INT = EnergyI35 (ok) =  "+bio_final_lf);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(B6a);
var e_s = (1-red_ind_parse)*Number(el_s);
e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
		  	
console.log("e_i: "+e_i+" e_t: "+e_t+" e_s: "+e_s+" e_h: "+e_h);		  	
		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
console.log("total_el_user: "+total_el_user);

var energy_elec_val = (total_el_user)*((1-(elec_parse)));

////console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);
//var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
//if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='ela')) {
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 

	var elec1= (windp)*(RA_LF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(solarp)*(RA_LF_Solar);
	var elec3 =(hydrop)*(RA_LF_Hydro);
	var elec4 =(biofuelp)*(RA_LF_Biofuel);
	var elec5 =(nuclearp)*(RA_LF_Nuclear);
	var elec6 =(fuelp)*(RA_LF_Fossil); 	
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 

	var elec1= (windp)*(RB_LF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(solarp)*(RB_LF_Solar);
	var elec3 =(hydrop)*(RB_LF_Hydro);
	var elec4 =(biofuelp)*(RB_LF_Biofuel);
	var elec5 =(nuclearp)*(RB_LF_Nuclear);
	var elec6 =(fuelp)*(RB_LF_Fossil); 	
}   
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 

	var elec1= (windp)*(RC_D_LF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(solarp)*(RC_D_LF_Solar);
	var elec3 =(hydrop)*(RC_D_LF_Hydro);
	var elec4 =(biofuelp)*(RC_D_LF_Biofuel);
	var elec5 =(nuclearp)*(RC_D_LF_Nuclear);
	var elec6 =(fuelp)*(RC_D_LF_Fossil); 	
}   
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 

	var elec1= (windp)*(RC_D_LF_Wind);
	////console.log("SOMMA ELEC1: "+elec1);
	var elec2 =(solarp)*(RC_D_LF_Solar);
	var elec3 =(hydrop)*(RC_D_LF_Hydro);
	var elec4 =(biofuelp)*(RC_D_LF_Biofuel);
	var elec5 =(nuclearp)*(RC_D_LF_Nuclear);
	var elec6 =(fuelp)*(RC_D_LF_Fossil); 	
	}   
else {

}

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);
console.log("ELECTRICITY SUM ELEC1ADD: "+elec1add);
console.log("ELECTRICITY SUM ELEC2ADD: "+elec2add);
console.log("ELECTRICITY SUM ELEC3ADD: "+elec3add);

var electricity_sum = (elec1add)+(elec2add)+(elec3add);

var elec_final_lf = (energy_elec_val)*(electricity_sum)/1000;
console.log("ELECTRICITY LF INT = Energy.I36 (ok) = : "+elec_final_lf);
//-----------------------------------------------------------------------------------------------
var datoLFen_internal = elec_final_lf+bio_final_lf+fossil_final_lf;
var LF_Energy_Internal=datoLFen_internal;
console.log("TOT LF ENERGY INTERNAL = Energy.I37 (ok): "+datoLFen_internal);
//-----------------------------------------------------------------------------------------------
//CALCOLO VALORI EXTERNAL ENERGY
	var energy_elec_val_ext = (total_el_user)*(elec_parse);
//CALCOLO VALORI EXTERNAL ENERGY:
//CALCOLO VALORI EXTERNAL ENERGY:
	
	//INIZIO FOSSIL LF EXTERNAL
var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossila')) { 
	var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(Number(RA_LF_Fossil)*0.25)/1000;
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilb')&&(checkregion.getAttribute('id')=='regionA')) {
	var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(Number(RA_LF_Fossil)*0.25)/1000;

}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilb')&&(checkregion.getAttribute('id')=='regionC')||(checkregion.getAttribute('id')=='regionD')) {
var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(Number(RB_LF_Fossil)*0.25)/1000;
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilc')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')) {
	var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(Number(RB_LF_Fossil)*0.25)/1000;
}
else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilc')&&(checkregion.getAttribute('id')=='regionD')) {	
	var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_LF_Fossil)*0.25)/1000;

}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossild')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')||(checkregion.getAttribute('id')=='regionC')) {
	var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_LF_Fossil)*0.25)/1000;
}
else {
	var fossil_final_lf_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_LF_Fossil)*0.25)/1000;
}
console.log("fossil_final_lf_ext: "+fossil_final_lf_ext);
//FINE FOSSIL WFBLUE EXTERNAL

//BIOFUEL EXTERNAL WFBLUE
var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuela')) {
	var bio_final_lf_ext = total_bio_user*(biofuels_parse)*(Number(RA_LF_Biofuel)*0.27)/1000;
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelb')&&(checkregion.getAttribute('id')=='regionA')) {
	var bio_final_lf_ext = total_bio_user*(biofuels_parse)*(Number(RA_LF_Biofuel)*0.27)/1000;
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelb')&&(checkregion.getAttribute('id')=='regionC')||(checkregion.getAttribute('id')=='regionD')) {
	var bio_final_lf_ext = total_bio_user*(biofuels_parse)*(Number(RB_LF_Biofuel)*0.27)/1000;
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelb')&&(checkregion.getAttribute('id')=='regionA')) {
	var bio_final_lf_ext = total_bio_user*(biofuels_parse)*(Number(RA_LF_Biofuel)*0.27)/1000;

}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelc')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')) {
	var bio_final_lf_ext = total_bio_user*(biofuels_parse)*(Number(RB_LF_Biofuel)*0.27)/1000;
}

else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelc')&&(checkregion.getAttribute('id')=='regionD')) {	
	var bio_final_lf_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_LF_Biofuel)*0.27)/1000;
	
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofueld')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')||(checkregion.getAttribute('id')=='regionC')) {
	var bio_final_lf_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_LF_Biofuel)*0.27)/1000;
}
else {
	var bio_final_lf_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_LF_Biofuel)*0.27)/1000;
}
console.log("bio_final_lf_ext: "+bio_final_lf_ext);
//FINE WFBLUE BIOFUEL EXTERNAL

//INIZIO ELECTRICITY WFBLUE EXTERNAL
var energy_elec_val = (total_el_user)*((elec_parse));
var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='ela')) {
	// CORRISPONDE A IMPORT CODE 1
	windp = JSON.parse(localStorage.getItem("regionADataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionADataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionADataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionADataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionADataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionADataInput"))["fuelp"];
	var elec1= (windp)*(RA_LF_Wind);
	var elec2 =(solarp)*(RA_LF_Solar);
	var elec3 =(hydrop)*(RA_LF_Hydro);
	var elec4 =(biofuelp)*(RA_LF_Biofuel);
	var elec5 =(nuclearp)*(RA_LF_Nuclear);
	var elec6 =(fuelp)*(RA_LF_Fossil); 	
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionA')) {
	windp = JSON.parse(localStorage.getItem("regionADataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionADataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionADataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionADataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionADataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionADataInput"))["fuelp"];
	var elec1= (windp)*(RA_LF_Wind);
	var elec2 =(solarp)*(RA_LF_Solar);
	var elec3 =(hydrop)*(RA_LF_Hydro);
	var elec4 =(biofuelp)*(RA_LF_Biofuel);
	var elec5 =(nuclearp)*(RA_LF_Nuclear);
	var elec6 =(fuelp)*(RA_LF_Fossil); 	
}
	
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionC')||(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionD')) {

	windp = JSON.parse(localStorage.getItem("regionBDataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionBDataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionBDataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionBDataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["fuelp"];
		var elec1= Number(windp)*Number(RB_LF_Wind);
		var elec2 =Number(solarp)*Number(RB_LF_Solar);
		var elec3 =Number(hydrop)*Number(RB_LF_Hydro);
		var elec4 =Number(biofuelp)*Number(RB_LF_Biofuel);
		var elec5 =Number(nuclearp)*Number(RB_LF_Nuclear);
		var elec6 =Number(fuelp)*Number(RB_LF_Fossil);
}   
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionA')||(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionB')) {
	
	
	windp = JSON.parse(localStorage.getItem("regionBDataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionBDataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionBDataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionBDataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["fuelp"];
	var elec1= (windp)*(RB_LF_Wind);
	var elec2 =(solarp)*(RB_LF_Solar);
	var elec3 =(hydrop)*(RB_LF_Hydro);
	var elec4 =(biofuelp)*(RB_LF_Biofuel);
	var elec5 =(nuclearp)*(RB_LF_Nuclear);
	var elec6 =(fuelp)*(RB_LF_Fossil); 
}
	
else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionD')) {	
	windp = JSON.parse(localStorage.getItem("regionDDataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionDDataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionDDataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionDDataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["fuelp"];
		var elec1= Number(windp)*Number(RC_D_WFblue_Wind);
		var elec2 =Number(solarp)*Number(RC_D_LF_Solar);
		var elec3 =Number(hydrop)*Number(RC_D_LF_Hydro);
		var elec4 =Number(biofuelp)*Number(RC_D_LF_Biofuel);
		var elec5 =Number(nuclearp)*Number(RC_D_LF_Nuclear);
		var elec6 =Number(fuelp)*Number(RC_D_LF_Fossil);
}  
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')&&(checkregion.getAttribute('id')=='regionA')||(checkRadioElec.getAttribute('id')=='eld')&&(checkregion.getAttribute('id')=='regionB')||(checkRadioElec.getAttribute('id')=='eld')&&(checkregion.getAttribute('id')=='regionC')) {
	
	windp = JSON.parse(localStorage.getItem("regionCDataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionCDataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionCDataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionCDataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionCDataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionCDataInput"))["fuelp"];
		var elec1= Number(windp)*Number(RC_D_LF_Wind);
		var elec2 =Number(solarp)*Number(RC_D_LF_Solar);
		var elec3 =Number(hydrop)*Number(RC_D_LF_Hydro);
		var elec4 =Number(biofuelp)*Number(RC_D_LF_Biofuel);
		var elec5 =Number(nuclearp)*Number(RC_D_LF_Nuclear);
		var elec6 =Number(fuelp)*Number(RC_D_LF_Fossil);
}
	

else {

	windp = JSON.parse(localStorage.getItem("regionDDataInput"))["windp"];
solarp = JSON.parse(localStorage.getItem("regionDDataInput"))["solarp"];
hydrop =  JSON.parse(localStorage.getItem("regionDDataInput"))["hydrop"];
biofuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["biofuelp"];
nuclearp = JSON.parse(localStorage.getItem("regionDDataInput"))["nuclearp"];
fuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["fuelp"];
	var elec1= Number(windp)*Number(RC_D_LF_Wind);
	var elec2 =Number(solarp)*Number(RC_D_LF_Solar);
	var elec3 =Number(hydrop)*Number(RC_D_LF_Hydro);
	var elec4 =Number(biofuelp)*Number(RC_D_LF_Biofuel);
	var elec5 =Number(nuclearp)*Number(RC_D_LF_Nuclear);
	var elec6 =Number(fuelp)*Number(RC_D_LF_Fossil);
	
}

//FINE ELECTRICITY LF EXTERNAL


var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);
console.log("ELECTRICITY SUM ELEC1ADD: "+elec1add);
console.log("ELECTRICITY SUM ELEC2ADD: "+elec2add);
console.log("ELECTRICITY SUM ELEC3ADD: "+elec3add);
var electricity_sum_ext = (elec1add)+(elec2add)+(elec3add);
electricity_sum_ext = parseFloat(electricity_sum_ext).toFixed(1);

var elec_final_lf_ext = (energy_elec_val_ext)*Number(electricity_sum_ext)/1000;
console.log("SOMMA DEI VALORI ELECTRICITY EXTERNAL: "+elec1+" "+elec2+" "+elec3+" "+elec4+" "+elec5+" "+elec6);

console.log("elec_final_lf_ext: "+elec_final_lf_ext);
elec_final_lf_ext = parseFloat(elec_final_lf_ext/100).toFixed(1);
elec_final_lf_ext = Number(elec_final_lf_ext);
//FINE CALCOLO VALORI EXTERNAL ENERGY
//----------------------------------------------------------------------------------------------
var datoLFen_external = elec_final_lf_ext+bio_final_lf_ext+fossil_final_lf_ext;
var LF_Energy_External=datoLFen_external;

console.log("datoLFen_external: "+datoLFen_external);

var titoloLF = (Number((datoLFen_external+dataLF_food_ext)+(datoLFen_internal+dataLF_food_int))).toFixed(2);
document.getElementById("GT2").innerHTML = parseFloat(titoloLF).toFixed(1);

//______calcolo valori per tabella dash______
var sommalfood = (dataLF_food_int+dataLF_food_ext);
var sommalfenergy = (datoLFen_external+datoLFen_internal);
console.log("SOMMA FOODLF + ENERGYLF: "+sommalfood+" - "+sommalfenergy);

var somma_energy_itsh = Number(total_fossil_user+total_bio_user+total_el_user);


var valfood02 = (sommalfood/(intakeparse*(1+wastevirgola)));
//var valfood12 = (valfood02-initial_value_LF_food)/initial_value_LF_food;

var valfood12_1 = (valfood02)-(initial_value_LF_food);
var valfood12_2 = valfood12_1/initial_value_LF_food;
var valfood12_3 = valfood12_2*100;
var valfood12 = parseFloat(valfood12_3).toFixed(1);

console.log("COSTANTE PERCENTUALE VALFOOD 6: "+initial_value_LF_food);
console.log("COSTANTE PERCENTUALE VALFOOD TOT: "+valfood12);
console.log("OPERAZIONE COSTANTE MENO VALFOOD: "+valfood12_1);
console.log("OPERAZIONE TOT VALFOOD: "+valfood12);

document.getElementById("valfood_2").innerHTML = parseFloat(valfood02).toFixed(4);
document.getElementById("valfood_6").innerHTML = valfood12+"%";
console.log("OPERAZIONE TOT VALFOOD AFTER: "+valfood12);

var valen02 = ((sommalfenergy)/somma_energy_itsh);
//var valen12 = ((valen02-initial_value_LF_en)/initial_value_LF_en);

var valen12_1 = (valen02)-(initial_value_LF_en);
var valen12_2 = valen12_1/initial_value_LF_en;
var valen12_3 = valen12_2*100;
var valen12 = parseFloat(valen12_3).toFixed(1);

console.log("COSTANTE PERCENTUALE VALENERGY 6: "+initial_value_LF_en);
console.log("COSTANTE PERCENTUALE VALENERGY TOT: "+valen12);
console.log("OPERAZIONE COSTANTE MENO VALFOOD: "+valen12_1);
console.log("OPERAZIONE TOT VALENERGY: "+valen12);


document.getElementById("valenergy_2").innerHTML = parseFloat(valen02).toFixed(4);
document.getElementById("valenergy_6").innerHTML = valen12+"%";
//___________________________________________
//----PERCENTUALE SOTTO AL TITOLO---
var grand_total_1 = (Number(sommalfood)+Number(sommalfenergy));
console.log("GRAND TOTAL ANTE FOOD ENERGY SOMMA: "+grand_total_1);
var grand_total_2 = grand_total_1-(Number(initial_value_lf_int));
console.log("GRAND TOTAL ANTE FOOD ENERGY SECONDA DOMMA: "+grand_total_2);
var grand_total_ante = (grand_total_2/Number(initial_value_lf_int));
console.log("GRAND TOTAL ANTE FOOD ENERGY: "+grand_total_ante);
var grand_total_round = (grand_total_ante)*100;
var number= (grand_total_round);
console.log("GRAND TOTAL ROUND 2: "+number);

var neg_to_pos = Math.abs(number);
var grand_total = Math.round(neg_to_pos); //0
console.log("GRAND TOTAL ROUND 2-2 : "+grand_total);

document.getElementById("percent2").innerHTML =  grand_total+ "% above initial value";
	
//----------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////////
// ===================== AGGIORNAMENTO DATI DA UTILIZZARE IN RELATIONSEU.JS ======================================================================
var checkregion = document.querySelector('input[name="region"]:checked');
var region = checkregion.getAttribute("id");
regionDataOutput = localStorage.getItem(region+'DataOutput');
regionDataOutput = JSON.parse(regionDataOutput);

regionDataOutput["LF_Food_Internal"] = LF_Food_Internal;
regionDataOutput["LF_Food_External"] = LF_Food_External;
regionDataOutput["LF_Energy_Internal"] = LF_Energy_Internal;
regionDataOutput["LF_Energy_External"] = LF_Energy_External;

if(region == "regionA") {
	localStorage.setItem("regionADataOutput", JSON.stringify(regionDataOutput));
}
else if(region == "regionB") {
	localStorage.setItem("regionBDataOutput", JSON.stringify(regionDataOutput));
}
else if(region == "regionC") {
	localStorage.setItem("regionCDataOutput", JSON.stringify(regionDataOutput));
}
else {
	localStorage.setItem("regionDDataOutput", JSON.stringify(regionDataOutput));
}
// ===============================================================================================================================================

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
      text: 'Green Water Footprint (l/cap/day)'
    },
   
  };
  // Chart Data
  var barchartData3 = {
    
		    labels: ["Internal", "External"],
		    datasets: [{
		      type: 'bar',
		      label: '"Food"',
		      data: [4266, 2],
		      backgroundColor: giallo
		      
		    }, {
		      type: 'bar',
		      label: '"Energy"',
		      backgroundColor: verde,
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

	console.log("================================== WF GREEN =====================================================");
	
	var checkregiong = document.querySelector('input[name="region"]:checked'); 
		if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionA')) { 
			
		 initial_value_cf_int = 24.4212022139062;  initial_value_lf_int = 13.2551883468376;
		 initial_value_wfg_int = 5191.68997367378;  initial_value_wfb_int = 773.876129386631;
		 
		 initial_value_CF_food = 0.003238332; 
		 initial_value_LF_food = 0.003459326; 
		 initial_value_wfg_food = 1.19415722;
		 initial_value_wfb_food = 0.16009438; 
		 initial_value_CF_en = 0.062843721771217 ; 
		 initial_value_LF_en = 0.00774419419094049 ; 
		 initial_value_wfg_en= 5.52412077113194; 
		 initial_value_wfb_en = 1.10088961437177 ;
		 
		 YG_closing_WFb = 0;  Mulching_WFb = 0;
		 YG_closing_CF = 0;  Mulching_CF = 0; Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
		 Deficit_Mul_Drip_CF = 0;
		 YG_closing_LF = 0.17;  Mulching_LF = 0.25;
		 YG_closing_WFg = 0.17; Mulching_WFg = 0.25;
		 Deficit_Irrigation_LF = -0.10;  Deficit_Mul_LF = -0.10;
		 Deficit_Irrigation_WFg = -0.08;
		 Deficit_Mul_WFg = 0.02;  Deficit_Irrigation_WFb = 0.15;  Deficit_Mul_WFb = 0.30;
		 Deficit_Mul_Drip_LF = -0.02;  Deficit_Mul_Drip_WFg = 0.05; 
		 Deficit_Mul_Drip_WFb = 0.35;
		 
		 Rainfed = 0.84;
		 Irrigated = 1-Rainfed;


		}
		else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionB')) { 
			initial_value_cf_int = 20.2748418808954;  
		     initial_value_lf_int = 17.5727719925233;
			 initial_value_wfg_int = 4714.93177211245;  
			 initial_value_wfb_int = 816.233412273386;
			 
			 initial_value_CF_food = 0.003036887; 
			 initial_value_LF_food = 0.0045496; 
			 initial_value_wfg_food = 1.4764269375;
			 initial_value_wfb_food = 0.2001784125; 
			 initial_value_CF_en = 0.0443982411716406 ; 
			 initial_value_LF_en = 0.0127996691636463 ; 
			 initial_value_wfg_en= 0.00913463005213692; 
			 initial_value_wfb_en = 0.743798594735205 ;
			 
			 YG_closing_WFb = 0;  Mulching_WFb = 0;
			 YG_closing_CF = 0;  Mulching_CF = 0;
			 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
			 Deficit_Mul_Drip_CF = 0;
			 YG_closing_LF = 0.26;  Mulching_LF = 0.25;
			 YG_closing_WFg = 0.26; Mulching_WFg = 0.25;
			 Deficit_Irrigation_LF = -0.10; 
			 Deficit_Mul_LF = -0.10;
			 Deficit_Irrigation_WFg = -0.08;
			 Deficit_Mul_WFg = 0.02; 
			 Deficit_Irrigation_WFb = 0.15; 
			 Deficit_Mul_WFb = 0.30;
			 Deficit_Mul_Drip_LF = -0.02; 
			 Deficit_Mul_Drip_WFg = 0.05; 
			 Deficit_Mul_Drip_WFb = 0.35;	
			 
			 Rainfed = 0.96;
			 Irrigated = 1-Rainfed;
		} 
		else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionC')) { 
			initial_value_cf_int =  27.9584617302096;  
		     initial_value_lf_int = 14.5325751112248;
			 initial_value_wfg_int = 2859.81844233148;  
			 initial_value_wfb_int = 406.478627692298;
			 
			 initial_value_CF_food = 0.003557996; 
			 initial_value_LF_food = 0.003791004; 
			 initial_value_wfg_food = 0.815905;
			 initial_value_wfb_food = 0.0983842; 
			 initial_value_CF_en = 0.0666778336593583 ; 
			 initial_value_LF_en = 0.00537553692507286 ; 
			 initial_value_wfg_en= 0.00381923696961862; 
			 initial_value_wfb_en = 0.265744673663643 ;
			 
			 YG_closing_WFb = 0;  Mulching_WFb = 0;
			 YG_closing_CF = 0;  Mulching_CF = 0;
			 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
			 Deficit_Mul_Drip_CF = 0;
			 YG_closing_LF = 0.33;  Mulching_LF = 0.25;
			 YG_closing_WFg = 0.33; Mulching_WFg = 0.25;
			 Deficit_Irrigation_LF = -0.10; 
			 Deficit_Mul_LF = -0.10;
			 Deficit_Irrigation_WFg = -0.08;
			 Deficit_Mul_WFg = 0.02; 
			 Deficit_Irrigation_WFb = 0.15; 
			 Deficit_Mul_WFb = 0.30;
			 Deficit_Mul_Drip_LF = -0.02; 
			 Deficit_Mul_Drip_WFg = 0.05; 
			 Deficit_Mul_Drip_WFb = 0.35;	
			
			 Rainfed = 0.89;
			 Irrigated = 1-Rainfed;
		}
		else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionD')) { 
			initial_value_cf_int =  25.1318778442795;  
		     initial_value_lf_int = 15.7995747782528;
			 initial_value_wfg_int = 3357.73329112609;  
			 initial_value_wfb_int = 485.707639283664;
			 
			 initial_value_CF_food = 0.0039148; 
			 initial_value_LF_food = 0.004344; 
			 initial_value_wfg_food = 0.968055;
			 initial_value_wfb_food = 0.119295; 
			 initial_value_CF_en = 0.0605563780410342 ; 
			 initial_value_LF_en = 0.00384961657261653 ; 
			 initial_value_wfg_en= 0.00271749225250921; 
			 initial_value_wfb_en = 0.377280593175422 ;
			 
			 YG_closing_WFb = 0;  Mulching_WFb = 0;
			 YG_closing_CF = 0;  Mulching_CF = 0;
			 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
			 Deficit_Mul_Drip_CF = 0;
			 YG_closing_LF = 0.33;  Mulching_LF = 0.25;
			 YG_closing_WFg = 0.33; Mulching_WFg = 0.25;
			 Deficit_Irrigation_LF = -0.10; 
			 Deficit_Mul_LF = -0.10;
			 Deficit_Irrigation_WFg = -0.08;
			 Deficit_Mul_WFg = 0.02; 
			 Deficit_Irrigation_WFb = 0.15; 
			 Deficit_Mul_WFb = 0.30;
			 Deficit_Mul_Drip_LF = -0.02; 
			 Deficit_Mul_Drip_WFg = 0.05; 
			 Deficit_Mul_Drip_WFb = 0.35;	
			 
			 Rainfed = 0.89;
			 Irrigated = 1-Rainfed;
		}
		else {}
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
var totalone = vegparse+vegeparse+meatparse;
//------------------------------------------------------------------------------------
var windp = parseFloat(document.getElementById("em_J21").value)/100;
var solarp = parseFloat(document.getElementById("em_J22").value)/100;
var hydrop = parseFloat(document.getElementById("em_J23").value)/100;
var biofuelp = parseFloat(document.getElementById("em_J24").value)/100;
var nuclearp = parseFloat(document.getElementById("em_J25").value)/100;
var fuelp = parseFloat(document.getElementById("em_J26").value)/100;
//----------------------------------------------------------------------------------------------------------------
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
//calcolo i valori per PLANT BASED:
var checkregion = document.querySelector('input[name="region"]:checked'); 
	var checkregion = document.querySelector('input[name="region"]:checked'); 
  	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
  	//var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
  		var meat0_1 =(vegeparse/totalone);
		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
		var meat0_3 = (meat0_1)+(meat0_2);
  	var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*70);
  	//calcolo i valori per MEAT & FISH:
  	//var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;	

		
  	var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*15);
  	//calcolo i valori per DIARY & EGGS:
  	//var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
  	var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);

  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
  		var meat0_1 =(vegeparse/totalone);
  		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
  		var meat0_3 = (meat0_1)+(meat0_2);
  	
  		var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*70);
  		var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*15);
  		var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);
  		
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
  		var meat0_1 =(vegeparse/totalone);
  		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
  		var meat0_3 = (meat0_1)+(meat0_2);
  		
  		var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*65);
  		var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*20);
  		var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);
  		

  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
  		var meat0_1 =(vegeparse/totalone);
  		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
  		var meat0_3 = (meat0_1)+(meat0_2);
  		
  		var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*65);
  		var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*20);
  		var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);
  		

  	} else {}
//----------------------------------------------------------------------------------------------------------------
//calcolo WASTE:
var waste_val = (wasteparse*intakeparse)/100;
//CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
//OTTENGO LA PERCENTUALE BASE (% * calorie+waste)
var cal_waste = waste_val+intakeparse;
//----------------------------------------------------------------------------------------------------------------
var YeldWFg = Gap_Yeld_parse*YG_closing_WFg;
var Mulch = Mulching_parse*Mulching_WFg;
var measure = document.getElementById("Measure").value;	
var Deficit;
var checkregionyg = document.querySelector('input[name="region"]:checked'); 
if (measure=='1') {
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Irrigation_WFg;	
	Deficit = Irrigated* deficit_irrigation_wfg;
	}
	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
		var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Irrigation_WFg;
			Deficit = Irrigated* deficit_irrigation_wfg;
		} 	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
		
		var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Irrigation_WFg;	
			Deficit = Irrigated* deficit_irrigation_wfg;
		} 	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
		var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Irrigation_WFg;
			Deficit = Irrigated* deficit_irrigation_wfg;
		}
	}//VALUE 1 FINE
//VALUE 2 INIZIO
	
else if(measure=='2') {
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
		var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Mul_WFg;
		Deficit = Irrigated* deficit_irrigation_wfg;
		}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
		var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Mul_WFg;	
		Deficit = Irrigated* deficit_irrigation_wfg;
	}

	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
		var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Mul_WFg;	
		Deficit = Irrigated* deficit_irrigation_wfg;
	}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
		var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Mul_WFg;	
		Deficit = Irrigated* deficit_irrigation_wfg;
		}else{}
	}
//VALUE 2 FINE
//VALUE 3 INIZIO
else if(measure=='3') {
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
	var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Mul_Drip_WFg;
	Deficit = Irrigated* deficit_irrigation_wfg;
	}	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
		var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Mul_Drip_WFg;
		Deficit = Irrigated* deficit_irrigation_wfg;
		} 
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
		var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Mul_Drip_WFg;
		Deficit = Irrigated* deficit_irrigation_wfg;
		} 
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
		var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Mul_Drip_WFg;
		Deficit = Irrigated* deficit_irrigation_wfg;
		} else{}
	
	} //VALUE 3 FINE
else {
	}
//----------------------------------------------------------------------------------------------------------------
var meatbased = (meat1*cal_waste)/100;
var diarybased = (diary1*cal_waste)/100;
var plantbased = (plant1*cal_waste)/100;
//----------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF INTERNAL:
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
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
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
	//------------------------------------------------------------------------------------------------------------------
	var plantbasedA = plantbased*(1-Number(fip));
	var plantbasedB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
	var plantbasedC = Number(RB_WFgreen_Plant)*(1-Number(plantbasedB));	
	var plant_WFgreen = Number(plantbasedA)*Number(plantbasedC);

	//------------------------------------------------------------------------------------------------------------------
	//MEAT:	
	var meatbasedA = meatbased*(1-Number(fim));
	var meatbasedB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
	var meatbasedC = Number(RB_WFgreen_Meat)*(1-Number(meatbasedB));
	//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
	var meat_WFgreen = Number(meatbasedA)*Number(meatbasedC);

	//---------------------------------------------------------------------------------------------------------------------
	//DIARY:
	var diaryA = (diarybased)*(1-Number(fid));
	var diaryB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
	var diaryC = Number(RB_WFgreen_Diary)*(1-Number(diaryB));
	var diary_WFgreen = (diaryA)*(diaryC);
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
	//------------------------------------------------------------------------------------------------------------------
	var plantbasedA = plantbased*(1-Number(fip));
	var plantbasedB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
	var plantbasedC = Number(RC_WFgreen_Plant)*(1-Number(plantbasedB));	
	var plant_WFgreen = Number(plantbasedA)*Number(plantbasedC);
	//console.log("PLANT BASED C "+plantbased);
	//console.log("PLANT INTERNAL C "+plant_WFgreen);
	//console.log("YELD INTERNAL C "+YeldWFg);
	//console.log("MNULCH INTERNAL C "+Mulch);



	//------------------------------------------------------------------------------------------------------------------
	//MEAT:	
	var meatbasedA = meatbased*(1-Number(fim));
	var meatbasedB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
	var meatbasedC = Number(RC_WFgreen_Meat)*(1-Number(meatbasedB));
	//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
	var meat_WFgreen = Number(meatbasedA)*Number(meatbasedC)/100;
	//console.log("MEAT BASED C "+meatbased);
	//console.log("meat INTERNAL C"+meat_WFgreen);
	//console.log("YELD INTERNAL C"+YeldWFg);
	//console.log("MNULCH INTERNAL C"+Mulch);

	//---------------------------------------------------------------------------------------------------------------------
	//DIARY:
	var diaryA = (diarybased)*(1-Number(fid));
	var diaryB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
	var diaryC = Number(RC_WFgreen_Diary)*(1-Number(diaryB));
	var diary_WFgreen = (diaryA)*(diaryC);
	//console.log("DIARY BASED C "+diarybased);
	//console.log("DIARY INTERNAL C"+diary_WFgreen);
	//console.log("YELD INTERNAL C"+YeldWFg);
	//console.log("MNULCH INTERNAL C"+Mulch);
} 
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
	//------------------------------------------------------------------------------------------------------------------
	var plantbasedA = plantbased*(1-Number(fip));
	var plantbasedB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
	var plantbasedC = Number(RD_WFgreen_Plant)*(1-Number(plantbasedB));	
	var plant_WFgreen = Number(plantbasedA)*Number(plantbasedC);

	//------------------------------------------------------------------------------------------------------------------
	//MEAT:	
	var meatbasedA = meatbased*(1-Number(fim));
	var meatbasedB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
	var meatbasedC = Number(RD_WFgreen_Meat)*(1-Number(meatbasedB));
	//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
	var meat_WFgreen = Number(meatbasedA)*Number(meatbasedC);

	//---------------------------------------------------------------------------------------------------------------------
	//DIARY:
	var diaryA = (diarybased)*(1-Number(fid));
	var diaryB = ((YeldWFg+Mulch)*Rainfed)+Deficit;
	var diaryC = Number(RD_WFgreen_Diary)*(1-Number(diaryB));
	var diary_WFgreen = (diaryA)*(diaryC);
} else{}

console.log("plantbasedA: "+plantbasedA+" plantbasedB: "+plantbasedB+" plantbasedC: "+plantbasedC+" plant_WFgreen: "+plant_WFgreen);
console.log("meatbasedA: "+meatbasedA+" meatbasedB: "+meatbasedB+" meatbasedC: "+meatbasedC+" meat_WFgreen: "+meat_WFgreen);
console.log("diaryA: "+diaryA+" diaryB: "+diaryB+" diaryC: "+diaryC+" diary_WFgreen: "+diary_WFgreen);

//---------------------------------------------------------------------------------------------------------------------
var add1 = Number(plant_WFgreen)+Number(meat_WFgreen);
var dataWFgreen_food_int = (add1)+Number(diary_WFgreen);

var WFgreen_Food_Internal=dataWFgreen_food_int;
//console.log("FOOD INTERNAL C PARTE 1"+add1);
console.log("WFgreen_Food_Internal"+dataWFgreen_food_int);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD WFGREEN EXTERNAL:
var plantres_WFgreen_e = (plantbased)*Number(fip);

var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
//BOTTONE A PLANT
if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='planta')) {
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
	var plantres_WFgreen_ext = Number(plantres_WFgreen_e)*Number(RA_WFgreen_Plant);
		plantres_WFgreen_ext = Number(plantres_WFgreen_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var plantres_WFgreen_ext = Number(plantres_WFgreen_e)*Number(RA_WFgreen_Plant);
		plantres_WFgreen_ext = Number(plantres_WFgreen_ext);

	}
	else { 
		var plantres_WFgreen_ext = Number(plantres_WFgreen_e)*Number(RA_WFgreen_Plant);
		plantres_WFgreen_ext = Number(plantres_WFgreen_ext);

	}
}

//BOTTONE PLANT B
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		
		var plantres_WFgreen_ext = Number(plantres_WFgreen_e)*(RB_WFgreen_Plant);
		plantres_WFgreen_ext = Number(plantres_WFgreen_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var plantres_WFgreen_ext = Number(plantres_WFgreen_e)*(RB_WFgreen_Plant);
		plantres_WFgreen_ext = Number(plantres_WFgreen_ext);

	}
	else { 
		var plantres_WFgreen_ext = Number(plantres_WFgreen_e)*(RB_WFgreen_Plant);
		plantres_WFgreen_ext = Number(plantres_WFgreen_ext);

	} 
}

//BOTTONE PLANT C
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var plantres_WFgreen_ext = Number(plantres_WFgreen_e)*(RC_WFgreen_Plant);
		plantres_WFgreen_ext = Number(plantres_WFgreen_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var plantres_WFgreen_ext = Number(plantres_WFgreen_e)*(RC_WFgreen_Plant);
		plantres_WFgreen_ext = Number(plantres_WFgreen_ext);

	}
	else { 
		var plantres_WFgreen_ext = Number(plantres_WFgreen_e)*(RC_WFgreen_Plant);
		plantres_WFgreen_ext = Number(plantres_WFgreen_ext);

	} 
} 

//BOTTONE PLANT D
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var plantres_WFgreen_ext = Number(plantres_WFgreen_e)*(RD_WFgreen_Plant);
		plantres_WFgreen_ext = Number(plantres_WFgreen_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var plantres_WFgreen_ext = Number(plantres_WFgreen_e)*(RD_WFgreen_Plant);
		plantres_WFgreen_ext = Number(plantres_WFgreen_ext);

	}
	else  { 
		var plantres_WFgreen_ext = Number(plantres_WFgreen_e)*(RD_WFgreen_Plant);
		plantres_WFgreen_ext = Number(plantres_WFgreen_ext);

	}	
}
	
	//BOTTONE PLANT WORLD
else {
	var plantres_WFgreen_ext = plantres_WFgreen_e*Number(WORLD_plant_WFgreen_FoodV11);
	plantres_WFgreen_ext = Number(plantres_WFgreen_ext);

}
console.log("plantres_WFgreen_ext: "+plantres_WFgreen_ext);
console.log("REGION B CLICK B PLANT USCITA VAR B: "+plantres_WFgreen_ext);

console.log("REGION B CLICK B PLANT USCITA VAR C: "+plantres_WFgreen_ext);

//MEAT EXTERNAL
var meatres_WFgreen_e = Number(meatbased)*Number(fim);

//BOTTONE MEAT A
var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meata')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(RA_WFgreen_Meat);	
		meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(RA_WFgreen_Meat);	
		meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
	}
	else { 
		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(RA_WFgreen_Meat);	
		meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
	} 
}
//MEAT BOTTONE B
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(RB_WFgreen_Meat);	
		meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(RB_WFgreen_Meat);	
		meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
	}
	else { 
		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(RB_WFgreen_Meat);	
		meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
	}
}
//MEAT BOTTONE C
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(RC_WFgreen_Meat);	
	meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(RC_WFgreen_Meat);	
		meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
	}
	else { 
		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(RC_WFgreen_Meat);	
		meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
	}
}
//BOTTONE MEAT D
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(RD_WFgreen_Meat);	
	meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(RD_WFgreen_Meat);	
		meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
	}
	else { 
		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(RD_WFgreen_Meat);	
		meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
	}
}
else {
	var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(WORLD_meat_WFgreen_FoodV12);
	meatres_WFgreen_ext = Number(meatres_WFgreen_ext);
}

console.log("meatres_WFgreen_ext: "+meatres_WFgreen_ext);

//DIARY EXTERNAL
var diaryres_WFgreen_e = Number(diarybased)*Number(fid);

var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diarya')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(RA_WFgreen_Diary);	
		diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(RA_WFgreen_Diary);	
		diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);

	}
	else { 
		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(RA_WFgreen_Diary);	
		diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);

	}
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(RB_WFgreen_Diary);	
		diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(RB_WFgreen_Diary);	
		diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);

	}
	else { 
		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(RB_WFgreen_Diary);	
		diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);

	}
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(RC_WFgreen_Diary);	
		diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(RC_WFgreen_Diary);	
		diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);

	}
	else { 
		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(RC_WFgreen_Diary);	
		diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);

	}
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(RD_WFgreen_Diary);	
		diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(RD_WFgreen_Diary);	
		diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);

	}
	else { 
		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(RD_WFgreen_Diary);	
		diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);

	}
}
else {
	var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*Number(WORLD_diary_WFgreen_FoodV13);
	diaryres_WFgreen_ext = Number(diaryres_WFgreen_ext);

}

console.log("diaryres_WFgreen_ext: "+diaryres_WFgreen_ext);
	  
var dataWFgreen_food_ext = Number(plantres_WFgreen_ext)+Number(meatres_WFgreen_ext)
dataWFgreen_food_ext = dataWFgreen_food_ext+Number(diaryres_WFgreen_ext);
var WFgreen_Food_External=dataWFgreen_food_ext; 
console.log("WFgreen_Food_External = Food.L21 : "+dataWFgreen_food_ext);
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
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
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
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var fossil_ind = 25.0209;
		var bio_ind = 26.5849;
		var el_ind = 31.6153;
			  	  
		var fossil_tr = 63.5554;
		var bio_tr = 7.25276;
		var el_tr = 1.29415;
			  	  
		var fossil_s = 8.8585;
		var bio_s = 1.76044;
		var el_s = 18.1069;
			  	  
		var fossil_house = 12.8533;
		var bio_house = 17.6458;
		var el_house = 24.6744;
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var fossil_ind = 30.8979;
		var bio_ind = 2.60221;
		var el_ind = 21.1867;
			  	  
		var fossil_tr = 70.3915;
		var bio_tr = 2.707273;
		var el_tr = 1.33063;
			  	  
		var fossil_s = 21.0933;
		var bio_s = 3.41282;
		var el_s = 16.0308;
			  	  
		var fossil_house = 43.0607;
		var bio_house = 8.01203;
		var el_house = 14.1642;
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
		var fossil_ind = 24.0465;
		var bio_ind = 3.36426;
		var el_ind = 16.1288;
			  	  
		var fossil_tr = 66.283;
		var bio_tr = 3.50512;
		var el_tr = 1.09532;
			  	  
		var fossil_s = 12.6046;
		var bio_s = 1.06047;
		var el_s = 15.6423;
			  	  
		var fossil_house = 23.5779;
		var bio_house = 10.2351;
		var el_house = 15.7147;
	}
	else {}
//----------------------------------------------------------------------------------------------------
var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
var somma_valori_s = (fossil_s+bio_s+el_s);
var somma_valori_house = (fossil_house+bio_house+el_house);

console.log("somma_valori_tr: "+somma_valori_tr+" somma_valori_ind: "+somma_valori_ind+" somma_valori_s: "+somma_valori_s+" somma_valori_house: "+somma_valori_house);
//----------------------------------------------------------------------------------------------------
var A6a = (1-red_ind_parse)*(somma_valori_ind); 
var A6aa = (1-red_ind_parse)*el_ind;
var A6b = (A6a) - (A6aa);
		  	

var B6a2 = (1-red_tr_parse);
var B6a3 = 1-(el_tr_parse*(1-(0.7/2.3)));
var B6a = (B6a2)*(B6a3)*(somma_valori_tr);
//var B6a = (1-red_tr_parse)*(1-(el_tr_parse*(1-0.7/2.3)))*(somma_valori_tr);
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

console.log("f_i: "+f_i+" f_t: "+f_t+" f_s: "+f_s+" f_h: "+f_h);
	  	  
var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);
console.log("total_fossil_user: "+total_fossil_user);

var energy_fossil_val = (total_fossil_user)*(1-fossilf_parse);
console.log("FOSSIL LOCAL PRODUCTION: "+energy_fossil_val);
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
var fossil_final_WFgreen = (energy_fossil_val)*(Number(RA_WFgreen_Fossil)*0.25)/1000;

}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
var fossil_final_WFgreen = (energy_fossil_val)*(Number(RB_WFgreen_Fossil)*0.25)/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
	var fossil_final_WFgreen = (energy_fossil_val)*(Number(RC_D_WFgreen_Fossil)*0.25)/1000;
	}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
	var fossil_final_WFgreen = (energy_fossil_val)*(Number(RC_D_WFgreen_Fossil)*0.25)/1000;
	} else {}
console.log("FOSSIL WFgreen INT = EnergyG34 (ok)= "+fossil_final_WFgreen);

//-----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di BIOFUEL USER:	  
var bio_i_primaop = (A6a)-(A6b);
bio_i_primaop = parseFloat(bio_i_primaop).toFixed(1);
bio_i_primaop = Number(bio_i_primaop);
console.log("BIOFUEL PRIMA DI ITSH: "+bio_i_primaop);
/*var b_i = (bio_fr_parse)*(A6b);
var b_t = (bio_fr_parse)*(B6a-B6b);
var b_s = (bio_fr_parse)*(C6a-C6b);
var b_h = (bio_fr_parse)*(D6a);*/
var b_i = (bio_fr_parse)*(A6b);
b_i = parseFloat(b_i).toFixed(1);
b_i = Number(b_i);
var b_t = (bio_fr_parse)*(B6a-B6b);
b_t = parseFloat(b_t).toFixed(2);
b_t = Number(b_t);
var b_s = (bio_fr_parse)*(C6a-C6b);
b_s = parseFloat(b_s).toFixed(1);
b_s = Number(b_s);
var b_h = (bio_fr_parse)*(D6a);
b_h = parseFloat(b_h).toFixed(1);
b_h = Number(Math.round(b_h));

console.log("b_i: "+b_i+" b_t: "+b_t+" b_s: "+b_s+" b_h: "+b_h);

var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));

console.log("total_bio_user: "+total_bio_user);
var energy_bio_val = (total_bio_user)*((1-(biofuels_parse)));
console.log("BIOFUEL LOCAL PRODUCTION: "+energy_bio_val);

if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
var bio_final_WFgreen = (energy_bio_val)*(Number(RA_WFgreen_Biofuel*0.27))/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
var bio_final_WFgreen = (energy_bio_val)*(Number(RB_WFgreen_Biofuel*0.27))/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
	var bio_final_WFgreen = (energy_bio_val)*(Number(RC_D_WFgreen_Biofuel*0.27))/1000;
	}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
	var bio_final_WFgreen = (energy_bio_val)*(Number(RC_D_WFgreen_Biofuel*0.27))/1000;
	}
else {}
bio_final_WFgreen = Math.round(bio_final_WFgreen);
console.log("BIO WFgreen INT = EnergyG35 (ok) =  "+bio_final_WFgreen);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(B6a);
var e_s = (1-red_ind_parse)*Number(el_s);
e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
console.log("e_i: "+e_i+" e_t: "+e_t+" e_s: "+e_s+" e_h: "+e_h);
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
console.log("total_el_user: "+total_el_user);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));
console.log("ELECTRICITY LOCAL PRODUCTION: "+energy_elec_val);

if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {

var elec1= Number(windp)*Number(RA_WFgreen_Wind);
var elec2 =Number(solarp)*Number(RA_WFgreen_Solar);
var elec3 =Number(hydrop)*Number(RA_WFgreen_Hydro);
var elec4 =Number(biofuelp)*Number(RA_WFgreen_Biofuel);
var elec5 =Number(nuclearp)*Number(RA_WFgreen_Nuclear);
var elec6 =Number(fuelp)*Number(RA_WFgreen_Fossil); 
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {

	var elec1= Number(windp)*Number(RB_WFgreen_Wind);
	var elec2 =Number(solarp)*Number(RB_WFgreen_Solar);
	var elec3 =Number(hydrop)*Number(RB_WFgreen_Hydro);
	var elec4 =Number(biofuelp)*Number(RB_WFgreen_Biofuel);
	var elec5 =Number(nuclearp)*Number(RB_WFgreen_Nuclear);
	var elec6 =Number(fuelp)*Number(RB_WFgreen_Fossil); 
	}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {

	var elec1= Number(windp)*Number(RC_D_WFgreen_Wind);
	var elec2 =Number(solarp)*Number(RC_D_WFgreen_Solar);
	var elec3 =Number(hydrop)*Number(RC_D_WFgreen_Hydro);
	var elec4 =Number(biofuelp)*Number(RC_D_WFgreen_Biofuel);
	var elec5 =Number(nuclearp)*Number(RC_D_WFgreen_Nuclear);
	var elec6 =Number(fuelp)*Number(RC_D_WFgreen_Fossil); 
	}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
	var elec1= Number(windp)*Number(RC_D_WFgreen_Wind);
	var elec2 =Number(solarp)*Number(RC_D_WFgreen_Solar);
	var elec3 =Number(hydrop)*Number(RC_D_WFgreen_Hydro);
	var elec4 =Number(biofuelp)*Number(RC_D_WFgreen_Biofuel);
	var elec5 =Number(nuclearp)*Number(RC_D_WFgreen_Nuclear);
	var elec6 =Number(fuelp)*Number(RC_D_WFgreen_Fossil); 
	}
else{}

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);
console.log("ELECTRICITY SUM ELEC1ADD: "+elec1add);
console.log("ELECTRICITY SUM ELEC2ADD: "+elec2add);
console.log("ELECTRICITY SUM ELEC3ADD: "+elec3add);

var electricity_sum = (elec1add)+(elec2add)+(elec3add);
//console.log("ELECTRICITY SUM"+electricity_sum);
var elec_final_WFgreen = (energy_elec_val)*(electricity_sum)/1000;
console.log("elec_final_WFgreen INT: "+elec_final_WFgreen);
//-----------------------------------------------------------------------------------------------
var datoWFgreen_en_internal = elec_final_WFgreen+bio_final_WFgreen+fossil_final_WFgreen;
var WFgreen_Energy_Internal=datoWFgreen_en_internal; 
console.log("WFgreen_Energy_Internal = EnergyG35 (ok) =  "+datoWFgreen_en_internal);
//-----------------------------------------------------------------------------------------------
//CALCOLO VALORI EXTERNAL ENERGY

	var energy_elec_val_ext = (total_el_user)*(elec_parse);
//CALCOLO VALORI EXTERNAL ENERGY:
	
	//INIZIO FOSSIL WFGREEN EXTERNAL
var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossila')) { 
	var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(Number(RA_WFgreen_Fossil)*0.25)/1000;
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilb')&&(checkregion.getAttribute('id')=='regionA')) {
	var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(Number(RA_WFgreen_Fossil)*0.25)/1000;

}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilb')&&(checkregion.getAttribute('id')=='regionC')||(checkregion.getAttribute('id')=='regionD')) {
var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(Number(RB_WFgreen_Fossil)*0.25)/1000;
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilc')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')) {
	var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(Number(RB_WFgreen_Fossil)*0.25)/1000;
}
else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilc')&&(checkregion.getAttribute('id')=='regionD')) {	
	var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_WFgreen_Fossil)*0.25)/1000;

}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossild')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')||(checkregion.getAttribute('id')=='regionC')) {
	var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_WFgreen_Fossil)*0.25)/1000;
}
else {
	var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_WFgreen_Fossil)*0.25)/1000;
}
console.log("fossil_final_WFgreen_ext: "+fossil_final_WFgreen_ext);
//FINE FOSSIL WFBLUE EXTERNAL

//BIOFUEL EXTERNAL WFBLUE
var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuela')) {
	var bio_final_WFgreen_ext = total_bio_user*(biofuels_parse)*(Number(RA_WFgreen_Biofuel)*0.27)/1000;
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelb')&&(checkregion.getAttribute('id')=='regionA')) {
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RA_WFgreen_Biofuel)*0.27)/1000;
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelb')&&(checkregion.getAttribute('id')=='regionC')||(checkregion.getAttribute('id')=='regionD')) {
	var bio_final_WFgreen_ext = total_bio_user*(biofuels_parse)*(Number(RB_WFgreen_Biofuel)*0.27)/1000;
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelb')&&(checkregion.getAttribute('id')=='regionA')) {
	var bio_final_WFgreen_ext = total_bio_user*(biofuels_parse)*(Number(RA_WFgreen_Biofuel)*0.27)/1000;

}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelc')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')) {
	var bio_final_WFgreen_ext = total_bio_user*(biofuels_parse)*(Number(RB_WFgreen_Biofuel)*0.27)/1000;
}

else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelc')&&(checkregion.getAttribute('id')=='regionD')) {	
	var bio_final_WFgreen_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_WFgreen_Biofuel)*0.27)/1000;
	
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofueld')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')||(checkregion.getAttribute('id')=='regionC')) {
	var bio_final_WFgreen_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_WFgreen_Biofuel)*0.27)/1000;
}
else {
	var bio_final_WFgreen_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_WFgreen_Biofuel)*0.27)/1000;
}
console.log("bio_final_WFgreen_ext: "+bio_final_WFgreen_ext);
//FINE WFBLUE BIOFUEL EXTERNAL

//INIZIO ELECTRICITY WFBLUE EXTERNAL
var energy_elec_val = (total_el_user)*((elec_parse));
var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='ela')) {
	// CORRISPONDE A IMPORT CODE 1
	windp = JSON.parse(localStorage.getItem("regionADataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionADataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionADataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionADataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionADataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionADataInput"))["fuelp"];
	var elec1= (windp)*(RA_WFgreen_Wind);
	var elec2 =(solarp)*(RA_WFgreen_Solar);
	var elec3 =(hydrop)*(RA_WFgreen_Hydro);
	var elec4 =(biofuelp)*(RA_WFgreen_Biofuel);
	var elec5 =(nuclearp)*(RA_WFgreen_Nuclear);
	var elec6 =(fuelp)*(RA_WFgreen_Fossil); 	
	console.log("WIND, SOLAR ETC. "+windp+" "+solarp+" "+biofuelp+" "+nuclearp+" "+fuelp+"");
	console.log("COSTANTI RELATIVE:"+RC_D_WFgreen_Wind+" "+RC_D_WFgreen_Solar+" "+RC_D_WFgreen_Hydro+" "+RC_D_WFgreen_Biofuel+" "+RC_D_WFgreen_Nuclear+" "+RC_D_WFgreen_Fossil);

}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionA')) {
	windp = JSON.parse(localStorage.getItem("regionADataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionADataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionADataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionADataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionADataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionADataInput"))["fuelp"];
	var elec1= (windp)*(RA_WFgreen_Wind);
	var elec2 =(solarp)*(RA_WFgreen_Solar);
	var elec3 =(hydrop)*(RA_WFgreen_Hydro);
	var elec4 =(biofuelp)*(RA_WFgreen_Biofuel);
	var elec5 =(nuclearp)*(RA_WFgreen_Nuclear);
	var elec6 =(fuelp)*(RA_WFgreen_Fossil); 
	console.log("WIND, SOLAR ETC. "+windp+" "+solarp+" "+biofuelp+" "+nuclearp+" "+fuelp+"");
	console.log("COSTANTI RELATIVE:"+RC_D_WFgreen_Wind+" "+RC_D_WFgreen_Solar+" "+RC_D_WFgreen_Hydro+" "+RC_D_WFgreen_Biofuel+" "+RC_D_WFgreen_Nuclear+" "+RC_D_WFgreen_Fossil);

}
	
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionC')||(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionD')) {

	windp = JSON.parse(localStorage.getItem("regionBDataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionBDataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionBDataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionBDataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["fuelp"];
		var elec1= Number(windp)*Number(RB_WFgreen_Wind);
		var elec2 =Number(solarp)*Number(RB_WFgreen_Solar);
		var elec3 =Number(hydrop)*Number(RB_WFgreen_Hydro);
		var elec4 =Number(biofuelp)*Number(RB_WFgreen_Biofuel);
		var elec5 =Number(nuclearp)*Number(RB_WFgreen_Nuclear);
		var elec6 =Number(fuelp)*Number(RB_WFgreen_Fossil);
		console.log("WIND, SOLAR ETC. "+windp+" "+solarp+" "+biofuelp+" "+nuclearp+" "+fuelp+"");
		console.log("COSTANTI RELATIVE:"+RC_D_WFgreen_Wind+" "+RC_D_WFgreen_Solar+" "+RC_D_WFgreen_Hydro+" "+RC_D_WFgreen_Biofuel+" "+RC_D_WFgreen_Nuclear+" "+RC_D_WFgreen_Fossil);

}   
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionA')||(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionB')) {
	
	
	windp = JSON.parse(localStorage.getItem("regionBDataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionBDataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionBDataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionBDataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["fuelp"];
	var elec1= (windp)*(RB_WFgreen_Wind);
	var elec2 =(solarp)*(RB_WFgreen_Solar);
	var elec3 =(hydrop)*(RB_WFgreen_Hydro);
	var elec4 =(biofuelp)*(RB_WFgreen_Biofuel);
	var elec5 =(nuclearp)*(RB_WFgreen_Nuclear);
	var elec6 =(fuelp)*(RB_WFgreen_Fossil); 
	console.log("WIND, SOLAR ETC. "+windp+" "+solarp+" "+biofuelp+" "+nuclearp+" "+fuelp+"");
	console.log("COSTANTI RELATIVE:"+RC_D_WFgreen_Wind+" "+RC_D_WFgreen_Solar+" "+RC_D_WFgreen_Hydro+" "+RC_D_WFgreen_Biofuel+" "+RC_D_WFgreen_Nuclear+" "+RC_D_WFgreen_Fossil);

}
	
else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionD')) {	
	windp = JSON.parse(localStorage.getItem("regionDDataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionDDataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionDDataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionDDataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["fuelp"];
		var elec1= Number(windp)*Number(RC_D_WFgreen_Wind);
		var elec2 =Number(solarp)*Number(RC_D_WFgreen_Solar);
		var elec3 =Number(hydrop)*Number(RC_D_WFgreen_Hydro);
		var elec4 =Number(biofuelp)*Number(RC_D_WFgreen_Biofuel);
		var elec5 =Number(nuclearp)*Number(RC_D_WFgreen_Nuclear);
		var elec6 =Number(fuelp)*Number(RC_D_WFgreen_Fossil);
		console.log("WIND, SOLAR ETC. "+windp+" "+solarp+" "+biofuelp+" "+nuclearp+" "+fuelp+"");
		console.log("COSTANTI RELATIVE:"+RC_D_WFgreen_Wind+" "+RC_D_WFgreen_Solar+" "+RC_D_WFgreen_Hydro+" "+RC_D_WFgreen_Biofuel+" "+RC_D_WFgreen_Nuclear+" "+RC_D_WFgreen_Fossil);

}  
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')&&(checkregion.getAttribute('id')=='regionA')||(checkRadioElec.getAttribute('id')=='eld')&&(checkregion.getAttribute('id')=='regionB')||(checkRadioElec.getAttribute('id')=='eld')&&(checkregion.getAttribute('id')=='regionC')) {
	
	windp = JSON.parse(localStorage.getItem("regionCDataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionCDataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionCDataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionCDataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionCDataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionCDataInput"))["fuelp"];
		var elec1= Number(windp)*Number(RC_D_WFgreen_Wind);
		var elec2 =Number(solarp)*Number(RC_D_WFgreen_Solar);
		var elec3 =Number(hydrop)*Number(RC_D_WFgreen_Hydro);
		var elec4 =Number(biofuelp)*Number(RC_D_WFgreen_Biofuel);
		var elec5 =Number(nuclearp)*Number(RC_D_WFgreen_Nuclear);
		var elec6 =Number(fuelp)*Number(RC_D_WFgreen_Fossil);
		console.log("WIND, SOLAR ETC. "+windp+" "+solarp+" "+biofuelp+" "+nuclearp+" "+fuelp+"");
		console.log("COSTANTI RELATIVE:"+RC_D_WFgreen_Wind+" "+RC_D_WFgreen_Solar+" "+RC_D_WFgreen_Hydro+" "+RC_D_WFgreen_Biofuel+" "+RC_D_WFgreen_Nuclear+" "+RC_D_WFgreen_Fossil);

}
	

else {

	windp = JSON.parse(localStorage.getItem("regionDDataInput"))["windp"];
solarp = JSON.parse(localStorage.getItem("regionDDataInput"))["solarp"];
hydrop =  JSON.parse(localStorage.getItem("regionDDataInput"))["hydrop"];
biofuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["biofuelp"];
nuclearp = JSON.parse(localStorage.getItem("regionDDataInput"))["nuclearp"];
fuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["fuelp"];
	var elec1= Number(windp)*Number(RC_D_WFgreen_Wind);
	var elec2 =Number(solarp)*Number(RC_D_WFgreen_Solar);
	var elec3 =Number(hydrop)*Number(RC_D_WFgreen_Hydro);
	var elec4 =Number(biofuelp)*Number(RC_D_WFgreen_Biofuel);
	var elec5 =Number(nuclearp)*Number(RC_D_WFgreen_Nuclear);
	var elec6 =Number(fuelp)*Number(RC_D_WFgreen_Fossil);
	
}

//FINE ELECTRICITY WFGREEN EXTERNAL

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);
console.log("ELECTRICITY SUM ELEC1ADD: "+elec1add);
console.log("ELECTRICITY SUM ELEC2ADD: "+elec2add);
console.log("ELECTRICITY SUM ELEC3ADD: "+elec3add);

console.log("WIND, SOLAR ETC. "+windp+" "+solarp+" "+biofuelp+" "+nuclearp+" "+fuelp+"");
console.log("COSTANTI RELATIVE:"+RC_D_WFgreen_Wind+" "+RC_D_WFgreen_Solar+" "+RC_D_WFgreen_Hydro+" "+RC_D_WFgreen_Biofuel+" "+RC_D_WFgreen_Nuclear+" "+RC_D_WFgreen_Fossil);

var electricity_sum_ext = (elec1add)+(elec2add)+(elec3add);
electricity_sum_ext = parseFloat(electricity_sum_ext).toFixed(1);

console.log("SOMMA DEI VALORI ELECTRICITY EXTERNAL: "+elec1+" "+elec2+" "+elec3+" "+elec4+" "+elec5+" "+elec6);

console.log("ELECTRICITY SUM: "+electricity_sum_ext);
var elec_final_WFgreen_ext = (energy_elec_val_ext)*Number(electricity_sum_ext)/1000;
elec_final_WFgreen_ext = parseFloat(elec_final_WFgreen_ext/100).toFixed(1);
elec_final_WFgreen_ext = Number(elec_final_WFgreen_ext);

console.log("elec_final_WFgreen_ext: "+elec_final_WFgreen_ext);
console.log("FINE WF GREEN --------------------------------------------");

//FINE CALCOLO VALORI EXTERNAL ENERGY
//----------------------------------------------------------------------------------------------
var datoWFgreen_en_external = Number(elec_final_WFgreen_ext)+Number(bio_final_WFgreen_ext)+Number(fossil_final_WFgreen_ext);
var WFgreen_Energy_external=datoWFgreen_en_external;
console.log("WFgreen_Energy_external: "+WFgreen_Energy_external);

//----------------------------------------------------------------------------------------------  	
var titoloWFgreen = Math.round(Number((datoWFgreen_en_external+dataWFgreen_food_ext)+(datoWFgreen_en_internal+dataWFgreen_food_int)))//+48

document.getElementById("GT3").innerHTML = parseFloat(titoloWFgreen).toFixed(1);

//console.log("----------------------------------------------------------------------------------");
//______calcolo valori per tabella dash______
var sommawfgood = (dataWFgreen_food_int+dataWFgreen_food_ext);
var sommawfgenergy = (datoWFgreen_en_internal+datoWFgreen_en_external);
var somma_energy_itsh = Number(total_fossil_user+total_bio_user+total_el_user);

var valfood03 = (sommawfgood/(intakeparse*(1+wastevirgola)));
//var valfood13 = (valfood03-initial_value_wfg_food)/initial_value_wfg_food;

var valfood13_1 = (valfood03)-(initial_value_wfg_food);
var valfood13_2 = valfood13_1/initial_value_wfg_food;
var valfood13_3 = valfood13_2*100;
var valfood13 = parseFloat(valfood13_3).toFixed(1);

console.log("COSTANTE PERCENTUALE VALFOOD 6: "+initial_value_wfg_food);
console.log("COSTANTE PERCENTUALE VALFOOD TOT: "+valfood13);
console.log("OPERAZIONE COSTANTE MENO VALFOOD: "+valfood13_1);
console.log("OPERAZIONE TOT VALFOOD: "+valfood13);

document.getElementById("valfood_3").innerHTML = parseFloat(valfood03).toFixed(4);
document.getElementById("valfood_7").innerHTML = valfood13+"%";

var valen03 = ((sommawfgenergy)/somma_energy_itsh);
//var valen13 = ((valen03-initial_value_wfg_en)/initial_value_wfg_en);

var valen13_1 = (valen03)-(initial_value_wfg_en);
console.log("VALEN 13: CALCOLO VALORE INIZIALE DI ENERGY PER % SOTTO : "+valen03);
console.log("somma energy: "+sommawfgenergy);
console.log("somma ITSH: "+somma_energy_itsh);
console.log("OPERAZIONE COSTANTE (costante): "+initial_value_wfg_en);

console.log("OPERAZIONE COSTANTE SECONDA PARTE DEL CALCOLO (diviso costante): "+valen13_1);


var valen13_2 = valen13_1/initial_value_wfg_en;
var valen13_3 = valen13_2*100;
var valen13 = parseFloat(valen13_3).toFixed(1);


console.log("COSTANTE PERCENTUALE VALENERGY COSTANTE: "+initial_value_wfg_en);
console.log("COSTANTE PERCENTUALE VALENERGY TOT: "+valen13);
console.log("COSTANTE PERCENTUALE VALENERGY DIVISIONE E % : "+valen13_3);


document.getElementById("valenergy_3").innerHTML = parseFloat(valen03).toFixed(4);
document.getElementById("valenergy_7").innerHTML = valen13+"%";


//----PERCENTUALE SOTTO AL TITOLO---
var grand_total_1 = (Number(sommawfgood)+Number(sommawfgenergy));
console.log("GRAND TOTAL ANTE FOOD ENERGY SOMMA: "+grand_total_1);
var grand_total_2 = grand_total_1-(Number(initial_value_wfg_int));
console.log("GRAND TOTAL ANTE FOOD ENERGY SECONDA DOMMA: "+grand_total_2);
var grand_total_ante = (grand_total_2/Number(initial_value_wfg_int));
console.log("GRAND TOTAL ANTE FOOD ENERGY: "+grand_total_ante);
var grand_total_round = (grand_total_ante)*100;
var number= (grand_total_round);
console.log("GRAND TOTAL ROUND 2: "+number);

var neg_to_pos = Math.abs(number);
var grand_total = Math.round(neg_to_pos); //0
console.log("GRAND TOTAL ROUND 2-2 : "+grand_total);




document.getElementById("percent3").innerHTML =  grand_total+ "% above initial value";
	  
//////////////////////////////////////////////////////////////////
// ===================== AGGIORNAMENTO DATI DA UTILIZZARE IN RELATIONSEU.JS ======================================================================
var checkregion = document.querySelector('input[name="region"]:checked');
var region = checkregion.getAttribute("id");
regionDataOutput = localStorage.getItem(region+'DataOutput');
regionDataOutput = JSON.parse(regionDataOutput);

regionDataOutput["WFgreen_Food_Internal"] = WFgreen_Food_Internal;
regionDataOutput["WFgreen_Food_External"] = WFgreen_Food_External;
regionDataOutput["WFgreen_Energy_Internal"] = WFgreen_Energy_Internal;
regionDataOutput["WFgreen_Energy_external"] = WFgreen_Energy_external;

if(region == "regionA") {
	localStorage.setItem("regionADataOutput", JSON.stringify(regionDataOutput));
}
else if(region == "regionB") {
	localStorage.setItem("regionBDataOutput", JSON.stringify(regionDataOutput));
}
else if(region == "regionC") {
	localStorage.setItem("regionCDataOutput", JSON.stringify(regionDataOutput));
}
else {
	localStorage.setItem("regionDDataOutput", JSON.stringify(regionDataOutput));
}
// ===============================================================================================================================================

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
      text: 'Blue Water Footprint (l/cap/day)'
    },
  };
  // Chart Data
  var barchartData4 = {
    
		    labels: ["Internal", "External"],
		    datasets: [{
		      type: 'bar',
		      label: '"Food"',
		      data: [609, 170],
		      backgroundColor: giallo
		      
		    }, {
		      type: 'bar',
		      label: '"Energy"',
		      backgroundColor: verde,
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

	console.log("================================== WF BLUE =====================================================");

	var checkregiong = document.querySelector('input[name="region"]:checked'); 
	if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionA')) { 
		
	 initial_value_cf_int = 24.4212022139062;  initial_value_lf_int = 13.2551883468376;
	 initial_value_wfg_int = 5191.68997367378;  initial_value_wfb_int = 773.876129386631;
	 
	 initial_value_CF_food = 0.003238332; 
	 initial_value_LF_food = 0.003459326; 
	 initial_value_wfg_food = 1.19415722;
	 initial_value_wfb_food = 0.16009438; 
	 initial_value_CF_en = 0.062843721771217 ; 
	 initial_value_LF_en = 0.00774419419094049 ; 
	 initial_value_wfg_en= 5.52412077113194; 
	 initial_value_wfb_en = 1.10088961437177 ;
	 
	 YG_closing_WFb = 0;  Mulching_WFb = 0;
	 YG_closing_CF = 0;  Mulching_CF = 0; Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
	 Deficit_Mul_Drip_CF = 0;
	 YG_closing_LF = 0.17;  Mulching_LF = 0.25;
	 YG_closing_WFg = 0.17; Mulching_WFg = 0.25;
	 Deficit_Irrigation_LF = -0.10;  Deficit_Mul_LF = -0.10;
	 Deficit_Irrigation_WFg = -0.08;
	 Deficit_Mul_WFg = 0.02;  Deficit_Irrigation_WFb = 0.15;  Deficit_Mul_WFb = 0.30;
	 Deficit_Mul_Drip_LF = -0.02;  Deficit_Mul_Drip_WFg = 0.05; 
	 Deficit_Mul_Drip_WFb = 0.35;
	 
	 Rainfed = 0.84;
	 Irrigated = 1-Rainfed;


	}
	else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionB')) { 
		initial_value_cf_int = 20.2748418808954;  
	     initial_value_lf_int = 17.5727719925233;
		 initial_value_wfg_int = 4714.93177211245;  
		 initial_value_wfb_int = 816.233412273386;
		 
		 initial_value_CF_food = 0.003036887; 
		 initial_value_LF_food = 0.0045496; 
		 initial_value_wfg_food = 1.4764269375;
		 initial_value_wfb_food = 0.2001784125; 
		 initial_value_CF_en = 0.0443982411716406 ; 
		 initial_value_LF_en = 0.0127996691636463 ; 
		 initial_value_wfg_en= 0.00913463005213692; 
		 initial_value_wfb_en = 0.743798594735205 ;
		 
		 YG_closing_WFb = 0;  Mulching_WFb = 0;
		 YG_closing_CF = 0;  Mulching_CF = 0;
		 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
		 Deficit_Mul_Drip_CF = 0;
		 YG_closing_LF = 0.26;  Mulching_LF = 0.25;
		 YG_closing_WFg = 0.26; Mulching_WFg = 0.25;
		 Deficit_Irrigation_LF = -0.10; 
		 Deficit_Mul_LF = -0.10;
		 Deficit_Irrigation_WFg = -0.08;
		 Deficit_Mul_WFg = 0.02; 
		 Deficit_Irrigation_WFb = 0.15; 
		 Deficit_Mul_WFb = 0.30;
		 Deficit_Mul_Drip_LF = -0.02; 
		 Deficit_Mul_Drip_WFg = 0.05; 
		 Deficit_Mul_Drip_WFb = 0.35;	
		 
		 Rainfed = 0.96;
		 Irrigated = 1-Rainfed;
	} 
	else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionC')) { 
		initial_value_cf_int =  27.9584617302096;  
	     initial_value_lf_int = 14.5325751112248;
		 initial_value_wfg_int = 2859,81844233148;  
		 initial_value_wfb_int = 406.478627692298;
		 
		 initial_value_CF_food = 0.003557996; 
		 initial_value_LF_food = 0.003791004; 
		 initial_value_wfg_food = 0.815905;
		 initial_value_wfb_food = 0.0983842; 
		 initial_value_CF_en = 0.0666778336593583 ; 
		 initial_value_LF_en = 0.00537553692507286 ; 
		 initial_value_wfg_en= 0.00381923696961862; 
		 initial_value_wfb_en = 0.265744673663643 ;
		 
		 YG_closing_WFb = 0;  Mulching_WFb = 0;
		 YG_closing_CF = 0;  Mulching_CF = 0;
		 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
		 Deficit_Mul_Drip_CF = 0;
		 YG_closing_LF = 0.33;  Mulching_LF = 0.25;
		 YG_closing_WFg = 0.33; Mulching_WFg = 0.25;
		 Deficit_Irrigation_LF = -0.10; 
		 Deficit_Mul_LF = -0.10;
		 Deficit_Irrigation_WFg = -0.08;
		 Deficit_Mul_WFg = 0.02; 
		 Deficit_Irrigation_WFb = 0.15; 
		 Deficit_Mul_WFb = 0.30;
		 Deficit_Mul_Drip_LF = -0.02; 
		 Deficit_Mul_Drip_WFg = 0.05; 
		 Deficit_Mul_Drip_WFb = 0.35;	
		
		 Rainfed = 0.89;
		 Irrigated = 1-Rainfed;
	}
	else if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionD')) { 
		initial_value_cf_int =  25.1318778442795;  
	     initial_value_lf_int = 15.7995747782528;
		 initial_value_wfg_int = 3357.73329112609;  
		 initial_value_wfb_int = 485.707639283664;
		 
		 initial_value_CF_food = 0.0039148; 
		 initial_value_LF_food = 0.004344; 
		 initial_value_wfg_food = 0.968055;
		 initial_value_wfb_food = 0.119295; 
		 initial_value_CF_en = 0.0605563780410342 ; 
		 initial_value_LF_en = 0.00384961657261653 ; 
		 initial_value_wfg_en= 0.00271749225250921; 
		 initial_value_wfb_en = 0.377280593175422 ;
		 
		 YG_closing_WFb = 0;  Mulching_WFb = 0;
		 YG_closing_CF = 0;  Mulching_CF = 0;
		 Deficit_Irrigation_CF = 0;  Deficit_Mul_CF = 0;
		 Deficit_Mul_Drip_CF = 0;
		 YG_closing_LF = 0.33;  Mulching_LF = 0.25;
		 YG_closing_WFg = 0.33; Mulching_WFg = 0.25;
		 Deficit_Irrigation_LF = -0.10; 
		 Deficit_Mul_LF = -0.10;
		 Deficit_Irrigation_WFg = -0.08;
		 Deficit_Mul_WFg = 0.02; 
		 Deficit_Irrigation_WFb = 0.15; 
		 Deficit_Mul_WFb = 0.30;
		 Deficit_Mul_Drip_LF = -0.02; 
		 Deficit_Mul_Drip_WFg = 0.05; 
		 Deficit_Mul_Drip_WFb = 0.35;	
		 
		 Rainfed = 0.89;
		 Irrigated = 1-Rainfed;
	}
	else {}
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
var totalone = vegparse+vegeparse+meatparse;
//------------------------------------------------------------------------------------
var windp = parseFloat(document.getElementById("em_J21").value)/100;
var solarp = parseFloat(document.getElementById("em_J22").value)/100;
var hydrop = parseFloat(document.getElementById("em_J23").value)/100;
var biofuelp = parseFloat(document.getElementById("em_J24").value)/100;
var nuclearp = parseFloat(document.getElementById("em_J25").value)/100;
var fuelp = parseFloat(document.getElementById("em_J26").value)/100;
//----------------------------------------------------------------------------------------------------------------
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
	var checkregion = document.querySelector('input[name="region"]:checked'); 
  	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
  	//var plant1 = ((vegparse*100)+(vegeparse*85)+(meatparse*70))/100;
  		var meat0_1 =(vegeparse/totalone);
		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
		var meat0_3 = (meat0_1)+(meat0_2);
  	var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*70);
  	//calcolo i valori per MEAT & FISH:
  	//var meat1 = ((vegparse*0)+(vegeparse*0)+(meatparse*15))/100;	

		
  	var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*15);
  	//calcolo i valori per DIARY & EGGS:
  	//var diary1 = ((vegparse*0)+(vegeparse*15)+(meatparse*15))/100;
  	var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);

  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
  		var meat0_1 =(vegeparse/totalone);
  		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
  		var meat0_3 = (meat0_1)+(meat0_2);
  	
  		var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*70);
  		var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*15);
  		var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);
  		
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
  		var meat0_1 =(vegeparse/totalone);
  		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
  		var meat0_3 = (meat0_1)+(meat0_2);
  		
  		var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*65);
  		var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*20);
  		var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);
  		

  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
  		var meat0_1 =(vegeparse/totalone);
  		var meat0_2 = ((meatparse/totalone)*(7-days))/7;
  		var meat0_3 = (meat0_1)+(meat0_2);
  		
  		var plant1 = ((vegparse/totalone)*100)+(meat0_3*85)+((meatparse/totalone)*(days/7)*65);
  		var meat1 = ((vegparse/totalone)*0)+(meat0_3*0)+((meatparse/totalone)*(days/7)*20);
  		var diary1 = ((vegparse/totalone)*0)+(meat0_3*15)+((meatparse/totalone)*(days/7)*15);
  		

  	} else {}
//----------------------------------------------------------------------------------------------------------------
//calcolo WASTE:
var waste_val = (wasteparse*intakeparse)/100;
//CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
//OTTENGO LA PERCENTUALE BASE (% * calorie+waste)
var cal_waste = waste_val+intakeparse;
//----------------------------------------------------------------------------------------------------------------

var YeldWFb = Gap_Yeld_parse*YG_closing_WFb;
var Mulch = Mulching_parse*Mulching_WFb;
var measure = document.getElementById("Measure").value;	
var Deficit;
var checkregionyg = document.querySelector('input[name="region"]:checked'); 
if (measure=='1') {
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Irrigation_WFb;	
	Deficit = Irrigated* deficit_irrigation_wfb;
	}
	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
		var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Irrigation_WFb;
			Deficit = Irrigated* deficit_irrigation_wfb;
		} 	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
		
		var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Irrigation_WFb;	
			Deficit = Irrigated* deficit_irrigation_wfb;
		} 	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
		var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Irrigation_WFb;
			Deficit = Irrigated* deficit_irrigation_wfb;
		}
	}//VALUE 1 FINE
//VALUE 2 INIZIO
	
else if(measure=='2') {
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
		var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Mul_WFb;
		Deficit = Irrigated* deficit_irrigation_wfb;
		}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
		var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Mul_WFb;	
		Deficit = Irrigated* deficit_irrigation_wfb;
	}

	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
		var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Mul_WFb;	
		Deficit = Irrigated* deficit_irrigation_wfb;
	}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
		var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Mul_WFb;
		Deficit = Irrigated* deficit_irrigation_wfb;
		}else{}
	}
//VALUE 2 FINE
//VALUE 3 INIZIO
else if(measure=='3') {
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
	var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Mul_Drip_WFb;
	Deficit = Irrigated* deficit_irrigation_wfb;
	}	
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
		var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Mul_Drip_WFb;
		Deficit = Irrigated* deficit_irrigation_wfb;
		} 
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
		var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Mul_Drip_WFb;
		Deficit = Irrigated* deficit_irrigation_wfb;
		} 
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
		var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Mul_Drip_WFb;
		Deficit = Irrigated* deficit_irrigation_wfb;
		} else{}
	
	} //VALUE 3 FINE
else {
	}
//----------------------------------------------------------------------------------------------------------------
var meatbased = (meat1*cal_waste)/100;
var diarybased = (diary1*cal_waste)/100;
var plantbased = (plant1*cal_waste)/100;
//----------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
//CALCOLO IL VALORE PER LE SOMME DI FOOD LF INTERNAL:
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
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
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
	//PLANT:
	//------------------------------------------------------------------------------------------------------------------
	var plantbasedA = plantbased*(1-Number(fip));
	var plantbasedB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
	var plantbasedC = Number(RB_WFblue_Plant)*(1-Number(plantbasedB));	
	var plant_WFblue = Number(plantbasedA)*Number(plantbasedC);
	//------------------------------------------------------------------------------------------------------------------
	//MEAT:	
	var meatbasedA = meatbased*(1-Number(fim));
	var meatbasedB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
	var meatbasedC = Number(RB_WFblue_Meat)*(1-Number(meatbasedB));
	//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
	var meat_WFblue = Number(meatbasedA)*Number(meatbasedC);

	//---------------------------------------------------------------------------------------------------------------------
	//DIARY:
	var diaryA = (diarybased)*(1-Number(fid));
	var diaryB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
	var diaryC = Number(RB_WFblue_Diary)*(1-Number(diaryB));
	var diary_WFblue = (diaryA)*(diaryC);
	}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
	//PLANT:
	//------------------------------------------------------------------------------------------------------------------
	var plantbasedA = plantbased*(1-Number(fip));
	var plantbasedB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
	var plantbasedC = Number(RC_WFblue_Plant)*(1-Number(plantbasedB));	
	var plant_WFblue = Number(plantbasedA)*Number(plantbasedC);
	//------------------------------------------------------------------------------------------------------------------
	//MEAT:	
	var meatbasedA = meatbased*(1-Number(fim));
	var meatbasedB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
	var meatbasedC = Number(RC_WFblue_Meat)*(1-Number(meatbasedB));
	//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
	var meat_WFblue = Number(meatbasedA)*Number(meatbasedC);

	//---------------------------------------------------------------------------------------------------------------------
	//DIARY:
	var diaryA = (diarybased)*(1-Number(fid));
	var diaryB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
	var diaryC = Number(RC_WFblue_Diary)*(1-Number(diaryB));
	var diary_WFblue = (diaryA)*(diaryC);
	}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
	//PLANT:
	//------------------------------------------------------------------------------------------------------------------
	var plantbasedA = plantbased*(1-Number(fip));
	var plantbasedB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
	var plantbasedC = Number(RD_WFblue_Plant)*(1-Number(plantbasedB));	
	var plant_WFblue = Number(plantbasedA)*Number(plantbasedC);
	//------------------------------------------------------------------------------------------------------------------
	//MEAT:	
	var meatbasedA = meatbased*(1-Number(fim));
	var meatbasedB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
	var meatbasedC = Number(RD_WFblue_Meat)*(1-Number(meatbasedB));
	//meatbasedC = Math.round(meatbasedC*Math.pow(10,2))/Math.pow(10,2);
	var meat_WFblue = Number(meatbasedA)*Number(meatbasedC);

	//---------------------------------------------------------------------------------------------------------------------
	//DIARY:
	var diaryA = (diarybased)*(1-Number(fid));
	var diaryB = ((YeldWFb+Mulch)*Rainfed)+Deficit;
	var diaryC = Number(RD_WFblue_Diary)*(1-Number(diaryB));
	var diary_WFblue = (diaryA)*(diaryC);
	}
else{}
console.log("plantbasedA: "+plantbasedA+" plantbasedB: "+plantbasedB+" plantbasedC: "+plantbasedC+" plant_WFblue: "+plant_WFblue);
console.log("meatbasedA: "+meatbasedA+" meatbasedB: "+meatbasedB+" meatbasedC: "+meatbasedC+" plant_WFblue: "+meat_WFblue);
console.log("diaryA: "+diaryA+" diaryB: "+diaryB+" diaryC: "+diaryC+" diary_WFblue: "+diary_WFblue);
console.log("-----------------");
console.log("PLANTBASED e roba: "+plantbased+" e la moltiplicazione 1 meno roba: "+(1-Number(fip)));

//---------------------------------------------------------------------------------------------------------------------
var add1 = (plant_WFblue)+(meat_WFblue);
var dataWFblue_food_int = (add1)+(diary_WFblue);
var WFblue_Food_Internal=dataWFblue_food_int; 
WFblue_Food_Internal = parseFloat(WFblue_Food_Internal).toFixed(2);
WFblue_Food_Internal = Number(WFblue_Food_Internal);
console.log("WFblue_Food_Internal: "+WFblue_Food_Internal);
//---------------------------------------------------------------------------------------------------------------------
//CALCOLO IL VALORE PER LE SOMME DI FOOD WFBLUE EXTERNAL:
var plantres_WFblue_e = (plantbased)*Number(fip);

var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
//al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
//BOTTONE A PLANT
if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='planta')) {
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
	var plantres_WFblue_ext = Number(plantres_WFblue_e)*Number(RA_WFblue_Plant);
		plantres_WFblue_ext = Number(plantres_WFblue_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var plantres_WFblue_ext = Number(plantres_WFblue_e)*Number(RA_WFblue_Plant);
		plantres_WFblue_ext = Number(plantres_WFblue_ext);

	}
	else { 
		var plantres_WFblue_ext = Number(plantres_WFblue_e)*Number(RA_WFblue_Plant);
		plantres_WFblue_ext = Number(plantres_WFblue_ext);

	}
}

//BOTTONE PLANT B
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		
		var plantres_WFblue_ext = Number(plantres_WFblue_e)*(RB_WFblue_Plant);
		plantres_WFblue_ext = Number(plantres_WFblue_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var plantres_WFblue_ext = Number(plantres_WFblue_e)*(RB_WFblue_Plant);
		plantres_WFblue_ext = Number(plantres_WFblue_ext);

	}
	else { 
		var plantres_WFblue_ext = Number(plantres_WFblue_e)*(RB_WFblue_Plant);
		plantres_WFblue_ext = Number(plantres_WFblue_ext);

	} 
}

//BOTTONE PLANT C
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var plantres_WFblue_ext = Number(plantres_WFblue_e)*(RC_WFblue_Plant);
		plantres_WFblue_ext = Number(plantres_WFblue_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var plantres_WFblue_ext = Number(plantres_WFblue_e)*(RC_WFblue_Plant);
		plantres_WFblue_ext = Number(plantres_WFblue_ext);

	}
	else { 
		var plantres_WFblue_ext = Number(plantres_WFblue_e)*(RC_WFblue_Plant);
		plantres_WFblue_ext = Number(plantres_WFblue_ext);

	} 
} 

//BOTTONE PLANT D
else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var plantres_WFblue_ext = Number(plantres_WFblue_e)*(RD_WFblue_Plant);
		plantres_WFblue_ext = Number(plantres_WFblue_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var plantres_WFblue_ext = Number(plantres_WFblue_e)*(RD_WFblue_Plant);
		plantres_WFblue_ext = Number(plantres_WFblue_ext);

	}
	else  { 
		var plantres_WFblue_ext = Number(plantres_WFblue_e)*(RD_WFblue_Plant);
		plantres_WFblue_ext = Number(plantres_WFblue_ext);

	}	
}
	
	//BOTTONE PLANT WORLD
else {
	var plantres_WFblue_ext = plantres_WFblue_e*Number(WORLD_plant_WFblue_FoodW11);
	plantres_WFblue_ext = Number(plantres_WFblue_ext);

}
console.log("plantres_WFblue_ext: "+plantres_WFblue_ext);
console.log("REGION B CLICK B PLANT USCITA VAR B: "+plantres_WFblue_ext);

console.log("REGION B CLICK B PLANT USCITA VAR C: "+plantres_WFblue_ext);

//MEAT EXTERNAL
var meatres_WFblue_e = Number(meatbased)*Number(fim);

//BOTTONE MEAT A
var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meata')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(RA_WFblue_Meat);	
		meatres_WFblue_ext = Number(meatres_WFblue_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(RA_WFblue_Meat);	
		meatres_WFblue_ext = Number(meatres_WFblue_ext);
	}
	else { 
		var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(RA_WFblue_Meat);	
		meatres_WFblue_ext = Number(meatres_WFblue_ext);
	} 
}
//MEAT BOTTONE B
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(RB_WFblue_Meat);	
		meatres_WFblue_ext = Number(meatres_WFblue_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(RB_WFblue_Meat);	
		meatres_WFblue_ext = Number(meatres_WFblue_ext);
	}
	else { 
		var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(RB_WFblue_Meat);	
		meatres_WFblue_ext = Number(meatres_WFblue_ext);
	}
}
//MEAT BOTTONE C
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(RC_WFblue_Meat);	
	meatres_WFblue_ext = Number(meatres_WFblue_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(RC_WFblue_Meat);	
		meatres_WFblue_ext = Number(meatres_WFblue_ext);
	}
	else { 
		var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(RC_WFblue_Meat);	
		meatres_WFblue_ext = Number(meatres_WFblue_ext);
	}
}
//BOTTONE MEAT D
else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(RD_WFblue_Meat);	
	meatres_WFblue_ext = Number(meatres_WFblue_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(RD_WFblue_Meat);	
		meatres_WFblue_ext = Number(meatres_WFblue_ext);
	}
	else { 
		var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(RD_WFblue_Meat);	
		meatres_WFblue_ext = Number(meatres_WFblue_ext);
	}
}
else {
	var meatres_WFblue_ext = Number(meatres_WFblue_e)*Number(WORLD_meat_WFblue_FoodW12);
	meatres_WFblue_ext = Number(meatres_WFblue_ext);
}

console.log("meatres_WFblue_ext: "+meatres_WFblue_ext);

//DIARY EXTERNAL
var diaryres_WFblue_e = Number(diarybased)*Number(fid);

var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diarya')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(RA_WFblue_Diary);	
		diaryres_WFblue_ext = Number(diaryres_WFblue_ext);
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(RA_WFblue_Diary);	
		diaryres_WFblue_ext = Number(diaryres_WFblue_ext);

	}
	else { 
		var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(RA_WFblue_Diary);	
		diaryres_WFblue_ext = Number(diaryres_WFblue_ext);

	}
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(RB_WFblue_Diary);	
		diaryres_WFblue_ext = Number(diaryres_WFblue_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(RB_WFblue_Diary);	
		diaryres_WFblue_ext = Number(diaryres_WFblue_ext);

	}
	else { 
		var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(RB_WFblue_Diary);	
		diaryres_WFblue_ext = Number(diaryres_WFblue_ext);

	}
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(RC_WFblue_Diary);	
		diaryres_WFblue_ext = Number(diaryres_WFblue_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(RC_WFblue_Diary);	
		diaryres_WFblue_ext = Number(diaryres_WFblue_ext);

	}
	else { 
		var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(RC_WFblue_Diary);	
		diaryres_WFblue_ext = Number(diaryres_WFblue_ext);

	}
}
else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) { 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(RD_WFblue_Diary);	
		diaryres_WFblue_ext = Number(diaryres_WFblue_ext);

	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(RD_WFblue_Diary);	
		diaryres_WFblue_ext = Number(diaryres_WFblue_ext);

	}
	else { 
		var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(RD_WFblue_Diary);	
		diaryres_WFblue_ext = Number(diaryres_WFblue_ext);

	}
}
else {
	var diaryres_WFblue_ext = Number(diaryres_WFblue_e)*Number(WORLD_diary_WFblue_FoodW13);
	diaryres_WFblue_ext = Number(diaryres_WFblue_ext);

}
	  
var dataWFblue_food_ext = (plantres_WFblue_ext+meatres_WFblue_ext+diaryres_WFblue_ext);
var WFblue_Food_External=dataWFblue_food_ext;
WFblue_Food_External = parseFloat(WFblue_Food_External).toFixed(2);
WFblue_Food_External = Number(WFblue_Food_External);
console.log("WFblue_Food_External: "+WFblue_Food_External); 
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
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
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
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
		var fossil_ind = 25.0209;
		var bio_ind = 26.5849;
		var el_ind = 31.6153;
			  	  
		var fossil_tr = 63.5554;
		var bio_tr = 7.25276;
		var el_tr = 1.29415;
			  	  
		var fossil_s = 8.8585;
		var bio_s = 1.76044;
		var el_s = 18.1069;
			  	  
		var fossil_house = 12.8533;
		var bio_house = 17.6458;
		var el_house = 24.6744;
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
		var fossil_ind = 30.8979;
		var bio_ind = 2.60221;
		var el_ind = 21.1867;
			  	  
		var fossil_tr = 70.3915;
		var bio_tr = 2.707273;
		var el_tr = 1.33063;
			  	  
		var fossil_s = 21.0933;
		var bio_s = 3.41282;
		var el_s = 16.0308;
			  	  
		var fossil_house = 43.0607;
		var bio_house = 8.01203;
		var el_house = 14.1642;
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 
		var fossil_ind = 24.0465;
		var bio_ind = 3.36426;
		var el_ind = 16.1288;
			  	  
		var fossil_tr = 66.283;
		var bio_tr = 3.50512;
		var el_tr = 1.09532;
			  	  
		var fossil_s = 12.6046;
		var bio_s = 1.06047;
		var el_s = 15.6423;
			  	  
		var fossil_house = 23.5779;
		var bio_house = 10.2351;
		var el_house = 15.7147;
	}
	else {}
//----------------------------------------------------------------------------------------------------
var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
var somma_valori_s = (fossil_s+bio_s+el_s);
var somma_valori_house = (fossil_house+bio_house+el_house);

console.log("somma_valori_tr: "+somma_valori_tr+" somma_valori_ind: "+somma_valori_ind+" somma_valori_s: "+somma_valori_s+" somma_valori_house: "+somma_valori_house);
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
console.log("f_i: "+f_i+" f_t: "+f_t+" f_s: "+f_s+" f_h: "+f_h);
	  	  
var somma_tutto_fuel_user = (1-bio_fr_parse)*(A6a-A6b);
var total_fossil_user = (f_i)+(f_t)+(f_s)+(f_h);
console.log("total_fossil_user: "+total_fossil_user);

var energy_fossil_val = (total_fossil_user)*(1-Number(fossilf_parse));
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
var fossil_final_WFblue = (energy_fossil_val)*(Number(RA_WFblue_Fossil)*0.25)/1000;
} 
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
var fossil_final_WFblue = (energy_fossil_val)*(Number(RB_WFblue_Fossil)*0.25)/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
	var fossil_final_WFblue = (energy_fossil_val)*(Number(RC_D_WFblue_Fossil)*0.25)/1000;
	} 
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
	var fossil_final_WFblue = (energy_fossil_val)*(Number(RC_D_WFblue_Fossil)*0.25)/1000;
	} else{}
console.log("FOSSIL WFblue INT = EnergyG34 (ok)= "+fossil_final_WFblue);

//-----------------------------------------------------------------------------------------------------
//calcolo valori iniziali di BIOFUEL USER:	  
var bio_i_primaop = (A6a)-(A6b);
/*var b_i = (bio_fr_parse)*(A6b);
var b_t = (bio_fr_parse)*(B6a-B6b);
var b_s = (bio_fr_parse)*(C6a-C6b);
var b_h = (bio_fr_parse)*(D6a);*/
var b_i = (bio_fr_parse)*(A6b);
b_i = parseFloat(b_i).toFixed(1);
b_i = Number(b_i);
var b_t = (bio_fr_parse)*(B6a-B6b);
b_t = parseFloat(b_t).toFixed(1);
b_t = Number(b_t);
var b_s = (bio_fr_parse)*(C6a-C6b);
b_s = parseFloat(b_s).toFixed(1);
b_s = Number(b_s);
var b_h = (bio_fr_parse)*(D6a);
b_h = parseFloat(b_h).toFixed(1);
b_h = Number(Math.round(b_h));

console.log("b_i: "+b_i+" b_t: "+b_t+" b_s: "+b_s+" b_h: "+b_h);

var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
console.log("total_bio_user: "+total_bio_user);

var energy_bio_val = (total_bio_user)*((1-Number(biofuels_parse)));
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
var bio_final_WFblue = (energy_bio_val)*(Number(RA_WFblue_Biofuel)*0.27)/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
	var bio_final_WFblue = (energy_bio_val)*(Number(RB_WFblue_Biofuel)*0.27)/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
	var bio_final_WFblue = (energy_bio_val)*(Number(RC_D_WFblue_Biofuel)*0.27)/1000;
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
	var bio_final_WFblue = (energy_bio_val)*(Number(RC_D_WFblue_Biofuel)*0.27)/1000;
} else {}
console.log("BIO WFblue INT = EnergyG35 (ok) =  "+bio_final_WFblue);

//-----------------------------------------------------------------------------------------------------
var e_i = (1-(red_ind_parse))*el_ind;
var e_t = (el_tr_parse)*(B6a);
var e_s = (1-red_ind_parse)*Number(el_s);
e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
console.log("e_i: "+e_i+" e_t: "+e_t+" e_s: "+e_s+" e_h: "+e_h);
		  	
var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
console.log("total_el_user: "+total_el_user);
var energy_elec_val = (total_el_user)*((1-(elec_parse)));

if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
var elec1= Number(windp)*Number(RA_WFblue_Wind);
var elec2 =Number(solarp)*Number(RA_WFblue_Solar);
var elec3 =Number(hydrop)*Number(RA_WFblue_Hydro);
var elec4 =Number(biofuelp)*Number(RA_WFblue_Biofuel);
var elec5 =Number(nuclearp)*Number(RA_WFblue_Nuclear);
var elec6 =Number(fuelp)*Number(RA_WFblue_Fossil); 	
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
	var elec1= Number(windp)*Number(RB_WFblue_Wind);
	var elec2 =Number(solarp)*Number(RB_WFblue_Solar);
	var elec3 =Number(hydrop)*Number(RB_WFblue_Hydro);
	var elec4 =Number(biofuelp)*Number(RB_WFblue_Biofuel);
	var elec5 =Number(nuclearp)*Number(RB_WFblue_Nuclear);
	var elec6 =Number(fuelp)*Number(RB_WFblue_Fossil); 	
	}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
	var elec1= Number(windp)*Number(RC_D_WFblue_Wind);
	var elec2 =Number(solarp)*Number(RC_D_WFblue_Solar);
	var elec3 =Number(hydrop)*Number(RC_D_WFblue_Hydro);
	var elec4 =Number(biofuelp)*Number(RC_D_WFblue_Biofuel);
	var elec5 =Number(nuclearp)*Number(RC_D_WFblue_Nuclear);
	var elec6 =Number(fuelp)*Number(RC_D_WFblue_Fossil); 	
	}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
	var elec1= Number(windp)*Number(RC_D_WFblue_Wind);
	var elec2 =Number(solarp)*Number(RC_D_WFblue_Solar);
	var elec3 =Number(hydrop)*Number(RC_D_WFblue_Hydro);
	var elec4 =Number(biofuelp)*Number(RC_D_WFblue_Biofuel);
	var elec5 =Number(nuclearp)*Number(RC_D_WFblue_Nuclear);
	var elec6 =Number(fuelp)*Number(RC_D_WFblue_Fossil); 		
	} else {
	// mi dice su world che è region D...
		var elec1= Number(windp)*Number(RC_D_WFblue_Wind);
		var elec2 =Number(solarp)*Number(RC_D_WFblue_Solar);
		var elec3 =Number(hydrop)*Number(RC_D_WFblue_Hydro);
		var elec4 =Number(biofuelp)*Number(RC_D_WFblue_Biofuel);
		var elec5 =Number(nuclearp)*Number(RC_D_WFblue_Nuclear);
		var elec6 =Number(fuelp)*Number(RC_D_WFblue_Fossil); 	
	}
var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);
console.log("ELECTRICITY SUM ELEC1ADD: "+elec1add);
console.log("ELECTRICITY SUM ELEC2ADD: "+elec2add);
console.log("ELECTRICITY SUM ELEC3ADD: "+elec3add);

var electricity_sum = (elec1add)+(elec2add)+(elec3add);

//console.log("LOCAL ELECTRICITY B(75,67): "+energy_elec_val);
//console.log("ELECTRICITY MATR.SOMMA PRODOTTO: "+electricity_sum);
var elec_final_WFblue = (energy_elec_val)*(electricity_sum)/1000;
console.log("elec_final_WFblue: "+elec_final_WFblue);
//console.log("FOSSIL, BIOFUEL ED ELECTRICITY WFBLUE SOPRA: "+fossil_final_WFblue+" "+bio_final_WFblue+" "+elec_final_WFblue);
//-----------------------------------------------------------------------------------------------
var datoWFblue_en_internal = (elec_final_WFblue+bio_final_WFblue+fossil_final_WFblue);
var WFblue_Energy_Internal=datoWFblue_en_internal;
console.log("WFblue_Energy_Internal: "+WFblue_Energy_Internal);
//console.log("FOSSIL, BIOFUEL ED ELECTRICITY WFBLUE SOPRA: "+datoWFblue_en_internal);

//-----------------------------------------------------------------------------------------------

	var energy_elec_val_ext = (total_el_user)*(elec_parse);
//CALCOLO VALORI EXTERNAL ENERGY:
	
	//INIZIO FOSSIL WFB EXTERNAL
var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');
if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossila')) { 
	var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(Number(RA_WFblue_Fossil)*0.25)/1000;
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilb')&&(checkregion.getAttribute('id')=='regionA')) {
	var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(Number(RA_WFblue_Fossil)*0.25)/1000;

}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilb')&&(checkregion.getAttribute('id')=='regionC')||(checkregion.getAttribute('id')=='regionD')) {
var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(Number(RB_WFblue_Fossil)*0.25)/1000;
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilc')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')) {
	var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(Number(RB_WFblue_Fossil)*0.25)/1000;
}
else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossilc')&&(checkregion.getAttribute('id')=='regionD')) {	
	var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_WFblue_Fossil)*0.25)/1000;

}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='fossild')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')||(checkregion.getAttribute('id')=='regionC')) {
	var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_WFblue_Fossil)*0.25)/1000;
}
else {
	var fossil_final_WFblue_ext = total_fossil_user*(fossilf_parse)*(Number(RC_D_WFblue_Fossil)*0.25)/1000;
}
console.log("fossil_final_WFblue_ext: "+fossil_final_WFblue_ext);
//FINE FOSSIL WFBLUE EXTERNAL

//BIOFUEL EXTERNAL WFBLUE
var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuela')) {
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RA_WFblue_Biofuel)*0.27)/1000;
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelb')&&(checkregion.getAttribute('id')=='regionA')) {
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RA_WFblue_Biofuel)*0.27)/1000;
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelb')&&(checkregion.getAttribute('id')=='regionC')||(checkregion.getAttribute('id')=='regionD')) {
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RB_WFblue_Biofuel)*0.27)/1000;
}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelb')&&(checkregion.getAttribute('id')=='regionA')) {
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RA_WFblue_Biofuel)*0.27)/1000;

}

else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelc')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')) {
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RB_WFblue_Biofuel)*0.27)/1000;
}

else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofuelc')&&(checkregion.getAttribute('id')=='regionD')) {	
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_WFblue_Biofuel)*0.27)/1000;
	
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='biofueld')&&(checkregion.getAttribute('id')=='regionA')||(checkregion.getAttribute('id')=='regionB')||(checkregion.getAttribute('id')=='regionC')) {
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_WFblue_Biofuel)*0.27)/1000;
}
else {
	var bio_final_WFblue_ext = total_bio_user*(biofuels_parse)*(Number(RC_D_WFblue_Biofuel)*0.27)/1000;
}
console.log("bio_final_WFblue_ext: "+bio_final_WFblue_ext);
//FINE WFBLUE BIOFUEL EXTERNAL

//INIZIO ELECTRICITY WFBLUE EXTERNAL
var energy_elec_val = (total_el_user)*((elec_parse));
var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='ela')) {
	// CORRISPONDE A IMPORT CODE 1
	windp = JSON.parse(localStorage.getItem("regionADataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionADataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionADataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionADataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionADataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionADataInput"))["fuelp"];
	var elec1= (windp)*(RA_WFblue_Wind);
	var elec2 =(solarp)*(RA_WFblue_Solar);
	var elec3 =(hydrop)*(RA_WFblue_Hydro);
	var elec4 =(biofuelp)*(RA_WFblue_Biofuel);
	var elec5 =(nuclearp)*(RA_WFblue_Nuclear);
	var elec6 =(fuelp)*(RA_WFblue_Fossil); 	
}
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionA')) {
	windp = JSON.parse(localStorage.getItem("regionADataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionADataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionADataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionADataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionADataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionADataInput"))["fuelp"];
	var elec1= (windp)*(RA_WFblue_Wind);
	var elec2 =(solarp)*(RA_WFblue_Solar);
	var elec3 =(hydrop)*(RA_WFblue_Hydro);
	var elec4 =(biofuelp)*(RA_WFblue_Biofuel);
	var elec5 =(nuclearp)*(RA_WFblue_Nuclear);
	var elec6 =(fuelp)*(RA_WFblue_Fossil); 	
}
	
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionC')||(checkRadioElec.getAttribute('id')=='elb')&&(checkregion.getAttribute('id')=='regionD')) {

	windp = JSON.parse(localStorage.getItem("regionBDataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionBDataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionBDataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionBDataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["fuelp"];
		var elec1= Number(windp)*Number(RB_WFblue_Wind);
		var elec2 =Number(solarp)*Number(RB_WFblue_Solar);
		var elec3 =Number(hydrop)*Number(RB_WFblue_Hydro);
		var elec4 =Number(biofuelp)*Number(RB_WFblue_Biofuel);
		var elec5 =Number(nuclearp)*Number(RB_WFblue_Nuclear);
		var elec6 =Number(fuelp)*Number(RB_WFblue_Fossil);
}   
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionA')||(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionB')) {
	
	
	windp = JSON.parse(localStorage.getItem("regionBDataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionBDataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionBDataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionBDataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionBDataInput"))["fuelp"];
	var elec1= (windp)*(RB_WFblue_Wind);
	var elec2 =(solarp)*(RB_WFblue_Solar);
	var elec3 =(hydrop)*(RB_WFblue_Hydro);
	var elec4 =(biofuelp)*(RB_WFblue_Biofuel);
	var elec5 =(nuclearp)*(RB_WFblue_Nuclear);
	var elec6 =(fuelp)*(RB_WFblue_Fossil); 
}
	
else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')&&(checkregion.getAttribute('id')=='regionD')) {	
	windp = JSON.parse(localStorage.getItem("regionDDataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionDDataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionDDataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionDDataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["fuelp"];
		var elec1= Number(windp)*Number(RC_D_WFblue_Wind);
		var elec2 =Number(solarp)*Number(RC_D_WFblue_Solar);
		var elec3 =Number(hydrop)*Number(RC_D_WFblue_Hydro);
		var elec4 =Number(biofuelp)*Number(RC_D_WFblue_Biofuel);
		var elec5 =Number(nuclearp)*Number(RC_D_WFblue_Nuclear);
		var elec6 =Number(fuelp)*Number(RC_D_WFblue_Fossil);
}  
else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')&&(checkregion.getAttribute('id')=='regionA')||(checkRadioElec.getAttribute('id')=='eld')&&(checkregion.getAttribute('id')=='regionB')||(checkRadioElec.getAttribute('id')=='eld')&&(checkregion.getAttribute('id')=='regionC')) {
	
	windp = JSON.parse(localStorage.getItem("regionCDataInput"))["windp"];
	solarp = JSON.parse(localStorage.getItem("regionCDataInput"))["solarp"];
	hydrop =  JSON.parse(localStorage.getItem("regionCDataInput"))["hydrop"];
	biofuelp = JSON.parse(localStorage.getItem("regionCDataInput"))["biofuelp"];
	nuclearp = JSON.parse(localStorage.getItem("regionCDataInput"))["nuclearp"];
	fuelp = JSON.parse(localStorage.getItem("regionCDataInput"))["fuelp"];
		var elec1= Number(windp)*Number(RC_D_WFblue_Wind);
		var elec2 =Number(solarp)*Number(RC_D_WFblue_Solar);
		var elec3 =Number(hydrop)*Number(RC_D_WFblue_Hydro);
		var elec4 =Number(biofuelp)*Number(RC_D_WFblue_Biofuel);
		var elec5 =Number(nuclearp)*Number(RC_D_WFblue_Nuclear);
		var elec6 =Number(fuelp)*Number(RC_D_WFblue_Fossil);
}
	

else {

	windp = JSON.parse(localStorage.getItem("regionDDataInput"))["windp"];
solarp = JSON.parse(localStorage.getItem("regionDDataInput"))["solarp"];
hydrop =  JSON.parse(localStorage.getItem("regionDDataInput"))["hydrop"];
biofuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["biofuelp"];
nuclearp = JSON.parse(localStorage.getItem("regionDDataInput"))["nuclearp"];
fuelp = JSON.parse(localStorage.getItem("regionDDataInput"))["fuelp"];
	var elec1= Number(windp)*Number(RC_D_WFblue_Wind);
	var elec2 =Number(solarp)*Number(RC_D_WFblue_Solar);
	var elec3 =Number(hydrop)*Number(RC_D_WFblue_Hydro);
	var elec4 =Number(biofuelp)*Number(RC_D_WFblue_Biofuel);
	var elec5 =Number(nuclearp)*Number(RC_D_WFblue_Nuclear);
	var elec6 =Number(fuelp)*Number(RC_D_WFblue_Fossil);
	
}

//FINE ELECTRICITY WFBLUE EXTERNAL

//FINE ELECTRICITY WFBLUE EXTERNAL

var elec1add = (elec1)+(elec2);
var elec2add = (elec3)+(elec4);
var elec3add = (elec5)+(elec6);
console.log("ELECTRICITY SUM ELEC1ADD: "+elec1add);
console.log("ELECTRICITY SUM ELEC2ADD: "+elec2add);
console.log("ELECTRICITY SUM ELEC3ADD: "+elec3add);

console.log("WIND, SOLAR ETC. "+windp+" "+solarp+" "+biofuelp+" "+nuclearp+" "+fuelp+"");
console.log("COSTANTI RELATIVE:"+RC_D_WFgreen_Wind+" "+RC_D_WFgreen_Solar+" "+RC_D_WFgreen_Hydro+" "+RC_D_WFgreen_Biofuel+" "+RC_D_WFgreen_Nuclear+" "+RC_D_WFgreen_Fossil);

console.log("SOMMA DEI VALORI ELECTRICITY EXTERNAL: "+elec1+" "+elec2+" "+elec3+" "+elec4+" "+elec5+" "+elec6);

var electricity_sum_ext = (elec1add)+(elec2add)+(elec3add);
electricity_sum_ext = parseFloat(electricity_sum_ext).toFixed(1);

console.log("SOMMA ENERGY EXT "+electricity_sum_ext);

var elec_final_WFblue_ext = (energy_elec_val_ext)*Number(electricity_sum_ext)/1000;
elec_final_WFblue_ext = parseFloat(elec_final_WFblue_ext/100).toFixed(1);
elec_final_WFblue_ext = Number(elec_final_WFblue_ext);
console.log("elec_final_WFblue_ext: "+elec_final_WFblue_ext);
console.log("SCOMPOSIZIONE ELECTRICITY: "+energy_elec_val_ext+" e "+electricity_sum_ext);


//FINE CALCOLO VALORI EXTERNAL ENERGY

//----------------------------------------------------------------------------------------------
var datoWFblue_en_external = (elec_final_WFblue_ext+bio_final_WFblue_ext+fossil_final_WFblue_ext);
 var WFblue_Energy_external=datoWFblue_en_external;
console.log("WFblue_Energy_external: "+WFblue_Energy_external);
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

var valfood04 = (sommawfbfood/(intakeparse*(1+wastevirgola)));
//var valfood14 = (valfood04-initial_value_wfb_food)/initial_value_wfb_food;

var valfood14_1 = (valfood04)-(initial_value_wfb_food);
var valfood14_2 = valfood14_1/initial_value_wfb_food;
var valfood14_3 = valfood14_2*100;
var valfood14 = parseFloat(valfood14_3).toFixed(1);

console.log("COSTANTE PERCENTUALE VALFOOD 6: "+initial_value_wfb_food);
console.log("COSTANTE PERCENTUALE VALFOOD TOT: "+valfood14);
console.log("OPERAZIONE COSTANTE MENO VALFOOD: "+valfood14_1);
console.log("OPERAZIONE TOT VALFOOD: "+valfood14);

document.getElementById("valfood_4").innerHTML = parseFloat(valfood04).toFixed(4);
document.getElementById("valfood_8").innerHTML = valfood14+"%";

var valen04 = ((sommawfbenergy)/somma_energy_itsh);
//var valen14 = ((valen04-initial_value_wfb_en)/initial_value_wfb_en);

var valen14_1 = (valen04)-(initial_value_wfb_en);
var valen14_2 = valen14_1/initial_value_wfb_en;
var valen14_3 = valen14_2*100;
var valen14 = parseFloat(valen14_3).toFixed(1);
document.getElementById("valenergy_4").innerHTML = parseFloat(valen04).toFixed(4);
document.getElementById("valenergy_8").innerHTML = valen14+"%";

console.log("COSTANTE PERCENTUALE VALEN 8: "+initial_value_wfb_en);
console.log("COSTANTE PERCENTUALE VALEN TOT: "+valen04);
console.log("OPERAZIONE COSTANTE MENO VALEN: "+valen14_1);
console.log("OPERAZIONE TOT VALEN 8: "+valen14);
console.log("EL TR PARSE: "+el_tr_parse);
console.log("BIO_FR_PARSE "+bio_fr_parse);

//----PERCENTUALE SOTTO AL TITOLO---
var grand_total_1 = (Number(sommawfbfood)+Number(sommawfbenergy));
console.log("GRAND TOTAL ANTE FOOD ENERGY SOMMA: "+grand_total_1);
var grand_total_2 = grand_total_1-(Number(initial_value_wfb_int));
console.log("GRAND TOTAL ANTE FOOD ENERGY SECONDA DOMMA: "+grand_total_2);
var grand_total_ante = (grand_total_2/Number(initial_value_wfb_int));
console.log("GRAND TOTAL ANTE FOOD ENERGY: "+grand_total_ante);
var grand_total_round = (grand_total_ante)*100;
var number= (grand_total_round);
console.log("GRAND TOTAL ROUND 2: "+number);

var neg_to_pos = Math.abs(number);
var grand_total = Math.round(neg_to_pos); //0
console.log("GRAND TOTAL ROUND 2-2 : "+grand_total);

document.getElementById("percent4").innerHTML =  grand_total+ "% above initial value";


//////////////////////////////////////////////////////////////////
// ===================== AGGIORNAMENTO DATI DA UTILIZZARE IN RELATIONSEU.JS ======================================================================
var checkregion = document.querySelector('input[name="region"]:checked');
var region = checkregion.getAttribute("id");
regionDataOutput = localStorage.getItem(region+'DataOutput');
regionDataOutput = JSON.parse(regionDataOutput);

regionDataOutput["WFblue_Food_Internal"] = WFblue_Food_Internal;
regionDataOutput["WFblue_Food_External"] = WFblue_Food_External;
regionDataOutput["WFblue_Energy_Internal"] = WFblue_Energy_Internal;
regionDataOutput["WFblue_Energy_external"] = WFblue_Energy_external;

if(region == "regionA") {
	localStorage.setItem("regionADataOutput", JSON.stringify(regionDataOutput));
}
else if(region == "regionB") {
	localStorage.setItem("regionBDataOutput", JSON.stringify(regionDataOutput));
}
else if(region == "regionC") {
	localStorage.setItem("regionCDataOutput", JSON.stringify(regionDataOutput));
}
else {
	localStorage.setItem("regionDDataOutput", JSON.stringify(regionDataOutput));
}
// ===============================================================================================================================================
			
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


/*var checkregionyg = document.querySelector('input[name="region"]:checked'); 
if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')&&(measure=='1')) {
var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Irrigation_CF;
var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Irrigation_LF;
var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Irrigation_WFg;
var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Irrigation_WFb;

	
	Deficit = Irrigated* deficit_irrigation_cf;
} 
else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')&&(measure=='2')) {
	var deficit_irrigation_cf = Full_Deficit_parse*Mulching_CF;
	var deficit_irrigation_lf = Full_Deficit_parse*Mulching_LF;
	var deficit_irrigation_wfg = Full_Deficit_parse*Mulching_WFg;
	var deficit_irrigation_wfb = Full_Deficit_parse*Mulching_WFb;
	
	Deficit = Irrigated* deficit_irrigation_cf;
	}
else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')&&(measure=='3')) {
	var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_Drip_CF;
	var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Mul_Drip_LF;
	var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Mul_Drip_WFg;
	var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Mul_Drip_WFb;
	
	Deficit = Irrigated* deficit_irrigation_cf;
	} 
if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')&&(measure=='1')) {
	var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Irrigation_CF;
	var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Irrigation_LF;
	var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Irrigation_WFg;
	var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Irrigation_WFb;

		
		Deficit = Irrigated* deficit_irrigation_cf;
	} 
else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')&&(measure=='2')) {
	var deficit_irrigation_cf = Full_Deficit_parse*Mulching_CF;
	var deficit_irrigation_lf = Full_Deficit_parse*Mulching_LF;
	var deficit_irrigation_wfg = Full_Deficit_parse*Mulching_WFg;
	var deficit_irrigation_wfb = Full_Deficit_parse*Mulching_WFb;
	
	Deficit = Irrigated* deficit_irrigation_cf;
	}
else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')&&(measure=='3')) {
	var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_Drip_CF;
	var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Mul_Drip_LF;
	var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Mul_Drip_WFg;
	var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Mul_Drip_WFb;
	
	Deficit = Irrigated* deficit_irrigation_cf;
	} 
if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')&&(measure=='1')) {
	var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Irrigation_CF;
	var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Irrigation_LF;
	var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Irrigation_WFg;
	var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Irrigation_WFb;

		
		Deficit = Irrigated* deficit_irrigation_cf;
	} 
else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')&&(measure=='2')) {
	var deficit_irrigation_cf = Full_Deficit_parse*Mulching_CF;
	var deficit_irrigation_lf = Full_Deficit_parse*Mulching_LF;
	var deficit_irrigation_wfg = Full_Deficit_parse*Mulching_WFg;
	var deficit_irrigation_wfb = Full_Deficit_parse*Mulching_WFb;
	
	Deficit = Irrigated* deficit_irrigation_cf;
	}
else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')&&(measure=='3')) {
	var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_Drip_CF;
	var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Mul_Drip_LF;
	var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Mul_Drip_WFg;
	var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Mul_Drip_WFb;
	
	Deficit = Irrigated* deficit_irrigation_cf;
	} 
if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')&&(measure=='1')) {
	var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Irrigation_CF;
	var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Irrigation_LF;
	var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Irrigation_WFg;
	var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Irrigation_WFb;

		
		Deficit = Irrigated* deficit_irrigation_wfb;
	} 
else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')&&(measure=='2')) {
	var deficit_irrigation_cf = Full_Deficit_parse*Mulching_CF;
	var deficit_irrigation_lf = Full_Deficit_parse*Mulching_LF;
	var deficit_irrigation_wfg = Full_Deficit_parse*Mulching_WFg;
	var deficit_irrigation_wfb = Full_Deficit_parse*Mulching_WFb;
	
	Deficit = Irrigated* deficit_irrigation_wfb;
	}
else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')&&(measure=='3')) {
	var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_Drip_CF;
	var deficit_irrigation_lf = Full_Deficit_parse*Deficit_Mul_Drip_LF;
	var deficit_irrigation_wfg = Full_Deficit_parse*Deficit_Mul_Drip_WFg;
	var deficit_irrigation_wfb = Full_Deficit_parse*Deficit_Mul_Drip_WFb;
	
	Deficit = Irrigated* deficit_irrigation_wfb;
	} else {}*/