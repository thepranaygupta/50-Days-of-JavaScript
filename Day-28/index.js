function toWeirdCase(str) {
  // Your code goes here
  str = str.toLowerCase();
  let strCharacters = str.split("");
  let result = '';
  for(let i = 0; i < strCharacters.length; i++) {
      if(i%2 === 0) {
          result += strCharacters[i].toUpperCase();
      } else {
          result += strCharacters[i];
      }
  }
  return result;
}

console.log(
  `The weird case of ${"A test case"} is ${toWeirdCase("A test case")}`
);
