var plantGlobalA= 0, plantGlobalB= 0, plantGlobalC= 0, plantGlobalD = 0,
meatGlobalA= 0, meatGlobalB= 0, meatGlobalC= 0, meatGlobalD = 0,
diaryGlobalA= 0, diaryGlobalB= 0, diaryGlobalC= 0, diaryGlobalD = 0,
fossilGlobalA= 0, fossilGlobalB= 0, fossilGlobalC= 0, fossilGlobalD = 0,
bioGlobalA= 0, bioGlobalB= 0, bioGlobalC= 0, bioGlobalD = 0,
elecGlobalA= 0, elecGlobalB= 0, elecGlobalC= 0, elecGlobalD = 0;


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
var initial_value_cf_int = 0; var initial_value_lf_int = 0;
var initial_value_wfg_int = 0; var initial_value_wfb_int = 0;
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
//console.log("REGION C CF MEAT VALUE STATICO: "+RC_CF_Meat);
var RC_CF_Diary = 0.0064;
var RC_WFgreen_Meat = parseFloat("1.90").toFixed(2);  var RC_WFblue_Meat = 0.10;  var RC_LF_Meat = 0.0140;
//console.log("RC_WFGREEN VALORE PURO: "+RC_WFgreen_Meat);
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

initial_value_cf_int = 24.4212022139062; 
initial_value_lf_int = 13.2551883468376;
initial_value_wfg_int = 5191.68997367378; 
initial_value_wfb_int = 773.876129386631;
	

		
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
 
 		 Irrigated = 0.163;
		 Rainfed = 1-Irrigated;
	
	}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionB')) { 
		initial_value_cf_int = 20.2748418808954; 
		initial_value_lf_int = 17.5727719925233;
		initial_value_wfg_int = 4714.93177211245; 
		initial_value_wfb_int = 816.233412273386;
		
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
		 
		 Irrigated = 0.04;
		 Rainfed = 1-Irrigated;
		
	}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionC')) { 
		initial_value_cf_int = 27.9584617302096; 
		initial_value_lf_int = 14.5325751112248;
		initial_value_wfg_int = 2859.81844233148; 
		initial_value_wfb_int = 406.478627692298;
		
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
		
		 Irrigated = 0.11;
		 Rainfed = 1-Irrigated;
	}
	else if((checkregionyg != null)&&(checkregionyg.getAttribute('id')=='regionD')) { 
		initial_value_cf_int = 25.1318778442795; 
		initial_value_lf_int = 15.7995747782528;
		initial_value_wfg_int = 3357.73329112609; 
		initial_value_wfb_int = 485.707639283624;
		
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
		 
		 Irrigated = 0.088;
		 Rainfed = 1-Irrigated;
		
	} else {}


//VARIABILI GLOBALI PER LOCAL STORAGE
var CF_Food_Internal=0; var CF_Food_External=0; var CF_Energy_Internal=0; var CF_Energy_External=0;
var LF_Food_Internal=0; var LF_Food_External=0; var LF_Energy_Internal=0; var LF_Energy_External=0;
var WFblue_Food_Internal=0; var WFblue_Food_External=0; var WFblue_Energy_Internal=0; var WFblue_Energy_external=0;
var WFgreen_Food_Internal=0; var WFgreen_Food_External=0; var WFgreen_Energy_Internal=0; var WFgreen_Energy_external=0;


//variabile % dentro la ciambella di security:

var percentage_food = 0;
var percentage_energy = 0;


