function Penality() {
var penality1_food_intake = 0.02;
var penality1_food_waste = 0.5;
var penality1_vegan = 3;
var penality1_vegetarian = 2;
var penality1_day_less_meat = 10;
var penality1_closing_water = 0.1;
var penality1_organic_mulching = 0.1;
var penality1_deficit_full_irrigation = 0;
var penality1_deficit_irr_and_mulching = 0.1;
var penality1_deficit_drip = 0.2;
var penality1_reduction_en_ind = 0.1;
var penality1_reduction_en_tr = 0.1;
var penality1_reduction_en_service = 0.1;
var penality1_reduction_en_house = 0.1;
var penality1_elec_tr = 0.1;
var penality1_red_gas_house = 0.1;
var penality1_percentage_bio = 0;
var penality1_fraction_total = 0.3;

var penality2_food_intake = 0.1;
var penality2_food_waste = 2.5;
var penality2_vegan = 0;
var penality2_vegetarian = 0;
var penality2_day_less_meat = 36;
var penality2_closing_water = 0.3;
var penality2_organic_mulching = 0.3;
var penality2_deficit_full_irrigation = 0;
var penality2_deficit_irr_and_mulching = 0.3;
var penality2_deficit_drip = 0.5;
var penality2_reduction_en_ind = 0.3;
var penality2_reduction_en_tr = 0.3;
var penality2_reduction_en_service = 0.3;
var penality2_reduction_en_house = 0.3;
var penality2_elec_tr = 0.3;
var penality2_red_gas_house = 0.3;
var penality2_percentage_bio = 0;
var penality2_fraction_total = 0.3;

var treshold_food_intake = 2500;
var treshold_food_waste = 0.10;
var treshold_vegan = 100;
var treshold_vegetarian = 100;
var treshold_day_less_meat = 2;
var treshold_closing_water;
var treshold_organic_mulching;
var treshold_deficit_full_irrigation;
var treshold_deficit_irr_and_mulching;
var treshold_deficit_drip;
var treshold_reduction_en_ind = 0.2;
var treshold_reduction_en_tr = 0.2;
var treshold_reduction_en_service = 0.2;
var treshold_reduction_en_house = 0.2;
var treshold_elec_tr = 0.2;
var treshold_red_gas_house = 0.2;
var treshold_percentage_bio = 0;
var treshold_fraction_total = 100;
/*
var days = document.getElementById("A8_f");
var calories = document.getElementById("f_D4");
var waste =document.getElementById("f_D5");
var vegan = document.getElementById("f_C6");
var vegetarian = document.getElementById("f_C7");
var meat = document.getElementById("f_C8");
var closing = document.getElementById("G14");
var organic = document.getElementById("G15");
var full_deficit_parse = document.getElementById("G19");
var select1;
var select2;
var select3;
var plant_import = document.getElementById("E30");
var meat_import = document.getElementById("E31");
var diary_import = document.getElementById("E32");
var wind = document.getElementById("em_J21");
var solar = document.getElementById("em_J22");
var hydro = document.getElementById("em_J23");
var bifuel = document.getElementById("em_J24");
var nuclear = document.getElementById("em_J25");
var fossil = document.getElementById("em_J26");
var red_ind = document.getElementById("e_N5");
var red_house = document.getElementById("e_N6");
var red_service = document.getElementById("e_N7");
var red_tr = document.getElementById("e_N8");
var elec_tr = document.getElementById("e_N11");
var gas_coal = document.getElementById("e_N12");
var perc_fuel = document.getElementById("e_N13");
var fossil_f = document.getElementById("L30");
var biofuel = document.getElementById("L31");
var electricity = document.getElementById("L32");*/

var value={};
var region = document.querySelector('input[name="region"]:checked');
var regionname = region.getAttribute('id');
var value = sessionStorage.getItem(regionname+'DataInput');

//SE INVECE
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	var rainfed = 0.84;
	var irrigated = 1-rainfed;	
	treshold_closing_water = parseFloat(rainfed*0.2).toFixed(4);
	treshold_organic_mulching = parseFloat(rainfed*0.2).toFixed(4);
	treshold_deficit_full_irrigation = parseFloat(irrigated*0.2).toFixed(4) ;
	treshold_deficit_irr_and_mulching = parseFloat(irrigated*0.2).toFixed(4) ;
	treshold_deficit_drip = parseFloat(irrigated*0.2).toFixed(4) ;
	
var days = '7'; //days
//----------------------------------------------------------------------------------
var calories = '2790'; //calories
var waste = '20'; //waste
var vegan = '0'; //vegan
var vegetarian = '6'; //vegetarian
var meat = '94'; //meat
//----------------------------------------------------------------------------------
var plant_import = '0'; //plant
var meat_import = '0'; //meat
var diary_import = '0'; //diary
//----------------------------------------------------------------------------------
var closing = '0'; //closing
var organic = '0'; //Mulch
//select select1,2 o 3
var full_deficit_parse = '0';
//------------------------------------------------------------------------------------
var wind = '12'; // wind
var solar = '3'; // solar
var hydro = '18'; //hydro
var biofuel = '3'; //biofuel
var nuclear = '4'; //nuclear
var fossil = '60'; //fossil
//-------------------------------------------------------------------------------------
var red_ind = '0'; //red_ind
var red_house = '0'; //red_trans
var red_service = '0'; //red_service
var red_tr = '0'; //red_house
var elec_tr = '2';  //elec
var gas_coal = '0';   //gas
var perc_fuel = '26'; //perc_fossil 
var fossil_f = '74'; //fossil
var biofuel = '0'; //bio
var electricity = '0'; //electricity
//PUNTEGGI
	
	if(value['intakeparse']<calories) {
		if(value['intakeparse']<treshold_food_intake) {
			var calc1 = (value['intakeparse'] - treshold_food_intake) * penality1_food_intake;
			var calc2 = (penality1_food_intake - calories) * penality2_food_intake;
			var penality_intake = (calc1)+(calc2);
	}		
		else {
			var penality_intake = (value['intakeparse']-calories)*penality1_food_intake;
		}	
} else {
	var penality_intake = 0;
}
	//------------------
	if(value['wasteparse']<waste) {
		if(value['wasteparse']<treshold_food_waste) {
			var calc1 = (value['wasteparse'] - treshold_food_waste) * penality1_food_waste;
			var calc2 = (penality1_food_waste - waste) * penality2_food_waste;
			var penality_waste = (calc1)+(calc2);
	}	
		else {
			var penality_waste = (value['wasteparse']-waste)*penality1_food_waste;
		}	
} else {
	var penality_waste = 0;
}
	//------------
	if(value['vegparse']<vegan) {
		if(value['vegparse']<treshold_vegan) {
			var calc1 = (value['vegparse'] - treshold_vegan) * penality1_vegan;
			var calc2 = (penality1_vegan - vegan) * penality2_vegan;
			var penality_vegan = (calc1)+(calc2);
	}else {
		var penality_vegan = (value['vegparse']-vegan)*penality1_vegan;
	}	
		
} else {
	var penality_vegan = 0;
}
	//-----------------
	if(value['vegeparse']<vegetarian) {
		if(value['vegeparse']<treshold_vegetarian) {
			var calc1 = (value['vegeparse'] - treshold_vegetarian) * penality1_vegetarian;
			var calc2 = (penality1_vegetarian - vegetarian) * penality2_vegetarian;
			var penality_vegetarian = (calc1)+(calc2);
	}		
		else {
			var penality_vegetarian = (value['vegeparse']-vegetarian)*penality1_vegetarian;
		}	
} else {
	var penality_vegetarian = 0;
}
	//--------------------
	//dubbi qui
	if(value['daysp']<days) {
		if(value['daysp']<treshold_day_less_meat) {
			var calc1 = (value['daysp'] - treshold_day_less_meat) * penality1_day_less_meat;
			var calc2 = (penality1_day_less_meat - days) * penality2_day_less_meat;
			var penality_day_less_meat = (calc1)+(calc2);
	}	
		else {
			var penality_day_less_meat = (value['daysp']-days)*penality1_day_less_meat;
		}	
} else {
	var penality_day_less_meat = 0;
}
//---------------------------
	if(value['Gap_Yeld_parse']<closing) {
		if(value['Gap_Yeld_parse']<treshold_closing_water) {
			var calc1 = (value['Gap_Yeld_parse'] - treshold_closing_water) * penality1_closing_water;
			var calc2 = (penality1_closing_water - closing) * penality2_closing_water;
			var penality_closing_water = (calc1)+(calc2);
	}		
		else {
		var penality_organic_mulching = (value['Gap_Yeld_parse']-closing)*penality1_closing_water;
	}	
} else {
	var penality_closing_water = 0;
}
	//-----------------
	if(value['Mulching_parse']<organic) {
		if(value['Mulching_parse']<treshold_organic_mulching) {
			var calc1 = (value['Mulching_parse'] - treshold_organic_mulching) * penality1_organic_mulching;
			var calc2 = (penality1_organic_mulching - organic) * penality2_organic_mulching;
			var penality_organic_mulching = (calc1)+(calc2);
	}	else {
		var penality_organic_mulching = (value['Mulching_parse']-organic)*penality1_organic_mulching;
	}	
		
} else {
	var penality_organic_mulching = 0;
}
	//------------
	//MANCA L'IF CON LA SELECT...
	//MANCA L'IF CON LA SELECT...
	var measure = document.getElementById("Measure").value;	
////console.log("measure: "+measure);
var Deficit = irrigated*full_deficit_parse;
var Deficitinit = 0;
var checkregionyg = document.querySelector('input[name="region"]:checked'); 
if ((measure=='1')||(measure=='2')||(measure=='3')) {
	if(Deficitinit<Deficit) {
		if(Deficitinit<treshold_deficit_full_irrigation) {
			var calc1 = (-Deficitinit) - (treshold_deficit_full_irrigation) * penality1_deficit_full_irrigation;
			var calc2 = (-treshold_deficit_full_irrigation) - (Deficit) * penality2_full_irrigation;
			var penality_full_irrigation = (calc1)+(calc2)*100;
	}		
		else {
		var penality_full_irrigation = (-Deficitinit) - (Deficit )*penality1_full_irrigation;
	}	
} else {
	var penality_full_irrigation = 0;
}
	
}
	//----------------
	if(value['red_ind_parse']<red_ind) {
		if(value['red_ind_parse']<treshold_reduction_en_ind) {
			var calc1 = (value['red_ind_parse'] - treshold_reduction_en_ind) * penality1_reduction_en_ind;
			var calc2 = (penality1_reduction_en_ind - red_ind) * penality2_reduction_en_ind;
			var penality_reduction_en_ind = (calc1)+(calc2)*100;
	}		
		else {
		var penality_reduction_en_ind = (value['red_ind_parse']-red_ind)*penality1_reduction_en_ind*100;
	}	
} else {
	var penality_reduction_en_ind = 0;
}
	//-----------------
	if(value['red_tr_parse']<red_tr) {
		if(value['red_tr_parse']<treshold_reduction_en_tr) {
			var calc1 = (value['red_tr_parse'] - treshold_reduction_en_tr) * penality1_reduction_en_tr;
			var calc2 = (penality1_reduction_en_tr - red_tr) * penality2_reduction_en_tr;
			var penality_reduction_en_tr = (calc1)+(calc2)*100;
	}		else {
		var penality_reduction_en_tr = (value['red_tr_parse']-red_tr)*penality1_reduction_en_tr*100;
	}	
} else {
	var penality_reduction_en_tr = 0;
}
	//---------------------
	if(value['red_ser_parse']<red_tr) {
		if(value['red_ser_parse']<treshold_reduction_en_service) {
			var calc1 = (value['red_ser_parse'] - treshold_reduction_en_service) * penality1_reduction_en_service;
			var calc2 = (penality1_reduction_en_service - red_tr) * penality2_reduction_en_service;
			var penality_reduction_en_service = (calc1)+(calc2)*100;
	}	else {
		var penality_reduction_en_service = (value['red_ser_parse']-red_tr)*penality1_reduction_en_service*100;
	}	
		
} else {
	var penality_reduction_en_service = 0;
}
	
	//-----------------
	if(value['red_house']<red_house) {
		if(value['red_house']<treshold_reduction_en_house) {
			var calc1 = (value['red_house'] - treshold_reduction_en_house) * penality1_reduction_en_house;
			var calc2 = (penality1_reduction_en_house - red_house) * penality2_reduction_en_house;
			var penality_reduction_en_house = (calc1)+(calc2)*100;
	}		else {
		var penality_reduction_en_house = (value['red_house']-red_house)*penality1_reduction_en_house*100;
	}	
		
} else {
	var penality_reduction_en_house = 0;
}
	//------------------
	if(value['el_tr_parse']<elec_tr) {
		if(value['el_tr_parse']<treshold_elec_tr) {
			var calc1 = (value['el_tr_parse'] - treshold_elec_tr) * penality1_elec_tr;
			var calc2 = (penality1_elec_tr - elec_tr) * penality2_elec_tr;
			var penality_elec_tr = (calc1)+(calc2)*100;
	}		
		else {
			var penality_elec_tr = (value['el_tr_parse']-elec_tr)*penality1_elec_tr*100;
		}	
} else {
	var penality_elec_tr = 0;
}
	//-------------------
	
	if(value['fuel_house_parse']<gas_coal) {
		if(value['fuel_house_parse']<treshold_red_gas_house) {
			var calc1 = (value['fuel_house_parse'] - treshold_red_gas_house) * penality1_red_gas_house;
			var calc2 = (penality1_red_gas_house - gas_coal) * penality2_red_gas_house;
			var penality_gas_coal = (calc1)+(calc2)*100;
	}	else {
		var penality_gas_coal = (value['fuel_house_parse']-gas_coal)*penality1_red_gas_house*100;
	}			
		
} else {
	var penality_gas_coal = 0;
}
	//--------------------
	if(value['bio_fr_parse']<biofuel) {
		if(value['bio_fr_parse']<treshold_percentage_bio) {
			var calc1 = (value['bio_fr_parse'] - treshold_percentage_bio) * penality1_percentage_bio;
			var calc2 = (penality1_percentage_bio - biofuel) * penality2_percentage_bio;
			var penality_biofuel = (calc1)+(calc2)*100;
	}else {
		var penality_biofuel = (value['bio_fr_parse']-biofuel)*penality1_percentage_bio*100;
	}
		
} else {
	var penality_biofuel = 0;
}
	//------------------------
	if(value['nuclearp']<nuclear) {
		if(value['nuclearp']<treshold_fraction_total) {
			var calc1 = (value['nuclearp'] - treshold_fraction_total) * penality1_fraction_total;
			var calc2 = (penality1_fraction_total - nuclear) * penality2_fraction_total;
			var penality_fraction_total = (calc1)+(calc2)*100;
	}	else {
		var penality_fraction_total = (value['nuclearp']-nuclear)*penality1_fraction_total*100;
	}
		
} else {
	var penality_fraction_total = 0;
}

	var sum = penality_intake+penality_waste+penality_vegan+penality_vegetarian+penality_day_less_meat+penality_organic_mulching+penality_full_irrigation+penality_reduction_en_ind+penality_reduction_en_tr+penality_reduction_en_service+penality_reduction_en_house+penality_elec_tr+penality_gas_coal+penality_biofuel+penality_fraction_total
//_-------
//_-------
	document.getElementById("penality").innerHTML = sum;
} 

