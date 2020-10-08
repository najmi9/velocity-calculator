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
	handleAttruibuteChange(aa, bb, cc, dd, ee, ff, i+1);
	timeChange(i+1)
	veloChange(i+1)
	selectTimeChange(i+1)
	selectVeloChange(i+1)
}

function handleAttruibuteChange(velo, time,
 selectTime,titleTime, titleVelo, selectVelo,  n){
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
}
