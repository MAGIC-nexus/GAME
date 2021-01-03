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
var RC_WFgreen_Meat = 1.90;  var RC_WFblue_Meat = 0.10;  var RC_LF_Meat = 0.0140;
var RC_WFgreen_Diary = 0.90;  var RC_WFblue_Diary = 0.10;  var RC_LF_Diary =  0.0070;

var RD_WFgreen_Plant =0.44;  var RD_WFblue_Plant = 0.11;  var RD_LF_Plant = 0.001;
var RD_WFgreen_Meat = 2.61;  var RD_WFblue_Meat = 0.14;  var RD_LF_Meat =  0.0140;
var RD_WFgreen_Diary = 1.24; var RD_WFblue_Diary = 0.14;  var RD_LF_Diary = 0.0070;
	
//VALLRI ENERGY PER REGIONE WF GREEN, WF BLUE, LF, CF - CF UGUALE PER TUTTE LE REGIONI,
//TABELLA C E D SONO IDENTICHE.
var RA_WFgreen_Wind=0;  var RA_WFblue_Wind= 1.3;  var RA_LF_Wind= 0.194444444444444; var RA_CF_Wind= 6.11111111111111;   
var RA_WFgreen_Solar=0.00;  var RA_WFblue_Solar=140.00; var RA_LF_Solar=2.41666666666667;   var RA_CF_Solar= 28.1944444444444;
var RA_WFgreen_Hydro =0.00; var RA_WFblue_Hydro=9114.00; var RA_LF_Hydro =0.972222222222222; var RA_CF_Hydro = 3.05555555555556;
var RA_WFgreen_Biofuel=90000.00; var RA_WFblue_Biofuel=10000.00; var RA_LF_Biofuel= 125.000;var RA_CF_Biofuel= 19.2361111111111;
var RA_WFgreen_Nuclear=0.00;  var RA_WFblue_Nuclear=567.00; var RA_LF_Nuclear=0.277777777777778; var RA_CF_Nuclear= 5.27777777777778;
var RA_WFgreen_Fossil =0.00;  var RA_WFblue_Fossil=388.00; var RA_LF_Fossil=0.0277777777777778; var RA_CF_Fossil= 219.113420579933;

var RB_WFgreen_Wind = 0;  var RB_WFblue_Wind =1.3;  var RB_LF_Wind = 0.194444444444444;
var RB_WFgreen_Solar =0;	var RB_WFblue_Solar =140; var RB_LF_Solar =	2.41666666666667;	
var RB_WFgreen_Hydro =0; var RB_WFblue_Hydro =9114.00; var RB_LF_Hydro = 0.972222222222222;
var RB_WFgreen_Biofuel =90; var RB_blue_Biofuel =10.00; var RB_LF_Biofuel = 125.000;
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
var initial_grafici_sotto_cf = 0;
var initial_grafici_sotto_lf = 0;
var initial_grafici_sotto_wfg = 0; 
var initial_grafici_sotto_wfb = 0;


var checkregionyg = document.querySelector('input[name="region"]:checked'); 
	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) { 
		initial_grafici_sotto_cf = 19,4222147302057;
		initial_grafici_sotto_lf = 12,7584446196396;
		initial_grafici_sotto_wfg = 4925,59461647378; 
		initial_grafici_sotto_wfb = 706,392879868536;
		
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
		initial_grafici_sotto_cf = 16,0382602602946;
		initial_grafici_sotto_lf = 17,5722349061939;
		initial_grafici_sotto_wfg = 4268,10029051245; 
		initial_grafici_sotto_wfb = 778,891616823503;
		
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
		initial_grafici_sotto_cf = 21,6588949651205;
		initial_grafici_sotto_lf = 14,0228331849227;
		initial_grafici_sotto_wfg = 2203,92134030049; 
		initial_grafici_sotto_wfb = 315,813317570171;
		
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
		initial_grafici_sotto_cf = 19,9700553409741;
		initial_grafici_sotto_lf = 15,7989203958875;
		initial_grafici_sotto_wfg = 3357,73329112609; 
		initial_grafici_sotto_wfb = 476,567226405299;
		
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

var measure = document.getElementById("Measure").value;
//button clicks
var sustainableCF = "0"; var physicalCF = "0";

var sustainableLF = "0"; 
var physicalLF = "0"; 
var LF_temp = 0;

var sustainableWFG = "0"; 
var physicalWFG = "0"; 
var WFG_temp = 0;

var sustainableWFB = "0"; 
var physicalWFB = "0"; 
var WFB_temp = 0;


var checkregion = document.querySelector('input[name="region"]:checked'); 
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
	sustainableCF = "0";
	physicalCF = "0";
	
	sustainableLF = "10";
		physicalLF = "21";
		
		sustainableWFG = "3533";
		physicalWFG = "8834";
			
		sustainableWFB = "1550";
		physicalWFB = "5710";
	
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
	sustainableCF = "0";
	physicalCF = "0";
	
	sustainableLF = "21";
		physicalLF = "72";
		
		sustainableWFG = "13098";
		physicalWFG = "32746";
			
		sustainableWFB = "3825";
		physicalWFB = "12749";
	
	
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
	
	sustainableCF = "0";
	physicalCF = "0";
	
	sustainableLF = "8";
		physicalLF = "14";
		
		sustainableWFG = "2369";
		physicalWFG = "5923";
			
		sustainableWFB = "262";
		physicalWFB = "873";
		
	
}
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
	
	sustainableCF = "0";
	physicalCF = "0";
	
	sustainableLF = "18";
		physicalLF = "30";
		
		sustainableWFG = "5179";
		physicalWFG = "12947";
			
		sustainableWFB = "344";
		physicalWFB = "1146";

} else {}
//fine button clicks




//////////////////////////////////////////////////////////////////////////
// ----------------------------------------------------------------------------------------------------------------------------------
//$(window).on("load", function () {
window.addEventListener("load", function () {
	
function limits() {
	var checkregion = document.querySelector('input[name="region"]:checked'); 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
		sustainableCF = "0";
		physicalCF = "0";
		
		sustainableLF = "10";
		physicalLF = "21";
		
		sustainableWFG = "3533";
		physicalWFG = "8834";
			
		sustainableWFB = "1550";
		physicalWFB = "5710";
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
		sustainableCF = "0";
		physicalCF = "0";
	
		sustainableLF = "21";
		physicalLF = "72";
		
		sustainableWFG = "13098";
		physicalWFG = "32746";
			
		sustainableWFB = "3825";
		physicalWFB = "12749";
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
		sustainableCF = "0";
		physicalCF = "0";
	
		sustainableLF = "8";
		physicalLF = "14";
		
		sustainableWFG = "2369";
		physicalWFG = "5923";
			
		sustainableWFB = "262";
		physicalWFB = "873";
	}
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
		
		sustainableCF = "0";
		physicalCF = "0";
	
		sustainableLF = "18";
		physicalLF = "30";
		
		sustainableWFG = "5179";
		physicalWFG = "12947";
			
		sustainableWFB = "344";
		physicalWFB = "1146";
	} else {}
//fine button clicks
}
	