//---------------------------------------

else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB') && (DataInput === null)) { 
	var rainfed = 0.96;
	var irrigated = 1-rainfed;	
	treshold_closing_water = parseFloat(rainfed*0.2).toFixed(4);
	treshold_organic_mulching = parseFloat(rainfed*0.2).toFixed(4);
	treshold_deficit_full_irrigation = parseFloat(irrigated*0.2).toFixed(4) ;
	treshold_deficit_irr_and_mulching = parseFloat(irrigated*0.2).toFixed(4) ;
	treshold_deficit_drip = parseFloat(irrigated*0.2).toFixed(4) ;
	
var days = '7'; //days
//----------------------------------------------------------------------------------
var calories = '2660'; //calories
var waste = '20'; //waste
var vegan = '0'; //vegan
var vegetarian = '6'; //vegetarian
var meat = '94'; //meat
//----------------------------------------------------------------------------------
var plant_import = '0'; //plant
var meat_import = '17'; //meat
var diary_import = '0'; //diary
//----------------------------------------------------------------------------------
var closing = '0'; //closing
var organic = '0'; //Mulch
 //select select1,2 o 3
var full_deficit_parse = '0';
 //------------------------------------------------------------------------------------
var wind = '8'; // wind
var solar = '1'; // solar
var hydro = '21'; //hydro
var biofuel = '8'; //biofuel
var nuclear = '34'; //nuclear
var fossil = '28'; //fossil
//-------------------------------------------------------------------------------------
var red_ind = '0'; //red_ind
var red_house = '0'; //red_trans
var red_service = '0'; //red_service
var red_tr = '0'; //red_house
var elec_tr = '2';  //elec
var gas_coal = '0';   //gas
var perc_fuel = '41'; //perc_fossil 
var fossil_f = '81'; //fossil
var biofuel = '0'; //bio
var electricity = '0'; //electricity

	if(value['intakeparse']<calories) {
		if(value['intakeparse']<treshold_food_intake) {
			var calc1 = (value['intakeparse'] - treshold_food_intake) * penality1_food_intake;
			var calc2 = (penality1_food_intake - calories) * penality2_food_intake;
			var penality_intake = (calc1)+(calc2);
	}		
		else {
			var penality_intake = (value['intakeparse']-calories)*penality1_food_intake;
		}	
} else {
	var penality_intake = 0;
}
	//------------------
	if(value['wasteparse']<waste) {
		if(value['wasteparse']<treshold_food_waste) {
			var calc1 = (value['wasteparse'] - treshold_food_waste) * penality1_food_waste;
			var calc2 = (penality1_food_waste - waste) * penality2_food_waste;
			var penality_waste = (calc1)+(calc2);
	}	
		else {
			var penality_waste = (value['wasteparse']-waste)*penality1_food_waste;
		}	
} else {
	var penality_waste = 0;
}
	//------------
	if(value['vegparse']<vegan) {
		if(value['vegparse']<treshold_vegan) {
			var calc1 = (value['vegparse'] - treshold_vegan) * penality1_vegan;
			var calc2 = (penality1_vegan - vegan) * penality2_vegan;
			var penality_vegan = (calc1)+(calc2);
	}else {
		var penality_vegan = (value['vegparse']-vegan)*penality1_vegan;
	}	
		
} else {
	var penality_vegan = 0;
}
	//-----------------
	if(value['vegeparse']<vegetarian) {
		if(value['vegeparse']<treshold_vegetarian) {
			var calc1 = (value['vegeparse'] - treshold_vegetarian) * penality1_vegetarian;
			var calc2 = (penality1_vegetarian - vegetarian) * penality2_vegetarian;
			var penality_vegetarian = (calc1)+(calc2);
	}		
		else {
			var penality_vegetarian = (value['vegeparse']-vegetarian)*penality1_vegetarian;
		}	
} else {
	var penality_vegetarian = 0;
}
	//--------------------
	//dubbi qui
	if(value['daysp']<days) {
		if(value['daysp']<treshold_day_less_meat) {
			var calc1 = (value['daysp'] - treshold_day_less_meat) * penality1_day_less_meat;
			var calc2 = (penality1_day_less_meat - days) * penality2_day_less_meat;
			var penality_day_less_meat = (calc1)+(calc2);
	}	
		else {
			var penality_day_less_meat = (value['daysp']-days)*penality1_day_less_meat;
		}	
} else {
	var penality_day_less_meat = 0;
}
//---------------------------
	if(value['Gap_Yeld_parse']<closing) {
		if(value['Gap_Yeld_parse']<treshold_closing_water) {
			var calc1 = (value['Gap_Yeld_parse'] - treshold_closing_water) * penality1_closing_water;
			var calc2 = (penality1_closing_water - closing) * penality2_closing_water;
			var penality_closing_water = (calc1)+(calc2);
	}		
		else {
		var penality_organic_mulching = (value['Gap_Yeld_parse']-closing)*penality1_closing_water;
	}	
} else {
	var penality_closing_water = 0;
}
	//-----------------
	if(value['Mulching_parse']<organic) {
		if(value['Mulching_parse']<treshold_organic_mulching) {
			var calc1 = (value['Mulching_parse'] - treshold_organic_mulching) * penality1_organic_mulching;
			var calc2 = (penality1_organic_mulching - organic) * penality2_organic_mulching;
			var penality_organic_mulching = (calc1)+(calc2);
	}	else {
		var penality_organic_mulching = (value['Mulching_parse']-organic)*penality1_organic_mulching;
	}	
		
} else {
	var penality_organic_mulching = 0;
}
	//------------
	//MANCA L'IF CON LA SELECT...
	//MANCA L'IF CON LA SELECT...
	var measure = document.getElementById("Measure").value;	
