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
CF_fp_product_init_value = 20.3769358104986;
LF_fp_product_init_value = 14.7453616645949;
WFgreen_fp_product_init_value = 3094.35622127523;
WFblue_fp_product_init_value = 454.461724873184;

A_CF_sust_limit = 0;
B_CF_sust_limit = 0;
C_CF_sust_limit = 0;
D_CF_sust_limit = 0;
	
A_CF_physic_limit = 0;
B_CF_physic_limit = 0;
C_CF_physic_limit = 0;
D_CF_physic_limit = 0;

/*
A_physicalCF = 0;
A_sustainableCF = 0;
A_physicalLF = 21;
A_sustainableLF = 10;
A_physicalWFG = 8834;
A_sustainableWFG = 3533;
A_physicalWFB = 5710;
A_sustainableWFB = 1550;
*/

A_physicalLF = 21.36;
A_sustainableLF = 10.38;
A_physicalWFG = 8833.6;
A_sustainableWFG = 3533.44;
A_physicalWFB = 5709.5;
A_sustainableWFB = 1550;

B_physicalLF = 72.12;
B_sustainableLF = 20.86;
B_physicalWFG = 32746;
B_sustainableWFG = 13098.4;
B_physicalWFB = 12749;
B_sustainableWFB = 3824.7;

C_physicalLF = 14.066;
C_sustainableLF = 8.225;
C_physicalWFG = 5923;
C_sustainableWFG = 2369.2;
C_physicalWFB = 872.8302;
C_sustainableWFB = 261.8491;

D_physicalLF = 29.875;
D_sustainableLF = 17.8875;
D_physicalWFG = 12947;
D_sustainableWFG = 5178.8;
D_physicalWFB = 1146.375;
D_sustainableWFB = 343.9125;

