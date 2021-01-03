	var truenumber = 0;
	var x = 0;
	var player_id="";
	var json_trade_data = "";
	var region_stream_trade = "";
	var Cat="";
	var Region_start = "";
	var Dati_From_Fetch="";
	var containerData = "";
	var containerRegionPlayer = "";
	var containerRegionAddebt = "";
	var transmission = "";
	var CodePlayer = "";
	
	var stanza_c = "";
	var idp_c="";
	var region_c ="";
	var id_riga = "";
	
	var whoCallA ="";
	var xA ="";
	var yA ="";
	var valueA ="";
	var buttonA="";
	var regionfrA ="";
	var regiontoA ="";
	var whoCallA ="";
	


function Quest(tipo,valore,cat,code,version,stanza){
	Freeze();
	var role = version;
	
	if(cat=='(Source B)'){
		cat = 'B';	
	}else if(cat=='(Source A)'){
		cat = 'A';
	}else if(cat=='(Source C)'){
		cat = 'C';
	}else if(cat=='(Source D)'){
		cat = 'D';
	}else if(cat=='(Source WORLD)'){
		cat = 'W';
	}else if(cat=='(Source World)'){
		cat = 'W';
	}
	
	vreg = Region_start;
	vreg = Region_start.replace("region","");
	
	var temp = tipo.replace(/ /g, '_');	
	var nomediv = "quest_"+temp;
	var trading = document.getElementById("box_trading").innerHTML;
	if(trading=="(trading is closed)"){
var inviar = "<span style=\"float:right;\">&nbsp;&nbsp;&nbsp;<a href=\"javascript:void(0);\"  style=\"color:red;text-align:right;font-weight:bold;\" > SESSION CLOSED </a></span>";
document.getElementById(nomediv).innerHTML=inviar;

	} else {
	
	if(cat=='W' || role=='SP1'){	
    document.getElementById(nomediv).innerHTML="";	
	}else{
		
	var inviar = "<span style=\"float:right;\">&nbsp;&nbsp;&nbsp;<a href=\"javascript:void(0);\"  style=\"color:red;text-align:right;font-weight:bold;\" onclick=\"updateData();TrueRequest('"+tipo+"');SendRequest('"+tipo+"','"+valore+"','"+cat+"','"+vreg+"','"+code+"',"+truenumber+");\"> CLICK & SEND REQUEST TO "+cat+" <i class=\"bx bx-send\" style=\"font-size:11px;\"></i></a></span>";
	
	document.getElementById(nomediv).innerHTML=inviar;
    }
}
}



function WT(code){
	
	  var url = "WT.jsp?Id="+code;

		var xhttp= new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
	    document.getElementById('WT').innerHTML = this.responseText;
		}else{
	//   document.getElementById('WT').innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
	    }
		
		
		
		};
		xhttp.open("GET", url, true);
	    xhttp.send();
		
		
}



function VMRequest(region,codice,stanza,tipo){
	 //alert("Region: "+region);
	 //alert("Codice: "+codice);
	 //alert("Tipo: "+tipo);
	 
	var idi="";var quest="";var cte="";
    var url = "VMRequest.jsp?Region="+region+"&Id="+codice+"&Tipo="+tipo+"&Stanza="+stanza;
  
    
    if(tipo=='Mf'){
    	idi='E31';
    	quest='quest_meat_and_fish';
    	cte='meat and fish';
    }else if(tipo=='Pb'){
    	idi = 'E30';
    	quest='quest_plant_based';
    	cte='plant based';
    }else if(tipo=='De'){
    	idi = 'E32';
    	quest='quest_diary_and_eggs';
    	cte='diary and eggs';
    }else if(tipo=='Ff'){
    	idi = 'L30';
    	quest='quest_fossil_fuels';
    	cte='fossil fuels';
    }else if(tipo=='Bf'){
    	idi = 'L31';
    	quest='quest_biofuels';
    	cte='biofuels';
    }else if(tipo=='Ec'){
    	idi = 'L32';
    	quest='quest_electricity';
    	cte='electricity';
    }
	
	
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {	
		     var esito = this.responseText;
             esito = esito.replace(/^\s+|\s+$/gm,'');
             //alert("Esito: "+esito);
             if(esito=='si'){
    	     document.getElementById(idi).disabled = false;
    	     document.getElementById(quest).innerHTML = "";
    
             }else{
			 }
		}else{
			
		}
	};
	xhttp.open("GET", url, true);
    xhttp.send();
    
    
}