//////////////////////////////////////////////////////////////////////////
// ----------------------------------------------------------------------------------------------------------------------------------
//$(window).on("load", function () {
window.addEventListener("load", function () {
	
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
    
    $security1 = '#5a8dee',
    	$security2 = '#236e89',
    		$security3 = '#1c82ad',
    			$security4 = '#A9B9CF',
    				$security5 = '#EBEEF2';
	$security6 = '#62768C';

var giallo = $warning;
var rosso = $danger;
var verde = $success;
var blu = $primary;


  	//var themeColors = [$primary, $warning, $danger, $success, $info, $world];
  	var themeColors = [$security1, $security2, $security3, $security4, $security5, $security6];
  

  //Doughnut Chart SECURITY
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
        text: ['Security Food', 'Production of food (kcal/cap/days)']
      },
      legend: {
          display: false
      },
      
    };

    // Chart Data
    var doughnutchartData2 = {
      labels: ["Local", "A", "B", "C", "D", "WORLD"],
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
    
    Chart.pluginService.register({
    	  beforeDraw: function(chart) {
    	    var width = doughnutSimpleChart2.chart.width,
    	        height = doughnutSimpleChart2.chart.height,
    	        ctx = doughnutSimpleChart2.chart.ctx;

    	    ctx.restore();
    	    var fontSize = (height / 108).toFixed(2);
    	    ctx.font = fontSize + "em sans-serif";
    	    ctx.textBaseline = "middle";

    	    var text = percentage_food,
    	        textX = Math.round((width - ctx.measureText(text).width) / 2),
    	        textY = height / 1.7 ;

    	    ctx.fillText(text, textX, textY);
    	    ctx.save();
    	  }
    	});

     
     
    function aggiornaSecurity() {  	
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
//  	  	////console.log("MULCHING PARSE: "+Mulching_parse);
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
      		
      		//console.log("PLANT - MEAT - DIARY"+plant1+" - "+meat1+" "+diary1);
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
  	  var plantbasedA = (1-Number(fip))*plantbased;
  	var meatbasedA = (1-Number(fim))*meatbased;
  	var diarybasedA = (1-Number(fid))*diarybased;
  	var local_food = Number(plantbasedA)+Number(meatbasedA)+Number(diarybasedA);
  	local_food = Math.round(local_food);
  	local_food = Number(local_food);
  	 //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
  	var plantA = 0;
  	var plantB = 0;
  	var plantC = 0;
  	var plantD = 0;
  	var plantWORLD =0;
  	
  	var meatA = 0;
  	var meatB =0;
  	var meatC=0;
  	var meatD =0;
  	var meatWORLD =0;
  	
  	var diaryA2 = 0;
  	var diaryB2=0;
  	var diaryC2=0;
  	var diaryD=0;
  	var diaryWORLD = 0;
  	
  	  var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
 if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='planta')) { 
 		  plantA =  Number(fip)*plantbased;
 		  plantGlobalA = plantA;
 	  }
  	  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) { 
  		plantB =  Number(fip)*plantbased;
  		plantGlobalB = plantB;
  	
  	  } 
  	  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) { 
  		  plantC =  Number(fip)*plantbased;
  		  plantGlobalC = plantC;
  	  }
  	  else if((checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) {
  		  plantD =  Number(fip)*plantbased;
  		  plantGlobalD = plantD;
  	  }   	
  	 

  	  else {
  	//plantB = 0;
  	//palntC = 0;
  	//plantD = 0;
  	plantWORLD = Number(fip)*plantbased;
  	  }
  	
 //alert("RISULTATI plant: "+plantGlobalD+" "+plantGlobalC+" "+plantGlobalB+" "+plantGlobalA);
  	//------------------------------------------------------------------------------------------------------------------
  	//MEAT:	
  	var meatbasedA = meatbased*(1-fim);
  	 //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
  	  var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked'); 
  	if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meata')) { 
  		meatA = Number(fim)*meatbased;
  		meatGlobalA = meatA;
  	}  
  	else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
  		meatB = Number(fim)*meatbased;
  		meatGlobalB = meatB;
  	}    
  	else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) {
  		meatC = Number(fim)*meatbased;
  		meatGlobalC = meatC;
  	}
  	else if((checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) {
  		meatD = Number(fim)*meatbased;
  		meatGlobalD = meatD;
  	}
  	else {
  		//meatB = 0;
  		//meatC = 0;
  		//meatD = 0;
  		meatWORLD = Number(fim)*meatbased;
  	}

  	//---------------------------------------------------------------------------------------------------------------------
  	//DIARY:
  	var diaryA = (diarybased)*(1-fid);
  	var diaryB = ((YeldCF+Mulch)*Rainfed)+Deficit;
  	 //al posto di zero andrebbero i plantbasedB dei fogli RelationsB,C etc. 
  	  var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked'); 
  	if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diarya')) { 
  		diaryA2 = Number(fid)*diarybased;
  		diaryGlobalA = diaryA2;
  		}
  	else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
  		diaryB2 = Number(fid)*diarybased;
  		diaryGlobalB = diaryB2;
  		}
  	else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) {
  		diaryC2 = Number(fid)*diarybased;
  		diaryGlobalC = diaryC2;
  		}
  	else if((checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) {
  		diaryD = Number(fid)*diarybased;
  		diaryGlobalD = diaryD;
  		}
  	else {
  		//diaryB2 = 0;
  		//diaryC2=0;
  		//diaryD=0;
  		diaryWORLD = Number(fid)*diarybased;
  	}
  	
  	
  	//alert("RISULTATI meat: "+meatGlobalD+" "+meatGlobalC+" "+meatGlobalB+" "+meatGlobalA);
  	 //alert("RISULTATI diary: "+diaryGlobalD+" "+diaryGlobalC+" "+diaryGlobalB+" "+diaryGlobalA);
  	

  	var sumfoodsecurityA = Number(plantA)+Number(meatA)+Number(diaryA2);	
  var sumfoodsecurityB = Number(plantB)+Number(meatB)+Number(diaryB2);	
  var sumfoodsecurityC = Number(plantC)+Number(meatC)+Number(diaryC2);	
  var sumfoodsecurityD = Number(plantD)+Number(meatD)+Number(diaryD);	
  var sumfoodsecurityWORLD = Number(plantWORLD)+Number(meatWORLD)+Number(diaryWORLD);
  
  var calcolopercfood1 = (sumfoodsecurityA)+(local_food)+(sumfoodsecurityB)+(sumfoodsecurityC)+(sumfoodsecurityD);
  var calcolopercfood2 = calcolopercfood1+(sumfoodsecurityWORLD);
  
   percentage_food = parseFloat(((calcolopercfood1)/(calcolopercfood2))*100).toFixed(1);
   if (percentage_food == 100.0) {
	   percentage_food = Math.round(percentage_food);
   }

  		  var A_food = sumfoodsecurityA;
  		A_food = Math.round(A_food);
  		A_food = Number(A_food);
  		  var world_food = sumfoodsecurityWORLD;
  		world_food = Math.round(world_food);
  		world_food = Number(world_food);
  	      var B_food = sumfoodsecurityB;
  	    B_food = Math.round(B_food);
  	  B_food = Number(B_food);
  	      var C_food = sumfoodsecurityC;
  	    C_food = Math.round(C_food);
  	  C_food = Number(C_food);
  		  var D_food = sumfoodsecurityD;
  		D_food = Math.round(D_food);
  		D_food = Number(D_food);
  		  
	A_obj = JSON.parse(localStorage.getItem("regionADataOutput"));
  	B_obj = JSON.parse(localStorage.getItem("regionBDataOutput"));
  	C_obj = JSON.parse(localStorage.getItem("regionCDataOutput"));
  	D_obj = JSON.parse(localStorage.getItem("regionDDataOutput"));
  	WORLD_obj = JSON.parse(localStorage.getItem("WORLDDataOutput"));
  	
  	////console.log("A_obj: "+JSON.stringify(A_obj)+" --- B_obj: "+JSON.stringify(A_obj)+" --- C_obj: "+JSON.stringify(A_obj)+" --- D_obj: "+JSON.stringify(A_obj));
  	
  	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
  		A_obj["security_food"] = local_food;
  		A_obj["InRegionB_food"] = B_food;
  		A_obj["InRegionC_food"] = C_food;
  		A_obj["InRegionD_food"] = D_food;
  		A_obj["WORLD_A_security_food"] = world_food;
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
  		B_obj["security_food"] = local_food;
  		B_obj["InRegionA_food"] = A_food;
  		B_obj["InRegionC_food"] = C_food;
  		B_obj["InRegionD_food"] = D_food;
  		B_obj["WORLD_B_security_food"] = world_food;
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
  		C_obj["security_food"] = local_food;
  		C_obj["InRegionA_food"] = A_food;
  		C_obj["InRegionB_food"] = B_food;
  		C_obj["InRegionD_food"] = D_food;
  		C_obj["WORLD_C_security_food"] = world_food;
  	}
  	else {
  		D_obj["security_food"] = local_food;
  		D_obj["InRegionA_food"] = A_food;
  		D_obj["InRegionB_food"] = B_food;
  		D_obj["InRegionC_food"] = C_food;
  		D_obj["WORLD_D_security_food"] = world_food;
  	}
  	
  	////console.log("A_obj_food: "+A_obj["security_food"]+" B_obj_food: "+B_obj["security_food"]+" C_obj_food: "+C_obj["security_food"]+" D_obj_food: "+D_obj["security_food"]+" WORLD_food: "+world_food);
  	
  	localStorage.setItem("regionADataOutput", JSON.stringify(A_obj));
  	localStorage.setItem("regionBDataOutput", JSON.stringify(B_obj));
  	localStorage.setItem("regionCDataOutput", JSON.stringify(C_obj));
  	localStorage.setItem("regionDDataOutput", JSON.stringify(D_obj));
  	localStorage.setItem("WORLDDataOutput", JSON.stringify(WORLD_obj));
  		
  	var datiagghor = [local_food, A_food, B_food, C_food, D_food, world_food];
  	//console.log ("VALORI SECURITY FOOD: "+A_food+" "+B_food+" "+C_food+" "+D_food);
  	doughnutSimpleChart2.data.datasets[0].data = datiagghor;
  	
  	doughnutSimpleChart2.update();
  	}
    

    var myVarpolar = setInterval(aggiornaSecurity, 3000);   
    
