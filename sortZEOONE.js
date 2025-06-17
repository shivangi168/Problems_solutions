
const nums = [2,0,2,1,1,0];

console.log(sortColors(nums));

function sortColors(nums) {
    const res = new Array(nums.length);
    let idx = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            res[idx] = nums[i];
            idx++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            res[idx] = nums[i];
            idx++;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 2) {
            res[idx] = nums[i];
            idx++;
        }
    }
    return res;

    // console.log(res);
}

function sortColors(nums) {
    let low = 0, mid = 0, high = nums.length - 1;

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }

    return nums;
}