physicalCF = 0;
sustainableCF = 0;
physicalLF = 21;
sustainableLF = 10;
physicalWFG = 8834;
sustainableWFG = 3533;
physicalWFB = 5710;
sustainableWFB = 1550;
	
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
    $world = '#62768C',
    
    $security1 = '#5a8dee',
	$security2 = '#1c82ad ',
		$security3 = '#A9B9CF ',
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
    var horizontalChartctx = $("#EU-bar-chart-sotto1");

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
  		      id: "bar-x-axis1",
  		      barThickness: 30,
  		        gridLines: {
  		          color: grid_line_color,
  		        },
  		        scaleLabel: {
  		          display: false,
  		        },
  		     
  		    }, {
  		      display: false,
  		      stacked: true,
  		      id: "bar-x-axis2",
  		      barThickness: 50,
  		      // these are needed because the bar controller defaults set only the first x axis properties
  		      type: 'category',
  		      categoryPercentage: 0.8,
  		      barPercentage: 0.9,
  		      gridLines: {
  		        offsetGridLines: true
  		      },
  		    },
  		    {
  	  		      display: false,
  	  		      stacked: true,
  	  		      id: "bar-x-axis3",
  	  		      barThickness: 50,
  	  		      // these are needed because the bar controller defaults set only the first x axis properties
  	  		      type: 'category',
  	  		      categoryPercentage: 0.8,
  	  		      barPercentage: 0.9,
  	  		      gridLines: {
  	  		        offsetGridLines: true
  	  		      },
  		      offset: true
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
  		      text: 'CF (kg CO2/cap/day)',
  		    },
  		 
  		  };

  		  // Chart Data
  		  var horizontalchartData = {
  		   labels: ["Region A", "Region B", "Region C", "Region D"],
  	            
  		    datasets: [{
  		      data: [24, 16, 22, 20, 0, 0],
  		      backgroundColor: themeColors,
  		      borderColor: "transparent", 
  		    xAxisID: "bar-x-axis1",
  		    },
  		    {
  			  label: ["Sustainable Limit"],
  			  data: [A_CF_sust_limit, B_CF_sust_limit, C_CF_sust_limit, D_CF_sust_limit],
  			  backgroundColor: giallo,
  			  borderColor: "transparent",
  				   xAxisID: "bar-x-axis2",
  			},
  			{
  		      label: ["Phisical Limit"],
  		      data: [A_CF_physic_limit, B_CF_physic_limit, C_CF_physic_limit, D_CF_physic_limit],
  		      backgroundColor: rosso,
  		      borderColor: "transparent",
  		    xAxisID: "bar-x-axis1",
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
function EU_aggiornabar_sotto_CF() {
	////console.log("======= EU AGGIORNABAR SOTTO CF ========");
	// ============================ Recupero dati OUTPUT registrati in localStorage per ogni regione ==============================================================
	regionA = localStorage.getItem("regionADataOutput"); regionA = JSON.parse(regionA);
	regionB = localStorage.getItem("regionBDataOutput"); regionB = JSON.parse(regionB);
	regionC = localStorage.getItem("regionCDataOutput"); regionC = JSON.parse(regionC);
	regionD = localStorage.getItem("regionDDataOutput"); regionD = JSON.parse(regionD);

	//console.log("Region A: "+JSON.stringify(regionA)+ "Region B: "+JSON.stringify(regionB)+" Region C: "+JSON.stringify(regionC)+" Region D: "+JSON.stringify(regionD));
	
	////console.log(" === FOOTPRINT OF PRODUCTION CF === ");
	// ------------------- SEZIONE CF --------------------------------
	A_CF_fp_production = regionA["EU_A_sotto_cf"];
	B_CF_fp_production = regionB["EU_B_sotto_cf"];
	C_CF_fp_production = regionC["EU_C_sotto_cf"];
	D_CF_fp_production = regionD["EU_D_sotto_cf"];
	
	partA_CF = A_CF_fp_production*inh_A;
	partB_CF = B_CF_fp_production*inh_B;
	partC_CF = C_CF_fp_production*inh_C;
	partD_CF = D_CF_fp_production*inh_D;
	
	////console.log("partA_CF: "+A_CF_fp_production+" partB_CF: "+B_CF_fp_production+" partC_CF: "+C_CF_fp_production+" partD_CF: "+D_CF_fp_production);
	////console.log("inh_A: "+inh_A+" inh_B: "+inh_B+" inh_C "+inh_C+" inh_D "+inh_D+ "inhSum: "+inhSum);
	
	EU_average_fp_production_CF = (partA_CF+partB_CF+partC_CF+partD_CF)/inhSum;
	////console.log("EU_average_fp_production_CF: "+EU_average_fp_production_CF);
	
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
	////console.log("EU_average_fp_production_CF_rate: "+CF_fp_product_rate);	
	
	document.getElementById('EU_GT1_sotto').innerHTML = EU_average_fp_production_CF.toFixed(2);
	
	var color = localStorage.getItem("color");
	if(color=="0") {
		document.getElementById('EU_GT1_sotto').innerHTML = 20.4;
		CF_fp_product_rate = 0;
	}
	
	if (CF_fp_product_rate>=1) {
		document.getElementById("EU-percent1_sotto").innerHTML = "<font color='red'>"+Math.abs(Math.round(CF_fp_product_rate))+ "% above initial value</font>";
	}
	else if(CF_fp_product_rate<=-1){
		document.getElementById("EU-percent1_sotto").innerHTML = "<font color='green'>"+Math.abs(Math.round(CF_fp_product_rate))+ "% below initial value</font>";
	}
	else {
		document.getElementById("EU-percent1_sotto").innerHTML = "<font color='grey'>Equals initial value</font>";
	}
	//document.getElementById('EU-percent1_sotto').innerHTML = CF_fp_product_rate.toFixed(2)+ "% above initial value";
	//document.getElementById('carboneu').innerHTML = Math.round(EU_average_fp_production_CF);

	var datiaggbar = [A_CF_fp_production, B_CF_fp_production, C_CF_fp_production, D_CF_fp_production];
	
	horizontalChart.data.datasets[0].data = datiaggbar;
	horizontalChart.update();
}
setInterval(EU_aggiornabar_sotto_CF, 3000);


//Bar Chart-Sotto2
    // ------------------------------------------

    // -------------------------------------

	

    // Get the context of the Chart canvas element we want to select
    var horizontalChartctx2 = $("#EU-bar-chart-sotto-due");

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
  		    	      stacked: true,
  		    	      id: "bar-x-axis1",
  		    	      barThickness: 30,
  		    	    // these are needed because the bar controller defaults set only the first x axis properties
  		    	      type: 'category',
  		    	      categoryPercentage: 0.8,
  		    	      barPercentage: 0.9,
  		    	      gridLines: {
  		    	        offsetGridLines: true
  		    	      },
  		    	    }, {
  		    	      display: false,
  		    	      stacked: true,
  		    	      id: "bar-x-axis2",
  		    	      barThickness: 50,
  		    	      // these are needed because the bar controller defaults set only the first x axis properties
  		    	      type: 'category',
  		    	      categoryPercentage: 0.8,
  		    	      barPercentage: 0.9,
  		    	      gridLines: {
  		    	        offsetGridLines: true
  		    	      },
  		    	    },
  		    	    {
  	  		    	      display: false,
  	  		    	      stacked: true,
  	  		    	      id: "bar-x-axis3",
  	  		    	      barThickness: 50,
  	  		    	      // these are needed because the bar controller defaults set only the first x axis properties
  	  		    	      type: 'category',
  	  		    	      categoryPercentage: 0.3,
  	  		    	      barPercentage: 0.2,
  	  		    	      gridLines: {
  	  		    	        offsetGridLines: true
  	  		    	      },
  		    	      offset: true,
  		    	    
  		    	    }],
  		    	  yAxes: [{
  		    	      stacked: false,
  		    	      ticks: {
  		    	        beginAtZero: true
  		    	      },
  		    	      }]
  		    },
  		    title: {
  		      display: true,
  		      text: 'LF (m2/cap/day)',
  		    }//,
  		    
			  };

  		  // Chart Data
  		  var horizontalchartData2 = {
  		    labels: ["Region A", "Region B", "Region C", "Region D"],
  		    datasets: [{
  		      //data: [17,18,14,16,0,0],
  		      data: [17,18,14,16],
  		      backgroundColor: themeColors,
  		      borderColor: "transparent",
  		       fill:true,
  		    xAxisID: "bar-x-axis1",
  		    },
			{
  				label: ["Sustainable Limit"],
  				data: [A_sustainableLF, B_sustainableLF, C_sustainableLF, D_sustainableLF],
  					//backgroundColor: giallo,
  			   	//borderColor: "transparent",
  			   	borderColor: "rgba(255, 206, 86, 0.9)",
  			  backgroundColor: "rgba(255, 206, 86, 0.9)",
  			   	   	//fill:true,
  			  xAxisID: "bar-x-axis2",
  			},
  			{
  				label: ["Physical Limit"],
  				data: [A_physicalLF, B_physicalLF, C_physicalLF, D_physicalLF],
  				
  				//backgroundColor: rosso,
  				//borderColor: "transparent",
  				borderColor: "rgba(255, 99, 132, 0.2)",
    			  backgroundColor: "rgba(255, 99, 132, 0.2)",
  							//fill:true,
  			  xAxisID: "bar-x-axis3",
  			}]
  		  };

  		  var horizontalChartconfig2 = {
  		    type: 'bar',
  		    // Chart Options
  		    options: horizontalchartOptions2,
  		    data: horizontalchartData2
  		  };

  		  // Create the chart
  		  var horizontalChart2 = new Chart(horizontalChartctx2, horizontalChartconfig2);
