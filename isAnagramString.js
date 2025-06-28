function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let sortedS = s.split('').sort().join('');
    let sortedT = t.split('').sort().join('');

    return sortedS === sortedT;
}
console.log(isAnagram("listen", "silent"));   // true ✅
console.log(isAnagram("hello", "world"));     // false ❌
console.log(isAnagram("anagram", "nagaram")); // true ✅
console.log(isAnagram("aacc", "ccac"));       // false ❌
