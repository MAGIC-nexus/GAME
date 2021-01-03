/* *************************************************************************************************************************************************************

	GRAFICI-SECURITY.JS -> CALCOLA I VALORI DI FOOD-SECURITY ED ENERGY-SECURITY
	EU-fragici-sopra.JS -> UTILIZZA I VALORI CALCOLATI DA GRAFICI-SECURITY E REGISTRATI NELLE LOCALSTORAGE
	
	QUINDI L'ORDINE DI CARIMENTO DEGLI SCRIPT E': 1) GRAFICI-SECURITY 2) EU-fragici-sopra

   *************************************************************************************************************************************************************
*/
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

  // Bar Chart
  // ------------------------------------------
  //Get the context of the Chart canvas element we want to select
  var barChartctx = $("#EU-bar-chart");
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
		    labels: ["REGION A", "REGION B", "REGION C", "REGION D"],
		    datasets: [{
		      	type: 'bar',
		      	label: '"Food"',
		      	data: [16, 10, 12, 14],
		      	backgroundColor: giallo
		      
		    }, {
		      	type: 'bar',
		      	label: '"Energy"',
		      	backgroundColor: verde,
		      	data: [12, 11, 15, 11],
		    }],
  };
  var barChartconfig = {
    type: 'bar',

    // Chart Options
    options: barchartOptions,
    data: barchartData
  };
  