function EU_aggiornabar_sotto_LF() {
	////console.log("======= EU AGGIORNABAR SOTTO LF ========");
	// ============================ Recupero dati OUTPUT registrati in localStorage per ogni regione ==============================================================
	regionA = localStorage.getItem("regionADataOutput"); regionA = JSON.parse(regionA);
	regionB = localStorage.getItem("regionBDataOutput"); regionB = JSON.parse(regionB);
	regionC = localStorage.getItem("regionCDataOutput"); regionC = JSON.parse(regionC);
	regionD = localStorage.getItem("regionDDataOutput"); regionD = JSON.parse(regionD);

	//////console.log("Region A: "+JSON.stringify(regionA)+ "Region B: "+JSON.stringify(regionB)+" Region C: "+JSON.stringify(regionC)+" Region D: "+JSON.stringify(regionD));
	////console.log(" === FOOTPRINT OF PRODUCTION LF === ");
	// ------------------- SEZIONE LF --------------------------------
	A_LF_fp_production = regionA["EU_A_sotto_lf"];
	B_LF_fp_production = regionB["EU_B_sotto_lf"];
	C_LF_fp_production = regionC["EU_C_sotto_lf"];
	D_LF_fp_production = regionD["EU_D_sotto_lf"];
	
	partA_LF = A_LF_fp_production*inh_A;
	partB_LF = B_LF_fp_production*inh_B;
	partC_LF = C_LF_fp_production*inh_C;
	partD_LF = D_LF_fp_production*inh_D;
	
	////console.log("partA_LF: "+A_LF_fp_production+" partB_LF: "+B_LF_fp_production+" partC_LF: "+C_LF_fp_production+" partD_LF: "+D_LF_fp_production);
	////console.log("inh_A: "+inh_A+" inh_B: "+inh_B+" inh_C "+inh_C+" inh_D "+inh_D+ "inhSum: "+inhSum);
	
	EU_average_fp_production_LF = (partA_LF+partB_LF+partC_LF+partD_LF)/inhSum;
	////console.log("EU_average_fp_production_LF: "+EU_average_fp_production_LF);
	
	A_per_EU_capita_LF = partA_LF/inhSum;
	B_per_EU_capita_LF = partB_LF/inhSum;
	C_per_EU_capita_LF = partC_LF/inhSum;
	D_per_EU_capita_LF = partD_LF/inhSum;
	
	A_LF_sust_limit = 0;
	B_LF_sust_limit = 0;
	C_LF_sust_limit = 0;
	D_LF_sust_limit = 0;
	
	A_LF_physic_limit = 0;
	B_LF_physic_limit = 0;
	C_LF_physic_limit = 0;
	D_LF_physic_limit = 0;
	
	LF_fp_product_rate = (EU_average_fp_production_LF - LF_fp_product_init_value)/LF_fp_product_init_value*100;
	////console.log("EU_average_fp_production_LF_rate: "+LF_fp_product_rate);
	
	document.getElementById('EU_GT2_sotto').innerHTML = EU_average_fp_production_LF.toFixed(2);
	
	if (LF_fp_product_rate>=1) {
		document.getElementById("EU-percent2_sotto").innerHTML = "<font color='red'>"+Math.abs(Math.round(LF_fp_product_rate))+ "% above initial value</font>";
	}
	else if(LF_fp_product_rate<=-1){
		document.getElementById("EU-percent2_sotto").innerHTML = "<font color='green'>"+Math.abs(Math.round(LF_fp_product_rate))+ "% below initial value</font>";
	}
	else {
		document.getElementById("EU-percent2_sotto").innerHTML = "<font color='grey'>Equals initial value</font>";
	}
	//document.getElementById('EU-percent2_sotto').innerHTML = LF_fp_product_rate.toFixed(2)+ "% above initial value";
	
	var datiaggbar = [A_LF_fp_production, B_LF_fp_production, C_LF_fp_production, D_LF_fp_production];
	
	horizontalChart2.data.datasets[0].data = datiaggbar;
	horizontalChart2.update();
}
setInterval(EU_aggiornabar_sotto_LF, 3000);


