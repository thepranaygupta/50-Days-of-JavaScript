function findNeedle(haystack) {
  // your code here
  let foundAt = 0;
  haystack.forEach((ele,index) => {
      if(ele == 'needle'){
        foundAt = index
        return;
      }
  })
  return `found the needle at position ${foundAt}`
}