////console.log("measure: "+measure);
var Deficit = irrigated*full_deficit_parse;
var Deficitinit = 0;
var checkregionyg = document.querySelector('input[name="region"]:checked'); 
if ((measure=='1')||(measure=='2')||(measure=='3')) {
	if(Deficitinit<Deficit) {
		if(Deficitinit<treshold_deficit_full_irrigation) {
			var calc1 = (-Deficitinit) - (treshold_deficit_full_irrigation) * penality1_deficit_full_irrigation;
			var calc2 = (-treshold_deficit_full_irrigation) - (Deficit) * penality2_full_irrigation;
			var penality_full_irrigation = (calc1)+(calc2)*100;
	}		
		else {
		var penality_full_irrigation = (-Deficitinit) - (Deficit )*penality1_full_irrigation;
	}	
} else {
	var penality_full_irrigation = 0;
}
	
}
	//----------------
	if(value['red_ind_parse']<red_ind) {
		if(value['red_ind_parse']<treshold_reduction_en_ind) {
			var calc1 = (value['red_ind_parse'] - treshold_reduction_en_ind) * penality1_reduction_en_ind;
			var calc2 = (penality1_reduction_en_ind - red_ind) * penality2_reduction_en_ind;
			var penality_reduction_en_ind = (calc1)+(calc2)*100;
	}		
		else {
		var penality_reduction_en_ind = (value['red_ind_parse']-red_ind)*penality1_reduction_en_ind*100;
	}	
} else {
	var penality_reduction_en_ind = 0;
}
	//-----------------
	if(value['red_tr_parse']<red_tr) {
		if(value['red_tr_parse']<treshold_reduction_en_tr) {
			var calc1 = (value['red_tr_parse'] - treshold_reduction_en_tr) * penality1_reduction_en_tr;
			var calc2 = (penality1_reduction_en_tr - red_tr) * penality2_reduction_en_tr;
			var penality_reduction_en_tr = (calc1)+(calc2)*100;
	}		else {
		var penality_reduction_en_tr = (value['red_tr_parse']-red_tr)*penality1_reduction_en_tr*100;
	}	
} else {
	var penality_reduction_en_tr = 0;
}
	//---------------------
	if(value['red_ser_parse']<red_tr) {
		if(value['red_ser_parse']<treshold_reduction_en_service) {
			var calc1 = (value['red_ser_parse'] - treshold_reduction_en_service) * penality1_reduction_en_service;
			var calc2 = (penality1_reduction_en_service - red_tr) * penality2_reduction_en_service;
			var penality_reduction_en_service = (calc1)+(calc2)*100;
	}	else {
		var penality_reduction_en_service = (value['red_ser_parse']-red_tr)*penality1_reduction_en_service*100;
	}	
		
} else {
	var penality_red_tr = 0;
}
	
	//-----------------
	if(value['red_house']<red_house) {
		if(value['red_house']<treshold_reduction_en_house) {
			var calc1 = (value['red_house'] - treshold_reduction_en_house) * penality1_reduction_en_house;
			var calc2 = (penality1_reduction_en_house - red_house) * penality2_reduction_en_house;
			var penality_reduction_en_house = (calc1)+(calc2)*100;
	}		else {
		var penality_red_house = (value['red_house']-red_house)*penality1_reduction_en_house*100;
	}	
		
} else {
	var penality_red_house = 0;
}
	//------------------
	if(value['el_tr_parse']<elec_tr) {
		if(value['el_tr_parse']<treshold_elec_tr) {
			var calc1 = (value['el_tr_parse'] - treshold_elec_tr) * penality1_elec_tr;
			var calc2 = (penality1_elec_tr - elec_tr) * penality2_elec_tr;
			var penality_elec_tr = (calc1)+(calc2)*100;
	}		
		else {
			var penality_elec_tr = (value['el_tr_parse']-elec_tr)*penality1_elec_tr*100;
		}	
} else {
	var penality_elec_tr = 0;
}
	//-------------------
	
	if(value['fuel_house_parse']<gas_coal) {
		if(value['fuel_house_parse']<treshold_red_gas_house) {
			var calc1 = (value['fuel_house_parse'] - treshold_red_gas_house) * penality1_red_gas_house;
			var calc2 = (penality1_red_gas_house - gas_coal) * penality2_red_gas_house;
			var penality_gas_coal = (calc1)+(calc2)*100;
	}	else {
		var penality_gas_coal = (value['fuel_house_parse']-gas_coal)*penality1_red_gas_house*100;
	}			
		
} else {
	var penality_gas_coal = 0;
}
	//--------------------
	if(value['bio_fr_parse']<biofuel) {
		if(value['bio_fr_parse']<treshold_percentage_bio) {
			var calc1 = (value['bio_fr_parse'] - treshold_percentage_bio) * penality1_percentage_bio;
			var calc2 = (penality1_percentage_bio - biofuel) * penality2_percentage_bio;
			var penality_biofuel = (calc1)+(calc2)*100;
	}else {
		var penality_biofuel = (value['bio_fr_parse']-biofuel)*penality1_percentage_bio*100;
	}
		
} else {
	var penality_biofuel = 0;
}
	//------------------------
	if(value['nuclearp']<nuclear) {
		if(value['nuclearp']<treshold_fraction_total) {
			var calc1 = (value['nuclearp'] - treshold_fraction_total) * penality1_fraction_total;
			var calc2 = (penality1_fraction_total - nuclear) * penality2_fraction_total;
			var penality_fraction_total = (calc1)+(calc2)*100;
	}	else {
		var penality_fraction_total = (value['nuclearp']-nuclear)*penality1_fraction_total*100;
	}
		
} else {
	var penality_fraction_total = 0;
}

