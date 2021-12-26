function wave(str) {
  // Your Code goes below
  let newStr = ''
  let ans = [];
  for(let i=0;i<str.length;i++){
    if(str[i] === ' ') continue;
    newStr += str.slice(0,i)+str[i].toUpperCase()+str.slice(i+1)
    ans.push(newStr)
    newStr = ''
  }
  return ans
}

console.log(wave("two words"));