/////////////////
///////////////////
/////////////////// SECURITY 2 /////////////////////
    ////////////////////////////////////////

    
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
        text: ['Security Energy', 'Production of Energy (MJ/cap/day)']
      },
      legend: {
          display: false
      },
      
    };

    // Chart Data
    var doughnutchartData3 = {
      labels: ["Local", "A", "B", "C", "D", "WORLD"],
      datasets: [{
        label: "Production of Energy",
        data: [115,0,0,0,0,83],
        backgroundColor: themeColors,
      }]
    };

    var doughnutChartconfig3 = {
      type: 'doughnut',

      // Chart Options
      options: doughnutchartOptions3,

      data: doughnutchartData3,
 
    };

    // Create the chart
    var doughnutSimpleChart3 = new Chart(doughnutChartctx3, doughnutChartconfig3);
    Chart.pluginService.register({
  	  beforeDraw: function(chart) {
  	    var width = doughnutSimpleChart3.chart.width,
  	        height = doughnutSimpleChart3.chart.height,
  	        ctx = doughnutSimpleChart3.chart.ctx;

  	    ctx.restore();
  	    var fontSize = (height / 108).toFixed(2);
  	    ctx.font = fontSize + "em sans-serif";
  	    ctx.textBaseline = "middle";

  	    var text = percentage_energy,
  	        textX = Math.round((width - ctx.measureText(text).width) / 2),
  	      textY = height / 1.7 ;

  	    ctx.fillText(text, textX, textY);
  	    ctx.save();
  	  }
  	});
    
     
    function aggiornaSecuritydue() {

  	////console.log("==========INIZIO ENERGY LF============");	  
  	//////////////////// CALCOLO ENERGY ///////////////////////////////
  	var red_ind_parse = parseFloat(document.getElementById("e_N5").value)/100;
  	var red_tr_parse = parseFloat(document.getElementById("e_N6").value)/100;
  	var red_ser_parse =parseFloat(document.getElementById("e_N7").value)/100;
  	var red_house = parseFloat(document.getElementById("e_N8").value)/100;
  	var el_tr_parse; //= parseFloat(document.getElementById("e_N11").value)/100;  
  	var fuel_house_parse = parseFloat(document.getElementById("e_N12").value)/100;  
  	var bio_fr_parse; //= parseFloat(document.getElementById("e_N13").value)/100;  
  	var fossilf_parse = parseFloat(document.getElementById("L30").value)/100;
  	var biofuels_parse = parseFloat(document.getElementById("L31").value)/100;
  	var elec_parse = parseFloat(document.getElementById("L32").value)/100;
  	//---------------------------------------------------------------------------------------------------
		//CONSUMPTION REGION A - VALORI FISSI
  	var checkregion = document.querySelector('input[name="region"]:checked'); 
  	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
  		if(a==1){
  			el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
  				} else {
  				el_tr_parse = (1.52956996379245)/100;  
  				}
  				if(aa==1){
  			 bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
  				//console.log("VALORE BIO PARSE NUOVO: "+bio_fr_parse);
  				//console.log("VALORE DI AA: "+aa);
  				} else {
  					 bio_fr_parse = (26.1495632313233)/100;
  					//console.log("VALORE BIO PARSE ORIGINALE: "+bio_fr_parse);
  					//console.log("VALORE DI AA: "+aa);

  				}
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
  		if(b==1){
  			el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
  				} else {
  				el_tr_parse = (1.79488008081849)/100;  
  				}
  				if(bb==1){
  			 bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
  				//console.log("VALORE BIO PARSE NUOVO: "+bio_fr_parse);
  				//console.log("VALORE DI BB: "+aa);
  				} else {
  					 bio_fr_parse = (41.2952608162352)/100;
  					//console.log("VALORE BIO PARSE ORIGINALE: "+bio_fr_parse);
  					//console.log("VALORE DI BB: "+aa);

  				}
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
  		if(c==1){
  			el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
  				} else {
  				el_tr_parse = (4.94490673703195)/100;  
  				}
  				if(cc==1){
  			 bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
  				//console.log("VALORE BIO PARSE NUOVO: "+bio_fr_parse);
  				//console.log("VALORE DI CC: "+aa);
  				} else {
  					 bio_fr_parse = (12.5555245669749)/100;
  					//console.log("VALORE BIO PARSE ORIGINALE: "+bio_fr_parse);
  					//console.log("VALORE DI CC: "+aa);

  				}
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
  		if(d==1){
  			el_tr_parse = parseFloat(document.getElementById("e_N11").value)/100;  
  				} else {
  				el_tr_parse = (4.94490673703195)/100;  
  				}
  				if(dd==1){
  			 bio_fr_parse = parseFloat(document.getElementById("e_N13").value)/100;  
  				//console.log("VALORE BIO PARSE NUOVO: "+bio_fr_parse);
  				//console.log("VALORE DI DD: "+aa);
  				} else {
  					 bio_fr_parse = (12.5555245669749)/100;
  					//console.log("VALORE BIO PARSE ORIGINALE: "+bio_fr_parse);
  					//console.log("VALORE DI DD: "+aa);

  				}
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
  	var e_t = (el_tr_parse)*(B6a);
  	var e_s = (1-red_ind_parse)*Number(el_s);
  	e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
  			  	
  	var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
  //----calcoli per SECURITY ENERGY 
  	var FOSSILA = Number(total_fossil_user)*(1-Number(fossilf_parse));
  	var BIOA = Number(total_bio_user)*(1-Number(biofuels_parse));
  	var ELECA = Number(total_el_user)*(1-Number(elec_parse));
  	
  	
  	var FOSSILA2 = 0;
  	var FOSSILB = 0;
  	var FOSSILC = 0;
  	var FOSSILD = 0;
  	var FOSSILWORLD = 0;
  	
  	var BIOA2 = 0;
  	var BIOB =0;
  	var BIOC=0;
  	var BIOD =0;
  var BIOWORLD =0;

  var SUMELECA2 = 0;
  	var SUMELECB=0;
  	var SUMELECC =0;
  	var SUMELECD =0;
  	
  	var ELECA2 = 0;
  	var ELECB=0;
  	var ELECC=0;
  	var ELECD=0;
  	var ELECWORLD = 0;
  	

  	 var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked'); 
  	 if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuela')) {
  	  	BIOA2 = Number(total_bio_user)*Number(biofuels_parse);
  	  	bioGlobalA = BIOA2;
  	  	}
  	 
  	 else if((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
  	BIOB = Number(total_bio_user)*Number(biofuels_parse);
	bioGlobalB = BIOB;
  	
  	}
  		else if ((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) {
  		BIOC = Number(total_bio_user)*Number(biofuels_parse);
  		bioGlobalC = BIOC;
  	}
  		else if ((checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) {
  		BIOD = Number(total_bio_user)*Number(biofuels_parse);	
  		bioGlobalD = BIOD;
  	} else {
  		//BIOB = 0;
  	//	BIOC = 0;
  		//BIOD =0;
  		BIOWORLD = Number(total_bio_user)*Number(biofuels_parse);	
  	}
  	
  	  var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked'); 
  	if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossila')) {
  		FOSSILA2 = Number(total_fossil_user)*Number(fossilf_parse);	
  		fossilGlobalA = FOSSILA2;
  		}

  	  else if((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) {
  		FOSSILB = Number(total_fossil_user)*Number(fossilf_parse);		
  		fossilGlobalB = FOSSILB;
  		}
  			else if ((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) {
  			FOSSILC = Number(total_fossil_user)*Number(fossilf_parse);
  			fossilGlobalC = FOSSILC;
  		}
  			else if ((checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) {
  			FOSSILD = Number(total_fossil_user)*Number(fossilf_parse);
  			fossilGlobalD = FOSSILD;
  		} else {
  		
  		FOSSILWORLD = Number(total_fossil_user)*Number(fossilf_parse);		
  		}
  		
  		
  		  var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked'); 		
  		if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='ela')) {
  	  		ELECA2 = Number(total_el_user)*Number(elec_parse);
  	  	elecGlobalA = ELECA2;
  	  		}
  		  else	if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
  		ELECB = Number(total_el_user)*Number(elec_parse);		
  		elecGlobalB = ELECB;
  		  }
  		else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
  			ELECC = Number(total_el_user)*Number(elec_parse);		
  			elecGlobalC = ELECC;
  		}
  		else if ((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
  			ELECD = Number(total_el_user)*Number(elec_parse);	
  			elecGlobalD = ELECD;
  		} else {
  		
  		ELECWORLD = Number(total_el_user)*Number(elec_parse);		
  		}
  	
var SUMA = Number(FOSSILA2)+Number(BIOA2)+Number(ELECA2);
   var SUMB = Number(FOSSILB)+Number(BIOB)+Number(ELECB);
   var SUMC = Number(FOSSILC)+Number(BIOC)+Number(ELECC);
   var SUMD = Number(FOSSILD)+Number(BIOD)+Number(ELECD);
   var SUMWORLD = Number(FOSSILWORLD)+Number(BIOWORLD)+Number(ELECWORLD);
   var SUMLOCALENERGY = Number(FOSSILA)+Number(BIOA)+Number(ELECA);
   
   var calcolopercen1 = (SUMLOCALENERGY)+(SUMA)+(SUMB)+(SUMC)+(SUMD);
   var calcolopercen2 = calcolopercen1+(SUMWORLD);
   
    percentage_energy = parseFloat(((calcolopercen1)/(calcolopercen2))*100).toFixed(1);
    if (percentage_energy == 100.0) {
    	percentage_energy = Math.round(percentage_food);
    }
  	//-----------------------------------------------------------------------------------------------
  	
  	//-----------------------------------------------------------------------------------------------

  	
  	//----------------------------------------------------------------------------------------------
  	
	var local_energy = SUMLOCALENERGY;
	local_energy = Math.round(local_energy);
	local_energy = Number(local_energy);
  	var A_en = SUMA;
  	A_en = Math.round(A_en);
  	A_en = Number(A_en);
  	var B_en = SUMB;
  	B_en = Math.round(B_en);
  	B_en = Number(B_en);
  	var C_en = SUMC;
  	C_en = Math.round(C_en);
  	C_en = Number(C_en);
  	var D_en = SUMD;
  	D_en = Math.round(D_en);
  	D_en = Number(D_en);
  	var world_en = SUMWORLD;
  	world_en = Math.round(world_en);
  	world_en = Number(world_en);
  		  
  	A_obj = JSON.parse(localStorage.getItem("regionADataOutput"));
  	B_obj = JSON.parse(localStorage.getItem("regionBDataOutput"));
  	C_obj = JSON.parse(localStorage.getItem("regionCDataOutput"));
  	D_obj = JSON.parse(localStorage.getItem("regionDDataOutput"));
  	//WORLD_obj = JSON.parse(localStorage.getItem("WORLDDataOutput"));
  	
  	A_ext = JSON.parse(localStorage.getItem("A_external"));
  	B_ext = JSON.parse(localStorage.getItem("B_external"));
  	C_ext = JSON.parse(localStorage.getItem("C_external"));
  	D_ext = JSON.parse(localStorage.getItem("D_external"));
  	
  	////console.log("A_obj: "+JSON.stringify(A_obj)+" --- B_obj: "+JSON.stringify(A_obj)+" --- C_obj: "+JSON.stringify(A_obj)+" --- D_obj: "+JSON.stringify(A_obj));
  	
  	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
  		A_obj["security_energy"] = local_energy;
  		A_obj["InRegionB_energy"] = B_en;
  		A_obj["InRegionC_energy"] = C_en;
  		A_obj["InRegionD_energy"] = D_en;
  		A_obj["WORLD_A_security_energy"] = world_en;
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
  		B_obj["security_energy"] = local_energy;
  		B_obj["InRegionA_energy"] = A_en;
  		B_obj["InRegionC_energy"] = C_en;
  		B_obj["InRegionD_energy"] = D_en;
  		B_obj["WORLD_B_security_energy"] = world_en;
  	}
  	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
  		C_obj["security_energy"] = local_energy;
  		C_obj["InRegionA_energy"] = A_en;
  		C_obj["InRegionB_energy"] = B_en;
  		C_obj["InRegionD_energy"] = D_en;
  		C_obj["WORLD_C_security_energy"] = world_en;
  	}
  	else {
  		D_obj["security_energy"] = local_energy;
  		D_obj["InRegionA_energy"] = A_en;
  		D_obj["InRegionB_energy"] = B_en;
  		D_obj["InRegionC_energy"] = C_en;
  		D_obj["WORLD_D_security_energy"] = world_en;
  	}
  	
  	////console.log("A_obj: "+A_obj+" --- B_obj: "+B_obj+" --- C_obj: "+C_obj+" --- D_obj: "+D_obj);
  	  	
  	localStorage.setItem("regionADataOutput", JSON.stringify(A_obj));
  	localStorage.setItem("regionBDataOutput", JSON.stringify(B_obj));
  	localStorage.setItem("regionCDataOutput", JSON.stringify(C_obj));
  	localStorage.setItem("regionDDataOutput", JSON.stringify(D_obj));
  	//localStorage.setItem("WORLDDataOutput", JSON.stringify(WORLD_obj));

  	
  var datiaggsec2 = [local_energy, A_en, B_en, C_en, D_en, world_en];
  doughnutSimpleChart3.data.datasets[0].data = datiaggsec2;
  
  doughnutSimpleChart3.update();
  }

    var myVarpolar_due = setInterval(aggiornaSecuritydue, 3000);   
});