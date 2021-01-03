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
var penality1_select2 = 0.1;
var penality1_select3 = 0.3;
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
var penality2_select2 = 0.2;
var penality2_select3 = 0.5;
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
var checkregion = document.querySelector('input[name="region"]:checked');

var regionname = region.getAttribute('id');
var value = sessionStorage.getItem(regionname+'DataInput');

//SE INVECE
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	//alert("CHECKATO REGION A");
	var rainfed = 0.84;
	var irrigated = parseFloat(1-rainfed).toFixed(2);	
	irrigated = Number(irrigated);
	//console.log("irrigated"+irrigated);
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

var vdays = document.getElementById("A8_f").value;
vdays = Number(vdays);
var vcalories = document.getElementById("f_D4").value;
vcalories = Number(vcalories);
var vwaste =document.getElementById("f_D5").value;
vwaste = Number(vwaste);
var vvegan = document.getElementById("f_C6").value;
vvegan = Number(vvegan);
var vvegetarian = document.getElementById("f_C7").value;
vvegetarian = Number(vvegetarian);
var vmeat = document.getElementById("f_C8").value;
vmeat = Number(vmeat);
var vclosing = document.getElementById("G14").value;
vclosing = Number(vclosing);
var vorganic = document.getElementById("G15").value;
vorganic = Number(vorganic);
var vfull_deficit_parse = document.getElementById("G19").value;
vfull_deficit_parse = Number(vfull_deficit_parse);
var vplant_import = document.getElementById("E30").value;
var vmeat_import = document.getElementById("E31").value;
var vdiary_import = document.getElementById("E32").value;
var vwind = document.getElementById("em_J21").value;
var vsolar = document.getElementById("em_J22").value;
var vhydro = document.getElementById("em_J23").value;
var vbifuel = document.getElementById("em_J24").value;
var vnuclear = document.getElementById("em_J25").value;
vnuclear = Number(vnuclear);
var vfossil = document.getElementById("em_J26").value;
var vred_ind = document.getElementById("e_N5").value;
vred_ind = Number(vred_ind);
var vred_house = document.getElementById("e_N6").value;
vred_house = Number(vred_house);
var vred_service = document.getElementById("e_N7").value;
vred_service = Number(vred_service);
var vred_tr = document.getElementById("e_N8").value;
vred_tr = Number(vred_tr);
var velec_tr = document.getElementById("e_N11").value;
velec_tr = Number(velec_tr);
var vgas_coal = document.getElementById("e_N12").value;
vgas_coal = Number(vgas_coal);
var perc_fuel = document.getElementById("e_N13").value;
perc_fuel = Number(perc_fuel);
var vfossil_f = document.getElementById("L30").value;
vfossil_f = Number(vfossil_f);
var vbiofuel = document.getElementById("L31").value;
vbiofuel = Number(vbiofuel);
var velectricity = document.getElementById("L32").value;
velectricity = Number(velectricity);


//PUNTEGGI
vclosing = (vclosing/100)*rainfed;
vorganic = (vorganic/100)*rainfed;
vfull_deficit_parse = (vfull_deficit_parse)*irrigated;
console.log("CONTROLLO VALORE DI VCLOSING REG B: "+vfull_deficit_parse);
	
	if(vcalories<calories) {
		//alert("SONO NEL PRIMO IF "+vcalories+" e "+calories);
		if(vcalories<treshold_food_intake) {
			//console.log("vcalories "+vcalories+" "+treshold_food_intake);
			//alert("SONO NEL SECONDO IF "+vcalories+" e "+treshold_food_intake);
			var calc1 = (calories - treshold_food_intake) * penality1_food_intake;
			//console.log("vcalories "+calories+" "+treshold_food_intake+" "+penality1_food_intake);
			//console.log("calc1:"+calc1);
			var calc2 = (treshold_food_intake - vcalories) * penality2_food_intake;
			//console.log("calc2 "+calories+" "+treshold_food_intake+" "+vcalories+" "+penality2_food_intake);
			//console.log("calc1:"+calc2);

			var penality_intake = (calc1)+(calc2);
			//console.log("penality intake "+penality_intake)
	}		
		else {
			var penality_intake = (calories-vcalories)*penality1_food_intake;
			//console.log("penality intake "+penality1_food_intake);
		}	
} else {
	var penality_intake = 0;

}
	//alert("CHECKATO REGION A INTAKE "+penality_intake);
	//------------------
	if(vwaste<waste) {
		if(vwaste<treshold_food_waste) {
			//console.log("vwaste "+vwaste+" "+treshold_food_waste);
			var calc1 = (waste - treshold_food_waste) * penality1_food_waste;
			//console.log("vwaste p"+penality1_food_waste);
			//console.log("calc1:"+calc1);
			var calc2 = (treshold_food_waste - vwaste) * penality2_food_waste;
			var penality_waste = (calc1)+(calc2)*100;
			//console.log("calc2:"+calc2);
			//console.log("penality_waste:"+penality_waste);

	}	
		else {
			var penality_waste = (waste-vwaste)*penality1_food_waste;
			//console.log("penality_waste:"+penality_waste);
		}	
		
} else {
	var penality_waste = 0;
}
	//------------
	if(vvegan>vegan) {
		//console.log("SONO DENTRO IF VVEGAN:");

		if(vvegan>treshold_vegan) {
			//console.log("vvegan:"+penality_vegan);
			var calc1 = (-vegan + treshold_vegan) * penality1_vegan;
			//console.log("calc1:"+calc1);
			var calc2 = (-treshold_vegan + vvegan) * penality2_vegan;
			//console.log("calc2:"+calc2);
			var penality_vegan = (calc1)+(calc2);
			penality_vegan = penality_Vegan;
			//console.log("penality_vegan:"+penality_vegan);

	}else {
		var penality_vegan = (-vegan+vvegan)*penality1_vegan;
		penality_vegan = penality_vegan;
		//console.log("penality_vegan:"+penality_vegan);

	}	
		
} else {
	var penality_vegan = 0;
}
	//-----------------
	if(vvegetarian>vegetarian) {
		if(vvegetarian>treshold_vegetarian) {
			var calc1 = (-vegetarian + treshold_vegetarian) * penality1_vegetarian;
			var calc2 = (-treshold_vegetarian + vvegetarian) * penality2_vegetarian;
			var penality_vegetarian = (calc1)+(calc2);
	}		
		else {
			var penality_vegetarian = (-vegetarian+vvegetarian)*penality1_vegetarian;
		}	
} else {
	var penality_vegetarian = 0;
}
	//--------------------
	//dubbi qui
	if(vdays>days) {
		if(vdays>treshold_day_less_meat) {
			var calc1 = (-days + treshold_day_less_meat) * penality1_day_less_meat;
			var calc2 = (-treshold_day_less_meat + days) * penality2_day_less_meat;
			var penality_day_less_meat = (calc1)+(calc2);
			penality_day_less_meat = penality_day_less_meat*vmeat/ 100;
	}	
		else {
			var penality_day_less_meat = (-days+vdays)*penality1_day_less_meat;
			penality_day_less_meat = penality_day_less_meat*vmeat/ 100;
		}	
} else {
	var penality_day_less_meat = 0;
}
//---------------------------
	if(vclosing>closing) {
		if(vclosing>treshold_closing_water) {
			console.log("vclosing NEW REGION B"+vclosing+" "+treshold_closing_water+" "+closing);
			var calc1 = (-Math.abs(closing) + treshold_closing_water) * penality1_closing_water;
			calc1=parseFloat(calc1).toFixed(4);
			console.log("calc1 neg closing REGION B"+(-closing));
			console.log("calc1 tr "+ treshold_closing_water);
			console.log("calc1 "+calc1);

			var calc2 = (-Math.abs(treshold_closing_water) + closing) * penality2_closing_water;
		console.log("calc2 math "+-Math.abs(vclosing));
		console.log("calc2 "+calc2);

			var penality_closing_water = (calc1)+(calc2);

			penality_closing_water = parseFloat(penality_closing_water).toFixed(4);
			penality_closing_water = Number(penality_closing_water)*100;
		console.log("penality_closing_water 1 B"+penality_closing_water);

	}		
		else {
		var penality_closing_water = (-closing+vclosing)*penality1_closing_water;
		penality_closing_water = parseFloat(penality_closing_water).toFixed(4);
		penality_closing_water = Number(penality_closing_water)*100;
		console.log("penality_closing_water 2 B"+penality_closing_water);

	}	
} else {
	var penality_closing_water = 0;
	console.log("penality_closing_water 3 B"+penality_closing_water);

}
	//-----------------
	if(vorganic>organic) {
		if(vorganic>treshold_organic_mulching) {
			console.log("vorganic B"+vorganic+" "+organic+" "+treshold_organic_mulching);
			console.log("penalities organic B"+penality1_organic_mulching+" "+penality2_organic_mulching);

			var calc1 = (-organic + treshold_organic_mulching) * penality1_organic_mulching;
			console.log("calc1 B"+calc1);

			var calc2 = (-Math.abs(treshold_organic_mulching) + vorganic) * penality2_organic_mulching;
			console.log("calc2 B"+calc2);

			var penality_organic_mulching = (calc1)+(calc2);
			penality_organic_mulching = parseFloat(penality_organic_mulching).toFixed(4);
			penality_organic_mulching = Number(penality_organic_mulching)*100;
			console.log("penality_organic_mulching 1 B"+penality_organic_mulching);

	}	else {
		var penality_organic_mulching = (-organic+vorganic)*penality1_organic_mulching;
		penality_organic_mulching = parseFloat(penality_organic_mulching).toFixed(4);
		penality_organic_mulching = Number(penality_organic_mulching)*100;
		console.log("penality_organic_mulching 2 B"+penality_organic_mulching);

	}	
		
} else {
	var penality_organic_mulching = 0;
	console.log("penality_organic_mulching 3 "+penality_organic_mulching);

}
	//------------SELECT 
	var measure = document.getElementById("Measure").value;	
	//console.log("measure  def "+measure);

console.log("measure: "+measure);
	var Deficit = irrigated*(vfull_deficit_parse/100);
//console.log("Deficit  def "+Deficit);
//console.log("irrigated"+irrigated);
var Deficitinit = 0;
var checkregionyg = document.querySelector('input[name="region"]:checked'); 
//measure 1
if (measure=='1') { 
	console.log("SONO DENTRO IF 1 ");

	if(Deficit>Deficitinit) {
		console.log("SONO DENTRO IF 2 ");

		if(Deficit>treshold_deficit_full_irrigation) {
			console.log("penality_full_irrigation 1 def "+Deficitinit);
			var calc1 = (-Deficitinit) + (treshold_deficit_full_irrigation) * penality1_deficit_full_irrigation;
			var calc2 = (-treshold_deficit_full_irrigation) + (Deficit) * penality2_full_irrigation;
			var penality_full_irrigation = (calc1)+(calc2);
			penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
			penality_full_irrigation = Number(penality_full_irrigation)*100;
	}		
		else {
		var penality_full_irrigation = (-Deficitinit+Deficit )*penality1_full_irrigation;
		penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
		penality_full_irrigation = Number(penality_full_irrigation)*100;
		console.log("penality_full_irrigation 1 "+penality_full_irrigation);

	}	
}else {
	penality_full_irrigation = 0;

} 
	console.log("penality_full_irrigation 1 "+penality_full_irrigation);

}
	//measure 2:
else if (measure=='2'){
	if(Deficit>Deficitinit) {
		if(Deficit>treshold_deficit_full_irrigation) {
			//console.log("penality_full_irrigation 2 def "+Deficitinit);
			var calc1 = (-Deficitinit) + (treshold_deficit_full_irrigation) * penality1_select2;
			var calc2 = (-treshold_deficit_full_irrigation) + (Deficit) * penality2_select2;
			var penality_full_irrigation = (calc1)+(calc2);
			penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
			penality_full_irrigation = Number(penality_full_irrigation)*100;

	}		
		else {
		var penality_full_irrigation = (-Deficitinit+Deficit )*penality1_select2;
		penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
		penality_full_irrigation = Number(penality_full_irrigation)*100;

	}	
	}else {
		penality_full_irrigation = 0;
	} 
	//console.log("penality_full_irrigation 2 "+penality_full_irrigation);
} 
	
	//measure3:
