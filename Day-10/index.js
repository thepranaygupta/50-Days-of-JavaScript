const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    // write your solution here
    var arr = array.filter(function (obj) {
        return obj.field !== filterField;
    });

    return arr;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
