let previousAccUnit = document.querySelector("select#acceleration").value
let previousDistUnit = document.querySelector("select#distance").value

let previousTimeUnit = document.querySelector("select#time").value

let previousVRUnit = document.querySelector("select#VR").value
let previousVAUnit = document.querySelector("select#VA").value

const handleChange = (input, newUnit, previousUnit, handleUnit) => {
  if (input.value == '') {
    return;
  }
  if (newUnit == previousUnit) {
    return;
  }

  const factor = handleUnit(newUnit, previousUnit); 
  input.value = format(parseFloat(input.value.replaceAll(',', '')) * factor);
}

document.querySelector("select#acceleration").onchange = ({ currentTarget }) => {
  const acc = document.querySelector("input#acceleration");
  // handleAccUnitChange : function exist in unit_convert_functs.js
  handleChange(acc, currentTarget.value, previousAccUnit, handleAccUnitChange);
  previousAccUnit = currentTarget.value;
}

document.querySelector("select#VA").onchange = ({ currentTarget }) => {
  const mass = document.querySelector("input#VA");
  handleChange(mass, currentTarget.value, previousVAUnit, handleVeloUnitChange);
  previousVAUnit = currentTarget.value;
}

document.querySelector("select#distance").onchange = ({ currentTarget }) => {
  const dist = document.querySelector("input#distance");
  if ((currentTarget.value == "m/cm" || currentTarget.value == "ft/inch") || (previousDistUnit == "m/cm" || previousDistUnit == "ft/inch")) {
      handleDistanceChange(currentTarget.value, previousDistUnit, dist);
  } else {
      handleChange(dist, currentTarget.value, previousDistUnit, handleDistUnitChange);
  }
  previousDistUnit = currentTarget.value;
}


document.querySelector("select#time").onchange = ({ currentTarget }) => {
   const time = document.querySelector("input#time");
  //curr.value == newUnit
  if ((currentTarget.value== "min/sec"||currentTarget.value=="hrs/min") || (previousTimeUnit== "min/sec"||previousTimeUnit=="hrs/min")) {     
      const normal = document.querySelector("div.normal-time");
      const minSec = document.querySelector("div.min-sec");
      const hrsMin = document.querySelector("div.hrs-min"); 
      const min = document.querySelector("input#min");
      const secs =document.querySelector("input#sec");
      const hrs =document.querySelector("input#hrs");
      const min2 =document.querySelector("input#min2");
      const divs = [normal, minSec, hrsMin, min, secs, hrs, min2];

      handleTime(currentTarget.value, previousTimeUnit, time, divs);
  }else{
      handleChange(time, currentTarget.value, previousTimeUnit, handleTimeUnitChange);
  }
  previousTimeUnit = currentTarget.value;
}

function selectVeloChange(j){
  let previousVelos = [];

  previousVelos[j] = document.querySelector("select#Velo"+j).value

  document.querySelector("select#Velo"+j).onchange = ({ currentTarget }) => {
    const velo = document.querySelector("input#Velo"+j);
    handleChange(velo, currentTarget.value, previousVelos[j], handleVeloUnitChange);
    previousVelos[j] = currentTarget.value;
  }
}
selectVeloChange(1)

document.querySelector("select#VR").onchange = ({ currentTarget }) => {
  const v = document.querySelector("input#VR");
  handleChange(v, currentTarget.value, previousVRUnit, handleVeloUnitChange);
  previousVRUnit = currentTarget.value;
}

function selectTimeChange(j){
  let previousTimes = [];
  previousTimes[j] = document.querySelector("select#itime"+j).value;

document.querySelector("select#itime"+j).onchange = ({ currentTarget }) => {
   const time = document.querySelector("input#itime"+j);
  //curr.value == newUnit
  if ((currentTarget.value== "min/sec"||currentTarget.value=="hrs/min") || (previousTimes[j]== "min/sec"||previousTimes[j]=="hrs/min")) {
        const normal = document.querySelector(`div.normal-i${j}time`);
        const minSec = document.querySelector(`div.i${j}min-sec`);
        const hrsMin = document.querySelector(`div.i${j}hrs-min`); 
       
        const min = document.querySelector(`input#i${j}min`);
        const secs =document.querySelector(`input#i${j}sec`);
        const hrs =document.querySelector(`input#i${j}hrs`);
        const min2 =document.querySelector(`input#i${j}min2`);
      const divs = [normal, minSec, hrsMin, min, secs, hrs, min2];
      handleTime(currentTarget.value, previousTimes[j], time, divs);
  }else{
      handleChange(time, currentTarget.value, previousTimes[j], handleTimeUnitChange);
  }
  previousTimes[j] = currentTarget.value;
}
}
selectTimeChange(1)
