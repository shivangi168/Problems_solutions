const str = "aabcb";
console.log(sumOfBeauty(str)); // Output: 5

function sumOfBeauty(str) {
    const n = str.length;
    let totalBeauty = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 3; j <= n; j++) {
            const sub = str.substring(i, j);

            if (!allCharsSame(sub)) {
                const freq = getFrequencyMap(sub);
                const values = Object.values(freq);

                const max = Math.max(...values);
                const min = Math.min(...values);

                totalBeauty += (max - min);
                console.log(`Substring: ${sub}, Max: ${max}, Min: ${min}, Beauty: ${max - min}`);
            }
        }
    }

    return totalBeauty;
}

function getFrequencyMap(str) {
    const freq = {};
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }
    return freq;
}

function allCharsSame(s) {
    return s.split('').every(char => char === s[0]);
}