else if (measure=='3'){
		if(Deficit>Deficitinit) {
			if(Deficit>treshold_deficit_full_irrigation) {
				//console.log("penality_full_irrigation 3 def "+Deficitinit);

				var calc1 = (-Deficitinit) + (treshold_deficit_full_irrigation) * penality1_select3;
				var calc2 = (-treshold_deficit_full_irrigation) + (Deficit) * penality2_select3;
				var penality_full_irrigation = (calc1)+(calc2);
				penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
				penality_full_irrigation = Number(penality_full_irrigation)*100;

		}		
			else {
			var penality_full_irrigation = (-Deficitinit+Deficit )*penality1_select3;
			penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
			penality_full_irrigation = Number(penality_full_irrigation)*100;

		}	
		}else {
			penality_full_irrigation = 0;
		} 
		//console.log("penality_full_irrigation 3 "+penality_full_irrigation);

	} 

else {
		var penality_full_irrigation = 0;
	}
		
	//

	//----------------
if(vred_ind>red_ind) {
	console.log("V REDUCTION IND A"+vred_ind);
	console.log("REDUCTION IND A"+red_ind);


	if(vred_ind>treshold_reduction_en_ind) {
		var calc1 = (Number(-red_ind) + Number(treshold_reduction_en_ind)) * penality1_reduction_en_ind;
		console.log("CALC1 A IND"+calc1);

		var calc2 = (Number(-treshold_reduction_en_ind) + Number(vred_ind)) * penality2_reduction_en_ind;
		console.log("CALC2 A IND"+calc2);

		var penality_reduction_en_ind = (calc1)+(calc2);
		console.log("REGION A PENALITY REDUCTION IND: "+penality_reduction_en_ind);
		penality_reduction_en_ind = parseFloat(penality_reduction_en_ind).toFixed(4);
		console.log("REGION A PENALITY REDUCTION IND PRSE: "+penality_reduction_en_ind);

		penality_reduction_en_ind = Number(penality_reduction_en_ind);
		console.log("REGION A PENALITY REDUCTION IND *100 1: "+penality_reduction_en_ind);


}		
	else {
	var penality_reduction_en_ind = (Number(-red_ind)+Number(vred_ind))*penality1_reduction_en_ind;
	console.log("REGION A PENALITY REDUCTION IND *100 2 ANTE: "+(-red_ind));
	console.log("REGION A PENALITY REDUCTION IND *100 2 ANTE 2: "+penality_reduction_en_ind);


	penality_reduction_en_ind = parseFloat(penality_reduction_en_ind).toFixed(4);
	penality_reduction_en_ind = Number(penality_reduction_en_ind);
	console.log("REGION A PENALITY REDUCTION IND *100 2: "+penality_reduction_en_ind);

}	
} else {
var penality_reduction_en_ind = 0;
console.log("REGION A PENALITY REDUCTION IND *100 3: "+penality_reduction_en_ind);

}
//-----------------
if(vred_tr>red_tr) {
	console.log("V REDUCTION TR A "+vred_tr);
	console.log("REDUCTION TR A"+red_tr);
	if(vred_tr>treshold_reduction_en_tr) {
		var calc1 = (Number(-red_tr) + Number(treshold_reduction_en_tr)) * penality1_reduction_en_tr;
		var calc2 = (Number(-treshold_reduction_en_tr) + Number(vred_tr)) * penality2_reduction_en_tr;
		var penality_reduction_en_tr = (calc1)+(calc2);
		console.log("REGION A penality_reduction_en_tr CALC1+2  1 "+penality_reduction_en_tr);

		penality_reduction_en_tr = parseFloat(penality_reduction_en_tr).toFixed(4);
		penality_reduction_en_tr = Number(penality_reduction_en_tr)*100;
		console.log("REGION A penality_reduction_en_tr  2 "+penality_reduction_en_tr);


}		else {
	var penality_reduction_en_tr = (Number(-red_tr)+Number(vred_tr))*penality1_reduction_en_tr;
	penality_reduction_en_tr = parseFloat(penality_reduction_en_tr).toFixed(4);
	penality_reduction_en_tr = Number(penality_reduction_en_tr)*100;
	console.log("REGION A penality_reduction_en_tr 3 "+penality_reduction_en_tr);


}	
} else {
var penality_reduction_en_tr = 0;
}
//---------------------
if(vred_service>red_service) {
	console.log("REGION A VRED SERVICE  "+vred_service);
	console.log("REGION A VRED SERVICE TRESHOLD  "+treshold_reduction_en_service);


	if(vred_service>treshold_reduction_en_service) {
		var calc1 = (Number(-red_service) + Number(treshold_reduction_en_service)) * penality1_reduction_en_service;
		console.log("REGION A VRED SERVICE calc1  "+calc1);

		var calc2 = (Number(-treshold_reduction_en_service) + Number(vred_service)) * penality2_reduction_en_service;
		console.log("REGION A VRED SERVICE calc2 "+calc2);
		var penality_reduction_en_service = (calc1)+(calc2);
		console.log("REGION A VRED SERVICE penality_reduction_en_service  1"+penality_reduction_en_service);
		
		penality_reduction_en_service = parseFloat(penality_reduction_en_service).toFixed(4);
		penality_reduction_en_service = Number(penality_reduction_en_service)*100;
		console.log("REGION A VRED SERVICE penality_reduction_en_service  2"+penality_reduction_en_service);

	
	}	else {
	var penality_reduction_en_service = (Number(-red_service)+Number(vred_service))*penality1_reduction_en_service;
	console.log("REGION A VRED SERVICE penality_reduction_en_service  3 ANTE "+penality_reduction_en_service);

	penality_reduction_en_service = parseFloat(penality_reduction_en_service).toFixed(4);
	penality_reduction_en_service = Number(penality_reduction_en_service)*100;
	console.log("REGION A VRED SERVICE penality_reduction_en_service  3 "+penality_reduction_en_service);



}	
	
} else {
var penality_reduction_en_service = 0;
}	
	
	//-----------------
	if(vred_house>red_house) {
		if(vred_house>treshold_reduction_en_house) {
			var calc1 = (Number(-red_house) + Number(treshold_reduction_en_house)) * penality1_reduction_en_house;
			var calc2 = (Number(-treshold_reduction_en_house) + Number(vred_house)) * penality2_reduction_en_house;
			var penality_reduction_en_house = (calc1)+(calc2);
			penality_reduction_en_house = parseFloat(penality_reduction_en_house).toFixed(4);
			penality_reduction_en_house =Number(penality_reduction_en_house)*100;
	}		else {
		var penality_reduction_en_house = (Number(-red_house)+Number(vred_house))*penality1_reduction_en_house;
	}				penality_reduction_en_house = parseFloat(penality_reduction_en_house).toFixed(4);
	penality_reduction_en_house =Number(penality_reduction_en_house)*100;

		
		
} else {
	var penality_reduction_en_house = 0;
}
	//------------------
	if(velec_tr>elec_tr) {
		if(velec_tr>treshold_elec_tr) {
			var calc1 = (-elec_tr + treshold_elec_tr) * penality1_elec_tr;
			var calc2 = (-treshold_elec_tr + velec_tr) * penality2_elec_tr;
			var penality_elec_tr = (calc1)+(calc2);
			penality_elec_tr = parseFloat(penality_elec_tr).toFixed(4);
			penality_elec_tr = Number(penality_elec_tr)*100;
	}		
		else {
			var penality_elec_tr = (-elec_tr+velec_tr)*penality1_elec_tr;
			penality_elec_tr = parseFloat(penality_elec_tr).toFixed(4);
			penality_elec_tr = Number(penality_elec_tr)*100;


		}	
} else {
	var penality_elec_tr = 0;
}
	//-------------------
	
	if(vgas_coal>gas_coal) {
		if(vgas_coal>treshold_red_gas_house) {
			var calc1 = (-gas_coal + treshold_red_gas_house) * penality1_red_gas_house;
			var calc2 = (-treshold_red_gas_house + vgas_coal) * penality2_red_gas_house;
			var penality_gas_coal = (calc1)+(calc2);
			penality_gas_coal = parseFloat(penality_gas_coal).toFixed(4);
			penality_gas_coal = Number(penality_gas_coal)*100;
	}	else {
		var penality_gas_coal = (-gas_coal+vgas_coal)*penality1_red_gas_house;
		penality_gas_coal = parseFloat(penality_gas_coal).toFixed(4);
		penality_gas_coal = Number(penality_gas_coal)*100;

	}			
		
} else {
	var penality_gas_coal = 0;
}
	//--------------------
	if(vbiofuel>vbiofuel) {
		if(vbiofuel>treshold_percentage_bio) {
			var calc1 = (-biofuel + treshold_percentage_bio) * penality1_percentage_bio;
			var calc2 = (-treshold_percentage_bio + vbiofuel) * penality2_percentage_bio;
			var penality_biofuel = (calc1)+(calc2);
			penality_biofuel = parseFloat(penality_biofuel).toFixed(4);
			penality_biofuel = Number(penality_biofuel)*100;
	}else {
		var penality_biofuel = ((-biofuel+vbiofuel)*penality1_percentage_bio);
		penality_biofuel = parseFloat(penality_biofuel).toFixed(4);
		penality_biofuel = Number(penality_biofuel)*100;


	}
		
} else {
	var penality_biofuel = 0;
}
	//------------------------
	if(vnuclear>nuclear) {
		if(vnuclear>treshold_fraction_total) {
			var calc1 = (-nuclear + treshold_fraction_total) * penality1_fraction_total;
			var calc2 = (-treshold_fraction_total + vnuclear) * penality2_fraction_total;
			var penality_fraction_total = (calc1)+(calc2);
			penality_fraction_total = parseFloat(penality_fraction_total).toFixed(4);
			penality_fraction_total = Number(penality_fraction_total)*100;
	}	else {
		var penality_fraction_total = ((-nuclear+vnuclear)*penality1_fraction_total);
		penality_fraction_total = parseFloat(penality_fraction_total).toFixed(4);
		penality_fraction_total = Number(penality_fraction_total)*100;

	}
		
} else {
	var penality_fraction_total = 0;
}

	var sum = Number(penality_intake)+Number(penality_waste)+Number(penality_vegan)+Number(penality_vegetarian)+Number(penality_day_less_meat)+Number(penality_closing_water)+Number(penality_organic_mulching)+Number(penality_full_irrigation)+Number(penality_reduction_en_ind)+Number(penality_reduction_en_tr)+Number(penality_reduction_en_service)+Number(penality_reduction_en_house)+Number(penality_elec_tr+penality_gas_coal)+Number(penality_biofuel+penality_fraction_total);
	//var sum = penality_intake+penality_waste+penality_vegan+penality_vegetarian+penality_day_less_meat+Number(penality_closing_water)+Number(penality_organic_mulching)+Number(penality_full_irrigation)+Number(penality_reduction_en_ind)+Number(penality_reduction_en_tr)+Number(penality_reduction_en_service)+Number(penality_reduction_en_house)+Number(penality_elec_tr+penality_gas_coal)+Number(penality_biofuel+penality_fraction_total);
	sum = parseFloat(sum).toFixed(1);

	//_-------
//_-------
	document.getElementById("penality").innerHTML = sum;
} 

//---------------------------------------