//Bar Chart-3
    // ------------------------------------------
  	  var horizontalChartctx3 = $("#EU-bar-chart-sottotre");
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
  	  		    	      stacked: true,
  	  		    	      id: "bar-x-axis1",
  	  		    	      barThickness: 30,
  	  		    	    // these are needed because the bar controller defaults set only the first x axis properties
  	  		    	      type: 'category',
  	  		    	      categoryPercentage: 0.8,
  	  		    	      barPercentage: 0.9,
  	  		    	      gridLines: {
  	  		    	        offsetGridLines: true
  	  		    	      },
  	  		    	    }, {
  	  		    	      display: false,
  	  		    	      stacked: true,
  	  		    	      id: "bar-x-axis2",
  	  		    	      barThickness: 50,
  	  		    	      // these are needed because the bar controller defaults set only the first x axis properties
  	  		    	      type: 'category',
  	  		    	      categoryPercentage: 0.8,
  	  		    	      barPercentage: 0.9,
  	  		    	      gridLines: {
  	  		    	        offsetGridLines: true
  	  		    	      },
  	  		    	    },
  	  		    	    {
  	  	  		    	      display: false,
  	  	  		    	      stacked: true,
  	  	  		    	      id: "bar-x-axis3",
  	  	  		    	      barThickness: 50,
  	  	  		    	      // these are needed because the bar controller defaults set only the first x axis properties
  	  	  		    	      type: 'category',
  	  	  		    	      categoryPercentage: 0.3,
  	  	  		    	      barPercentage: 0.2,
  	  	  		    	      gridLines: {
  	  	  		    	        offsetGridLines: true
  	  	  		    	      },
  	  		    	      offset: true,
  	  		    	    
  	  		    	    }],
  	  		    	  yAxes: [{
  	  		    	      stacked: false,
  	  		    	      ticks: {
  	  		    	        beginAtZero: true
  	  		    	      },
  	  		    	      }]
  			    },
  			    title: {
  		      		display: true,
  		      		text: 'WF(green)(l/cap/day))',
  		    	}//,
  		  
  			  };

  			  // Chart Data
  			  var horizontalchartData3 = {
  			    labels: ["Region A", "Region B", "Region C", "Region D"],
  			    datasets: [{
  		      		//data: [6596,4268,2204,3358,0,0],
  		      		data: [6596,4268,2204,3358],
  		      		backgroundColor: themeColors,
  		      		borderColor: "transparent",
  		      		  			   		fill:true
  		    	},
				{
  					label: ["Sustainable Limit"],
  					data: [A_sustainableWFG, B_sustainableWFG, C_sustainableWFG, D_sustainableWFG],
  					  			   		//backgroundColor: giallo,
  			   		//borderColor: "transparent",
  					borderColor: "rgba(255, 206, 86, 0.9)",
  	  			  backgroundColor: "rgba(255, 206, 86, 0.9)",
  			   	  			   	  xAxisID: "bar-x-axis2",
  				},
  				{
  					label: ["Physical Limit"],
  					data: [A_physicalWFG, B_physicalWFG, C_physicalWFG, D_physicalWFG],
  					//backgroundColor: rosso,
  					//borderColor: "transparent",
  	  				borderColor: "rgba(255, 99, 132, 0.2)",
      			  backgroundColor: "rgba(255, 99, 132, 0.2)",
  					  			   	  xAxisID: "bar-x-axis3",
  				}]
  			  };

  			  var horizontalChartconfig3 = {
  			    type: 'bar',

  			    // Chart Options
  			    options: horizontalchartOptions3,

  			    data: horizontalchartData3
  			  };

  			  // Create the chart
  			  var horizontalChart3 = new Chart(horizontalChartctx3, horizontalChartconfig3);
