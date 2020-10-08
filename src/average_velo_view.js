function addNewFields(i){
	const counter = i + 1;
	if (document.getElementById('unnormal'+counter)) { return;}
	const section = document.querySelector("section#unnormal"+i)
	const sectioni = section.cloneNode(true)
	sectioni.id="unnormal"+counter
	sectioni.class="average"
	const container = document.getElementById('container');
	container.append(sectioni)
	const aa = document.querySelectorAll("input#Velo"+i)[1];
	const bb = document.querySelectorAll("input#itime"+i)[1];
	const cc = document.querySelectorAll("select#itime"+i)[1];
	const ff = document.querySelectorAll("select#Velo"+i)[1];
	const dd = document.querySelectorAll("div#itime"+i)[1];
	const ee = document.querySelectorAll("div#Velo"+i)[1];
    const normal = document.querySelectorAll(`div.normal-i${i}time`)[1];
    const minSec = document.querySelectorAll(`div.i${i}min-sec`)[1];
    const hrsMin = document.querySelectorAll(`div.i${i}hrs-min`)[1]; 
    const min = document.querySelectorAll(`input#i${i}min`)[1];
    const secs =document.querySelectorAll(`input#i${i}sec`)[1];
    const hrs =document.querySelectorAll(`input#i${i}hrs`)[1];
    const min2 =document.querySelectorAll(`input#i${i}min2`)[1];
	handleAttruibuteChange(aa, bb, cc, dd, ee, ff, min, secs,
	 hrs, min2, normal, minSec, hrsMin, i+1);
	timeChange(i+1);
	veloChange(i+1);
	selectTimeChange(i+1);
	selectVeloChange(i+1);
	handleHrsChange(i+1);
	handleMinChange(i+1);
	handleSecChange(i+1);
	handleMin2Change(i+1);
}

function handleAttruibuteChange(velo, time,selectTime,titleTime, titleVelo, 
	selectVelo,min, secs, hrs, min2,normal, minSec, hrsMin, n)
{
	velo.id="Velo"+n;
	time.id="itime"+n;
	velo.value='';
	time.value='';
	selectTime.id="itime"+n;
	titleTime.innerHTML=" for "+n;
	titleVelo.innerHTML=" velocity "+n;
	titleTime.id="itime"+n;
	titleVelo.id="Velo"+n;
	selectVelo.id = "Velo"+n;
	min.id=`i${n}min`;
	secs.id=`i${n}sec`;
	hrs.id=`i${n}hrs`;
	min2.id=`i${n}min2`;
	normal.classList.replace(`normal-i${n-1}time`, `normal-i${n}time`);
	minSec.classList.replace(`i${n-1}min-sec`, `i${n}min-sec`);
	hrsMin.classList.replace(`i${n-1}hrs-min`, `i${n}hrs-min`);
}
