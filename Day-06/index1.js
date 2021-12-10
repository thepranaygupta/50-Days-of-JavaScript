const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    str = str.split(' ');
    str = str.slice(0,wordLimit)
    str = str.join(' ')
    return str
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
