 var testit = false;

    function TestItYes() {
    	Trade(regionto, regionfr, button, value, x, y)
      testit = true;
                    }

    function TestItNo() {
    	localStorage.setItem("Afood_wfg",0); localStorage.setItem("Bfood_wfg",0); localStorage.setItem("Cfood_wfg",0) ; localStorage.setItem("Dfood_wfg",0);
    	localStorage.setItem("Afood_wfb",0); localStorage.setItem("Bfood_wfb",0); localStorage.setItem("Cfood_wfb",0); localStorage.setItem("Dfood_wfb", 0);
    	localStorage.setItem("Afood_lf",0); localStorage.setItem("Bfood_lf",0); localStorage.setItem("Cfood_lf",0); localStorage.setItem("Dfood_lf",0);
    	localStorage.setItem("Afood_cf",0); localStorage.setItem("Bfood_cf",0); localStorage.setItem("Cfood_cf",0); localStorage.setItem("Dfood_cf",0);
    		
    	localStorage.setItem("REGIONA_B_wfb",0); localStorage.setItem("REGIONA_B_cf",0); localStorage.setItem("REGIONA_B_lf",0) ; 	localStorage.setItem("REGIONA_B_wfg",0);
    	localStorage.setItem("REGIONA_C_wfb",0); localStorage.setItem("REGIONA_C_cf",0); localStorage.setItem("REGIONA_C_lf",0) ; 	localStorage.setItem("REGIONA_C_wfg",0);
    	localStorage.setItem("REGIONA_D_wfb",0); localStorage.setItem("REGIONA_D_cf",0); localStorage.setItem("REGIONA_D_lf",0) ; 	localStorage.setItem("REGIONA_D_wfg",0);

    	localStorage.setItem("REGIONB_A_wfb",0); localStorage.setItem("REGIONB_A_cf",0); localStorage.setItem("REGIONB_A_lf",0) ; 	localStorage.setItem("REGIONB_A_wfg",0);
    	localStorage.setItem("REGIONB_C_wfb",0); localStorage.setItem("REGIONB_C_cf",0); localStorage.setItem("REGIONB_C_lf",0) ; 	localStorage.setItem("REGIONB_C_wfg",0);
    	localStorage.setItem("REGIONB_D_wfb",0); localStorage.setItem("REGIONB_D_cf",0); localStorage.setItem("REGIONB_D_lf",0) ; 	localStorage.setItem("REGIONB_D_wfg",0);

    	localStorage.setItem("REGIONC_A_wfb",0); localStorage.setItem("REGIONC_A_cf",0); localStorage.setItem("REGIONC_A_lf",0) ; 	localStorage.setItem("REGIONC_A_wfg",0);
    	localStorage.setItem("REGIONC_B_wfb",0); localStorage.setItem("REGIONC_B_cf",0); localStorage.setItem("REGIONC_B_lf",0) ; 	localStorage.setItem("REGIONC_B_wfg",0);
    	localStorage.setItem("REGIONC_D_wfb",0); localStorage.setItem("REGIONC_D_cf",0); localStorage.setItem("REGIONC_D_lf",0) ; 	localStorage.setItem("REGIONC_D_wfg",0);

    	localStorage.setItem("REGIOND_A_wfb",0); localStorage.setItem("REGIOND_A_cf",0); localStorage.setItem("REGIOND_A_lf",0) ; 	localStorage.setItem("REGIOND_A_wfg",0);
    	localStorage.setItem("REGIOND_B_wfb",0); localStorage.setItem("REGIOND_B_cf",0); localStorage.setItem("REGIOND_B_lf",0) ; 	localStorage.setItem("REGIOND_B_wfg",0);
    	localStorage.setItem("REGIOND_C_wfb",0); localStorage.setItem("REGIOND_C_cf",0); localStorage.setItem("REGIOND_C_lf",0) ; 	localStorage.setItem("REGIOND_C_wfg",0);

      testit = false;
                    }

    function TestIt() {
      testit ? TestItNo() : TestItYes();
    }