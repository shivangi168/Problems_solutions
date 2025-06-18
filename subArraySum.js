function subarraySum(nums, k) {
    let count = 0, sum = 0;
    const map = new Map();
    map.set(0, 1);  

    for (let num of nums) {
        sum += num;
        if (map.has(sum - k)) {
            count += map.get(sum - k);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
    }

    return count;
}

// Test cases
console.log(subarraySum([1, 1, 1], 2)); // Output: 2
console.log(subarraySum([1, 2, 3], 3)); // Output: 2
