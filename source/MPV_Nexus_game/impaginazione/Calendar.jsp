<%
String ora_reale="";
String annoL="";String times="";
GregorianCalendar giorno = new GregorianCalendar();
	        int meses=giorno.get(Calendar.MONTH);
	        meses++;
	        int giornos=giorno.get(Calendar.DAY_OF_MONTH);
	        int annos=giorno.get(Calendar.YEAR);
	        int sett=giorno.get(Calendar.DAY_OF_WEEK_IN_MONTH);
	        String giornoL = Integer.toString(giornos);
	        String meseL = Integer.toString(meses);
	        annoL = Integer.toString(annos);
	        if(meseL.length()==1){
	        	meseL="0"+meseL;
	        }
	        if(giornoL.length()==1){
	        	giornoL="0"+giornoL;
	        }
	        String DataI = giornoL + "-" + meseL + "-" + annoL;		
	        String iniziomese = "01-"+meseL+"-"+annoL;	
	        
			   int ht=giorno.get(Calendar.HOUR_OF_DAY);
              int mt=giorno.get(Calendar.MINUTE);
              int st= giorno.get(Calendar.SECOND); 
              String h = Integer.toString(ht);
	        String m = Integer.toString(mt);
	        String s = Integer.toString(st);

               
              if(h.length()==1){
	        	h="0"+h;
	        }

              
              if(m.length()==1){
	        	m="0"+m;
	        }

              
              if(s.length()==1){
	        	s="0"+s;
	        }

              ora_reale=h+":"+m+":"+s;
              times = h+m+s;

%>