else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) { 
	var rainfed = 0.96;
	var irrigated = parseFloat(1-rainfed).toFixed(2);	
	irrigated = Number(irrigated);
	//console.log("irrigated region B"+irrigated);
	treshold_closing_water = parseFloat(rainfed*0.2).toFixed(4);
	treshold_organic_mulching = parseFloat(rainfed*0.2).toFixed(4);
	treshold_deficit_full_irrigation = parseFloat(irrigated*0.2).toFixed(4) ;
	treshold_deficit_irr_and_mulching = parseFloat(irrigated*0.2).toFixed(4) ;
	treshold_deficit_drip = parseFloat(irrigated*0.2).toFixed(4) ;
	
var days = '7'; //days
days = Number(days);
//----------------------------------------------------------------------------------
var calories = '2660'; //calories
calories = Number(calories);
var waste = '20'; //waste
waste = Number(waste);
var vegan = '0'; //vegan
vegan = Number(vegan);
var vegetarian = '6'; //vegetarian
vegetarian = Number(vegetarian);
var meat = '94'; //meat
meat = Number(meat);

//----------------------------------------------------------------------------------
var plant_import = '0'; //plant
plant_import = Number(plant_import);
var meat_import = '17'; //meat
meat_import = Number(meat_import);
var diary_import = '0'; //diary
diary_import = Number(diary_import);

//----------------------------------------------------------------------------------
var closing = '0'; //closing
closing = Number(closing);
var organic = '0'; //Mulch
organic = Number(organic);
 //select select1,2 o 3
var full_deficit_parse = '0';
full_deficit_parse = Number(full_deficit_parse);

 //------------------------------------------------------------------------------------
var wind = '8'; // wind
var solar = '1'; // solar
var hydro = '21'; //hydro
var biofuel = '8'; //biofuel
var nuclear = '34'; //nuclear
nuclear = Number(nuclear);
var fossil = '28'; //fossil
//-------------------------------------------------------------------------------------
var red_ind = '0'; //red_ind
red_ind = Number(red_ind);
var red_house = '0'; //red_trans
red_house = Number(red_house);
var red_service = '0'; //red_service
red_service = Number(red_service);
var red_tr = '0'; //red_house
red_tr = Number(red_tr);
var elec_tr = '2';  //elec
elec_tr = Number(elec_tr);
var gas_coal = '0';   //gas
gas_coal = Number(gas_coal);
var perc_fuel = '41'; //perc_fossil 
perc_fuel = Number(perc_fuel);

var fossil_f = '81'; //fossil
var biofuel = '0'; //bio
var electricity = '0'; //electricity

var vdays = document.getElementById("A8_f").value;
vdays = Number(vdays);
var vcalories = document.getElementById("f_D4").value;
vcalories = Number(vcalories);
var vwaste =document.getElementById("f_D5").value;
vwaste = Number(vwaste);
var vvegan = document.getElementById("f_C6").value;
vvegan = Number(vvegan);
var vvegetarian = document.getElementById("f_C7").value;
vvegetarian = Number(vvegetarian);
var vmeat = document.getElementById("f_C8").value;
vmeat = Number(vmeat);
var vclosing = document.getElementById("G14").value;
vclosing = Number(vclosing);
var vorganic = document.getElementById("G15").value;
vorganic = Number(vorganic);
var vfull_deficit_parse = document.getElementById("G19").value;
vfull_deficit_parse = Number(vfull_deficit_parse);
var vplant_import = document.getElementById("E30").value;
var vmeat_import = document.getElementById("E31").value;
var vdiary_import = document.getElementById("E32").value;
var vwind = document.getElementById("em_J21").value;
var vsolar = document.getElementById("em_J22").value;
var vhydro = document.getElementById("em_J23").value;
var vbifuel = document.getElementById("em_J24").value;
var vnuclear = document.getElementById("em_J25").value;
vnuclear = Number(vnuclear);
var vfossil = document.getElementById("em_J26").value;
var vred_ind = document.getElementById("e_N5").value;
vred_ind = Number(vred_ind);
var vred_house = document.getElementById("e_N6").value;
vred_house = Number(vred_house);
var vred_service = document.getElementById("e_N7").value;
vred_service = Number(vred_service);
var vred_tr = document.getElementById("e_N8").value;
vred_tr = Number(vred_tr);
var velec_tr = document.getElementById("e_N11").value;
velec_tr = Number(velec_tr);
var vgas_coal = document.getElementById("e_N12").value;
vgas_coal = Number(vgas_coal);
var perc_fuel = document.getElementById("e_N13").value;
perc_fuel = Number(perc_fuel);
var vfossil_f = document.getElementById("L30").value;
vfossil_f = Number(vfossil_f);
var vbiofuel = document.getElementById("L31").value;
vbiofuel = Number(vbiofuel);
var velectricity = document.getElementById("L32").value;
velectricity = Number(velectricity);



//PUNTEGGI
vclosing = (vclosing/100)*rainfed;
vorganic = (vorganic/100)*rainfed;
vfull_deficit_parse = (vfull_deficit_parse)*irrigated;
console.log("CONTROLLO VALORE DI VCLOSING REG B: "+vfull_deficit_parse);
	
	if(vcalories<calories) {
		//alert("SONO NEL PRIMO IF "+vcalories+" e "+calories);
		if(vcalories<treshold_food_intake) {
			//console.log("vcalories "+vcalories+" "+treshold_food_intake);
			//alert("SONO NEL SECONDO IF "+vcalories+" e "+treshold_food_intake);
			var calc1 = (calories - treshold_food_intake) * penality1_food_intake;
			//console.log("vcalories "+calories+" "+treshold_food_intake+" "+penality1_food_intake);
			//console.log("calc1:"+calc1);
			var calc2 = (treshold_food_intake - vcalories) * penality2_food_intake;
			//console.log("calc2 "+calories+" "+treshold_food_intake+" "+vcalories+" "+penality2_food_intake);
			//console.log("calc1:"+calc2);

			var penality_intake = (calc1)+(calc2);
			//console.log("penality intake "+penality_intake)
	}		
		else {
			var penality_intake = (calories-vcalories)*penality1_food_intake;
			//console.log("penality intake "+penality1_food_intake);
		}	
} else {
	var penality_intake = 0;

}
	//alert("CHECKATO REGION A INTAKE "+penality_intake);
	//------------------
	if(vwaste<waste) {
		if(vwaste<treshold_food_waste) {
			//console.log("vwaste "+vwaste+" "+treshold_food_waste);
			var calc1 = (waste - treshold_food_waste) * penality1_food_waste;
			//console.log("vwaste p"+penality1_food_waste);
			//console.log("calc1:"+calc1);
			var calc2 = (treshold_food_waste - vwaste) * penality2_food_waste;
			var penality_waste = (calc1)+(calc2)*100;
			//console.log("calc2:"+calc2);
			//console.log("penality_waste:"+penality_waste);

	}	
		else {
			var penality_waste = (waste-vwaste)*penality1_food_waste;
			//console.log("penality_waste:"+penality_waste);
		}	
		
} else {
	var penality_waste = 0;
}
	//------------
	if(vvegan>vegan) {
		//console.log("SONO DENTRO IF VVEGAN:");

		if(vvegan>treshold_vegan) {
			//console.log("vvegan:"+penality_vegan);
			var calc1 = (-vegan + treshold_vegan) * penality1_vegan;
			//console.log("calc1:"+calc1);
			var calc2 = (-treshold_vegan + vvegan) * penality2_vegan;
			//console.log("calc2:"+calc2);
			var penality_vegan = (calc1)+(calc2);
			penality_vegan = penality_Vegan;
			//console.log("penality_vegan:"+penality_vegan);

	}else {
		var penality_vegan = (-vegan+vvegan)*penality1_vegan;
		penality_vegan = penality_vegan;
		//console.log("penality_vegan:"+penality_vegan);

	}	
		
} else {
	var penality_vegan = 0;
}
	//-----------------
	if(vvegetarian>vegetarian) {
		if(vvegetarian>treshold_vegetarian) {
			var calc1 = (-vegetarian + treshold_vegetarian) * penality1_vegetarian;
			var calc2 = (-treshold_vegetarian + vvegetarian) * penality2_vegetarian;
			var penality_vegetarian = (calc1)+(calc2);
	}		
		else {
			var penality_vegetarian = (-vegetarian+vvegetarian)*penality1_vegetarian;
		}	
} else {
	var penality_vegetarian = 0;
}
	//--------------------
	//dubbi qui
	if(vdays>days) {
		if(vdays>treshold_day_less_meat) {
			var calc1 = (-days + treshold_day_less_meat) * penality1_day_less_meat;
			var calc2 = (-treshold_day_less_meat + days) * penality2_day_less_meat;
			var penality_day_less_meat = (calc1)+(calc2);
			penality_day_less_meat = penality_day_less_meat*vmeat/ 100;
	}	
		else {
			var penality_day_less_meat = (-days+vdays)*penality1_day_less_meat;
			penality_day_less_meat = penality_day_less_meat*vmeat/ 100;
		}	
} else {
	var penality_day_less_meat = 0;
}
//---------------------------
	if(vclosing>closing) {
		if(vclosing>treshold_closing_water) {
			console.log("vclosing NEW REGION B"+vclosing+" "+treshold_closing_water+" "+closing);
			var calc1 = (-Math.abs(closing) + treshold_closing_water) * penality1_closing_water;
			calc1=parseFloat(calc1).toFixed(4);
			console.log("calc1 neg closing REGION B"+(-closing));
			console.log("calc1 tr "+ treshold_closing_water);
			console.log("calc1 "+calc1);

			var calc2 = (-Math.abs(treshold_closing_water) + closing) * penality2_closing_water;
		console.log("calc2 math "+-Math.abs(vclosing));
		console.log("calc2 "+calc2);

			var penality_closing_water = (calc1)+(calc2);

			penality_closing_water = parseFloat(penality_closing_water).toFixed(4);
			penality_closing_water = Number(penality_closing_water)*100;
		console.log("penality_closing_water 1 B"+penality_closing_water);

	}		
		else {
		var penality_closing_water = (-closing+vclosing)*penality1_closing_water;
		penality_closing_water = parseFloat(penality_closing_water).toFixed(4);
		penality_closing_water = Number(penality_closing_water)*100;
		console.log("penality_closing_water 2 B"+penality_closing_water);

	}	
} else {
	var penality_closing_water = 0;
	console.log("penality_closing_water 3 B"+penality_closing_water);

}
	//-----------------
	if(vorganic>organic) {
		if(vorganic>treshold_organic_mulching) {
			console.log("vorganic B"+vorganic+" "+organic+" "+treshold_organic_mulching);
			console.log("penalities organic B"+penality1_organic_mulching+" "+penality2_organic_mulching);

			var calc1 = (-organic + treshold_organic_mulching) * penality1_organic_mulching;
			console.log("calc1 B"+calc1);

			var calc2 = (-Math.abs(treshold_organic_mulching) + vorganic) * penality2_organic_mulching;
			console.log("calc2 B"+calc2);

			var penality_organic_mulching = (calc1)+(calc2);
			penality_organic_mulching = parseFloat(penality_organic_mulching).toFixed(4);
			penality_organic_mulching = Number(penality_organic_mulching)*100;
			console.log("penality_organic_mulching 1 B"+penality_organic_mulching);

	}	else {
		var penality_organic_mulching = (-organic+vorganic)*penality1_organic_mulching;
		penality_organic_mulching = parseFloat(penality_organic_mulching).toFixed(4);
		penality_organic_mulching = Number(penality_organic_mulching)*100;
		console.log("penality_organic_mulching 2 B"+penality_organic_mulching);

	}	
		
} else {
	var penality_organic_mulching = 0;
	console.log("penality_organic_mulching 3 "+penality_organic_mulching);

}
	//------------SELECT 
	var measure = document.getElementById("Measure").value;	
	//console.log("measure  def "+measure);

console.log("measure: "+measure);
	var Deficit = irrigated*(vfull_deficit_parse/100);
//console.log("Deficit  def "+Deficit);
//console.log("irrigated"+irrigated);
var Deficitinit = 0;
var checkregionyg = document.querySelector('input[name="region"]:checked'); 
//measure 1
if (measure=='1') { 
	console.log("SONO DENTRO IF 1 ");

	if(Deficit>Deficitinit) {
		console.log("SONO DENTRO IF 2 ");

		if(Deficit>treshold_deficit_full_irrigation) {
			console.log("penality_full_irrigation 1 def "+Deficitinit);
			var calc1 = (-Deficitinit) + (treshold_deficit_full_irrigation) * penality1_deficit_full_irrigation;
			var calc2 = (-treshold_deficit_full_irrigation) + (Deficit) * penality2_full_irrigation;
			var penality_full_irrigation = (calc1)+(calc2);
			penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
			penality_full_irrigation = Number(penality_full_irrigation)*100;
	}		
		else {
		var penality_full_irrigation = (-Deficitinit+Deficit )*penality1_full_irrigation;
		penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
		penality_full_irrigation = Number(penality_full_irrigation)*100;
		console.log("penality_full_irrigation 1 "+penality_full_irrigation);

	}	
}else {
	penality_full_irrigation = 0;

} 
	console.log("penality_full_irrigation 1 "+penality_full_irrigation);

}
	//measure 2:
else if (measure=='2'){
	if(Deficit>Deficitinit) {
		if(Deficit>treshold_deficit_full_irrigation) {
			//console.log("penality_full_irrigation 2 def "+Deficitinit);
			var calc1 = (-Deficitinit) + (treshold_deficit_full_irrigation) * penality1_select2;
			var calc2 = (-treshold_deficit_full_irrigation) + (Deficit) * penality2_select2;
			var penality_full_irrigation = (calc1)+(calc2);
			penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
			penality_full_irrigation = Number(penality_full_irrigation)*100;

	}		
		else {
		var penality_full_irrigation = (-Deficitinit+Deficit )*penality1_select2;
		penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
		penality_full_irrigation = Number(penality_full_irrigation)*100;

	}	
	}else {
		penality_full_irrigation = 0;
	} 
	//console.log("penality_full_irrigation 2 "+penality_full_irrigation);
} 
	
	//measure3:
else if (measure=='3'){
		if(Deficit>Deficitinit) {
			if(Deficit>treshold_deficit_full_irrigation) {
				//console.log("penality_full_irrigation 3 def "+Deficitinit);

				var calc1 = (-Deficitinit) + (treshold_deficit_full_irrigation) * penality1_select3;
				var calc2 = (-treshold_deficit_full_irrigation) + (Deficit) * penality2_select3;
				var penality_full_irrigation = (calc1)+(calc2);
				penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
				penality_full_irrigation = Number(penality_full_irrigation)*100;

		}		
			else {
			var penality_full_irrigation = (-Deficitinit+Deficit )*penality1_select3;
			penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
			penality_full_irrigation = Number(penality_full_irrigation)*100;

		}	
		}else {
			penality_full_irrigation = 0;
		} 
		//console.log("penality_full_irrigation 3 "+penality_full_irrigation);

	} 

else {
		var penality_full_irrigation = 0;
	}
		
	//

	//----------------
if(vred_ind>red_ind) {
	console.log("V REDUCTION IND A"+vred_ind);
	console.log("REDUCTION IND A"+red_ind);


	if(vred_ind>treshold_reduction_en_ind) {
		var calc1 = (Number(-red_ind) + Number(treshold_reduction_en_ind)) * penality1_reduction_en_ind;
		console.log("CALC1 A IND"+calc1);

		var calc2 = (Number(-treshold_reduction_en_ind) + Number(vred_ind)) * penality2_reduction_en_ind;
		console.log("CALC2 A IND"+calc2);

		var penality_reduction_en_ind = (calc1)+(calc2);
		console.log("REGION A PENALITY REDUCTION IND: "+penality_reduction_en_ind);
		penality_reduction_en_ind = parseFloat(penality_reduction_en_ind).toFixed(4);
		console.log("REGION A PENALITY REDUCTION IND PRSE: "+penality_reduction_en_ind);

		penality_reduction_en_ind = Number(penality_reduction_en_ind);
		console.log("REGION A PENALITY REDUCTION IND *100 1: "+penality_reduction_en_ind);


}		
	else {
	var penality_reduction_en_ind = (Number(-red_ind)+Number(vred_ind))*penality1_reduction_en_ind;
	console.log("REGION A PENALITY REDUCTION IND *100 2 ANTE: "+(-red_ind));
	console.log("REGION A PENALITY REDUCTION IND *100 2 ANTE 2: "+penality_reduction_en_ind);


	penality_reduction_en_ind = parseFloat(penality_reduction_en_ind).toFixed(4);
	penality_reduction_en_ind = Number(penality_reduction_en_ind);
	console.log("REGION A PENALITY REDUCTION IND *100 2: "+penality_reduction_en_ind);

}	
} else {
var penality_reduction_en_ind = 0;
console.log("REGION A PENALITY REDUCTION IND *100 3: "+penality_reduction_en_ind);

}
//-----------------
if(vred_tr>red_tr) {
	console.log("V REDUCTION TR A "+vred_tr);
	console.log("REDUCTION TR A"+red_tr);
	if(vred_tr>treshold_reduction_en_tr) {
		var calc1 = (Number(-red_tr) + Number(treshold_reduction_en_tr)) * penality1_reduction_en_tr;
		var calc2 = (Number(-treshold_reduction_en_tr) + Number(vred_tr)) * penality2_reduction_en_tr;
		var penality_reduction_en_tr = (calc1)+(calc2);
		console.log("REGION A penality_reduction_en_tr CALC1+2  1 "+penality_reduction_en_tr);

		penality_reduction_en_tr = parseFloat(penality_reduction_en_tr).toFixed(4);
		penality_reduction_en_tr = Number(penality_reduction_en_tr)*100;
		console.log("REGION A penality_reduction_en_tr  2 "+penality_reduction_en_tr);


}		else {
	var penality_reduction_en_tr = (Number(-red_tr)+Number(vred_tr))*penality1_reduction_en_tr;
	penality_reduction_en_tr = parseFloat(penality_reduction_en_tr).toFixed(4);
	penality_reduction_en_tr = Number(penality_reduction_en_tr)*100;
	console.log("REGION A penality_reduction_en_tr 3 "+penality_reduction_en_tr);


}	
} else {
var penality_reduction_en_tr = 0;
}
//---------------------
if(vred_service>red_service) {
	console.log("REGION A VRED SERVICE  "+vred_service);
	console.log("REGION A VRED SERVICE TRESHOLD  "+treshold_reduction_en_service);


	if(vred_service>treshold_reduction_en_service) {
		var calc1 = (Number(-red_service) + Number(treshold_reduction_en_service)) * penality1_reduction_en_service;
		console.log("REGION A VRED SERVICE calc1  "+calc1);

		var calc2 = (Number(-treshold_reduction_en_service) + Number(vred_service)) * penality2_reduction_en_service;
		console.log("REGION A VRED SERVICE calc2 "+calc2);
		var penality_reduction_en_service = (calc1)+(calc2);
		console.log("REGION A VRED SERVICE penality_reduction_en_service  1"+penality_reduction_en_service);
		
		penality_reduction_en_service = parseFloat(penality_reduction_en_service).toFixed(4);
		penality_reduction_en_service = Number(penality_reduction_en_service)*100;
		console.log("REGION A VRED SERVICE penality_reduction_en_service  2"+penality_reduction_en_service);

	
	}	else {
	var penality_reduction_en_service = (Number(-red_service)+Number(vred_service))*penality1_reduction_en_service;
	console.log("REGION A VRED SERVICE penality_reduction_en_service  3 ANTE "+penality_reduction_en_service);

	penality_reduction_en_service = parseFloat(penality_reduction_en_service).toFixed(4);
	penality_reduction_en_service = Number(penality_reduction_en_service)*100;
	console.log("REGION A VRED SERVICE penality_reduction_en_service  3 "+penality_reduction_en_service);



}	
	
} else {
var penality_reduction_en_service = 0;
}	
	
	//-----------------
	if(vred_house>red_house) {
		if(vred_house>treshold_reduction_en_house) {
			var calc1 = (Number(-red_house) + Number(treshold_reduction_en_house)) * penality1_reduction_en_house;
			var calc2 = (Number(-treshold_reduction_en_house) + Number(vred_house)) * penality2_reduction_en_house;
			var penality_reduction_en_house = (calc1)+(calc2);
			penality_reduction_en_house = parseFloat(penality_reduction_en_house).toFixed(4);
			penality_reduction_en_house =Number(penality_reduction_en_house)*100;
	}		else {
		var penality_reduction_en_house = (Number(-red_house)+Number(vred_house))*penality1_reduction_en_house;
	}				penality_reduction_en_house = parseFloat(penality_reduction_en_house).toFixed(4);
	penality_reduction_en_house =Number(penality_reduction_en_house)*100;

		
		
} else {
	var penality_reduction_en_house = 0;
}
	//------------------
	if(velec_tr>elec_tr) {
		if(velec_tr>treshold_elec_tr) {
			var calc1 = (-elec_tr + treshold_elec_tr) * penality1_elec_tr;
			var calc2 = (-treshold_elec_tr + velec_tr) * penality2_elec_tr;
			var penality_elec_tr = (calc1)+(calc2);
			penality_elec_tr = parseFloat(penality_elec_tr).toFixed(4);
			penality_elec_tr = Number(penality_elec_tr)*100;
	}		
		else {
			var penality_elec_tr = (-elec_tr+velec_tr)*penality1_elec_tr;
			penality_elec_tr = parseFloat(penality_elec_tr).toFixed(4);
			penality_elec_tr = Number(penality_elec_tr)*100;


		}	
} else {
	var penality_elec_tr = 0;
}
	//-------------------
	
	if(vgas_coal>gas_coal) {
		if(vgas_coal>treshold_red_gas_house) {
			var calc1 = (-gas_coal + treshold_red_gas_house) * penality1_red_gas_house;
			var calc2 = (-treshold_red_gas_house + vgas_coal) * penality2_red_gas_house;
			var penality_gas_coal = (calc1)+(calc2);
			penality_gas_coal = parseFloat(penality_gas_coal).toFixed(4);
			penality_gas_coal = Number(penality_gas_coal)*100;
	}	else {
		var penality_gas_coal = (-gas_coal+vgas_coal)*penality1_red_gas_house;
		penality_gas_coal = parseFloat(penality_gas_coal).toFixed(4);
		penality_gas_coal = Number(penality_gas_coal)*100;

	}			
		
} else {
	var penality_gas_coal = 0;
}
	//--------------------
	if(vbiofuel>vbiofuel) {
		if(vbiofuel>treshold_percentage_bio) {
			var calc1 = (-biofuel + treshold_percentage_bio) * penality1_percentage_bio;
			var calc2 = (-treshold_percentage_bio + vbiofuel) * penality2_percentage_bio;
			var penality_biofuel = (calc1)+(calc2);
			penality_biofuel = parseFloat(penality_biofuel).toFixed(4);
			penality_biofuel = Number(penality_biofuel)*100;
	}else {
		var penality_biofuel = ((-biofuel+vbiofuel)*penality1_percentage_bio);
		penality_biofuel = parseFloat(penality_biofuel).toFixed(4);
		penality_biofuel = Number(penality_biofuel)*100;


	}
		
} else {
	var penality_biofuel = 0;
}
	//------------------------
	if(vnuclear>nuclear) {
		if(vnuclear>treshold_fraction_total) {
			var calc1 = (-nuclear + treshold_fraction_total) * penality1_fraction_total;
			var calc2 = (-treshold_fraction_total + vnuclear) * penality2_fraction_total;
			var penality_fraction_total = (calc1)+(calc2);
			penality_fraction_total = parseFloat(penality_fraction_total).toFixed(4);
			penality_fraction_total = Number(penality_fraction_total)*100;
	}	else {
		var penality_fraction_total = ((-nuclear+vnuclear)*penality1_fraction_total);
		penality_fraction_total = parseFloat(penality_fraction_total).toFixed(4);
		penality_fraction_total = Number(penality_fraction_total)*100;

	}
		
} else {
	var penality_fraction_total = 0;
}

	var sum = Number(penality_intake)+Number(penality_waste)+Number(penality_vegan)+Number(penality_vegetarian)+Number(penality_day_less_meat)+Number(penality_closing_water)+Number(penality_organic_mulching)+Number(penality_full_irrigation)+Number(penality_reduction_en_ind)+Number(penality_reduction_en_tr)+Number(penality_reduction_en_service)+Number(penality_reduction_en_house)+Number(penality_elec_tr+penality_gas_coal)+Number(penality_biofuel+penality_fraction_total);
	//var sum = penality_intake+penality_waste+penality_vegan+penality_vegetarian+penality_day_less_meat+Number(penality_closing_water)+Number(penality_organic_mulching)+Number(penality_full_irrigation)+Number(penality_reduction_en_ind)+Number(penality_reduction_en_tr)+Number(penality_reduction_en_service)+Number(penality_reduction_en_house)+Number(penality_elec_tr+penality_gas_coal)+Number(penality_biofuel+penality_fraction_total);
	sum = parseFloat(sum).toFixed(1);

	//_-------
//_-------
	document.getElementById("penality").innerHTML = sum;
//_-------
} 


