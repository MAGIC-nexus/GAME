/*=========================================================================================
    File Name: chart-chartjs.js
    Description: Chartjs Examples
    ----------------------------------------------------------------------------------------
    Item Name: Frest HTML Admin Template
    Version: 1.0
    Author: PIXINVENT
    Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(window).on("load", function () {
	
	//PERCENTUALI ENERGIE PER REGIONI, VALORI FISSI
	
var PER_A_Wind = 12;  var PER_B_Wind = 8;	var PER_C_wind = 12;	var PER_D_Wind = 11;
var PER_A_Solar = 3;  var PER_B_Solar = 1; var PER_C_Solar = 6; var PER_D_Solar = 2;
var PER_A_Hydro = 18; var PER_B_Hydro = 27; var PER_C_Hydro = 6;	var PER_D_Hydro = 9;
var PER_A_Biofuel =3; var PER_B_Biofuel = 8;  var PER_C_Biofuel = 7; var PER_D_Biofuel = 2;
var PER_A_Nuclear = 4; var PER_B_Nuclear = 34;  var PER_C_Nuclear = 14; var PER_D_Nuclear = 35;
var PER_A_Fossil = 60; var PER_B_Fossil = 28;  var PER_C_Fossil = 55; var PER_D_Fossil = 41;

//VALORI FOOD PER REGIONE WF GREEN, WF BLUE, LF, CF - CF è UGUALE PER TUTTE LE REGIONI

var RA_WFgreen_Plant = 0.608; var RA_WF_blue_Plant = 0.152; var RA_LF_Plant = 0.0005; var RA_CF_Plant = 0.0008;  
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
var RA_WFgreen_Biofuel=90.000; var RA_WFblue_Biofuel=10.000; var RA_LF_Biofuel= 125.000;var RA_CF_Biofuel= 19.2;
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
var RC_D_WFgreen_Biofuel =90; var RC_D_blue_Biofuel =10.00; var RC_D_LF_Biofuel = 125.000;
var RC_D_WFgreen_Nuclear =0; var RC_D_WFblue_Nuclear =567.00; var RC_D_LF_Nuclear = 0.278;
var RC_D_WFgreen_Fossil =0; var RC_D_WFblue_Fossil = 388.00; var RC_D_LF_Fossil =0.028;

var Rainfed = 84;
var Irrigated = 100-Rainfed;

var YG_closing_LF = 17; var Mulching_LF = 25; var YG_closing_WFg = 17; var Mulching_WFg = 25;
var Deficit_Irrigation_LF = -10; var Deficit_Mul_LF = -10; var Deficit_Irrigation_WFg = -8;
var Deficit_Mul_WFg = 2; var Deficit_Irrigation_WFb = 15; var Deficit_Mul_WFb = 30;
var Deficit_Mul_Drip_LF = -2; var Deficit_Mul_Drip_WFg = 5; var Deficit_Mul_Drip_WFb = 35;

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
      label: "Africa",
      data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
      borderColor: $primary,
      fill: false
    }, {
      data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
      label: "Asia",
      borderColor: $success,
      fill: false
    }, {
      data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
      label: "Europe",
      borderColor: $danger,
      fill: false
    }, {
      data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
      label: "Latin America",
      borderColor: $warning,
      fill: false
    }, {
      data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
      label: "North America",
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
		      label: 'Serie "Food" punto Internal',
		      data: [16, 0],
		      backgroundColor: 'yellow'
		      
		    }, {
		      type: 'bar',
		      label: 'Serie "Energy" punto External',
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
	  
	  var daysp = parseInt(days); 
	  var intake = document.getElementById("f_D4").value;
	  var intakeparse = parseInt(intake);
	  //console.log("intake: "+intakeparse);
	  var waste = document.getElementById("f_D5").value;
	  var wasteparse = parseInt(waste);
	  var veg = document.getElementById("f_C6").value;
	  var vegparse =parseInt(veg);
	  var vege = document.getElementById("f_C7").value;
	  var vegeparse = parseInt(vege);
	  var meat = document.getElementById("f_C8").value;
	  var meatparse = parseInt(meat);
	  
	  var food_import_plant = document.getElementById("E30").value;
	  	var fip = parseInt(food_import_plant);
	  var food_import_meat = document.getElementById("E31").value;
	  	var fim = parseInt(food_import_meat);
	  var food_import_diary = document.getElementById("E32").value;
	  	var fid = parseInt(food_import_diary);
	  	
		  var rain_user = document.getElementById("G14").value;
		  	var rain_parse = parseInt(rain_user);
		    var irr_user = document.getElementById("G15").value;
		  	var irr_parse = parseInt(irr_user); 	
	  
	  var days = document.getElementById("A8_f").value;
	  var totalone = vegparse+vegeparse+meatparse;
	  
	  var wind = document.getElementById("em_J21").value;
	  var windp = parseInt(wind);	
	  var fuel = document.getElementById("em_J26").value;
	  var fuelp = parseInt(fuel);
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
	  var vegan_val = vegparse/totalone*100;	
	  var vege_val = (vegeparse/totalone*100)+[meatparse/totalone*(7-days)/7]*100;
	  var meat_val = [(meatparse/totalone)*(days/7)]*100;
	  
//calcolo i valori per PLANT BASED:
	  var plant0 =  (vegan_val*100)+(vege_val*85)+(meat_val*70);
	  var plantA = parseFloat(plant0/100).toFixed(2);
	   plant1 = parseFloat(plantA).toFixed(2);

//calcolo i valori per MEAT & FISH:
	  var meat1 = parseFloat((vegan_val*0)+(vege_val*0)+(meat_val*15)).toFixed(2);
	   meat1 = parseFloat(meat1).toFixed(2);
	 
//calcolo i valori per DIARY & EGGS:
	  var diary1 = parseFloat((vegan_val*0)+(vege_val*15)+(meat_val*15)).toFixed(2)/100;
	   diary1 = parseFloat(diary1).toFixed(2);
	  
//calcolo WASTE:
	  var waste_val = parseFloat((wasteparse*intakeparse)/100).toFixed(2);
	  waste_val = parseFloat(waste_val).toFixed(2);

	  //CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
//OTTENGO LA PERCENTUALE BASE
	  var plantbased = plant1*(waste_val+intakeparse);
	  var meatbased = meat1*(waste_val+intakeparse);
	  var diarybased = diary1*(waste_val+intakeparse);
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
	  var calcolo_rain_plant = [rain_parse*(YG_closing_WFg)];
	  var calcolo_irr_plant = [irr_parse*(Mulching_WFg)];
	  var calcolo_pioggia_tot = (calcolo_rain_plant+calcolo_irr_plant)/100
	  var tot_percentuale_pioggia = (Rainfed*calcolo_pioggia_tot)+(Irrigated*0);
	  
	 //CALCOLO IL VALORE PER LE SOMME DI FOOD CF:

	  var plantres_cf = plantbased*(100-fip)*[RA_CF_Plant*(1-tot_percentuale_pioggia)];
	  var meatres_cf = meatbased*(100-fim)*[RA_CF_Meat*(1-tot_percentuale_pioggia)];
	  var diaryres_cf = diarybased*(100-fid)*[RA_CF_Meat*(1-tot_percentuale_pioggia)];	 
	  
	  var dataCF_food_int = plantres_cf+meatres_cf+diaryres_cf;
	  		
//////////////////// CALCOLO ENERGY ///////////////////////////////
	  		var reduction_ind = document.getElementById("e_N5").value;
	  	  var red_ind_parse = parseInt(reduction_ind);
	  	  //console.log("red_ind: "+red_ind_parse);
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
	  	  
	  	  var fossilfuels = document.getElementById("L30").value;
	  	  		var fossilf_parse = parseInt(fossilfuels);
	  	  var biofuels = document.getElementById("L31").value;
	  	  		var biofuels_parse = parseInt(biofuels);
	  	  var elctfuels = document.getElementById("L32").value;
	  	  		var elec_parse = parseInt(elctfuels);
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
		  
	  	  var somma_valori_tr = fossil_tr+bio_tr+el_tr;
	  	  //console.log(somma_valori_tr);
	  	  var somma_valori_ind = fossil_ind+bio_ind+el_ind;
	  	  var somma_valori_s = fossil_s+bio_s+el_s;
	  	  var somma_valori_house = fossil_house+bio_house+el_house;
	  	//FINE CONSUMPTION  
	  	  
	  	var A6a = (1-red_ind_parse)*somma_valori_ind;  
	  	var A6b = A6a - [(1-red_ind_parse)*el_ind];
	  	
	  	var B6a = (1-red_tr_parse)*[(1-el_tr_parse *(1-0.7/2.3))*fossil_tr];
	  	var B6b = el_tr_parse * B6a;
	  	
	  	var C6a = (1-red_ser_parse)*somma_valori_s;
	  	var C6b = (1-red_ind_parse)*el_s;
	  	
	  	var D6a = (1-red_house)*somma_valori_house;
	  	var D6b = [(fuel_house_parse * somma_valori_house)+el_house]*(1-red_house);
	  	  
	  //calcolo valori iniziali di FOSSIL : industry -transport -services -households
	  	  var f_i = parseFloat((1-bio_fr_parse)*(A6a-A6b)).toFixed(2);
	  	  var f_t = parseFloat((1-bio_fr_parse)*(B6a-B6b)).toFixed(2);
	  	  var f_s = parseFloat((1-bio_fr_parse)*(C6a-C6b)).toFixed(2);
	  	  var f_h = parseFloat((1-bio_fr_parse)*(D6a-D6b)).toFixed(2);
	  //caoclo valori iniziali di BIOFUEL	  
	  	  var b_i = parseFloat((bio_fr_parse)*(A6a-A6b)).toFixed(2);
	  	  var b_t = parseFloat((bio_fr_parse)*(B6a-B6b)).toFixed(2);
	  	  var b_s = parseFloat((bio_fr_parse)*(C6a-C6b)).toFixed(2);
	  	  var b_h = parseFloat((bio_fr_parse)*(D6a-D6b)).toFixed(2);
	  //calcolo valori iniziali ELECTRICITY:
	  	  var e_i = parseFloat((1-red_ind_parse)*el_ind).toFixed(2);
	  	  var e_t = parseFloat((el_tr_parse)*(A6a)).toFixed(2);
	  	  var e_s = parseFloat((1-red_ind_parse)*(somma_valori_s)).toFixed(2);
	  	  var e_h = parseFloat((fuel_house_parse)*(somma_valori_house + el_house)*(1-red_house)).toFixed(2);

	  	  
	  	  var energy_fossil_val = f_i+f_t+f_s+f_h*(1-fossilf_parse);
	  	  var energy_bio_val = b_i+b_t+b_s+b_h*(1-biofuels_parse);
	  	  var energy_elec_val = e_i+e_t+e_s+e_h*(1-elec_parse);
	  	  
	  	  ///CALCOLO VALORI FINALI CF///
	  	
	  	  var fossil_final_cf = energy_fossil_val*(RA_CF_Fossil*0,25)/1000;
	  	  var bio_final_cf = energy_bio_val*(RA_CF_Biofuel*0,27);
	  	  var elec_final_cf = energy_elec_val*(PER_A_Wind*RA_CF_Wind)+(PER_A_Solar*RA_CF_Solar)+(PER_A_Hydro*RA_CF_Hydro)+(PER_A_Biofuel*RA_CF_Biofuel)+(PER_A_Nuclear*RA_CF_Nuclear)+(PER_A_Fossil*RA_CF_Fossil); 	  	  
	  		
	  	  var datoCFen_internal = fossil_final_cf+bio_final_cf+elec_final_cf;
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////	
	  	  
	  var GT1 = document.getElementById("GT1");
	  var GT1p = GT1.innerText;	  
		
	
	var dataoneext = 6;
	var datatwoext =0;  
		

	  
	  var datiaggbar = [dataCF_food_int, dataoneext];
	  var datiaggbar2 = [datoCFen_internal, datatwoext];
	
	  barChart.data.datasets[0].data = datiaggbar;
	  barChart.data.datasets[1].data = datiaggbar2;
barChart.update();
GT1pp = parseFloat(GT1p);

var calc = parseFloat((dataCF_food_int+8 - 20/20)/100).toFixed(2);
document.getElementById("percent1").innerHTML = calc + "% above initial value";
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
		      label: 'Serie "Food" punto Internal',
		      data: [15, 3],
		      backgroundColor: 'yellow'
		      
		    }, {
		      type: 'bar',
		      label: 'Serie "Energy" punto External',
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
  
  
 
  var days = document.getElementById("A8_f").value;
  var daysp = parseInt(days); 
  
 
	  function aggiornabar2() {	 
		  var GT2 = document.getElementById("GT2").innerText;
		  var GT2p = parseFloat(GT2);
	days = document.getElementById("A8_f").value;
   daysp = parseInt(days); 

	  var intake = document.getElementById("f_D4").value;
	  var intakeparse = parseInt(intake);
	  //console.log("intake: "+intakeparse);
	  var waste = document.getElementById("f_D5").value;
	  var wasteparse = parseInt(waste);
	  var veg = document.getElementById("f_C6").value;
	  var vegparse =parseInt(veg);
	  var vege = document.getElementById("f_C7").value;
	  var vegeparse = parseInt(vege);
	  var meat = document.getElementById("f_C8").value;
	  var meatparse = parseInt(meat);
	  
	  var food_import_plant = document.getElementById("E30").value;
	  	var fip = parseInt(food_import_plant);
	  var food_import_meat = document.getElementById("E31").value;
	  	var fim = parseInt(food_import_meat);
	  var food_import_diary = document.getElementById("E32").value;
	  	var fid = parseInt(food_import_diary);
	  	
		  var rain_user = document.getElementById("G14").value;
		  	var rain_parse = parseInt(rain_user);
		    var irr_user = document.getElementById("G15").value;
		  	var irr_parse = parseInt(irr_user); 	
	  
	  var days = document.getElementById("A8_f").value;
	  var totalone = vegparse+vegeparse+meatparse;
	  
	  var wind = document.getElementById("em_J21").value;
	  var windp = parseInt(wind);	
	  var fuel = document.getElementById("em_J26").value;
	  var fuelp = parseInt(fuel);
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
	  var vegan_val = vegparse/totalone*100;	
	  var vege_val = (vegeparse/totalone*100)+[meatparse/totalone*(7-days)/7]*100;
	  var meat_val = [(meatparse/totalone)*(days/7)]*100;
	  
//calcolo i valori per PLANT BASED:
	  var plant0 =  (vegan_val*100)+(vege_val*85)+(meat_val*70);
	  var plantA = parseFloat(plant0/100).toFixed(2);
	   plant1 = parseFloat(plantA).toFixed(2);

//calcolo i valori per MEAT & FISH:
	  var meat1 = parseFloat((vegan_val*0)+(vege_val*0)+(meat_val*15)).toFixed(2);
	   meat1 = parseFloat(meat1).toFixed(2);
	 
//calcolo i valori per DIARY & EGGS:
	  var diary1 = parseFloat((vegan_val*0)+(vege_val*15)+(meat_val*15)).toFixed(2)/100;
	   diary1 = parseFloat(diary1).toFixed(2);
	  
//calcolo WASTE:
	  var waste_val = parseFloat((wasteparse*intakeparse)/100).toFixed(2);
	  waste_val = parseFloat(waste_val).toFixed(2);

	  //CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
//OTTENGO LA PERCENTUALE BASE
	  var plantbased = plant1*(waste_val+intakeparse);
	  //console.log("BARCHART:"+plantbased);
	  var meatbased = meat1*(waste_val+intakeparse);
	  var diarybased = diary1*(waste_val+intakeparse);
//CALCOLO IL VALORE PER LE SOMME DI FOOD:
	  var calcolo_rain_plant = [rain_parse*(YG_closing_WFg)];
	  var calcolo_irr_plant = [irr_parse*(Mulching_WFg)];
	  var calcolo_pioggia_tot = (calcolo_rain_plant+calcolo_irr_plant)/100
	  var tot_percentuale_pioggia = (Rainfed*calcolo_pioggia_tot)+(Irrigated*0);  

	  
	//CALCOLO IL VALORE PER LE SOMME DI FOOD LF:

	  var plantres_lf = plantbased*(100-fip)*[RA_LF_Plant*(1-tot_percentuale_pioggia)];
	  var meatres_lf = meatbased*(100-fim)*[RA_LF_Meat*(1-tot_percentuale_pioggia)];
	  var diaryres_lf = diarybased*(100-fid)*[RA_LF_Meat*(1-tot_percentuale_pioggia)];	  
	  
var dataLF_food_int = plantres_lf+meatres_lf+diaryres_lf;
	  		
//////////////////// CALCOLO ENERGY ///////////////////////////////
	  		var reduction_ind = document.getElementById("e_N5").value;
	  	  var red_ind_parse = parseInt(reduction_ind);
	  	  //console.log("red_ind: "+red_ind_parse);
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
	  	  
	  	  var fossilfuels = document.getElementById("L30").value;
	  	  		var fossilf_parse = parseInt(fossilfuels);
	  	  var biofuels = document.getElementById("L31").value;
	  	  		var biofuels_parse = parseInt(biofuels);
	  	  var elctfuels = document.getElementById("L32").value;
	  	  		var elec_parse = parseInt(elctfuels);
	  	  		//CONSUMPTION REGION B - VALORI FISSI
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
		  
	  	  var somma_valori_tr = fossil_tr+bio_tr+el_tr;
	  	  //console.log(somma_valori_tr);
	  	  var somma_valori_ind = fossil_ind+bio_ind+el_ind;
	  	  var somma_valori_s = fossil_s+bio_s+el_s;
	  	  var somma_valori_house = fossil_house+bio_house+el_house;
	  	//FINE CONSUMPTION  
	  	  
	  	var A6a = (1-red_ind_parse)*somma_valori_ind;  
	  	var A6b = A6a - [(1-red_ind_parse)*el_ind];
	  	
	  	var B6a = (1-red_tr_parse)*[(1-el_tr_parse *(1-0.7/2.3))*fossil_tr];
	  	var B6b = el_tr_parse * B6a;
	  	
	  	var C6a = (1-red_ser_parse)*somma_valori_s;
	  	var C6b = (1-red_ind_parse)*el_s;
	  	
	  	var D6a = (1-red_house)*somma_valori_house;
	  	var D6b = [(fuel_house_parse * somma_valori_house)+el_house]*(1-red_house);
	  	  
	  //calcolo valori iniziali di FOSSIL : industry -transport -services -households
	  	  var f_i = parseFloat((1-bio_fr_parse)*(A6a-A6b)).toFixed(2);
	  	  var f_t = parseFloat((1-bio_fr_parse)*(B6a-B6b)).toFixed(2);
	  	  var f_s = parseFloat((1-bio_fr_parse)*(C6a-C6b)).toFixed(2);
	  	  var f_h = parseFloat((1-bio_fr_parse)*(D6a-D6b)).toFixed(2);
	  //caoclo valori iniziali di BIOFUEL	  
	  	  var b_i = parseFloat((bio_fr_parse)*(A6a-A6b)).toFixed(2);
	  	  var b_t = parseFloat((bio_fr_parse)*(B6a-B6b)).toFixed(2);
	  	  var b_s = parseFloat((bio_fr_parse)*(C6a-C6b)).toFixed(2);
	  	  var b_h = parseFloat((bio_fr_parse)*(D6a-D6b)).toFixed(2);
	  //calcolo valori iniziali ELECTRICITY:
	  	  var e_i = parseFloat((1-red_ind_parse)*el_ind).toFixed(2);
	  	  var e_t = parseFloat((el_tr_parse)*(A6a)).toFixed(2);
	  	  var e_s = parseFloat((1-red_ind_parse)*(somma_valori_s)).toFixed(2);
	  	  var e_h = parseFloat((fuel_house_parse)*(somma_valori_house + el_house)*(1-red_house)).toFixed(2);

	  	  
	  	  var energy_fossil_val = f_i+f_t+f_s+f_h*(1-fossilf_parse);
	  	  var energy_bio_val = b_i+b_t+b_s+b_h*(1-biofuels_parse);
	  	  var energy_elec_val = e_i+e_t+e_s+e_h*(1-elec_parse);
	  	  
	  	  ///CALCOLO VALORI FINALI///
	  	  var fossil_final_wfgreen = energy_fossil_val*(RA_WFgreen_Fossil*0,25)/1000;

	  	  var fossil_final_lf = energy_fossil_val*(RA_LF_Fossil*0,25)/1000;
	  	  var bio_final_lf = energy_bio_val*(RA_LF_Biofuel*0,27);
	  	  var elec_final_lf = energy_elec_val*(PER_A_Wind*RA_LF_Wind)+(PER_A_Solar*RA_LF_Solar)+(PER_A_Hydro*RA_LF_Hydro)+(PER_A_Biofuel*RA_LF_Biofuel)+(PER_A_Nuclear*RA_LF_Nuclear)+(PER_A_Fossil*RA_LF_Fossil); 	  	  
	  			  	
	  var datoLFen_internal = fossil_final_lf+bio_final_lf+elec_final_lf; 	  	  
	  			  	  	
  
//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////	   
   
   
	 dataoneext =0+daysp;
	 datatwoext =0+daysp;		

		  
		  var datiaggbar = [dataLF_food_int, dataoneext];
		  var datiaggbar2 = [datoLFen_internal, datatwoext];
		
		  barChart2.data.datasets[0].data = datiaggbar;
		  barChart2.data.datasets[1].data = datiaggbar2;
 barChart2.update();


	 document.getElementById("percent2").innerHTML = parseFloat((dataLF_food_int+2 - 13/13)/100).toFixed(2) + "% above initial value";
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
		      label: 'Serie "Food" punto Internal',
		      data: [4266, 2],
		      backgroundColor: 'yellow'
		      
		    }, {
		      type: 'bar',
		      label: 'Serie "Energy" punto External',
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
  
  var days = document.getElementById("A8_f").value;
  var daysp = parseInt(days); 
	  
   
 
	  function aggiornabar3() {	  
		  var GT3 = document.getElementById("GT3").innerText;
		  var GT3p = parseInt(GT3);	
		  days = document.getElementById("A8_f").value;
daysp = parseInt(days); 

var daysp = parseInt(days); 
var intake = document.getElementById("f_D4").value;
var intakeparse = parseInt(intake);
//console.log("intake: "+intakeparse);
var waste = document.getElementById("f_D5").value;
var wasteparse = parseInt(waste);
var veg = document.getElementById("f_C6").value;
var vegparse =parseInt(veg);
var vege = document.getElementById("f_C7").value;
var vegeparse = parseInt(vege);
var meat = document.getElementById("f_C8").value;
var meatparse = parseInt(meat);

var food_import_plant = document.getElementById("E30").value;
	var fip = parseInt(food_import_plant);
var food_import_meat = document.getElementById("E31").value;
	var fim = parseInt(food_import_meat);
var food_import_diary = document.getElementById("E32").value;
	var fid = parseInt(food_import_diary);
	
	  var rain_user = document.getElementById("G14").value;
	  	var rain_parse = parseInt(rain_user);
	    var irr_user = document.getElementById("G15").value;
	  	var irr_parse = parseInt(irr_user); 	

var days = document.getElementById("A8_f").value;
var totalone = vegparse+vegeparse+meatparse;

var wind = document.getElementById("em_J21").value;
var windp = parseInt(wind);	
var fuel = document.getElementById("em_J26").value;
var fuelp = parseInt(fuel);
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
var vegan_val = vegparse/totalone*100;	
var vege_val = (vegeparse/totalone*100)+[meatparse/totalone*(7-days)/7]*100;
var meat_val = [(meatparse/totalone)*(days/7)]*100;

//calcolo i valori per PLANT BASED:
var plant0 =  (vegan_val*100)+(vege_val*85)+(meat_val*70);
var plantA = parseFloat(plant0/100).toFixed(2);
 plant1 = parseFloat(plantA).toFixed(2);

//calcolo i valori per MEAT & FISH:
var meat1 = parseFloat((vegan_val*0)+(vege_val*0)+(meat_val*15)).toFixed(2);
 meat1 = parseFloat(meat1).toFixed(2);

//calcolo i valori per DIARY & EGGS:
var diary1 = parseFloat((vegan_val*0)+(vege_val*15)+(meat_val*15)).toFixed(2)/100;
 diary1 = parseFloat(diary1).toFixed(2);

//calcolo WASTE:
var waste_val = parseFloat((wasteparse*intakeparse)/100).toFixed(2);
waste_val = parseFloat(waste_val).toFixed(2);

//CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
//OTTENGO LA PERCENTUALE BASE
var plantbased = plant1*(waste_val+intakeparse);
//console.log("BARCHART:"+plantbased);
var meatbased = meat1*(waste_val+intakeparse);
var diarybased = diary1*(waste_val+intakeparse);
//CALCOLO IL VALORE PER LE SOMME DI FOOD WFGREEN:
var calcolo_rain_plant = [rain_parse*(YG_closing_WFg)];
var calcolo_irr_plant = [irr_parse*(Mulching_WFg)];
var calcolo_pioggia_tot = (calcolo_rain_plant+calcolo_irr_plant)/100
var tot_percentuale_pioggia = (Rainfed*calcolo_pioggia_tot)+(Irrigated*0);

var plantres_wfg = plantbased*(100-fip)*[RA_WFgreen_Plant*(1-tot_percentuale_pioggia)];
var meatres_wfg = meatbased*(100-fim)*[RA_WFgreen_Meat*(1-tot_percentuale_pioggia)];
var diaryres_wfg = diarybased*(100-fid)*[RA_WFgreen_Meat*(1-tot_percentuale_pioggia)];

var dataWFg_food_int = plantres_wfg+meatres_wfg+diaryres_wfg;
		
////////////////////CALCOLO ENERGY ///////////////////////////////
		var reduction_ind = document.getElementById("e_N5").value;
	  var red_ind_parse = parseInt(reduction_ind);
	  //console.log("red_ind: "+red_ind_parse);
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
	  
	  var fossilfuels = document.getElementById("L30").value;
	  		var fossilf_parse = parseInt(fossilfuels);
	  var biofuels = document.getElementById("L31").value;
	  		var biofuels_parse = parseInt(biofuels);
	  var elctfuels = document.getElementById("L32").value;
	  		var elec_parse = parseInt(elctfuels);
	  		//CONSUMPTION REGION B - VALORI FISSI
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
	  
	  var somma_valori_tr = fossil_tr+bio_tr+el_tr;
	  //console.log(somma_valori_tr);
	  var somma_valori_ind = fossil_ind+bio_ind+el_ind;
	  var somma_valori_s = fossil_s+bio_s+el_s;
	  var somma_valori_house = fossil_house+bio_house+el_house;
	//FINE CONSUMPTION  
	  
	var A6a = (1-red_ind_parse)*somma_valori_ind;  
	var A6b = A6a - [(1-red_ind_parse)*el_ind];
	
	var B6a = (1-red_tr_parse)*[(1-el_tr_parse *(1-0.7/2.3))*fossil_tr];
	var B6b = el_tr_parse * B6a;
	
	var C6a = (1-red_ser_parse)*somma_valori_s;
	var C6b = (1-red_ind_parse)*el_s;
	
	var D6a = (1-red_house)*somma_valori_house;
	var D6b = [(fuel_house_parse * somma_valori_house)+el_house]*(1-red_house);
	  
//calcolo valori iniziali di FOSSIL : industry -transport -services -households
	  var f_i = parseFloat((1-bio_fr_parse)*(A6a-A6b)).toFixed(2);
	  var f_t = parseFloat((1-bio_fr_parse)*(B6a-B6b)).toFixed(2);
	  var f_s = parseFloat((1-bio_fr_parse)*(C6a-C6b)).toFixed(2);
	  var f_h = parseFloat((1-bio_fr_parse)*(D6a-D6b)).toFixed(2);
//caoclo valori iniziali di BIOFUEL	  
	  var b_i = parseFloat((bio_fr_parse)*(A6a-A6b)).toFixed(2);
	  var b_t = parseFloat((bio_fr_parse)*(B6a-B6b)).toFixed(2);
	  var b_s = parseFloat((bio_fr_parse)*(C6a-C6b)).toFixed(2);
	  var b_h = parseFloat((bio_fr_parse)*(D6a-D6b)).toFixed(2);
//calcolo valori iniziali ELECTRICITY:
	  var e_i = parseFloat((1-red_ind_parse)*el_ind).toFixed(2);
	  var e_t = parseFloat((el_tr_parse)*(A6a)).toFixed(2);
	  var e_s = parseFloat((1-red_ind_parse)*(somma_valori_s)).toFixed(2);
	  var e_h = parseFloat((fuel_house_parse)*(somma_valori_house + el_house)*(1-red_house)).toFixed(2);

	  
	  var energy_fossil_val = f_i+f_t+f_s+f_h*(1-fossilf_parse);
	  var energy_bio_val = b_i+b_t+b_s+b_h*(1-biofuels_parse);
	  var energy_elec_val = e_i+e_t+e_s+e_h*(1-elec_parse);
	  
	  ///CALCOLO VALORI FINALI///
	  var fossil_final_wfgreen = energy_fossil_val*(RA_WFgreen_Fossil*0,25)/1000;
	  var bio_final_wfgreen = energy_bio_val*(RA_WFgreen_Biofuel*0,27);
	  var elec_final_wfgreen = energy_elec_val*(PER_A_Wind*RA_WFgreen_Wind)+(PER_A_Solar*RA_WFgreen_Solar)+(PER_A_Hydro*RA_WFgreen_Hydro)+(PER_A_Biofuel*RA_WFgreen_Biofuel)+(PER_A_Nuclear*RA_WFgreen_Nuclear)+(PER_A_Fossil*RA_WFgreen_Fossil); 
	  

var datoWFgreen_en_internal = fossil_final_wfgreen+bio_final_wfgreen+elec_final_wfgreen; 	  	  
			  	  	

//////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////	

	var dataoneext = 0;
	var datatwoext = 0;
	
		  var datiaggbar = [dataWFg_food_int, dataoneext];
		  var datiaggbar2 = [datoWFgreen_en_internal, datatwoext];
		
		  barChart3.data.datasets[0].data = datiaggbar;
		  barChart3.data.datasets[1].data = datiaggbar2;
 barChart3.update();
 

 document.getElementById("percent3").innerHTML = parseFloat((dataWFg_food_int+1087 - 4715/4715)/100).toFixed(2) + "% above the initial value";
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
      text: 'WF (green) (l/cap/day)'
    },
  };
  // Chart Data
  var barchartData4 = {
    
		    labels: ["Internal", "External"],
		    datasets: [{
		      type: 'bar',
		      label: 'Serie "Food" punto Internal',
		      data: [609, 170],
		      backgroundColor: 'yellow'
		      
		    }, {
		      type: 'bar',
		      label: 'Serie "Energy" punto External',
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
  
  var days = document.getElementById("A8_f").value;
  var daysp = parseInt(days); 


 
	  function aggiornabar4() {	  
		  var GT4 = document.getElementById("GT4").innerText;
		  var GT4p = parseInt(GT4);
		   days = document.getElementById("A8_f").value;	
		   daysp = parseInt(days); 
			  var daysp = parseInt(days); 
			  var intake = document.getElementById("f_D4").value;
			  var intakeparse = parseInt(intake);
			  //console.log("intake: "+intakeparse);
			  var waste = document.getElementById("f_D5").value;
			  var wasteparse = parseInt(waste);
			  var veg = document.getElementById("f_C6").value;
			  var vegparse =parseInt(veg);
			  var vege = document.getElementById("f_C7").value;
			  var vegeparse = parseInt(vege);
			  var meat = document.getElementById("f_C8").value;
			  var meatparse = parseInt(meat);
			  
			  var food_import_plant = document.getElementById("E30").value;
			  	var fip = parseInt(food_import_plant);
			  var food_import_meat = document.getElementById("E31").value;
			  	var fim = parseInt(food_import_meat);
			  var food_import_diary = document.getElementById("E32").value;
			  	var fid = parseInt(food_import_diary);
			  	
				  var rain_user = document.getElementById("G14").value;
				  	var rain_parse = parseInt(rain_user);
				    var irr_user = document.getElementById("G15").value;
				  	var irr_parse = parseInt(irr_user); 	
			  
			  var days = document.getElementById("A8_f").value;
			  var totalone = vegparse+vegeparse+meatparse;
			  
			  var wind = document.getElementById("em_J21").value;
			  var windp = parseInt(wind);	
			  var fuel = document.getElementById("em_J26").value;
			  var fuelp = parseInt(fuel);
		//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
			  var vegan_val = vegparse/totalone*100;	
			  var vege_val = (vegeparse/totalone*100)+[meatparse/totalone*(7-days)/7]*100;
			  var meat_val = [(meatparse/totalone)*(days/7)]*100;
			  
		//calcolo i valori per PLANT BASED:
			  var plant0 =  (vegan_val*100)+(vege_val*85)+(meat_val*70);
			  var plantA = parseFloat(plant0/100).toFixed(2);
			   plant1 = parseFloat(plantA).toFixed(2);

		//calcolo i valori per MEAT & FISH:
			  var meat1 = parseFloat((vegan_val*0)+(vege_val*0)+(meat_val*15)).toFixed(2);
			   meat1 = parseFloat(meat1).toFixed(2);
			 
		//calcolo i valori per DIARY & EGGS:
			  var diary1 = parseFloat((vegan_val*0)+(vege_val*15)+(meat_val*15)).toFixed(2)/100;
			   diary1 = parseFloat(diary1).toFixed(2);
			  
		//calcolo WASTE:
			  var waste_val = parseFloat((wasteparse*intakeparse)/100).toFixed(2);
			  waste_val = parseFloat(waste_val).toFixed(2);

			  //CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
		//OTTENGO LA PERCENTUALE BASE
			  var plantbased = plant1*(waste_val+intakeparse);
			  //console.log("BARCHART:"+plantbased);
			  var meatbased = meat1*(waste_val+intakeparse);
			  var diarybased = diary1*(waste_val+intakeparse);
		//CALCOLO IL VALORE PER LE SOMME DI FOOD:
			  var calcolo_rain_plant = [rain_parse*(YG_closing_WFg)];
			  var calcolo_irr_plant = [irr_parse*(Mulching_WFg)];
			  var calcolo_pioggia_tot = (calcolo_rain_plant+calcolo_irr_plant)/100
			  var tot_percentuale_pioggia = (Rainfed*calcolo_pioggia_tot)+(Irrigated*0);

			//CALCOLO IL VALORE PER LE SOMME DI FOOD WFBLUE:
			  
			  var plantres_wfb = plantbased*(100-fip)*[RA_WF_blue_Plant*(1-tot_percentuale_pioggia)];
			  var meatres_wfb = meatbased*(100-fim)*[RA_WFblue_Meat*(1-tot_percentuale_pioggia)];
			  var diaryres_wfb = diarybased*(100-fid)*[RA_WFblue_Meat*(1-tot_percentuale_pioggia)];	
			  
			  var dataWFblue_food_int = plantres_wfb+meatres_wfb+diaryres_wfb;
		
		//////////////////// CALCOLO ENERGY ///////////////////////////////
			  		var reduction_ind = document.getElementById("e_N5").value;
			  	  var red_ind_parse = parseInt(reduction_ind);
			  	  //console.log("red_ind: "+red_ind_parse);
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
			  	  
			  	  var fossilfuels = document.getElementById("L30").value;
			  	  		var fossilf_parse = parseInt(fossilfuels);
			  	  var biofuels = document.getElementById("L31").value;
			  	  		var biofuels_parse = parseInt(biofuels);
			  	  var elctfuels = document.getElementById("L32").value;
			  	  		var elec_parse = parseInt(elctfuels);
			  	  		//CONSUMPTION REGION B - VALORI FISSI
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
				  
			  	  var somma_valori_tr = fossil_tr+bio_tr+el_tr;
			  	  //console.log(somma_valori_tr);
			  	  var somma_valori_ind = fossil_ind+bio_ind+el_ind;
			  	  var somma_valori_s = fossil_s+bio_s+el_s;
			  	  var somma_valori_house = fossil_house+bio_house+el_house;
			  	//FINE CONSUMPTION  
			  	  
			  	var A6a = (1-red_ind_parse)*somma_valori_ind;  
			  	var A6b = A6a - [(1-red_ind_parse)*el_ind];
			  	
			  	var B6a = (1-red_tr_parse)*[(1-el_tr_parse *(1-0.7/2.3))*fossil_tr];
			  	var B6b = el_tr_parse * B6a;
			  	
			  	var C6a = (1-red_ser_parse)*somma_valori_s;
			  	var C6b = (1-red_ind_parse)*el_s;
			  	
			  	var D6a = (1-red_house)*somma_valori_house;
			  	var D6b = [(fuel_house_parse * somma_valori_house)+el_house]*(1-red_house);
			  	  
			  //calcolo valori iniziali di FOSSIL : industry -transport -services -households
			  	  var f_i = parseFloat((1-bio_fr_parse)*(A6a-A6b)).toFixed(2);
			  	  var f_t = parseFloat((1-bio_fr_parse)*(B6a-B6b)).toFixed(2);
			  	  var f_s = parseFloat((1-bio_fr_parse)*(C6a-C6b)).toFixed(2);
			  	  var f_h = parseFloat((1-bio_fr_parse)*(D6a-D6b)).toFixed(2);
			  //caoclo valori iniziali di BIOFUEL	  
			  	  var b_i = parseFloat((bio_fr_parse)*(A6a-A6b)).toFixed(2);
			  	  var b_t = parseFloat((bio_fr_parse)*(B6a-B6b)).toFixed(2);
			  	  var b_s = parseFloat((bio_fr_parse)*(C6a-C6b)).toFixed(2);
			  	  var b_h = parseFloat((bio_fr_parse)*(D6a-D6b)).toFixed(2);
			  //calcolo valori iniziali ELECTRICITY:
			  	  var e_i = parseFloat((1-red_ind_parse)*el_ind).toFixed(2);
			  	  var e_t = parseFloat((el_tr_parse)*(A6a)).toFixed(2);
			  	  var e_s = parseFloat((1-red_ind_parse)*(somma_valori_s)).toFixed(2);
			  	  var e_h = parseFloat((fuel_house_parse)*(somma_valori_house + el_house)*(1-red_house)).toFixed(2);

			  	  
			  	  var energy_fossil_val = f_i+f_t+f_s+f_h*(1-fossilf_parse);
			  	  var energy_bio_val = b_i+b_t+b_s+b_h*(1-biofuels_parse);
			  	  var energy_elec_val = e_i+e_t+e_s+e_h*(1-elec_parse);
			  	  
			  	  ///CALCOLO VALORI FINALI///
				  var fossil_final_wfblue = energy_fossil_val*(RA_WFblue_Fossil*0,25)/1000;
			  	  var bio_final_wfblue = energy_bio_val*(RA_WFblue_Biofuel*0,27);
			  	  var elec_final_wfblue = energy_elec_val*(PER_A_Wind*RA_WFblue_Wind)+(PER_A_Solar*RA_WFblue_Solar)+(PER_A_Hydro*RA_WFblue_Hydro)+(PER_A_Biofuel*RA_WFblue_Biofuel)+(PER_A_Nuclear*RA_WFblue_Nuclear)+(PER_A_Fossil*RA_WFblue_Fossil); 	  	  
			  		
			  var datoWFblue_en_internal = fossil_final_wfblue+bio_final_wfblue+elec_final_wfblue; 	  	  
			  			  	  	
		  
		//////////////////////////////////////////////////////////////////
		/////////////////////////////////////////////////////////////////	
			  var dataoneext = 0;
			  var datatwoext = 0;
		  
		  var datiaggbar = [dataWFblue_food_int, dataoneext];
		  var datiaggbar2 = [datoWFblue_en_internal, datatwoext];
		
		  barChart4.data.datasets[0].data = datiaggbar;
		  barChart4.data.datasets[1].data = datiaggbar2;
 barChart4.update();

 var perc4 = document.getElementById("percent4").innerHTML = parseFloat((dataWFblue_food_int+211 - 816/816)/100).toFixed(2) +"% above the initial value";
 
 } 
	  
	  var myVarb4 = setInterval(aggiornabar4, 3000);
  // Create the chart
  var barChart4 = new Chart(barChartctx4, barChartconfig4);
  

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
  

  // Create the chart
  var barChartEn = new Chart(barChartctxEn, barChartconfigEn);
 //operazioni di calcolo   
  
  var reduction_ind = document.getElementById("e_N5").value;
  var red_ind_parse = parseInt(reduction_ind);
  //console.log("red_ind: "+red_ind_parse);
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
  //console.log(somma_valori_tr);
  var somma_valori_ind = fossil_ind+bio_ind+el_ind;
  var somma_valori_s = fossil_s+bio_s+el_s;
  var somma_valori_house = fossil_house+bio_house+el_house;
 
  function aggiorna_en() {	  
	  var reduction_ind = document.getElementById("e_N5").value;
	  var red_ind_parse = parseInt(reduction_ind);
	  //console.log("red_ind: "+red_ind_parse);
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
	  //console.log(somma_valori_tr);
	  var somma_valori_ind = fossil_ind+bio_ind+el_ind;
	  var somma_valori_s = fossil_s+bio_s+el_s;
	  var somma_valori_house = fossil_house+bio_house+el_house;
	  
	var A6a = (1-red_ind_parse)*somma_valori_ind;  
	var A6b = A6a - [(1-red_ind_parse)*el_ind];
	
	var B6a = (1-red_tr_parse)*[(1-el_tr_parse *(1-0.7/2.3))*fossil_tr];
	var B6b = el_tr_parse * B6a;
	
	var C6a = (1-red_ser_parse)*somma_valori_s;
	var C6b = (1-red_ind_parse)*el_s;
	
	var D6a = (1-red_house)*somma_valori_house;
	var D6b = [(fuel_house_parse * somma_valori_house)+el_house]*(1-red_house);
	  
//calcolo valori iniziali di FOSSIL : industry -transport -services -households
	  var f_i = parseFloat((1-bio_fr_parse)*(A6a-A6b)).toFixed(2);
	  var f_t = parseFloat((1-bio_fr_parse)*(B6a-B6b)).toFixed(2);
	  var f_s = parseFloat((1-bio_fr_parse)*(C6a-C6b)).toFixed(2);
	  var f_h = parseFloat((1-bio_fr_parse)*(D6a-D6b)).toFixed(2);
//caoclo valori iniziali di BIOFUEL	  
	  var b_i = parseFloat((bio_fr_parse)*(A6a-A6b)).toFixed(2);
	  var b_t = parseFloat((bio_fr_parse)*(B6a-B6b)).toFixed(2);
	  var b_s = parseFloat((bio_fr_parse)*(C6a-C6b)).toFixed(2);
	  var b_h = parseFloat((bio_fr_parse)*(D6a-D6b)).toFixed(2);
//calcolo valori iniziali ELECTRICITY:
	  var e_i = parseFloat((1-red_ind_parse)*el_ind).toFixed(2);
	  var e_t = parseFloat((el_tr_parse)*(A6a)).toFixed(2);
	  var e_s = parseFloat((1-red_ind_parse)*(somma_valori_s)).toFixed(2);
	  var e_h = parseFloat((fuel_house_parse)*(somma_valori_house + el_house)*(1-red_house)).toFixed(2);
	  
	  var datiaggF = [f_i, f_t, f_s, f_h];
	  var datiaggB = [b_i, b_t, b_s, b_h];
	  var datiaggE = [e_i, e_t, e_s, e_h];
	  //console.log("lista " +datiaggF);
	  

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
    labels: ["Local", "B", "C", "D", "EU", "WORLD"],
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
                 data: [0],
                backgroundColor: themeColors,
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
  
  function aggiornaSecurity() {
	  var daysp = parseInt(days); 
	  var intake = document.getElementById("f_D4").value;
	  var intakeparse = parseInt(intake);
		  var waste = document.getElementById("f_D5").value;
	  var wasteparse = parseInt(waste);
	  var veg = document.getElementById("f_C6").value;
	  var vegparse =parseInt(veg);
	  var vege = document.getElementById("f_C7").value;
	  var vegeparse = parseInt(vege);
	  var meat = document.getElementById("f_C8").value;
	  var meatparse = parseInt(meat);
	 	  var food_import_plant = document.getElementById("E30").value;
	  	var fip = parseInt(food_import_plant);
	  var food_import_meat = document.getElementById("E31").value;
	  	var fim = parseInt(food_import_meat);
	  var food_import_diary = document.getElementById("E32").value;
	  	var fid = parseInt(food_import_diary);
	  	
		  var rain_user = document.getElementById("G14").value;
		  	var rain_parse = parseInt(rain_user);
		    var irr_user = document.getElementById("G15").value;
		  	var irr_parse = parseInt(irr_user); 	
	  
	  var days = document.getElementById("A8_f").value;
	  var totalone = vegparse+vegeparse+meatparse;
	  
	  var wind = document.getElementById("em_J21").value;
	  var windp = parseInt(wind);	
	  var fuel = document.getElementById("em_J26").value;
	  var fuelp = parseInt(fuel);
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
	  var vegan_val = vegparse/totalone*100;	
	  var vege_val = (vegeparse/totalone*100)+[meatparse/totalone*(7-days)/7]*100;
	  var meat_val = [(meatparse/totalone)*(days/7)]*100;
	  
//calcolo i valori per PLANT BASED:
	  var plant0 =  (vegan_val*100)+(vege_val*85)+(meat_val*70);
	  var plantA = parseFloat(plant0/100).toFixed(2);
	   var plantB = parseFloat(plantA).toFixed(2);
	   var plant1 = Math.round(plantB);
	 

//calcolo i valori per MEAT & FISH:
	  var meat1 = parseFloat((vegan_val*0)+(vege_val*0)+(meat_val*15)).toFixed(2);
	   meat1 = parseFloat(meat1).toFixed(2);
	 
//calcolo i valori per DIARY & EGGS:
	  var diary1 = parseFloat((vegan_val*0)+(vege_val*15)+(meat_val*15)).toFixed(2)/100;
	   diary1 = parseFloat(diary1).toFixed(2);
	  
//calcolo WASTE:
	  var waste_val = parseFloat((wasteparse*intakeparse)/100).toFixed(2);
	  waste_val = parseInt(waste_val);
	  ////console.log("PLANT1: "+plant1);
	  ////console.log("WASTE VAL DA FUNZIONE:"+waste_val+" E INTAKE: "+intakeparse);

	  //CALCOLI VALORI DEL GRAFICO WFGREEN, WFBLUE, LF, CF REGION A
//OTTENGO LA PERCENTUALE BASE
	  var bignumcal = waste_val+intakeparse;
	  var plantbased = parseFloat((plant1*bignumcal)/100).toFixed(2);
	  ////console.log("DOVREBBE DARE 4004 e qualcosa.."+plantbased);
	  ////console.log("DOVREBBE DARE 81 "+(100-fip));
	  var meatbased = parseFloat((meat1*bignumcal)/100).toFixed(2);
	  var diarybased = parseFloat((diary1*bignumcal)/100).toFixed(2);

var code_import = 6;
var World = 6;
var B = 2;
var C = 3;
var D = 4;
var EU = 5;
	
//VALORI PER LOCAL, B, C, D, EU, WORLD: (1-%utente)*(total_food+waste*cal)
	  var local_food_plant = [(100-fip)*plantbased]/1000;
	 // //console.log("TOTALE LOCAL FOOD PLANT: "+local_food_plant);
	  var local_food_meat = [(100-fim)*meatbased]/1000;
	  ////console.log("TOTALE LOCAL FOOD MEAT: "+local_food_meat);
	  var local_food_diary = [(100-fid)*diarybased]/1000;
	  ////console.log("TOTALE LOCAL FOOD DIARY: "+local_food_diary);
	  var local_food = (local_food_plant+local_food_meat)+local_food_diary;
	  ////console.log("TOTALE LOCAL FOOD: "+local_food);
		 
	  
	  if(code_import == World ) {
		  var world_plant = [(100-fip)*plantbased]/1000;
		  var world_meat = [(100-fim)*meatbased]/1000;
		  var world_diary = (100-fid)*diary1*[(waste_val+intakeparse)+intakeparse];
		  var world_food = [(100-fid)*diarybased]/1000;
		  //console.log("WORLD: "+world_food);
		  
		  var B_food = 0;
		  var C_food = 0;
		  var D_food = 0;
		  var EU_food = 0;
		
	  } else { 
		  world_food = 0;
		  
	  }
/*if (code_import == B) {
	  
	  var B_plant = [(100-fip)*plantbased]/1000;
	  var B_meat = [(100-fim)*meatbased]/1000;
	  var B_diary = [(100-fid)*diarybased]/1000;
	  var B_food = parseFloat(B_plant+B_meat+B_diary).toFixed(2);

} else {
	 
}

if(code_import == C) {
	  
	  var C_plant = [(100-fip)*plantbased]/1000;
	  var C_meat = [(100-fim)*meatbased]/1000;
	  var C_diary = [(100-fid)*diarybased]/1000;
	  var C_food = parseFloat(C_plant+C_meat+C_diary).toFixed(2);
} else {
	  C_food= 0;
}
if (code_import == D) {	  
	  var D_plant = [(100-fip)*plantbased]/1000;
	  var D_meat = [(100-fim)*meatbased]/1000;
	  var D_diary = [(100-fid)*diarybased]/1000;
	  var D_food = parseFloat(D_plant+D_meat+D_diary).toFixed(2);

	
} else {
	  D_food = 0;	
}
if (code_import == EU) {
	  
	  var EU_plant = [(100-fip)*plantbased]/1000;
	  var EU_meat = [(100-fim)*meatbased]/1000;
	  var EU_EUiary = [(100-fid)*diarybased]/1000;	
	  var EU_food = parseFloat(EU_plant+EU_meat+EU_diary).toFixed(2);
} else {
	  EU_food = 0;
	
}*/

