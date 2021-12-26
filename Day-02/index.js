const str = "JavaScript is awesome"

function reverseAString(str) {
    // write your solution here
    let reversed = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }

    return reversed;
}

console.log(`Reversed string is: ${reverseAString(str)}`)
