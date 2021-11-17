const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    str=" "+str; let k=0; let s="";
    for(let i=0;i<str.length;i++)
    {
        if(str.charAt(i)==" ")
        k++;
        if(k>wordLimit)
        break;
        s=s+str.charAt(i);
    }

    return s.trim();
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
