const ones = [
  "","one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen",  "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",
];
const tens = [
  "", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety",
];
const sep = [
  "", " thousand ", " million ", " billion ", " trillion ", " quadrillion ", " quintillion ", " sextillion ",
];
  
const sayNumberInEnglish = (number) => {
    let arr = [], str = "", i = 0;
    if (number.length === 0) {
      return;
    }

    number = parseInt(number, 10);
    if (isNaN(number)) {
      return;
    }

    while(number){
      arr.push(number%1000)
      number = parseInt(number/1000,10)
    }

    while(arr.length){
      str = calc(arr.shift()) + sep[i++] + str;
    }
  
    return str;
  };

  function calc (num) {
    let x = Math.floor(num/100);
    let y = Math.floor(num/10)%10
    let z = (num%10)
    let word = (x > 0 ? ones[x] + ' hundred ' : "") + (y >= 2 ? tens[y] + '-' + ones[z] : ones[10*y+z])
    return word;
  }
  
  console.log(`5635 in english is: ${sayNumberInEnglish(5635)}`);
  