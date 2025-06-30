const obj1 = {
  a: [1, 2, 4],
  b: [2, 3],
  c: [1, 4, 3],
  d: [2, 4],
};

// / const obj2 = {
// // //                 1: [a, c],
// // //                 2: [a, b, d],
// // //                 3: [b, c],
// // //                 4: [a, c, d]
// // //             };

function getMagic(obj) {
  const keysList = Object.keys(obj);
  const newObj = {};
  for (const char of keysList) {
    const valueList = obj[char];
    for (const num of valueList) {
      if (newObj[num]) {
        newObj[num].push(char);
      } else {
        newObj[num] = [char];
      }
    }
  }
  return newObj;
}

console.log(getMagic(obj1));
