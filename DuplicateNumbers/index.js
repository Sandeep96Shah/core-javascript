// Given an array of numbers, return all duplicates.

function duplicateNums(arr){
    const seen = new Set();
    const duplicates = new Set();

    for(let num of arr){
        if(seen.has(num)){
            duplicates.add(num);
        }else {
            seen.add(num);
        }
    }
    return [...duplicates];
}

console.log(duplicateNums([1, 2, 3, 2, 4, 5, 3, 6]))