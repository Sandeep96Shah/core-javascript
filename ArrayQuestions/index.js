// 1. Remove duplicates from a sorted array
function removeDuplicates(nums){
    return [...new Set(nums)];
}

console.log(removeDuplicates([1, 1, 2, 3, 3]));