//---------------------------------

else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) { 
	var rainfed = 0.89;
	var irrigated = parseFloat(1-rainfed).toFixed(2);	
	irrigated = Number(irrigated);
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

var vdays = document.getElementById("A8_f").value;
vdays = Number(vdays);
var vcalories = document.getElementById("f_D4").value;
vcalories = Number(vcalories);
var vwaste =document.getElementById("f_D5").value;
vwaste = Number(vwaste);
var vvegan = document.getElementById("f_C6").value;
vvegan = Number(vvegan);
var vvegetarian = document.getElementById("f_C7").value;
vvegetarian = Number(vvegetarian);
var vmeat = document.getElementById("f_C8").value;
vmeat = Number(vmeat);
var vclosing = document.getElementById("G14").value;
vclosing = Number(vclosing);
var vorganic = document.getElementById("G15").value;
vorganic = Number(vorganic);
var vfull_deficit_parse = document.getElementById("G19").value;
vfull_deficit_parse = Number(vfull_deficit_parse);
var vplant_import = document.getElementById("E30").value;
var vmeat_import = document.getElementById("E31").value;
var vdiary_import = document.getElementById("E32").value;
var vwind = document.getElementById("em_J21").value;
var vsolar = document.getElementById("em_J22").value;
var vhydro = document.getElementById("em_J23").value;
var vbifuel = document.getElementById("em_J24").value;
var vnuclear = document.getElementById("em_J25").value;
vnuclear = Number(vnuclear);
var vfossil = document.getElementById("em_J26").value;
var vred_ind = document.getElementById("e_N5").value;
vred_ind = Number(vred_ind);
var vred_house = document.getElementById("e_N6").value;
vred_house = Number(vred_house);
var vred_service = document.getElementById("e_N7").value;
vred_service = Number(vred_service);
var vred_tr = document.getElementById("e_N8").value;
vred_tr = Number(vred_tr);
var velec_tr = document.getElementById("e_N11").value;
velec_tr = Number(velec_tr);
var vgas_coal = document.getElementById("e_N12").value;
vgas_coal = Number(vgas_coal);
var perc_fuel = document.getElementById("e_N13").value;
perc_fuel = Number(perc_fuel);
var vfossil_f = document.getElementById("L30").value;
vfossil_f = Number(vfossil_f);
var vbiofuel = document.getElementById("L31").value;
vbiofuel = Number(vbiofuel);
var velectricity = document.getElementById("L32").value;
velectricity = Number(velectricity);

//PUNTEGGI
vclosing = (vclosing/100)*rainfed;
vorganic = (vorganic/100)*rainfed;
vfull_deficit_parse = (vfull_deficit_parse)*irrigated;
console.log("CONTROLLO VALORE DI VCLOSING REG B: "+vfull_deficit_parse);
	
	if(vcalories<calories) {
		//alert("SONO NEL PRIMO IF "+vcalories+" e "+calories);
		if(vcalories<treshold_food_intake) {
			//console.log("vcalories "+vcalories+" "+treshold_food_intake);
			//alert("SONO NEL SECONDO IF "+vcalories+" e "+treshold_food_intake);
			var calc1 = (calories - treshold_food_intake) * penality1_food_intake;
			//console.log("vcalories "+calories+" "+treshold_food_intake+" "+penality1_food_intake);
			//console.log("calc1:"+calc1);
			var calc2 = (treshold_food_intake - vcalories) * penality2_food_intake;
			//console.log("calc2 "+calories+" "+treshold_food_intake+" "+vcalories+" "+penality2_food_intake);
			//console.log("calc1:"+calc2);

			var penality_intake = (calc1)+(calc2);
			//console.log("penality intake "+penality_intake)
	}		
		else {
			var penality_intake = (calories-vcalories)*penality1_food_intake;
			//console.log("penality intake "+penality1_food_intake);
		}	
} else {
	var penality_intake = 0;

}
	//alert("CHECKATO REGION A INTAKE "+penality_intake);
	//------------------
	if(vwaste<waste) {
		if(vwaste<treshold_food_waste) {
			//console.log("vwaste "+vwaste+" "+treshold_food_waste);
			var calc1 = (waste - treshold_food_waste) * penality1_food_waste;
			//console.log("vwaste p"+penality1_food_waste);
			//console.log("calc1:"+calc1);
			var calc2 = (treshold_food_waste - vwaste) * penality2_food_waste;
			var penality_waste = (calc1)+(calc2)*100;
			//console.log("calc2:"+calc2);
			//console.log("penality_waste:"+penality_waste);

	}	
		else {
			var penality_waste = (waste-vwaste)*penality1_food_waste;
			//console.log("penality_waste:"+penality_waste);
		}	
		
} else {
	var penality_waste = 0;
}
	//------------
	if(vvegan>vegan) {
		//console.log("SONO DENTRO IF VVEGAN:");

		if(vvegan>treshold_vegan) {
			//console.log("vvegan:"+penality_vegan);
			var calc1 = (-vegan + treshold_vegan) * penality1_vegan;
			//console.log("calc1:"+calc1);
			var calc2 = (-treshold_vegan + vvegan) * penality2_vegan;
			//console.log("calc2:"+calc2);
			var penality_vegan = (calc1)+(calc2);
			penality_vegan = penality_Vegan;
			//console.log("penality_vegan:"+penality_vegan);

	}else {
		var penality_vegan = (-vegan+vvegan)*penality1_vegan;
		penality_vegan = penality_vegan;
		//console.log("penality_vegan:"+penality_vegan);

	}	
		
} else {
	var penality_vegan = 0;
}
	//-----------------
	if(vvegetarian>vegetarian) {
		if(vvegetarian>treshold_vegetarian) {
			var calc1 = (-vegetarian + treshold_vegetarian) * penality1_vegetarian;
			var calc2 = (-treshold_vegetarian + vvegetarian) * penality2_vegetarian;
			var penality_vegetarian = (calc1)+(calc2);
	}		
		else {
			var penality_vegetarian = (-vegetarian+vvegetarian)*penality1_vegetarian;
		}	
} else {
	var penality_vegetarian = 0;
}
	//--------------------
	//dubbi qui
	if(vdays>days) {
		if(vdays>treshold_day_less_meat) {
			var calc1 = (-days + treshold_day_less_meat) * penality1_day_less_meat;
			var calc2 = (-treshold_day_less_meat + days) * penality2_day_less_meat;
			var penality_day_less_meat = (calc1)+(calc2);
			penality_day_less_meat = penality_day_less_meat*vmeat/ 100;
	}	
		else {
			var penality_day_less_meat = (-days+vdays)*penality1_day_less_meat;
			penality_day_less_meat = penality_day_less_meat*vmeat/ 100;
		}	
} else {
	var penality_day_less_meat = 0;
}
//---------------------------
	if(vclosing>closing) {
		if(vclosing>treshold_closing_water) {
			console.log("vclosing NEW REGION B"+vclosing+" "+treshold_closing_water+" "+closing);
			var calc1 = (-Math.abs(closing) + treshold_closing_water) * penality1_closing_water;
			calc1=parseFloat(calc1).toFixed(4);
			console.log("calc1 neg closing REGION B"+(-closing));
			console.log("calc1 tr "+ treshold_closing_water);
			console.log("calc1 "+calc1);

			var calc2 = (-Math.abs(treshold_closing_water) + closing) * penality2_closing_water;
		console.log("calc2 math "+-Math.abs(vclosing));
		console.log("calc2 "+calc2);

			var penality_closing_water = (calc1)+(calc2);

			penality_closing_water = parseFloat(penality_closing_water).toFixed(4);
			penality_closing_water = Number(penality_closing_water)*100;
		console.log("penality_closing_water 1 B"+penality_closing_water);

	}		
		else {
		var penality_closing_water = (-closing+vclosing)*penality1_closing_water;
		penality_closing_water = parseFloat(penality_closing_water).toFixed(4);
		penality_closing_water = Number(penality_closing_water)*100;
		console.log("penality_closing_water 2 B"+penality_closing_water);

	}	
} else {
	var penality_closing_water = 0;
	console.log("penality_closing_water 3 B"+penality_closing_water);

}
	//-----------------
	if(vorganic>organic) {
		if(vorganic>treshold_organic_mulching) {
			console.log("vorganic B"+vorganic+" "+organic+" "+treshold_organic_mulching);
			console.log("penalities organic B"+penality1_organic_mulching+" "+penality2_organic_mulching);

			var calc1 = (-organic + treshold_organic_mulching) * penality1_organic_mulching;
			console.log("calc1 B"+calc1);

			var calc2 = (-Math.abs(treshold_organic_mulching) + vorganic) * penality2_organic_mulching;
			console.log("calc2 B"+calc2);

			var penality_organic_mulching = (calc1)+(calc2);
			penality_organic_mulching = parseFloat(penality_organic_mulching).toFixed(4);
			penality_organic_mulching = Number(penality_organic_mulching)*100;
			console.log("penality_organic_mulching 1 B"+penality_organic_mulching);

	}	else {
		var penality_organic_mulching = (-organic+vorganic)*penality1_organic_mulching;
		penality_organic_mulching = parseFloat(penality_organic_mulching).toFixed(4);
		penality_organic_mulching = Number(penality_organic_mulching)*100;
		console.log("penality_organic_mulching 2 B"+penality_organic_mulching);

	}	
		
} else {
	var penality_organic_mulching = 0;
	console.log("penality_organic_mulching 3 "+penality_organic_mulching);

}
	//------------SELECT 
	var measure = document.getElementById("Measure").value;	
	//console.log("measure  def "+measure);

console.log("measure: "+measure);
	var Deficit = irrigated*(vfull_deficit_parse/100);
//console.log("Deficit  def "+Deficit);
//console.log("irrigated"+irrigated);
var Deficitinit = 0;
var checkregionyg = document.querySelector('input[name="region"]:checked'); 
//measure 1
if (measure=='1') { 
	console.log("SONO DENTRO IF 1 ");

	if(Deficit>Deficitinit) {
		console.log("SONO DENTRO IF 2 ");

		if(Deficit>treshold_deficit_full_irrigation) {
			console.log("penality_full_irrigation 1 def "+Deficitinit);
			var calc1 = (-Deficitinit) + (treshold_deficit_full_irrigation) * penality1_deficit_full_irrigation;
			var calc2 = (-treshold_deficit_full_irrigation) + (Deficit) * penality2_full_irrigation;
			var penality_full_irrigation = (calc1)+(calc2);
			penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
			penality_full_irrigation = Number(penality_full_irrigation)*100;
	}		
		else {
		var penality_full_irrigation = (-Deficitinit+Deficit )*penality1_full_irrigation;
		penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
		penality_full_irrigation = Number(penality_full_irrigation)*100;
		console.log("penality_full_irrigation 1 "+penality_full_irrigation);

	}	
}else {
	penality_full_irrigation = 0;

} 
	console.log("penality_full_irrigation 1 "+penality_full_irrigation);

}
	//measure 2:
else if (measure=='2'){
	if(Deficit>Deficitinit) {
		if(Deficit>treshold_deficit_full_irrigation) {
			//console.log("penality_full_irrigation 2 def "+Deficitinit);
			var calc1 = (-Deficitinit) + (treshold_deficit_full_irrigation) * penality1_select2;
			var calc2 = (-treshold_deficit_full_irrigation) + (Deficit) * penality2_select2;
			var penality_full_irrigation = (calc1)+(calc2);
			penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
			penality_full_irrigation = Number(penality_full_irrigation)*100;

	}		
		else {
		var penality_full_irrigation = (-Deficitinit+Deficit )*penality1_select2;
		penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
		penality_full_irrigation = Number(penality_full_irrigation)*100;

	}	
	}else {
		penality_full_irrigation = 0;
	} 
	//console.log("penality_full_irrigation 2 "+penality_full_irrigation);
} 
	
	//measure3:
else if (measure=='3'){
		if(Deficit>Deficitinit) {
			if(Deficit>treshold_deficit_full_irrigation) {
				//console.log("penality_full_irrigation 3 def "+Deficitinit);

				var calc1 = (-Deficitinit) + (treshold_deficit_full_irrigation) * penality1_select3;
				var calc2 = (-treshold_deficit_full_irrigation) + (Deficit) * penality2_select3;
				var penality_full_irrigation = (calc1)+(calc2);
				penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
				penality_full_irrigation = Number(penality_full_irrigation)*100;

		}		
			else {
			var penality_full_irrigation = (-Deficitinit+Deficit )*penality1_select3;
			penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
			penality_full_irrigation = Number(penality_full_irrigation)*100;

		}	
		}else {
			penality_full_irrigation = 0;
		} 
		//console.log("penality_full_irrigation 3 "+penality_full_irrigation);

	} 

else {
		var penality_full_irrigation = 0;
	}
		
	//

	//----------------
if(vred_ind>red_ind) {
	console.log("V REDUCTION IND A"+vred_ind);
	console.log("REDUCTION IND A"+red_ind);


	if(vred_ind>treshold_reduction_en_ind) {
		var calc1 = (Number(-red_ind) + Number(treshold_reduction_en_ind)) * penality1_reduction_en_ind;
		console.log("CALC1 A IND"+calc1);

		var calc2 = (Number(-treshold_reduction_en_ind) + Number(vred_ind)) * penality2_reduction_en_ind;
		console.log("CALC2 A IND"+calc2);

		var penality_reduction_en_ind = (calc1)+(calc2);
		console.log("REGION A PENALITY REDUCTION IND: "+penality_reduction_en_ind);
		penality_reduction_en_ind = parseFloat(penality_reduction_en_ind).toFixed(4);
		console.log("REGION A PENALITY REDUCTION IND PRSE: "+penality_reduction_en_ind);

		penality_reduction_en_ind = Number(penality_reduction_en_ind);
		console.log("REGION A PENALITY REDUCTION IND *100 1: "+penality_reduction_en_ind);


}		
	else {
	var penality_reduction_en_ind = (Number(-red_ind)+Number(vred_ind))*penality1_reduction_en_ind;
	console.log("REGION A PENALITY REDUCTION IND *100 2 ANTE: "+(-red_ind));
	console.log("REGION A PENALITY REDUCTION IND *100 2 ANTE 2: "+penality_reduction_en_ind);


	penality_reduction_en_ind = parseFloat(penality_reduction_en_ind).toFixed(4);
	penality_reduction_en_ind = Number(penality_reduction_en_ind);
	console.log("REGION A PENALITY REDUCTION IND *100 2: "+penality_reduction_en_ind);

}	
} else {
var penality_reduction_en_ind = 0;
console.log("REGION A PENALITY REDUCTION IND *100 3: "+penality_reduction_en_ind);

}
//-----------------
if(vred_tr>red_tr) {
	console.log("V REDUCTION TR A "+vred_tr);
	console.log("REDUCTION TR A"+red_tr);
	if(vred_tr>treshold_reduction_en_tr) {
		var calc1 = (Number(-red_tr) + Number(treshold_reduction_en_tr)) * penality1_reduction_en_tr;
		var calc2 = (Number(-treshold_reduction_en_tr) + Number(vred_tr)) * penality2_reduction_en_tr;
		var penality_reduction_en_tr = (calc1)+(calc2);
		console.log("REGION A penality_reduction_en_tr CALC1+2  1 "+penality_reduction_en_tr);

		penality_reduction_en_tr = parseFloat(penality_reduction_en_tr).toFixed(4);
		penality_reduction_en_tr = Number(penality_reduction_en_tr)*100;
		console.log("REGION A penality_reduction_en_tr  2 "+penality_reduction_en_tr);


}		else {
	var penality_reduction_en_tr = (Number(-red_tr)+Number(vred_tr))*penality1_reduction_en_tr;
	penality_reduction_en_tr = parseFloat(penality_reduction_en_tr).toFixed(4);
	penality_reduction_en_tr = Number(penality_reduction_en_tr)*100;
	console.log("REGION A penality_reduction_en_tr 3 "+penality_reduction_en_tr);


}	
} else {
var penality_reduction_en_tr = 0;
}
//---------------------
if(vred_service>red_service) {
	console.log("REGION A VRED SERVICE  "+vred_service);
	console.log("REGION A VRED SERVICE TRESHOLD  "+treshold_reduction_en_service);


	if(vred_service>treshold_reduction_en_service) {
		var calc1 = (Number(-red_service) + Number(treshold_reduction_en_service)) * penality1_reduction_en_service;
		console.log("REGION A VRED SERVICE calc1  "+calc1);

		var calc2 = (Number(-treshold_reduction_en_service) + Number(vred_service)) * penality2_reduction_en_service;
		console.log("REGION A VRED SERVICE calc2 "+calc2);
		var penality_reduction_en_service = (calc1)+(calc2);
		console.log("REGION A VRED SERVICE penality_reduction_en_service  1"+penality_reduction_en_service);
		
		penality_reduction_en_service = parseFloat(penality_reduction_en_service).toFixed(4);
		penality_reduction_en_service = Number(penality_reduction_en_service)*100;
		console.log("REGION A VRED SERVICE penality_reduction_en_service  2"+penality_reduction_en_service);

	
	}	else {
	var penality_reduction_en_service = (Number(-red_service)+Number(vred_service))*penality1_reduction_en_service;
	console.log("REGION A VRED SERVICE penality_reduction_en_service  3 ANTE "+penality_reduction_en_service);

	penality_reduction_en_service = parseFloat(penality_reduction_en_service).toFixed(4);
	penality_reduction_en_service = Number(penality_reduction_en_service)*100;
	console.log("REGION A VRED SERVICE penality_reduction_en_service  3 "+penality_reduction_en_service);



}	
	
} else {
var penality_reduction_en_service = 0;
}	
	
	//-----------------
	if(vred_house>red_house) {
		if(vred_house>treshold_reduction_en_house) {
			var calc1 = (Number(-red_house) + Number(treshold_reduction_en_house)) * penality1_reduction_en_house;
			var calc2 = (Number(-treshold_reduction_en_house) + Number(vred_house)) * penality2_reduction_en_house;
			var penality_reduction_en_house = (calc1)+(calc2);
			penality_reduction_en_house = parseFloat(penality_reduction_en_house).toFixed(4);
			penality_reduction_en_house =Number(penality_reduction_en_house)*100;
	}		else {
		var penality_reduction_en_house = (Number(-red_house)+Number(vred_house))*penality1_reduction_en_house;
	}				penality_reduction_en_house = parseFloat(penality_reduction_en_house).toFixed(4);
	penality_reduction_en_house =Number(penality_reduction_en_house)*100;

		
		
} else {
	var penality_reduction_en_house = 0;
}
	//------------------
	if(velec_tr>elec_tr) {
		if(velec_tr>treshold_elec_tr) {
			var calc1 = (-elec_tr + treshold_elec_tr) * penality1_elec_tr;
			var calc2 = (-treshold_elec_tr + velec_tr) * penality2_elec_tr;
			var penality_elec_tr = (calc1)+(calc2);
			penality_elec_tr = parseFloat(penality_elec_tr).toFixed(4);
			penality_elec_tr = Number(penality_elec_tr)*100;
	}		
		else {
			var penality_elec_tr = (-elec_tr+velec_tr)*penality1_elec_tr;
			penality_elec_tr = parseFloat(penality_elec_tr).toFixed(4);
			penality_elec_tr = Number(penality_elec_tr)*100;


		}	
} else {
	var penality_elec_tr = 0;
}
	//-------------------
	
	if(vgas_coal>gas_coal) {
		if(vgas_coal>treshold_red_gas_house) {
			var calc1 = (-gas_coal + treshold_red_gas_house) * penality1_red_gas_house;
			var calc2 = (-treshold_red_gas_house + vgas_coal) * penality2_red_gas_house;
			var penality_gas_coal = (calc1)+(calc2);
			penality_gas_coal = parseFloat(penality_gas_coal).toFixed(4);
			penality_gas_coal = Number(penality_gas_coal)*100;
	}	else {
		var penality_gas_coal = (-gas_coal+vgas_coal)*penality1_red_gas_house;
		penality_gas_coal = parseFloat(penality_gas_coal).toFixed(4);
		penality_gas_coal = Number(penality_gas_coal)*100;

	}			
		
} else {
	var penality_gas_coal = 0;
}
	//--------------------
	if(vbiofuel>vbiofuel) {
		if(vbiofuel>treshold_percentage_bio) {
			var calc1 = (-biofuel + treshold_percentage_bio) * penality1_percentage_bio;
			var calc2 = (-treshold_percentage_bio + vbiofuel) * penality2_percentage_bio;
			var penality_biofuel = (calc1)+(calc2);
			penality_biofuel = parseFloat(penality_biofuel).toFixed(4);
			penality_biofuel = Number(penality_biofuel)*100;
	}else {
		var penality_biofuel = ((-biofuel+vbiofuel)*penality1_percentage_bio);
		penality_biofuel = parseFloat(penality_biofuel).toFixed(4);
		penality_biofuel = Number(penality_biofuel)*100;


	}
		
} else {
	var penality_biofuel = 0;
}
	//------------------------
	if(vnuclear>nuclear) {
		if(vnuclear>treshold_fraction_total) {
			var calc1 = (-nuclear + treshold_fraction_total) * penality1_fraction_total;
			var calc2 = (-treshold_fraction_total + vnuclear) * penality2_fraction_total;
			var penality_fraction_total = (calc1)+(calc2);
			penality_fraction_total = parseFloat(penality_fraction_total).toFixed(4);
			penality_fraction_total = Number(penality_fraction_total)*100;
	}	else {
		var penality_fraction_total = ((-nuclear+vnuclear)*penality1_fraction_total);
		penality_fraction_total = parseFloat(penality_fraction_total).toFixed(4);
		penality_fraction_total = Number(penality_fraction_total)*100;

	}
		
} else {
	var penality_fraction_total = 0;
}

	var sum = Number(penality_intake)+Number(penality_waste)+Number(penality_vegan)+Number(penality_vegetarian)+Number(penality_day_less_meat)+Number(penality_closing_water)+Number(penality_organic_mulching)+Number(penality_full_irrigation)+Number(penality_reduction_en_ind)+Number(penality_reduction_en_tr)+Number(penality_reduction_en_service)+Number(penality_reduction_en_house)+Number(penality_elec_tr+penality_gas_coal)+Number(penality_biofuel+penality_fraction_total);
	//var sum = penality_intake+penality_waste+penality_vegan+penality_vegetarian+penality_day_less_meat+Number(penality_closing_water)+Number(penality_organic_mulching)+Number(penality_full_irrigation)+Number(penality_reduction_en_ind)+Number(penality_reduction_en_tr)+Number(penality_reduction_en_service)+Number(penality_reduction_en_house)+Number(penality_elec_tr+penality_gas_coal)+Number(penality_biofuel+penality_fraction_total);
	sum = parseFloat(sum).toFixed(1);

	//_-------
//_-------
	document.getElementById("penality").innerHTML = sum;
//_-------
}
//_-------
	