function Clean(tipo,version){
	
	var role = version;
	
	if(role=='SP1'){		
	}else{
	var temp = tipo.replace(/ /g, '_');	
	var nomediv = "quest_"+temp;
	document.getElementById(nomediv).innerHTML="";
    }
}


var region = "";

var cat = "";


function SendRequest(tipo,valore,cat,region,code,x){
	//alert("3 - Sono dentro Send Request");
	
	var idi="";
	var x = truenumber;
	var from_stream = "";
	Region_start = region;
	region = region;
	cat = cat;
	Cat = cat;
	
	var url = 'SR.jsp?Tipo='+tipo+'&Valore='+valore+'&Cat='+cat+'&Region='+region+'&Reale='+x;
	//alert("Valore di Truerequest: "+x);
	if(tipo=='meat and fish'){
    	idi='E31';
    	
    }else if(tipo=='plant based'){
    	idi = 'E30';
    	
    }else if(tipo=='diary and eggs'){
    	idi = 'E32';
    	
    }else if(tipo=='fossil fuels'){
    	idi = 'L30';
    	
    }else if(tipo=='biofuels'){
    	idi = 'L31';

    }else if(tipo=='electricity'){
    	idi = 'L32';
 
    }
	//alert("Tip: "+tipo);
	//alert("IDI: "+idi);
	//var nomediv = "quest_"+region+"_"+temp;
	var temp = tipo.replace(/ /g, '_');
	var nomediv = "quest_"+temp;	
	
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {	
        	document.getElementById(nomediv).innerHTML = this.responseText;
        	document.getElementById(idi).disabled = true;
        	// La seguente funziona si trova dentro susteinable-limits.js
        	SendDataToDBOnClick();
		}
		else{
			document.getElementById(nomediv).innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
		}
	};
	xhttp.open("GET", url, true);
    xhttp.send();
    
    //alert("Fine Send Request");
}




