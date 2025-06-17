const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Max Sum:", TwoSumArr(nums));

function TwoSumArr(nums) {
    let max = Number.NEGATIVE_INFINITY;
    let sum = 0;
    let list = [];
    let tempList = [];

    for (let i = 0; i < nums.length; i++) {
        if (sum <= 0) {a
            sum = nums[i];
            tempList = [nums[i]]; 
        } else {
            sum += nums[i];
            tempList.push(nums[i]);
        }

        if (sum > max) {
            max = sum;
            list = [...tempList];
        }
    }

    console.log("Subarray with max sum:", list);
    return max;
}