else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
	var rainfed = 0.91;
	var irrigated = parseFloat(1-rainfed).toFixed(2);	
	irrigated = Number(irrigated);
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

var vdays = document.getElementById("A8_f").value;
vdays = Number(vdays);
var vcalories = document.getElementById("f_D4").value;
vcalories = Number(vcalories);
var vwaste =document.getElementById("f_D5").value;
vwaste = Number(vwaste);
var vvegan = document.getElementById("f_C6").value;
vvegan = Number(vvegan);
var vvegetarian = document.getElementById("f_C7").value;
vvegetarian = Number(vvegetarian);
var vmeat = document.getElementById("f_C8").value;
vmeat = Number(vmeat);
var vclosing = document.getElementById("G14").value;
vclosing = Number(vclosing);
var vorganic = document.getElementById("G15").value;
vorganic = Number(vorganic);
var vfull_deficit_parse = document.getElementById("G19").value;
vfull_deficit_parse = Number(vfull_deficit_parse);
var vplant_import = document.getElementById("E30").value;
var vmeat_import = document.getElementById("E31").value;
var vdiary_import = document.getElementById("E32").value;
var vwind = document.getElementById("em_J21").value;
var vsolar = document.getElementById("em_J22").value;
var vhydro = document.getElementById("em_J23").value;
var vbifuel = document.getElementById("em_J24").value;
var vnuclear = document.getElementById("em_J25").value;
vnuclear = Number(vnuclear);
var vfossil = document.getElementById("em_J26").value;
var vred_ind = document.getElementById("e_N5").value;
vred_ind = Number(vred_ind);
var vred_house = document.getElementById("e_N6").value;
vred_house = Number(vred_house);
var vred_service = document.getElementById("e_N7").value;
vred_service = Number(vred_service);
var vred_tr = document.getElementById("e_N8").value;
vred_tr = Number(vred_tr);
var velec_tr = document.getElementById("e_N11").value;
velec_tr = Number(velec_tr);
var vgas_coal = document.getElementById("e_N12").value;
vgas_coal = Number(vgas_coal);
var perc_fuel = document.getElementById("e_N13").value;
perc_fuel = Number(perc_fuel);
var vfossil_f = document.getElementById("L30").value;
vfossil_f = Number(vfossil_f);
var vbiofuel = document.getElementById("L31").value;
vbiofuel = Number(vbiofuel);
var velectricity = document.getElementById("L32").value;
velectricity = Number(velectricity);

