//------------------------------------------------------------------------------------
// Sezione che aggiunge un attributo id ai bottoni generati da bootstrap
// ed il rispettivo evento onclick da applicare quando viene cliccato il bottone
var list = document.querySelectorAll('[class*="bootstrap-touchspin-"]');
for(var i=0; i<list.length; i++) {
  	var button = list[i].getAttribute("type");
  	if(button=="button") {
  		list[i].setAttribute("id", "Button"+i);
  		$('#Button'+i).mousedown(onMouseDown);
  		$('#Button'+i).mouseup(onMouseUp);
  	}
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
var OldVegan=0;
var OldVegetarian=0;
var OldMeat=0;
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
var OldWind=0;
var OldSolar=0;
var OldHydro=0;
var OldBiofuels=0;
var OldNuclear=0;
var OldFossil=0;
var difference=0;

var freePoints=0;
var freeWind=0;
var freeSolar=0;
var freeHydro=0;
var freeBiofuels=0;
var freeNuclear=0;
var freeFossil=0;
var freeTotal=0;

var zeroWind=0;
var zeroSolar=0;
var zeroHydro=0;
var zeroBiofuels=0;
var zeroNuclear=0;
var zeroFossil=0;

//----------------------------------------------------------------------------------------------------------------------------------------------------------------

// This timeout, started on mousedown, triggers the beginning of a hold
var holdStarter = null;
// This is how many milliseconds to wait before recognizing a hold
var holdDelay = 500;
// This flag indicates the user is currently holding the mouse down
var holdActive = false;

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
// MouseDown
function onMouseDown(){
	//alert(this.id);
	// ================================ Registrazione dei vecchi valori in casosi faccia solo un click ===========================================================
	if(this.id == "Button1") {
		OldVegan=parseInt(document.getElementById("f_C6").value)+1;	
	}
	if(this.id == "Button3") {
		OldVegan=parseInt(document.getElementById("f_C6").value)-1;
	}
	if(this.id == "Button5") {
		OldVegetarian=parseInt(document.getElementById("f_C7").value)+1;
	}
	if(this.id == "Button7") {
		OldVegetarian=parseInt(document.getElementById("f_C7").value)-1;
	}
	if(this.id == "Button9") {
		OldMeat=parseInt(document.getElementById("f_C8").value)+1;
	}
	if(this.id == "Button11") {
		OldMeat=parseInt(document.getElementById("f_C8").value)-1;
	}
	if(this.id == "Button69") {
		OldWind=parseInt(document.getElementById("em_J21").value)+1;
	}
	if(this.id == "Button71") {
		OldWind=parseInt(document.getElementById("em_J21").value)-1;
	}
	if(this.id == "Button73") {
		OldSolar=parseInt(document.getElementById("em_J22").value)+1;
	}
	if(this.id == "Button75") {
		OldSolar=parseInt(document.getElementById("em_J22").value)-1;
	}
	if(this.id == "Button77") {
		OldHydro=parseInt(document.getElementById("em_J23").value)+1;
	}
	if(this.id == "Button79") {
		OldHydro=parseInt(document.getElementById("em_J23").value)-1;
	}
	if(this.id == "Button81") {
		OldBiofuels=parseInt(document.getElementById("em_J24").value)+1;
	}
	if(this.id == "Button83") {
		OldBiofuels=parseInt(document.getElementById("em_J24").value)-1;
	}
	if(this.id == "Button85") {
		OldNuclear=parseInt(document.getElementById("em_J25").value)+1;
	}
	if(this.id == "Button87") {
		OldNuclear=parseInt(document.getElementById("em_J25").value)-1;
	}
	if(this.id == "Button89") {
		OldFossil=parseInt(document.getElementById("em_J26").value)+1;
	}
	if(this.id == "Button91") {
		OldFossil=parseInt(document.getElementById("em_J26").value)-1;
	}		 
	// Do not take any immediate action - just set the holdStarter
    //  to wait for the predetermined delay, and then begin a hold
    holdStarter = setTimeout(function() {
		holdStarter = null;
		holdActive = true;
		// begin hold-only operation here, if desired
        //$('.status').text('holding...');
        
        // ========================   Registrazione dei vecchi valori nel caso venga tenuto cliccato il tasto =====================================================
        if(this.id == "Button1") {
			OldVegan=parseInt(document.getElementById("f_C6").value)+1;	
		}
		if(this.id == "Button3") {
			OldVegan=parseInt(document.getElementById("f_C6").value)-1;
		}
		if(this.id == "Button5") {
			OldVegetarian=parseInt(document.getElementById("f_C7").value)+1;
		}
		if(this.id == "Button7") {
			OldVegetarian=parseInt(document.getElementById("f_C7").value)-1;
		}
		if(this.id == "Button9") {
			OldMeat=parseInt(document.getElementById("f_C8").value)+1;
		}
		if(this.id == "Button11") {
			OldMeat=parseInt(document.getElementById("f_C8").value)-1;
		}
		if(this.id == "Button69") {
			OldWind=parseInt(document.getElementById("em_J21").value)+1;
		}
		if(this.id == "Button71") {
			OldWind=parseInt(document.getElementById("em_J21").value)-1;
		}
		if(this.id == "Button73") {
			OldSolar=parseInt(document.getElementById("em_J22").value)+1;
		}
		if(this.id == "Button75") {
			OldSolar=parseInt(document.getElementById("em_J22").value)-1;
		}
		if(this.id == "Button77") {
			OldHydro=parseInt(document.getElementById("em_J23").value)+1;
		}
		if(this.id == "Button79") {
			OldHydro=parseInt(document.getElementById("em_J23").value)-1;
		}
		if(this.id == "Button81") {
			OldBiofuels=parseInt(document.getElementById("em_J24").value)+1;
		}
		if(this.id == "Button83") {
			OldBiofuels=parseInt(document.getElementById("em_J24").value)-1;
		}
		if(this.id == "Button85") {
			OldNuclear=parseInt(document.getElementById("em_J25").value)+1;
		}
		if(this.id == "Button87") {
			OldNuclear=parseInt(document.getElementById("em_J25").value)-1;
		}
		if(this.id == "Button89") {
			OldFossil=parseInt(document.getElementById("em_J26").value)+1;
		}
		if(this.id == "Button91") {
			OldFossil=parseInt(document.getElementById("em_J26").value)-1;
		}
	}, holdDelay);
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
// MouseUp
function onMouseUp(){
	var Vegan = parseInt(document.getElementById("f_C6").value);
	var Vegetarian = parseInt(document.getElementById("f_C7").value);
	var Meat = parseInt(document.getElementById("f_C8").value);
	var Wind=parseInt(document.getElementById("em_J21").value);	
	var Solar=parseInt(document.getElementById("em_J22").value);	
	var Hydro=parseInt(document.getElementById("em_J23").value);
	var Biofuels=parseInt(document.getElementById("em_J24").value);
	var Nuclear=parseInt(document.getElementById("em_J25").value);
	var Fossil=parseInt(document.getElementById("em_J26").value);
    // If the mouse is released immediately (i.e., a click), before the
    //  holdStarter runs, then cancel the holdStarter and do the click
	
	// ================================ TUTTE LE OPERAZIONI QUI DENTRO SONO ESEGUITE QUANDO VIENE FATTO UN SOLO CLICK =============================================
	if (holdStarter) {
		clearTimeout(holdStarter);
		// run click-only operation here
        // alert("Clicked!");
		
		// ========	TOLGO 1 DA VEGAN =======================================================================
		// TASTO -VEGAN
		if(this.id == "Button1") {
			alert("Dentro -Vegan");
			
			/*
				Se Vegan>0 -> aggiungo 1 a Meat (Vegan contiene già il nuovo valore).
				Ma la condizione è valida solo per Vegan >0, quindi per Vegan =0, devo gestire il caso particolare
				quindi se Vegan==0, aggiusto Meat.
			*/
			if(Vegan>0) Meat++;
			else Meat=(100-Vegan-Vegetarian);
		}
		// ========	AGGIUNGO 1 A VEGAN ==================================================================
		// TASTO +VEGAN
		if(this.id == "Button3") {
			/*
				Se Vegan<100, tolgo 1 a Meat (Vegan contiene già il nuovo calore)
				Ma devo controllare che Meat non vada sotto 0. 
				Se Meat sotto 0 -> riporto Meat=0 e Vegan torna indietro di 1.
				
				Se invece Vegan=100 -> gestisco il caso particolare.
			*/
			if(Vegan<100) {
				Meat--;
				if(Meat<0) {
					Meat=0;
					if(Vegetarian>0) {
						Vegetarian--;
					}
					else {
						Vegan=100;
						Vegetarian=0;
						Meat=0;
					}	
				}
			}
			else {
				Vegan=100;
				Vegetarian=0;
				Meat=0;
			}
		}
		// ========	TOLGO 1 DA VEGETARIAN  ===============================================================
		// TASTO -VEGETARIAN
			/*
				Se Vegetarian>0 -> aggiungo 1 a Vegan (Vegetarian contiene già il nuovo valore).
				Ma la condizione è valida solo per Vegan >0, quindi per Vegan =0, devo gestire il caso particolare
				quindi se Vegetarian==0, aggiusto Vegan.
			*/
		if(this.id == "Button5") {
			if(Vegetarian>0) Vegan++;
			else Vegan=(100-Vegetarian-Meat);
		}
		// ========	AGGIUNGO 1 A VEGETARIAN ================================================================
		// TASTO +VEGETARIAN
			/*
				Se Vegetarian<100, tolgo 1 a Meat (Vegetarian contiene già il nuovo calore)
				Ma devo controllare che Meat non vada sotto 0. 
				Se Meat sotto 0 -> riporto Meat=0 e Vegetarian torna indietro di 1.
				
				Se invece Vegetarian=100 -> gestisco il caso particolare.
			*/
		if(this.id == "Button7") {
			if(Vegetarian<100) {
				Meat--;
				if(Meat<0) {
					Meat=0;
					if(Vegan>0) {
						Vegan--;
					}
					else {
						Vegan=0;
						Vegetarian=100;
						Meat=0;
					}
				}
			}
			else {
				Vegetarian=100;
				Vegan=0;
				Meat=0;
			}
		}
		// ========	TOLGO 1 DA MEAT =========================================================================
		// TASTO -Meat
			/*
				Se Meat>0 -> aggiungo 1 a Vegetarian (Meat contiene già il nuovo valore).
				Ma la condizione è valida solo per Meat >0, quindi per Meat =0, devo gestire il caso particolare
				quindi se Meat==0, aggiusto Vegetarian.
			*/
		if(this.id == "Button9") {
			if(Meat>0) Vegetarian++;
			else Vegetarian=(100-Vegan-Meat);
		}
		// ========	AGGIUNGO 1 A MEAT =======================================================================
		// TASTO +Meat
		if(this.id == "Button11") {
			if(Meat<100) {
				Vegan--;
				if(Vegan<0) {
					Vegan=0;
					if(Vegetarian>0) {
						Vegetarian--;	
					}
					else {
						Vegan=0;
						Vegetarian=0;
						Meat=100;
					}
				}
			}
			else {
				Meat=100;
				Vegan=0;
				Vegetarian=0;
			}
		}
		// ========	TOLGO 1 DA WIND =======================================================================
		// TASTO -WIND
		if(this.id == "Button69") {
			if(Wind>0) {
				freePoints++;
			}
			else {
				if(OldWind == 1) {
					freePoints++;
				}	
			}	
		}
		// ========	AGGIUNGO 1 A WIND ==================================================================
		// TASTO +WIND
		if(this.id == "Button71") {
			if(freePoints>0) {
				freePoints--;	
			}
			else {
				Wind--;
			}
		}
		// ========	TOLGO 1 DA SOLAR  ===============================================================
		// TASTO -SOLAR
			/*
				Solar contiene già il nuovo valore
				Se Solar>0, aggiunto 1 a Fossil.
				Controllo che Fossil<101. Se Fossil va a 101, allora Fossil torna a 100 e tutti gli altri campi vanno a 0
				
				Se Solar = 0, allora aggiusto Fossil.
			*/
		if(this.id == "Button73") {
			if(Solar>0) {
				freePoints++;
			}
			else {
				if(OldSolar == 1) {
					freePoints++;
				}	
			}
		}
		// ========	AGGIUNGO 1 A SOLAR ================================================================
		// TASTO +SOLAR
		if(this.id == "Button75") {
			/*
				Solar contiene già il nuovo valore del click
				Se Solar<100 -> tolgo 1 a Fossil.
				Ma devo controllare che Fossil non vada sotto 0.
				Se va sotto 0, Fossil torna a 0 e Solar torna indietro di 1.
			*/
			if(freePoints>0) {
				freePoints--;
			}
			else {
				Solar--;
			}
		}
		// ========	TOLGO 1 DA HYDRO  ===============================================================
		// TASTO -HYDRO
			/*
				Hydro contiene già il nuovo valore
				Se Hydro>0, aggiunto 1 a Fossil.
				Controllo che Fossil<101. Se Fossil va a 101, allora Fossil torna a 100 e tutti gli altri campi vanno a 0
				
				Se Hydro = 0, allora aggiusto Fossil.
			*/
		if(this.id == "Button77") {
			if(Hydro>0) {
				freePoints++;
			}
			else {
				if(OldHydro == 1) {
					freePoints++;
				}	
			}
		}
		// ========	AGGIUNGO 1 A HYDRO ================================================================
		// TASTO +HYDRO
		if(this.id == "Button79") {
			/*
				HYDRO contiene già il nuovo valore del click
				Se HYDRO<100 -> tolgo 1 a Fossil.
				Ma devo controllare che Fossil non vada sotto 0.
				Se va sotto 0, Fossil torna a 0 e Hydro torna indietro di 1.
			*/
			if(freePoints>0) {
				freePoints--;
			}
			else {
				Hydro--;
			}
		}
		// ========	TOLGO 1 DA BIOFUELS  ===============================================================
		// TASTO -BIOFUELS
			/*
				Biofuels contiene già il nuovo valore
				Se Biofuels>0, aggiunto 1 a Fossil.
				Controllo che Fossil<101. Se Fossil va a 101, allora Fossil torna a 100 e tutti gli altri campi vanno a 0
			*/
		if(this.id == "Button81") {
			if(Biofuels>0) {
				freePoints++;
			}
			else {
				if(OldBiofuels == 1) {
					freePoints++;
				}	
			}
		}
		// ========	AGGIUNGO 1 A Biofuels ================================================================
		// TASTO +Biofuels
		if(this.id == "Button83") {
			/*
				Biofuels contiene già il nuovo valore del click
				Se Biofuels<100 -> tolgo 1 a Fossil.
				Ma devo controllare che Fossil non vada sotto 0.
				Se va sotto 0, Fossil torna a 0 e Biofuels torna indietro di 1.
			*/
			if(freePoints>0) {
				freePoints--;
			}
			else {
				Biofuels--;
			}
		}
		// ========	TOLGO 1 DA Nuclear  ===============================================================
		// TASTO -Nuclear
			/*
				Nuclear contiene già il nuovo valore
				Se Nuclear>0, aggiunto 1 a Fossil.
				Controllo che Fossil<101. Se Fossil va a 101, allora Fossil torna a 100 e tutti gli altri campi vanno a 0
				
				Se Nuclear = 0, allora aggiusto Fossil.
			*/
		if(this.id == "Button85") {
			if(Nuclear>0) {
				freePoints++;
			}
			else {
				if(OldNuclear == 1) {
					freePoints++;
				}	
			}
		}
		// ========	AGGIUNGO 1 A Nuclear ================================================================
		// TASTO +Nuclear
		if(this.id == "Button87") {
			/*
				Nuclear contiene già il nuovo valore del click
				Se Nuclear<100 -> tolgo 1 a Fossil.
				Ma devo controllare che Fossil non vada sotto 0.
				Se va sotto 0, Fossil torna a 0 e Nuclear torna indietro di 1.
			*/
			if(freePoints>0) {
				freePoints--;
			}
			else {
				Nuclear--;
			}
		}
		// ========	TOLGO 1 DA Fossil  ===============================================================
		// TASTO -Fossil
			/*
				Fossil contiene già il nuovo valore
				Se Fossil>0, aggiunto 1 a... Biofuels
				Controllo che Biofuels<101. Se Biofuels va a 101, allora Biofuels torna a 100 e tutti gli altri campi vanno a 0
				
				Se Fossil = 0, allora aggiusto Biofuels.
			*/
		if(this.id == "Button89") {
			if(Fossil>0) {
				freePoints++;
			}
			else {
				if(OldFossil == 1) {
					freePoints++;
				}	
			}
		}
		// ========	AGGIUNGO 1 A Fossil ================================================================
		// TASTO +Fossil
		if(this.id == "Button91") {
			/*
				Fossil contiene già il nuovo valore del click
				Se Fossil<100 -> tolgo 1 a Biofuels.
				Ma devo controllare che Biofuels non vada sotto 0.
				Se va sotto 0, Biofuels torna a 0 e Fossil torna indietro di 1.
			*/
			if(freePoints>0) {
				freePoints--;
			}
			else {
				Fossil--;
			}
		}
		document.getElementById("freePoints").innerHTML='<h6 class="py-50"><b style="font-style:italic;">Free Points: '+freePoints+'</b></h6>';
		//alert("Valore di freePoints: "+freePoints);
	}
	// ================================================ FINE OPERAZIONI FATTE PER UN SOLO CLICK ==================================================================
    // ================================================ INIZIO OPERAZIONI PER CLICK TENUTO PREMUTO E POI RILASCIATO ==============================================
    // Otherwise, if the mouse was being held, end the hold
	else if (holdActive) {
		holdActive = false;
		// end hold-only operation here, if desired
        // alert("Something");
        // alert("OldVegan: "+OldVegan+" OldVegetarian: "+OldVegetarian+" OldMeat: "+OldMeat);
        // alert("NewVegan: "+document.getElementById("f_C6").value+" NewVegetarian: "+document.getElementById("f_C7").value+" NewMeat: "+document.getElementById("f_C8").value);
        
        /*
        	TASTO -Vegan tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldVegan-OldVegetarian-OldMeat contengono i vecchi valori delle caselle f_C6-7-8)
        	Quando Nuovo Valore è più piccolo del Vecchio Valore, la difference è minore di 0 ES: 5-10 = -5
        	Se Vegan>0 (Vegan è già il nuovo valore della cella) -> a Meat aggiungo la differenza (Meat=Meat-(-difference))
        	Controllo che Meat che sale di difference rimanga entro 100. Se supera 100, allora porto Meat a 100.
        	
        	Se Vegan==0 -> aggiusto Meat.
        	Vegan non può mai andare sotto 0 con i tasti, perché i tasti vanno da 0 a 100.
        */
        if(this.id == "Button1") {
			difference=(Vegan-OldVegan);
			if(Vegan>0) {
				Meat=(Meat-difference);
				if(Meat>=100) {
					Meat=100;
					Vegan=0;
					Vegetarian=0;	
				}
			}
			else 
				Meat=(100-Vegan-Vegetarian);
		}
		// ========	AGGIUNGO Difference A VEGAN ==================================================================
		/*
        	TASTO +Vegan tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldVegan-OldVegetarian-OldMeat contengono i vecchi valori delle caselle f_C6-7-8)
        	Quando Nuovo Valore è più grande del Vecchio Valore, la difference è maggiore di 0 ES: 10-5=5
        	Se Vegan<100 (Vegan è già il nuovo valore della cella) -> a Meat sottraggo la differenza (Meat=Meat-(difference))
        	Controllo che Meat che scende di difference rimanga sopra 0. Se Meat<0, porto Meat a 0 ed aggiusto Vegan.
        	Dopo aver aggiustato Meat, controllo che Vegan non superi il limite (100-Vegetarian-Meat).
        	Se lo supera, aggiusto Vegan.
        	
        	Se Vegan = 100, gestisco caso particolare
        */
		if(this.id == "Button3") {
			difference=(Vegan-OldVegan);
			if(Vegan<100) {
				Meat=Meat-difference;
				if(Meat<0) {
					Meat=0;
					if(Vegetarian>0) {
						Vegetarian = (100-Meat-Vegan);
					}
					else {
						Vegan=100;
						Vegetarian=0;
						Meat=0;	
					}	
				}
				if(Vegan>(100-Vegetarian-Meat)) {
					Vegan=(100-Vegetarian-Meat);
				}
			}
			else {
				Vegan=100;
				Vegetarian=0;
				Meat=0;
			}
		}
		// ========	TOLGO Difference DA VEGETARIAN  ===============================================================
		/*
        	TASTO -Vegetarian tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldVegan-OldVegetarian-OldMeat contengono i vecchi valori delle caselle f_C6-7-8)
        	Quando Nuovo Valore è più piccolo del Vecchio Valore, la difference è minore di 0 ES: 5-10 = -5
        	Se Vegetarian>0 (Vegetarian è già il nuovo valore della cella) -> a Vegan aggiungo la differenza (Vegan=Vegan-(-difference))
        	Controllo che Vegan che sale di difference rimanga entro 100. Se supera 100, allora porto Vegan a 100.
        	
        	Se Vegetarian==0 -> aggiusto Vegan.
        	Vegetarian non può mai andare sotto 0 con i tasti, perché i tasti vanno da 0 a 100.
        */
		if(this.id == "Button5") {
			difference=(Vegetarian-OldVegetarian);
			if(Vegetarian>0) {
				Vegan=(Vegan-difference);
				if(Vegan>=100) {
					Vegan=100;
					Vegetarian=0;
					Meat=0;
				}
			}
			else Vegan=(100-Vegetarian-Meat);
		}
		// ========	AGGIUNGO Difference A VEGETARIAN ================================================================
		/*
        	TASTO +Vegetarian tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldVegan-OldVegetarian-OldMeat contengono i vecchi valori delle caselle f_C6-7-8)
        	Quando Nuovo Valore è più grande del Vecchio Valore, la difference è maggiore di 0 ES: 10-5=5
        	Se Vegetarian<100 (Vegetarian è già il nuovo valore della cella) -> a Meat sottraggo la differenza (Meat=Meat-(difference))
        	Controllo che Meat che scende di difference rimanga sopra 0. Se Meat<0, porto Meat a 0 ed aggiusto Vegan.
        	Dopo aver aggiustato Meat, controllo che Vegetarian non superi il limite (100-Vegan-Meat).
        	Se lo supera, aggiusto Vegetarian.
        	
        	Se Vegetarian = 100, gestisco caso particolare
        */
		if(this.id == "Button7") {
			difference=(Vegetarian-OldVegetarian);
			if(Vegetarian<100) {
				Meat=(Meat-difference);
				if(Meat<0) {
					Meat=0;
					if(Vegan>0) {
						Vegan = (100-Meat-Vegetarian);
					}
					else {
						Vegan=0;
						Vegetarian=100;
						Meat=0;	
					}
				}
				if(Vegetarian>(100-Vegan-Meat)) {
					Vegetarian=(100-Vegan-Meat);
				}
			}
			else {
				Vegetarian=100;
				Vegan=0;
				Meat=0;
			}
		}
		// ========	TOLGO Difference DA MEAT =========================================================================
		/*
        	TASTO -Meat tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldVegan-OldVegetarian-OldMeat contengono i vecchi valori delle caselle f_C6-7-8)
        	Quando Nuovo Valore è più piccolo del Vecchio Valore, la difference è minore di 0 ES: 5-10 = -5
        	Se Meat>0 (Vegetarian è già il nuovo valore della cella) -> a Vegetarian aggiungo la differenza (Vegetarian=Vegetarian-(-difference))
        	Controllo che Vegetarian che sale di difference rimanga entro 100. Se supera 100, allora porto Meat a 100.
        	
        	Se Meat==0 -> aggiusto Vegetarian.
        	Meat non può mai andare sotto 0 con i tasti, perché i tasti vanno da 0 a 100.
        */
		if(this.id == "Button9") {
			difference=(Meat-OldMeat);
			if(Meat>0) {
				Vegetarian=(Vegetarian-difference);
				if(Vegetarian>=100) {
					Vegetarian=100;
					Vegan=0;
					Meat=0;
				}
			}
			else Vegetarian=(100-Vegan-Meat);
		}
		// ========	AGGIUNGO Difference A MEAT =======================================================================
		/*
        	TASTO +Meat tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldVegan-OldVegetarian-OldMeat contengono i vecchi valori delle caselle f_C6-7-8)
        	Quando Nuovo Valore è più grande del Vecchio Valore, la difference è maggiore di 0 ES: 10-5=5
        	Se Meat<100 (Meat è già il nuovo valore della cella) -> a Vegan sottraggo la differenza (Vegan=Vegan-(difference))
        	Controllo che Vegan che scende di difference rimanga sopra 0. Se Vegan<0, porto Vegan a 0 ed aggiusto Meat.
        	Dopo aver aggiustato Vegan, controllo che Meat non superi il limite (100-Vegetarian-Vegan).
        	Se lo supera, aggiusto Vegan.
        	
        	Se Meat = 100, gestisco caso particolare
        */
		if(this.id == "Button11") {
			difference=(Meat-OldMeat);
			if(Meat<100) {
				Vegan=(Vegan-difference);
				if(Vegan<0) {
					Vegan=0;
					if(Vegetarian>0) {
						Vegetarian = (100-Meat-Vegan);
					}
					else {
						Vegan=0;
						Vegetarian=0;
						Meat=100;	
					}
				}
				if(Meat>(100-Vegetarian-Vegan)) {
					Meat=(100-Vegetarian-Vegan);
				}
			}
			else {
				Meat=100;
				Vegan=0;
				Vegetarian=0;
			}
		}
		/*
        	TASTO -Wind tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldWind-Oldsolar-OldHydro, ecc, ecc, ecc, 
        	contengono i vecchi valori delle caselle em_J21 -> em_J26).
        	Quando Nuovo Valore è più piccolo del Vecchio Valore, la difference è minore di 0 ES: 5-10 = -5
        	Se Wind>0 (Wind è già il nuovo valore della cella) -> a Fossil aggiungo la differenza (Fossil=Fossil-(-difference))
        	Controllo che Fossil che sale di difference rimanga entro 100. Se supera 100, allora porto Fossil a 100.
        	
        	Se Wind=0 -> aggiusto fossil.
        	Wind non può mai andare sotto 0 con i tasti, perché i tasti vanno da 0 a 100.
        */
        if(this.id == "Button69") {
        	freeWind = (Wind-OldWind);
        	freeTotal=-(freeWind+freeSolar+freeHydro+freeBiofuels+freeNuclear+freeFossil);
        }
		// ========	AGGIUNGO Difference A Wind ==================================================================
		/*
        	TASTO +Wind tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldWind-OldSolar-OldHydro, ecc, ecc, ecc 
        	contengono i vecchi valori delle caselle em_J21 -> em_J26)
        	Quando Nuovo Valore è più grande del Vecchio Valore, la difference è maggiore di 0 ES: 10-5=5
        	Se Wind<100 (wind è già il nuovo valore della cella) -> a Fossil sottraggo la differenza (Fossil=Fossil-(difference))
        	Controllo che Fossil che scende di difference rimanga sopra 0. Se Fossil<0, porto Fossil a 0 ed aggiusto Biofuels.
        	
        	Se Wind = 100, gestisco caso particolare
        */
		if(this.id == "Button71") {
			difference=(Wind-OldWind);
			if(freeTotal>=difference) {
				freeTotal=freeTotal-difference;
			}
			else {
				Wind = (100-Solar-Hydro-Biofuels-Nuclear-Fossil);
				freeTotal=0;
			}
		}
		// ========	TOLGO Difference A Solar ==================================================================
		/*
        	TASTO -solar tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldWind-Oldsolar-OldHydro, ecc, ecc, ecc, 
        	contengono i vecchi valori delle caselle em_J21 -> em_J26).
        	Quando Nuovo Valore è più piccolo del Vecchio Valore, la difference è minore di 0 ES: 5-10 = -5
        	Se solar>0 (solar è già il nuovo valore della cella) -> a Fossil aggiungo la differenza (Fossil=Fossil-(-difference))
        	Controllo che Fossil che sale di difference rimanga entro 100. Se supera 100, allora porto Fossil a 100.
        	
        	Se solar=0 -> aggiusto fossil.
        	solar non può mai andare sotto 0 con i tasti, perché i tasti vanno da 0 a 100.
        */
        if(this.id == "Button73") {
			freeSolar = (Solar-OldSolar);
			freeTotal=-(freeWind+freeSolar+freeHydro+freeBiofuels+freeNuclear+freeFossil);
		}
		// ========	AGGIUNGO Difference A Solar ==================================================================
		/*
        	TASTO +solar tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldWind-OldSolar-OldHydro, ecc, ecc, ecc 
        	contengono i vecchi valori delle caselle em_J21 -> em_J26)
        	Quando Nuovo Valore è più grande del Vecchio Valore, la difference è maggiore di 0 ES: 10-5=5
        	Se Solar<100 (Solar è già il nuovo valore della cella) -> a Fossil sottraggo la differenza (Fossil=Fossil-(difference))
        	Controllo che Fossil che scende di difference rimanga sopra 0. Se Fossil<0, porto Fossil a 0 ed aggiusto Biofuels.
        	
        	Se Solar = 100, gestisco caso particolare
        */
		if(this.id == "Button75") {
			difference=(Solar-OldSolar);
			
			if(freeTotal>=difference) {
				freeTotal=freeTotal-difference;
			}
			else {
				Solar = (100-Wind-Hydro-Biofuels-Nuclear-Fossil);
				freeTotal=0;
			}
		}
		// ========	TOLGO Difference A Hydro ==================================================================
		/*
        	TASTO -Hydro tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldWind-Oldsolar-OldHydro, ecc, ecc, ecc, 
        	contengono i vecchi valori delle caselle em_J21 -> em_J26).
        	Quando Nuovo Valore è più piccolo del Vecchio Valore, la difference è minore di 0 ES: 5-10 = -5
        	Se Hydro>0 (Hydro è già il nuovo valore della cella) -> a Fossil aggiungo la differenza (Fossil=Fossil-(-difference))
        	Controllo che Fossil che sale di difference rimanga entro 100. Se supera 100, allora porto Fossil a 100.
        	
        	Se Hydro=0 -> aggiusto fossil.
        	Hydro non può mai andare sotto 0 con i tasti, perché i tasti vanno da 0 a 100.
        */
        if(this.id == "Button77") {
			freeHydro=(Hydro-OldHydro);
			freeTotal=-(freeWind+freeSolar+freeHydro+freeBiofuels+freeNuclear+freeFossil);
		}
		// ========	AGGIUNGO Difference A Hydro ==================================================================
		/*
        	TASTO +Hydro tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldWind-OldSolar-OldHydro, ecc, ecc, ecc 
        	contengono i vecchi valori delle caselle em_J21 -> em_J26)
        	Quando Nuovo Valore è più grande del Vecchio Valore, la difference è maggiore di 0 ES: 10-5=5
        	Se Hydro<100 (Hydro è già il nuovo valore della cella) -> a Fossil sottraggo la differenza (Fossil=Fossil-(difference))
        	Controllo che Fossil che scende di difference rimanga sopra 0. Se Fossil<0, porto Fossil a 0 ed aggiusto Hydro.
        	
        	Se Hydro = 100, gestisco caso particolare
        */
		if(this.id == "Button79") {
			freeHydro=(Hydro-OldHydro);
			
			if(freeTotal>=difference) {
				freeTotal=freeTotal-difference;
			}
			else {
				Hydro = (100-Wind-Solar-Biofuels-Nuclear-Fossil);
				freeTotal=0;
			}
		}
		// ========	TOLGO Difference A Biofuels ==================================================================
		/*
        	TASTO -Biofuels tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldWind-Oldsolar-OldHydro, ecc, ecc, ecc, 
        	contengono i vecchi valori delle caselle em_J21 -> em_J26).
        	Quando Nuovo Valore è più piccolo del Vecchio Valore, la difference è minore di 0 ES: 5-10 = -5
        	Se Biofuels>0 (Biofuels è già il nuovo valore della cella) -> a Fossil aggiungo la differenza (Fossil=Fossil-(-difference))
        	Controllo che Fossil che sale di difference rimanga entro 100. Se supera 100, allora porto Fossil a 100.
        	
        	Se Biofuels=0 -> aggiusto fossil.
        	Hydro non può mai andare sotto 0 con i tasti, perché i tasti vanno da 0 a 100.
        */
        if(this.id == "Button81") {
			freeBiofuels=(Biofuels-OldBiofuels);
			freeTotal=-(freeWind+freeSolar+freeHydro+freeBiofuels+freeNuclear+freeFossil);
		}
		// ========	AGGIUNGO Difference A Biofuels ==================================================================
		/*
        	TASTO +Biofuels tenuto a lungo
        	
        	Trovo la differenza come Nuovo Valore-Vecchio Valore (OldWind-OldSolar-OldHydro, ecc, ecc, ecc 
        	contengono i vecchi valori delle caselle em_J21 -> em_J26)
        	Quando Nuovo Valore è più grande del Vecchio Valore, la difference è maggiore di 0 ES: 10-5=5
        	Se Biofuels<100 (Biofuels è già il nuovo valore della cella) -> a Fossil sottraggo la differenza (Fossil=Fossil-(difference))
        	Controllo che Fossil che scende di difference rimanga sopra 0. Se Fossil<0, porto Fossil a 0 ed aggiusto Hydro.
        	
        	Se Biofuels = 100, gestisco caso particolare
        */
		if(this.id == "Button83") {
			freeBiofuels=(Biofuels-OldBiofuels);
			
			if(freeTotal>=difference) {
				freeTotal=freeTotal-difference;
			}
			else {
				Biofuels = (100-Wind-Solar-Hydro-Nuclear-Fossil);
				freeTotal=0;
			}
		}
		// ========	TOLGO Difference A Nuclear ==================================================================
		/*
        	TASTO -Nuclear tenuto a lungo
        */
        if(this.id == "Button85") {
			freeNuclear=(Nuclear-OldNuclear);
			freeTotal=-(freeWind+freeSolar+freeHydro+freeBiofuels+freeNuclear+freeFossil);
		}
		// ========	AGGIUNGO Difference A Nuclear ==================================================================
		/*
        	TASTO +Nuclear tenuto a lungo
        	
        */
		if(this.id == "Button87") {
			freeNuclear=(Nuclear-OldNuclear);
			
			if(freeTotal>=difference) {
				freeTotal=freeTotal-difference;
			}
			else {
				Nuclear = (100-Wind-Solar-Hydro-Biofuels-Fossil);
				freeTotal=0;
			}
		}
		// ========	TOLGO Difference A Fossil ==================================================================
		/*
        	TASTO -Fossil tenuto a lungo
        */
        if(this.id == "Button89") {
			freeFossil=(Fossil-OldFossil);
			freeTotal=-(freeWind+freeSolar+freeHydro+freeBiofuels+freeNuclear+freeFossil);
		}
		// ========	AGGIUNGO Difference A Fossil ==================================================================
		/*
        	TASTO +Fossil tenuto a lungo
        	
        */
		if(this.id == "Button91") {
			freeFossil=(Fossil-OldFossil);
			
			if(freeTotal>=difference) {
				freeTotal=freeTotal-difference;
			}
			else {
				Fossil = (100-Wind-Solar-Hydro-Biofuels-Nuclear);
				freeTotal=0;
			}
		}
		//alert("Valore di freeTotal: "+freeTotal);
		document.getElementById("freePoints").innerHTML='<h6 class="py-50"><b style="font-style:italic;">Free Points: '+freeTotal+'</b></h6>';
	}
	// ================================================ FINE OPERAZIONI CLICK TENUTO PREMUTO =====================================================================
	// ------------------------------------------------ Aggiornamento caselle a video ----------------------------------------------------------------------------
	document.getElementById("f_C6").value = Vegan;
	document.getElementById("f_C7").value = Vegetarian;
	document.getElementById("f_C8").value = Meat;
	document.getElementById("em_J21").value = Wind;
	document.getElementById("em_J22").value = Solar;
	document.getElementById("em_J23").value = Hydro;
	document.getElementById("em_J24").value = Biofuels;
	document.getElementById("em_J25").value = Nuclear;
	document.getElementById("em_J26").value = Fossil;
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//=========================================== Controllo è la funzione che controlla le caselle di testo quando vengono usate ======================================
function Controllo(whoCall) {
	console.log("Sono dentro Controllo");
   	
   	var position=0;
   	var name = "";
   	var difference=0;
   	
   	var list = document.querySelectorAll('.controllo'); 	// -> NodeList object quindi item non è un array ma un elemento della lista
	var arr = Array.from(list);								// -> Trasformo NodeList object in array, perchè .reduce funziona sugli array
   	
   	// Trasformo la lista in un array di valori e segno in block l'indice del campo che è stato modificato
   	// sessionStorage.getItem(list[i].getAttribute('id') è il valore del campo registrato prima del focus sul campo stesso
   	// la registrazione avviene tramite onload e onfocus all'interno del HTML dell'input type.
   	for(var i=0; i<arr.length; i++) {
		if(whoCall == list[i].getAttribute('id')) {
			position=i;
			name = list[i].getAttribute('id');
		}
		arr[i] = parseInt(list[i].value);
	}

	/*
		Ho modificato casella f_C6
		difference = NuovoValore-VecchiValore
		
		Se differenza>0 -> -Meat +Vegan -> Meat-difference -> +Vegan è il valore della caselle di testo.
		Controllo Meat -> se Meat<0 -> Meat==0 ed aggiusto Vegan.
		
		Se differenza<0 -> +Meat -Vegan -> Meat-(-difference)) -> -Vegan è il nuovo valore della casella di testo.
		Controllo MEat -> se Meat>100 -> Meat==100 ed aggiusto gli altri.
	*/
	if(name == "f_C6") {
		console.log("Dentro f_C6");
		if(isNaN(arr[position]) || arr[position]<0 || arr[position]>100) {
			//console.log("Storage: "+sessionStorage.getItem("f_C6"));
			arr[0] = sessionStorage.getItem("f_C6");
		}
		else {
			// Difference = Valore FINALE - Valore INIZIALE -> Se >0, ho aggiunto - Se <0, ho tolto.
			// difference Vegan
			difference = arr[position]-sessionStorage.getItem("f_C6");
			console.log("difference: "+difference);
			// Sto aggiungendo a Vegan, quindi sottraggo da Meat ovvero arr[2]
			if(difference>0) {
				arr[2] = arr[2]-difference;
				if(arr[2]<0) {
					arr[2]=0;
					arr[1]=(100-arr[0]-arr[2]);
				}
			}
			// Sto togliendo da Vegan, quindi aggiungo a Meat ovvero arr[2]
			else {
				arr[2]=arr[2]-difference;
				if(arr[2]>100) {
					arr[2] = 100;
					arr[0] = 0;
					arr[1] = 0;	
				}				
			}
		}
	}
	/*
		Ho modificato casella f_C7
		difference = NuovoValore-VecchiValore
		
		Se differenza>0 -> -Meat +Vegetarian -> Meat-difference -> +Vegan è il valore della caselle di testo.
		Controllo Meat -> se Meat<0 -> Meat==0 ed aggiusto Vegan.
		
		Se differenza<0 -> +Meat -Vegetarian -> Meat-(-difference)) -> -Vegetarian è il nuovo valore della casella di testo.
		Controllo Meat -> se Meat>100 -> Meat==100 ed aggiusto gli altri.
	*/
	if(name == "f_C7") {
		if(isNaN(arr[position]) || arr[position]<0 || arr[position]>100) {
			//console.log("Storage: "+sessionStorage.getItem("f_C7"));
			arr[1] = sessionStorage.getItem("f_C7");
		}
		else {
			// difference Vegetarian
			difference = arr[position]-sessionStorage.getItem("f_C7");
			//console.log("difference: "+difference);
			// Sto aggiungendo a Vegetarian, quindi sottraggo da Meat ovvero arr[2]
			if(difference > 0) {
				arr[2] = arr[2]-difference;
				if(arr[2]<0) {
					arr[2]=0;
					arr[0]=(100-arr[1]-arr[2]);
				}
			}
			// Sto togliendo da Vegetarian, quindi aggiungo a Vegan ovvero arr[0]
			else {
				arr[0]=arr[0]-difference;
				if(arr[0]>100) {
					arr[0] = 100;
					arr[1] = 0;
					arr[2] = 0;	
				}
			}
		}
	}
	
	/*
		Ho modificato casella f_C8
		difference = NuovoValore-VecchiValore
		
		Se differenza>0 -> -Vegan +Meat -> Vegetarian-difference -> +Meat è il valore della casella di testo.
		Controllo Vegan -> se Vegan<0 -> Vegan==0 ed aggiusto Meat.
		
		Se differenza<0 -> -Meat +Vegetarian -> Vegetarian-(-difference)) -> -Meat è il nuovo valore della casella di testo.
		Controllo Vegetarian -> se Vegetarian>100 -> Vegetarian==100 ed aggiusto gli altri.
	*/
	if(name == "f_C8") {
		//console.log("Dentro C8")
		if(isNaN(arr[position]) || arr[position]<0 || arr[position]>100) {
			//console.log("Storage: "+sessionStorage.getItem("f_C8"));
			arr[2] = sessionStorage.getItem("f_C8");
		}
		else {
			difference = arr[position]-sessionStorage.getItem("f_C8");
			//alert("difference: "+difference);
			// Sto aggiungendo a Meat, quindi sottraggo da Vegan ovvero arr[0]
			if(difference > 0) {
				arr[0] = arr[0]-difference;
				if(arr[0]<0) {
					arr[0]=0;
					arr[2]=(100-arr[0]-arr[1]);
				}
			}
			// Sto togliendo da Meat, quindi aggiungo a Vegetarian ovvero arr[1]
			else {
				arr[1]=arr[1]-difference;
				if(arr[1]>100) {
					arr[1] = 100;
					arr[0] = 0;
					arr[2] = 0;	
				}
			}
		}
	}
	document.getElementById("f_C6").value = arr[0];
	document.getElementById("f_C7").value = arr[1];
	document.getElementById("f_C8").value = arr[2];
}


	function EnergyCheck(whoCall) {
		//console.log("Sono dentro EnergyCheck "+whoCall);
		
		var position=0;
	   	var name = "";
	   	var difference=0;
	   	
	   	var list = document.querySelectorAll('[class*="touchspin form-control"]'); 	// -> NodeList object quindi item non è un array ma un elemento della lista
		var arr = Array.from(list);											// -> Trasformo NodeList object in array, perchè .reduce funziona sugli array
		
		// Trasformo la lista in un array di valori e segno in block l'indice del campo che è stato modificato
	   	// sessionStorage.getItem(list[i].getAttribute('id') è il valore del campo registrato prima del focus sul campo stesso
	   	// la registrazione avviene tramite onload e onfocus all'interno del HTML dell'input type.
	   	for(var i=17; i<23; i++) {
			if(whoCall == list[i].getAttribute('id')) {
				position=i;
				name = list[i].getAttribute('id');
			}
			arr[i] = parseInt(list[i].value);
		}
		
		//alert("Mi ha chiamato input: "+name+" Posizione: "+position);
		
		if(name == "em_J21") {
			//alert("Sono dentro em_J21");
			if(isNaN(arr[position]) || arr[position]<0 || arr[position]>100) {
				arr[17] = sessionStorage.getItem("em_J21");
			}
			else {
				difference = arr[position]-sessionStorage.getItem("em_J21");
				// Se difference>0 -> Aggiungo a Wind e tolgo da Fossil
				if(difference > 0) {
					if(freeTotal>=difference)
						freeTotal=freeTotal-difference;
					else 
						arr[17]=(100-arr[18]-arr[19]-arr[20]-arr[21]-arr[22]);
				}
				// Se difference<=0 -> Tolgo da Wind e aggiungo a Fossil
				else {
					freeWind=-(difference);
					freeTotal=(freeWind+freeSolar+freeHydro+freeBiofuels+freeNuclear+freeFossil);
				}
			}
		}
		
		if(name == "em_J22") {
			//alert("Sono dentro em_J22");
			if(isNaN(arr[position]) || arr[position]<0 || arr[position]>100) {
				arr[18] = sessionStorage.getItem("em_J22");
			}
			else {
				difference = arr[position]-sessionStorage.getItem("em_J22");
				// Se difference>0 -> Aggiungo a Solar e tolgo da Fossil
				if(difference > 0) {
					if(freeTotal>=difference)
						freeTotal=freeTotal-difference;
					else 
						arr[18]=(100-arr[17]-arr[19]-arr[20]-arr[21]-arr[22]);
				}
				// Se difference<=0 -> Tolgo da Solar e aggiungo a Fossil
				else {
					freeSolar=-(difference);
					freeTotal=(freeWind+freeSolar+freeHydro+freeBiofuels+freeNuclear+freeFossil);
				}
			}
		}
		
		if(name == "em_J23") {
			//alert("Sono dentro em_J23");
			if(isNaN(arr[position]) || arr[position]<0 || arr[position]>100) {
				arr[19] = sessionStorage.getItem("em_J23");
			}
			else {
				difference = arr[position]-sessionStorage.getItem("em_J23");
				// Se difference>0 -> Aggiungo a Hydro e tolgo da Fossil
				if(difference > 0) {
					if(freeTotal>=difference)
						freeTotal=freeTotal-difference;
					else 
						arr[19]=(100-arr[17]-arr[18]-arr[20]-arr[21]-arr[22]);
				}
				// Se difference<=0 -> Tolgo da Hydro e aggiungo a Fossil
				else {
					freeHydro=-(difference);
					freeTotal=(freeWind+freeSolar+freeHydro+freeBiofuels+freeNuclear+freeFossil);
				}
			}
		}
		
		if(name == "em_J24") {
			//alert("Sono dentro em_J24");
			if(isNaN(arr[position]) || arr[position]<0 || arr[position]>100) {
				arr[20] = sessionStorage.getItem("em_J24");
			}
			else {
				difference = arr[position]-sessionStorage.getItem("em_J24");
				// Se difference>0 -> Aggiungo a Biofuels e tolgo da Fossil
				if(difference > 0) {
					if(freeTotal>=difference)
						freeTotal=freeTotal-difference;
					else 
						arr[20]=(100-arr[17]-arr[18]-arr[19]-arr[21]-arr[22]);
				}
				// Se difference<=0 -> Tolgo da Biofuels e aggiungo a Fossil
				else {
					freeBiofuels=-(difference);
					freeTotal=(freeWind+freeSolar+freeHydro+freeBiofuels+freeNuclear+freeFossil);
				}
			}
		}
		
		if(name == "em_J25") {
			//alert("Sono dentro em_J25");
			if(isNaN(arr[position]) || arr[position]<0 || arr[position]>100) {
				arr[21] = sessionStorage.getItem("em_J25");
			}
			else {
				difference = arr[position]-sessionStorage.getItem("em_J25");
				// Se difference>0 -> Aggiungo a Nuclear e tolgo da Fossil
				alert("Valore di difference: "+difference);
				if(difference > 0) {
					if(freeTotal>=difference)
						freeTotal=freeTotal-difference;
					else 
						arr[21]=(100-arr[17]-arr[18]-arr[19]-arr[20]-arr[22]);
				}
				// Se difference<=0 -> Tolgo da Nuclear e aggiungo a Fossil
				else {
					freeNuclear=-(difference);
					freeTotal=(freeWind+freeSolar+freeHydro+freeBiofuels+freeNuclear+freeFossil);
				}
			}
		}
		
		if(name == "em_J26") {
			//alert("Sono dentro em_J26");
			if(isNaN(arr[position]) || arr[position]<0 || arr[position]>100) {
				arr[22] = sessionStorage.getItem("em_J26");
			}
			else {
				difference = arr[position]-sessionStorage.getItem("em_J26");
				// Se difference>0 -> Aggiungo a Fossil e tolgo da Biofuels
				if(difference > 0) {
					if(freeTotal>=difference)
						freeTotal=freeTotal-difference;
					else 
						arr[22]=(100-arr[17]-arr[18]-arr[19]-arr[20]-arr[21]);
				}
				// Se difference<=0 -> Tolgo da Fossil e aggiungo a Fossil
				else {
					freeFossil=-(difference);
					freeTotal=(freeWind+freeSolar+freeHydro+freeBiofuels+freeNuclear+freeFossil);
				}
			}
		}
		//alert("freeTotal: "+freeTotal);
		document.getElementById("freePoints").innerHTML='<h6 class="py-50"><b style="font-style:italic;">Free Points: '+freeTotal+'</b></h6>';
		document.getElementById("em_J21").value = arr[17];
		document.getElementById("em_J22").value = arr[18];
		document.getElementById("em_J23").value = arr[19];
		document.getElementById("em_J24").value = arr[20];
		document.getElementById("em_J25").value = arr[21];
		document.getElementById("em_J26").value = arr[22];
}