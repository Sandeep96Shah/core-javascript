function getSmallest(arr){
    let smallest = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < smallest){
            smallest = arr[i];
        }
    }
    return smallest;
}

function showTheLove(arr){
    const smallestN = getSmallest(arr);
    if(smallestN == -1) return arr;
    
    console.log(smallestN)
    
    let reduce = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== smallestN){
            const extra = (25/100 * arr[i]);
            reduce += extra;
            arr[i] = arr[i] - extra;
        }
    }
    
     for(let i = 0; i < arr.length; i++){
        if(arr[i] === smallestN){
            arr[i] += reduce;
        }
    }
    
    return arr;
}

console.log(showTheLove([4, 1, 4]));
console.log(showTheLove([16, 10, 8]));
console.log(showTheLove([2, 100]));


