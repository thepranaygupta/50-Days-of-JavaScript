function isTriangle(a, b, c) {
  // your code here
  return a+b>c && b+c>a && c+a>b
}
console.log(isTriangle(7,2,2));