//PUNTEGGI
vclosing = (vclosing/100)*rainfed;
vorganic = (vorganic/100)*rainfed;
vfull_deficit_parse = (vfull_deficit_parse)*irrigated;
console.log("CONTROLLO VALORE DI VCLOSING REG B: "+vfull_deficit_parse);
	
	if(vcalories<calories) {
		//alert("SONO NEL PRIMO IF "+vcalories+" e "+calories);
		if(vcalories<treshold_food_intake) {
			//console.log("vcalories "+vcalories+" "+treshold_food_intake);
			//alert("SONO NEL SECONDO IF "+vcalories+" e "+treshold_food_intake);
			var calc1 = (calories - treshold_food_intake) * penality1_food_intake;
			//console.log("vcalories "+calories+" "+treshold_food_intake+" "+penality1_food_intake);
			//console.log("calc1:"+calc1);
			var calc2 = (treshold_food_intake - vcalories) * penality2_food_intake;
			//console.log("calc2 "+calories+" "+treshold_food_intake+" "+vcalories+" "+penality2_food_intake);
			//console.log("calc1:"+calc2);

			var penality_intake = (calc1)+(calc2);
			//console.log("penality intake "+penality_intake)
	}		
		else {
			var penality_intake = (calories-vcalories)*penality1_food_intake;
			//console.log("penality intake "+penality1_food_intake);
		}	
} else {
	var penality_intake = 0;

}
	//alert("CHECKATO REGION A INTAKE "+penality_intake);
	//------------------
	if(vwaste<waste) {
		if(vwaste<treshold_food_waste) {
			//console.log("vwaste "+vwaste+" "+treshold_food_waste);
			var calc1 = (waste - treshold_food_waste) * penality1_food_waste;
			//console.log("vwaste p"+penality1_food_waste);
			//console.log("calc1:"+calc1);
			var calc2 = (treshold_food_waste - vwaste) * penality2_food_waste;
			var penality_waste = (calc1)+(calc2)*100;
			//console.log("calc2:"+calc2);
			//console.log("penality_waste:"+penality_waste);

	}	
		else {
			var penality_waste = (waste-vwaste)*penality1_food_waste;
			//console.log("penality_waste:"+penality_waste);
		}	
		
} else {
	var penality_waste = 0;
}
	//------------
	if(vvegan>vegan) {
		//console.log("SONO DENTRO IF VVEGAN:");

		if(vvegan>treshold_vegan) {
			//console.log("vvegan:"+penality_vegan);
			var calc1 = (-vegan + treshold_vegan) * penality1_vegan;
			//console.log("calc1:"+calc1);
			var calc2 = (-treshold_vegan + vvegan) * penality2_vegan;
			//console.log("calc2:"+calc2);
			var penality_vegan = (calc1)+(calc2);
			penality_vegan = penality_Vegan;
			//console.log("penality_vegan:"+penality_vegan);

	}else {
		var penality_vegan = (-vegan+vvegan)*penality1_vegan;
		penality_vegan = penality_vegan;
		//console.log("penality_vegan:"+penality_vegan);

	}	
		
} else {
	var penality_vegan = 0;
}
	//-----------------
	if(vvegetarian>vegetarian) {
		if(vvegetarian>treshold_vegetarian) {
			var calc1 = (-vegetarian + treshold_vegetarian) * penality1_vegetarian;
			var calc2 = (-treshold_vegetarian + vvegetarian) * penality2_vegetarian;
			var penality_vegetarian = (calc1)+(calc2);
	}		
		else {
			var penality_vegetarian = (-vegetarian+vvegetarian)*penality1_vegetarian;
		}	
} else {
	var penality_vegetarian = 0;
}
	//--------------------
	//dubbi qui
	if(vdays>days) {
		if(vdays>treshold_day_less_meat) {
			var calc1 = (-days + treshold_day_less_meat) * penality1_day_less_meat;
			var calc2 = (-treshold_day_less_meat + days) * penality2_day_less_meat;
			var penality_day_less_meat = (calc1)+(calc2);
			penality_day_less_meat = penality_day_less_meat*vmeat/ 100;
	}	
		else {
			var penality_day_less_meat = (-days+vdays)*penality1_day_less_meat;
			penality_day_less_meat = penality_day_less_meat*vmeat/ 100;
		}	
} else {
	var penality_day_less_meat = 0;
}
//---------------------------
	if(vclosing>closing) {
		if(vclosing>treshold_closing_water) {
			console.log("vclosing NEW REGION B"+vclosing+" "+treshold_closing_water+" "+closing);
			var calc1 = (-Math.abs(closing) + treshold_closing_water) * penality1_closing_water;
			calc1=parseFloat(calc1).toFixed(4);
			console.log("calc1 neg closing REGION B"+(-closing));
			console.log("calc1 tr "+ treshold_closing_water);
			console.log("calc1 "+calc1);

			var calc2 = (-Math.abs(treshold_closing_water) + closing) * penality2_closing_water;
		console.log("calc2 math "+-Math.abs(vclosing));
		console.log("calc2 "+calc2);

			var penality_closing_water = (calc1)+(calc2);

			penality_closing_water = parseFloat(penality_closing_water).toFixed(4);
			penality_closing_water = Number(penality_closing_water)*100;
		console.log("penality_closing_water 1 B"+penality_closing_water);

	}		
		else {
		var penality_closing_water = (-closing+vclosing)*penality1_closing_water;
		penality_closing_water = parseFloat(penality_closing_water).toFixed(4);
		penality_closing_water = Number(penality_closing_water)*100;
		console.log("penality_closing_water 2 B"+penality_closing_water);

	}	
} else {
	var penality_closing_water = 0;
	console.log("penality_closing_water 3 B"+penality_closing_water);

}
	//-----------------
	if(vorganic>organic) {
		if(vorganic>treshold_organic_mulching) {
			console.log("vorganic B"+vorganic+" "+organic+" "+treshold_organic_mulching);
			console.log("penalities organic B"+penality1_organic_mulching+" "+penality2_organic_mulching);

			var calc1 = (-organic + treshold_organic_mulching) * penality1_organic_mulching;
			console.log("calc1 B"+calc1);

			var calc2 = (-Math.abs(treshold_organic_mulching) + vorganic) * penality2_organic_mulching;
			console.log("calc2 B"+calc2);

			var penality_organic_mulching = (calc1)+(calc2);
			penality_organic_mulching = parseFloat(penality_organic_mulching).toFixed(4);
			penality_organic_mulching = Number(penality_organic_mulching)*100;
			console.log("penality_organic_mulching 1 B"+penality_organic_mulching);

	}	else {
		var penality_organic_mulching = (-organic+vorganic)*penality1_organic_mulching;
		penality_organic_mulching = parseFloat(penality_organic_mulching).toFixed(4);
		penality_organic_mulching = Number(penality_organic_mulching)*100;
		console.log("penality_organic_mulching 2 B"+penality_organic_mulching);

	}	
		
} else {
	var penality_organic_mulching = 0;
	console.log("penality_organic_mulching 3 "+penality_organic_mulching);

}
	//------------SELECT 
	var measure = document.getElementById("Measure").value;	
	//console.log("measure  def "+measure);