/* var $primary = '#5A8DEE',
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


  	var themeColors = [$primary, $warning, $danger, $success, $info, $label_color]; */
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


  	//var themeColors = [$primary, $warning, $danger, $success, $info, $world];
  	var themeColors = [$security1, $security2, $security3, $security4, $security5];
  	
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
  		          display: false,
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
  		      text: 'Carbon Footprint (kg CO2/cap/day)'
  		    },
  		 
  		  };

  		  // Chart Data
  		  var horizontalchartData = {
  		   labels: [""],
  	            
  		    datasets: [{
  		      label: "Local",
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
    	var checkregiong = document.querySelector('input[name="region"]:checked'); 
    		if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionA')) { 
    			//percentuali sotto al titolo sotto
    			initial_grafici_sotto_cf = 19.4222147302057;
    			initial_grafici_sotto_lf = 12.7584446196396;
    			initial_grafici_sotto_wfg = 4925.59461647378; 
    			initial_grafici_sotto_wfb = 706.392879868536;
    			//percentuali sotto al titolo sopra
    		 initial_value_cf_int = 24.4212022139062;  initial_value_lf_int = 13.2551883468376;
    		 initial_value_wfg_int = 5191.68997367378;  initial_value_wfb_int = 773.876129386631;
    		 
    		 //percentuali energy e food tra i due grafici
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
    			//percentuali sotto al titolo
    			initial_grafici_sotto_cf = 16.0382602602946;
    			initial_grafici_sotto_lf = 17.5722349061939;
    			initial_grafici_sotto_wfg = 4268.10029051245; 
    			initial_grafici_sotto_wfb = 778.891616823503;
    			
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
    			initial_grafici_sotto_cf = 21.6588949651205;
    			initial_grafici_sotto_lf = 14.0228331849227;
    			initial_grafici_sotto_wfg = 2203.92134030049; 
    			initial_grafici_sotto_wfb = 315.813317570171;
    			
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
    			initial_grafici_sotto_cf = 19.9700553409741;
    			initial_grafici_sotto_lf = 15.7989203958875;
    			initial_grafici_sotto_wfg = 3357.73329112609; 
    			initial_grafici_sotto_wfb = 476.567226405299;
    			
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
    	
    	var measure = document.getElementById("Measure").value;
    	//button clicks
    	var sustainableCF = "0"; var physicalCF = "0";

    	var sustainableLF = "0"; 
    	var physicalLF = "0"; 

    	var sustainableWFG = "0"; 
    	var physicalWFG = "0"; 

    	var sustainableWFB = "0"; 
    	var physicalWFB = "0"; 

    	var checkregion = document.querySelector('input[name="region"]:checked'); 
    	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
    		sustainableCF = "0";
    		physicalCF = "0";
    	}
    	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
    		sustainableCF = "0";
    		physicalCF = "0";
    	}
    	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
    		sustainableCF = "0";
    		physicalCF = "0";
    	}
    	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
    		sustainableCF = "0";
    		physicalCF = "0";
    	} else {}
    	//fine button clicks
    	
    	//----------------------------------------------------------------------------------
    	var daysp = parseFloat(document.getElementById("A8_f").value); 
    	//----------------------------------------------------------------------------------
    	var intakeparse = parseFloat(document.getElementById("f_D4").value);
    	////////console.log("intake: "+intakeparse);
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
//    		//////console.log("MULCHING PARSE: "+Mulching_parse);
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
    	//var Deficit = Full_Deficit_parse*Deficit_Mul_Drip_CF;
    	var measure = document.getElementById("Measure").value;	
    	var Deficit = 0;
    	var checkregionyg = document.querySelector('input[name="region"]:checked'); 
    	if (measure='1') {
    		if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
    	var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Irrigation_CF;	
    		Deficit = Irrigated* deficit_irrigation_cf;
    		}
    		
    		else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
    			var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Irrigation_CF;
    				Deficit = Irrigated* deficit_irrigation_cf;
    			} 	
    		else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
    			
    			var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Irrigation_CF;	
    				Deficit = Irrigated* deficit_irrigation_cf;
    			} 	
    		else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
    			var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Irrigation_CF;
    				Deficit = Irrigated* deficit_irrigation_cf;
    			}
    		}//VALUE 1 FINE
    	//VALUE 2 INIZIO
    		
    	else if(measure='2') {
    	if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
    		var deficit_irrigation_cf = Full_Deficit_parse*Mulching_CF;
    		Deficit = Irrigated* deficit_irrigation_cf;
    		}
    	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
    		var deficit_irrigation_cf = Full_Deficit_parse*Mulching_CF;	
    		Deficit = Irrigated* deficit_irrigation_cf;
    	}

    	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
    		var deficit_irrigation_cf = Full_Deficit_parse*Mulching_CF;	
    		Deficit = Irrigated* deficit_irrigation_cf;
    	}
    	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
    		var deficit_irrigation_cf = Full_Deficit_parse*Mulching_CF;	
    		Deficit = Irrigated* deficit_irrigation_cf;
    		}else{}
    	}
    	//VALUE 2 FINE
    	//VALUE 3 INIZIO
    	else if(measure='3') {
    		if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
    		var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_Drip_CF;
    		Deficit = Irrigated* deficit_irrigation_cf;
    		}	
    		else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
    			var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_Drip_CF;
    			Deficit = Irrigated* deficit_irrigation_cf;
    			} 
    		else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
    			var deficit_irrigation_cf = Full_Deficit_parse*Deficit_Mul_Drip_CF;
    			Deficit = Irrigated* deficit_irrigation_cf;
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

    	//////console.log("==========INIZIO ENERGY CF============");	  
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
    	var checkregion = document.querySelector('input[name="region"]:checked'); 
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
    	////console.log("f_i:"+f_i+"f_s:"+f_s+"f_t:"+f_t+"f_h:"+f_h+"FOSSIL TOTAL = : "+total_fossil_user);

    	var energy_fossil_val = (total_fossil_user)*(1-Number(fossilf_parse));
    	////console.log("ENERGY FOSSIL CF INT = EnergyM29 (ok)= "+energy_fossil_val);
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
    	////console.log("FOSSIL CF INT = EnergyJ34 (ok)= "+fossil_final_cf);

    	//-----------------------------------------------------------------------------------------------------
    	//calcolo valori iniziali di BIOFUEL USER:	  
    	var bio_i_primaop = (A6a)-(A6b);
    	var b_i = (bio_fr_parse)*(A6b);
    	var b_t = (bio_fr_parse)*(B6a-B6b);
    	var b_s = (bio_fr_parse)*(C6a-C6b);
    	var b_h = (bio_fr_parse)*(D6a);

    	var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
    	////console.log("b_i:"+b_i+"b_s:"+b_s+"b_t:"+b_t+"b_h:"+b_h+"BIO TOTAL = : "+total_bio_user);
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

    	////console.log("BIO CF INT = EnergyJ35 (ok) =  "+bio_final_cf);

    	//-----------------------------------------------------------------------------------------------------
    	var e_i = (1-Number(red_ind_parse))*el_ind;
    	var e_t = (el_tr_parse)*(B6a);
    	var e_s = (1-red_ind_parse)*Number(el_s);
    	e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
    	////console.log("MOLTIPLICAZIONE ELEC SERVICES = F29 (ok) =  "+e_s);  	
    	var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
    	var energy_elec_val = (total_el_user)*((1-Number(elec_parse)));
    	////console.log("M29 ELECTRICITY VALORE PER MATR. SOMMA PROD"+energy_elec_val);

    	////console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);
    	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 

    		var elec1= (windp)*(RA_CF_Wind);
    		//////console.log("SOMMA ELEC1: "+elec1);
    		var elec2 =(solarp)*(RA_CF_Solar);
    		var elec3 =(hydrop)*(RA_CF_Hydro);
    		var elec4 =(biofuelp)*(RA_CF_Biofuel);
    		var elec5 =(nuclearp)*(RA_CF_Nuclear);
    		var elec6 =(fuelp)*(RA_CF_Fossil); 	

    	}
    	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 

    		var elec1= (windp)*(RA_CF_Wind);
    		//////console.log("SOMMA ELEC1: "+elec1);
    		var elec2 =(solarp)*(RA_CF_Solar);
    		var elec3 =(hydrop)*(RA_CF_Hydro);
    		var elec4 =(biofuelp)*(RA_CF_Biofuel);
    		var elec5 =(nuclearp)*(RA_CF_Nuclear);
    		var elec6 =(fuelp)*(RA_CF_Fossil); 	

    	}
    	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 

    		var elec1= (windp)*(RA_CF_Wind);
    		//////console.log("SOMMA ELEC1: "+elec1);
    		var elec2 =(solarp)*(RC_D_CF_Solar);
    		var elec3 =(hydrop)*(RC_D_CF_Hydro);
    		var elec4 =(biofuelp)*(RC_D_CF_Biofuel);
    		var elec5 =(nuclearp)*(RC_D_CF_Nuclear);
    		var elec6 =(fuelp)*(RC_D_CF_Fossil); 	

    	}
    	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 

    		var elec1= (windp)*(RA_CF_Wind);
    		//////console.log("SOMMA ELEC1: "+elec1);
    		var elec2 =(solarp)*(RC_D_CF_Solar);
    		var elec3 =(hydrop)*(RC_D_CF_Hydro);
    		var elec4 =(biofuelp)*(RC_D_CF_Biofuel);
    		var elec5 =(nuclearp)*(RC_D_CF_Nuclear);
    		var elec6 =(fuelp)*(RC_D_CF_Fossil); 	


    	} else {}
    	var elec1add = (elec1)+(elec2);
    	var elec2add = (elec3)+(elec4);
    	var elec3add = (elec5)+(elec6);


    	var electricity_sum = (elec1add)+(elec2add)+(elec3add);

    	var elec_final_cf = (energy_elec_val)*(electricity_sum)/1000;
    	////console.log("ENERGY ELEC TOTAL CF "+elec_final_cf);
    	//-----------------------------------------------------------------------------------------------
    	var datoCFen_internal = elec_final_cf+bio_final_cf+fossil_final_cf;
    	////console.log("ENERGY TOTAL CF "+datoCFen_internal);
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
    		var elec1= (windp)*(RA_CF_Wind);
    		//////console.log("SOMMA ELEC1: "+elec1);
    		var elec2 =(solarp)*(RA_CF_Solar);
    		var elec3 =(hydrop)*(RA_CF_Hydro);
    		var elec4 =(biofuelp)*(RA_CF_Biofuel);
    		var elec5 =(nuclearp)*(RA_CF_Nuclear);
    		var elec6 =(fuelp)*(RA_CF_Fossil); 
    	}
    	else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) { 
    		var elec1= (windp)*(RA_CF_Wind);
    		//////console.log("SOMMA ELEC1: "+elec1);
    		var elec2 =(solarp)*(RC_D_CF_Solar);
    		var elec3 =(hydrop)*(RC_D_CF_Hydro);
    		var elec4 =(biofuelp)*(RC_D_CF_Biofuel);
    		var elec5 =(nuclearp)*(RC_D_CF_Nuclear);
    		var elec6 =(fuelp)*(RC_D_CF_Fossil); 
    	}
    	else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) { 
    		var elec1= (windp)*(RC_D_CF_Wind);
    		//////console.log("SOMMA ELEC1: "+elec1);
    		var elec2 =(solarp)*(RC_D_CF_Solar);
    		var elec3 =(hydrop)*(RC_D_CF_Hydro);
    		var elec4 =(biofuelp)*(RC_D_CF_Biofuel);
    		var elec5 =(nuclearp)*(RC_D_CF_Nuclear);
    		var elec6 =(fuelp)*(RC_D_CF_Fossil); 
    	} 
    	else {
    		var elec1= (windp)*(RC_D_CF_Wind);
    		//////console.log("SOMMA ELEC1: "+elec1);
    		var elec2 =(solarp)*(RC_D_CF_Solar);
    		var elec3 =(hydrop)*(RC_D_CF_Hydro);
    		var elec4 =(biofuelp)*(RC_D_CF_Biofuel);
    		var elec5 =(nuclearp)*(RC_D_CF_Nuclear);
    		var elec6 =(fuelp)*(RC_D_CF_Fossil); 
    	}

    	var elec1add = (elec1)+(elec2);
    	var elec2add = (elec3)+(elec4);
    	var elec3add = (elec5)+(elec6);

    	var electricity_sum_ext = (elec1add)+(elec2add)+(elec3add);
    	var energy_elec_val_ext = (total_el_user)*(Number(electricity_sum_ext));
    	var elec_final_cf_ext = (energy_elec_val_ext)*(elec_parse)/1000;

    	//----------------------------------------------------------------------------------------------
    	var datoCFen_external = elec_final_cf_ext+bio_final_cf_ext+fossil_final_cf_ext;

