document.querySelector("input#distance").onkeyup = () =>{
	const method = document.querySelector("select#method").value;
	manageViewAndResult(method)
}

document.querySelector("input#acceleration").onkeyup = () =>{
	const method = document.querySelector("select#method").value;
	manageViewAndResult(method)
}

function veloChange(j){
	document.querySelector("input#Velo"+j).onkeyup = () =>{
		const method = document.querySelector("select#method").value;
		if (document.querySelector("input#itime"+j).value) {
			addNewFields(j);
		}
		manageViewAndResult(method)
	}
}
veloChange(1)

document.querySelector("input#VA").onkeyup = () =>{
	const method = document.querySelector("select#method").value;
	manageViewAndResult(method)
}

document.querySelector("input#distance").onkeyup = () =>{
	const method = document.querySelector("select#method").value;
	manageViewAndResult(method)
}
document.querySelector("input#time").onkeyup = () =>{
	const method = document.querySelector("select#method").value;
	manageViewAndResult(method);
}


function timeChange(j){
	document.querySelector("input#itime"+j).onkeyup = () =>{
		const method = document.querySelector("select#method").value;
		if (document.querySelector("input#Velo"+j).value) {
			addNewFields(j);
		}
		manageViewAndResult(method);
	}
}
timeChange(1)



function handleHrsChange(j){
	document.querySelector(`input#i${j}hrs`).onkeyup = () =>{
    	 const method = document.querySelector("select#method").value;
    	 if (document.querySelector("input#Velo"+j).value) {
			addNewFields(j);
		}
		 manageViewAndResult(method);
	}
}

handleHrsChange(1)

function handleMinChange(j){
	document.querySelector(`input#i${j}min`).onkeyup = () =>{
   	 	const method = document.querySelector("select#method").value;
   	 	if (document.querySelector("input#Velo"+j).value) {
			addNewFields(j);
		}
		manageViewAndResult(method);
	}
}
handleMinChange(1)

function handleSecChange(j){
	document.querySelector(`input#i${j}sec`).onkeyup = () =>{
     	const method = document.querySelector("select#method").value;
     	console.log(document.querySelector("input#Velo"+j).value)
     	if (document.querySelector("input#Velo"+j).value) {
			addNewFields(j);
		}
		manageViewAndResult(method);
	}
}
handleSecChange(1)

function handleMin2Change(j){
	document.querySelector(`input#i${j}min2`).onkeyup = () =>{
    	 const method = document.querySelector("select#method").value;
    	 if (document.querySelector("input#Velo"+j).value) {
			addNewFields(j);
		}
		manageViewAndResult(method);
	}
}

handleMin2Change(1)

document.querySelector("input#hrs").onkeyup = () =>{
     const method = document.querySelector("select#method").value;
	manageViewAndResult(method);
}

document.querySelector("input#min").onkeyup = () =>{
     const method = document.querySelector("select#method").value;
	manageViewAndResult(method);
}

document.querySelector("input#sec").onkeyup = () =>{
     const method = document.querySelector("select#method").value;
	manageViewAndResult(method);
}

document.querySelector("input#min2").onkeyup = () =>{
     const method = document.querySelector("select#method").value;
	manageViewAndResult(method);
}

document.querySelector("input#m").onkeyup = () =>{
     const method = document.querySelector("select#method").value;
	manageViewAndResult(method);
}
document.querySelector("input#cm").onkeyup = () =>{
     const method = document.querySelector("select#method").value;
	manageViewAndResult(method);
}

document.querySelector("input#ft").onkeyup = () =>{
     const method = document.querySelector("select#method").value;
	manageViewAndResult(method);
}

document.querySelector("input#inch").onkeyup = () =>{
     const method = document.querySelector("select#method").value;
	manageViewAndResult(method);
}