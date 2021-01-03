/*window.addEventListener("load", function () {
	Sustanaible_Limit();
});*/

var json_callBack;
var data2 = "";
var region_stream = "";
var penality = localStorage.getItem("penality");
var data_ext = "";


function Sustanaible_Limit() {
	//alert("dentro Sustainable prova penality: "+localStorage.getItem("penality"));
	//alert("dentro Sustainable: id"+id_player_sust);
	// L'oggetto currents si trova al fondo del file loginGlobalVariables.js ed usa i valori registrati in questo script
	// per calcolare i punteggi di target-score.js
	//var currents = JSON.parse(localStorage.getItem("currents"));
	
	var checkregion = document.querySelector('input[name="region"]:checked'); 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
		////console.log("------------------- REGION A -------------------------");
		
		var Food_Internal_LF = 0; var Energy_Internal_LF = 0; var Internal_LF = 0;
		var Food_Internal_WFgreen = 0; var Energy_Internal_WFgreen = 0; var Internal_WFgreen = 0;	
		var Food_Internal_WFblue = 0; var Energy_Internal_WFblue = 0; var Internal_WFblue = 0;
		
		regionDataOutput = localStorage.getItem(checkregion.getAttribute('id')+'DataOutput');
		regionDataOutput = JSON.parse(regionDataOutput);
		
		// ---------------- LF -----------------------------------------
		/*
		Food_Internal_LF = regionDataOutput["LF_Food_Internal"];
		Energy_Internal_LF = regionDataOutput["LF_Energy_Internal"];
		Internal_LF = Food_Internal_LF+Energy_Internal_LF;
		*/
		Internal_LF = regionDataOutput["EU_A_sotto_lf"];
		Internal_LF = Math.round(Internal_LF);
		Internal_LF = Number(Internal_LF);
		// RelationA Q22
		start_limit_LF = 10.38;												// RelationA Q23
		result_limit_LF = (Internal_LF-start_limit_LF)/start_limit_LF;		// Limit = (Q22-Q23)/Q23
		result_limit_LF = result_limit_LF*100;								// Limit*100	RelationA R23
		
		//currents["current_A_land"] = result_limit_LF;
		regionDataOutput["current_A_land"] = result_limit_LF;
		
		////console.log("current_A_land: "+currents["current_A_land"]);
		////console.log("Internal_LF: "+Internal_LF+" start_limit_LF: "+start_limit_LF+" result_limit_LF: "+result_limit_LF);
		
		// ----------------- WFgreen -------------------------------------------
		/*
		Food_Internal_WFgreen = regionDataOutput["WFgreen_Food_Internal"];
		Energy_Internal_WFgreen = regionDataOutput["WFgreen_Energy_Internal"];
		Internal_WFgreen = Food_Internal_WFgreen+Energy_Internal_WFgreen;	
		*/
		Internal_WFgreen = regionDataOutput["EU_A_sotto_wfg"];
		Internal_WFgreen = Math.round(Internal_WFgreen);
		Internal_WFgreen = Number(Internal_WFgreen);
		// RelationA S22
		start_limit_WFgreen = (0.4*(11042/1.25));											// RelationA S23
		result_limit_WFgreen = (Internal_WFgreen-start_limit_WFgreen)/start_limit_WFgreen;	// Limit = (S22-S23)/S23
		result_limit_WFgreen = result_limit_WFgreen*100;									// Limit*100	RelationA T23
		
		//currents["current_A_green"] = result_limit_WFgreen;
		regionDataOutput["current_A_green"] = result_limit_WFgreen;
		
		////console.log("current_A_green: "+currents["current_A_green"]);
		////console.log("Internal_WFgreen: "+Internal_WFgreen+" start_limit_WFgreen: "+start_limit_WFgreen+" result_limit_WFgreen: "+result_limit_WFgreen);

		// ------------------WFblue-------------------------------------------------------
		/*
		Food_Internal_WFblue = regionDataOutput["WFblue_Food_Internal"];
		Energy_Internal_WFblue = regionDataOutput["WFblue_Energy_Internal"];
		Internal_WFblue = Food_Internal_WFblue+Energy_Internal_WFblue;	
		*/
		Internal_WFblue = regionDataOutput["EU_A_sotto_wfb"];
		Internal_WFblue = Math.round(Internal_WFblue);
		Internal_WFblue = Number(Internal_WFblue);
		// RelationA U22
		start_limit_WFblue = 1550;															// RelationA U23
		result_limit_WFblue = (Internal_WFblue-start_limit_WFblue)/start_limit_WFblue;		// Limit = (U22-U23)/U23
		result_limit_WFblue = result_limit_WFblue*100;										// Limit*100	RelationA V23
		
		//currents["current_A_blue"] = result_limit_WFblue;
		regionDataOutput["current_A_blue"] = result_limit_WFblue;
		
		////console.log("current_A_blue: "+currents["current_A_blue"]);
		////console.log("Internal_WFblue: "+Internal_WFblue+" start_limit_WFblue: "+start_limit_WFblue+" result_limit_WFblue: "+result_limit_WFblue);
		
		localStorage.setItem("regionADataOutput", JSON.stringify(regionDataOutput));
	}

	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
		////console.log("------------------- REGION B -------------------------");
		var Food_Internal_LF = 0; var Energy_Internal_LF = 0; var Internal_LF = 0;
		var Food_Internal_WFgreen = 0; var Energy_Internal_WFgreen = 0; var Internal_WFgreen = 0;	
		var Food_Internal_WFblue = 0; var Energy_Internal_WFblue = 0; var Internal_WFblue = 0;
		
		regionDataOutput = localStorage.getItem(checkregion.getAttribute('id')+'DataOutput');
		regionDataOutput = JSON.parse(regionDataOutput);
		
		// ---------------- LF -----------------------------------------
		/*
		Food_Internal_LF = regionDataOutput["LF_Food_Internal"];
		Energy_Internal_LF = regionDataOutput["LF_Energy_Internal"];
		Internal_LF = Food_Internal_LF+Energy_Internal_LF;
		*/
		Internal_LF = regionDataOutput["EU_B_sotto_lf"];
		Internal_LF = Math.round(Internal_LF);
		Internal_LF = Number(Internal_LF);
		start_limit_LF = 20.86;
		result_limit_LF = (Internal_LF-start_limit_LF)/start_limit_LF;
		result_limit_LF = result_limit_LF*100;
		
		//currents["current_B_land"] = result_limit_LF;
		regionDataOutput["current_B_land"] = result_limit_LF;
		
		////console.log("current_B_land: "+currents["current_B_land"]);
		////console.log("Internal_LF: "+Internal_LF+" start_limit_LF: "+start_limit_LF+" result_limit_LF: "+result_limit_LF);
		
		// ----------------- WFgreen -------------------------------------------
		/*
		Food_Internal_WFgreen = regionDataOutput["WFgreen_Food_Internal"];
		Energy_Internal_WFgreen = regionDataOutput["WFgreen_Energy_Internal"];
		Internal_WFgreen = Food_Internal_WFgreen+Energy_Internal_WFgreen;
		*/
		Internal_WFgreen = regionDataOutput["EU_B_sotto_wfg"];
		Internal_WFgreen = Math.round(Internal_WFgreen);
		Internal_WFgreen = Number(Internal_WFgreen);
		start_limit_WFgreen = (0.4*(32746));
		result_limit_WFgreen = (Internal_WFgreen-start_limit_WFgreen)/start_limit_WFgreen;
		result_limit_WFgreen = result_limit_WFgreen*100;

		//currents["current_B_green"] = result_limit_WFgreen;
		regionDataOutput["current_B_green"] = result_limit_WFgreen;
		
		////console.log("current_B_green: "+currents["current_B_green"]);
		////console.log("Internal_WFgreen: "+Internal_WFgreen+" start_limit_WFgreen: "+start_limit_WFgreen+" result_limit_WFgreen: "+result_limit_WFgreen);

		// ------------------WFblue-------------------------------------------------------
		/*
		Food_Internal_WFblue = regionDataOutput["WFblue_Food_Internal"];
		Energy_Internal_WFblue = regionDataOutput["WFblue_Energy_Internal"];
		Internal_WFblue = Food_Internal_WFblue+Energy_Internal_WFblue;
		*/
		Internal_WFblue = regionDataOutput["EU_B_sotto_wfb"];
		Internal_WFblue = Math.round(Internal_WFblue);
		Internal_WFblue = Number(Internal_WFblue);
		start_limit_WFblue = (0.3*(25498/2));
		result_limit_WFblue = (Internal_WFblue-start_limit_WFblue)/start_limit_WFblue;
		result_limit_WFblue = result_limit_WFblue*100;
		
		//currents["current_B_blue"] = result_limit_WFblue;
		regionDataOutput["current_B_blue"] = result_limit_WFblue;
		
		////console.log("current_B_blue: "+currents["current_B_blue"]);
		////console.log("Internal_WFblue: "+Internal_WFblue+" start_limit_WFblue: "+start_limit_WFblue+" result_limit_WFblue: "+result_limit_WFblue);	
	
		localStorage.setItem("regionBDataOutput", JSON.stringify(regionDataOutput));
	}

	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
		////console.log("------------------- REGION C -------------------------");
		var Food_Internal_LF = 0; var Energy_Internal_LF = 0; var Internal_LF = 0;
		var Food_Internal_WFgreen = 0; var Energy_Internal_WFgreen = 0; var Internal_WFgreen = 0;	
		var Food_Internal_WFblue = 0; var Energy_Internal_WFblue = 0; var Internal_WFblue = 0;
		
		regionDataOutput = localStorage.getItem(checkregion.getAttribute('id')+'DataOutput');
		regionDataOutput = JSON.parse(regionDataOutput);
		
		// ---------------- LF -----------------------------------------
		/*
		Food_Internal_LF = regionDataOutput["LF_Food_Internal"];
		Energy_Internal_LF = regionDataOutput["LF_Energy_Internal"];
		Internal_LF = Food_Internal_LF+Energy_Internal_LF;
		*/
		Internal_LF = regionDataOutput["EU_C_sotto_lf"];
		Internal_LF = Math.round(Internal_LF);
		Internal_LF = Number(Internal_LF);
		start_limit_LF = (6.58*1.25);
		result_limit_LF = (Internal_LF-start_limit_LF)/start_limit_LF;
		result_limit_LF = result_limit_LF*100;
		
		//currents["current_C_land"] = result_limit_LF;
		regionDataOutput["current_C_land"] = result_limit_LF;
		
		////console.log("current_C_land: "+currents["current_C_land"]);
		////console.log("Internal_LF: "+Internal_LF+" start_limit_LF: "+start_limit_LF+" result_limit_LF: "+result_limit_LF);
		
		// ----------------- WFgreen -------------------------------------------
		/*
		Food_Internal_WFgreen = regionDataOutput["WFgreen_Food_Internal"];
		Energy_Internal_WFgreen = regionDataOutput["WFgreen_Energy_Internal"];
		Internal_WFgreen = Food_Internal_WFgreen+Energy_Internal_WFgreen;
		*/
		Internal_WFgreen = regionDataOutput["EU_C_sotto_wfg"];
		Internal_WFgreen = Math.round(Internal_WFgreen);
		Internal_WFgreen = Number(Internal_WFgreen);
		start_limit_WFgreen = (0.4*(5923));
		result_limit_WFgreen = (Internal_WFgreen-start_limit_WFgreen)/start_limit_WFgreen;
		result_limit_WFgreen = result_limit_WFgreen*100;

		//currents["current_C_green"] = result_limit_WFgreen;
		regionDataOutput["current_C_green"] = result_limit_WFgreen;
		
		////console.log("current_C_green: "+currents["current_C_green"]);
		////console.log("Internal_WFgreen: "+Internal_WFgreen+" start_limit_WFgreen: "+start_limit_WFgreen+" result_limit_WFgreen: "+result_limit_WFgreen);

		// ------------------WFblue-------------------------------------------------------
		/*
		Food_Internal_WFblue = regionDataOutput["WFblue_Food_Internal"];
		Energy_Internal_WFblue = regionDataOutput["WFblue_Energy_Internal"];
		Internal_WFblue = Food_Internal_WFblue+Energy_Internal_WFblue;
		*/
		Internal_WFblue = regionDataOutput["EU_C_sotto_wfb"];
		Internal_WFblue = Math.round(Internal_WFblue);
		Internal_WFblue = Number(Internal_WFblue);
		start_limit_WFblue = (0.3*(4626/5.3));
		result_limit_WFblue = (Internal_WFblue-start_limit_WFblue)/start_limit_WFblue;
		result_limit_WFblue = result_limit_WFblue*100;	
	
		//currents["current_C_blue"] = result_limit_WFblue;
		regionDataOutput["current_C_blue"] = result_limit_WFblue;
		
		////console.log("current_C_blue: "+currents["current_C_blue"]);
		////console.log("Internal_WFblue: "+Internal_WFblue+" start_limit_WFblue: "+start_limit_WFblue+" result_limit_WFblue: "+result_limit_WFblue);
	}

	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
		////console.log("------------------- REGION D -------------------------");
		var Food_Internal_LF = 0; var Energy_Internal_LF = 0; var Internal_LF = 0;
		var Food_Internal_WFgreen = 0; var Energy_Internal_WFgreen = 0; var Internal_WFgreen = 0;	
		var Food_Internal_WFblue = 0; var Energy_Internal_WFblue = 0; var Internal_WFblue = 0;
		
		regionDataOutput = localStorage.getItem(checkregion.getAttribute('id')+'DataOutput');
		regionDataOutput = JSON.parse(regionDataOutput);
		
		// ---------------- LF -----------------------------------------
		/*
		Food_Internal_LF = regionDataOutput["LF_Food_Internal"];
		Energy_Internal_LF = regionDataOutput["LF_Energy_Internal"];
		Internal_LF = Food_Internal_LF+Energy_Internal_LF;
		*/
		Internal_LF = regionDataOutput["EU_D_sotto_lf"];
		Internal_LF = Math.round(Internal_LF);
		Internal_LF = Number(Internal_LF);
		start_limit_LF = (14.31*1.25);
		result_limit_LF = (Internal_LF-start_limit_LF)/start_limit_LF;
		result_limit_LF = result_limit_LF*100;
		
		//currents["current_D_land"] = result_limit_LF;
		regionDataOutput["current_D_land"] = result_limit_LF;
		
		////console.log("current_D_land: "+currents["current_D_land"]);
		//console.log("Internal_LF: "+Internal_LF+" start_limit_LF: "+start_limit_LF+" result_limit_LF: "+result_limit_LF);
		
		// ----------------- WFgreen -------------------------------------------
		/*
		Food_Internal_WFgreen = regionDataOutput["WFgreen_Food_Internal"];
		Energy_Internal_WFgreen = regionDataOutput["WFgreen_Energy_Internal"];
		Internal_WFgreen = Food_Internal_WFgreen+Energy_Internal_WFgreen;
		*/
		Internal_WFgreen = regionDataOutput["EU_D_sotto_wfg"];
		Internal_WFgreen = Math.round(Internal_WFgreen);
		Internal_WFgreen = Number(Internal_WFgreen);
		start_limit_WFgreen = (0.4*(12947));
		result_limit_WFgreen = (Internal_WFgreen-start_limit_WFgreen)/start_limit_WFgreen;
		result_limit_WFgreen = result_limit_WFgreen*100;

		//currents["current_D_green"] = result_limit_WFgreen;
		regionDataOutput["current_D_green"] = result_limit_WFgreen;
		
		////console.log("current_D_green: "+currents["current_D_green"]);
		//console.log("Internal_WFgreen: "+Internal_WFgreen+" start_limit_WFgreen: "+start_limit_WFgreen+" result_limit_WFgreen: "+result_limit_WFgreen);

		// ------------------WFblue-------------------------------------------------------
		/*
		Food_Internal_WFblue = regionDataOutput["WFblue_Food_Internal"];
		Energy_Internal_WFblue = regionDataOutput["WFblue_Energy_Internal"];
		Internal_WFblue = Food_Internal_WFblue+Energy_Internal_WFblue;
		*/
		Internal_WFblue = regionDataOutput["EU_D_sotto_wfb"];
		Internal_WFblue = Math.round(Internal_WFblue);
		Internal_WFblue = Number(Internal_WFblue);
		start_limit_WFblue = (0.3*(9171/8));
		result_limit_WFblue = (Internal_WFblue-start_limit_WFblue)/start_limit_WFblue;
		result_limit_WFblue = result_limit_WFblue*100;	
	
		//currents["current_D_blue"] = result_limit_WFblue;
		regionDataOutput["current_D_blue"] = result_limit_WFblue;
		
		////console.log("current_D_blue: "+currents["current_D_blue"]);
		//console.log("Internal_WFblue: "+Internal_WFblue+" start_limit_WFblue: "+start_limit_WFblue+" result_limit_WFblue: "+result_limit_WFblue);
	}
	else {}
	////console.log("valore di currents: "+currents);
	
	//localStorage.setItem("currents", JSON.stringify(currents));
	
	var landlimit = parseFloat(result_limit_LF).toFixed(1);
	landlimit = Number(landlimit);
	
	var greenlimit = parseFloat(result_limit_WFgreen).toFixed(1);
	greenlimit = Number(greenlimit);
	
	var bluelimit = parseFloat(result_limit_WFblue).toFixed(1);
	bluelimit = Number(bluelimit);
	
	if((landlimit<=0)) {
		document.getElementById("Land_limits").innerHTML = "<font color='#B1FB17'>"+result_limit_LF.toFixed(1)+"%</font>";
	} 
	else {
		document.getElementById("Land_limits").innerHTML = "<font color='red'>"+result_limit_LF.toFixed(1)+"%</font>";
	}
	
	if((greenlimit<=0)) {
		document.getElementById("GW_limits").innerHTML = "<font color='#B1FB17'>"+result_limit_WFgreen.toFixed(1)+"%</font>";
	} 
	else {
		document.getElementById("GW_limits").innerHTML = "<font color='red'>"+result_limit_WFgreen.toFixed(1)+"%</font>";
	}
	
	if((bluelimit<=0)) {
		document.getElementById("BW_limits").innerHTML = "<font color='#B1FB17'>"+result_limit_WFblue.toFixed(1)+"%</font>";		
	} 
	else {
		document.getElementById("BW_limits").innerHTML = "<font color='red'>"+result_limit_WFblue.toFixed(1)+"%</font>";
	}
	
	
	//if(checkregion != null) {
		region_stream = checkregion.getAttribute('id');
		
		if((Cat=="")||(Cat==null)) {
			Cat = "none";
		}else {
			Cat=Cat;
		}
		if((Region_start=="")||(Region_start==null)){
			Region_start="none";
		}else {
			Region_start=Region_start;
		}
		//console.log("CAT: "+Cat);
		//console.log("Region_start: "+Region_start);
