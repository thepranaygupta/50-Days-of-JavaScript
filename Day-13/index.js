const spaceAge = (seconds) => {
	const yearsInAllPlanets = {
		Mercury: 0,
		Venus: 0,
		Earth: 0,
		Mars: 0,
		Jupiter: 0,
		Saturn: 0,
		Uranus: 0,
		Neptune: 0,
	}
    
	// Your solution starts here
    const totalEarchSec = 31557600; 
    seconds = parseFloat(seconds)
    yearsInAllPlanets.Mercury = parseFloat(((seconds/(totalEarchSec * 0.2408467))).toFixed(2))
    yearsInAllPlanets.Venus = parseFloat((seconds/(totalEarchSec * 0.61519726)).toFixed(2))
    yearsInAllPlanets.Earth = parseFloat((seconds/(totalEarchSec)).toFixed(2))
    yearsInAllPlanets.Mars = parseFloat((seconds/(totalEarchSec * 1.8808158)).toFixed(2))
    yearsInAllPlanets.Jupiter = parseFloat((seconds/(totalEarchSec * 11.862615)).toFixed(2))
    yearsInAllPlanets.Saturn = parseFloat((seconds/(totalEarchSec * 29.447498)).toFixed(2))
    yearsInAllPlanets.Uranus = parseFloat((seconds/(totalEarchSec * 84.016846)).toFixed(2))
    yearsInAllPlanets.Neptune = parseFloat((seconds/(totalEarchSec * 164.79132)).toFixed(2))
	// Your solution ends here

	return yearsInAllPlanets
}

console.log(spaceAge(Math.round(Math.random() * 99999999)))