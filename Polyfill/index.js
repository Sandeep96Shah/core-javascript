Promise.all = (promises) => {
    return new Promise((resolve, reject) => {
        const result = new Array(promises.length);
        let count = 0;
        promises.forEach((p, index) => {
            Promise.resolve(p)
                .then((value) => {
                    result[index] = value;
                    count++;
                    if(count === promises.length){
                        resolve(result);
                    }
                })
                .catch((error) => reject(error));
        })
    })
}