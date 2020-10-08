const c = 3 * Math.pow(10, 8)

let handleAccUnitChange = (newUnit, previousUnit) => {
	if (newUnit == previousUnit) {
		return 1;
	}
	const ms = { 'm/s²': 1, 'g': 9.807, 'ft/s²': 0.3048 };
	return ms[previousUnit] / ms[newUnit];
}


const handleDistUnitChange = (newUnit, previousUnit) => {
	if (previousUnit == newUnit) {
		return 1;
	}
	const asUn = 149597870700;
	const psUn = 30857000000000000;
	const lyear = 9460700000000000;
	const m = {
		'm': 1, 'cm':0.01, 'inch':0.0254, 'mm':0.001 
		,'km': 1000, 'mile': 1609.3, 'ft': 0.3048, 'yd': 0.9144,
		'au': asUn, 'parsec': psUn, 'ly': lyear
	};

	return m[previousUnit] / m[newUnit];
};

const handleTimeUnitChange = (newUnit, previousUnit) => {
	if (previousUnit == newUnit) {
		return 1;
	}
		const sec = {
		'sec': 1, 'ms':0.001,'min': 60, 'hrs': 3600,
		'dys': 3600 * 24, 'week': 3600 * 7 * 24, 'month': 3600 * 24 * 30,
		'yrs': 3600 * 24 * 365
	}   
	return sec[previousUnit] / sec[newUnit];
};

const handleVeloUnitChange = (newUnit, previousUnit) => {
	
	if (previousUnit == newUnit) {
		return 1;
	}
	const ms = {
		'm/s': 1, 'knots':0.514444, 'km/h': 1000 / 3600, 'ft/s': 0.3048, 'mile/h': 1609.3 / 3600
		, 'c': c, 'km/s': 1000, 'mile/s': 1609.3
	}

	return ms[previousUnit] / ms[newUnit];
};



const format = number =>{
	if(number<0.001){
		return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
	}else{
		return new Intl.NumberFormat().format(number)
    }
}	
