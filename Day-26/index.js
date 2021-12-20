function findOdd(arr) {
    //happy coding!
    let unique = [... new Set(arr)]
    let res = 0
    unique.forEach((ele) => {
        let count = 0;
        arr.forEach(num => {
            if(ele === num) count++
        });
        if(count%2 != 0){
            res = ele
            return;
        }
    })
    return res
  }