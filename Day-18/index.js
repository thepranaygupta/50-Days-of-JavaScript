const totalGrains = () => {
    // Code here
    let startingPoint = 0
    let totalGrains = BigInt(0)
    while(startingPoint < 64){
        totalGrains += BigInt(2**startingPoint)
        startingPoint++
    }
    return totalGrains;
}

const grainsOn = (input) => {
    // Code here
     return BigInt(2**(input-1))
}

console.log(`Grains on 5th square: ${grainsOn(5)}`)
console.log(`Total grains upto 5th square: ${totalGrains()}`)