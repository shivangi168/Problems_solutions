function canFormByRearranging(str1, str2) {
    if (str1.length !== str2.length) {
        return false; 
    }

    const freqMap1 = {};
    const freqMap2 = {};

    for (let char of str1) {
        freqMap1[char] = (freqMap1[char] || 0) + 1;
    }

    for (let char of str2) {
        freqMap2[char] = (freqMap2[char] || 0) + 1;
    }

    for (let key in freqMap1) {
        if (freqMap1[key] !== freqMap2[key]) {
            return false;
        }
    }

    return true;
}

// Example usage:
console.log(canFormByRearranging("listen", "silent")); // true
console.log(canFormByRearranging("hello", "world"));   // false
