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
var RC_WFgreen_Meat = 190;  var RC_WFblue_Meat = 0.10;  var RC_LF_Meat = 0.0140;
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
    $black = '#000',
    $waste = '#A3A800';

var giallo = $warning;
var rosso = $danger;
var verde = $success;
var blu = $primary;


  	var themeColors = [$primary, $warning, $danger, $success, $info, $label_color];
  	var themeColorsWaste = [$primary, $warning, $danger, $waste];
  	
  	

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
        text: 'Composition (kcal)'
      },
      tooltips: {
        	mode: 'index',
          	callbacks: {
          	/*
          	afterLabel: function(tooltipItem, data) {
            	var sum = data.datasets.reduce((sum, dataset) => {
              	return sum + dataset.data[tooltipItem.index];
              }, 0);
              var percent = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] / sum * 100;
              percent = percent.toFixed(2); // make a nice string
              return data.datasets[tooltipItem.datasetIndex].label + ': ' + percent + '%';
            }
          	*/
          	afterLabel: function(tooltipItem, data) {
            	var sum = Number(data.datasets[0].data[0])+Number(data.datasets[0].data[1])+Number(data.datasets[0].data[2])+Number(data.datasets[0].data[3]);
           		
           		var percent=0;
           		/*
           		if(data.labels[tooltipItem.index] == "Plant-based Products"){
					percent = Math.round(Number(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index])/Number(sum)*100);
				}
				else if(data.labels[tooltipItem.index] == "Meat & Fish"){
					percent = Math.round(Number(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index])/Number(sum)*100);
				}
				else if(data.labels[tooltipItem.index] == "Dairy & Eggs"){
					percent = Math.round(Number(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index])/Number(sum)*100);
				}
				else {
					percent = Math.round(Number(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index])/Number(sum)*100);
				}
				*/
				percent = Math.round(Number(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index])/Number(sum)*100);
           		percent = percent.toFixed(2); // make a nice string	
           		return data.datasets[tooltipItem.datasetIndex].label + ': ' + percent + '%';
            }
          }
        }
    };

    
    
    // Chart Data
    var piechartData = {
      labels: ["Plant-based Products", "Meat & Fish", "Dairy & Eggs", "Waste"],
      datasets: [{
        label: "label",
        data: [1886, 375, 399, 2660],
        backgroundColor: themeColorsWaste,
      }],

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
  	  var plant_based = (plant1*intakeparse);
  	
  	  var plantbased_val = (parseFloat(plant_based).toFixed(2))/100;		

  //calcolo i valori per MEAT & FISH:
  
  	  ////console.log("precalories MEAT: "+meat1);
  	  var meat_based = (meat1*intakeparse);
  	  var meatfish_val = (parseFloat(meat_based).toFixed(2))/100;		

  //calcolo i valori per DIARY & EGGS:

  	  var diary_based = (diary1*intakeparse);
  	  var diary_val = (parseFloat(diary_based).toFixed(2))/100;		
 
  //calcolo WASTE:
  	  var waste_val = parseFloat((wasteparse*intakeparse)/100).toFixed(2);
  	  waste_val = parseFloat(waste_val).toFixed(2);
  	  ////console.log("waste: "+waste_val);
  	  

  		  	  //////console.log("vege input:" +vege);

  	  	var datiagg = [plantbased_val, meatfish_val, diary_val, waste_val];
  	 ////console.log("lista " +datiagg);
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
        text: 'Electricity Mix'
      },
      
    };

    // Chart Data
    var doughnutchartData = {
      labels: ["Wind", "Solar", "Hydro", "Biofuels", "Nuclear", "Fossil"],
      datasets: [{
        label: "My First dataset",
        data: [12, 3, 18, 3, 4, 60],
        backgroundColor: themeColors,
      }],
      
    };

    var doughnutChartconfig = {
      type: 'doughnut',

      // Chart Options
      options: doughnutchartOptions,

      data: doughnutchartData,
      
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

 



 function aggiorna_en() {	  
 		//////////////////// CALCOLO ENERGY ///////////////////////////////
////////////////////CALCOLO ENERGY ///////////////////////////////
	 var red_ind_parse = parseFloat(document.getElementById("e_N5").value)/100;
	 var red_tr_parse = parseFloat(document.getElementById("e_N6").value)/100;
	 var red_ser_parse =parseFloat(document.getElementById("e_N7").value)/100;
	 var red_house = parseFloat(document.getElementById("e_N8").value)/100;
	 var el_tr_parse; //= parseFloat(document.getElementById("e_N11").value)/100;  
	 var fuel_house_parse = parseFloat(document.getElementById("e_N12").value)/100;  
	 var bio_fr_parse; //= parseFloat(document.getElementById("e_N13").value)/100;  
	////console.log("BIO_FR_PARSE_CHOICES: "+bio_fr_parse);
	 var fossilf_parse = parseFloat(document.getElementById("L30").value)/100;
	 var biofuels_parse = parseFloat(document.getElementById("L31").value)/100;
	 var elec_parse = parseFloat(document.getElementById("L32").value)/100;
	 
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
	 //---------------------------------------------------------------------------------------------------
	 var checkregion = document.querySelector('input[name="region"]:checked');
	 var region = checkregion.getAttribute("id");
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
	 	  	  ////console.log("BIO INDUSTRY A: "+bio_ind);
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
	  	  ////console.log("BIO INDUSTRY B: "+bio_ind);

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
	/* var somma_valori_tr = Number(fossil_tr)+Number(bio_tr)
	 somma_valori_tr = somma_valori_tr+Number(el_tr);
	 var somma_valori_ind = Number(fossil_ind)+Number(bio_ind)+Number(el_ind);
	 var somma_valori_s = Number(fossil_s)+Number(bio_s)+Number(el_s);
	 var somma_valori_house = Number(fossil_house)+Number(bio_house)+Number(el_house);*/
	 //----------------------------------------------------------------------------------------------------
	/* var A6a = (1-red_ind_parse)*(somma_valori_ind);
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
	 ////console.log("datiaggFI... "+f_i);
	 var f_t = (1-Number(bio_fr_parse))*(B6a-B6b);
	 ////console.log("datiaggFT... "+f_t);
	 var f_s = (1-Number(bio_fr_parse))*(C6a-C6b);
	 ////console.log("datiaggFS... "+f_s);
	 var f_h = (1-Number(bio_fr_parse))*(D6a);
	 ////console.log("datiaggFH... "+f_h);
	 	  	  

	 //-----------------------------------------------------------------------------------------------------
	 //calcolo valori iniziali di BIOFUEL USER:	  
	 var bio_i_primaop = (A6a)-(A6b);
	 var b_i = (bio_fr_parse)*(A6b);
	 ////console.log("datiaggBI... "+b_i);
	 var b_t = (bio_fr_parse)*(B6a-B6b);
	 ////console.log("datiaggBT... "+b_t);
	 var b_s = (bio_fr_parse)*(C6a-C6b);
	 ////console.log("datiaggBS... "+b_s);
	 var b_h = (bio_fr_parse)*(D6a);
	 ////console.log("datiaggBH... "+b_h);

	 //-----------------------------------------------------------------------------------------------------
	 var e_i = (1-Number(red_ind_parse))*el_ind;
	 ////console.log("datiaggEI... "+e_i);
	 var e_t = (el_tr_parse)*(B6a);
	 ////console.log("datiaggEI... "+e_t);
	 var e_s = (1-red_ind_parse)*Number(el_s);
	 ////console.log("datiaggEI... "+e_s);
	 e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
	 ////console.log("datiaggEI... "+e_h);*/
	//----------------------------------------------------------------------------------------------------
	 var somma_valori_tr = (fossil_tr+bio_tr+el_tr);
	 var somma_valori_ind = (fossil_ind+bio_ind+el_ind);
	 var somma_valori_s = (fossil_s+bio_s+el_s);
	 var somma_valori_house = (fossil_house+bio_house+el_house);
	 //console.log("somma_valori_tr: "+somma_valori_tr+" somma_valori_ind: "+somma_valori_ind+" somma_valori_s: "+somma_valori_s+" somma_valori_house: "+somma_valori_house);
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

	 //console.log("BIO CF INT = EnergyJ35 (ok) =  "+bio_final_cf);

	 //-----------------------------------------------------------------------------------------------------
	 var e_i = (1-Number(red_ind_parse))*el_ind;
	 var e_t = (el_tr_parse)*(B6a);
	 var e_s = (1-red_ind_parse)*Number(el_s);
	 e_h = (((fuel_house_parse)*((bio_house)+(fossil_house)))+(el_house))*(1-(red_house));
	 //console.log(e_i+" "+e_t+" "+e_s+" "+e_h);  	
	 var total_el_user = (e_i)+(e_t)+(e_s)+(e_h);
	 var energy_elec_val = (total_el_user)*((1-Number(elec_parse)));
	 //console.log("M29 ELECTRICITY VALORE PER MATR. SOMMA PROD"+energy_elec_val);

	 //console.log("e_i"+e_i+"e_t"+e_t+"e_s"+e_s+"e_h"+e_h+"total_el_user"+total_el_user);
	 //var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
	 //if((checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='ela')) {
	 if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 

	 	var elec1= (windp)*(RA_CF_Wind);
	 	////console.log("SOMMA ELEC1: "+elec1);
	 	var elec2 =(solarp)*(RA_CF_Solar);
	 	var elec3 =(hydrop)*(RA_CF_Hydro);
	 	var elec4 =(biofup)*(RA_CF_Biofuel);
	 	var elec5 =(nuclearp)*(RA_CF_Nuclear);
	 	var elec6 =(fuelp)*(RA_CF_Fossil); 	
	 }
	 else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 

	 	var elec1= (windp)*(RA_CF_Wind);
	 	////console.log("SOMMA ELEC1: "+elec1);
	 	var elec2 =(solarp)*(RA_CF_Solar);
	 	var elec3 =(hydrop)*(RA_CF_Hydro);
	 	var elec4 =(biofup)*(RA_CF_Biofuel);
	 	var elec5 =(nuclearp)*(RA_CF_Nuclear);
	 	var elec6 =(fuelp)*(RA_CF_Fossil); 	
	 }
	 else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 

	 	var elec1= (windp)*(RA_CF_Wind);
	 	////console.log("SOMMA ELEC1: "+elec1);
	 	var elec2 =(solarp)*(RC_D_CF_Solar);
	 	var elec3 =(hydrop)*(RC_D_CF_Hydro);
	 	var elec4 =(biofup)*(RC_D_CF_Biofuel);
	 	var elec5 =(nuclearp)*(RC_D_CF_Nuclear);
	 	var elec6 =(fuelp)*(RC_D_CF_Fossil); 	
	 }
	 else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) { 

	 	var elec1= (windp)*(RA_CF_Wind);
	 	////console.log("SOMMA ELEC1: "+elec1);
	 	var elec2 =(solarp)*(RC_D_CF_Solar);
	 	var elec3 =(hydrop)*(RC_D_CF_Hydro);
	 	var elec4 =(biofup)*(RC_D_CF_Biofuel);
	 	var elec5 =(nuclearp)*(RC_D_CF_Nuclear);
	 	var elec6 =(fuelp)*(RC_D_CF_Fossil); 	
	 } 
	 else {
	 	
	 }
	 var elec1add = (elec1)+(elec2);
	 var elec2add = (elec3)+(elec4);
	 var elec3add = (elec5)+(elec6);
	 //console.log("ELECTRICITY SUM ELEC1ADD: "+elec1add);
	 //console.log("ELECTRICITY SUM ELEC2ADD: "+elec2add);
	 //console.log("ELECTRICITY SUM ELEC3ADD: "+elec3add);

	 var electricity_sum = (elec1add)+(elec2add)+(elec3add);

	 var elec_final_cf = (energy_elec_val)*(electricity_sum)/1000;
	 //console.log("ENERGY ELEC TOTAL CF "+elec_final_cf);
	 //console.log("SOMMA TOTAL USERS "+total_fossil_user+" "+total_bio_user+" "+total_el_user);
	 //-----------------------------------------------------------------------------------------------
	 var datoCFen_internal = elec_final_cf+bio_final_cf+fossil_final_cf;
	 CF_Energy_Internal=datoCFen_internal;
	 //console.log("ENERGY TOTAL CF "+datoCFen_internal);


 	  
 	  var datiaggF = [f_i, f_t, f_s, f_h];
 	  ////console.log("datiaggF "+datiaggF);
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
});