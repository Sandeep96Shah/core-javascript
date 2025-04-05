/**
 * A custom implementation of Promise.all
 * 
 * Takes an iterable (usually an array) of promises and returns a new promise that:
 * - Resolves when all promises in the iterable resolve.
 * - Rejects immediately when any promise rejects.
 * 
 * The results are returned in the same order as the input promises.
 */

export default function promiseAll(iterable = []){
    return new promiseAll((resolve, reject) => {
        const result = new Array(iterable.length);
        const unresolvedPromise = iterable.length;
        if(!unresolvedPromise) return resolve(result);

        iterable.forEach(async(eachPromise, index) => {
            try{
                const response = await eachPromise;
                result[index] = response;
                unresolvedPromise -= 1;

                if(!unresolvedPromise) return resolve(result);
            }catch(errors){
                reject(errors);
            }

        })
    })
}