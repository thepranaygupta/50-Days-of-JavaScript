function getMiddle(s) {
  // your code here
  const n = s.length
  const mid = Math.floor(n/2)
  if(n==1) return s
  if(n%2!=0) return s[mid]
  else return s.slice(mid-1,mid+1)
}

console.log(getMiddle("testing"));