function findEvenIndex(arr) {
	//Code goes here	
	for(let i=1;i<=arr.length-1;i++){
		let leftSum = 0;
		let rightSum = 0;
		for(let j=0;j<i;j++){
			leftSum += arr[j]
		}
		for(let j=i+1;j<arr.length;j++){
			rightSum += arr[j]
		}
		if(leftSum === rightSum) return i;
	}
	return -1
}
  