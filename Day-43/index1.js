function high(x) {
  //code your magic here
  x = x.split(' ')
  let theWord = ''
  let max = 0;
  x.map((ele) => {
    let score = 0
    for(let i=0;i<ele.length;i++){ 
      score += ele.charCodeAt(i)- 96
      if(score > max) {
        max = score
        theWord = ele
      }
    }
  })
  return theWord
} 
console.log(high('what time are we climbing up the volcano'));
