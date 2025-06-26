/**
 * @return {Array<number>}
 */
Array.prototype.square = function () {
    const result = []
    const n = this.length;
    for(let i = 0 ; i < n; i++){
      result.push(this[i]*this[i]);
    }
    return result;
  };