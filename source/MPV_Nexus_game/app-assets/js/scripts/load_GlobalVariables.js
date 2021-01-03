//alert("sono dentro loadGlobal");

// La variabile globale color = 0, serv per indicare ai grafici sopra/sotto che l'utente non ha effettuato alcuna azione
// e che il colore delle percentuali deve rimanere grigio, viene usata in grafici-sopra-ok-console.js / grafici-sotto.js / balance_Food_Energy.js
var color = 0;
localStorage.setItem("color", 0);

window.addEventListener("load", function () {
	loadGlobalVariables();
});

// Il seguente codice serve per intercettare un cambiamento negli input, dentro le caselle di testo.
// Se viene intercettato un cambiamento allora color = 1 ed indica ai grafici che le percentuali possono essere rosse o verdi.
// Il codice per intercettare un click nei bottoni + o - associati alle caselle di testo si trova dentro balance_Food_Energy.js
var action = document.querySelectorAll('.color');
for (var i = 0; i < action.length; i++) {
	//alert("Sono dentro il for");
	action[i].addEventListener('change', function(event) {
		color = 1;
		localStorage.setItem("color", 1);
		//alert("Utente ha eseguito un azione");
	});
}
document.getElementById("minusDays").addEventListener("click", function(){color = 1; localStorage.setItem("color", 1);});
document.getElementById("plusDays").addEventListener("click", function(){color = 1; localStorage.setItem("color", 1);});

var RegionAData ="";
var RegionBData = "";
var RegionCData = "";
var RegionDData = "";