function TrueRequest(tipo) {

	  var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
 	 var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked'); 
   var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked'); 	
	  var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked'); 
  	  var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked'); 
   	 var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked'); 


 	  if((tipo=="plant based")&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='planta')) {
		 truenumber =plantGlobalA;
			document.getElementById("planta").disabled=true;
			document.getElementById("plantb").disabled=true;
			document.getElementById("plantc").disabled=true;
			document.getElementById("plantd").disabled=true;
			document.getElementById("plantworld").disabled=true;

	}
	  else if((tipo=="plant based")&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')) {
		 truenumber =plantGlobalB;
			document.getElementById("planta").disabled=true;
			document.getElementById("plantb").disabled=true;
			document.getElementById("plantc").disabled=true;
			document.getElementById("plantd").disabled=true;
			document.getElementById("plantworld").disabled=true;
	}
	  else if((tipo=="plant based")&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')) {
		 truenumber =plantGlobalA;
			document.getElementById("planta").disabled=true;
			document.getElementById("plantb").disabled=true;
			document.getElementById("plantc").disabled=true;
			document.getElementById("plantd").disabled=true;
			document.getElementById("plantworld").disabled=true;
	}
	  else if((tipo=="plant based")&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')) {
		 truenumber =plantGlobalA;
			document.getElementById("planta").disabled=true;
			document.getElementById("plantb").disabled=true;
			document.getElementById("plantc").disabled=true;
			document.getElementById("plantd").disabled=true;
			document.getElementById("plantworld").disabled=true;
	  }
  	else if((tipo=="meat and fish")&&(checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meata')) { 
		 truenumber =meatGlobalA;
		 document.getElementById("meata").disabled=true;
			document.getElementById("meatb").disabled=true;
			document.getElementById("meatc").disabled=true;
			document.getElementById("meatd").disabled=true;
			document.getElementById("meatworld").disabled=true;
  	}
  	else if((tipo=="meat and fish")&&(checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatb')) { 
		 truenumber =meatGlobalB;
		 document.getElementById("meata").disabled=true;
			document.getElementById("meatb").disabled=true;
			document.getElementById("meatc").disabled=true;
			document.getElementById("meatd").disabled=true;
			document.getElementById("meatworld").disabled=true;
	}
  	else if((tipo=="meat and fish")&&(checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatc')) { 
		 truenumber =meatGlobalC;
		 document.getElementById("meata").disabled=true;
			document.getElementById("meatb").disabled=true;
			document.getElementById("meatc").disabled=true;
			document.getElementById("meatd").disabled=true;
			document.getElementById("meatworld").disabled=true;
	}
  	else if((tipo=="meat and fish")&&(checkRadioMeat != null)&&(checkRadioMeat.getAttribute('id')=='meatd')) { 
		 truenumber =meatGlobalD;
		 document.getElementById("meata").disabled=true;
			document.getElementById("meatb").disabled=true;
			document.getElementById("meatc").disabled=true;
			document.getElementById("meatd").disabled=true;
			document.getElementById("meatworld").disabled=true;
	}
  	else if((tipo=="diary and eggs")&&(checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diarya')) { 
		 truenumber =diaryGlobalA;
		 document.getElementById("diarya").disabled=true;
			document.getElementById("diaryb").disabled=true;
			document.getElementById("diaryc").disabled=true;
			document.getElementById("diaryd").disabled=true;
			document.getElementById("diaryworld").disabled=true;
	}
  	else if((tipo=="diary and eggs")&&(checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryb')) { 
		 truenumber =diaryGlobalB;
		 document.getElementById("diarya").disabled=true;
			document.getElementById("diaryb").disabled=true;
			document.getElementById("diaryc").disabled=true;
			document.getElementById("diaryd").disabled=true;
			document.getElementById("diaryworld").disabled=true;
  	}
  	else if((tipo=="diary and eggs")&&(checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryc')) { 
		 truenumber =diaryGlobalC;
		 document.getElementById("diarya").disabled=true;
			document.getElementById("diaryb").disabled=true;
			document.getElementById("diaryc").disabled=true;
			document.getElementById("diaryd").disabled=true;
			document.getElementById("diaryworld").disabled=true;
  	}
  	else if((tipo=="diary and eggs")&&(checkRadioDiary != null)&&(checkRadioDiary.getAttribute('id')=='diaryd')) { 
		 truenumber =diaryGlobalD;
		 document.getElementById("diarya").disabled=true;
			document.getElementById("diaryb").disabled=true;
			document.getElementById("diaryc").disabled=true;
			document.getElementById("diaryd").disabled=true;
			document.getElementById("diaryworld").disabled=true;
  	}
	  else if((tipo=="fossil fuels")&&(checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossila')) {
		 truenumber =fossilGlobalA;
		 document.getElementById("fossila").disabled=true;
			document.getElementById("fossilb").disabled=true;
			document.getElementById("fossilc").disabled=true;
			document.getElementById("fossild").disabled=true;
			document.getElementById("fossilworld").disabled=true;
	  }
	  else if((tipo=="fossil fuels")&&(checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilb')) {
		 truenumber =fossilGlobalB;
		 document.getElementById("fossila").disabled=true;
			document.getElementById("fossilb").disabled=true;
			document.getElementById("fossilc").disabled=true;
			document.getElementById("fossild").disabled=true;
			document.getElementById("fossilworld").disabled=true;
	  }
  	  else if((tipo=="fossil fuels")&&(checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossilc')) {
		 truenumber =fossilGlobalC;
		 document.getElementById("fossila").disabled=true;
			document.getElementById("fossilb").disabled=true;
			document.getElementById("fossilc").disabled=true;
			document.getElementById("fossild").disabled=true;
			document.getElementById("fossilworld").disabled=true;
  	  }
  	  else if((tipo=="fossil fuels")&&(checkRadioFossil != null)&&(checkRadioFossil.getAttribute('id')=='fossild')) {
		 truenumber =fossilGlobalD;
		 document.getElementById("fossila").disabled=true;
			document.getElementById("fossilb").disabled=true;
			document.getElementById("fossilc").disabled=true;
			document.getElementById("fossild").disabled=true;
			document.getElementById("fossilworld").disabled=true;
	}
	else 	 if((tipo=="biofuels")&&(checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuela')) {
		 truenumber =bioGlobalA;
		 document.getElementById("biofuela").disabled=true;
			document.getElementById("biofuelb").disabled=true;
			document.getElementById("biofuelc").disabled=true;
			document.getElementById("biofueld").disabled=true;
			document.getElementById("biofuelworld").disabled=true;
	}
	else 	 if((tipo=="biofuels")&&(checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelb')) {
		 truenumber =bioGlobalB;
		 document.getElementById("biofuela").disabled=true;
			document.getElementById("biofuelb").disabled=true;
			document.getElementById("biofuelc").disabled=true;
			document.getElementById("biofueld").disabled=true;
			document.getElementById("biofuelworld").disabled=true;
	}
	else 	 if((tipo=="biofuels")&&(checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofuelc')) {
		 truenumber =bioGlobalC;
		 document.getElementById("biofuela").disabled=true;
			document.getElementById("biofuelb").disabled=true;
			document.getElementById("biofuelc").disabled=true;
			document.getElementById("biofueld").disabled=true;
			document.getElementById("biofuelworld").disabled=true;
	}
	else 	 if((tipo=="biofuels")&&(checkRadioBio != null)&&(checkRadioBio.getAttribute('id')=='biofueld')) {
		 truenumber =bioGlobalD;
		 document.getElementById("biofuela").disabled=true;
			document.getElementById("biofuelb").disabled=true;
			document.getElementById("biofuelc").disabled=true;
			document.getElementById("biofueld").disabled=true;
			document.getElementById("biofuelworld").disabled=true;
	}
	  else	if((tipo=="electricity")&&(checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='ela')) {
		 truenumber =elecGlobalA;
		 document.getElementById("ela").disabled=true;
			document.getElementById("elb").disabled=true;
			document.getElementById("elc").disabled=true;
			document.getElementById("eld").disabled=true;
			document.getElementById("elworld").disabled=true;
	}
		  else	if((tipo=="electricity")&&(checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elb')) {
		 truenumber =elecGlobalB;
		 document.getElementById("ela").disabled=true;
			document.getElementById("elb").disabled=true;
			document.getElementById("elc").disabled=true;
			document.getElementById("eld").disabled=true;
			document.getElementById("elworld").disabled=true;
	}
  		  else	if((tipo=="electricity")&&(checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='elc')) {
		 truenumber =elecGlobalC;
		 document.getElementById("ela").disabled=true;
			document.getElementById("elb").disabled=true;
			document.getElementById("elc").disabled=true;
			document.getElementById("eld").disabled=true;
			document.getElementById("elworld").disabled=true;
	}
  		  else	if((tipo=="electricity")&&(checkRadioElec != null)&&(checkRadioElec.getAttribute('id')=='eld')) {
		 truenumber =elecGlobalD;
		 document.getElementById("ela").disabled=true;
			document.getElementById("elb").disabled=true;
			document.getElementById("elc").disabled=true;
			document.getElementById("eld").disabled=true;
			document.getElementById("elworld").disabled=true;
	}
	
 	
 		//alert ("selezionato: " +truenumber);
 		truenumber = Math.round(truenumber);
 
 
}

function EnableButtons(From, Button) {

	  var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked'); 
	 var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked'); 
 var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked'); 	
	  var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked'); 
	  var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked'); 
 	 var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked'); 
 	var checkregiong = document.querySelector('input[name="region"]:checked');


	  if(Button== "plant based") {
			if((checkregiong != null)&&(checkregiong.getAttribute('id')=='region'+From)){
			document.getElementById("planta").disabled=false;
			document.getElementById("plantb").disabled=false;
			document.getElementById("plantc").disabled=false;
			document.getElementById("plantd").disabled=false;
			document.getElementById("plantworld").disabled=false;
	  }

	}
	 
	else if(Button== "meat and fish"){ 
		if((checkregiong != null)&&(checkregiong.getAttribute('id')=='region'+From)){
		 document.getElementById("meata").disabled=false;
			document.getElementById("meatb").disabled=false;
			document.getElementById("meatc").disabled=false;
			document.getElementById("meatd").disabled=false;
			document.getElementById("meatworld").disabled=false;
		}
	}
	
	else if(Button== "mdiary and eggs"){ 
		if((checkregiong != null)&&(checkregiong.getAttribute('id')=='region'+From)){
		 document.getElementById("diarya").disabled=false;
			document.getElementById("diaryb").disabled=false;
			document.getElementById("diaryc").disabled=false;
			document.getElementById("diaryd").disabled=false;
			document.getElementById("diaryworld").disabled=false;
	}
	}
	
	else if(Button== "fossil fuels"){ 
		if((checkregiong != null)&&(checkregiong.getAttribute('id')=='region'+From)){
		 document.getElementById("fossila").disabled=false;
			document.getElementById("fossilb").disabled=false;
			document.getElementById("fossilc").disabled=false;
			document.getElementById("fossild").disabled=false;
			document.getElementById("fossilworld").disabled=false;
	  }
	}

	else if(Button== "biofuels"){ 
		if((checkregiong != null)&&(checkregiong.getAttribute('id')=='region'+From)){		 document.getElementById("biofuela").disabled=false;
			document.getElementById("biofuelb").disabled=false;
			document.getElementById("biofuelc").disabled=false;
			document.getElementById("biofueld").disabled=false;
			document.getElementById("biofuelworld").disabled=false;
	}
	}

	else if(Button== "electricity"){ 
		if((checkregiong != null)&&(checkregiong.getAttribute('id')=='region'+From)){		 document.getElementById("ela").disabled=false;
			document.getElementById("elb").disabled=false;
			document.getElementById("elc").disabled=false;
			document.getElementById("eld").disabled=false;
			document.getElementById("elworld").disabled=false;
	}
	} else {}

	
  

}

/*function MyTrade(region,codice){

    var url_ = "Auth.jsp?Region="+region+"&Id="+codice;
 
	var xhttp_ = new XMLHttpRequest();
	xhttp_.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    document.getElementById('tradecenter').innerHTML = this.responseText;
    
	}else{
		   document.getElementById('tradecenter').innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
	   }
	
	
	
	};
	xhttp_.open("GET", url_, true);
    xhttp_.send();
}*/


function MyTradeMulti(region,codice,stanza){
	//alert("STANZA "+stanza);
	localStorage.setItem("region_var", region);
	region_c = localStorage.getItem("region_var");
	//alert("REGION: "+region_c);

	localStorage.setItem("codice_var", codice);
	idp_c = localStorage.getItem("codice_var");
	//alert("GIOCATORE: "+idp_c);

	localStorage.setItem("stanza_var", stanza);
	stanza_c = localStorage.getItem("stanza_var");
	//alert("STANZA: "+stanza_c);

	
    var url_ = "AuthMulti.jsp?Region="+region_c+"&Id="+idp_c+"&room="+stanza_c;
 
	var xhttp_ = new XMLHttpRequest();
	xhttp_.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    document.getElementById('tradecenter').innerHTML = this.responseText;
  //  alert("REPLY: "+this.responseText);
    document.getElementById('tradecenter').className = "show";
    
	}else{
		   //document.getElementById('tradecenter').innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
	   }
	
	
	
	};
	xhttp_.open("GET", url_, true);
    xhttp_.send();  
}


/*function AggiornaRequestMulti(region_c,idp_c,stanza_c){
	   
    //player_id = code;
    var url = "AuthMulti.jsp?Region="+region_c+"&Id="+idp_c+"&room="+stanza_c;

	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    document.getElementById('tradecenter').innerHTML = this.responseText;
	}else{
    document.getElementById('tradecenter').innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
    }
	
	
	
	};
	xhttp.open("GET", url, true);
    xhttp.send();
	
	
	
}*/


function CloseNote(){
	document.getElementById('tradecenter').className = "";
	}


function Counter(region_c, stanza_c){
	//alert("SONO IN COUNTER REGION");
	var url_ = "Counter.jsp?Region="+region_c+"&room="+stanza_c;
 
	var xhttp_ = new XMLHttpRequest();
	xhttp_.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    document.getElementById('counter_not').innerHTML = this.responseText;
    
	}else{
		   //document.getElementById('counter_not').innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
	   }
	
	
	
	};
	xhttp_.open("GET", url_, true);
    xhttp_.send();   
}

/*
setInterval(function Effective_Count(region_c,idp_c,stanza_c) {
	 var url_ = "AuthMulti_count.jsp?Region="+region_c+"&Id="+idp_c+"&room="+stanza_c;
	 
		var xhttp_ = new XMLHttpRequest();
		xhttp_.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
	    document.getElementById('counter_notification').innerHTML = this.responseText;
	    
		}else{
			   document.getElementById('counter_notification').innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
		   }
		
		
		
		};
		xhttp_.open("GET", url_, true);
	    xhttp_.send();
	    
	  
}, 6000);*/

/*function VRequest(region,codice,tipo){
	 //alert("Region: "+region);
	 //alert("Codice: "+codice);
	 //alert("Tipo: "+tipo);
	 
	var idi="";var quest="";var cte="";
    var url__ = "VRequest.jsp?Region="+region+"&Id="+codice+"&Tipo="+tipo;
  
    
    if(tipo=='Mf'){
    	idi='E31';
    	quest='quest_meat_and_fish';
    	cte='meat and fish';
    }else if(tipo=='Pb'){
    	idi = 'E30';
    	quest='quest_plant_based';
    	cte='plant based';
    }else if(tipo=='De'){
    	idi = 'E32';
    	quest='quest_diary_and_eggs';
    	cte='diary and eggs';
    }else if(tipo=='Ff'){
    	idi = 'L30';
    	quest='quest_fossil_fuels';
    	cte='fossil fuels';
    }else if(tipo=='Bf'){
    	idi = 'L31';
    	quest='quest_biofuels';
    	cte='biofuels';
    }else if(tipo=='Ec'){
    	idi = 'L32';
    	quest='quest_electricity';
    	cte='electricity';
    }
  
    //alert("Id: "+idi);
    //alert("Quest: "+quest);
	var xhttp__ = new XMLHttpRequest();
	xhttp__.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    var esito__ = this.responseText;
    esito__ = esito__.replace(/^\s+|\s+$/gm,'');
    //alert("Esito: "+esito__);
    if(esito__=='si'){
    	document.getElementById(idi).disabled = true;
    	document.getElementById(quest).innerHTML = "<span style=\"float:right;font-weight:bold;color:orange;\">&nbsp;&nbsp;&nbsp;PENDING REQUEST</span>"
    	document.getElementById('loadimport').innerHTML = "";
    }else{
    	document.getElementById(idi).disabled = false;
    	document.getElementById(quest).innerHTML = "";
    	document.getElementById('loadimport').innerHTML = "";
    }
	}else{
		document.getElementById('loadimport').innerHTML = "";
	}
	
	};
	xhttp__.open("GET", url__, true);
    xhttp__.send();
}*/






function MyEu(region,codice){

    var url_ = "MyEu.jsp?Region="+region+"&Id="+codice;
 
	var xhttp_ = new XMLHttpRequest();
	xhttp_.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    document.getElementById('MyEu').innerHTML = this.responseText;
    
	}else{
   document.getElementById('MyEu').innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
}
	
	
	
	};
	xhttp_.open("GET", url_, true);
    xhttp_.send();    
}

function Trade(regionto, regionfr, button, value,x,y,whoCall){
	
	whoCallA = whoCall;
	xA = x;
	yA = y;
	valueA = value;
	buttonA = button;
	regionfrA = regionfr;
	regiontoA = regionto;
	whoCallA = whoCall;

	//alert("DATI TRADE :"+buttonA+" "+regionfrA);
	//return regionto, regionfr, button, value,x,y,whoCall;
}

function Refuse(region,code,ide){
    
    //var url = "Refused_multi.jsp?Region="+region+"&Id="+code+"&Ids="+stanza_c;
    var url = "Refused_multi.jsp?Region="+region+"&Id="+code+"&Ids="+ide;
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    document.getElementById('tradecenter').innerHTML = this.responseText;
    //Empty(regionfrA);
    
	}else{
    document.getElementById('tradecenter').innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
    }	
	};
	xhttp.open("GET", url, true);
    xhttp.send();	
}


function Accept(region,code,ide){
//	alert("CODE DI ACCEPTED: "+code);
	CodePlayer = code;
	id_riga = ide;
 	//   alert("SONO DENTRO ACCEPTED");
 	//   alert("REGION, CODE E IDE: "+region+" "+CodePlayer+" "+ide);
 	//   alert("STANZA LOCAL: "+stanza_c);
    
    var url = "Accept_multi.jsp?Region="+region+"&Id="+CodePlayer+"&room="+stanza_c+"&Ids="+ide;
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    	document.getElementById('tradecenter').innerHTML = this.responseText;
		// alert("FINITO ACCEPTED");
		
		getTradeData(regionfrA,regiontoA,CodePlayer,id_riga);
		// La seguente funziona si trova dentro grafici-sotto-onclick.js
   		// Aggiornamento immediato del contenitore DataOutput nei campi production, in seguito al click Yes di richiesta accettata da parte del giocatore 
   		// console.log("Sto per chiamare updateDataSotto()");
   		setTimeout(updateDataSotto, 1000);
   		// La seguente funziona si trova dentro susteinable-limits.js
   		// Aggiornamento dell'ultimo contenitore legato alla regione del giocatore, contenuto in database
   		// console.log("Sto per chiamare SentDataToDBOnYesClick()");
   		setTimeout(SendDataToDBOnYesClick, 2000);
   		// console.log("Sono al fondo del success");
	}
	else{
    	document.getElementById('tradecenter').innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
    }	
	};
	xhttp.open("GET", url, true);
    xhttp.send(); 
}


function Test_It(region,code,ide){
//	alert("CODE DI TEST IT: "+code);
	CodePlayer = code;
	id_riga = ide;
  //  alert("SONO DENTRO TEST IT");
   // alert("REGION, CODE E IDE: "+region+" "+CodePlayer+" "+ide);
   // alert("STANZA LOCAL: "+stanza_c);
    var url = "Test_It.jsp?Region="+region+"&Id="+CodePlayer+"&room="+stanza_c+"&Ids="+ide;
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    document.getElementById('tradecenter').innerHTML = this.responseText;
    getTradeData(regionfrA, regiontoA,CodePlayer,id_riga);
   	// alert("FINITO TEST IT");
    //getTradeData(regionfrA, regiontoA,CodePlayer);
	}else{
    document.getElementById('tradecenter').innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
    }	
	};
	xhttp.open("GET", url, true);
    xhttp.send();
}


