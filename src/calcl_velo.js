const DistanceCoveredVelo = (d, t) =>d/t;
const AccVelo = (a, v, t) =>v + a * t;

const AverageVelo = (velos, times) => {
	const dt = times.reduce((a, b)=>a+b, 0);
	let dv = 0;
	velos.forEach((v, i)=>{

		if(times[i]){
			dv = (v * times[i] )+ dv;
		}
	});
	if(dt == 0){return 0}
	return dv/dt;
} 
