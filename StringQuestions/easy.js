// 1.  reverse a string

const str = "hello";

function reverseStr(str){
    let reversedStr = "";
    for(let i = str.length -1; i >= 0; i--){
    reversedStr +=str[i];
    }
    return reversedStr;
}

console.log(reverseStr(str));

function reverseStrReduce(str){
    return str.split("").reduce((acc, cur) => cur+acc, "");
}

console.log(reverseStrReduce(str));

// 2. Check for a palindrome

const str1 = "madam";
const str2 = "hello";

function palindromeStr(str){
    let end = str.length - 1;
    let start = 0;
    while(start <= end){
        if(str[start] !== str[end]){
            return "No, its not a palindrome";
        }
        start++;
        end--;
    }
    return "Yes, its a palindrome";
}
console.log(palindromeStr(str1));
console.log(palindromeStr(str2));

// 3. Count the number of vowels in a string
const str4 = "I am Sandeep Kumar Shah";

function vowels(str){
    let count = 0;
    for(const char of str){
        const ch = char.toLowerCase();
        if(ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u"){
                count++;
        }
    }
    return count;
}

console.log(vowels(str4));

function vowelsSet(str){
    const vowels = "aeiou";
    let count = 0;
    for(const char of str){
        if(vowels.includes(char)) count++
    }
    return count;
}

console.log(vowels(str4));

// 4. Remove all duplicate characters
const str5 = "qqwweerrttyy";

function removeDuplicate(str){
    const unique = new Set(str);
    return Array.from(unique).join("");
}

console.log(removeDuplicate(str5));

function removeDuplicate1(str){
    let result = ""
    for(const char of str){
        if(!result.includes(char)){
            result += char;
        }
    }
    return result;
}
console.log(removeDuplicate1(str5));


// 5. Check if two strings are anagrams


const anagram1 = "hello";
const anagram2 = "olleh"
const anagram3 = "world";

function isAnagrams(str1, str2){
    if(str1.length !== str2.length) return false;
    const uniqueStr1 = [...new Set(str1)].join("");
    const uniqueStr2 = [...new Set(str2)].join("");
    if(uniqueStr1.length !== uniqueStr2.length) return false;
    
    for(const char of uniqueStr2){
        if(!uniqueStr1.includes(char)) return false;
    }
    return true;
}

console.log(isAnagrams(anagram1, anagram2))
console.log(isAnagrams(anagram1, anagram3))

function isAnagrams1(str1, str2){
   const normalize = (str) => str.split("").sort().join("");
   return normalize(str1) === normalize(str2)
}

console.log(isAnagrams1(anagram1, anagram2))
console.log(isAnagrams1(anagram1, anagram3))





