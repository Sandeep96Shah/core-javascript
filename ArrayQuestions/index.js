// 1. Remove duplicates from a sorted array
function removeDuplicates(nums) {
  return [...new Set(nums)];
}

console.log(removeDuplicates([1, 1, 2, 3, 3]));

// 2. Find the second largest number in an array

function getSecondLargestNum(nums) {
  let firstLargest = -1;
  let secondLargest = -2;
  if (!nums.length) return -1;
  for (const num of nums) {
    if (num > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = num;
    } else if (num > secondLargest && num !== firstLargest) {
      secondLargest = num;
    }
  }
  return secondLargest;
}

console.log(getSecondLargestNum([1, 1, 1, 1, 1, 1, 1]));