var region_debit_external = Cat;
var data_Ext = "";
	var region_to_send = localStorage.getItem("region"+region_debit_external+"DataOutput");
	var cf_e = "";
	var lf_e = "";
	var wfg_e = "";
	var wfb_e ="";
	//alert("PLAYER: "+id_player_sust);

	/*region_to_send = JSON.parse(region_to_send);
	//var data = JSON.stringify(region_to_send);
	
		var cf_ext =JSON.stringify(region_to_send["cf_ext"]);
		var lf_ext=JSON.stringify(region_to_send["lf_ext"]);
		var wfg_ext=JSON.stringify(region_to_send["wfg_ext"]);
		var wfb_ext=JSON.stringify(region_to_send["wfb_ext"]);*/
	data_ext = '{"cf_ext": 0, "lf_ext": 0, "wfg_ext": 0, "wfb_ext": 0}';
	
		//data_ext = '{"cf_ext":'+cf_ext+', "lf_ext":'+lf_ext+', "wfg_ext":'+wfg_ext+', "wfb_ext":'+wfb_ext+'}';
	
	
}


var myVar = setInterval(Sustanaible_Limit, 3000);



function SendDataToDB() {
//	alert("SONO DENTRO SEND DATA TO DB");
	var original_stream = localStorage.getItem(Region_start+"DataOutput");
	original_stream = JSON.parse(original_stream);	
	data2 = JSON.stringify(original_stream);
	//console.log("REGION FROM WHICH PICK UP DATA: "+region_debit_external+" REGION PLAYER: "+region_stream);
	//console.log("REGION STREAM NOME: "+region_stream+" CONTENUTO DA INVIARE AL DB: "+data2);
	
	var stanza_id = localStorage.getItem("stanza");
	//alert("DataToDB - POCO PRIMA DI FETCH "+stanza_id+" data_Ext: "+data_ext+" data2: "+data2);
	//alert(" region_stream: "+region_stream+" Region start:"+Region_start+" id_player_sust: "+id_player_sust+" penality: "+penality);
	fetch('Json_Storage?data_ext='+encodeURIComponent(data_ext)+'&data2='+encodeURIComponent(data2)+'&region_debt='+encodeURIComponent(Cat)+'&id_room='+encodeURIComponent(stanza_id)+'&op=write&region_player='+encodeURIComponent(region_stream)+'&region_start='+encodeURIComponent(Region_start)+'&player_id='+encodeURIComponent(id_player_sust)+'&penality='+encodeURIComponent(penality), {
			method: 'PUT',
			headers: {
					'Content-Type':'application/json"',
					//'Access-Control-Allow-Origin':'/Multiplayer_Nexus',
					'Allow-Contro-Expose-Headers': 'Content-Type'
						},
		//body: JSON.stringify(test),
					})

	
						.then(resp=>resp.text())

					
	//.then(text=>{alert(test)})
	//.then(text=>{alert(region_stream)})	
	//.then(text=>alert("SIAMO IN LETTURA, CONTROLLA CONSOLE!"))
//.then(data=>{json_callBack = data})
	//.then(resp=>resp.text())
	//.then(data => json_callBack = data)
		//.then(data2 => id_room = data2)

	.catch(err=>alert("Something Went Wrong sending Data to DB! PLEASE DON'T PRESS F5 TO REFRESH THIS PAGE. This can broke your data stream. Just Try Again or Log In again. Thank You."));
	
	//console.log("TEST OGGETTO : "+json_callBack);
	//console.log("ID_ROOM: "+id_room);

//}
}

