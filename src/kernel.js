function handleTimeUnits(tu, ){
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
      const velos = [];

      document.querySelectorAll("select[id^=Velo]").forEach((vu, i)=>{
          const  j = i + 1;
           const v = clean(document.querySelector(`input#Velo${j}`).value);
          velos.push(v * handleVeloUnitChange('m/s', vu.value));
      });

      const times = [];

      document.querySelectorAll('select[id^=itime]').forEach((tu, i)=>{
        tu = tu.value
        const j = i + 1;
          if (tu == "min/sec" || tu == "hrs/min") {
            if (tu == "min/sec") {
             const min = clean(document.querySelector(`input#i${j}min`).value);
             const secs = clean(document.querySelector(`input#i${j}sec`).value);
              times.push(min*60+secs) ;
            }else if(tu == "hrs/min") {
              const hrs =clean(document.querySelector(`input#i${j}hrs`).value);
              const min =clean(document.querySelector(`input#i${j}min2`).value);
              times.push(hrs*3600+min*60);
            }
         }else{    
            const t = clean(document.querySelector(`input#itime${j}`).value);     
            if(t==0){return;}
            times.push(t *  handleTimeUnitChange('sec', tu));
        }

      });
		  const Vf = AverageVelo(velos, times);
		  document.querySelector("input#VR").value = format(Vf*handleVeloUnitChange(vu, 'm/s'));
    }

}

