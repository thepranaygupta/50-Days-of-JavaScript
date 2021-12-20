function toWeirdCase(string) {
    // Your code goes here
    let newStr = '';
    for(let i=0;i<string.length;i++){
        if(i%2==0) newStr += string[i].toUpperCase()
        else newStr += string[i].toLowerCase()
    }
    return newStr
  }
  
  console.log(
    `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
  );
  