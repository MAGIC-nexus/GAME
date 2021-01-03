var REGIONA_C_wfg = 0, REGIONA_C_wfb = 0, REGIONA_C_cf = 0, REGIONA_C_lf = 0;
	var REGIONA_B_wfg = 0, REGIONA_B_wfb = 0, REGIONA_B_cf = 0, REGIONA_B_lf = 0;
	var REGIONA_D_wfg = 0, REGIONA_D_wfb = 0, REGIONA_D_cf = 0, REGIONA_D_lf = 0;
	
	var REGIONB_A_wfg = 0, REGIONB_A_wfb = 0, REGIONB_A_cf = 0, REGIONB_A_lf = 0;
	var REGIONB_C_wfg = 0, REGIONB_C_wfb = 0, REGIONB_C_cf = 0, REGIONB_C_lf = 0;
	var REGIONB_D_wfg = 0, REGIONB_D_wfb = 0, REGIONB_D_cf = 0, REGIONB_D_lf = 0;
	
	var REGIOND_B_wfg = 0, REGIOND_B_wfb = 0, REGIOND_B_cf = 0, REGIOND_B_lf = 0;
	var REGIOND_C_wfg = 0, REGIOND_C_wfb = 0, REGIOND_C_cf = 0, REGIOND_C_lf = 0;
	var REGIOND_A_wfg = 0, REGIOND_A_wfb = 0, REGIOND_A_cf = 0, REGIOND_A_lf = 0;

	var REGIONC_B_wfg = 0, REGIONC_B_wfb = 0, REGIONC_B_cf = 0, REGIONC_B_lf = 0;
	var REGIONC_A_wfg = 0, REGIONC_A_wfb = 0, REGIONC_A_cf = 0, REGIONC_A_lf = 0;
	var REGIONC_D_wfg = 0, REGIONC_D_wfb = 0, REGIONC_D_cf = 0, REGIONC_D_lf = 0;

