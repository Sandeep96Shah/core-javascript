const add = (a, b) => a + b;

const memoisedOne = (fn) => {
    const chached = {};
    return function(...args){
        const key = args.join("");
        if(!chached[key]){
            chached[key] = fn(...args);
        }
        return chached[key];
    }
}

const a1 = memoisedOne(add);
const o1 = a1(10, 20);
console.log(o1);