var datiagghor = [local_food, B_food, C_food, D_food, EU_food, world_food];


horizontalChart.data.datasets[0].data = local_food;
horizontalChart.data.datasets[1].data = B_food;
horizontalChart.data.datasets[2].data = C_food;
horizontalChart.data.datasets[3].data = D_food;
horizontalChart.data.datasets[4].data = EU_food;
horizontalChart.data.datasets[5].data = world_food;

	  
  }
  
  var myHorChart = setInterval(aggiornaSecurity, 3000);
  
  
    
  
  

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
  


  
  function errori() {
	  
	  var daysp = parseInt(days); 
	  var intake = document.getElementById("f_D4").value;
	  var intakeparse = parseInt(intake);
	  //console.log("intake: "+intakeparse);
	  var waste = document.getElementById("f_D5").value;
	  var wasteparse = parseInt(waste);
	  var veg = document.getElementById("f_C6").value;
	  var vegparse =parseInt(veg);
	  var vege = document.getElementById("f_C7").value;
	  var vegeparse = parseInt(vege);
	  var meat = document.getElementById("f_C8").value;
	  var meatparse = parseInt(meat);  
	  var somma_campi_input = meatparse+vegparse+vegeparse;
	  
	  if(somma_campi_input<100) {
	alert("OPS! Non hai raggiunto la soglia del 100%. Ridistribuisci equamente i valori nei campi input.");
		} 
	  else if (somma_campi_input>100) {
			alert("ATTENZIONE! Hai superato il limite massimo del 100%. Ripristina i valori.");
			veg = "5";
			vege= "10";
			meat ="85";
		} else {}		  
	 
  }
  
  
  
   
	  function aggiorna() {	  
		  var daysp = parseInt(days); 
		  var intake = document.getElementById("f_D4").value;
		  var intakeparse = parseInt(intake);
		  //console.log("intake: "+intakeparse);
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
		  //console.log("totalone: "+totalone);	
//Numeri in percentuale che determinano i valori: Vegan, Vege e Meal nel foglio FOOD [S-T-U 17]
		  var vegan_val = vegparse/totalone*100;
		  //console.log("S17: "+vegan_val);
		  var vege_val = (vegeparse/totalone*100)+[meatparse/totalone*(7-days)/7]*100;
		  //console.log("T17: "+vege_val);
		  var meat_val = [(meatparse/totalone)*(days/7)]*100;
		  //console.log("U17: "+meat_val);
		  
//calcolo i valori per PLANT BASED:
		  var plant0=  (vegan_val*100)+(vege_val*85)+(meat_val*70);
		  var plant1 = parseFloat(plant0/100).toFixed(2);
		   plant1 = parseFloat(plant1).toFixed(2);
		  //console.log("precalories plant: "+plant1);
		  var plant_based = (plant1*intakeparse)/100;
		  var plantbased_val = plant_based;		
		  //console.log("totale PLANT: "+plantbased_val);
//calcolo i valori per MEAT & FISH:
		  var meat1 = parseFloat((vegan_val*0)+(vege_val*0)+(meat_val*15)).toFixed(2);
		   meat1 = parseFloat(meat1).toFixed(2);
		  //console.log("precalories MEAT: "+meat1);
		  var meat_based = (meat1*intakeparse)/10000;
		  var meatfish_val = meat_based;		
		  //console.log("totale MEAT: "+meatfish_val);
//calcolo i valori per DIARY & EGGS:
		  var diary1 = parseFloat((vegan_val*0)+(vege_val*15)+(meat_val*15)).toFixed(2)/100;
		   diary1 = parseFloat(diary1).toFixed(2);
		  //console.log("prima moltiplicazione: "+(vegan_val*0));
		  //console.log("seconda: "+(vege_val*15));
		  //console.log("terza: "+(meat_val*15));
		 //console.log("precalories DIARY: "+diary1);
		  var diary_based = (diary1*intakeparse)/100;
		  var diary_val = diary_based;		
		  //console.log("totale DIARY: "+diary_val);
//calcolo WASTE:
		  var waste_val = parseFloat((wasteparse*intakeparse)/100).toFixed(2);
		  waste_val = parseFloat(waste_val).toFixed(2);
		  //console.log("waste: "+waste_val);
		  
	
			  	  ////console.log("vege input:" +vege);	

		  
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
	  //console.log("red_ind: "+windp);
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
  var polarChart = new Chart(radarChartctx, radarChartconfig);

  // Polar Chart
  // -----------------------------------
  //Get the context of the Chart canvas element we want to select
  var polarChartctx = $("#polar-chart");

  // Chart Options
  var polarchartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Predicted world population (millions) in 2050'
    },
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 2000
      },
      reverse: false
    },
    animation: {
      animateRotate: false
    }
  };

  // Chart Data
  var polarchartData = {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: themeColors,
      data: [2478, 5267, 734, 784, 433]
    }],
  };

  var polarChartconfig = {
    type: 'polarArea',

    // Chart Options
    options: polarchartOptions,

    data: polarchartData
  };

  // Create the chart
  var polarChart = new Chart(polarChartctx, polarChartconfig);

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
  
  //

});
