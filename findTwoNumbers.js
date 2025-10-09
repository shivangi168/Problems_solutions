function findTwoNumbers(nums, target) {
  const seen = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seen.has(complement)) {
      return [complement, nums[i]]; 
    }

    seen.set(nums[i], i);
  }

  return null;
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(findTwoNumbers(nums, target)); 