function Filter() {
	var checkregion = document.querySelector('input[name="region"]:checked');
	var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]:checked');
	var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]:checked');
	var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]:checked');
	var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]:checked');
	var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]:checked');
	var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]:checked');

	//--------------------------------
	//--------------------------------
	 Afood_wfg;  Bfood_wfg;  Cfood_wfg;  Dfood_wfg;
	 Afood_wfb;  Bfood_wfb;  Cfood_wfb;  Dfood_wfb;
	 Afood_lf;  Bfood_lf;  Cfood_lf;  Dfood_lf;
	 Afood_cf;  Bfood_cf;  Cfood_cf;  Dfood_cf;
	//--------------------------------
		//--------------------------------
	var region = checkregion.getAttribute('id');
	//--------------------------------
	//--------------------------------
	
	
	//--------------------------------
	//--------------------------------
	//------ REGION A
	if((region == "regionA" )&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')||(checkRadioMeat.getAttribute('id')=='meatb')||(checkRadioDiary.getAttribute('id')=='diaryb')||(checkRadioFossil.getAttribute('id')=='fossilb')||(checkRadioBio.getAttribute('id')=='biob')||(checkRadioElec.getAttribute('id')=='elecb')) {
		Afood_wfb = localStorage.getItem("REGIONB_A_wfb",REGIONB_A_wfb); Afood_cf =localStorage.getItem("REGIONB_A_cf",REGIONB_A_cf); Afood_lf =localStorage.getItem("REGIONB_A_lf",REGIONB_A_lf) ; Afood_wfg =localStorage.getItem("REGIONB_A_wfg",REGIONB_A_wfg);
	}
		else if((region == "regionA" )&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')||(checkRadioMeat.getAttribute('id')=='meatc')||(checkRadioDiary.getAttribute('id')=='diaryc')||(checkRadioFossil.getAttribute('id')=='fossilc')||(checkRadioBio.getAttribute('id')=='bioc')||(checkRadioElec.getAttribute('id')=='elecc')) {		
			Afood_wfb =localStorage.getItem("REGIONC_A_wfb",REGIONC_A_wfb); Afood_cf = localStorage.getItem("REGIONC_A_cf",REGIONC_A_cf); Afood_lf = localStorage.getItem("REGIONC_A_lf",REGIONC_A_lf) ; Afood_wfg = localStorage.getItem("REGIONC_A_wfg",REGIONC_A_wfg);
		}
		else if((region == "regionA" )&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')||(checkRadioMeat.getAttribute('id')=='meatd')||(checkRadioDiary.getAttribute('id')=='diaryd')||(checkRadioFossil.getAttribute('id')=='fossild')||(checkRadioBio.getAttribute('id')=='biod')||(checkRadioElec.getAttribute('id')=='elecd')) {		
			Afood_wfb = localStorage.getItem("REGIOND_A_wfb",REGIOND_A_wfb); Afood_cf = localStorage.getItem("REGIOND_A_cf",REGIOND_A_cf); Afood_lf = localStorage.getItem("REGIOND_A_lf",REGIOND_A_lf) ; Afood_wfg = localStorage.getItem("REGIOND_A_wfg",REGIOND_A_wfg);
		
	} 
		else {
			 Afood_wfg=0;  
			 Afood_wfb=0; 
			 Afood_lf=0;  
			 Afood_cf=0;  
		}

 if((region == "regionB" )&&(checkRadioPlant != null)&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='planta')||(checkRadioMeat.getAttribute('id')=='meata')||(checkRadioDiary.getAttribute('id')=='diarya')||(checkRadioFossil.getAttribute('id')=='fossila')||(checkRadioBio.getAttribute('id')=='bioa')||(checkRadioElec.getAttribute('id')=='eleca'))  {
	 Bfood_wfb =  localStorage.getItem("REGIONA_B_wfb",REGIONA_B_wfb); Bfood_cf = localStorage.getItem("REGIONA_B_cf",REGIONA_B_cf); Bfood_lf = localStorage.getItem("REGIONA_B_lf",REGIONA_B_lf) ; Bfood_wfb = localStorage.getItem("REGIONA_B_wfg",REGIONA_B_wfg);
		}
 else if((region == "regionB" )&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')||(checkRadioMeat.getAttribute('id')=='meatc')||(checkRadioDiary.getAttribute('id')=='diaryc')||(checkRadioFossil.getAttribute('id')=='fossilc')||(checkRadioBio.getAttribute('id')=='bioc')||(checkRadioElec.getAttribute('id')=='elecc')) {
	 Bfood_wfb = localStorage.getItem("REGIONC_B_wfb",REGIONC_B_wfb); Bfood_cf = localStorage.getItem("REGIONC_B_cf",REGIONC_B_cf);Bfood_lf =  localStorage.getItem("REGIONC_B_lf",REGIONC_B_lf) ; Bfood_wfb = localStorage.getItem("REGIONC_B_wfg",REGIONC_B_wfg);
 }
 else if((region == "regionB" )&&(checkRadioPlant != null)&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantd')||(checkRadioMeat.getAttribute('id')=='meatd')||(checkRadioDiary.getAttribute('id')=='diaryd')||(checkRadioFossil.getAttribute('id')=='fossild')||(checkRadioBio.getAttribute('id')=='biod')||(checkRadioElec.getAttribute('id')=='elecd')) {
	 Bfood_wfb = localStorage.getItem("REGIOND_B_wfb",REGIOND_B_wfb); Bfood_cf = localStorage.getItem("REGIOND_B_cf",REGIOND_B_cf); Bfood_lf = localStorage.getItem("REGIOND_B_lf",REGIOND_B_lf) ; Bfood_wfb = localStorage.getItem("REGIOND_B_wfg",REGIOND_B_wfg);
 }
 else{
	 Bfood_wfg=0;  
	 Bfood_wfb=0; 
	 Bfood_lf=0; 
	   Bfood_cf=0; 
 }
	
if((region == "regionC" )&&(checkRadioPlant != null)&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='planta')||(checkRadioMeat.getAttribute('id')=='meata')||(checkRadioDiary.getAttribute('id')=='diarya')||(checkRadioFossil.getAttribute('id')=='fossila')||(checkRadioBio.getAttribute('id')=='bioa')||(checkRadioElec.getAttribute('id')=='eleca'))  {
	Cfood_wfb =	localStorage.getItem("REGIONA_C_wfb",REGIONA_C_wfb); Cfood_cf =  localStorage.getItem("REGIONA_C_cf",REGIONA_C_cf); Cfood_lf =localStorage.getItem("REGIONA_C_lf",REGIONA_C_lf) ; Cfood_wfg = localStorage.getItem("REGIONA_C_wfg",REGIONA_C_wfg);
	} 
