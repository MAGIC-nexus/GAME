	var truenumber = 0;
	var x = 0;

function Quest(tipo,valore,cat,code,version){
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
	
	vreg = document.getElementById("VREG").innerHTML;
	
	var temp = tipo.replace(/ /g, '_');	
	var nomediv = "quest_"+temp;
	
	if(cat=='W' || role=='SP1'){	
    document.getElementById(nomediv).innerHTML="";	
	}else{
		
	var inviar = "<span style=\"float:right;\">&nbsp;&nbsp;&nbsp;<a href=\"javascript:void(0);\"  style=\"color:red;text-align:right;font-weight:bold;\" onclick=\"TrueRequest('"+tipo+"');SendRequest('"+tipo+"','"+valore+"','"+cat+"','"+vreg+"','"+code+"',"+truenumber+");AggiornaRequest('"+vreg+"','"+code+"');\"> CLICK & SEND REQUEST TO "+cat+" <i class=\"bx bx-send\" style=\"font-size:11px;\"></i></a></span>";
	
	document.getElementById(nomediv).innerHTML=inviar;
    }
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

function CloseNote(){
	document.getElementById('tradecenter').className = "";
}

function SendRequest(tipo,valore,cat,region,code,x){
	var idi="";
	var x = truenumber;
	
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
	var xhttp = new XMLHttpRequest();
	var temp = tipo.replace(/ /g, '_');
		//var nomediv = "quest_"+region+"_"+temp;	
	var nomediv = "quest_"+temp;	
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
	
        document.getElementById(nomediv).innerHTML = this.responseText;
        document.getElementById(idi).disabled = true;
	}else{
		   document.getElementById(nomediv).innerHTML = " <img src='icon/AjaxLoader.gif' style=\"width:32px;text-align:center;\">"; 
	   }
	
	
	};
	xhttp.open("GET", url, true);
    xhttp.send();
}

function AggiornaRequest(region,code){
   
    
    var url = "Auth.jsp?Region="+region+"&Id="+code;

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

function MyTrade(region,codice){

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
}

function VRequest(region,codice,tipo){
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
		document.getElementById('loadimport').innerHTML = " checking requests ";
	}
	
	};
	xhttp__.open("GET", url__, true);
    xhttp__.send();
}

function Refuse(region,code,ide){
    
    var url = "Refused.jsp?Region="+region+"&Id="+code+"&Ids="+ide;
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
	
}


function Accept(region,code,ide){
    
    var url = "Accept.jsp?Region="+region+"&Id="+code+"&Ids="+ide;
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
	
}



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