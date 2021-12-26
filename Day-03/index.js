const num = 3849;

function reverseGivenInteger(num) {
    // write your solution here
    let st = num.toString();
    let rev_num = st.split('').reverse().join('');
    return Number(rev_num);
}

console.log(`Reversed integer is: ${reverseGivenInteger(num)}`)
