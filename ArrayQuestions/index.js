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

// 3. Move all zeros to the end of the array
function moveAllZerosAtEnd(nums) {
  let nonZeroIndex = 0;

  const n = nums.length;

  for (const num of nums) {
    if (num) {
      nums[nonZeroIndex++] = num;
    }
  }

  while (nonZeroIndex < n) {
    nums[nonZeroIndex++] = 0;
  }

  return nums;
}

console.log(moveAllZerosAtEnd([0, 1, 0, 3, 12]));

// 4. Find the intersection of two arrays
function intersection(nums1, nums2) {
  const result = [];
  for (const num of nums1) {
    if (nums2.includes(num) && !result.includes(num)) result.push(num);
  }
  return result;
}

console.log(intersection([1, 2, 2, 3], [2, 3, 4]));

// 5. Find all pairs that sum to a specific value
function getAllTargetValues(nums, target) {
  const result = [];
  const keysList = new Set();

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const pair = [nums[i], nums[j]].sort((a, b) => a - b);
      const key = pair.join("");

      if (nums[i] + nums[j] === target && !keysList.has(key)) {
        result.push([nums[i], nums[j]]);
        keysList.add(key);
      }
    }
  }
  return result;
}

console.log(getAllTargetValues([1, 2, 3, 4], 5));