function getTradeData(regionfrA, regiontoA,CodePlayer,id_riga){
	//alert("SONO DENTRO getTradeData(). Parametri: From: "+regionfrA+" To: "+regiontoA+" Code: "+CodePlayer+" Riga: "+id_riga);
	
	//console.log("DENTRO GETTRADEDATA");
 	var checkregion4 = document.querySelector('input[name="region"]:checked');
	var stanza = localStorage.getItem("id_room");
	// region_stream = checkregion4.getAttribute('id');
	 //region_stream = region_stream.replace("region","");
	var split = regionfrA.replace("region","");
	var split2 = regiontoA.replace("region","");
	region_stream = split;
	var region_stream_p = split2;
	//	alert("REGION STREAM GET DATA: "+region_stream+" PLAYER: "+region_stream_p);
	//alert("GET TRADE DATA ID PLAYER: "+CodePlayer+" STANZA: "+stanza_c+" CAT: "+Cat);
	 if((Cat=="")||(Cat==null)) {
			Cat = "none";
		}else {
			Cat=Cat;
		}
		
	//alert("Valore di game: "+game);
	fetch('Json_Trade?op=read&region_player="'+encodeURIComponent(region_stream_p)+'"&player_id="'+encodeURIComponent(id_player_sust)+'"&id_room="'+encodeURIComponent(stanza_c)+'"&region_enemy="'+encodeURIComponent(region_stream)+'"&id_riga="'+encodeURIComponent(id_riga)+'"&game="'+encodeURIComponent(game), {
		method: 'PUT',
		headers: {
				'Content-Type':'text/html"',
				//'Access-Control-Allow-Origin':'http://192.168.1.92:8080/Multiplayer_Nexus',
				'Allow-Contro-Expose-Headers': 'Content-Type'
					},
	//body: JSON.stringify(test),
				})

//.then(data=>{json_callBack = data})
.then(resp=>resp.text())
//.then(data => Dati_From_Fetch = data)
//.then(data => alert("DATA :"+data))
.then(data => {
	Dati_From_Fetch = data;
	getDataFetch();
	
	
})
//.then(alert("SELECT RIUSCITA: "+json_trade_data))
	//.then(data2 => id_room = data2)

//.catch(err=>alert("Something Went Wrong! PLEASE DON'T PRESS F5 TO REFRESH THIS PAGE. This can broke your data stream. Just Try Again or Log In again. Thank You."));
.catch(err=>alert("ERRORE: "+err))
//console.log("TEST OGGETTO : "+json_callBack);

}


