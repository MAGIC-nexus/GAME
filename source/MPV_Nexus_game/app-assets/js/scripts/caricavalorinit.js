function StartValuesA() {
if (localStorage.getItem("valori_inizialiA") === null)
{
var checkregion = document.querySelector('input[name="region"]:checked'); 
if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
	document.getElementById("A8_f").value = '7';
	//----------------------------------------------------------------------------------
	document.getElementById("f_D4").value = '2790';
	document.getElementById("f_D5").value = '20';
	document.getElementById("f_C6").value = '0';
	document.getElementById("f_C7").value = '6';
	document.getElementById("f_C8").value = '94';
	//----------------------------------------------------------------------------------
	document.getElementById("E30").value = '0';
	document.getElementById("E31").value = '0';
	document.getElementById("E32").value = '0'; 
	//----------------------------------------------------------------------------------
	document.getElementById("G14").value = '0';
	document.getElementById("G15").value = '0'; 	
	document.getElementById("G19").value = '0';
	//------------------------------------------------------------------------------------
	document.getElementById("em_J21").value = '12';
	document.getElementById("em_J22").value = '3';
	document.getElementById("em_J23").value = '18';
	document.getElementById("em_J24").value = '3';
	document.getElementById("em_J25").value = '4';
	document.getElementById("em_J26").value = '60';
	//-------------------------------------------------------------------------------------
	document.getElementById("e_N5").value = '0';
	document.getElementById("e_N6").value = '0';
	document.getElementById("e_N7").value = '0';
	document.getElementById("e_N8").value = '0';
	document.getElementById("e_N11").value = '2';  
	document.getElementById("e_N12").value = '0';  
	document.getElementById("e_N13").value = '26';  
	document.getElementById("L30").value = '74';
	document.getElementById("L31").value = '0';
	document.getElementById("L32").value = '0';

} 
else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
	
	document.getElementById("A8_f").value = '7';
	//----------------------------------------------------------------------------------
	document.getElementById("f_D4").value = '2660';
	document.getElementById("f_D5").value = '20';
	document.getElementById("f_C6").value = '0';
	document.getElementById("f_C7").value = '6';
	document.getElementById("f_C8").value = '94';
	//----------------------------------------------------------------------------------
	document.getElementById("E30").value = '0';
	document.getElementById("E31").value = '17';
	document.getElementById("E32").value = '0'; 
	//----------------------------------------------------------------------------------
	document.getElementById("G14").value = '0';
	document.getElementById("G15").value = '0'; 	
	document.getElementById("G19").value = '0';
	//------------------------------------------------------------------------------------
	document.getElementById("em_J21").value = '8';
	document.getElementById("em_J22").value = '1';
	document.getElementById("em_J23").value = '21';
	document.getElementById("em_J24").value = '8';
	document.getElementById("em_J25").value = '34';
	document.getElementById("em_J26").value = '28';
	//-------------------------------------------------------------------------------------
	document.getElementById("e_N5").value = '0';
	document.getElementById("e_N6").value = '0';
	document.getElementById("e_N7").value = '0';
	document.getElementById("e_N8").value = '0';
	document.getElementById("e_N11").value = '2';  
	document.getElementById("e_N12").value = '0';  
	document.getElementById("e_N13").value = '41';  
	document.getElementById("L30").value = '81';
	document.getElementById("L31").value = '0';
	document.getElementById("L32").value = '0';
	
}

else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
	
	document.getElementById("A8_f").value = '7';
	//----------------------------------------------------------------------------------
	document.getElementById("f_D4").value = '2920';
	document.getElementById("f_D5").value = '20';
	document.getElementById("f_C6").value = '0';
	document.getElementById("f_C7").value = '6';
	document.getElementById("f_C8").value = '94';
	//----------------------------------------------------------------------------------
	document.getElementById("E30").value = '17';
	document.getElementById("E31").value = '11';
	document.getElementById("E32").value = '0'; 
	//----------------------------------------------------------------------------------
	document.getElementById("G14").value = '0';
	document.getElementById("G15").value = '0'; 	
	document.getElementById("G19").value = '0';
	//------------------------------------------------------------------------------------
	document.getElementById("em_J21").value = '12';
	document.getElementById("em_J22").value = '6';
	document.getElementById("em_J23").value = '6';
	document.getElementById("em_J24").value = '7';
	document.getElementById("em_J25").value = '14';
	document.getElementById("em_J26").value = '55';
	//-------------------------------------------------------------------------------------
	document.getElementById("e_N5").value = '0';
	document.getElementById("e_N6").value = '0';
	document.getElementById("e_N7").value = '0';
	document.getElementById("e_N8").value = '0';
	document.getElementById("e_N11").value = '5';  
	document.getElementById("e_N12").value = '0';  
	document.getElementById("e_N13").value = '13';  
	document.getElementById("L30").value = '74';
	document.getElementById("L31").value = '10';
	document.getElementById("L32").value = '0';
}

