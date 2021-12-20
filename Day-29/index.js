function accum(s) {
  // your code goes below
  s = s.split('')
  let newStr = ''
  s.map((ele,index) => {
    for(let i=0;i<=index;i++){
      if(i==0)
      newStr += ele.toUpperCase()
      else
      newStr += ele.toLowerCase()
    }
    newStr += '-'
  })
  return newStr.slice(0,newStr.length-1)
}
accum("ZpglnRxqenU")