function RefuseTestIt(regionfrA, regiontoA,CodePlayer,id_riga){
	//alert("RefusedTestIt. Parametri. From: "+regionfrA+" To: "+regiontoA+" Code: "+CodePlayer+" Riga: "+id_riga);
	
 	var checkregion4 = document.querySelector('input[name="region"]:checked');
	var stanza = localStorage.getItem("id_room");
	var split = regionfrA.replace("region","");
	var split2 = regiontoA.replace("region","");
	var region_stream = split;
	var region_stream_p = split2;
	if((Cat=="")||(Cat==null)) {
		Cat = "none";
	}
	else {
		Cat=Cat;
	}
	
	//alert("RefuseTestIt Dati: split: "+split+" split2: "+split2+" stanza_c: "+stanza_c+" id_player: "+id_player_sust);
	
	fetch('Json_Refuse?op=read&region_player="'+encodeURIComponent(region_stream_p)+'"&player_id="'+encodeURIComponent(id_player_sust)+'"&id_room="'+encodeURIComponent(stanza_c)+'"&region_enemy="'+encodeURIComponent(region_stream)+'"&id_riga="'+encodeURIComponent(id_riga), {
		method: 'PUT',
		headers: {
				'Content-Type':'text/html"',
				'Allow-Contro-Expose-Headers': 'Content-Type'
					},
				})
.then(resp=>resp.text())
.then(data => {
	Dati_From_Fetch = data;
	getDataFetch();
})


.catch(err=>alert("ERRORE: "+err))

	var url = "Refused_multi.jsp?Region="+split+"&Id="+id_player_sust+"&Ids="+id_riga;
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
    document.getElementById('tradecenter').innerHTML = this.responseText;
    //Empty(regionfrA);
    
	}else{
    document.getElementById('tradecenter').innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
    }	
	};
	xhttp.open("GET", url, true);
    xhttp.send();
}



