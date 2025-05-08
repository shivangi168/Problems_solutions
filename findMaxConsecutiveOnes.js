function findMaxConsecutiveOnes(nums) {
    let maxCount = 0;
    let currentCount = 0;
  
    for (let num of nums) {
      if (num === 1) {
        currentCount++;
        maxCount = Math.max(maxCount, currentCount);
      } else {
        currentCount = 0;
      }
    }
  
    return maxCount;
  }
  
  // Example:
  const arr = [1, 1, 0, 1, 1, 1];
  console.log(findMaxConsecutiveOnes(arr)); // Output: 3
  