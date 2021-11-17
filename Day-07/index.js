const number = '+919876543210';

function validateMobile(number) {
    let s=number+"";
if(s.substring(0,3)==="+91"||s.charAt(0)==="0"||s.length==10)
   return true;
    else return false;
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