function getDataFetch() {
	//alert("DATI FROM FETCH: "+Dati_From_Fetch);
	//console.log("DATI FROM FETCH: "+Dati_From_Fetch);
	var obj = Dati_From_Fetch.split("/");
	var uno = obj[0];
	containerRegionAddebt = obj[1];
	containerRegionPlayer = obj[2];
	var due = uno.split("#");
	containerData = due[0];
	//console.log("DATI CONTAINER: "+containerData);
	//alert("DATI FROM FETCH: "+containerRegionPlayer+" "+containerRegionAddebt+" "+containerData2);

	//document.getElementById("TEST").innerHTML = "OOH: "+containerData+" E DUE: "+obj[1]+"E TRE: "+obj[2];
	
	//console.log("LOCAL STORAGE PRESENTE SUL PC: "+localStorage.getItem("region"+containerRegionAddebt+"DataOutput"));
	if (containerData != localStorage.getItem("region"+regionfrA+"DataOutput")) {
	   //console.log("DATI AGGIORNATI");
	}
	localStorage.setItem("region"+containerRegionAddebt+"DataOutput", containerData);
	//document.getElementById("TEST").innerHTML = "OOH 2: "+containerData;

	//transmission = localStorage.getItem("region"+containerRegionAddebt+"DataOutput");
	//JSON.parse(localStorage.getItem("region"+containerRegionAddebt+"SDataOutput"));
	/*var test = localStorage.getItem["region"+containerRegionAddebt+"SDataOutput"];
	alert("TEST NAME  "+containerRegionAddebt+" : "+test);
	alert("TEST NAME  "+containerRegionAddebt+" : "+JSON.stringify(test));*/
	//console.log("DATA FETCH TRADE CALC: "+regiontoA+" "+regionfrA+" "+buttonA+" "+valueA+" "+xA+" "+yA+" "+whoCallA);
	//console.log("Sto per eseguire Trade_Calc");
	Trade_Calc(regiontoA,regionfrA,buttonA,valueA,xA,yA,whoCallA);
	//console.log("Fine esecuzione Trade_Calc");
}