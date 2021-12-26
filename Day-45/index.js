function findOutlier(integers) {
  //your code here
  let evenArr = []
  let oddArr = [];
  integers.map((ele) => {
    if(ele%2===0)evenArr.push(ele)
    else oddArr.push(ele)
  })
  if(oddArr.length > evenArr.length) return evenArr[0]
  else return oddArr[0]
}
console.log(findOutlier([0,0,3,0,0]));