// Create the chart
var barChart = new Chart(barChartctx, barChartconfig);
function EU_aggiornabar_CF() {
	////console.log("======= EU AGGIORNABAR SOPRA CF ========");
	// ============================ Recupero dati OUTPUT registrati in localStorage per ogni regione ==============================================================
	regionA = localStorage.getItem("regionADataOutput"); regionA = JSON.parse(regionA);
	regionB = localStorage.getItem("regionBDataOutput"); regionB = JSON.parse(regionB);
	regionC = localStorage.getItem("regionCDataOutput"); regionC = JSON.parse(regionC);
	regionD = localStorage.getItem("regionDDataOutput"); regionD = JSON.parse(regionD);

	//////console.log("Region A: "+JSON.stringify(regionA)+ "Region B: "+JSON.stringify(regionB)+" Region C: "+JSON.stringify(regionC)+" Region D: "+JSON.stringify(regionD));
	
	A_CF_Food_Int = regionA['CF_Food_Internal']; A_CF_Food_Ext = regionA['CF_Food_External']; 
	A_CF_Ener_Int = regionA['CF_Energy_Internal']; A_CF_Ener_Ext = regionA['CF_Energy_External'];	
	
	B_CF_Food_Int = regionB['CF_Food_Internal']; B_CF_Food_Ext = regionB['CF_Food_External']; 
	B_CF_Ener_Int = regionB['CF_Energy_Internal']; B_CF_Ener_Ext = regionB['CF_Energy_External'];
	
	C_CF_Food_Int = regionC['CF_Food_Internal']; C_CF_Food_Ext = regionC['CF_Food_External']; 
	C_CF_Ener_Int = regionC['CF_Energy_Internal']; C_CF_Ener_Ext = regionC['CF_Energy_External'];
	
	D_CF_Food_Int = regionD['CF_Food_Internal']; D_CF_Food_Ext = regionD['CF_Food_External']; 
	D_CF_Ener_Int = regionD['CF_Energy_Internal']; D_CF_Ener_Ext = regionD['CF_Energy_External'];
	
	////console.log(" === FOOTPRINT OF CONSUMPTION CF === ");
	
	// --------------------------------------------- CF Average ---------------------------------------------------------------------------------------------------
	CF_fp_consum_init_value = 25.9678596753111;
	
	A_CF_Food = Number(A_CF_Food_Int)+Number(A_CF_Food_Ext);
	A_CF_Energy = Number(A_CF_Ener_Int)+Number(A_CF_Ener_Ext);
	////console.log("A_CF_Food: "+A_CF_Food+" A_CF_Energy: "+A_CF_Energy);
	partA = (A_CF_Food+A_CF_Energy)*inh_A;
	
	B_CF_Food = Number(B_CF_Food_Int)+Number(B_CF_Food_Ext);
	B_CF_Energy = Number(B_CF_Ener_Int)+Number(B_CF_Ener_Ext);
	////console.log("B_CF_Food: "+B_CF_Food+" B_CF_Energy: "+B_CF_Energy);
	partB = (B_CF_Food+B_CF_Energy)*inh_B;
	
	C_CF_Food = Number(C_CF_Food_Int)+Number(C_CF_Food_Ext);
	C_CF_Energy = Number(C_CF_Ener_Int)+Number(C_CF_Ener_Ext);
	////console.log("C_CF_Food: "+C_CF_Food+" C_CF_Energy: "+C_CF_Energy);
	partC = (C_CF_Food+C_CF_Energy)*inh_C;
	
	D_CF_Food = Number(D_CF_Food_Int)+Number(D_CF_Food_Ext);
	D_CF_Energy = Number(D_CF_Ener_Int)+Number(D_CF_Ener_Ext);
	////console.log("D_CF_Food: "+D_CF_Food+" D_CF_Energy: "+D_CF_Energy);
	partD = (D_CF_Food+D_CF_Energy)*inh_D;
	
	EU_CF_average = (partA+partB+partC+partD)/inhSum;
	EU_CF_average_rate = (EU_CF_average-Number(CF_fp_consum_init_value))/Number(CF_fp_consum_init_value)*100;
	
	////console.log("EU_CF_average: "+EU_CF_average+" CF_fp_consum_init_value: "+CF_fp_consum_init_value);
	////console.log("Valore di EU_CF_average: "+EU_CF_average+" Rate: "+EU_CF_average_rate);
	
	//alert(document.getElementById('EU_GT1').getAttribute('id'));
	document.getElementById('EU_GT1').innerHTML = EU_CF_average.toFixed(2);
	
	if(CF_fp_consum_init_value<EU_CF_average) {
	document.getElementById('EU_percent1').innerHTML = Math.abs(Math.round(EU_CF_average_rate))+ "% above initial value";
	} else {
		document.getElementById('EU_percent1').innerHTML = Math.abs(Math.round(EU_CF_average_rate))+ "% below initial value";
	}
	var datiaggbar = [A_CF_Food, B_CF_Food, C_CF_Food, D_CF_Food];
	var datiaggbar2 = [A_CF_Energy, B_CF_Energy, C_CF_Energy, D_CF_Energy];
	
	barChart.data.datasets[0].data = datiaggbar;
	barChart.data.datasets[1].data = datiaggbar2;
	barChart.update();
}
setInterval(EU_aggiornabar_CF, 3000);

  
  // Bar Chart-2
  // ------------------------------------------

  //Get the context of the Chart canvas element we want to select
  var barChartctx2 = $("#EU-bar-chart-2");
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
    
		    labels: ["REGION A", "REGION B", "REGION C", "REGION D"],
		    datasets: [{
		      type: 'bar',
		      label: '"Food"',
		      data: [17, 15, 13, 15],
		      backgroundColor: giallo
		      
		    }, {
		      type: 'bar',
		      label: '"Energy"',
		      backgroundColor: verde,
		      data: [2, 3, 1, 1],
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

function EU_aggiornabar_LF() {
	////console.log("======= EU AGGIORNABAR SOPRA LF ========");
	// ============================ Recupero dati OUTPUT registrati in localStorage per ogni regione ==============================================================
	regionA = localStorage.getItem("regionADataOutput"); regionA = JSON.parse(regionA);
	regionB = localStorage.getItem("regionBDataOutput"); regionB = JSON.parse(regionB);
	regionC = localStorage.getItem("regionCDataOutput"); regionC = JSON.parse(regionC);
	regionD = localStorage.getItem("regionDDataOutput"); regionD = JSON.parse(regionD);

	//////console.log("Region A: "+JSON.stringify(regionA)+ "Region B: "+JSON.stringify(regionB)+" Region C: "+JSON.stringify(regionC)+" Region D: "+JSON.stringify(regionD));
	
	A_LF_Food_Int = regionA['LF_Food_Internal']; A_LF_Food_Ext = regionA['LF_Food_External']; 
	A_LF_Ener_Int = regionA['LF_Energy_Internal']; A_LF_Ener_Ext = regionA['LF_Energy_External'];	
	
	B_LF_Food_Int = regionB['LF_Food_Internal']; B_LF_Food_Ext = regionB['LF_Food_External']; 
	B_LF_Ener_Int = regionB['LF_Energy_Internal']; B_LF_Ener_Ext = regionB['LF_Energy_External'];
	
	C_LF_Food_Int = regionC['LF_Food_Internal']; C_LF_Food_Ext = regionC['LF_Food_External']; 
	C_LF_Ener_Int = regionC['LF_Energy_Internal']; C_LF_Ener_Ext = regionC['LF_Energy_External'];
	
	D_LF_Food_Int = regionD['LF_Food_Internal']; D_LF_Food_Ext = regionD['LF_Food_External']; 
	D_LF_Ener_Int = regionD['LF_Energy_Internal']; D_LF_Ener_Ext = regionD['LF_Energy_External'];
	
	////console.log(" === FOOTPRINT OF CONSUMPTION LF === ");
	// --------------------------------------------- LF Average ---------------------------------------------------------------------------------------------------
	LF_fp_consum_init_value = 15.0396262829812;
	
	A_LF_Food = Number(A_LF_Food_Int)+Number(A_LF_Food_Ext);
	A_LF_Energy = Number(A_LF_Ener_Int)+Number(A_LF_Ener_Ext);
	////console.log("A_LF_Food: "+A_LF_Food+" A_LF_Energy: "+A_LF_Energy);
	partA = (A_LF_Food+A_LF_Energy)*inh_A;
	
	B_LF_Food = Number(B_LF_Food_Int)+Number(B_LF_Food_Ext);
	B_LF_Energy = Number(B_LF_Ener_Int)+Number(B_LF_Ener_Ext);
	////console.log("B_LF_Food: "+B_LF_Food+" B_LF_Energy: "+B_LF_Energy);
	partB = (B_LF_Food+B_LF_Energy)*inh_B;
	
	C_LF_Food = Number(C_LF_Food_Int)+Number(C_LF_Food_Ext);
	C_LF_Energy = Number(C_LF_Ener_Int)+Number(C_LF_Ener_Ext);
	////console.log("C_LF_Food: "+C_LF_Food+" C_LF_Energy: "+C_LF_Energy);
	partC = (C_LF_Food+C_LF_Energy)*inh_C;
	
	D_LF_Food = Number(D_LF_Food_Int)+Number(D_LF_Food_Ext);
	D_LF_Energy = Number(D_LF_Ener_Int)+Number(D_LF_Ener_Ext);
	////console.log("D_LF_Food: "+D_LF_Food+" D_LF_Energy: "+D_LF_Energy);
	partD = (D_LF_Food+D_LF_Energy)*inh_D;
	
	EU_LF_average = (partA+partB+partC+partD)/inhSum;
	EU_LF_average_rate = (EU_LF_average-Number(LF_fp_consum_init_value))/Number(LF_fp_consum_init_value)*100;
	
	////console.log("EU_LF_average: "+EU_LF_average+" LF_fp_consum_init_value: "+LF_fp_consum_init_value);
	////console.log("Valore di EU_LF_average: "+EU_LF_average+" Rate: "+EU_LF_average_rate);
	
	document.getElementById('EU_GT2').innerHTML = EU_LF_average.toFixed(2);
	if(LF_fp_consum_init_value<EU_LF_average){
	document.getElementById('EU_percent2').innerHTML = Math.abs(Math.round(EU_LF_average_rate))+ "% above initial value";
	} else {
		document.getElementById('EU_percent2').innerHTML = Math.abs(Math.round(EU_LF_average_rate))+ "% below initial value";
	}
	var datiaggbar = [A_LF_Food, B_LF_Food, C_LF_Food, D_LF_Food];
	var datiaggbar2 = [A_LF_Energy, B_LF_Energy, C_LF_Energy, D_LF_Energy];
	
	barChart2.data.datasets[0].data = datiaggbar;
	barChart2.data.datasets[1].data = datiaggbar2;
	barChart2.update();
}
setInterval(EU_aggiornabar_LF, 3000);


//Bar Chart-3
  // ------------------------------------------

  //Get the context of the Chart canvas element we want to select
  var barChartctx3 = $("#EU-bar-chart-3");
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
    
		    labels: ["REGION A", "REGION B", "REGION C", "REGION D"],
		    datasets: [{
		      type: 'bar',
		      label: '"Food"',
		      data: [5958, 4713, 2859, 3357],
		      backgroundColor: giallo
		      
		    }, {
		      type: 'bar',
		      label: '"Energy"',
		      backgroundColor: verde,
		      data: [1087, 2, 1, 1],
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
function EU_aggiornabar_WFgreen() {
	////console.log("======= EU AGGIORNABAR SOPRA WFgreen ========");
	// ============================ Recupero dati OUTPUT registrati in localStorage per ogni regione ==============================================================
	regionA = localStorage.getItem("regionADataOutput"); regionA = JSON.parse(regionA);
	regionB = localStorage.getItem("regionBDataOutput"); regionB = JSON.parse(regionB);
	regionC = localStorage.getItem("regionCDataOutput"); regionC = JSON.parse(regionC);
	regionD = localStorage.getItem("regionDDataOutput"); regionD = JSON.parse(regionD);

	//////console.log("Region A: "+JSON.stringify(regionA)+ "Region B: "+JSON.stringify(regionB)+" Region C: "+JSON.stringify(regionC)+" Region D: "+JSON.stringify(regionD));
	
	A_WFgreen_Food_Int = regionA['WFgreen_Food_Internal']; A_WFgreen_Food_Ext = regionA['WFgreen_Food_External']; 
	A_WFgreen_Ener_Int = regionA['WFgreen_Energy_Internal']; A_WFgreen_Ener_Ext = regionA['WFgreen_Energy_external'];	
	
	B_WFgreen_Food_Int = regionB['WFgreen_Food_Internal']; B_WFgreen_Food_Ext = regionB['WFgreen_Food_External'];
	B_WFgreen_Ener_Int = regionB['WFgreen_Energy_Internal']; B_WFgreen_Ener_Ext = regionB['WFgreen_Energy_external'];
	
	C_WFgreen_Food_Int = regionC['WFgreen_Food_Internal']; C_WFgreen_Food_Ext = regionC['WFgreen_Food_External']; 
	C_WFgreen_Ener_Int = regionC['WFgreen_Energy_Internal']; C_WFgreen_Ener_Ext = regionC['WFgreen_Energy_external'];

	
	D_WFgreen_Food_Int = regionD['WFgreen_Food_Internal']; D_WFgreen_Food_Ext = regionD['WFgreen_Food_External']; 
	D_WFgreen_Ener_Int = regionD['WFgreen_Energy_Internal']; D_WFgreen_Ener_Ext = regionD['WFgreen_Energy_external'];
	
	////console.log(" === FOOTPRINT OF CONSUMPTION WFgreen === ");
	// --------------------------------------------- WFgreen Average ----------------------------------------------------------------------------------------------
	WFgreen_fp_consum_init_value = 3459.9586618624;
	
	A_WFgreen_Food = Number(A_WFgreen_Food_Int)+Number(A_WFgreen_Food_Ext);
	A_WFgreen_Energy = Number(A_WFgreen_Ener_Int)+Number(A_WFgreen_Ener_Ext);
	////console.log("A_WFgreen_Food: "+A_WFgreen_Food+" A_WFgreen_Energy: "+A_WFgreen_Energy);
	partA = (A_WFgreen_Food+A_WFgreen_Energy)*inh_A;
	
	B_WFgreen_Food = Number(B_WFgreen_Food_Int)+Number(B_WFgreen_Food_Ext);
	B_WFgreen_Energy = Number(B_WFgreen_Ener_Int)+Number(B_WFgreen_Ener_Ext);
	////console.log("B_WFgreen_Food: "+B_WFgreen_Food+" B_WFgreen_Energy: "+B_WFgreen_Energy);
	partB = (B_WFgreen_Food+B_WFgreen_Energy)*inh_B;
	
	C_WFgreen_Food = Number(C_WFgreen_Food_Int)+Number(C_WFgreen_Food_Ext);
	C_WFgreen_Energy = Number(C_WFgreen_Ener_Int)+Number(C_WFgreen_Ener_Ext);
	////console.log("C_WFgreen_Food: "+C_WFgreen_Food+" C_WFgreen_Energy: "+C_WFgreen_Energy);
	partC = (C_WFgreen_Food+C_WFgreen_Energy)*inh_C;
	
	D_WFgreen_Food = Number(D_WFgreen_Food_Int)+Number(D_WFgreen_Food_Ext);
	D_WFgreen_Energy = Number(D_WFgreen_Ener_Int)+Number(D_WFgreen_Ener_Ext);
	////console.log("D_WFgreen_Food: "+D_WFgreen_Food+" D_WFgreen_Energy: "+D_WFgreen_Energy);
	partD = (D_WFgreen_Food+D_WFgreen_Energy)*inh_D;
	
	EU_WFgreen_average = (partA+partB+partC+partD)/inhSum;
	EU_WFgreen_average_rate = (EU_WFgreen_average-Number(WFgreen_fp_consum_init_value))/Number(WFgreen_fp_consum_init_value)*100;
	
	////console.log("EU_WFgreen_average: "+EU_WFgreen_average+" WFgreen_fp_consum_init_value: "+WFgreen_fp_consum_init_value);
	////console.log("Valore di EU_WFgreen_average: "+EU_WFgreen_average+" Rate: "+EU_WFgreen_average_rate);
	
	document.getElementById('EU_GT3').innerHTML = EU_WFgreen_average.toFixed(2);
	
	if(WFgreen_fp_consum_init_value<EU_WFgreen_average){
	document.getElementById('EU_percent3').innerHTML = Math.abs(Math.round(EU_WFgreen_average_rate))+ "% above initial value";
	} else {
		document.getElementById('EU_percent3').innerHTML = Math.abs(Math.round(EU_WFgreen_average_rate.toFixed))+ "% below initial value";	
	}
	var datiaggbar = [A_WFgreen_Food, B_WFgreen_Food, C_WFgreen_Food, D_WFgreen_Food];
	var datiaggbar2 = [A_WFgreen_Energy, B_WFgreen_Energy, C_WFgreen_Energy, D_WFgreen_Energy];
	
	barChart3.data.datasets[0].data = datiaggbar;
	barChart3.data.datasets[1].data = datiaggbar2;
	barChart3.update();
}
setInterval(EU_aggiornabar_WFgreen, 3000);


//Bar Chart-4
  // ------------------------------------------

  //Get the context of the Chart canvas element we want to select
  var barChartctx4 = $("#EU-bar-chart-4");
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
    
		    labels: ["REGION A", "REGION B", "REGION C", "REGION D"],
		    datasets: [{
		      type: 'bar',
		      label: '"Food"',
		      data: [862, 639, 345, 414],
		      backgroundColor: giallo
		      
		    }, {
		      type: 'bar',
		      label: '"Energy"',
		      backgroundColor: verde,
		      data: [219, 177, 62, 72],
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
function EU_aggiornabar_WFblue() {
	////console.log("======= EU AGGIORNABAR SOPRA WFblue ========");
	// ============================ Recupero dati OUTPUT registrati in localStorage per ogni regione ==============================================================
	regionA = localStorage.getItem("regionADataOutput"); regionA = JSON.parse(regionA);
	regionB = localStorage.getItem("regionBDataOutput"); regionB = JSON.parse(regionB);
	regionC = localStorage.getItem("regionCDataOutput"); regionC = JSON.parse(regionC);
	regionD = localStorage.getItem("regionDDataOutput"); regionD = JSON.parse(regionD);

	//////console.log("Region A: "+JSON.stringify(regionA)+ "Region B: "+JSON.stringify(regionB)+" Region C: "+JSON.stringify(regionC)+" Region D: "+JSON.stringify(regionD));
	
	A_WFblue_Food_Int = regionA['WFblue_Food_Internal']; A_WFblue_Food_Ext = regionA['WFblue_Food_External']; 
	A_WFblue_Ener_Int = regionA['WFblue_Energy_Internal']; A_WFblue_Ener_Ext = regionA['WFblue_Energy_external'];	
	
	B_WFblue_Food_Int = regionB['WFblue_Food_Internal']; B_WFblue_Food_Ext = regionB['WFblue_Food_External'];
	B_WFblue_Ener_Int = regionB['WFblue_Energy_Internal']; B_WFblue_Ener_Ext = regionB['WFblue_Energy_external'];
	
	C_WFblue_Food_Int = regionC['WFblue_Food_Internal']; C_WFblue_Food_Ext = regionC['WFblue_Food_External']; 
	C_WFblue_Ener_Int = regionC['WFblue_Energy_Internal']; C_WFblue_Ener_Ext = regionC['WFblue_Energy_external'];

	D_WFblue_Food_Int = regionD['WFblue_Food_Internal']; D_WFblue_Food_Ext = regionD['WFblue_Food_External']; 
	D_WFblue_Ener_Int = regionD['WFblue_Energy_Internal']; D_WFblue_Ener_Ext = regionD['WFblue_Energy_external'];
	
	////console.log(" === FOOTPRINT OF CONSUMPTION WFblue === ");
	// --------------------------------------------- WFblue Average ---------------------------------------------------------------------------------------------
	WFblue_fp_consum_init_value = 510.124186555134;
	WFblue_fp_product_init_value = 454.461724873184;
	
	A_WFblue_Food = Number(A_WFblue_Food_Int)+Number(A_WFblue_Food_Ext);
	A_WFblue_Energy = Number(A_WFblue_Ener_Int)+Number(A_WFblue_Ener_Ext);
	////console.log("A_WFblue_Food: "+A_WFblue_Food+" A_WFblue_Energy: "+A_WFblue_Energy);
	partA = (A_WFblue_Food+A_WFblue_Energy)*inh_A;
	
	B_WFblue_Food = Number(B_WFblue_Food_Int)+Number(B_WFblue_Food_Ext);
	B_WFblue_Energy = Number(B_WFblue_Ener_Int)+Number(B_WFblue_Ener_Ext);
	////console.log("B_WFblue_Food: "+B_WFblue_Food+" B_WFblue_Energy: "+B_WFblue_Energy);
	partB = (B_WFblue_Food+B_WFblue_Energy)*inh_B;
	
	C_WFblue_Food = Number(C_WFblue_Food_Int)+Number(C_WFblue_Food_Ext);
	C_WFblue_Energy = Number(C_WFblue_Ener_Int)+Number(C_WFblue_Ener_Ext);
	////console.log("C_WFblue_Food: "+C_WFblue_Food+" C_WFblue_Energy: "+C_WFblue_Energy);
	partC = (C_WFblue_Food+C_WFblue_Energy)*inh_C;
	
	D_WFblue_Food = Number(D_WFblue_Food_Int)+Number(D_WFblue_Food_Ext);
	D_WFblue_Energy = Number(D_WFblue_Ener_Int)+Number(D_WFblue_Ener_Ext);
	////console.log("D_WFblue_Food: "+D_WFblue_Food+" D_WFblue_Energy: "+D_WFblue_Energy);
	partD = (D_WFblue_Food+D_WFblue_Energy)*inh_D;
	
	EU_WFblue_average = (partA+partB+partC+partD)/inhSum;
	EU_WFblue_average_rate = (EU_WFblue_average-Number(WFblue_fp_consum_init_value))/Number(WFblue_fp_consum_init_value)*100;
	
	////console.log("EU_WFblue_average: "+EU_WFblue_average+" WFblue_fp_consum_init_value: "+WFblue_fp_consum_init_value);
	////console.log("Valore di EU_WFblue_average: "+EU_WFblue_average+" Rate: "+EU_WFblue_average_rate);
	
	document.getElementById('EU_GT4').innerHTML = EU_WFblue_average.toFixed(2);
	if(WFblue_fp_product_init_value<EU_WFblue_average){
	document.getElementById('EU_percent4').innerHTML = Math.abs(Math.round(EU_WFblue_average_rate))+ "% above initial value";
	} else {
		document.getElementById('EU_percent4').innerHTML = Math.abs(Math.round(EU_WFblue_average_rate.toFixed))+ "% above initial value";

	}
	var datiaggbar = [A_WFblue_Food, B_WFblue_Food, C_WFblue_Food, D_WFblue_Food];
	var datiaggbar2 = [A_WFblue_Energy, B_WFblue_Energy, C_WFblue_Energy, D_WFblue_Energy];
	
	barChart4.data.datasets[0].data = datiaggbar;
	barChart4.data.datasets[1].data = datiaggbar2;
	barChart4.update();
}
setInterval(EU_aggiornabar_WFblue, 3000);
	// ====================================================================================================================================
});