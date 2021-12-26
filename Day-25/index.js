function spinWords(str) {
    //TODO Have fun :)
    let strSplit = str.split(" ");

    for(let i = 0; i < strSplit.length; i++) {
        if(strSplit[i].length >= 5) {
            let rev = reverseString(strSplit[i]);
            strSplit[i] = rev;
        }
    }

    return strSplit.join(" ");

}

function reverseString(str) {
    return str.split('').reverse().join('');
}