else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
	
	document.getElementById("A8_f").value = '7';
	//----------------------------------------------------------------------------------
	document.getElementById("f_D4").value = '2890';
	document.getElementById("f_D5").value = '20';
	document.getElementById("f_C6").value = '0';
	document.getElementById("f_C7").value = '6';
	document.getElementById("f_C8").value = '94';
	//----------------------------------------------------------------------------------
	document.getElementById("E30").value = '0';
	document.getElementById("E31").value = '0';
	document.getElementById("E32").value = '0'; 
	//----------------------------------------------------------------------------------
	document.getElementById("G14").value = '0';
	document.getElementById("G15").value = '0'; 	
	document.getElementById("G19").value = '0';
	//------------------------------------------------------------------------------------
	document.getElementById("em_J21").value = '11';
	document.getElementById("em_J22").value = '2';
	document.getElementById("em_J23").value = '9';
	document.getElementById("em_J24").value = '2';
	document.getElementById("em_J25").value = '35';
	document.getElementById("em_J26").value = '41';
	//-------------------------------------------------------------------------------------
	document.getElementById("e_N5").value = '0';
	document.getElementById("e_N6").value = '0';
	document.getElementById("e_N7").value = '0';
	document.getElementById("e_N8").value = '0';
	document.getElementById("e_N11").value = '5';  
	document.getElementById("e_N12").value = '0';  
	document.getElementById("e_N13").value = '13';  
	document.getElementById("L30").value = '77';
	document.getElementById("L31").value = '0';
	document.getElementById("L32").value = '0';
	
} else {}

}
localStorage.setItem("valori_inizialiA", true);
};

