const unionOfArrays = (arr1, arr2) => {
	// code below here
	let union = [...new Set([...arr1,...arr2])]
	return union;
  };
  
  console.log(`The union is ${unionOfArrays([1, 2, 34, 45, 3], [3, 24, 21])}`);\