function EU_aggiornabar_sotto_WFgreen() {
	////console.log("======= EU AGGIORNABAR SOTTO WFgreen ========");
	// ============================ Recupero dati OUTPUT registrati in localStorage per ogni regione ==============================================================
	regionA = localStorage.getItem("regionADataOutput"); regionA = JSON.parse(regionA);
	regionB = localStorage.getItem("regionBDataOutput"); regionB = JSON.parse(regionB);
	regionC = localStorage.getItem("regionCDataOutput"); regionC = JSON.parse(regionC);
	regionD = localStorage.getItem("regionDDataOutput"); regionD = JSON.parse(regionD);

	//////console.log("Region A: "+JSON.stringify(regionA)+ "Region B: "+JSON.stringify(regionB)+" Region C: "+JSON.stringify(regionC)+" Region D: "+JSON.stringify(regionD));
	////console.log(" === FOOTPRINT OF PRODUCTION WFgreen === ");
	A_WFgreen_fp_production = regionA["EU_A_sotto_wfg"];
	B_WFgreen_fp_production = regionB["EU_B_sotto_wfg"];
	C_WFgreen_fp_production = regionC["EU_C_sotto_wfg"];
	D_WFgreen_fp_production = regionD["EU_D_sotto_wfg"];
	
	partA_WFgreen = A_WFgreen_fp_production*inh_A;
	partB_WFgreen = B_WFgreen_fp_production*inh_B;
	partC_WFgreen = C_WFgreen_fp_production*inh_C;
	partD_WFgreen = D_WFgreen_fp_production*inh_D;
	
	////console.log("partA_WFgreen: "+A_WFgreen_fp_production+" partB_WFgreen: "+B_WFgreen_fp_production+" partC_WFgreen: "+C_WFgreen_fp_production+" partD_WFgreen: "+D_WFgreen_fp_production);
	
	EU_average_fp_production_WFgreen = (partA_WFgreen+partB_WFgreen+partC_WFgreen+partD_WFgreen)/inhSum;
	////console.log("EU_average_fp_production_WFgreen: "+EU_average_fp_production_WFgreen);
	
	A_per_EU_capita_WFgreen = partA_WFgreen/inhSum;
	B_per_EU_capita_WFgreen = partB_WFgreen/inhSum;
	C_per_EU_capita_WFgreen = partC_WFgreen/inhSum;
	D_per_EU_capita_WFgreen = partD_WFgreen/inhSum;
	
	A_WFgreen_sust_limit = 3533.44;
	B_WFgreen_sust_limit = 13098.4;
	C_WFgreen_sust_limit = 2369.2;
	D_WFgreen_sust_limit = 5178.8;
	
	A_WFgreen_physic_limit = 8833.6;
	B_WFgreen_physic_limit = 32746;
	C_WFgreen_physic_limit = 5923;
	D_WFgreen_physic_limit = 12947;
	
	WFgreen_fp_product_rate = (EU_average_fp_production_WFgreen - WFgreen_fp_product_init_value)/WFgreen_fp_product_init_value*100;
	////console.log("EU_average_fp_production_WFgreen_rate: "+WFgreen_fp_product_rate);

	document.getElementById('EU_GT3_sotto').innerHTML = EU_average_fp_production_WFgreen.toFixed(2);
	
	if (WFgreen_fp_product_rate>=1) {
		document.getElementById("EU-percent3_sotto").innerHTML="<font color='red'>"+Math.abs(Math.round(WFgreen_fp_product_rate))+"% above initial value</font>";
	}
	else if(WFgreen_fp_product_rate<=-1){
		document.getElementById("EU-percent3_sotto").innerHTML="<font color='green'>"+Math.abs(Math.round(WFgreen_fp_product_rate))+"% below initial value</font>";
	}
	else {
		document.getElementById("EU-percent3_sotto").innerHTML = "<font color='grey'>Equals initial value</font>";
	}
	//document.getElementById('EU-percent3_sotto').innerHTML = WFgreen_fp_product_rate.toFixed(2)+ "% above initial value";
	
	var datiaggbar = [A_WFgreen_fp_production, B_WFgreen_fp_production, C_WFgreen_fp_production, D_WFgreen_fp_production];
	
	horizontalChart3.data.datasets[0].data = datiaggbar;
	horizontalChart3.update();
}
setInterval(EU_aggiornabar_sotto_WFgreen, 3000);


