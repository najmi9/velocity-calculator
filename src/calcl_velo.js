const DistanceCoveredVelo = (d, t) =>d/t;
const AccVelo = (a, v, t) =>v + a * t;

const AverageVelo = (data) => {
	let help = 1
	let v = 0
	let t =0;
	data.forEach((e, i)=>{
  		if (i % 2 !=0) {
   			t = t + e;
   			v = e * help + v;
  		}
  		help = e
	});
	console.log(v, t)
	return v/t;
} 