//_-------
	var sum = penality_intake+penality_waste+penality_vegan+penality_vegetarian+penality_day_less_meat+penality_organic_mulching+penality_full_irrigation+penality_reduction_en_ind+penality_reduction_en_tr+penality_reduction_en_service+penality_reduction_en_house+penality_elec_tr+penality_gas_coal+penality_biofuel+penality_fraction_total
	//_-------
	//_-------
		document.getElementById("penality").innerHTML = sum;
//_-------
} 


//---------------------------------

else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC') && (DataInput === null)) { 
	var rainfed = 0.89;
	var irrigated = 1-rainfed;	
	treshold_closing_water = parseFloat(rainfed*0.2).toFixed(4);
	treshold_organic_mulching = parseFloat(rainfed*0.2).toFixed(4);
	treshold_deficit_full_irrigation = parseFloat(irrigated*0.2).toFixed(4) ;
	treshold_deficit_irr_and_mulching = parseFloat(irrigated*0.2).toFixed(4) ;
	treshold_deficit_drip = parseFloat(irrigated*0.2).toFixed(4) ;
	
var days = '7'; //days
//----------------------------------------------------------------------------------
var calories = '2920'; //calories
var waste = '20'; //waste
var vegan = '0'; //vegan
var vegetarian = '6'; //vegetarian
var meat = '94'; //meat
//----------------------------------------------------------------------------------
var plant_import = '17'; //plant
var meat_import = '11'; //meat
var diary_import = '0'; //diary
//----------------------------------------------------------------------------------
var closing = '0'; //closing
var organic = '0'; //Mulch
//select select1,2 o 3
var full_deficit_parse = '0';
//------------------------------------------------------------------------------------
var wind = '12'; // wind
var solar = '6'; // solar
var hydro = '6'; //hydro
var biofuel = '7'; //biofuel
var nuclear = '14'; //nuclear
var fossil = '55'; //fossil
//-------------------------------------------------------------------------------------
var red_ind = '0'; //red_ind
var red_house = '0'; //red_trans
var red_service = '0'; //red_service
var red_tr = '0'; //red_house
var elec_tr = '5';  //elec
var gas_coal = '0';   //gas
var perc_fuel = '13'; //perc_fossil 
var fossil_f = '74'; //fossil
var biofuel = '10'; //bio
var electricity = '0'; //electricity

	if(value['intakeparse']<calories) {
		if(value['intakeparse']<treshold_food_intake) {
			var calc1 = (value['intakeparse'] - treshold_food_intake) * penality1_food_intake;
			var calc2 = (penality1_food_intake - calories) * penality2_food_intake;
			var penality_intake = (calc1)+(calc2);
	}		
		else {
			var penality_intake = (value['intakeparse']-calories)*penality1_food_intake;
		}	
} else {
	var penality_intake = 0;
}
	//------------------
	if(value['wasteparse']<waste) {
		if(value['wasteparse']<treshold_food_waste) {
			var calc1 = (value['wasteparse'] - treshold_food_waste) * penality1_food_waste;
			var calc2 = (penality1_food_waste - waste) * penality2_food_waste;
			var penality_waste = (calc1)+(calc2);
	}	
		else {
			var penality_waste = (value['wasteparse']-waste)*penality1_food_waste;
		}	
} else {
	var penality_waste = 0;
}
	//------------
	if(value['vegparse']<vegan) {
		if(value['vegparse']<treshold_vegan) {
			var calc1 = (value['vegparse'] - treshold_vegan) * penality1_vegan;
			var calc2 = (penality1_vegan - vegan) * penality2_vegan;
			var penality_vegan = (calc1)+(calc2);
	}else {
		var penality_vegan = (value['vegparse']-vegan)*penality1_vegan;
	}	
		
} else {
	var penality_vegan = 0;
}
	//-----------------
	if(value['vegeparse']<vegetarian) {
		if(value['vegeparse']<treshold_vegetarian) {
			var calc1 = (value['vegeparse'] - treshold_vegetarian) * penality1_vegetarian;
			var calc2 = (penality1_vegetarian - vegetarian) * penality2_vegetarian;
			var penality_vegetarian = (calc1)+(calc2);
	}		
		else {
			var penality_vegetarian = (value['vegeparse']-vegetarian)*penality1_vegetarian;
		}	
} else {
	var penality_vegetarian = 0;
}
	//--------------------
	//dubbi qui
	if(value['daysp']<days) {
		if(value['daysp']<treshold_day_less_meat) {
			var calc1 = (value['daysp'] - treshold_day_less_meat) * penality1_day_less_meat;
			var calc2 = (penality1_day_less_meat - days) * penality2_day_less_meat;
			var penality_day_less_meat = (calc1)+(calc2);
	}	
		else {
			var penality_day_less_meat = (value['daysp']-days)*penality1_day_less_meat;
		}	
} else {
	var penality_day_less_meat = 0;
}
//---------------------------
	if(value['Gap_Yeld_parse']<closing) {
		if(value['Gap_Yeld_parse']<treshold_closing_water) {
			var calc1 = (value['Gap_Yeld_parse'] - treshold_closing_water) * penality1_closing_water;
			var calc2 = (penality1_closing_water - closing) * penality2_closing_water;
			var penality_closing_water = (calc1)+(calc2);
	}		
		else {
		var penality_organic_mulching = (value['Gap_Yeld_parse']-closing)*penality1_closing_water;
	}	
} else {
	var penality_closing_water = 0;
}
	//-----------------
	if(value['Mulching_parse']<organic) {
		if(value['Mulching_parse']<treshold_organic_mulching) {
			var calc1 = (value['Mulching_parse'] - treshold_organic_mulching) * penality1_organic_mulching;
			var calc2 = (penality1_organic_mulching - organic) * penality2_organic_mulching;
			var penality_organic_mulching = (calc1)+(calc2);
	}	else {
		var penality_organic_mulching = (value['Mulching_parse']-organic)*penality1_organic_mulching;
	}	
		
} else {
	var penality_organic_mulching = 0;
}
	//------------
	//MANCA L'IF CON LA SELECT...
	//MANCA L'IF CON LA SELECT...
	var measure = document.getElementById("Measure").value;	
