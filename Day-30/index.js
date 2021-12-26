function wave(str) {
  // Your Code goes below
  
  let result = [];
  for(let i = 0; i < str.length; i++) {
      let strChar = str.toLowerCase().split("");
      if(strChar[i] === ' ') {
      	continue;
      } else {
      	strChar[i] = strChar[i].toUpperCase();
        result.push(strChar.join(""));
      }
        
  }
  return result;
}

console.log(wave("two words"));
