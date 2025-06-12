console.log(x); // undefined
var x = 10;

console.log(y); // referencer Error
let y = 20;

greet(); // Hello
function greet() {
  console.log("Hello");
}

sayHi(); // Error, It is not a function
var sayHi = function () {
  console.log("Hi");
};

var a = 1;
function test() {
  console.log(a); // undefined
  var a = 2;
}
test();

console.log(b); // Reference Error
const b = 5;

const obj = new Person(); // Reference Error
class Person {
  constructor() {
    console.log("Constructed!");
  }
}

var foo = "global";

function test() {
  console.log(foo); // undefined
  var foo = "local";
  console.log(foo); // local
}
test();

function hoistExample() {
  console.log(x); // undefined
  var x = 100;
  var x = 200;
  console.log(x); // 200
}
hoistExample();

for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3 3 3
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0); // 0 1 2
}

sayHello(); // Declared

function sayHello() {
  console.log("Declared!");
}

sayBye(); // It is not a function

var sayBye = function () {
  console.log("Expression!");
};

var x = 10;

if (true) {
  console.log(x); // undefined
  var x = 20;
}

function foo() {
  console.log(bar); // function reference
  var bar = 1;
  function bar() {}
}
foo();

console.log(typeof undeclaredVar); // undefined
