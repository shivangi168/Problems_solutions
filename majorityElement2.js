function majorityElement(nums) {
    let candidate1 = null, candidate2 = null;
    let count1 = 0, count2 = 0;

    // First pass to find candidates
    for (let num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
        else if (count1 === 0) {
            candidate1 = num;
            count1 = 1;
        }
        else if (count2 === 0) {
            candidate2 = num;
            count2 = 1;
        }
        else {
            count1--;
            count2--;
        }
    }

    // Second pass to verify counts
    count1 = 0;
    count2 = 0;
    for (let num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    const result = [];
    const n = nums.length;
    if (count1 > Math.floor(n / 3)) result.push(candidate1);
    if (count2 > Math.floor(n / 3)) result.push(candidate2);
    return result;
}

// Examples
console.log(majorityElement([3,2,3]));         // Output: [3]
console.log(majorityElement([1,1,1,3,3,2,2,2])); // Output: [1, 2]
