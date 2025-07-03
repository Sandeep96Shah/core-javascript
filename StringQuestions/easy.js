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

// Check for a palindrome

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


