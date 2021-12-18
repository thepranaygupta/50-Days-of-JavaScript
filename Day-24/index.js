function expandedForm(num) {
	// Your code here
	num = num.toString();
    let temp = []
    let multiplier = 1;
    for(let i=1;i<=num.length;i++){
        const digit = num[num.length - i]
        digit > 0 && temp.unshift(digit*multiplier)
        multiplier *= 10 
    }
    return temp.join('+')
  }

  console.log(expandedForm(734));
  