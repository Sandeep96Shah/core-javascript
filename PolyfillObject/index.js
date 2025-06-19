if (typeof Object.assign !== "function") {
  Object.assign = function (target, ...sources) {
    if (target == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    let to = Object(target);
    for (let source of sources) {
      if (source != null) {
        for (let key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            to[key] = source[key];
          }
        }
      }
    }
    return to;
  };
}

if (!Object.entries) {
  Object.entries = function (obj) {
    let ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i);
    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];
    return resArray;
  };
}

if (!Object.values) {
  Object.values = function (obj) {
    return Object.keys(obj).map(function (key) {
      return obj[key];
    });
  };
}

if (!Object.fromEntries) {
  Object.fromEntries = function (entries) {
    if (!entries || !entries[Symbol.iterator]) {
      throw new TypeError(
        "Object.fromEntries() requires a single iterable argument"
      );
    }
    let obj = {};
    for (let [key, value] of entries) {
      obj[key] = value;
    }
    return obj;
  };
}

if (!Object.is) {
  Object.is = function (x, y) {
    if (x === y) {
      // Check for -0
      return x !== 0 || 1 / x === 1 / y;
    }
    // Check for NaN
    return x !== x && y !== y;
  };
}
