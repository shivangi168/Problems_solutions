const nums = [-1, 0, 3, 5, 9, 12], target = 9;

function binarySearch(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return -1; 
}

console.log(binarySearch(nums, target)); 