function loadGlobalVariables() {
	localStorage.getItem("trade_is_called");

	//alert("STO ESEGUENDO LOADGLOBALVARIABLES");
	var player = localStorage.getItem("User");
	document.getElementById("nomeplayer").innerHTML = ""+player+"";
	var Version = localStorage.getItem("GameVersion");
	var RegionStart = localStorage.getItem("RegionLogin");
	//alert("REGION START"+RegionStart);

	var test = RegionStart+"DataOutput";
	//console.log("contenitore "+test);
	//console.log("contenuto: "+localStorage.getItem(test));


	var checkregionstart = document.getElementById(RegionStart);
	//console.log("USER: "+player+" VERSION: "+Version+" REGION: "+RegionStart);
	var label = document.getElementById("lab"+RegionStart);
	//--- SCELTA 1: Seleziono SP1 e la mia regione.
	if(Version=="SP1") {
		
		document.getElementById("secbw").classList.add("invisible");
		document.getElementById("seccw").classList.add("invisible");
		document.getElementById("secdw").classList.add("invisible");
		document.getElementById("secaw").classList.add("invisible");
		document.getElementById("secbparent").classList.add("invisible");
		document.getElementById("seccparent").classList.add("invisible");
		document.getElementById("secdparent").classList.add("invisible");
		document.getElementById("secaparent").classList.add("invisible");
		document.getElementById("secb").classList.add("invisible");
		document.getElementById("secc").classList.add("invisible");
		document.getElementById("secd").classList.add("invisible");
		document.getElementById("seca").classList.add("invisible");
		
		document.getElementById("secbw").style.display="none";
		document.getElementById("seccw").style.display="none";
		document.getElementById("secdw").style.display="none";
		document.getElementById("secaw").style.display="none";
		
		document.getElementById("secbparent").style.display="none";
		document.getElementById("seccparent").style.display="none";
		document.getElementById("secdparent").style.display="none";
		document.getElementById("secaparent").style.display="none";
		
		document.getElementById("secb").style.display="none";
		document.getElementById("secc").style.display="none";
		document.getElementById("secd").style.display="none";
		document.getElementById("seca").style.display="none";
		
		document.getElementById("carbonsupicon").classList.add("invisible");
		document.getElementById("carbonsup").classList.add("invisible");

		var string = String(RegionStart);
		if (string=="regionA") {

	 	//document.getElementById("bID").innerHTML='<b style="color:white;">'+RegionStart.toUpperCase() +'</b>';
			document.getElementById('bID').innerHTML = "<a data-toggle='tooltip' data-placement='bottom' title='12% Population EU - Low Land and Green Water (rain) availability per capita - Medium Blue Water (surface and groundwater) availability per capita'><b style='color:white;'>REGION A</b></a>";

		} else if(string=="regionB") {

			document.getElementById('bID').innerHTML = "<a data-toggle='tooltip' data-placement='bottom' title='8% Population EU - High Land and Green Water (rain) availability per capita - High Blue Water (surface and groundwater) availability per capita'><b style='color:white;'>REGION B</b></a>";


		} else if(string=="regionC"){

			document.getElementById('bID').innerHTML = "<a data-toggle='tooltip' data-placement='bottom' title='46% Population EU - Medium Land and Green Water (rain) availability per capita - Low Blue Water (surface and groundwater) availability per capita'><b style='color:white;'>REGION C</b></a>";


		} else if(string=="regionD"){

			document.getElementById('bID').innerHTML = "<a data-toggle='tooltip' data-placement='bottom' title='34% Population EU - Low Land and Green Water (rain) availability per capita - Low Blue Water (surface and groundwater) availability per capita'><b style='color:white;'>REGION D</b></a>";
		}



		//document.getElementById("bID").innerHTML='<b style="color:white;">REGION '+checkregionstart.innerHTML+'</b>';
		//alert('REGION '+checkregionstart.innerHTML);
		 if(checkregionstart.getAttribute("id") == RegionStart) {
		 		document.getElementById("regionA").disabled=true;
		 		document.getElementById("regionB").disabled=true;
		 		document.getElementById("regionC").disabled=true;
		 		document.getElementById("regionD").disabled=true;
		 		var a=document.getElementById("regionA");
		 		var b=document.getElementById("regionB");
		 		var c=document.getElementById("regionC");
		 		var d=document.getElementById("regionD");
		 		document.getElementById("eutargets").classList.add("invisible");
				document.getElementById("foodup").classList.add("invisible");
				document.getElementById("securitysup").classList.add("invisible");
		 document.getElementById("plant-import-keyboard").classList.add("invisible");
		 document.getElementById("meat-import-keyboard").classList.add("invisible");
		 document.getElementById("diary-import-keyboard").classList.add("invisible");
		 document.getElementById("fossil-import-keyboard").classList.add("invisible");
		 document.getElementById("bio-import-keyboard").classList.add("invisible");
		 document.getElementById("elec-import-keyboard").classList.add("invisible");

	 		document.getElementById("MyEu").style.visibility = "hidden";

		 document.getElementById("eutargets").classList.add("invisible");
		 document.getElementById("foodup").classList.add("invisible");
		 document.getElementById("euf").classList.add("invisible");
		 document.getElementById("euet").classList.add("invisible");
		 document.getElementById("securitysup").classList.add("invisible");
		 document.getElementById("tradecenter").classList.add("invisible");
		 document.getElementById("loadimport").classList.add("invisible");
		 document.getElementById("CFsp1").style.visibility = "visible";
		 document.getElementById("CFsp1Value").style.visibility = "visible";
		 document.getElementById("CFsp1").style.display = "block";
		 document.getElementById("CFsp1Value").style.display = "block";





		 	//console.log("Valore di label: "+label+" Valore di label classList: "+label.classList.item(2)+" Valore di regionStart: "+RegionStart);

		 	if(label.classList.item(2)==RegionStart) {
				label.classList.remove("nonattivo");
				label.classList.add("active");
		 	}
		 	if ((label.style.visibility = "hidden")&&(label.classList.item(2)==RegionStart)) {
				label.style.visibility = "visible";
				label.style.backgroundColor = "blue!important";
			}

		 		/*a.classList.remove("btn-a");
		 		b.classList.remove("btn-b");
		 		c.classList.remove("btn-c");
		 		d.classList.remove("btn-d");*/

				//a.classList.add("nonattivo");
		 		//b.classList.add("nonattivo");
		 		//c.classList.add("nonattivo");
		 		//d.classList.add("nonattivo");
		 		//a.classList.add("nonattivo");

				//alert("BUTTON: "+checkregionstart.getAttribute("id"));
				//alert("BUTTON STATUS: "+checkregionstart.checked);
				//alert(checkregionstart.getAttribute("id")+"DataInput: "+localStorage.getItem(checkregionstart.getAttribute("id")+"DataInput"));
				checkregionstart.checked = true;
			//	if (checkregionstart.hasClass("nonattivo")) {
			//	checkregionstart.classlist.remove("nonattivo");
			//	}
				checkregionstart.setAttribute("class", "active");
				//document.getElementById("bID").innerHTML='<b style="color:white;">REGION '+checkregionstart.innerHTML+'</b>';
		 }

		 else {
			 	checkregionstart.checked = false;
			 }
			/*	
			 var inputs = localStorage.getItem(string+"DataInput");
			 var score = localStorage.getItem(string+"DataOutput");
			 var obj = " ------- PLAYER'S OUTPUT SCORES ------- "+"\n\n\n"+score+"\n\n\n"+" ------- PLAYER'S INPUT FIELDS ------- "+"\n\n\n"+inputs;
			 var split = obj.split(",");
			 var join = split.join("\n\n");
			 var data = "text/json;charset=utf-8," + encodeURIComponent(join);

			var curday = function(sp){
				today = new Date();
				var dd = today.getDate();
				var mm = today.getMonth()+1; //Gennaio è 0.
				var yyyy = today.getFullYear();

				if(dd<10) dd='0'+dd;
				if(mm<10) mm='0'+mm;
				return (mm+sp+dd+sp+yyyy);	
			};
			document.getElementById("datadownload").innerHTML = '<a href="data:'+data+'"  class="button5" style="background-color:#42cc8c;" download="'+string+'_scores_'+curday('-')+'.txt">Download Your Score</a>';
			*/
		 }

	 if (Version=="SP2") {

		 document.getElementById("labregionA").classList.remove("nonattivo");
		 document.getElementById("labregionB").classList.remove("nonattivo");
		 document.getElementById("labregionC").classList.remove("nonattivo");
		 document.getElementById("labregionD").classList.remove("nonattivo");
		 document.getElementById("labregionA").style.visibility = "visible";
		 document.getElementById("labregionB").style.visibility = "visible";
		 document.getElementById("labregionC").style.visibility = "visible";
		 document.getElementById("labregionD").style.visibility = "visible";


		 if(checkregionstart.getAttribute("id") == RegionStart) {
		 	document.getElementById("regionA").checked=false;
		 	document.getElementById("regionB").checked=false;
		 	document.getElementById("regionC").checked=false;
		 	document.getElementById("regionD").checked=false;
		 	document.getElementById(RegionStart).checked=true;
		 	//checkregionstart.setAttribute("class", "active");
		 	 document.getElementById("plant-import-keyboard").classList.remove("invisible");
			 document.getElementById("meat-import-keyboard").classList.remove("invisible");
			 document.getElementById("diary-import-keyboard").classList.remove("invisible");
			 document.getElementById("fossil-import-keyboard").classList.remove("invisible");
			 document.getElementById("bio-import-keyboard").classList.remove("invisible");
			 document.getElementById("elec-import-keyboard").classList.remove("invisible");

		 	 document.getElementById("MyEu").style.visibility = "visible";

			 document.getElementById("eutargets").classList.remove("invisible");
			 document.getElementById("foodup").classList.remove("invisible");
			 document.getElementById("euf").classList.remove("invisible");
			 document.getElementById("euet").classList.remove("invisible");
			 document.getElementById("securitysup").classList.remove("invisible");
			 document.getElementById("tradecenter").classList.remove("invisible");
			 document.getElementById("loadimport").classList.remove("invisible");

			document.getElementById("CFsp1").style.visibility = "hidden";
		 	document.getElementById("CFsp1Value").style.visibility = "hidden";
		  	document.getElementById("CFsp1").style.display = "none";
		 	document.getElementById("CFsp1Value").style.display = "none";

		 	if(label.classList.item(2)==RegionStart) {
				 label.classList.remove("nonattivo");

				 label.classList.add("active");
			 }


			var string = String(RegionStart);
			if (string=="regionA") {
		 	//document.getElementById("bID").innerHTML='<b style="color:white;">'+RegionStart.toUpperCase() +'</b>';
				document.getElementById("bID").innerHTML = ' <a data-toggle="tooltip" data-placement="bottom" title="12% Population EU - Low Land and Green Water (rain) availability per capita - Medium Blue Water (surface and groundwater) availability per capita"><b style="color:white;">REGION A</b></a>';

			document.getElementById("secaparent").classList.add("invisible");
    		document.getElementById("seca").classList.add("invisible");
    		document.getElementById("secaw").classList.add("invisible");

    		document.getElementById("secbparent").classList.remove("invisible");
    		document.getElementById("secb").classList.remove("invisible");
    		document.getElementById("secbw").classList.remove("invisible");

    		document.getElementById("seccparent").classList.remove("invisible");
    		document.getElementById("secc").classList.remove("invisible");
    		document.getElementById("seccw").classList.remove("invisible");

    		document.getElementById("secdparent").classList.remove("invisible");
    		document.getElementById("secd").classList.remove("invisible");
    		document.getElementById("secdw").classList.remove("invisible");

			} 
			else if(string=="regionB") {
				document.getElementById("bID").innerHTML = ' <a data-toggle="tooltip" data-placement="bottom" title="8% Population EU - High Land and Green Water (rain) availability per capita - High Blue Water (surface and groundwater) availability per capita"><b style="color:white;">REGION B</b></a>';

				document.getElementById("secbparent").classList.add("invisible");
    		document.getElementById("secb").classList.add("invisible");
    		document.getElementById("secbw").classList.add("invisible");

    		document.getElementById("secaparent").classList.remove("invisible");
    		document.getElementById("seca").classList.remove("invisible");
    		document.getElementById("secaw").classList.remove("invisible");

    		document.getElementById("seccparent").classList.remove("invisible");
    		document.getElementById("secc").classList.remove("invisible");
    		document.getElementById("seccw").classList.remove("invisible");

    		document.getElementById("secdparent").classList.remove("invisible");
    		document.getElementById("secd").classList.remove("invisible");
    		document.getElementById("secdw").classList.remove("invisible");

			} 
			else if(string=="regionC"){
				document.getElementById("bID").innerHTML = ' <a data-toggle="tooltip" data-placement="bottom" title="46% Population EU - Medium Land and Green Water (rain) availability per capita - Low Blue Water (surface and groundwater) availability per capita"><b style="color:white;">REGION C</b></a>';
				document.getElementById("seccparent").classList.add("invisible");
    		document.getElementById("secc").classList.add("invisible");
    		document.getElementById("seccw").classList.add("invisible");

    		document.getElementById("secaparent").classList.remove("invisible");
    		document.getElementById("seca").classList.remove("invisible");
    		document.getElementById("secaw").classList.remove("invisible");

    		document.getElementById("secbparent").classList.remove("invisible");
    		document.getElementById("secb").classList.remove("invisible");
    		document.getElementById("secbw").classList.remove("invisible");

    		document.getElementById("secdparent").classList.remove("invisible");
    		document.getElementById("secd").classList.remove("invisible");
    		document.getElementById("secdw").classList.remove("invisible");

			} 
			else if(string=="regionD"){
				document.getElementById("bID").innerHTML = ' <a data-toggle="tooltip" data-placement="bottom" title="34% Population EU - Low Land and Green Water (rain) availability per capita - Low Blue Water (surface and groundwater) availability per capita"><b style="color:white;">REGION D</b></a>';

				document.getElementById("secdparent").classList.add("invisible");
    		document.getElementById("secd").classList.add("invisible");
    		document.getElementById("secdw").classList.add("invisible");

    		document.getElementById("secaparent").classList.remove("invisible");
    		document.getElementById("seca").classList.remove("invisible");
    		document.getElementById("secaw").classList.remove("invisible");

    		document.getElementById("seccparent").classList.remove("invisible");
    		document.getElementById("secc").classList.remove("invisible");
    		document.getElementById("seccw").classList.remove("invisible");

    		document.getElementById("secbparent").classList.remove("invisible");
    		document.getElementById("secb").classList.remove("invisible");
    		document.getElementById("secbw").classList.remove("invisible");
			}

		 //	document.getElementById("bID").innerHTML='<b style="color:white;">'+RegionStart.toUpperCase() +'</b>';
			//checkregionstart.checked = true;RegionStart.toUpperCase()
		 }
	 	else {
			checkregionstart.style.visibility = "hidden";
     	}
	}
	else {}
		var checkregion = document.querySelector('input[name="region"]:checked');
		if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) {
			document.getElementById("planta").disabled=true;
			document.getElementById("meata").disabled=true;
			document.getElementById("diarya").disabled=true;
			document.getElementById("fossila").disabled=true;
			document.getElementById("biofuela").disabled=true;
			document.getElementById("ela").disabled=true;
			
			// Abilitazione dei tasti World bloccati eventualmente dall'invio di una richiesta eseguita dalle altre regioni
			document.getElementById("plantworld").disabled=false;
			document.getElementById("meatworld").disabled=false;
			document.getElementById("diaryworld").disabled=false;
			document.getElementById("fossilworld").disabled=false;
			document.getElementById("biofuelworld").disabled=false;
			document.getElementById("elworld").disabled=false;

			var regionA = localStorage.getItem("regionADataInput");
			regionA = JSON.parse(regionA);

			document.getElementById("A8_f").value = regionA['daysp'];
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = regionA['intakeparse'];
			document.getElementById("f_D5").value = regionA['wasteparse'];
			document.getElementById("f_C6").value = regionA['vegparse'];
			document.getElementById("f_C7").value = regionA['vegeparse'];
			document.getElementById("f_C8").value = regionA['meatparse'];
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = regionA['fip'];
			document.getElementById("E31").value = regionA['fim'];
			document.getElementById("E32").value = regionA['fid'];
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = regionA['Gap_Yeld_parse'];
			document.getElementById("G15").value = regionA['Mulching_parse'];
			document.getElementById("G19").value = regionA['Full_Deficit_parse'];
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = regionA['windp'];
			document.getElementById("em_J22").value = regionA['solarp'];
			document.getElementById("em_J23").value = regionA['hydrop'];
			document.getElementById("em_J24").value = regionA['biofuelp'];
			document.getElementById("em_J25").value = regionA['nuclearp'];
			document.getElementById("em_J26").value = regionA['fuelp'];
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = regionA['red_ind_parse'];
			document.getElementById("e_N6").value = regionA['red_tr_parse'];
			document.getElementById("e_N7").value = regionA['red_ser_parse'];
			document.getElementById("e_N8").value = regionA['red_house'];
			document.getElementById("e_N11").value = regionA['el_tr_parse'];
			document.getElementById("e_N12").value = regionA['fuel_house_parse'];
			document.getElementById("e_N13").value = regionA['bio_fr_parse'];
			document.getElementById("L30").value = regionA['fossilf_parse'];
			document.getElementById("L31").value = regionA['biofuels_parse'];
			document.getElementById("L32").value = regionA['elec_parse'];
		}

	//---------------------------------------

		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
			document.getElementById("plantb").disabled=true;
			document.getElementById("meatb").disabled=true;
			document.getElementById("diaryb").disabled=true;
			document.getElementById("fossilb").disabled=true;
			document.getElementById("biofuelb").disabled=true;
			document.getElementById("elb").disabled=true;

			// Abilitazione dei tasti World bloccati eventualmente dall'invio di una richiesta eseguita dalle altre regioni
			document.getElementById("plantworld").disabled=false;
			document.getElementById("meatworld").disabled=false;
			document.getElementById("diaryworld").disabled=false;
			document.getElementById("fossilworld").disabled=false;
			document.getElementById("biofuelworld").disabled=false;
			document.getElementById("elworld").disabled=false;

			var regionB = localStorage.getItem("regionBDataInput");
			regionB = JSON.parse(regionB);

			document.getElementById("A8_f").value = regionB['daysp'];
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = regionB['intakeparse'];
			document.getElementById("f_D5").value = regionB['wasteparse'];
			document.getElementById("f_C6").value = regionB['vegparse'];
			document.getElementById("f_C7").value = regionB['vegeparse'];
			document.getElementById("f_C8").value = regionB['meatparse'];
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = regionB['fip'];
			document.getElementById("E31").value = regionB['fim'];
			document.getElementById("E32").value = regionB['fid'];
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = regionB['Gap_Yeld_parse'];
			document.getElementById("G15").value = regionB['Mulching_parse'];
			document.getElementById("G19").value = regionB['Full_Deficit_parse'];
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = regionB['windp'];
			document.getElementById("em_J22").value = regionB['solarp'];
			document.getElementById("em_J23").value = regionB['hydrop'];
			document.getElementById("em_J24").value = regionB['biofuelp'];
			document.getElementById("em_J25").value = regionB['nuclearp'];
			document.getElementById("em_J26").value = regionB['fuelp'];
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = regionB['red_ind_parse'];
			document.getElementById("e_N6").value = regionB['red_tr_parse'];
			document.getElementById("e_N7").value = regionB['red_ser_parse'];
			document.getElementById("e_N8").value = regionB['red_house'];
			document.getElementById("e_N11").value = regionB['el_tr_parse'];
			document.getElementById("e_N12").value = regionB['fuel_house_parse'];
			document.getElementById("e_N13").value = regionB['bio_fr_parse'];
			document.getElementById("L30").value = regionB['fossilf_parse'];
			document.getElementById("L31").value = regionB['biofuels_parse'];
			document.getElementById("L32").value = regionB['elec_parse'];

		}


		//---------------------------------

		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
			document.getElementById("plantc").disabled=true;
			document.getElementById("meatc").disabled=true;
			document.getElementById("diaryc").disabled=true;
			document.getElementById("fossilc").disabled=true;
			document.getElementById("biofuelc").disabled=true;
			document.getElementById("elc").disabled=true;
			
			// Abilitazione dei tasti World bloccati eventualmente dall'invio di una richiesta eseguita dalle altre regioni
			document.getElementById("plantworld").disabled=false;
			document.getElementById("meatworld").disabled=false;
			document.getElementById("diaryworld").disabled=false;
			document.getElementById("fossilworld").disabled=false;
			document.getElementById("biofuelworld").disabled=false;
			document.getElementById("elworld").disabled=false;
			
			var regionC = localStorage.getItem("regionCDataInput");
			regionC = JSON.parse(regionC);


			document.getElementById("A8_f").value = regionC['daysp'];
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = regionC['intakeparse'];
			document.getElementById("f_D5").value = regionC['wasteparse'];
			document.getElementById("f_C6").value = regionC['vegparse'];
			document.getElementById("f_C7").value = regionC['vegeparse'];
			document.getElementById("f_C8").value = regionC['meatparse'];
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = regionC['fip'];
			document.getElementById("E31").value = regionC['fim'];
			document.getElementById("E32").value = regionC['fid'];
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = regionC['Gap_Yeld_parse'];
			document.getElementById("G15").value = regionC['Mulching_parse'];
			document.getElementById("G19").value = regionC['Full_Deficit_parse'];
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = regionC['windp'];
			document.getElementById("em_J22").value = regionC['solarp'];
			document.getElementById("em_J23").value = regionC['hydrop'];
			document.getElementById("em_J24").value = regionC['biofuelp'];
			document.getElementById("em_J25").value = regionC['nuclearp'];
			document.getElementById("em_J26").value = regionC['fuelp'];
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = regionC['red_ind_parse'];
			document.getElementById("e_N6").value = regionC['red_tr_parse'];
			document.getElementById("e_N7").value = regionC['red_ser_parse'];
			document.getElementById("e_N8").value = regionC['red_house'];
			document.getElementById("e_N11").value = regionC['el_tr_parse'];
			document.getElementById("e_N12").value = regionC['fuel_house_parse'];
			document.getElementById("e_N13").value = regionC['bio_fr_parse'];
			document.getElementById("L30").value = regionC['fossilf_parse'];
			document.getElementById("L31").value = regionC['biofuels_parse'];
			document.getElementById("L32").value = regionC['elec_parse'];
		}


		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
			document.getElementById("plantd").disabled=true;
			document.getElementById("meatd").disabled=true;
			document.getElementById("diaryd").disabled=true;
			document.getElementById("fossild").disabled=true;
			document.getElementById("biofueld").disabled=true;
			document.getElementById("eld").disabled=true;
			
			// Abilitazione dei tasti World bloccati eventualmente dall'invio di una richiesta eseguita dalle altre regioni
			document.getElementById("plantworld").disabled=false;
			document.getElementById("meatworld").disabled=false;
			document.getElementById("diaryworld").disabled=false;
			document.getElementById("fossilworld").disabled=false;
			document.getElementById("biofuelworld").disabled=false;
			document.getElementById("elworld").disabled=false;
			
			var regionD = localStorage.getItem("regionDDataInput");
			regionD = JSON.parse(regionD);

			document.getElementById("A8_f").value = regionD['daysp'];
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = regionD['intakeparse'];
			document.getElementById("f_D5").value = regionD['wasteparse'];
			document.getElementById("f_C6").value = regionD['vegparse'];
			document.getElementById("f_C7").value = regionD['vegeparse'];
			document.getElementById("f_C8").value = regionD['meatparse'];
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = regionD['fip'];
			document.getElementById("E31").value = regionD['fim'];
			document.getElementById("E32").value = regionD['fid'];
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = regionD['Gap_Yeld_parse'];
			document.getElementById("G15").value = regionD['Mulching_parse'];
			document.getElementById("G19").value = regionD['Full_Deficit_parse'];
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = regionD['windp'];
			document.getElementById("em_J22").value = regionD['solarp'];
			document.getElementById("em_J23").value = regionD['hydrop'];
			document.getElementById("em_J24").value = regionD['biofuelp'];
			document.getElementById("em_J25").value = regionD['nuclearp'];
			document.getElementById("em_J26").value = regionD['fuelp'];
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = regionD['red_ind_parse'];
			document.getElementById("e_N6").value = regionD['red_tr_parse'];
			document.getElementById("e_N7").value = regionD['red_ser_parse'];
			document.getElementById("e_N8").value = regionD['red_house'];
			document.getElementById("e_N11").value = regionD['el_tr_parse'];
			document.getElementById("e_N12").value = regionD['fuel_house_parse'];
			document.getElementById("e_N13").value = regionD['bio_fr_parse'];
			document.getElementById("L30").value = regionD['fossilf_parse'];
			document.getElementById("L31").value = regionD['biofuels_parse'];
			document.getElementById("L32").value = regionD['elec_parse'];
		} else {}
}
