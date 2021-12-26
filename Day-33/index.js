function set(arrOfNum) {
	// write your code here
	let arr = arrOfNum.filter((ele,index) => arrOfNum.indexOf(ele) === index)
	return arr 
}

const arrOfNum = [1, 2, 2, 4, 5, 6, 6];

console.log("result is + " + set(arrOfNum));