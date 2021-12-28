const valid = (string) => {
	// code here
	string = string.replace(/\s/g, '')
	if(string.length <= 1) return false;
	if(isNaN(string)) return false;
	let digit=1;
	let arr = [];
	for(let i=string.length-1;i>=0;i--){
		if(digit%2==0){
			let val = parseInt(string[i])*2
			if(val > 9) val -= 9
			arr.push(val)
		} 
		else arr.push(parseInt(string[i]))
		digit++
	}
	const sum = arr.reduce((acc,val) => acc + val,0)
	return sum%10 === 0;
}

console.log(valid('4539 3195 0343 6467'));