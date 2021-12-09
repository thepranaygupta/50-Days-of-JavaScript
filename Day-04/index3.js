const time = '12:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here
    if(time12h.length == 7){
        var time = time12h.slice(0,5)
        var modifier = time12h.slice(-2);
    }else{
        var time = time12h.slice(0,4)
        var modifier = time12h.slice(-2);
    }

    let [hours, minutes] = time.split(':');
    if(hours.length == 1) hours = '0'+hours
    if(minutes.length == 1) minutes = '0'+minutes
  
    if (hours === '12') {
      hours = '00';
    }

    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
  
    return `${hours}:${minutes}`;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
