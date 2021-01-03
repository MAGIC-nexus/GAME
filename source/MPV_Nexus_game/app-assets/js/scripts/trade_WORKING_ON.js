
var region = localStorage.getItem("ActualRegion");

var Afood_wfg = 0; var Bfood_wfg = 0; var Cfood_wfg = 0; var Dfood_wfg = 0;
var Afood_wfb = 0; var Bfood_wfb = 0; var Cfood_wfb = 0; var Dfood_wfb = 0;
var Afood_lf = 0; var Bfood_lf = 0; var Cfood_lf = 0; var Dfood_lf = 0;
var Afood_cf = 0; var Bfood_cf = 0; var Cfood_cf = 0; var Dfood_cf = 0;

function Trade(regionto, regionfr, button, value, x, y) {
	alert("SONO DENTRO LA FUNZIONE TRADE");
	//localStorage.setItem("trade_is_called",'0');
	//localStorage.setItem("empty_is_called",'0');
	var Actual_Region = "labregion"+regionto;
	var Actual_Region_elem = document.getElementById(Actual_Region);
	console.log("LABREGION: "+Actual_Region);
	alert("LABREGION: "+Actual_Region);

	var Actual_Region_id = Actual_Region_elem.id;
	console.log("ACTUAL REGION ID: "+Actual_Region_id);
	var Actual_Region_Class = Actual_Region_elem.classList.contains("active");
	localStorage.setItem("regionto", regionto);
	localStorage.setItem("regionfr", regionfr);
	localStorage.setItem("Button", button);
	localStorage.setItem("Value", value);
	localStorage.setItem("X", x);
	localStorage.setItem("Y", y); 
	
	//localLoadData()


//inizio IF Trade
	
	var EUrA = 63.651;
	var EUrB = 38.559;
	var EUrC = 234.126;
	var EUrD = 177.143;
	
	var pwfg = 0;
	var mwfg = 0;
	var dwfg = 0;
	var fwfg = 0;
	var bwfg = 0;
	var ewfg = 0;

	var pwfb = 0;
	var mwfb = 0;
	var dwfb = 0;
	var fwfb = 0;
	var bwfb = 0;
	var ewfb = 0;

	var pcf = 0;
	var mcf = 0;
	var dcf = 0;
	var fcf = 0;
	var bcf = 0;
	var ecf = 0;

	var plf = 0;
	var mlf = 0;
	var dlf = 0;
	var flf = 0;
	var blf = 0;
	var elf = 0;

	var reslf= 0;
	var reslfen= 0;
	var rescf= 0;
	var rescfen= 0;
	var reswfb= 0;
	var reswfben= 0;
	var reswfg= 0;
	var reswfgen= 0;

	

	var checkRadioPlant = document.querySelector('input[name="checkbuttonsplant"]');
	var checkRadioMeat = document.querySelector('input[name="checkbuttonsmeat"]');
	var checkRadioDiary = document.querySelector('input[name="checkbuttonsdiary"]');
	var checkRadioFossil = document.querySelector('input[name="checkbuttonsfossil"]');
	var checkRadioBio = document.querySelector('input[name="checkbuttonsbio"]');
	var checkRadioElec = document.querySelector('input[name="checkbuttonselec"]');

	console.log(localStorage.getItem("plantextwfg"));
	console.log("MEAT WFG in TRADE"+localStorage.getItem("meatextwfg"));
	console.log("DIARY WFG in TRADE"+localStorage.getItem("diaryextwfg"));


	 if(button=="plant based") {
		    pwfg = localStorage.getItem("plantextwfg");	
		    pwfb = localStorage.getItem("plantextwfb");	
		    pcf = localStorage.getItem("plantextcf");
		    plf = localStorage.getItem("plantextlf");
	
} else {}

		  if(button=="meat and fish") {
		    mwfg = localStorage.getItem("meatextwfg");
		    mwfb = localStorage.getItem("meatextwfb");
		    mcf = localStorage.getItem("meatextcf");
		    mlf = localStorage.getItem("meatextlf");

		    } else {}


		  if(button=="diary and eggs") {
		    dwfg = localStorage.getItem("diaryextwfg");	
		    dwfb = localStorage.getItem("diaryextwfb");
		    dcf = localStorage.getItem("diaryextcf");
		    dlf = localStorage.getItem("diaryextlf");

		    } else { }


		  if(button=="fossil fuels") {
		    fwfg = localStorage.getItem("fossilextwfg");
		  fwfb = localStorage.getItem("fossilextwfb");
		  fcf = localStorage.getItem("fossilextcf");
		  flf = localStorage.getItem("fossilextlf");

		  } else {}

		  if(button=="biofuels") {
		    bwfg = localStorage.getItem("bioextwfg");	
		    bwfb = localStorage.getItem("bioextwfb");
		    bcf = localStorage.getItem("bioextcf");
		    blf = localStorage.getItem("bioextlf");

		    } else {}


		  if(button=="electricity") {
		    ewfg = localStorage.getItem("eleextwfg");	
		    ewfb = localStorage.getItem("eleextwfb");
		    ecf = localStorage.getItem("eleextcf"); 
		    elf = localStorage.getItem("eleextlf");

		    } else {}


		//------ REGION A
		if((regionfr == "A" )&&(regionto=="B")) {
		  chi_da =  EUrA;
		chi_chiede = EUrB;
		//wfg
		var sumwfg = pwfg+mwfg+dwfg;
		var molwfg = (sumwfg*chi_chiede)/chi_da;
		reswfg = molwfg;

		var sumwfgen = fwfg+bwfg+ewfg;
		var molwfgen = (sumwfgen*chi_chiede)/chi_da;
		reswfgen = molwfgen;

		Afood_wfg = reswfg+reswfgen;

	//wfb
		var sumwfb = pwfb+mwfb+dwfb;
		var molwfb = (sumwfb*chi_chiede)/chi_da;
		reswfb = molwfb;

		var sumwfben = fwfb+bwfb+ewfb;
		var molwfben = (sumwfben*chi_chiede)/chi_da;
		reswfben = molwfben;

		Afood_wfb = reswfb+reswfben;
		//cf
		var sumcf = pcf+mcf+dcf;
		var molcf = (sumcf*chi_chiede)/chi_da;
		rescf = molcf;

		var sumcfen = fcf+bcf+ecf;
		var molcfen = (sumcfen*chi_chiede)/chi_da;
		rescfen = molcfen;
	
		Afood_cf = rescf+rescfen;

		//lf
		  var sumlf = plf+mlf+dlf;
		  var mollf = (sumlf*chi_chiede)/chi_da;
		  reslf = mollf;

		  var sumlfen = flf+blf+elf;
		  var mollfen = (sumlfen*chi_chiede)/chi_da;
		  reslfen = mollfen;
		Afood_lf = reslf+reslfen;
		
		}


		else if((regionfr == "A" )&&(regionto=="C")) {
			if((region == "regionC")&&(region=="region"+regionto)) {
		  chi_da =  EUrA;
		chi_chiede = EUrC;
		//wfg
		var sumwfg = pwfg+mwfg+dwfg;
		var molwfg = (sumwfg*chi_chiede)/chi_da;
		reswfg = molwfg;

		var sumwfgen = fwfg+bwfg+ewfg;
		var molwfgen = (sumwfgen*chi_chiede)/chi_da;
		reswfgen = molwfgen;
		Afood_wfg = reswfg+reswfgen;
		
		//wfb
		var sumwfb = pwfb+mwfb+dwfb;
		var molwfb = (sumwfb*chi_chiede)/chi_da;
		reswfb = molwfb;

		var sumwfben = fwfb+bwfb+ewfb;
		var molwfben = (sumwfben*chi_chiede)/chi_da;
		reswfben = molwfben;
		
		Afood_wfb = reswfb+reswfben;
		//cf
		var sumcf = pcf+mcf+dcf;
		var molcf = (sumcf*chi_chiede)/chi_da;
		rescf = molcf;

		var sumcfen = fcf+bcf+ecf;
		var molcfen = (sumcfen*chi_chiede)/chi_da;
		rescfen = molcfen;

		Afood_cf = rescf+rescfen;
		//lf
		  var sumlf = plf+mlf+dlf;
		  var mollf = (sumlf*chi_chiede)/chi_da;
		  reslf = mollf;

		  var sumlfen = flf+blf+elf;
		  var mollfen = (sumlfen*chi_chiede)/chi_da;
		  reslfen = mollfen;
		Afood_lf = reslf+reslfen;
		} else {
			Afood_lf = 0;
			Afood_cf = 0;
			Afood_wfg = 0;
			Afood_wfb = 0;
			}
		}


		else if((regionfr == "A" )&&(regionto=="D")) {
			if((region == "regionD")&&(region=="region"+regionto)) {
		  chi_da =  EUrA;
		chi_chiede = EUrD;
		//wfg
		var sumwfg = pwfg+mwfg+dwfg;
		var molwfg = (sumwfg*chi_chiede)/chi_da;
		reswfg = molwfg;

		var sumwfgen = fwfg+bwfg+ewfg;
		var molwfgen = (sumwfgen*chi_chiede)/chi_da;
		reswfgen = molwfgen;
		Afood_wfg = reswfg+reswfgen;

		//wfb
		var sumwfb = pwfb+mwfb+dwfb;
		var molwfb = (sumwfb*chi_chiede)/chi_da;
		reswfb = molwfb;

		var sumwfben = fwfb+bwfb+ewfb;
		var molwfben = (sumwfben*chi_chiede)/chi_da;
		reswfben = molwfben;
		Afood_wfb = reswfb+reswfben;
//cf
		var sumcf = pcf+mcf+dcf;
		var molcf = (sumcf*chi_chiede)/chi_da;
		rescf = molcf;

		var sumcfen = fcf+bcf+ecf;
		var molcfen = (sumcfen*chi_chiede)/chi_da;
		rescfen = molcfen;

		Afood_cf = rescf+rescfen;
		//lf
		  var sumlf = plf+mlf+dlf;
		  var mollf = (sumlf*chi_chiede)/chi_da;
		  reslf = mollf;

		  var sumlfen = flf+blf+elf;
		  var mollfen = (sumlfen*chi_chiede)/chi_da;
		  reslfen = mollfen;
		Afood_lf = reslf+reslfen;
			
		} else {
			Afood_lf = 0;
			Afood_cf = 0;
			Afood_wfg = 0;
			Afood_wfb = 0;
			}


		//---REGION B
		if((regionfr == "B" )&&(regionto=="A")) {
			if((region == "regionA")&&(region=="region"+regionto)) {
	
		  chi_da =  EUrB;
		chi_chiede = EUrA;
		//wfg
		var sumwfg = pwfg+mwfg+dwfg;
		var molwfg = (sumwfg*chi_chiede)/chi_da;
		reswfg = molwfg;

		var sumwfgen = fwfg+bwfg+ewfg;
		var molwfgen = (sumwfgen*chi_chiede)/chi_da;
		reswfgen = molwfgen;

		Bfood_wfg = reswfg+reswfgen;
		
		//wfb
		var sumwfb = pwfb+mwfb+dwfb;
		var molwfb = (sumwfb*chi_chiede)/chi_da;
		reswfb = molwfb;

		var sumwfben = fwfb+bwfb+ewfb;
		var molwfben = (sumwfben*chi_chiede)/chi_da;
		reswfben = molwfben;
		Bfood_wfb = reswfb+reswfben;

//cf
		var sumcf = pcf+mcf+dcf;
		var molcf = (sumcf*chi_chiede)/chi_da;
		rescf = molcf;

		var sumcfen = fcf+bcf+ecf;
		var molcfen = (sumcfen*chi_chiede)/chi_da;
		rescfen = molcfen;

		Bfood_cf = rescf+rescfen;
		
		//lf
		  var sumlf = plf+mlf+dlf;
		  var mollf = (sumlf*chi_chiede)/chi_da;
		  reslf = mollf;

		  var sumlfen = flf+blf+elf;
		  var mollfen = (sumlfen*chi_chiede)/chi_da;
		  reslfen = mollfen;
		Bfood_lf = reslf+reslfen;
		}else {
			Bfood_lf = 0;
			Bfood_cf = 0;
			Bfood_wfg = 0;
			Bfood_wfb = 0;
			}
		}
		
		else if((regionfr == "B" )&&(regionto=="C")) {
			if((region == "regionC")&&(region=="region"+regionto)) {
	
		  chi_da =  EUrB;
		chi_chiede = EUrC;
		//wfg
		var sumwfg = pwfg+mwfg+dwfg;
		var molwfg = (sumwfg*chi_chiede)/chi_da;
		reswfg = molwfg;

		var sumwfgen = fwfg+bwfg+ewfg;
		var molwfgen = (sumwfgen*chi_chiede)/chi_da;
		reswfgen = molwfgen;

		Bfood_wfg = reswfg+reswfgen;
		//wfb
		var sumwfb = pwfb+mwfb+dwfb;
		var molwfb = (sumwfb*chi_chiede)/chi_da;
		reswfb = molwfb;

		var sumwfben = fwfb+bwfb+ewfb;
		var molwfben = (sumwfben*chi_chiede)/chi_da;
		reswfben = molwfben;
		Bfood_wfb = reswfb+reswfben;
		//cf
		var sumcf = pcf+mcf+dcf;
		var molcf = (sumcf*chi_chiede)/chi_da;
		rescf = molcf;

		var sumcfen = fcf+bcf+ecf;
		var molcfen = (sumcfen*chi_chiede)/chi_da;
		rescfen = molcfen;

		Bfood_cf = rescf+rescfen;		
		//lf
		  var sumlf = plf+mlf+dlf;
		  var mollf = (sumlf*chi_chiede)/chi_da;
		  reslf = mollf;

		  var sumlfen = flf+blf+elf;
		  var mollfen = (sumlfen*chi_chiede)/chi_da;
		  reslfen = mollfen;
		Bfood_lf = reslf+reslfen;			
		}
		else {
			Bfood_lf = 0;
			Bfood_cf = 0;
			Bfood_wfg = 0;
			Bfood_wfb = 0;
			}
		}
		else if((regionfr == "B" )&&(regionto=="D")) {
			if((region == "regionD")&&(region=="region"+regionto)) {
		  chi_da =  EUrB;
		chi_chiede = EUrD;
		//wfg
		var sumwfg = pwfg+mwfg+dwfg;
		var molwfg = (sumwfg*chi_chiede)/chi_da;
		reswfg = molwfg;

		var sumwfgen = fwfg+bwfg+ewfg;
		var molwfgen = (sumwfgen*chi_chiede)/chi_da;
		reswfgen = molwfgen;
		Bfood_wfg = reswfg+reswfgen;		

		//wfb
		var sumwfb = pwfb+mwfb+dwfb;
		var molwfb = (sumwfb*chi_chiede)/chi_da;
		reswfb = molwfb;

		var sumwfben = fwfb+bwfb+ewfb;
		var molwfben = (sumwfben*chi_chiede)/chi_da;
		reswfben = molwfben;
		Bfood_wfb = reswfb+reswfben;		

		//cf
		var sumcf = pcf+mcf+dcf;
		var molcf = (sumcf*chi_chiede)/chi_da;
		rescf = molcf;

		var sumcfen = fcf+bcf+ecf;
		var molcfen = (sumcfen*chi_chiede)/chi_da;
		rescfen = molcfen;

		Bfood_cf = rescf+rescfen;	
		
		//lf
		  var sumlf = plf+mlf+dlf;
		  var mollf = (sumlf*chi_chiede)/chi_da;
		  reslf = mollf;

		  var sumlfen = flf+blf+elf;
		  var mollfen = (sumlfen*chi_chiede)/chi_da;
		  reslfen = mollfen;
		Bfood_lf = reslf+reslfen;			

		} else {
			Bfood_lf = 0;
			Bfood_cf = 0;
			Bfood_wfg = 0;
			Bfood_wfb = 0;
			}
		}


		//------REGION C
		if ((regionfr == "C")&&(regionto=="A")) {
			if((region == "regionA")&&(region=="region"+regionto)) {
		}
		   chi_da = EurC;
		   chi_chiede = EUrA;
		   //wfg
		   var sumwfg = pwfg+mwfg+dwfg;
		   var molwfg = (sumwfg*chi_chiede)/chi_da;
		   reswfg = molwfg;

		   var sumwfgen = fwfg+bwfg+ewfg;
		   var molwfgen = (sumwfgen*chi_chiede)/chi_da;
		   reswfgen = molwfgen;

			Cfood_wfg = reswfg+reswfgen;
			//wfb
			var sumwfb = pwfb+mwfb+dwfb;
			var molwfb = (sumwfb*chi_chiede)/chi_da;
			reswfb = molwfb;

			var sumwfben = fwfb+bwfb+ewfb;
			var molwfben = (sumwfben*chi_chiede)/chi_da;
			reswfben = molwfben;
			Cfood_wfb= reswfb+reswfben;			
			//cf
			var sumcf = pcf+mcf+dcf;
			var molcf = (sumcf*chi_chiede)/chi_da;
			rescf = molcf;

			var sumcfen = fcf+bcf+ecf;
			var molcfen = (sumcfen*chi_chiede)/chi_da;
			rescfen = molcfen;

			Cfood_cf = rescf+rescfen;
//lf
			  var sumlf = plf+mlf+dlf;
			  var mollf = (sumlf*chi_chiede)/chi_da;
			  reslf = mollf;

			  var sumlfen = flf+blf+elf;
			  var mollfen = (sumlfen*chi_chiede)/chi_da;
			  reslfen = mollfen;
			Cfood_lf = reslf+reslfen;
			}
		
		 else if ((regionfr == "C")&&(regionto=="B")) {
		    chi_da = EurC;
		    chi_chiede = EUrB;
		    //wfg
		    var sumwfg = pwfg+mwfg+dwfg;
		    var molwfg = (sumwfg*chi_chiede)/chi_da;
		    reswfg = molwfg;

		    var sumwfgen = fwfg+bwfg+ewfg;
		    var molwfgen = (sumwfgen*chi_chiede)/chi_da;
		    reswfgen = molwfgen;

		  	Cfood_wfg= reswfg+reswfgen;

			//wfb
			var sumwfb = pwfb+mwfb+dwfb;
			var molwfb = (sumwfb*chi_chiede)/chi_da;
			reswfb = molwfb;

			var sumwfben = fwfb+bwfb+ewfb;
			var molwfben = (sumwfben*chi_chiede)/chi_da;
			reswfben = molwfben;
			Cfood_wfb = reswfb+reswfben;			
			//cf
			var sumcf = pcf+mcf+dcf;
			var molcf = (sumcf*chi_chiede)/chi_da;
			rescf = molcf;

			var sumcfen = fcf+bcf+ecf;
			var molcfen = (sumcfen*chi_chiede)/chi_da;
			rescfen = molcfen;

			CFfood_cf = rescf+rescren;
			//lf
			  var sumlf = plf+mlf+dlf;
			  var mollf = (sumlf*chi_chiede)/chi_da;
			  reslf = mollf;

			  var sumlfen = flf+blf+elf;
			  var mollfen = (sumlfen*chi_chiede)/chi_da;
			  reslfen = mollfen;
			Cfood_lf = reslf+reslfen;
		  }else {
				Cfood_lf = 0;
				Cfood_cf = 0;
				Cfood_wfg = 0;
				Cfood_wfb = 0;
				}
		
		}
		
		  else if ((regionfr == "C")&&(regionto=="D")) {
			  if((region == "regiond")&&(region=="region"+regionto)) {
		     chi_da = EurC;
		     chi_chiede = EUrD;
		     //wfg
		     var sumwfg = pwfg+mwfg+dwfg;
		     var molwfg = (sumwfg*chi_chiede)/chi_da;
		     reswfg = molwfg;

		     var sumwfgen = fwfg+bwfg+ewfg;
		     var molwfgen = (sumwfgen*chi_chiede)/chi_da;
		     reswfgen = molwfgen;

		     	Cfood_wfg = reswfg+reswfgen;
		   	//wfb
		    	var sumwfb = pwfb+mwfb+dwfb;
		    	var molwfb = (sumwfb*chi_chiede)/chi_da;
		    	reswfb = molwfb;

		    	var sumwfben = fwfb+bwfb+ewfb;
		    	var molwfben = (sumwfben*chi_chiede)/chi_da;
		    	reswfben = molwfben;
		    	Cfood_wfb = reswfb+reswfben;
		     	//cf
		    	var sumcf = pcf+mcf+dcf;
		    	var molcf = (sumcf*chi_chiede)/chi_da;
		    	rescf = molcf;

		    	var sumcfen = fcf+bcf+ecf;
		    	var molcfen = (sumcfen*chi_chiede)/chi_da;
		    	rescfen = molcfen;

		    	Cfood_cf = rescf+rescfen;
		    	//lf
		    	  var sumlf = plf+mlf+dlf;
		    	  var mollf = (sumlf*chi_chiede)/chi_da;
		    	  reslf = mollf;

		    	  var sumlfen = flf+blf+elf;
		    	  var mollfen = (sumlfen*chi_chiede)/chi_da;
		    	  reslfen = mollfen;
		    	Cfood_lf = reslf+reslfen;
		
		   } else {
				Cfood_lf = 0;
				Cfood_cf = 0;
				Cfood_wfg = 0;
				Cfood_wfb = 0;
				}
		  }



		//----- REGION D
		if ((regionfr =="D")&&(regionto=="A")) {
			if((region == "regionA")&&(region=="region"+regionto)) {
			
		    chi_da = EurD;
		   chi_chiede = EUrA;
		   //wfg
		   var sumwfg = pwfg+mwfg+dwfg;
		   var molwfg = (sumwfg*chi_chiede)/chi_da;
		   reswfg = molwfg;

		   var sumwfgen = fwfg+bwfg+ewfg;
		   var molwfgen = (sumwfgen*chi_chiede)/chi_da;
		   reswfgen = molwfgen;

		  	Dfood_wfg = reswfg+reswfgen;
		
			//wfb
			var sumwfb = pwfb+mwfb+dwfb;
			var molwfb = (sumwfb*chi_chiede)/chi_da;
			reswfb = molwfb;

			var sumwfben = fwfb+bwfb+ewfb;
			var molwfben = (sumwfben*chi_chiede)/chi_da;
			reswfben = molwfben;
			Dfood_wfb = reswfb+reswfben;
	
			//cf
			var sumcf = pcf+mcf+dcf;
			var molcf = (sumcf*chi_chiede)/chi_da;
			rescf = molcf;

			var sumcfen = fcf+bcf+ecf;
			var molcfen = (sumcfen*chi_chiede)/chi_da;
			rescfen = molcfen;

			Dfood_cf = rescf+rescfen;
			//lf
			  var sumlf = plf+mlf+dlf;
			  var mollf = (sumlf*chi_chiede)/chi_da;
			  reslf = mollf;

			  var sumlfen = flf+blf+elf;
			  var mollfen = (sumlfen*chi_chiede)/chi_da;
			  reslfen = mollfen;
			Dfood_lf = reslf+reslfen;
			}
			else {
				Dfood_lf = 0;
				Dfood_cf = 0;
				Dfood_wfg = 0;
				Dfood_wfb = 0;
				}
		 }
		 else if ((regionfr =="D")&&(regionto=="B")) {
	 if((region == "regionB")&&(region=="region"+regionto)) {
		   chi_da = EUrD;
		  chi_chiede = EUrB;
		  //wfg
		  var sumwfg = pwfg+mwfg+dwfg;
		  var molwfg = (sumwfg*chi_chiede)/chi_da;
		  reswfg = molwfg;

		  var sumwfgen = fwfg+bwfg+ewfg;
		  var molwfgen = (sumwfgen*chi_chiede)/chi_da;
		  reswfgen = molwfgen;
			Dfood_wfg = reswfg+reswfben;

			//wfb
			var sumwfb = pwfb+mwfb+dwfb;
			var molwfb = (sumwfb*chi_chiede)/chi_da;
			reswfb = molwfb;

			var sumwfben = fwfb+bwfb+ewfb;
			var molwfben = (sumwfben*chi_chiede)/chi_da;
			reswfben = molwfben;
			Dfood_wfb = reswfb+reswfben;
			
			//cf
			var sumcf = pcf+mcf+dcf;
			var molcf = (sumcf*chi_chiede)/chi_da;
			rescf = molcf;

			var sumcfen = fcf+bcf+ecf;
			var molcfen = (sumcfen*chi_chiede)/chi_da;
			rescfen = molcfen;

			Dfood_cf = rescf+rescfen;
			//lf
			  var sumlf = plf+mlf+dlf;
			  var mollf = (sumlf*chi_chiede)/chi_da;
			  reslf = mollf;

			  var sumlfen = flf+blf+elf;
			  var mollfen = (sumlfen*chi_chiede)/chi_da;
			  reslfen = mollfen;
			Dfood_lf = reslf+reslfen;

		 }
		 else {
				Dfood_lf = 0;
				Dfood_cf = 0;
				Dfood_wfg = 0;
				Dfood_wfb = 0;
				}
}
		 else if ((regionfr =="D")&&(regionto=="C")) {
			 if((region == "regionC")&&(region=="region"+regionto)) {
			//alert("REGION CLICKED "+region)
		   chi_da = EurD;
		  chi_chiede = EUrC;

		  //wfg
		  var sumwfg = pwfg+mwfg+dwfg;
		  var molwfg = (sumwfg*chi_chiede)/chi_da;
		  reswfg = molwfg;

		  var sumwfgen = fwfg+bwfg+ewfg;
		  var molwfgen = (sumwfgen*chi_chiede)/chi_da;
		  reswfgen = molwfgen;
		Dfood_wfg = reswfg+reswfgen;

		//wfb
		var sumwfb = pwfb+mwfb+dwfb;
		var molwfb = (sumwfb*chi_chiede)/chi_da;
		reswfb = molwfb;

		var sumwfben = fwfb+bwfb+ewfb;
		var molwfben = (sumwfben*chi_chiede)/chi_da;
		reswfben = molwfben;
		Dfood_wfb = reswfb+reswfben;

		//cf
		var sumcf = pcf+mcf+dcf;
		var molcf = (sumcf*chi_chiede)/chi_da;
		rescf = molcf;

		var sumcfen = fcf+bcf+ecf;
		var molcfen = (sumcfen*chi_chiede)/chi_da;
		rescfen = molcfen;

		Dfood_cf = rescf+rescfen;
		//lf
		  var sumlf = plf+mlf+dlf;
		  var mollf = (sumlf*chi_chiede)/chi_da;
		  reslf = mollf;

		  var sumlfen = flf+blf+elf;
		  var mollfen = (sumlfen*chi_chiede)/chi_da;
		  reslfen = mollfen;
		Dfood_lf = reslf+reslfen;
	
		 } else {
				Dfood_lf = 0;
				Dfood_cf = 0;
				Dfood_wfg = 0;
				Dfood_wfb = 0;
				}
		 }
		
	
		console.log("TRADE CF A FOOD: "+localStorage.getItem("Afood_cf"));
		console.log("TRADE LF A FOOD: "+localStorage.getItem("Afood_lf"));
		console.log("TRADE WFG A FOOD: "+localStorage.getItem("Afood_wfg"));
		console.log("TRADE WFB A FOOD: "+localStorage.getItem("Afood_wfb"));

		//console.log("TRADE TRADE: "+localStorage.getItem("trade_is_called"));

//	 FINE WFGREEN //
		
}