function SendDataToDBOnClick() {
	//alert("4 - Sono dentro SendDataToDBOnClick()");	
	var checkregionclick = document.querySelector('input[name="region"]:checked'); 
	var region_stream = checkregionclick.getAttribute('id');
			
//	alert("SONO DENTRO SEND DATA TO DB");
	var original_stream = localStorage.getItem(region_stream+"DataOutput");
	original_stream = JSON.parse(original_stream);	
	var data2 = JSON.stringify(original_stream);
	//console.log("REGION FROM WHICH PICK UP DATA: "+region_debit_external+" REGION PLAYER: "+region_stream);
	//console.log("ONCLICK - REGION STREAM NOME: "+region_stream+" CONTENUTO DA INVIARE AL DB: "+data2);
	
var stanza_id = localStorage.getItem("stanza");
//alert("ONCLICK - POCO PRIMA DI FETCH "+stanza_id+" data_Ext: "+data_ext+" data2: "+data2);
//alert(" region_stream: "+region_stream+" Region start:"+Region_start+" id_player_sust: "+id_player_sust+" penality: "+penality);
	fetch('Json_Storage?data_ext='+encodeURIComponent(data_ext)+'&data2='+encodeURIComponent(data2)+'&region_debt='+encodeURIComponent(Cat)+'&id_room='+encodeURIComponent(stanza_id)+'&op=write&region_player='+encodeURIComponent(region_stream)+'&region_start='+encodeURIComponent(region_stream)+'&player_id='+encodeURIComponent(id_player_sust)+'&penality='+encodeURIComponent(penality), {
			method: 'PUT',
			headers: {
					'Content-Type':'application/json"',
					//'Access-Control-Allow-Origin':'/Multiplayer_Nexus',
					'Allow-Contro-Expose-Headers': 'Content-Type'
						},
		//body: JSON.stringify(test),
					})

	
						.then(resp=>resp.text())

					
	//.then(text=>{alert(test)})
	//.then(text=>{alert(region_stream)})	
	//.then(text=>alert("SIAMO IN LETTURA, CONTROLLA CONSOLE!"))
//.then(data=>{json_callBack = data})
	//.then(resp=>resp.text())
	//.then(data => json_callBack = data)
		//.then(data2 => id_room = data2)

	.catch(err=>alert("Something Went Wrong sending Data to DB! PLEASE DON'T PRESS F5 TO REFRESH THIS PAGE. This can broke your data stream. Just Try Again or Log In again. Thank You."));
	
	//console.log("TEST OGGETTO : "+json_callBack);
	//console.log("ID_ROOM: "+id_room);

//}
	//alert("Fine SendDataToDBOnClick()");
}

