const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    let newArr = array.filter((item) => {
        return item.field != filterField
    })
    return newArr;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
