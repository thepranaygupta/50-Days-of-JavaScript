function spinWords(string) {
    //TODO Have fun :)
    string = string.split(' ')
    string.map((ele,index) => {
        if(ele.length >= 5){
            string[index] = ele.split('').reverse().join('')
        }
    })
    return string = string.join(' ')
  }