else if((region == "regionC" )&&(checkRadioPlant != null)&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')||(checkRadioMeat.getAttribute('id')=='meatb')||(checkRadioDiary.getAttribute('id')=='diaryb')||(checkRadioFossil.getAttribute('id')=='fossilb')||(checkRadioBio.getAttribute('id')=='biob')||(checkRadioElec.getAttribute('id')=='elecb'))  {
	Cfood_wfb = localStorage.getItem("REGIONB_C_wfb",REGIONB_C_wfb); Cfood_cf = localStorage.getItem("REGIONB_C_cf",REGIONB_C_cf); Cfood_lf = localStorage.getItem("REGIONB_C_lf",REGIONB_C_lf) ; Cfood_wfg = localStorage.getItem("REGIONB_C_wfg",REGIONB_C_wfg);
}
else if((region == "regionC" )&&(checkRadioPlant != null)&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')||(checkRadioMeat.getAttribute('id')=='meatc')||(checkRadioDiary.getAttribute('id')=='diaryc')||(checkRadioFossil.getAttribute('id')=='fossilc')||(checkRadioBio.getAttribute('id')=='bioc')||(checkRadioElec.getAttribute('id')=='elecc')) {
	Cfood_wfb = localStorage.getItem("REGIOND_C_wfb",REGIOND_C_wfb); Cfood_cf = localStorage.getItem("REGIOND_C_cf",REGIOND_C_cf); Cfood_lf = localStorage.getItem("REGIOND_C_lf",REGIOND_C_lf) ; Cfood_wfg = localStorage.getItem("REGIOND_C_wfg",REGIOND_C_wfg);
} 
else {
	  Cfood_wfg=0;  
	 Cfood_wfb=0;  
	Cfood_lf=0;  
	Cfood_cf=0; 
	 
}


if((region == "regionD" )&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='planta')||(checkRadioMeat.getAttribute('id')=='meata')||(checkRadioDiary.getAttribute('id')=='diarya')||(checkRadioFossil.getAttribute('id')=='fossila')||(checkRadioBio.getAttribute('id')=='bioa')||(checkRadioElec.getAttribute('id')=='eleca')) {	
	Dfood_wfb = localStorage.getItem("REGIONA_D_wfb",REGIONA_D_wfb); Dfood_cf = localStorage.getItem("REGIONA_D_cf",REGIONA_D_cf); Dfood_lf = localStorage.getItem("REGIONA_D_lf",REGIONA_D_lf) ; Dfood_wfg = localStorage.getItem("REGIONA_D_wfg",REGIONA_D_wfg);
	}
else if((region == "regionD" )&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantb')||(checkRadioMeat.getAttribute('id')=='meatb')||(checkRadioDiary.getAttribute('id')=='diaryb')||(checkRadioFossil.getAttribute('id')=='fossilb')||(checkRadioBio.getAttribute('id')=='biob')||(checkRadioElec.getAttribute('id')=='elecb')) {	
	Dfood_wfb = localStorage.getItem("REGIONB_D_wfb",REGIONB_D_wfb); Dfood_cf = localStorage.getItem("REGIONB_D_cf",REGIONB_D_cf); Dfood_lf = localStorage.getItem("REGIONB_D_lf",REGIONB_D_lf) ; Dfood_wfg = localStorage.getItem("REGIONB_D_wfg",REGIONB_D_wfg);
}
else if((localStorage.getItem("ActualRegion") == "regionD" )&&(checkRadioPlant != null)&&(checkRadioPlant != null)&&(checkRadioPlant.getAttribute('id')=='plantc')||(checkRadioMeat.getAttribute('id')=='meatc')||(checkRadioDiary.getAttribute('id')=='diaryc')||(checkRadioFossil.getAttribute('id')=='fossilc')||(checkRadioBio.getAttribute('id')=='bioc')||(checkRadioElec.getAttribute('id')=='elecc')) {	
	Dfood_wfb = localStorage.getItem("REGIONC_D_wfb",REGIONC_D_wfb); Dfood_cf = localStorage.getItem("REGIONC_D_cf",REGIONC_D_cf); Dfood_lf = localStorage.getItem("REGIONC_D_lf",REGIONC_D_lf) ; Dfood_wfg = localStorage.getItem("REGIONC_D_wfg",REGIONC_D_wfg);
}
else {
	 Dfood_wfg=0;
	Dfood_wfb=0;
	 Dfood_lf=0;
	 Dfood_cf=0;
}

console.log("FILTER VARIABILI: "+Afood_wfg);
localStorage.setItem("Afood_wfg",Afood_wfg); localStorage.setItem("Bfood_wfg",Bfood_wfg); localStorage.setItem("Cfood_wfg",Cfood_wfg) ; localStorage.setItem("Dfood_wfg",Dfood_wfg);
localStorage.setItem("Afood_wfb",Afood_wfb); localStorage.setItem("Bfood_wfb",Bfood_wfb); localStorage.setItem("Cfood_wfb",Cfood_wfb); localStorage.setItem("Dfood_wfb", Dfood_wfb);
localStorage.setItem("Afood_lf",Afood_lf); localStorage.setItem("Bfood_lf",Bfood_lf); localStorage.setItem("Cfood_lf",Cfood_lf); localStorage.setItem("Dfood_lf",Dfood_lf);
localStorage.setItem("Afood_cf",Afood_cf); localStorage.setItem("Bfood_cf",Bfood_cf); localStorage.setItem("Cfood_cf",Cfood_cf); localStorage.setItem("Dfood_cf",Dfood_cf);


}


var myVar = setInterval(Filter, 3000);