function StartValuesB() {
	if (localStorage.getItem("valori_inizialiB") === null)
	{
	var checkregion = document.querySelector('input[name="region"]:checked'); 
	if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
		document.getElementById("A8_f").value = '7';
		//----------------------------------------------------------------------------------
		document.getElementById("f_D4").value = '2790';
		document.getElementById("f_D5").value = '20';
		document.getElementById("f_C6").value = '0';
		document.getElementById("f_C7").value = '6';
		document.getElementById("f_C8").value = '94';
		//----------------------------------------------------------------------------------
		document.getElementById("E30").value = '0';
		document.getElementById("E31").value = '0';
		document.getElementById("E32").value = '0'; 
		//----------------------------------------------------------------------------------
		document.getElementById("G14").value = '0';
		document.getElementById("G15").value = '0'; 	
		document.getElementById("G19").value = '0';
		//------------------------------------------------------------------------------------
		document.getElementById("em_J21").value = '12';
		document.getElementById("em_J22").value = '3';
		document.getElementById("em_J23").value = '18';
		document.getElementById("em_J24").value = '3';
		document.getElementById("em_J25").value = '4';
		document.getElementById("em_J26").value = '60';
		//-------------------------------------------------------------------------------------
		document.getElementById("e_N5").value = '0';
		document.getElementById("e_N6").value = '0';
		document.getElementById("e_N7").value = '0';
		document.getElementById("e_N8").value = '0';
		document.getElementById("e_N11").value = '2';  
		document.getElementById("e_N12").value = '0';  
		document.getElementById("e_N13").value = '26';  
		document.getElementById("L30").value = '74';
		document.getElementById("L31").value = '0';
		document.getElementById("L32").value = '0';

	} 
	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
		
		document.getElementById("A8_f").value = '7';
		//----------------------------------------------------------------------------------
		document.getElementById("f_D4").value = '2660';
		document.getElementById("f_D5").value = '20';
		document.getElementById("f_C6").value = '0';
		document.getElementById("f_C7").value = '6';
		document.getElementById("f_C8").value = '94';
		//----------------------------------------------------------------------------------
		document.getElementById("E30").value = '0';
		document.getElementById("E31").value = '17';
		document.getElementById("E32").value = '0'; 
		//----------------------------------------------------------------------------------
		document.getElementById("G14").value = '0';
		document.getElementById("G15").value = '0'; 	
		document.getElementById("G19").value = '0';
		//------------------------------------------------------------------------------------
		document.getElementById("em_J21").value = '8';
		document.getElementById("em_J22").value = '1';
		document.getElementById("em_J23").value = '21';
		document.getElementById("em_J24").value = '8';
		document.getElementById("em_J25").value = '34';
		document.getElementById("em_J26").value = '28';
		//-------------------------------------------------------------------------------------
		document.getElementById("e_N5").value = '0';
		document.getElementById("e_N6").value = '0';
		document.getElementById("e_N7").value = '0';
		document.getElementById("e_N8").value = '0';
		document.getElementById("e_N11").value = '2';  
		document.getElementById("e_N12").value = '0';  
		document.getElementById("e_N13").value = '41';  
		document.getElementById("L30").value = '81';
		document.getElementById("L31").value = '0';
		document.getElementById("L32").value = '0';
		
	}

	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
		
		document.getElementById("A8_f").value = '7';
		//----------------------------------------------------------------------------------
		document.getElementById("f_D4").value = '2920';
		document.getElementById("f_D5").value = '20';
		document.getElementById("f_C6").value = '0';
		document.getElementById("f_C7").value = '6';
		document.getElementById("f_C8").value = '94';
		//----------------------------------------------------------------------------------
		document.getElementById("E30").value = '17';
		document.getElementById("E31").value = '11';
		document.getElementById("E32").value = '0'; 
		//----------------------------------------------------------------------------------
		document.getElementById("G14").value = '0';
		document.getElementById("G15").value = '0'; 	
		document.getElementById("G19").value = '0';
		//------------------------------------------------------------------------------------
		document.getElementById("em_J21").value = '12';
		document.getElementById("em_J22").value = '6';
		document.getElementById("em_J23").value = '6';
		document.getElementById("em_J24").value = '7';
		document.getElementById("em_J25").value = '14';
		document.getElementById("em_J26").value = '55';
		//-------------------------------------------------------------------------------------
		document.getElementById("e_N5").value = '0';
		document.getElementById("e_N6").value = '0';
		document.getElementById("e_N7").value = '0';
		document.getElementById("e_N8").value = '0';
		document.getElementById("e_N11").value = '5';  
		document.getElementById("e_N12").value = '0';  
		document.getElementById("e_N13").value = '13';  
		document.getElementById("L30").value = '74';
		document.getElementById("L31").value = '10';
		document.getElementById("L32").value = '0';
	}

	else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
		
		document.getElementById("A8_f").value = '7';
		//----------------------------------------------------------------------------------
		document.getElementById("f_D4").value = '2890';
		document.getElementById("f_D5").value = '20';
		document.getElementById("f_C6").value = '0';
		document.getElementById("f_C7").value = '6';
		document.getElementById("f_C8").value = '94';
		//----------------------------------------------------------------------------------
		document.getElementById("E30").value = '0';
		document.getElementById("E31").value = '0';
		document.getElementById("E32").value = '0'; 
		//----------------------------------------------------------------------------------
		document.getElementById("G14").value = '0';
		document.getElementById("G15").value = '0'; 	
		document.getElementById("G19").value = '0';
		//------------------------------------------------------------------------------------
		document.getElementById("em_J21").value = '11';
		document.getElementById("em_J22").value = '2';
		document.getElementById("em_J23").value = '9';
		document.getElementById("em_J24").value = '2';
		document.getElementById("em_J25").value = '35';
		document.getElementById("em_J26").value = '41';
		//-------------------------------------------------------------------------------------
		document.getElementById("e_N5").value = '0';
		document.getElementById("e_N6").value = '0';
		document.getElementById("e_N7").value = '0';
		document.getElementById("e_N8").value = '0';
		document.getElementById("e_N11").value = '5';  
		document.getElementById("e_N12").value = '0';  
		document.getElementById("e_N13").value = '13';  
		document.getElementById("L30").value = '77';
		document.getElementById("L31").value = '0';
		document.getElementById("L32").value = '0';
		
	} else {}

	}
	localStorage.setItem("valori_inizialiB", true);

	};
	
	
	function StartValuesC() {
		if (localStorage.getItem("valori_inizialiC") === null)
		{
		var checkregion = document.querySelector('input[name="region"]:checked'); 
		if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
			document.getElementById("A8_f").value = '7';
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = '2790';
			document.getElementById("f_D5").value = '20';
			document.getElementById("f_C6").value = '0';
			document.getElementById("f_C7").value = '6';
			document.getElementById("f_C8").value = '94';
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = '0';
			document.getElementById("E31").value = '0';
			document.getElementById("E32").value = '0'; 
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = '0';
			document.getElementById("G15").value = '0'; 	
			document.getElementById("G19").value = '0';
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = '12';
			document.getElementById("em_J22").value = '3';
			document.getElementById("em_J23").value = '18';
			document.getElementById("em_J24").value = '3';
			document.getElementById("em_J25").value = '4';
			document.getElementById("em_J26").value = '60';
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = '0';
			document.getElementById("e_N6").value = '0';
			document.getElementById("e_N7").value = '0';
			document.getElementById("e_N8").value = '0';
			document.getElementById("e_N11").value = '2';  
			document.getElementById("e_N12").value = '0';  
			document.getElementById("e_N13").value = '26';  
			document.getElementById("L30").value = '74';
			document.getElementById("L31").value = '0';
			document.getElementById("L32").value = '0';

		} 
		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
			
			document.getElementById("A8_f").value = '7';
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = '2660';
			document.getElementById("f_D5").value = '20';
			document.getElementById("f_C6").value = '0';
			document.getElementById("f_C7").value = '6';
			document.getElementById("f_C8").value = '94';
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = '0';
			document.getElementById("E31").value = '17';
			document.getElementById("E32").value = '0'; 
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = '0';
			document.getElementById("G15").value = '0'; 	
			document.getElementById("G19").value = '0';
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = '8';
			document.getElementById("em_J22").value = '1';
			document.getElementById("em_J23").value = '21';
			document.getElementById("em_J24").value = '8';
			document.getElementById("em_J25").value = '34';
			document.getElementById("em_J26").value = '28';
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = '0';
			document.getElementById("e_N6").value = '0';
			document.getElementById("e_N7").value = '0';
			document.getElementById("e_N8").value = '0';
			document.getElementById("e_N11").value = '2';  
			document.getElementById("e_N12").value = '0';  
			document.getElementById("e_N13").value = '41';  
			document.getElementById("L30").value = '81';
			document.getElementById("L31").value = '0';
			document.getElementById("L32").value = '0';
			
		}

		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
			
			document.getElementById("A8_f").value = '7';
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = '2920';
			document.getElementById("f_D5").value = '20';
			document.getElementById("f_C6").value = '0';
			document.getElementById("f_C7").value = '6';
			document.getElementById("f_C8").value = '94';
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = '17';
			document.getElementById("E31").value = '11';
			document.getElementById("E32").value = '0'; 
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = '0';
			document.getElementById("G15").value = '0'; 	
			document.getElementById("G19").value = '0';
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = '12';
			document.getElementById("em_J22").value = '6';
			document.getElementById("em_J23").value = '6';
			document.getElementById("em_J24").value = '7';
			document.getElementById("em_J25").value = '14';
			document.getElementById("em_J26").value = '55';
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = '0';
			document.getElementById("e_N6").value = '0';
			document.getElementById("e_N7").value = '0';
			document.getElementById("e_N8").value = '0';
			document.getElementById("e_N11").value = '5';  
			document.getElementById("e_N12").value = '0';  
			document.getElementById("e_N13").value = '13';  
			document.getElementById("L30").value = '74';
			document.getElementById("L31").value = '10';
			document.getElementById("L32").value = '0';
		}

		else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
			
			document.getElementById("A8_f").value = '7';
			//----------------------------------------------------------------------------------
			document.getElementById("f_D4").value = '2890';
			document.getElementById("f_D5").value = '20';
			document.getElementById("f_C6").value = '0';
			document.getElementById("f_C7").value = '6';
			document.getElementById("f_C8").value = '94';
			//----------------------------------------------------------------------------------
			document.getElementById("E30").value = '0';
			document.getElementById("E31").value = '0';
			document.getElementById("E32").value = '0'; 
			//----------------------------------------------------------------------------------
			document.getElementById("G14").value = '0';
			document.getElementById("G15").value = '0'; 	
			document.getElementById("G19").value = '0';
			//------------------------------------------------------------------------------------
			document.getElementById("em_J21").value = '11';
			document.getElementById("em_J22").value = '2';
			document.getElementById("em_J23").value = '9';
			document.getElementById("em_J24").value = '2';
			document.getElementById("em_J25").value = '35';
			document.getElementById("em_J26").value = '41';
			//-------------------------------------------------------------------------------------
			document.getElementById("e_N5").value = '0';
			document.getElementById("e_N6").value = '0';
			document.getElementById("e_N7").value = '0';
			document.getElementById("e_N8").value = '0';
			document.getElementById("e_N11").value = '5';  
			document.getElementById("e_N12").value = '0';  
			document.getElementById("e_N13").value = '13';  
			document.getElementById("L30").value = '77';
			document.getElementById("L31").value = '0';
			document.getElementById("L32").value = '0';
			
		} else {}

		}
		localStorage.setItem("valori_inizialiC", true);

		};
		
		function StartValuesA() {
			if (localStorage.getItem("valori_inizialiD") === null)
			{
			var checkregion = document.querySelector('input[name="region"]:checked'); 
			if((checkregion != null)&&(checkregion.getAttribute('id')=='regionA')) { 
				document.getElementById("A8_f").value = '7';
				//----------------------------------------------------------------------------------
				document.getElementById("f_D4").value = '2790';
				document.getElementById("f_D5").value = '20';
				document.getElementById("f_C6").value = '0';
				document.getElementById("f_C7").value = '6';
				document.getElementById("f_C8").value = '94';
				//----------------------------------------------------------------------------------
				document.getElementById("E30").value = '0';
				document.getElementById("E31").value = '0';
				document.getElementById("E32").value = '0'; 
				//----------------------------------------------------------------------------------
				document.getElementById("G14").value = '0';
				document.getElementById("G15").value = '0'; 	
				document.getElementById("G19").value = '0';
				//------------------------------------------------------------------------------------
				document.getElementById("em_J21").value = '12';
				document.getElementById("em_J22").value = '3';
				document.getElementById("em_J23").value = '18';
				document.getElementById("em_J24").value = '3';
				document.getElementById("em_J25").value = '4';
				document.getElementById("em_J26").value = '60';
				//-------------------------------------------------------------------------------------
				document.getElementById("e_N5").value = '0';
				document.getElementById("e_N6").value = '0';
				document.getElementById("e_N7").value = '0';
				document.getElementById("e_N8").value = '0';
				document.getElementById("e_N11").value = '2';  
				document.getElementById("e_N12").value = '0';  
				document.getElementById("e_N13").value = '26';  
				document.getElementById("L30").value = '74';
				document.getElementById("L31").value = '0';
				document.getElementById("L32").value = '0';

			} 
			else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionB')) {
				
				document.getElementById("A8_f").value = '7';
				//----------------------------------------------------------------------------------
				document.getElementById("f_D4").value = '2660';
				document.getElementById("f_D5").value = '20';
				document.getElementById("f_C6").value = '0';
				document.getElementById("f_C7").value = '6';
				document.getElementById("f_C8").value = '94';
				//----------------------------------------------------------------------------------
				document.getElementById("E30").value = '0';
				document.getElementById("E31").value = '17';
				document.getElementById("E32").value = '0'; 
				//----------------------------------------------------------------------------------
				document.getElementById("G14").value = '0';
				document.getElementById("G15").value = '0'; 	
				document.getElementById("G19").value = '0';
				//------------------------------------------------------------------------------------
				document.getElementById("em_J21").value = '8';
				document.getElementById("em_J22").value = '1';
				document.getElementById("em_J23").value = '21';
				document.getElementById("em_J24").value = '8';
				document.getElementById("em_J25").value = '34';
				document.getElementById("em_J26").value = '28';
				//-------------------------------------------------------------------------------------
				document.getElementById("e_N5").value = '0';
				document.getElementById("e_N6").value = '0';
				document.getElementById("e_N7").value = '0';
				document.getElementById("e_N8").value = '0';
				document.getElementById("e_N11").value = '2';  
				document.getElementById("e_N12").value = '0';  
				document.getElementById("e_N13").value = '41';  
				document.getElementById("L30").value = '81';
				document.getElementById("L31").value = '0';
				document.getElementById("L32").value = '0';
				
			}

			else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionC')) {
				
				document.getElementById("A8_f").value = '7';
				//----------------------------------------------------------------------------------
				document.getElementById("f_D4").value = '2920';
				document.getElementById("f_D5").value = '20';
				document.getElementById("f_C6").value = '0';
				document.getElementById("f_C7").value = '6';
				document.getElementById("f_C8").value = '94';
				//----------------------------------------------------------------------------------
				document.getElementById("E30").value = '17';
				document.getElementById("E31").value = '11';
				document.getElementById("E32").value = '0'; 
				//----------------------------------------------------------------------------------
				document.getElementById("G14").value = '0';
				document.getElementById("G15").value = '0'; 	
				document.getElementById("G19").value = '0';
				//------------------------------------------------------------------------------------
				document.getElementById("em_J21").value = '12';
				document.getElementById("em_J22").value = '6';
				document.getElementById("em_J23").value = '6';
				document.getElementById("em_J24").value = '7';
				document.getElementById("em_J25").value = '14';
				document.getElementById("em_J26").value = '55';
				//-------------------------------------------------------------------------------------
				document.getElementById("e_N5").value = '0';
				document.getElementById("e_N6").value = '0';
				document.getElementById("e_N7").value = '0';
				document.getElementById("e_N8").value = '0';
				document.getElementById("e_N11").value = '5';  
				document.getElementById("e_N12").value = '0';  
				document.getElementById("e_N13").value = '13';  
				document.getElementById("L30").value = '74';
				document.getElementById("L31").value = '10';
				document.getElementById("L32").value = '0';
			}

			else if((checkregion != null)&&(checkregion.getAttribute('id')=='regionD')) {
				
				document.getElementById("A8_f").value = '7';
				//----------------------------------------------------------------------------------
				document.getElementById("f_D4").value = '2890';
				document.getElementById("f_D5").value = '20';
				document.getElementById("f_C6").value = '0';
				document.getElementById("f_C7").value = '6';
				document.getElementById("f_C8").value = '94';
				//----------------------------------------------------------------------------------
				document.getElementById("E30").value = '0';
				document.getElementById("E31").value = '0';
				document.getElementById("E32").value = '0'; 
				//----------------------------------------------------------------------------------
				document.getElementById("G14").value = '0';
				document.getElementById("G15").value = '0'; 	
				document.getElementById("G19").value = '0';
				//------------------------------------------------------------------------------------
				document.getElementById("em_J21").value = '11';
				document.getElementById("em_J22").value = '2';
				document.getElementById("em_J23").value = '9';
				document.getElementById("em_J24").value = '2';
				document.getElementById("em_J25").value = '35';
				document.getElementById("em_J26").value = '41';
				//-------------------------------------------------------------------------------------
				document.getElementById("e_N5").value = '0';
				document.getElementById("e_N6").value = '0';
				document.getElementById("e_N7").value = '0';
				document.getElementById("e_N8").value = '0';
				document.getElementById("e_N11").value = '5';  
				document.getElementById("e_N12").value = '0';  
				document.getElementById("e_N13").value = '13';  
				document.getElementById("L30").value = '77';
				document.getElementById("L31").value = '0';
				document.getElementById("L32").value = '0';
				
			} else {}

			}
			localStorage.setItem("valori_inizialiD", true);

			};