//Bar Chart-4
    // ------------------------------------------
  	  var horizontalChartctx4 = $("#EU-bar-chart-sottoquattro");
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
  	  		    	      stacked: true,
  	  		    	      id: "bar-x-axis1",
  	  		    	      barThickness: 30,
  	  		    	    // these are needed because the bar controller defaults set only the first x axis properties
  	  		    	      type: 'category',
  	  		    	      categoryPercentage: 0.8,
  	  		    	      barPercentage: 0.9,
  	  		    	      gridLines: {
  	  		    	        offsetGridLines: true
  	  		    	      },
  	  		    	    }, {
  	  		    	      display: false,
  	  		    	      stacked: true,
  	  		    	      id: "bar-x-axis2",
  	  		    	      barThickness: 50,
  	  		    	      // these are needed because the bar controller defaults set only the first x axis properties
  	  		    	      type: 'category',
  	  		    	      categoryPercentage: 0.8,
  	  		    	      barPercentage: 0.9,
  	  		    	      gridLines: {
  	  		    	        offsetGridLines: true
  	  		    	      },
  	  		    	    },
  	  		    	    {
  	  	  		    	      display: false,
  	  	  		    	      stacked: true,
  	  	  		    	      id: "bar-x-axis3",
  	  	  		    	      barThickness: 50,
  	  	  		    	      // these are needed because the bar controller defaults set only the first x axis properties
  	  	  		    	      type: 'category',
  	  	  		    	      categoryPercentage: 0.3,
  	  	  		    	      barPercentage: 0.2,
  	  	  		    	      gridLines: {
  	  	  		    	        offsetGridLines: true
  	  	  		    	      },
  	  		    	      offset: true,
  	  		    	    
  	  		    	    }],
  	  		    	  yAxes: [{
  	  		    	      stacked: false,
  	  		    	      ticks: {
  	  		    	        beginAtZero: true
  	  		    	      },
  	  		    	      }]
  			    },
  			    title: {
  		      		display: true,
  		      		text: 'WF(blue)(l/cap/day))',
  		    	},
  			    annotation: {
  			    	events: ['mouseover', 'mouseout'],
  			       
  			    } 
  			    
  			  };

  			  // Chart Data
  			  var horizontalchartData4 = {
  			    labels: ["Region A", "Region B", "Region C", "Region D"],
  			    datasets: [{
  		      		//data: [6596,4268,2204,3358,0,0],
  		      		data: [6596,4268,2204,3358],
  		      		backgroundColor: themeColors,
  		      		borderColor: "transparent",
  		      	  xAxisID: "bar-x-axis1",
  		      		
  			   		fill:true
  		    	},
				{
  					label: ["Sustainable Limit"],
  					data: [A_sustainableWFB, B_sustainableWFB, C_sustainableWFB, D_sustainableWFB],
  					  			   		//backgroundColor: giallo,
  			   		//borderColor: "transparent",
  				  	borderColor: "rgba(255, 206, 86, 0.9)",
  	  			  backgroundColor: "rgba(255, 206, 86, 0.9)",
  	  		  xAxisID: "bar-x-axis2",
  			   		
  			   		
  				},
  				{
  					label: ["Physical Limit"],
  					data: [A_physicalWFB, B_physicalWFB, C_physicalWFB, D_physicalWFB],
  				
  					//backgroundColor: rosso,
  					//borderColor: "transparent",
  	  				borderColor: "rgba(255, 99, 132, 0.2)",
      			  backgroundColor: "rgba(255, 99, 132, 0.2)",
      			  xAxisID: "bar-x-axis3",
  					
  			   		
  				}]
  			  };

  			  var horizontalChartconfig4 = {
  			    type: 'bar',

  			    // Chart Options
  			    options: horizontalchartOptions4,

  			    data: horizontalchartData4
  			  };

  			  // Create the chart
  			  var horizontalChart4 = new Chart(horizontalChartctx4, horizontalChartconfig4);
