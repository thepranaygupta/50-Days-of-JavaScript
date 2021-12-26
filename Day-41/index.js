function openOrSenior(data) {
    // your code goes below
    return data.map((member) => {
        return member[0] >= 55 && member[1] > 7 ? "Senior" : "Open";
    })
  }
  
let output = openOrSenior([
    [[3, 12],[55,1],[91, -2],[53, 23]]
]);
  
console.log(output);
  