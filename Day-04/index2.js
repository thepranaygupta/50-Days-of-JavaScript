const time = '12:10AM';

function convertTo24HrsFormat(time) {
    let ss = ""; let x = ""; let k = 0;

    let l = time.length;
    for (let i = l - 1; i > 0; i--) {
        if (time.charAt(i) == ":")
            break;
        k++;
    }
    if (k == 3)
        time = time.substring(0, l - k) + "0" + time.substring(l - k, time.length);

    ss = time.substr(l - 2);
    if (ss === "AM") {
        if (Number(time.substring(0, 2)) == 12) {
            time = "00" + time.substring(2, l - 2);
        }
        else {
            time = "0" + time.substring(0, l - 2);
        }
        for (let i = l - 1; i > 0; i--) {
            if (time.charAt(i) == ":")
                break;
            k++;
        }
        if (k == 2)
            time = time.substring(0, l - k) + "0" + time.substring(l - k, time.length);
        return time;
    }

    else {
        if (time.substring(0, 2) === "12") {
            time = time.substring(0, 5);
        }
        else {
            x = time.substring(0, 2);
            x = Number(x);
            x = x + 12;
            time = x + time.substring(2, 5);
        }
        for (let i = l - 1; i > 0; i--) {
            if (time.charAt(i) == ":")
                break;
            k++;
        }
        if (k == 1)
            time = time.substring(0, l - k) + "0" + time.substring(l - k, time.length);
        return time;
    }
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
