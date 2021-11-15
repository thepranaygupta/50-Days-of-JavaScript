const time = '12:10AM';

function convertTo24HrsFormat(time) {
    // write your solution here
    if (time.length === 6) {
        if (time.charAt(2) == ':')
            time = time.slice(0, 3) + '0' + time.slice(3);
        else
            time = '0' + time;
    }

    let new_time;
    if (time.slice(-2) === 'AM') {
        if (time.slice(0, 2) === '12')
            new_time = '00' + time.slice(2, 5);
        else
            new_time = time.slice(0, 5);
    }
    else {
        if (time.slice(0, 2) === '12')
            new_time = time.slice(0, 5);
        else {
            let hr = (Number(time.slice(0, 2)) + 12).toString();
            new_time = hr + time.slice(2, 5);
        }
    }
    return new_time;
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
