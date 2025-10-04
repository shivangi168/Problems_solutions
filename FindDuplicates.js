function findDuplicate(nums) {
    const n = nums.length;
    const freq = new Array(n + 1).fill(0);

    for (let i = 0; i < nums.length; i++) {
        if (freq[nums[i]] === 0) {
            freq[nums[i]]++;
        } else {
            return nums[i];
        }
    }

    return 0;
}

const nums = [1, 3, 4, 2, 2];
console.log(findDuplicate(nums));