console.log("measure: "+measure);
	var Deficit = irrigated*(vfull_deficit_parse/100);
//console.log("Deficit  def "+Deficit);
//console.log("irrigated"+irrigated);
var Deficitinit = 0;
var checkregionyg = document.querySelector('input[name="region"]:checked'); 
//measure 1
if (measure=='1') { 
	console.log("SONO DENTRO IF 1 ");

	if(Deficit>Deficitinit) {
		console.log("SONO DENTRO IF 2 ");

		if(Deficit>treshold_deficit_full_irrigation) {
			console.log("penality_full_irrigation 1 def "+Deficitinit);
			var calc1 = (-Deficitinit) + (treshold_deficit_full_irrigation) * penality1_deficit_full_irrigation;
			var calc2 = (-treshold_deficit_full_irrigation) + (Deficit) * penality2_full_irrigation;
			var penality_full_irrigation = (calc1)+(calc2);
			penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
			penality_full_irrigation = Number(penality_full_irrigation)*100;
	}		
		else {
		var penality_full_irrigation = (-Deficitinit+Deficit )*penality1_full_irrigation;
		penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
		penality_full_irrigation = Number(penality_full_irrigation)*100;
		console.log("penality_full_irrigation 1 "+penality_full_irrigation);

	}	
}else {
	penality_full_irrigation = 0;

} 
	console.log("penality_full_irrigation 1 "+penality_full_irrigation);

}
	//measure 2:
else if (measure=='2'){
	if(Deficit>Deficitinit) {
		if(Deficit>treshold_deficit_full_irrigation) {
			//console.log("penality_full_irrigation 2 def "+Deficitinit);
			var calc1 = (-Deficitinit) + (treshold_deficit_full_irrigation) * penality1_select2;
			var calc2 = (-treshold_deficit_full_irrigation) + (Deficit) * penality2_select2;
			var penality_full_irrigation = (calc1)+(calc2);
			penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
			penality_full_irrigation = Number(penality_full_irrigation)*100;

	}		
		else {
		var penality_full_irrigation = (-Deficitinit+Deficit )*penality1_select2;
		penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
		penality_full_irrigation = Number(penality_full_irrigation)*100;

	}	
	}else {
		penality_full_irrigation = 0;
	} 
	//console.log("penality_full_irrigation 2 "+penality_full_irrigation);
} 
	
	//measure3:
else if (measure=='3'){
		if(Deficit>Deficitinit) {
			if(Deficit>treshold_deficit_full_irrigation) {
				//console.log("penality_full_irrigation 3 def "+Deficitinit);

				var calc1 = (-Deficitinit) + (treshold_deficit_full_irrigation) * penality1_select3;
				var calc2 = (-treshold_deficit_full_irrigation) + (Deficit) * penality2_select3;
				var penality_full_irrigation = (calc1)+(calc2);
				penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
				penality_full_irrigation = Number(penality_full_irrigation)*100;

		}		
			else {
			var penality_full_irrigation = (-Deficitinit+Deficit )*penality1_select3;
			penality_full_irrigation = parseFloat(penality_full_irrigation).toFixed(4);
			penality_full_irrigation = Number(penality_full_irrigation)*100;

		}	
		}else {
			penality_full_irrigation = 0;
		} 
		//console.log("penality_full_irrigation 3 "+penality_full_irrigation);

	} 

else {
		var penality_full_irrigation = 0;
	}
		
	//

	//----------------
if(vred_ind>red_ind) {
	console.log("V REDUCTION IND A"+vred_ind);
	console.log("REDUCTION IND A"+red_ind);


	if(vred_ind>treshold_reduction_en_ind) {
		var calc1 = (Number(-red_ind) + Number(treshold_reduction_en_ind)) * penality1_reduction_en_ind;
		console.log("CALC1 A IND"+calc1);

		var calc2 = (Number(-treshold_reduction_en_ind) + Number(vred_ind)) * penality2_reduction_en_ind;
		console.log("CALC2 A IND"+calc2);

		var penality_reduction_en_ind = (calc1)+(calc2);
		console.log("REGION A PENALITY REDUCTION IND: "+penality_reduction_en_ind);
		penality_reduction_en_ind = parseFloat(penality_reduction_en_ind).toFixed(4);
		console.log("REGION A PENALITY REDUCTION IND PRSE: "+penality_reduction_en_ind);

		penality_reduction_en_ind = Number(penality_reduction_en_ind);
		console.log("REGION A PENALITY REDUCTION IND *100 1: "+penality_reduction_en_ind);


}		
	else {
	var penality_reduction_en_ind = (Number(-red_ind)+Number(vred_ind))*penality1_reduction_en_ind;
	console.log("REGION A PENALITY REDUCTION IND *100 2 ANTE: "+(-red_ind));
	console.log("REGION A PENALITY REDUCTION IND *100 2 ANTE 2: "+penality_reduction_en_ind);


	penality_reduction_en_ind = parseFloat(penality_reduction_en_ind).toFixed(4);
	penality_reduction_en_ind = Number(penality_reduction_en_ind);
	console.log("REGION A PENALITY REDUCTION IND *100 2: "+penality_reduction_en_ind);

}	
} else {
var penality_reduction_en_ind = 0;
console.log("REGION A PENALITY REDUCTION IND *100 3: "+penality_reduction_en_ind);

}
//-----------------
if(vred_tr>red_tr) {
	console.log("V REDUCTION TR A "+vred_tr);
	console.log("REDUCTION TR A"+red_tr);
	if(vred_tr>treshold_reduction_en_tr) {
		var calc1 = (Number(-red_tr) + Number(treshold_reduction_en_tr)) * penality1_reduction_en_tr;
		var calc2 = (Number(-treshold_reduction_en_tr) + Number(vred_tr)) * penality2_reduction_en_tr;
		var penality_reduction_en_tr = (calc1)+(calc2);
		console.log("REGION A penality_reduction_en_tr CALC1+2  1 "+penality_reduction_en_tr);

		penality_reduction_en_tr = parseFloat(penality_reduction_en_tr).toFixed(4);
		penality_reduction_en_tr = Number(penality_reduction_en_tr)*100;
		console.log("REGION A penality_reduction_en_tr  2 "+penality_reduction_en_tr);


}		else {
	var penality_reduction_en_tr = (Number(-red_tr)+Number(vred_tr))*penality1_reduction_en_tr;
	penality_reduction_en_tr = parseFloat(penality_reduction_en_tr).toFixed(4);
	penality_reduction_en_tr = Number(penality_reduction_en_tr)*100;
	console.log("REGION A penality_reduction_en_tr 3 "+penality_reduction_en_tr);


}	
} else {
var penality_reduction_en_tr = 0;
}
//---------------------
if(vred_service>red_service) {
	console.log("REGION A VRED SERVICE  "+vred_service);
	console.log("REGION A VRED SERVICE TRESHOLD  "+treshold_reduction_en_service);


	if(vred_service>treshold_reduction_en_service) {
		var calc1 = (Number(-red_service) + Number(treshold_reduction_en_service)) * penality1_reduction_en_service;
		console.log("REGION A VRED SERVICE calc1  "+calc1);

		var calc2 = (Number(-treshold_reduction_en_service) + Number(vred_service)) * penality2_reduction_en_service;
		console.log("REGION A VRED SERVICE calc2 "+calc2);
		var penality_reduction_en_service = (calc1)+(calc2);
		console.log("REGION A VRED SERVICE penality_reduction_en_service  1"+penality_reduction_en_service);
		
		penality_reduction_en_service = parseFloat(penality_reduction_en_service).toFixed(4);
		penality_reduction_en_service = Number(penality_reduction_en_service)*100;
		console.log("REGION A VRED SERVICE penality_reduction_en_service  2"+penality_reduction_en_service);

	
	}	else {
	var penality_reduction_en_service = (Number(-red_service)+Number(vred_service))*penality1_reduction_en_service;
	console.log("REGION A VRED SERVICE penality_reduction_en_service  3 ANTE "+penality_reduction_en_service);

	penality_reduction_en_service = parseFloat(penality_reduction_en_service).toFixed(4);
	penality_reduction_en_service = Number(penality_reduction_en_service)*100;
	console.log("REGION A VRED SERVICE penality_reduction_en_service  3 "+penality_reduction_en_service);



}	
	
} else {
var penality_reduction_en_service = 0;
}	
	
	//-----------------
	if(vred_house>red_house) {
		if(vred_house>treshold_reduction_en_house) {
			var calc1 = (Number(-red_house) + Number(treshold_reduction_en_house)) * penality1_reduction_en_house;
			var calc2 = (Number(-treshold_reduction_en_house) + Number(vred_house)) * penality2_reduction_en_house;
			var penality_reduction_en_house = (calc1)+(calc2);
			penality_reduction_en_house = parseFloat(penality_reduction_en_house).toFixed(4);
			penality_reduction_en_house =Number(penality_reduction_en_house)*100;
	}		else {
		var penality_reduction_en_house = (Number(-red_house)+Number(vred_house))*penality1_reduction_en_house;
	}				penality_reduction_en_house = parseFloat(penality_reduction_en_house).toFixed(4);
	penality_reduction_en_house =Number(penality_reduction_en_house)*100;

		
		
} else {
	var penality_reduction_en_house = 0;
}
	//------------------
	if(velec_tr>elec_tr) {
		if(velec_tr>treshold_elec_tr) {
			var calc1 = (-elec_tr + treshold_elec_tr) * penality1_elec_tr;
			var calc2 = (-treshold_elec_tr + velec_tr) * penality2_elec_tr;
			var penality_elec_tr = (calc1)+(calc2);
			penality_elec_tr = parseFloat(penality_elec_tr).toFixed(4);
			penality_elec_tr = Number(penality_elec_tr)*100;
	}		
		else {
			var penality_elec_tr = (-elec_tr+velec_tr)*penality1_elec_tr;
			penality_elec_tr = parseFloat(penality_elec_tr).toFixed(4);
			penality_elec_tr = Number(penality_elec_tr)*100;


		}	
} else {
	var penality_elec_tr = 0;
}
	//-------------------
	
	if(vgas_coal>gas_coal) {
		if(vgas_coal>treshold_red_gas_house) {
			var calc1 = (-gas_coal + treshold_red_gas_house) * penality1_red_gas_house;
			var calc2 = (-treshold_red_gas_house + vgas_coal) * penality2_red_gas_house;
			var penality_gas_coal = (calc1)+(calc2);
			penality_gas_coal = parseFloat(penality_gas_coal).toFixed(4);
			penality_gas_coal = Number(penality_gas_coal)*100;
	}	else {
		var penality_gas_coal = (-gas_coal+vgas_coal)*penality1_red_gas_house;
		penality_gas_coal = parseFloat(penality_gas_coal).toFixed(4);
		penality_gas_coal = Number(penality_gas_coal)*100;

	}			
		
} else {
	var penality_gas_coal = 0;
}
	//--------------------
	if(vbiofuel>vbiofuel) {
		if(vbiofuel>treshold_percentage_bio) {
			var calc1 = (-biofuel + treshold_percentage_bio) * penality1_percentage_bio;
			var calc2 = (-treshold_percentage_bio + vbiofuel) * penality2_percentage_bio;
			var penality_biofuel = (calc1)+(calc2);
			penality_biofuel = parseFloat(penality_biofuel).toFixed(4);
			penality_biofuel = Number(penality_biofuel)*100;
	}else {
		var penality_biofuel = ((-biofuel+vbiofuel)*penality1_percentage_bio);
		penality_biofuel = parseFloat(penality_biofuel).toFixed(4);
		penality_biofuel = Number(penality_biofuel)*100;


	}
		
} else {
	var penality_biofuel = 0;
}
	//------------------------
	if(vnuclear>nuclear) {
		if(vnuclear>treshold_fraction_total) {
			var calc1 = (-nuclear + treshold_fraction_total) * penality1_fraction_total;
			var calc2 = (-treshold_fraction_total + vnuclear) * penality2_fraction_total;
			var penality_fraction_total = (calc1)+(calc2);
			penality_fraction_total = parseFloat(penality_fraction_total).toFixed(4);
			penality_fraction_total = Number(penality_fraction_total)*100;
	}	else {
		var penality_fraction_total = ((-nuclear+vnuclear)*penality1_fraction_total);
		penality_fraction_total = parseFloat(penality_fraction_total).toFixed(4);
		penality_fraction_total = Number(penality_fraction_total)*100;

	}
		
} else {
	var penality_fraction_total = 0;
}

	var sum = Number(penality_intake)+Number(penality_waste)+Number(penality_vegan)+Number(penality_vegetarian)+Number(penality_day_less_meat)+Number(penality_closing_water)+Number(penality_organic_mulching)+Number(penality_full_irrigation)+Number(penality_reduction_en_ind)+Number(penality_reduction_en_tr)+Number(penality_reduction_en_service)+Number(penality_reduction_en_house)+Number(penality_elec_tr+penality_gas_coal)+Number(penality_biofuel+penality_fraction_total);
	//var sum = penality_intake+penality_waste+penality_vegan+penality_vegetarian+penality_day_less_meat+Number(penality_closing_water)+Number(penality_organic_mulching)+Number(penality_full_irrigation)+Number(penality_reduction_en_ind)+Number(penality_reduction_en_tr)+Number(penality_reduction_en_service)+Number(penality_reduction_en_house)+Number(penality_elec_tr+penality_gas_coal)+Number(penality_biofuel+penality_fraction_total);
	sum = parseFloat(sum).toFixed(1);

	//_-------
//_-------
	document.getElementById("penality").innerHTML = sum;
}
};

var myVar = setInterval(Penality,500);