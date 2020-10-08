function handleTimeUnits(tu){
      let T = 0;
   if (tu == "min/sec" || tu == "hrs/min") {
           if (tu == "min/sec") {
             const min = clean(document.querySelector("input#min").value);
             const secs = clean(document.querySelector("input#sec").value);
              T  = min*60+secs;
          }else if(tu == "hrs/min") {
              const hrs =clean(document.querySelector("input#hrs").value);
              const min =clean(document.querySelector("input#min2").value);
              T = hrs*3600+min*60;
          }
        }else{    
       const t = clean(document.querySelector("input#time").value);     
           if(t==0){return;}
           T = t *  handleTimeUnitChange('sec', tu);
        }

        return T;
}

function manageViewAndResult(method) {
    const vu = document.querySelector("select#VR").value;
	if (method == "Distance covered") {
		const d = clean(document.querySelector("input#distance").value);
		const tu = document.querySelector("select#time").value;
    const du = document.querySelector("select#distance").value;
     let D = 0;

		T = handleTimeUnits(tu);

        if(!T){return;}

        if (du == "m/cm" || du=="ft/inch") {
           if(du == "m/cm"){
             const mValue = clean(document.querySelector("input#m").value);
             const cmValue = clean(document.querySelector("input#cm").value);
             D = mValue + cmValue/100;
           }else if (du == "ft/inch"){
              const ftValue = clean(document.querySelector("input#ft").value);
              const inchValue = clean(document.querySelector("input#inch").value);
              D = ftValue*0.3048 + inchValue*0.0254;
           }
        } else {
          D = d * handleDistUnitChange('m', du);
        }
        const V = DistanceCoveredVelo(D, T);
		document.querySelector("input#VR").value = format(V*handleAccUnitChange(vu, 'm/s'));
	
	} else if (method == "Acceleration") {
		const v = clean(document.querySelector("input#VA").value);
    const a = clean(document.querySelector("input#acceleration").value);
		const t = clean(document.querySelector("input#time").value);

    const vu = document.querySelector("select#VA").value;
    const au = document.querySelector("select#acceleration").value;
    const tu = document.querySelector("select#time").value;
    let T = handleTimeUnits(tu);
    const V = v * handleVeloUnitChange('m/s', vu);
    const A = a * handleAccUnitChange('m/s²', au);
    const Vf = AccVelo(A, V, T);
    document.querySelector("input#VR").value = format(Vf*handleVeloUnitChange(vu, 'm/s'));
	
  }else if (method == "Average velocity") {
		  const v1 = clean(document.querySelector("input#Velo1").value);
      const tu1 = document.querySelector("select#itime").value;
      const vu1 = document.querySelector("select#Velo1").value;
     
      
       let T1 = 0;
   if (tu1 == "min/sec" || tu1 == "hrs/min") {
           if (tu1 == "min/sec") {
             const min = clean(document.querySelector("input#imin").value);
             const secs = clean(document.querySelector("input#isec").value);
              T1  = min*60+secs;
          }else if(tu1 == "hrs/min") {
              const hrs =clean(document.querySelector("input#ihrs").value);
              const min =clean(document.querySelector("input#imin2").value);
              T1 = hrs*3600+min*60;
          }
        }else{    
       const t1 = clean(document.querySelector("input#itime").value);     
           if(t1==0){return;}
           T1 = t1 *  handleTimeUnitChange('sec', tu1);
        }


	    if(!T1){return;}
	    const V1 = v1 * handleVeloUnitChange('m/s', vu1);
		 
		  const Vf = AverageVelo([V1, T1]);

		  document.querySelector("input#VR").value = format(Vf*handleVeloUnitChange(vu, 'm/s'));
    }
}