function SendDataToDBOnYesClick() {
	//console.log("4 - Sono dentro SendDataToDBOnYesClick()");	
	var checkregionclick = document.querySelector('input[name="region"]:checked'); 
	var region_stream = checkregionclick.getAttribute('id');
			
//	alert("SONO DENTRO SEND DATA TO DB");
	var original_stream = localStorage.getItem(region_stream+"DataOutput");
	original_stream = JSON.parse(original_stream);	
	var data2 = JSON.stringify(original_stream);
	//console.log("REGION FROM WHICH PICK UP DATA: "+region_debit_external+" REGION PLAYER: "+region_stream);
	//console.log("ONCLICK - REGION STREAM NOME: "+region_stream+" CONTENUTO DA INVIARE AL DB: "+data2);
	
var stanza_id = localStorage.getItem("stanza");
//alert("ONCLICK - POCO PRIMA DI FETCH "+stanza_id+" data_Ext: "+data_ext+" data2: "+data2);
//alert(" region_stream: "+region_stream+" Region start:"+Region_start+" id_player_sust: "+id_player_sust+" penality: "+penality);
	
	fetch('Json_Storage?data_ext='+encodeURIComponent(data_ext)+'&data2='+encodeURIComponent(data2)+'&region_debt='+encodeURIComponent(Cat)+'&id_room='+encodeURIComponent(stanza_id)+'&op=update&region_player='+encodeURIComponent(region_stream)+'&region_start='+encodeURIComponent(region_stream)+'&player_id='+encodeURIComponent(id_player_sust)+'&penality='+encodeURIComponent(penality), {
		method: 'PUT',
		headers: {
			'Content-Type':'application/json"',
			//'Access-Control-Allow-Origin':'/Multiplayer_Nexus',
			'Allow-Contro-Expose-Headers': 'Content-Type'
		},
		//body: JSON.stringify(test),
	})
	
	.then(response => {
    	if (response.ok) {
       		console.log("Contenuto ricevuto");
    	}
    	if (response.status >= 100 && response.status < 200) {
       		console.log("Informazioni per il client");
    	}
    	if (response.status >= 300 && response.status < 399) {
       		console.log("Redirezione");
    	}
    	if (response.status >= 400 && response.status < 499) {
       		console.log("Richiesta errata");
    	}
    	if (response.status >= 500 && response.status < 599) {
       		console.log("Errore sul server");
    	}
    	console.log("Valore di response.status: "+response.status);
    })
	
	//.then(resp=>resp.text())

	//.then(text=>{alert(test)})
	//.then(text=>{alert(region_stream)})	
	//.then(text=>alert("SIAMO IN LETTURA, CONTROLLA CONSOLE!"))
	//.then(data=>{json_callBack = data})
	//.then(resp=>resp.text())
	//.then(data => json_callBack = data)
	//.then(data2 => id_room = data2)

	.catch(err=>alert("Something Went Wrong sending Data to DB! PLEASE DON'T PRESS F5 TO REFRESH THIS PAGE. This can broke your data stream. Just Try Again or Log In again. Thank You."));
	
	//console.log("TEST OGGETTO : "+json_callBack);
	//console.log("ID_ROOM: "+id_room);

//}
	//console.log("Fine SendDataToDBOnYesClick()");
}