const obj = { key: 1 };

function isEmpty(obj) {
    return Object.entries(obj).length == 0;
}

console.log(`is empty object: ${isEmpty(obj)}`)
