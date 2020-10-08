let previousAccUnit = document.querySelector("select#acceleration").value
let previousDistUnit = document.querySelector("select#distance").value

let previousTimeUnit = document.querySelector("select#time").value
let previousiTimeUnit = document.querySelector("select#itime").value

let previousVelo1Unit = document.querySelector("select#Velo1").value
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
      handleTime(currentTarget.value, previousTimeUnit, time);
  }else{
      handleChange(time, currentTarget.value, previousTimeUnit, handleTimeUnitChange);
  }
  previousTimeUnit = currentTarget.value;
}

document.querySelector("select#Velo1").onchange = ({ currentTarget }) => {
  const velo = document.querySelector("input#Velo1");
  handleChange(velo, currentTarget.value, previousVelo1Unit, handleVeloUnitChange);
  previousVelo1Unit = currentTarget.value;
}

document.querySelector("select#VR").onchange = ({ currentTarget }) => {
  const v = document.querySelector("input#VR");
  handleChange(v, currentTarget.value, previousVRUnit, handleVeloUnitChange);
  previousVRUnit = currentTarget.value;
}

document.querySelector("select#itime").onchange = ({ currentTarget }) => {
   const time = document.querySelector("input#itime");
  //curr.value == newUnit
  if ((currentTarget.value== "min/sec"||currentTarget.value=="hrs/min") || (previousTimeUnit== "min/sec"||previousTimeUnit=="hrs/min")) {
      handleiTime(currentTarget.value, previousiTimeUnit, time);
  }else{
      handleChange(time, currentTarget.value, previousiTimeUnit, handleTimeUnitChange);
  }
  previousiTimeUnit = currentTarget.value;
}

