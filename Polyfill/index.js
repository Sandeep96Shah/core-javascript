//Resolve, if all the promises gets resolved else rejected
Promise.all = (promises) => {
  return new Promise((resolve, reject) => {
    const result = new Array(promises.length);
    let count = 0;
    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          result[index] = value;
          count++;
          if (count === promises.length) {
            resolve(result);
          }
        })
        .catch((error) => reject(error));
    });
  });
};

// resolve all the promises, either resolved or rejected
Promise.allSettled = (promises) => {
  return new Promise((resolve) => {
    const result = new Array(promises.length);
    let count = 0;
    promises.forEach((p, index) => {
      Promise.resolve(p)
        .then((value) => {
          result[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          result[index] = { status: "rejected", reason };
        })
        .finally(() => {
          count++;
          if (count === promises.length) resolve(result);
        });
    });
  });
};

// resolved first fullfilled promise or reject with AggregrateError if all rejected
Promise.any = (promises) => {
  return new Promise((resolve, reject) => {
    const rejectCount = 0;
    const errors = [];
    promises.forEach((p) => {
      Promise.resolve(p)
        .then((value) => resolve(value))
        .catch((error) => {
          errors[rejectCount] = error;
          rejectCount++;
        })
        .finally(() => {
          if (rejectCount === promises.length) {
            reject(new AggregateError(errors, "All promises are rejected"));
          }
        });
    });
  });
};

// resolve or reject once first promise gets settles
Promise.race = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            Promise.resolve(p)
                .then((value) => resolve(value))
                .catch((reason) => reject(reason))
        })
    })
}
