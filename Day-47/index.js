function isIsogram(str) {
  // your code here
  let unique = [...new Set(str.toLowerCase().split(''))];
  return unique.length === str.length ? true : false
}