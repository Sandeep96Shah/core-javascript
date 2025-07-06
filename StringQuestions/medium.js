//  1. Find the first non-repeating character

const repeatingStr1 = "swiss";
const repeatingStr2 = "swisswi";
const nonRepeatingStr = "Kumar";

function firstNonRepeatingChar(str) {
  for (let i = 0; i < str.length; i++) {
    const remainingStr = str.substring(0, i) + str.substring(i + 1);
    if (!remainingStr.includes(str[i])) return str[i];
  }
  return -1;
}

console.log(firstNonRepeatingChar(repeatingStr1));
console.log(firstNonRepeatingChar(nonRepeatingStr));

function firstNonRepeatingChar1(str) {
  const count = {};

  for (const char of str) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of str) {
    if (count[char] === 1) return char;
  }
  return -1;
}

console.log(firstNonRepeatingChar1(repeatingStr1));
console.log(firstNonRepeatingChar1(repeatingStr2));
console.log(firstNonRepeatingChar1(nonRepeatingStr));

// 2. Implement a basic string compression algorithm
const str = "aabcccccaaa";

function compressStr(str) {
  const n = str.length;
  let result = "";
  let i = 0;
  while (i < str.length) {
    let count = 1;
    let start = i + 1;
    const ch = str[i];
    while (start < str.length && ch === str[start]) {
      count++;
      start++;
    }
    i = start;
    result += ch;
    result += count;
  }
  return result;
}
console.log(compressStr(str));

//  3. Check if one string is a rotation of another

function isRotation(s1, s2){
  if(s1.length !== s2.length) return false;

  return (s1+s1).includes(s2);
}

console.log(isRotation("waterbottle", "erbottlewat")); // true
console.log(isRotation("hello", "lohel"));             // true
console.log(isRotation("hello", "olelh"));             // false
