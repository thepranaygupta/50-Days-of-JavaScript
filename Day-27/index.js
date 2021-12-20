function getCount1(str) {
    // enter your magic here
    let vowelsCount = 0;
    str = str.split('')
    const vowels = ['a','e','i','o','u']
    str.map((char) => {
        if(vowels.includes(char.toLowerCase())) vowelsCount++
    })
    return vowelsCount;
  }