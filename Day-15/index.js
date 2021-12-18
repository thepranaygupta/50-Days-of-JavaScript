const isPangram = (input) => {
    input = input.toUpperCase().split('')
    for(let i=65; i<91; i++){
        let char = String.fromCharCode(i);
        if(input.includes(char)) continue;
        else return false;
    }
    return true;
}


console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