function Empty() {
	 Afood_wfg = 0;  Bfood_wfg = 0;  Cfood_wfg = 0;  Dfood_wfg = 0;
	 Afood_wfb = 0;  Bfood_wfb = 0;  Cfood_wfb = 0;  Dfood_wfb = 0;
	 Afood_lf = 0;  Bfood_lf = 0;  Cfood_lf = 0;  Dfood_lf = 0;
	 Afood_cf = 0;  Bfood_cf = 0;  Cfood_cf = 0;  Dfood_cf = 0;
	/*localStorage.setItem("Afood_wfg",0); localStorage.setItem("Bfood_wfg",0); localStorage.setItem("Cfood_wfg",0) ; localStorage.setItem("Dfood_wfg",0);
	localStorage.setItem("Afood_wfb",0); localStorage.setItem("Bfood_wfb",0); localStorage.setItem("Cfood_wfb",0); localStorage.setItem("Dfood_wfb", 0);
	localStorage.setItem("Afood_lf",0); localStorage.setItem("Bfood_lf",0); localStorage.setItem("Cfood_lf",0); localStorage.setItem("Dfood_lf",0);
	localStorage.setItem("Afood_cf",0); localStorage.setItem("Bfood_cf",0); localStorage.setItem("Cfood_cf",0); localStorage.setItem("Dfood_cf",0);
		//localStorage.setItem("trade_is_called",'1');*/
		
		//console.log("TRADE EMPTY: "+localStorage.getItem("trade_is_called"));
}