function EU_aggiornabar_sotto_WFblue() {
	////console.log("======= EU AGGIORNABAR SOTTO WFblue ========");
	// ============================ Recupero dati OUTPUT registrati in localStorage per ogni regione ==============================================================
	regionA = localStorage.getItem("regionADataOutput"); regionA = JSON.parse(regionA);
	regionB = localStorage.getItem("regionBDataOutput"); regionB = JSON.parse(regionB);
	regionC = localStorage.getItem("regionCDataOutput"); regionC = JSON.parse(regionC);
	regionD = localStorage.getItem("regionDDataOutput"); regionD = JSON.parse(regionD);

	//////console.log("Region A: "+JSON.stringify(regionA)+ "Region B: "+JSON.stringify(regionB)+" Region C: "+JSON.stringify(regionC)+" Region D: "+JSON.stringify(regionD));
	////console.log(" === FOOTPRINT OF PRODUCTION WFblue === ");
	A_WFblue_fp_production = regionA["EU_A_sotto_wfb"];
	B_WFblue_fp_production = regionB["EU_B_sotto_wfb"];
	C_WFblue_fp_production = regionC["EU_C_sotto_wfb"];
	D_WFblue_fp_production = regionD["EU_D_sotto_wfb"];
	
	partA_WFblue = A_WFblue_fp_production*inh_A;
	partB_WFblue = B_WFblue_fp_production*inh_B;
	partC_WFblue = C_WFblue_fp_production*inh_C;
	partD_WFblue = D_WFblue_fp_production*inh_D;
	
	////console.log("partA_WFblue: "+A_WFblue_fp_production+" partB_WFblue: "+B_WFblue_fp_production+" partC_WFblue: "+C_WFblue_fp_production+" partD_WFblue: "+D_WFblue_fp_production);
	
	EU_average_fp_production_WFblue = (partA_WFblue+partB_WFblue+partC_WFblue+partD_WFblue)/inhSum;
	////console.log("EU_average_fp_production_WFblue: "+EU_average_fp_production_WFblue);
	
	A_per_EU_capita_WFblue = partA_WFblue/inhSum;
	B_per_EU_capita_WFblue = partB_WFblue/inhSum;
	C_per_EU_capita_WFblue = partC_WFblue/inhSum;
	D_per_EU_capita_WFblue = partD_WFblue/inhSum;
	
	A_WFblue_sust_limit = 3533.44;
	B_WFblue_sust_limit = 13098.4;
	C_WFblue_sust_limit = 2369.2;
	D_WFblue_sust_limit = 5178.8;
	
	A_WFblue_physic_limit = 8833.6;
	B_WFblue_physic_limit = 32746;
	C_WFblue_physic_limit = 5923;
	D_WFblue_physic_limit = 12947;
	
	WFblue_fp_product_rate = (EU_average_fp_production_WFblue - WFblue_fp_product_init_value)/WFblue_fp_product_init_value*100;
	////console.log("EU_average_fp_production_WFblue_rate: "+WFblue_fp_product_rate);
	
	document.getElementById('EU_GT4_sotto').innerHTML = EU_average_fp_production_WFblue.toFixed(2);
	
	if (WFblue_fp_product_rate>=1) {
		document.getElementById("EU-percent4_sotto").innerHTML="<font color='red'>"+Math.abs(Math.round(WFblue_fp_product_rate))+"% above initial value</font>";
	}
	else if(WFblue_fp_product_rate<=-1){
		document.getElementById("EU-percent4_sotto").innerHTML="<font color='green'>"+Math.abs(Math.round(WFblue_fp_product_rate))+"% below initial value</font>";
	}
	else {
		document.getElementById("EU-percent4_sotto").innerHTML = "<font color='grey'>Equals initial value</font>";
	}
	//document.getElementById('EU-percent4_sotto').innerHTML = WFblue_fp_product_rate.toFixed(2)+ "% above initial value";
	
	var datiaggbar = [A_WFblue_fp_production, B_WFblue_fp_production, C_WFblue_fp_production, D_WFblue_fp_production];
	
	horizontalChart4.data.datasets[0].data = datiaggbar;
	horizontalChart4.update();
}
setInterval(EU_aggiornabar_sotto_WFblue, 3000);
});