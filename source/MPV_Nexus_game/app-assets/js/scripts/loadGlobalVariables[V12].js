//alert("sono dentro loadGlobal");

window.addEventListener("load", function () {
	loadGlobalVariables();
});

var RegionAData ="";
var RegionBData = "";
var RegionCData = "";
var RegionDData = "";

function loadGlobalVariables() {
	//alert("STO ESEGUENDO LOADGLOBALVARIABLES");
	var player = localStorage.getItem("User");
	document.getElementById("nomeplayer").innerHTML = ""+player+"";
	var Version = localStorage.getItem("GameVersion");
	var RegionStart = localStorage.getItem("RegionLogin");
	//alert("REGION START"+RegionStart);
	
	var checkregionstart = document.getElementById(RegionStart); 
	console.log("USER: "+player+" VERSION: "+Version+" REGION: "+RegionStart);
	var label = document.getElementById("lab"+RegionStart);
	//--- SCELTA 1: Seleziono SP1 e la mia regione.
	if(Version=="SP1") {
		var string = String(RegionStart);
		if (string="regionA") {
	 	//document.getElementById("bID").innerHTML='<b style="color:white;">'+RegionStart.toUpperCase() +'</b>';
		document.getElementById("bID").innerHTML='<b style="color:white;">REGION A</b>';

		} else if(string="regionB") {
			document.getElementById("bID").innerHTML='<b style="color:white;">REGION B</b>';

			
		} else if(string = "regionC"){
			document.getElementById("bID").innerHTML='<b style="color:white;">REGION C</b>';

			
		} else if(string="regionD"){
			document.getElementById("bID").innerHTML='<b style="color:white;">REGION D</b>';

			
		}

		//document.getElementById("bID").innerHTML='<b style="color:white;">REGION '+checkregionstart.innerHTML+'</b>';		
		//alert('REGION '+checkregionstart.innerHTML);
		 if(checkregionstart.getAttribute("id") == RegionStart) {
		 		document.getElementById("regionA").disabled=true;
		 		document.getElementById("regionB").disabled=true;
		 		document.getElementById("regionC").disabled=true;
		 		document.getElementById("regionD").disabled=true;
		 		var a= document.getElementById("regionA");
		 		var b=document.getElementById("regionB");
		 		var c=document.getElementById("regionC");
		 		var d=document.getElementById("regionD");
		 		
		 		if(label.classList.item(2)==RegionStart) {
					label.classList.remove("nonattivo");
			 		label.classList.add("active");
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
		 }
	
	 if (Version=="SP2") {
		 document.getElementById("labregionA").classList.remove("nonattivo");
		 document.getElementById("labregionB").classList.remove("nonattivo");
		 document.getElementById("labregionC").classList.remove("nonattivo");
		 document.getElementById("labregionD").classList.remove("nonattivo");
		 if(checkregionstart.getAttribute("id") == RegionStart) {
		 	document.getElementById("regionA").checked=false;
		 	document.getElementById("regionB").checked=false;
		 	document.getElementById("regionC").checked=false;
		 	document.getElementById("regionD").checked=false;
		 	document.getElementById(RegionStart).checked=true;
		 	//checkregionstart.setAttribute("class", "active");
		 	if(label.classList.item(2)==RegionStart) {
				 label.classList.remove("nonattivo");
				 label.classList.add("active");
			 }
			var string = String(RegionStart);
			if (string="regionA") {
		 	//document.getElementById("bID").innerHTML='<b style="color:white;">'+RegionStart.toUpperCase() +'</b>';
			document.getElementById("bID").innerHTML='<b style="color:white;">REGION A</b>';

			} else if(tring="regionB") {
				document.getElementById("bID").innerHTML='<b style="color:white;">REGION B</b>';	
			} else if(string = "regionC"){
				document.getElementById("bID").innerHTML='<b style="color:white;">REGION C</b>';
			} else if(string="regionD"){
				document.getElementById("bID").innerHTML='<b style="color:white;">REGION D</b>';
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