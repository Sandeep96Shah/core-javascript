/**
 * 
 * @param {*} list 
 * @returns flattedned array
 */

function flattened(list){
    return list.reduce((acc, curr) => {
        return acc.concat(
            Array.isArray(curr) ? flattened(curr) : curr
        )
    }, [])
}

console.log({first: flattened([1,2,3])});
console.log({first: flattened([1,[1,2],3])});
console.log({first: flattened([1,[[1,2],3]])});