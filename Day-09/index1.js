const obj = { key: 1 };

function isEmpty(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object
}

console.log(`is empty object: ${isEmpty(obj)}`)