////console.log("measure: "+measure);
var Deficit = irrigated*full_deficit_parse;
var Deficitinit = 0;
var checkregionyg = document.querySelector('input[name="region"]:checked'); 
if ((measure=='1')||(measure=='2')||(measure=='3')) {
	if(Deficitinit<Deficit) {
		if(Deficitinit<treshold_deficit_full_irrigation) {
			var calc1 = (-Deficitinit) - (treshold_deficit_full_irrigation) * penality1_deficit_full_irrigation;
			var calc2 = (-treshold_deficit_full_irrigation) - (Deficit) * penality2_full_irrigation;
			var penality_full_irrigation = (calc1)+(calc2)*100;
	}		
		else {
		var penality_full_irrigation = (-Deficitinit) - (Deficit )*penality1_full_irrigation;
	}	
} else {
	var penality_full_irrigation = 0;
}
	
}
	//----------------
	if(value['red_ind_parse']<red_ind) {
		if(value['red_ind_parse']<treshold_reduction_en_ind) {
			var calc1 = (value['red_ind_parse'] - treshold_reduction_en_ind) * penality1_reduction_en_ind;
			var calc2 = (penality1_reduction_en_ind - red_ind) * penality2_reduction_en_ind;
			var penality_reduction_en_ind = (calc1)+(calc2)*100;
	}		
		else {
		var penality_reduction_en_ind = (value['red_ind_parse']-red_ind)*penality1_reduction_en_ind*100;
	}	
} else {
	var penality_reduction_en_ind = 0;
}
	//-----------------
	if(value['red_tr_parse']<red_tr) {
		if(value['red_tr_parse']<treshold_reduction_en_tr) {
			var calc1 = (value['red_tr_parse'] - treshold_reduction_en_tr) * penality1_reduction_en_tr;
			var calc2 = (penality1_reduction_en_tr - red_tr) * penality2_reduction_en_tr;
			var penality_reduction_en_tr = (calc1)+(calc2)*100;
	}		else {
		var penality_reduction_en_tr = (value['red_tr_parse']-red_tr)*penality1_reduction_en_tr*100;
	}	
} else {
	var penality_reduction_en_tr = 0;
}
	//---------------------
	if(value['red_ser_parse']<red_tr) {
		if(value['red_ser_parse']<treshold_reduction_en_service) {
			var calc1 = (value['red_ser_parse'] - treshold_reduction_en_service) * penality1_reduction_en_service;
			var calc2 = (penality1_reduction_en_service - red_tr) * penality2_reduction_en_service;
			var penality_reduction_en_service = (calc1)+(calc2)*100;
	}	else {
		var penality_reduction_en_service = (value['red_ser_parse']-red_tr)*penality1_reduction_en_service*100;
	}	
		
} else {
	var penality_red_tr = 0;
}
	
	//-----------------
	if(value['red_house']<red_house) {
		if(value['red_house']<treshold_reduction_en_house) {
			var calc1 = (value['red_house'] - treshold_reduction_en_house) * penality1_reduction_en_house;
			var calc2 = (penality1_reduction_en_house - red_house) * penality2_reduction_en_house;
			var penality_reduction_en_house = (calc1)+(calc2)*100;
	}		else {
		var penality_red_house = (value['red_house']-red_house)*penality1_reduction_en_house*100;
	}	
		
} else {
	var penality_red_house = 0;
}
	//------------------
	if(value['el_tr_parse']<elec_tr) {
		if(value['el_tr_parse']<treshold_elec_tr) {
			var calc1 = (value['el_tr_parse'] - treshold_elec_tr) * penality1_elec_tr;
			var calc2 = (penality1_elec_tr - elec_tr) * penality2_elec_tr;
			var penality_elec_tr = (calc1)+(calc2)*100;
	}		
		else {
			var penality_elec_tr = (value['el_tr_parse']-elec_tr)*penality1_elec_tr*100;
		}	
} else {
	var penality_elec_tr = 0;
}
	//-------------------
	
	if(value['fuel_house_parse']<gas_coal) {
		if(value['fuel_house_parse']<treshold_red_gas_house) {
			var calc1 = (value['fuel_house_parse'] - treshold_red_gas_house) * penality1_red_gas_house;
			var calc2 = (penality1_red_gas_house - gas_coal) * penality2_red_gas_house;
			var penality_gas_coal = (calc1)+(calc2)*100;
	}	else {
		var penality_gas_coal = (value['fuel_house_parse']-gas_coal)*penality1_red_gas_house*100;
	}			
		
} else {
	var penality_gas_coal = 0;
}
	//--------------------
	if(value['bio_fr_parse']<biofuel) {
		if(value['bio_fr_parse']<treshold_percentage_bio) {
			var calc1 = (value['bio_fr_parse'] - treshold_percentage_bio) * penality1_percentage_bio;
			var calc2 = (penality1_percentage_bio - biofuel) * penality2_percentage_bio;
			var penality_biofuel = (calc1)+(calc2)*100;
	}else {
		var penality_biofuel = (value['bio_fr_parse']-biofuel)*penality1_percentage_bio*100;
	}
		
} else {
	var penality_biofuel = 0;
}
	//------------------------
	if(value['nuclearp']<nuclear) {
		if(value['nuclearp']<treshold_fraction_total) {
			var calc1 = (value['nuclearp'] - treshold_fraction_total) * penality1_fraction_total;
			var calc2 = (penality1_fraction_total - nuclear) * penality2_fraction_total;
			var penality_fraction_total = (calc1)+(calc2)*100;
	}	else {
		var penality_fraction_total = (value['nuclearp']-nuclear)*penality1_fraction_total*100;
	}
		
} else {
	var penality_fraction_total = 0;
}
	var sum = penality_intake+penality_waste+penality_vegan+penality_vegetarian+penality_day_less_meat+penality_organic_mulching+penality_full_irrigation+penality_reduction_en_ind+penality_reduction_en_tr+penality_reduction_en_service+penality_reduction_en_house+penality_elec_tr+penality_gas_coal+penality_biofuel+penality_fraction_total
	//_-------
	//_-------
		document.getElementById("penality").innerHTML = sum;
