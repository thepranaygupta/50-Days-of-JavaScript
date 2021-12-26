function findOdd(arr) {
    //happy coding!
    arr = arr.sort((a, b) => a-b);
    let obj = createObj(arr);
    //console.log(obj);

   for(let key in obj) {
   	if(obj[key]%2 !== 0) {
    	return parseInt(key);
    }
   }
    return 0;
}

function createObj(ar) {
    let obj = {};

    for(let i=0; i<ar.length; i++) {
        let ele = ar[i];
        //console.log(ele)
        if(obj.hasOwnProperty(ele)) {
            obj[ele] = obj[ele]+1;
        } else {
            obj[ele] = 1; 
        }
    }

    return obj;
}