//////////////////////////////////////////////////////////////////
    	  /////////////////////////////////////////////////////////////////	
    	  	  	  
    	    	var titoloCF_sotto = parseFloat(Number(dataCF_food_int)+Number(datoCFen_internal)).toFixed(1);
    	    	document.getElementById("GT1_sotto").innerHTML = titoloCF_sotto;
    	  	
    	    	
    	    	//----PERCENTUALE SOTTO AL TITOLO---
    /*	    	var prima = Math.round(Number(dataCF_food_int)+Number(datoCFen_internal));
    	 var grand_total_ante = (prima-initial_grafici_sotto_cf)/initial_grafici_sotto_cf;
			//console.log("WFBLUE PRIMA DEL TITOLO, CALCOLO TITOLO PERCENTUALE "+grand_total_ante);
    	    	//var grand_total_ante = Math.round(Number(dataCF_food_int)+Number(datoCFen_internal)-initial_grafici_sotto_cf)/initial_grafici_sotto_cf;
    	    	var grand_total_round = (grand_total_ante);
    	    	var number= Number(grand_total_round);
    	    	var grand_total = 0;
    	    	var grand_total_abs = 0; */
    	    	
    	    	//----PERCENTUALE SOTTO AL TITOLO---
    	    	var grand_total_1 = (Number(dataCF_food_int)+Number(datoCFen_internal));
    	    	console.log("GRAND TOTAL ANTE FOOD ENERGY SOMMA: "+grand_total_1);
    	    	var grand_total_2 = grand_total_1-(Number(initial_grafici_sotto_cf));
    	    	console.log("GRAND TOTAL ANTE FOOD ENERGY SECONDA DOMMA: "+grand_total_2);
    	    	var grand_total_ante = (grand_total_2/Number(initial_grafici_sotto_cf));
    	    	console.log("GRAND TOTAL ANTE FOOD ENERGY: "+grand_total_ante);
    	    	var grand_total_round = (grand_total_ante)*100;
    	    	var number= (grand_total_round);
    	    	console.log("GRAND TOTAL ROUND 2: "+number);

    	    	var neg_to_pos = Math.abs(number);
    	    	var grand_total = Math.round(neg_to_pos); //0
    	    	console.log("GRAND TOTAL ROUND 2-2 : "+grand_total);

    	    	document.getElementById("percent1_sotto").innerHTML = grand_total + "% above initial value";
    	   
    	    	if (initial_grafici_sotto_cf<titoloCF_sotto) {
    	    		document.getElementById("percent1_sotto").innerHTML = grand_total+ "% above initial value";
    	    		}
    	    		else {
    	    			document.getElementById("percent1_sotto").innerHTML = grand_total+ "% below initial value";
    	    		}

    	    		console.log("ABOVE-BELOW: "+initial_value_cf_int+" e titolo: "+grand_total);
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
  		          display: false,
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
  		      text: 'Land Footprint (m2/cap/day)'
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
			                value: physicalLF,
			                borderColor: "red",
			                borderWidth: 3,
			                label: {
			                  backgroundColor: "red",
			                  content: "Physical Limit:"+physicalLF,
			                  enabled: false
			                },
			                onMouseover: function(e) {
			    				var element = this;
			    				element.options.borderWidth = 5;
			    				element.options.label.enabled = true;
			    				element.options.label.content = "Physical Limit:"+physicalLF;
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
			                value: sustainableLF,
			                borderColor: "yellow",
			                borderWidth: 3,
			                label: {
			                  backgroundColor: "yellow",
			                  content: "Sustainable Limit:"+sustainableLF,
			                  enabled: false
			                },
			                onMouseover: function(e) {
			    				var element = this;
			    				element.options.borderWidth = 5;
			    				element.options.label.enabled = true;
			    				element.options.label.backgroundColor = "black";
			    				element.options.label.content = "Sustainable Limit:"+sustainableLF;
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
  		  var horizontalchartData2 = {
  		    labels: [""],
  		    datasets: [{
  		      label: "Local",
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
  		var checkregiong = document.querySelector('input[name="region"]:checked'); 
		if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionA')) { 
			initial_grafici_sotto_cf = 19.4222147302057;
			initial_grafici_sotto_lf = 12.7584446196396;
			initial_grafici_sotto_wfg = 4925.59461647378; 
			initial_grafici_sotto_wfb = 706.392879868536;
			
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
			initial_grafici_sotto_cf = 16.0382602602946;
			initial_grafici_sotto_lf = 17.5722349061939;
			initial_grafici_sotto_wfg = 4268.10029051245; 
			initial_grafici_sotto_wfb = 778.891616823503;
			
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
			initial_grafici_sotto_cf = 21.6588949651205;
			initial_grafici_sotto_lf = 14.0228331849227;
			initial_grafici_sotto_wfg = 2203.92134030049; 
			initial_grafici_sotto_wfb = 315.813317570171;
			
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
			initial_grafici_sotto_cf = 19.9700553409741;
			initial_grafici_sotto_lf = 15.7989203958875;
			initial_grafici_sotto_wfg = 3357.73329112609; 
			initial_grafici_sotto_wfb = 476.567226405299;
			
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
  		var measure = document.getElementById("Measure").value;
  	//button clicks
  	var sustainableCF = "0"; var physicalCF = "0";

  	var sustainableLF = "0"; 
  	var physicalLF = "0"; 

  	var sustainableWFG = "0"; 
  	var physicalWFG = "0"; 

  	var sustainableWFB = "0"; 
  	var physicalWFB = "0"; 



  	var checkregion = document.querySelector('input[name="region"]:checked'); 
  	//alert("VALORE di CheckRegion: "+checkregion.getAttribute('id'));
  	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
  		sustainableLF = "10";
  		physicalLF = "21";	
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
  		sustainableLF = "20";
  		physicalLF = "72";
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
		sustainableLF = "8";
  		physicalLF = "14"; 			
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
		sustainableLF = "18";
  		physicalLF = "30";
 	} else {}
 	//alert("sustainableLF: "+sustainableLF+" physicalLF: "+physicalLF);
  	//fine button clicks

  		//----------------------------------------------------------------------------------
  		var daysp = parseFloat(document.getElementById("A8_f").value); 
  		//----------------------------------------------------------------------------------
  		var intakeparse = parseFloat(document.getElementById("f_D4").value);
  		////////console.log("intake: "+intakeparse);
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
//  			//////console.log("MULCHING PARSE: "+Mulching_parse);
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
  		var measure = document.getElementById("Measure").value;	
  		var Deficit = 0;
  		var checkregionyg = document.querySelector('input[name="region"]:checked'); 
  		if (measure='1') {
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
  			
  		else if(measure='2') {
  		if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
  			var deficit_irrigation_lf = Full_Deficit_parse*Mulching_LF;
  			Deficit = Irrigated* deficit_irrigation_lf;
  			}
  		else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
  			var deficit_irrigation_lf = Full_Deficit_parse*Mulching_LF;	
  			Deficit = Irrigated* deficit_irrigation_lf;
  		}

  		else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
  			var deficit_irrigation_lf = Full_Deficit_parse*Mulching_LF;	
  			Deficit = Irrigated* deficit_irrigation_lf;
  		}
  		else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
  			var deficit_irrigation_lf = Full_Deficit_parse*Mulching_LF;	
  			Deficit = Irrigated* deficit_irrigation_lf;
  			}else{}
  		}
  		//VALUE 2 FINE
  		//VALUE 3 INIZIO
  		else if(measure='3') {
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
  		////console.log("VALORE FOOD EXT LF TOTAL = Food.N21 : "+dataLF_food_ext);
  		//////console.log("==============FINE FOOD LF=======================");


  		//----------------------------------------------------------------------------------------------------------------------

  		//////console.log("==========INIZIO ENERGY LF============");	  
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
  		////console.log("FOSSIL LF INT = EnergyI34 (ok)= "+fossil_final_lf);

  		//-----------------------------------------------------------------------------------------------------
  		//calcolo valori iniziali di BIOFUEL USER:	  
  		var bio_i_primaop = (A6a)-(A6b);
  		var b_i = (bio_fr_parse)*(A6b);
  		var b_t = (bio_fr_parse)*(B6a-B6b);
  		var b_s = (bio_fr_parse)*(C6a-C6b);
  		var b_h = (bio_fr_parse)*(D6a);

  		var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
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
  		////console.log("BIO LF INT = EnergyI35 (ok) =  "+bio_final_lf);

  		//-----------------------------------------------------------------------------------------------------
  		var e_i = (1-(red_ind_parse))*el_ind;
  		var e_t = (el_tr_parse)*(B6a);
  		var e_s = (1-red_ind_parse)*Number(el_s);
  		e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
  				  	
  		var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
  		var energy_elec_val = (total_el_user)*((1-(elec_parse)));

  		//////console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);
  		var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
  		if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
  			var elec1= (windp)*(RB_LF_Wind);
  			//////console.log("SOMMA ELEC1: "+elec1);
  			var elec2 =(solarp)*(RB_LF_Solar);
  			var elec3 =(hydrop)*(RB_LF_Hydro);
  			var elec4 =(biofuelp)*(RB_LF_Biofuel);
  			var elec5 =(nuclearp)*(RB_LF_Nuclear);
  			var elec6 =(fuelp)*(RB_LF_Fossil); 	
  		}   
  		if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
  			var elec1= (windp)*(RC_D_LF_Wind);
  			//////console.log("SOMMA ELEC1: "+elec1);
  			var elec2 =(solarp)*(RC_D_LF_Solar);
  			var elec3 =(hydrop)*(RC_D_LF_Hydro);
  			var elec4 =(biofuelp)*(RC_D_LF_Biofuel);
  			var elec5 =(nuclearp)*(RC_D_LF_Nuclear);
  			var elec6 =(fuelp)*(RC_D_LF_Fossil); 	
  		}   
  		if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
  			var elec1= (windp)*(RC_D_LF_Wind);
  			//////console.log("SOMMA ELEC1: "+elec1);
  			var elec2 =(solarp)*(RC_D_LF_Solar);
  			var elec3 =(hydrop)*(RC_D_LF_Hydro);
  			var elec4 =(biofuelp)*(RC_D_LF_Biofuel);
  			var elec5 =(nuclearp)*(RC_D_LF_Nuclear);
  			var elec6 =(fuelp)*(RC_D_LF_Fossil); 	
  			}   
  		else {

  		var elec1= (windp)*(RA_LF_Wind);
  		//////console.log("SOMMA ELEC1: "+elec1);
  		var elec2 =(solarp)*(RA_LF_Solar);
  		var elec3 =(hydrop)*(RA_LF_Hydro);
  		var elec4 =(biofuelp)*(RA_LF_Biofuel);
  		var elec5 =(nuclearp)*(RA_LF_Nuclear);
  		var elec6 =(fuelp)*(RA_LF_Fossil); 	
  		}

  		var elec1add = (elec1)+(elec2);
  		var elec2add = (elec3)+(elec4);
  		var elec3add = (elec5)+(elec6);

  		var electricity_sum = (elec1add)+(elec2add)+(elec3add);

  		var elec_final_lf = (energy_elec_val)*(electricity_sum)/1000;
  		////console.log("ELECTRICITY LF INT = Energy.I36 (ok) = : "+elec_final_lf);
  		//-----------------------------------------------------------------------------------------------
  		var datoLFen_internal = elec_final_lf+bio_final_lf+fossil_final_lf;
  		////console.log("TOT LF ENERGY INTERNAL = Energy.I37 (ok): "+datoLFen_internal);
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

  		//var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
  		if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
  			var elec1= (windp)*(RA_LF_Wind);
  			var elec2 =(solarp)*(RA_LF_Solar);
  			var elec3 =(hydrop)*(RA_LF_Hydro);
  			var elec4 =(biofuelp)*(RA_LF_Biofuel);
  			var elec5 =(nuclearp)*(RA_LF_Nuclear);
  			var elec6 =(fuelp)*(RA_LF_Fossil); 	
  		}   
  		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
  			var elec1= (windp)*(RB_LF_Wind);
  			var elec2 =(solarp)*(RB_LF_Solar);
  			var elec3 =(hydrop)*(RB_LF_Hydro);
  			var elec4 =(biofuelp)*(RB_LF_Biofuel);
  			var elec5 =(nuclearp)*(RB_LF_Nuclear);
  			var elec6 =(fuelp)*(RB_LF_Fossil); 	
  		}  
  		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
  			var elec1= Number(windp)*Number(RC_D_LF_Wind);
  			var elec2 =Number(solarp)*Number(RC_D_LF_Solar);
  			var elec3 =Number(hydrop)*Number(RC_D_LF_Hydro);
  			var elec4 =Number(biofuelp)*Number(RC_D_LF_Biofuel);
  			var elec5 =Number(nuclearp)*Number(RC_D_LF_Nuclear);
  			var elec6 =Number(fuelp)*Number(RC_D_LF_Fossil); 	
  			}  
  		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
  			var elec1= Number(windp)*Number(RC_D_LF_Wind);
  			var elec2 =Number(solarp)*Number(RC_D_LF_Solar);
  			var elec3 =Number(hydrop)*Number(RC_D_LF_Hydro);
  			var elec4 =Number(biofuelp)*Number(RC_D_LF_Biofuel);
  			var elec5 =Number(nuclearp)*Number(RC_D_LF_Nuclear);
  			var elec6 =Number(fuelp)*Number(RC_D_LF_Fossil); 	
  			}  
  		else {
  			/*var elec1= Number(windp)*Number(RC_D_LF_Wind);
  			var elec2 =Number(solarp)*Number(RC_D_LF_Solar);
  			var elec3 =Number(hydrop)*Number(RC_D_LF_Hydro);
  			var elec4 =Number(biofuelp)*Number(RC_D_LF_Biofuel);
  			var elec5 =Number(nuclearp)*Number(RC_D_LF_Nuclear);
  			var elec6 =Number(fuelp)*Number(RC_D_LF_Fossil); */
  		}

  		var elec1add = (elec1)+(elec2);
  		var elec2add = (elec3)+(elec4);
  		var elec3add = (elec5)+(elec6);

  		var electricity_sum_ext = (elec1add)+(elec2add)+(elec3add);
  		var elec_final_lf_ext = (energy_elec_val_ext)*Number(electricity_sum_ext)/1000;

  		//FINE CALCOLO VALORI EXTERNAL ENERGY
  		//----------------------------------------------------------------------------------------------
  		var datoLFen_external = elec_final_lf_ext+bio_final_lf_ext+fossil_final_lf_ext;
  		  //----------------------------------------------------------------------------------------------  	
  	  //////////////////////////////////////////////////////////////////
		  /////////////////////////////////////////////////////////////////	   
	   	var titoloLF_sotto = parseFloat(Number(dataLF_food_int)+Number(datoLFen_internal)).toFixed(1);
  	document.getElementById("GT2_sotto").innerHTML = titoloLF_sotto;
  	
  	//----PERCENTUALE SOTTO AL TITOLO---
	//----PERCENTUALE SOTTO AL TITOLO---
	var grand_total_1 = (Number(dataLF_food_int)+Number(datoLFen_internal));
	console.log("GRAND TOTAL ANTE FOOD ENERGY SOMMA: "+grand_total_1);
	var grand_total_2 = grand_total_1-(Number(initial_grafici_sotto_lf));
	console.log("GRAND TOTAL ANTE FOOD ENERGY SECONDA DOMMA: "+grand_total_2);
	var grand_total_ante = (grand_total_2/Number(initial_grafici_sotto_lf));
	console.log("GRAND TOTAL ANTE FOOD ENERGY: "+grand_total_ante);
	var grand_total_round = (grand_total_ante)*100;
	var number= (grand_total_round);
	console.log("GRAND TOTAL ROUND 2: "+number);

	var neg_to_pos = Math.abs(number);
	var grand_total = Math.round(neg_to_pos); //0
	console.log("GRAND TOTAL ROUND 2-2 : "+grand_total);

	
	
	if (initial_value_sotto_lf<titoloLF_sotto) {
		document.getElementById("percent2_sotto").innerHTML =  grand_total+ "% above initial value";
		}
		else {
			document.getElementById("percent2_sotto").innerHTML =  grand_total+ "% below initial value";
		}
  		  
  	
  	
  	
  	//////////////////////////////////////////////////////////////////
  		  /////////////////////////////////////////////////////////////////	   

  //var sumLFfooden = Math.round(parseInt(Number(dataLF_food_int)+Number(datoLFen_internal)));
  		  var sumLFfooden = Math.round(dataLF_food_int+datoLFen_internal);
  		  
  		  var datiaggbar = [sumLFfooden,0,0,0,0,3];
  		//  var datiaggbar2 = [0,0];
  		
  		  horizontalChart2.data.datasets[0].data[0] = datiaggbar;
  		//  barChartSottod.data.datasets[1].data = datiaggbar2;
  		  horizontalChart2.update();
  		  
  		  //horizontalchartOptions2.annotation.annotations.value = physicalLF;

  	  }
   
      var limits = setInterval(limits, 3000);
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
  			          display: false,
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
  			      text: 'Green Water Footprint (l/cap/day)'
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
  			                value: physicalWFG,
  			                borderColor: "red",
  			                borderWidth: 3,
  			                label: {
  			                  backgroundColor: "red",
  			                  content: "Physical Limit:"+physicalWFG,
  			                  enabled: false
  			                },
  			                onMouseover: function(e) {
  			    				var element = this;
  			    				element.options.borderWidth = 5;
  			    				element.options.label.enabled = true;
  			    				element.options.label.content = "Physical Limit:"+physicalWFG;
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
  			                value: sustainableWFG,
  			                borderColor: "yellow",
  			                borderWidth: 3,
  			                label: {
  			                  backgroundColor: "yellow",
  			                  content: "Sustainable Limit:"+sustainableWFG,
  			                  enabled: false
  			                },
  			                onMouseover: function(e) {
  			    				var element = this;
  			    				element.options.borderWidth = 5;
  			    				element.options.label.enabled = true;
  			    				element.options.label.backgroundColor = "black";
  			    				element.options.label.content = "Sustainable Limit:"+sustainableWFG;
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
  			    labels: [""],
  			    datasets: [{
  			      label: "Local",
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

  		var checkregiong = document.querySelector('input[name="region"]:checked'); 
		if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionA')) { 
			initial_grafici_sotto_cf = 19.4222147302057;
			initial_grafici_sotto_lf = 12.7584446196396;
			initial_grafici_sotto_wfg = 4925.59461647378; 
			initial_grafici_sotto_wfb = 706.392879868536;
			
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
			initial_grafici_sotto_cf = 16.0382602602946;
			initial_grafici_sotto_lf = 17.5722349061939;
			initial_grafici_sotto_wfg = 4268.10029051245; 
			initial_grafici_sotto_wfb = 778.891616823503;
			
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
			initial_grafici_sotto_cf = 21.6588949651205;
			initial_grafici_sotto_lf = 14.0228331849227;
			initial_grafici_sotto_wfg = 2203.92134030049; 
			initial_grafici_sotto_wfb = 315.813317570171;
			
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
			initial_grafici_sotto_cf = 19.9700553409741;
			initial_grafici_sotto_lf = 15.7989203958875;
			initial_grafici_sotto_wfg = 3357.73329112609; 
			initial_grafici_sotto_wfb = 476.567226405299;
			
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
  		var measure = document.getElementById("Measure").value;
  	//button clicks
  	var sustainableCF = "0"; var physicalCF = "0";

  	var sustainableLF = "0"; 
  	var physicalLF = "0"; 

  	var sustainableWFG = "0"; 
  	var physicalWFG = "0"; 

  	var sustainableWFB = "0"; 
  	var physicalWFB = "0"; 



  	var checkregion = document.querySelector('input[name="region"]:checked'); 
  	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
  			sustainableWFG = "3533";
  			physicalWFG = "8834";
  
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
  			sustainableWFG = "13098";
  			physicalWFG = "32746";
  	
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
  			sustainableWFG = "2369";
  			physicalWFG = "5923";
  
  		
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
  		
  	
  			sustainableWFG = "5179";
  			physicalWFG = "12947";
  	

  	} else {}
  	//fine button clicks
    	
    		//----------------------------------------------------------------------------------
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
//  		////console.log("MULCHING PARSE: "+Mulching_parse);
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
  		var deficit_irrigation_wfg = Full_Deficit_parse*Mulching_WFg;
  		Deficit = Irrigated* deficit_irrigation_wfg;
  		}
  	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
  		var deficit_irrigation_wfg = Full_Deficit_parse*Mulching_WFg;	
  		Deficit = Irrigated* deficit_irrigation_wfg;
  	}

  	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
  		var deficit_irrigation_wfg = Full_Deficit_parse*Mulching_WFg;	
  		Deficit = Irrigated* deficit_irrigation_wfg;
  	}
  	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
  		var deficit_irrigation_wfg = Full_Deficit_parse*Mulching_WFg;	
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
  	if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='planta')) { 
  		var plantvar = Number(RA_WFgreen_Plant)*(1-0);
  		var plantres_WFgreen_ext = plantres_WFgreen_e*plantvar
  	}
  	else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
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
  	console.log("plantres_WFgreen_ext: "+plantres_WFgreen_ext);

  	//MEAT EXTERNAL
  	var meatres_WFgreen_e = Number(meatbased)*Number(fim);

  	var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
  	if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meata')) { 
  	var meatvar = Number(RA_WFgreen_Meat)*(1-0);
  	var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*meatvar;
  	}
  	else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
  	var meatvar = Number(RB_WFgreen_Meat)*(1-0);
  	var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*meatvar;
  	}

  	else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) { 
  		//var meatvar = (parseFloat(RC_WFgreen_Meat).toFixed(2))*(1-0);
  		//meatvar = Number(meatvar);
  		console.log("PIPPO PURO: "+pippo);
  		var meatvar = pippo*(1-0);
  		console.log("PIPPO RESULT: "+meatvar);
  		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*meatvar;
  		console.log("VALORE EXTERNAL: "+meatres_WFgreen_ext);
  		console.log("MEATRES_WFG: "+Number(meatres_WFgreen_e));

  	}

  	else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) { 
  		var meatvar = Number(RD_WFgreen_Meat)*(1-0);
  		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*meatvar;	
  	}
  	else {
  		var meatres_WFgreen_ext = Number(meatres_WFgreen_e)*Number(WORLD_meat_WFgreen_FoodV12);
  	}

  	console.log("meatres_WFgreen_ext: "+meatres_WFgreen_ext);

  	//DIARY EXTERNAL
  	var diaryres_WFgreen_e = Number(diarybased)*Number(fid);

  	var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
  	if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diarya')) { 
  		var diaryvar = Number(RA_WFgreen_Diary)*(1-0);	
  		var diaryres_WFgreen_ext = Number(diaryres_WFgreen_e)*diaryvar;
  	}
  	else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
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

  	console.log("diaryres_WFgreen_ext: "+diaryres_WFgreen_ext);
  		  
  	var dataWFgreen_food_ext = (plantres_WFgreen_ext+meatres_WFgreen_ext+diaryres_WFgreen_ext);
  	0; var WFgreen_Food_External=dataWFgreen_food_ext; 
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
  	var b_i = (bio_fr_parse)*(A6b);
  	var b_t = (bio_fr_parse)*(B6a-B6b);
  	var b_s = (bio_fr_parse)*(C6a-C6b);
  	var b_h = (bio_fr_parse)*(D6a);
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
  	//console.log("BIO WFgreen INT = EnergyG35 (ok) =  "+bio_final_WFgreen);

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
  	var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');
  	if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossila')) { 
  		var fossil_final_WFgreen_ext = total_fossil_user*(fossilf_parse)*(Number(RA_WFgreen_Fossil)*0.25)/1000;
  	}
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
  	console.log("fossil_final_WFgreen_ext: "+fossil_final_WFgreen_ext);

  	var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
  	if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuela')) {
  		var bio_final_WFgreen_ext = total_bio_user*(biofuels_parse)*(Number(RA_WFgreen_Biofuel)*0.27)/1000;
  	}
  	else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
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
  	}
  	console.log("bio_final_WFgreen_ext =  "+bio_final_WFgreen_ext);

  	var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
  	if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='ela')) {
  		var elec1= (windp)*(RA_WFgreen_Wind);
  		var elec2 =(solarp)*(RA_WFgreen_Solar);
  		var elec3 =(hydrop)*(RA_WFgreen_Hydro);
  		var elec4 =(biofuelp)*(RA_WFgreen_Biofuel);
  		var elec5 =(nuclearp)*(RA_WFgreen_Nuclear);
  		var elec6 =(fuelp)*(RA_WFgreen_Fossil); 	
  	}
  	else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
  		var elec1= (windp)*(RA_WFgreen_Wind);
  		var elec2 =(solarp)*(RA_WFgreen_Solar);
  		var elec3 =(hydrop)*(RA_WFgreen_Hydro);
  		var elec4 =(biofuelp)*(RA_WFgreen_Biofuel);
  		var elec5 =(nuclearp)*(RA_WFgreen_Nuclear);
  		var elec6 =(fuelp)*(RA_WFgreen_Fossil); 	
  	}   
  	else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
  		var elec1= (windp)*(RB_WFgreen_Wind);
  		var elec2 =(solarp)*(RB_WFgreen_Solar);
  		var elec3 =(hydrop)*(RB_WFgreen_Hydro);
  		var elec4 =(biofuelp)*(RB_WFgreen_Biofuel);
  		var elec5 =(nuclearp)*(RB_WFgreen_Nuclear);
  		var elec6 =(fuelp)*(RB_WFgreen_Fossil); 	
  	}  
  	else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
  		var elec1= Number(windp)*Number(RC_D_WFgreen_Wind);
  		var elec2 =Number(solarp)*Number(RC_D_WFgreen_Solar);
  		var elec3 =Number(hydrop)*Number(RC_D_WFgreen_Hydro);
  		var elec4 =Number(biofuelp)*Number(RC_D_WFgreen_Biofuel);
  		var elec5 =Number(nuclearp)*Number(RC_D_WFgreen_Nuclear);
  		var elec6 =Number(fuelp)*Number(RC_D_WFgreen_Fossil); 	
  		}  
  	else {
  		var elec1= Number(windp)*Number(RC_D_WFgreen_Wind);
  		var elec2 =Number(solarp)*Number(RC_D_WFgreen_Solar);
  		var elec3 =Number(hydrop)*Number(RC_D_WFgreen_Hydro);
  		var elec4 =Number(biofuelp)*Number(RC_D_WFgreen_Biofuel);
  		var elec5 =Number(nuclearp)*Number(RC_D_WFgreen_Nuclear);
  		var elec6 =Number(fuelp)*Number(RC_D_WFgreen_Fossil); 
  	}

  	var elec1add = (elec1)+(elec2);
  	var elec2add = (elec3)+(elec4);
  	var elec3add = (elec5)+(elec6);

  	var electricity_sum_ext = (elec1add)+(elec2add)+(elec3add);

  	var elec_final_WFgreen_ext = (energy_elec_val_ext)*Number(electricity_sum_ext)/1000;
  	console.log("elec_final_WFgreen_ext: "+elec_final_WFgreen_ext);

  	//FINE CALCOLO VALORI EXTERNAL ENERGY
  	//----------------------------------------------------------------------------------------------
  
  		//----------------------------------------------------------------------------------------------
  		var datoWFgreen_en_external = Number(elec_final_WFgreen_ext)+Number(bio_final_WFgreen_ext)+Number(fossil_final_WFgreen_ext);
  		  //----------------------------------------------------------------------------------------------  	
  		  //////////////////////////////////////////////////////////////////


  	  //////////////////////////////////////////////////////////////////
  	  		  /////////////////////////////////////////////////////////////////	
  		var titoloWFg_sotto = Number(dataWFgreen_food_int)+Number(datoWFgreen_en_internal);
  		console.log("TITOLO WFGREEN SOTTO: "+Number(dataWFgreen_food_int)+" - "+Number(datoWFgreen_en_internal));
  	  		titoloWFg_sotto = parseFloat(titoloWFg_sotto).toFixed(1);
  	  		console.log("TITOLO WFGREEN SOTTO: "+titoloWFg_sotto);

  	    	document.getElementById("GT3_sotto").innerHTML = titoloWFg_sotto;

  	  	//----PERCENTUALE SOTTO AL TITOLO---
	    	var grand_total_1 = (Number(dataWFgreen_food_int)+Number(datoWFgreen_en_internal));
	    	console.log("GRAND TOTAL ANTE FOOD ENERGY SOMMA: "+grand_total_1);
	    	var grand_total_2 = grand_total_1-(Number(initial_grafici_sotto_wfg));
	    	console.log("COSTANTE DA SOTTRARRE: "+initial_grafici_sotto_wfg);
	    	console.log("GRAND TOTAL ANTE FOOD ENERGY SECONDA DOMMA: "+grand_total_2);
	    	var grand_total_ante = (grand_total_2/Number(initial_grafici_sotto_wfg));
	    	console.log("GRAND TOTAL ANTE FOOD ENERGY: "+grand_total_ante);
	    	var grand_total_round = (grand_total_ante)*100;
	    	var number= (grand_total_round);
	    	console.log("GRAND TOTAL ROUND 2: "+number);

	    	var neg_to_pos = Math.abs(number);
	    	var grand_total = Math.round(neg_to_pos); //0
	    	console.log("GRAND TOTAL ROUND 2-2 : "+grand_total);

	    	
	    	if (initial_value_sotto_wfg<titoloWFg_sotto) {
	    		document.getElementById("percent3_sotto").innerHTML =  grand_total+ "% above initial value";
	    		}
	    		else {
	    			document.getElementById("percent3_sotto").innerHTML =  grand_total+ "% below initial value";
	    		}
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
			          display: false,
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
			      text: 'Blue Water Footprint (l/cap/day)'
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
			                value: physicalWFB,
			                borderColor: "red",
			                borderWidth: 3,
			                label: {
			                  backgroundColor: "red",
			                  content: "Physical Limit:"+physicalWFB,
			                  enabled: false
			                },
			                onMouseover: function(e) {
			    				var element = this;
			    				element.options.borderWidth = 5;
			    				element.options.label.enabled = true;
			    				element.options.label.content = "Physical Limit:"+physicalWFB;
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
			                value: sustainableWFB,
			                borderColor: "yellow",
			                borderWidth: 3,
			                label: {
			                  backgroundColor: "yellow",
			                  content: "Sustainable Limit:"+sustainableWFB,
			                  enabled: false
			                },
			                onMouseover: function(e) {
			    				var element = this;
			    				element.options.borderWidth = 5;
			    				element.options.label.enabled = true;
			    				element.options.label.backgroundColor = "black";
			    				element.options.label.content = "Sustainable Limit:"+sustainableWFB;
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
  			    labels: [""],
  			    datasets: [{
  			      label: "Local",
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
  		var checkregiong = document.querySelector('input[name="region"]:checked'); 
		if((checkregiong != null)&&(checkregiong.getAttribute('id')=='regionA')) { 
			initial_grafici_sotto_cf = 19.4222147302057;
			initial_grafici_sotto_lf = 12.7584446196396;
			initial_grafici_sotto_wfg = 4925.59461647378; 
			initial_grafici_sotto_wfb = 706.392879868536;
			
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
			initial_grafici_sotto_cf = 16.0382602602946;
			initial_grafici_sotto_lf = 17.5722349061939;
			initial_grafici_sotto_wfg = 4268.10029051245; 
			initial_grafici_sotto_wfb = 778.891616823503;
			
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
			initial_grafici_sotto_cf = 21.6588949651205;
			initial_grafici_sotto_lf = 14.0228331849227;
			initial_grafici_sotto_wfg = 2203.92134030049; 
			initial_grafici_sotto_wfb = 315.813317570171;
			
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
			initial_grafici_sotto_cf = 19.9700553409741;
			initial_grafici_sotto_lf = 15.7989203958875;
			initial_grafici_sotto_wfg = 3357.73329112609; 
			initial_grafici_sotto_wfb = 476.567226405299;
			
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
  		var measure = document.getElementById("Measure").value;
  	//button clicks
  	var sustainableCF = "0"; var physicalCF = "0";

  	var sustainableLF = "0"; 
  	var physicalLF = "0"; 

  	var sustainableWFG = "0"; 
  	var physicalWFG = "0"; 

  	var sustainableWFB = "0"; 
  	var physicalWFB = "0"; 



  	var checkregion = document.querySelector('input[name="region"]:checked'); 
  	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
  	
  			sustainableWFB = "1550";
  			physicalWFB = "5710";
  		
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
  	
  			sustainableWFB = "3825";
  			physicalWFB = "12749";
  		
  		
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
 
  			sustainableWFB = "262";
  			physicalWFB = "873";
  			
  		
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
  
  			sustainableWFB = "344";
  			physicalWFB = "1146";

  	} else {}
  	//fine button clicks

  		//----------------------------------------------------------------------------------
  		var daysp = parseFloat(document.getElementById("A8_f").value); 
  		//----------------------------------------------------------------------------------
  		var intakeparse = parseFloat(document.getElementById("f_D4").value);
  		////////console.log("intake: "+intakeparse);
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
//  			//////console.log("MULCHING PARSE: "+Mulching_parse);
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
  		var Deficit = 0;
  		var checkregionyg = document.querySelector('input[name="region"]:checked'); 
  		if (measure='1') {
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
  			
  		else if(measure='2') {
  		if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionA')) {
  			var deficit_irrigation_wfb = Full_Deficit_parse*Mulching_WFb;
  			Deficit = Irrigated* deficit_irrigation_wfb;
  			}
  		else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) {
  			var deficit_irrigation_wfb = Full_Deficit_parse*Mulching_WFb;	
  			Deficit = Irrigated* deficit_irrigation_wfb;
  		}

  		else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) {
  			var deficit_irrigation_wfb = Full_Deficit_parse*Mulching_WFb;	
  			Deficit = Irrigated* deficit_irrigation_wfb;
  		}
  		else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) {
  			var deficit_irrigation_wfb = Full_Deficit_parse*Mulching_WFb;	
  			Deficit = Irrigated* deficit_irrigation_wfb;
  			}else{}
  		}
  		//VALUE 2 FINE
  		//VALUE 3 INIZIO
  		else if(measure='3') {
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
  		////console.log("VALORE FOOD EXT WFblue TOTAL = Food.M21 : "+dataWFblue_food_ext);
  		//////console.log("==============FINE FOOD WFblue=======================");


  		//----------------------------------------------------------------------------------------------------------------------

  		//////console.log("==========INIZIO ENERGY WFblue============");	  
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
  		////console.log("FOSSIL WFblue INT = EnergyG34 (ok)= "+fossil_final_WFblue);

  		//-----------------------------------------------------------------------------------------------------
  		//calcolo valori iniziali di BIOFUEL USER:	  
  		var bio_i_primaop = (A6a)-(A6b);
  		var b_i = (bio_fr_parse)*(A6b);
  		var b_t = (bio_fr_parse)*(B6a-B6b);
  		var b_s = (bio_fr_parse)*(C6a-C6b);
  		var b_h = (bio_fr_parse)*(D6a);

  		var total_bio_user = ((b_i)+(b_t)+(b_s)+(b_h));
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
  		////console.log("BIO WFblue INT = EnergyG35 (ok) =  "+bio_final_WFblue);

  		//-----------------------------------------------------------------------------------------------------
  		var e_i = (1-(red_ind_parse))*el_ind;
  		var e_t = (el_tr_parse)*(B6a);
  		var e_s = (1-red_ind_parse)*Number(el_s);
  		e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));

  				  	
  		var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
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
  			}
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
  			var elec1= (windp)*(RA_WFblue_Wind);
  			var elec2 =(solarp)*(RA_WFblue_Solar);
  			var elec3 =(hydrop)*(RA_WFblue_Hydro);
  			var elec4 =(biofuelp)*(RA_WFblue_Biofuel);
  			var elec5 =(nuclearp)*(RA_WFblue_Nuclear);
  			var elec6 =(fuelp)*(RA_WFblue_Fossil); 	
  		}   
  		else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
  			var elec1= (windp)*(RB_WFblue_Wind);
  			var elec2 =(solarp)*(RB_WFblue_Solar);
  			var elec3 =(hydrop)*(RB_WFblue_Hydro);
  			var elec4 =(biofuelp)*(RB_WFblue_Biofuel);
  			var elec5 =(nuclearp)*(RB_WFblue_Nuclear);
  			var elec6 =(fuelp)*(RB_WFblue_Fossil); 	
  		}  
  		else if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
  			var elec1= Number(windp)*Number(RC_D_WFblue_Wind);
  			var elec2 =Number(solarp)*Number(RC_D_WFblue_Solar);
  			var elec3 =Number(hydrop)*Number(RC_D_WFblue_Hydro);
  			var elec4 =Number(biofuelp)*Number(RC_D_WFblue_Biofuel);
  			var elec5 =Number(nuclearp)*Number(RC_D_WFblue_Nuclear);
  			var elec6 =Number(fuelp)*Number(RC_D_WFblue_Fossil); 	
  			}  
  		else {
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

  		var electricity_sum_ext = (elec1add)+(elec2add)+(elec3add);


  		var elec_final_WFblue_ext = (energy_elec_val_ext)*Number(electricity_sum_ext)/1000;


  		//FINE CALCOLO VALORI EXTERNAL ENERGY

  		//----------------------------------------------------------------------------------------------
  		var datoWFblue_en_external = (elec_final_WFblue_ext+bio_final_WFblue_ext+fossil_final_WFblue_ext);
  		  //----------------------------------------------------------------------------------------------  	
  		var titoloWFb_sotto = parseFloat(Number(dataWFblue_food_int)+Number(datoWFblue_en_internal)).toFixed(1);
    	document.getElementById("GT4_sotto").innerHTML = titoloWFb_sotto;

      	//----PERCENTUALE SOTTO AL TITOLO---
    	var grand_total_1 = (Number(dataWFblue_food_int)+Number(datoWFblue_en_internal));
    	console.log("GRAND TOTAL ANTE FOOD ENERGY SOMMA: "+grand_total_1);
    	var grand_total_2 = grand_total_1-(Number(initial_grafici_sotto_wfb));
    	console.log("GRAND TOTAL ANTE FOOD ENERGY SECONDA DOMMA: "+grand_total_2);
    	var grand_total_ante = (grand_total_2/Number(initial_grafici_sotto_wfb));
    	console.log("GRAND TOTAL ANTE FOOD ENERGY: "+grand_total_ante);
    	var grand_total_round = (grand_total_ante)*100;
    	var number= (grand_total_round);
    	console.log("GRAND TOTAL ROUND 2: "+number);

    	var neg_to_pos = Math.abs(number);
    	var grand_total = Math.round(neg_to_pos); //0
    	console.log("GRAND TOTAL ROUND 2-2 : "+grand_total);
    	
    	if (initial_value_sotto_wfb<titoloWFb_sotto) {
    		document.getElementById("percent4_sotto").innerHTML =  grand_total+ "% above initial value";
    		}
    		else {
    			document.getElementById("percent4_sotto").innerHTML =  grand_total+ "% below initial value";
    		}

  		
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
