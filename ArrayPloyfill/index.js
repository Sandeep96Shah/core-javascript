Array.prototype.forEach = function (callbackFn, thisArg) {
  if (this === null || this === undefined)
    throw new TypeError("Array is not defined");

  if (typeof callbackFn !== "function")
    throw new TypeError(`${callbackFn} This is not an array`);

  const n = this.length;
  const filteredArr = Object(this);

  for (let i = 0; i < n; i++) {
    if (i in filteredArr) callbackFn.call(thisArg, this[i], i, this);
  }
};

Array.prototype.map = function (callbackFn, thisArg) {
  if (this === null || this === undefined)
    throw new TypeError("Array is not defined");

  if (typeof callbackFn !== "function")
    throw new TypeError(`${callbackFn} This is not an array`);

  const n = this.length;
  const filteredArr = Object(this);

  const result = new Array(n);

  for (let i = 0; i < n; i++) {
    if (i in filteredArr)
      result[i] = callbackFn.call(thisArg, this[i], i, this);
  }

  return result;
};

Array.prototype.filter = function (callbackFn, thisArg) {
  if (this === null || this === undefined)
    throw new TypeError("Array is not defined");

  if (typeof callbackFn !== "function")
    throw new TypeError(`${callbackFn} This is not an array`);

  const n = this.length;
  const filteredArr = Object(this);

  const result = [];

  for (let i = 0; i < n; i++) {
    if (i in filteredArr && callbackFn.call(thisArg, this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

Array.prototype.reduce = function (callbackFn, initialValue) {
  if (this === null || this === undefined)
    throw new TypeError("Array is not defined");

  if (typeof callbackFn !== "function")
    throw new TypeError(`${callbackFn} is not a function`);

  let accumulator = 0;
  let startIndex = 0;

  const n = this.length;
  const filteredThis = Object(this);

  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    while (startIndex < n && !(startIndex in filteredThis)) startIndex++;

    if (startIndex >= n)
      throw new TypeError("Reduce can not be performed on empty array");

    accumulator = this[startIndex++];
  }

  for (let i = startIndex; i < n; i++) {
    if (i in filteredThis) {
      accumulator += callbackFn(accumulator, this[i], i, this);
    }
  }
  return accumulator;
};

Array.prototype.find = function (callbackFn, thisArg) {
  if (this === null || this === undefined)
    throw new TypeError("Array is not defined");

  if (typeof callbackFn !== "function")
    throw new TypeError(`${callbackFn} is not a function`);

  const n = this.length;
  const filteredThis = Object(this);

  for (let i = 0; i < n; i++) {
    if (i in filteredThis && callbackFn.call(thisArg, this[i], i, this))
      return this[i];
  }
};
