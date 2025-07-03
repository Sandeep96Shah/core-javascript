// reverse a string

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
