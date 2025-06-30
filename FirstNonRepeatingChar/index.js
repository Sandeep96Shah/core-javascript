//  Find the first non-repeating character in a string.

function firstNonRepeatingChar(str){
    const map = new Map();

    for(let char of str){
        map.set(char, (map.get(char) || 0) + 1)
    }

    for(let char of str){
        if(map.get(char) === 1) return char;
    }
}

console.log(firstNonRepeatingChar("aabbcdde") )