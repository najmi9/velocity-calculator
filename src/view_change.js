document.querySelector("div.min-sec").style.display = 'none';
document.querySelector("div.hrs-min").style.display = 'none';
document.querySelector("div#m-cm").style.display = 'none';
document.querySelector("div#ft-inch").style.display = 'none';

const ms = document.querySelector("div.i1min-sec");
const hm = document.querySelector("div.i1hrs-min");

ms.style.display = 'none';
hm.style.display = 'none';

let distDiv = document.querySelector("div.distance");
let normalSect = document.querySelector("section#normal");
let unnormalSect = document.querySelector("section#unnormal1");
let initialSpeeddDiv = document.querySelector("div.initialSpeed");
const container = document.querySelector("div#container")
const accDiv = document.querySelector("div#acceleration")

accDiv.style.display = 'none';
initialSpeeddDiv.style.display = 'none';
unnormalSect.style.display = 'none';

function unflex(div){
	div.style.display = 'none';
	if (div.classList.contains("is-flex")) {
		div.classList.remove('is-flex');
	} 
}

function flex(div) {
	div.style.display = 'block';
	div.classList.add("is-flex");
}

document.querySelector("select#method").onchange=({currentTarget})=>{

	document.getElementById('selectMethod').innerHTML = currentTarget.value;
    document.querySelectorAll("input").forEach(e=>e.value='');
	if (currentTarget.value == "Distance covered") {
		document.querySelectorAll("section.average").forEach( function(element, index) {
			if (index == 0) {
				unnormalSect.style.display = 'none';
			}else{
				container.removeChild(element)
			}
			
		});
        
		normalSect.style.display = 'block';
        unflex(accDiv)
		unflex(initialSpeeddDiv)
		flex(distDiv)
	} else if (currentTarget.value == "Acceleration") {
		document.querySelectorAll("section.average").forEach( function(element, index) {
			if (index == 0) {
				unnormalSect.style.display = 'none';
			}else{
				container.removeChild(element)
			}
		});
		normalSect.style.display = 'block';
		flex(accDiv)
		flex(initialSpeeddDiv)
		unflex(distDiv)
 
	}else if (currentTarget.value == "Average velocity") {
		unnormalSect.style.display = 'block';
		normalSect.style.display = 'none';
	}
}

