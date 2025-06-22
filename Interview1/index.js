function countDivisiblePairs(arr, x, y) {
    let count = 0;
    const n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      for (let j = i + 1; j < n; j++) {
        const sum = arr[i] + arr[j];
        const diff = Math.abs(arr[i] - arr[j]);
  
        if (sum % x === 0 && diff % y === 0) {
          count++;
        }
      }
    }
  
    return count;
  }
  