//_-------
}
//_-------
	



else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')&&(DataInput===null)) {
	var rainfed = 0.91;
	var irrigated = 1-rainfed;	
	treshold_closing_water = parseFloat(rainfed*0.2).toFixed(4);
	treshold_organic_mulching = parseFloat(rainfed*0.2).toFixed(4);
	treshold_deficit_full_irrigation = parseFloat(irrigated*0.2).toFixed(4) ;
	treshold_deficit_irr_and_mulching = parseFloat(irrigated*0.2).toFixed(4) ;
	treshold_deficit_drip = parseFloat(irrigated*0.2).toFixed(4) ;
	
var days = '7'; //days
//----------------------------------------------------------------------------------
var calories = '2890'; //calories
var waste = '20'; //waste
var vegan = '0'; //vegan
var vegetarian = '6'; //vegetarian
var meat = '94'; //meat
//----------------------------------------------------------------------------------
var plant_import = '0'; //plant
var meat_import = '0'; //meat
var diary_import = '0'; //diary
//----------------------------------------------------------------------------------
var closing = '0'; //closing
var organic = '0'; //Mulch
//select select1,2 o 3
var full_deficit_parse = '0';
//------------------------------------------------------------------------------------
var wind = '11'; // wind
var solar = '2'; // solar
var hydro = '9'; //hydro
var biofuel = '2'; //biofuel
var nuclear = '35'; //nuclear
var fossil = '41'; //fossil
//-------------------------------------------------------------------------------------
var red_ind = '0'; //red_ind
var red_house = '0'; //red_trans
var red_service = '0'; //red_service
var red_tr = '0'; //red_house
var elec_tr = '5';  //elec
var gas_coal = '0';   //gas
var perc_fuel = '13'; //perc_fossil 
var fossil_f = '77'; //fossil
var biofuel = '0'; //bio
var electricity = '0'; //electricity

	if(value['intakeparse']<calories) {
		if(value['intakeparse']<treshold_food_intake) {
			var calc1 = (value['intakeparse'] - treshold_food_intake) * penality1_food_intake;
			var calc2 = (penality1_food_intake - calories) * penality2_food_intake;
			var penality_intake = (calc1)+(calc2);
	}		
		else {
			var penality_intake = (value['intakeparse']-calories)*penality1_food_intake;
		}	
} else {
	var penality_intake = 0;
}
	//------------------
	if(value['wasteparse']<waste) {
		if(value['wasteparse']<treshold_food_waste) {
			var calc1 = (value['wasteparse'] - treshold_food_waste) * penality1_food_waste;
			var calc2 = (penality1_food_waste - waste) * penality2_food_waste;
			var penality_waste = (calc1)+(calc2);
	}	
		else {
			var penality_waste = (value['wasteparse']-waste)*penality1_food_waste;
		}	
} else {
	var penality_waste = 0;
}
	//------------
	if(value['vegparse']<vegan) {
		if(value['vegparse']<treshold_vegan) {
			var calc1 = (value['vegparse'] - treshold_vegan) * penality1_vegan;
			var calc2 = (penality1_vegan - vegan) * penality2_vegan;
			var penality_vegan = (calc1)+(calc2);
	}else {
		var penality_vegan = (value['vegparse']-vegan)*penality1_vegan;
	}	
		
} else {
	var penality_vegan = 0;
}
	//-----------------
	if(value['vegeparse']<vegetarian) {
		if(value['vegeparse']<treshold_vegetarian) {
			var calc1 = (value['vegeparse'] - treshold_vegetarian) * penality1_vegetarian;
			var calc2 = (penality1_vegetarian - vegetarian) * penality2_vegetarian;
			var penality_vegetarian = (calc1)+(calc2);
	}		
		else {
			var penality_vegetarian = (value['vegeparse']-vegetarian)*penality1_vegetarian;
		}	
} else {
	var penality_vegetarian = 0;
}
	//--------------------
	//dubbi qui
	if(value['daysp']<days) {
		if(value['daysp']<treshold_day_less_meat) {
			var calc1 = (value['daysp'] - treshold_day_less_meat) * penality1_day_less_meat;
			var calc2 = (penality1_day_less_meat - days) * penality2_day_less_meat;
			var penality_day_less_meat = (calc1)+(calc2);
	}	
		else {
			var penality_day_less_meat = (value['daysp']-days)*penality1_day_less_meat;
		}	
} else {
	var penality_day_less_meat = 0;
}
//---------------------------
	if(value['Gap_Yeld_parse']<closing) {
		if(value['Gap_Yeld_parse']<treshold_closing_water) {
			var calc1 = (value['Gap_Yeld_parse'] - treshold_closing_water) * penality1_closing_water;
			var calc2 = (penality1_closing_water - closing) * penality2_closing_water;
			var penality_closing_water = (calc1)+(calc2);
	}		
		else {
		var penality_organic_mulching = (value['Gap_Yeld_parse']-closing)*penality1_closing_water;
	}	
} else {
	var penality_closing_water = 0;
}
	//-----------------
	if(value['Mulching_parse']<organic) {
		if(value['Mulching_parse']<treshold_organic_mulching) {
			var calc1 = (value['Mulching_parse'] - treshold_organic_mulching) * penality1_organic_mulching;
			var calc2 = (penality1_organic_mulching - organic) * penality2_organic_mulching;
			var penality_organic_mulching = (calc1)+(calc2);
	}	else {
		var penality_organic_mulching = (value['Mulching_parse']-organic)*penality1_organic_mulching;
	}	
		
} else {
	var penality_organic_mulching = 0;
}
	//------------
	//MANCA L'IF CON LA SELECT...
	//MANCA L'IF CON LA SELECT...
	var measure = document.getElementById("Measure").value;	
