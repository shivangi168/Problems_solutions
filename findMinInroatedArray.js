function findMin(nums) {
    let start = 0, end = nums.length - 1;

    while (start < end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }

    return nums[end]; 
}
const nums = [4, 5, 6, 7, 0, 1, 2];
console.log(findMin(nums)); // Output: 0
