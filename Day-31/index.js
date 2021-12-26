function factorial(n) {
	// write your code here
  let fact = 1;
  if(n===0 || n==1) return n
  while(n>0){
    fact *= n;
    n--; 
  }
	return fact
}

let n = 4;
console.log("The factorial of " + n + " is " + factorial(n));