////console.log("measure: "+measure);
var Deficit = irrigated*full_deficit_parse;
var Deficitinit = 0;
var checkregionyg = document.querySelector('input[name="region"]:checked'); 
if ((measure=='1')||(measure=='2')||(measure=='3')) {
	if(Deficitinit<Deficit) {
		if(Deficitinit<treshold_deficit_full_irrigation) {
			var calc1 = (-Deficitinit) - (treshold_deficit_full_irrigation) * penality1_deficit_full_irrigation;
			var calc2 = (-treshold_deficit_full_irrigation) - (Deficit) * penality2_full_irrigation;
			var penality_full_irrigation = (calc1)+(calc2)*100;
	}		
		else {
		var penality_full_irrigation = (-Deficitinit) - (Deficit )*penality1_full_irrigation;
	}	
} else {
	var penality_full_irrigation = 0;
}
	
}
	//----------------
	if(value['red_ind_parse']<red_ind) {
		if(value['red_ind_parse']<treshold_reduction_en_ind) {
			var calc1 = (value['red_ind_parse'] - treshold_reduction_en_ind) * penality1_reduction_en_ind;
			var calc2 = (penality1_reduction_en_ind - red_ind) * penality2_reduction_en_ind;
			var penality_reduction_en_ind = (calc1)+(calc2)*100;
	}		
		else {
		var penality_reduction_en_ind = (value['red_ind_parse']-red_ind)*penality1_reduction_en_ind*100;
	}	
} else {
	var penality_reduction_en_ind = 0;
}
	//-----------------
	if(value['red_tr_parse']<red_tr) {
		if(value['red_tr_parse']<treshold_reduction_en_tr) {
			var calc1 = (value['red_tr_parse'] - treshold_reduction_en_tr) * penality1_reduction_en_tr;
			var calc2 = (penality1_reduction_en_tr - red_tr) * penality2_reduction_en_tr;
			var penality_reduction_en_tr = (calc1)+(calc2)*100;
	}		else {
		var penality_reduction_en_tr = (value['red_tr_parse']-red_tr)*penality1_reduction_en_tr*100;
	}	
} else {
	var penality_reduction_en_tr = 0;
}
	//---------------------
	if(value['red_ser_parse']<red_tr) {
		if(value['red_ser_parse']<treshold_reduction_en_service) {
			var calc1 = (value['red_ser_parse'] - treshold_reduction_en_service) * penality1_reduction_en_service;
			var calc2 = (penality1_reduction_en_service - red_tr) * penality2_reduction_en_service;
			var penality_reduction_en_service = (calc1)+(calc2)*100;
	}	else {
		var penality_reduction_en_service = (value['red_ser_parse']-red_tr)*penality1_reduction_en_service*100;
	}	
		
} else {
	var penality_red_tr = 0;
}
	
	//-----------------
	if(value['red_house']<red_house) {
		if(value['red_house']<treshold_reduction_en_house) {
			var calc1 = (value['red_house'] - treshold_reduction_en_house) * penality1_reduction_en_house;
			var calc2 = (penality1_reduction_en_house - red_house) * penality2_reduction_en_house;
			var penality_reduction_en_house = (calc1)+(calc2)*100;
	}		else {
		var penality_red_house = (value['red_house']-red_house)*penality1_reduction_en_house*100;
	}	
		
} else {
	var penality_red_house = 0;
}
	//------------------
	if(value['el_tr_parse']<elec_tr) {
		if(value['el_tr_parse']<treshold_elec_tr) {
			var calc1 = (value['el_tr_parse'] - treshold_elec_tr) * penality1_elec_tr;
			var calc2 = (penality1_elec_tr - elec_tr) * penality2_elec_tr;
			var penality_elec_tr = (calc1)+(calc2)*100;
	}		
		else {
			var penality_elec_tr = (value['el_tr_parse']-elec_tr)*penality1_elec_tr*100;
		}	
} else {
	var penality_elec_tr = 0;
}
	//-------------------
	
	if(value['fuel_house_parse']<gas_coal) {
		if(value['fuel_house_parse']<treshold_red_gas_house) {
			var calc1 = (value['fuel_house_parse'] - treshold_red_gas_house) * penality1_red_gas_house;
			var calc2 = (penality1_red_gas_house - gas_coal) * penality2_red_gas_house;
			var penality_gas_coal = (calc1)+(calc2)*100;
	}	else {
		var penality_gas_coal = (value['fuel_house_parse']-gas_coal)*penality1_red_gas_house*100;
	}			
		
} else {
	var penality_gas_coal = 0;
}
	//--------------------
	if(value['bio_fr_parse']<biofuel) {
		if(value['bio_fr_parse']<treshold_percentage_bio) {
			var calc1 = (value['bio_fr_parse'] - treshold_percentage_bio) * penality1_percentage_bio;
			var calc2 = (penality1_percentage_bio - biofuel) * penality2_percentage_bio;
			var penality_biofuel = (calc1)+(calc2)*100;
	}else {
		var penality_biofuel = (value['bio_fr_parse']-biofuel)*penality1_percentage_bio*100;
	}
		
} else {
	var penality_biofuel = 0;
}
	//------------------------
	if(value['nuclearp']<nuclear) {
		if(value['nuclearp']<treshold_fraction_total) {
			var calc1 = (value['nuclearp'] - treshold_fraction_total) * penality1_fraction_total;
			var calc2 = (penality1_fraction_total - nuclear) * penality2_fraction_total;
			var penality_fraction_total = (calc1)+(calc2)*100;
	}	else {
		var penality_fraction_total = (value['nuclearp']-nuclear)*penality1_fraction_total*100;
	}
		
} else {
	var penality_fraction_total = 0;
}

//_-------
	
} 
else {}
var sum = penality_intake+penality_waste+penality_vegan+penality_vegetarian+penality_day_less_meat+penality_organic_mulching+penality_full_irrigation+penality_reduction_en_ind+penality_reduction_en_tr+penality_reduction_en_service+penality_reduction_en_house+penality_elec_tr+penality_gas_coal+penality_biofuel+penality_fraction_total
//_-------
//_-------
	document.getElementById("penality").innerHTML = sum;
};

var myVar = setInterval(Penality,500);
