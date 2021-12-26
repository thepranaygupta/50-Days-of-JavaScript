const needsLicense = (kind) => {
	// code here
    switch(kind){
        case 'car': return true;
        case 'truck': return true;
        default: return false;
    }
}

const chooseVehicle = (option1, option2) => {
	// code here
    return `${ option1.charCodeAt(0) >= option2.charCodeAt(0) ? option1 : option2 } is clearly the better choice.`;
}

const calculateResellPrice = (originalPrice, age) => {
	// code here
    let discount = 0;
    if(age < 3) discount = 80
    else if (age >= 3 && age < 10) discount = 70
    else discount = 50 
	return (originalPrice * discount)/100;
}

console.log(chooseVehicle('Volkswagen Beetle', 'Volkswagen Golf'));
