function maximumProduct(nums) {
    // Sort the array in ascending order
    nums.sort((a, b) => a - b);
  
    // The maximum product can be either:
    // 1. The product of the three largest numbers
    // 2. The product of the two smallest numbers (which might be negative) and the largest number
    return Math.max(
      nums[0] * nums[1] * nums[nums.length - 1], // Two smallest and the largest number
      nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3] // Three largest numbers
    );
  }
  
  // Example usage:
  const nums = [-10, -10, 5, 2];
  const maxProduct = maximumProduct(nums);
  console.log(maxProduct); // Output: 500 (Product of -10, -10, and 5)
  