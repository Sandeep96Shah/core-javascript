// const helloWorld = document.getElementsById("hello-world");
// console.log(helloWorld);
// console.log(helloWorld.NodeType)
// console.log(Node.TEXT_NODE)


// const a = [1,2,3,4, {a,b,c}]

// function demo() {
//     console.log(arguments);           // [Arguments] array-like object
//     console.log(arguments[0]);        // "hi"
//     console.log(arguments.length);    // 2
//     console.log(Array.isArray(arguments)); // false ❌
  
//     const args = Array.from(arguments);
//     console.log(args.map(x => x.toUpperCase())); // ["HI", "THERE"]
//   }

//   const b = [1,2,3];
//   console.log(b);

//   demo(1,2,3)

const a = document.getElementsByTagName("div");

console.log(a[0].tagName);
