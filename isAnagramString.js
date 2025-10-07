function areAnagrams(str1, str2) {
  // Just convert to lowercase, don’t remove spaces
  const normalize = str => str.toLowerCase();

  const s1 = normalize(str1);
  const s2 = normalize(str2);

  if (s1.length !== s2.length) return false;

  const charCount = {};

  for (let char of s1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of s2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  return true;
}

// Example
console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("li sten", "sil en t"));
