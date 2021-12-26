function getCount(str) {
  let vowelsCount = 0;
  // enter your magic here
  str = str.toLowerCase();
  let strChar = str.split("");
  for(let i = 0; i< strChar.length; i++) {
      if(strChar[i] === 'a' || strChar[i] === 'e' || strChar[i] === 'i' || strChar  [i] === 'o' || strChar[i] === 'u') {
          vowelsCount++;
      }
  }

  return vowelsCount;
}

console.log(getCount("abracadabra"));
