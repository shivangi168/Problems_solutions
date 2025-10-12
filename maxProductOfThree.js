function maxProductOfThree(nums) {
    nums.sort((a,b) => a-b);
    nums.sort((a, b) => a - b);

    let n = nums.length;
    let option1 = nums[n - 1] * nums[n - 2] * nums[n - 3];
    let option2 = nums[0] * nums[1] * nums[n - 1];
    return Math.max(option1, option2);
}

console.log(maxProductOfThree([1, 10, 2, 6, 5, 3]));  
console.log(maxProductOfThree([-10, -10, 5, 2]));     
console.log(maxProductOfThree([-5, -6, -7, -8]));     

