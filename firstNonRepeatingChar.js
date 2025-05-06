function firstNonRepeatingChar(str) {
    const charCount = {};
  
    // First pass: Count each character
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Second pass: Find the first character with count 1
    for (let i = 0; i < str.length; i++) {
      if (charCount[str[i]] === 1) {
        return str[i];
      }
    }
  
    return -1; // No non-repeating character
  }
  
  // Example usage
  console.log(firstNonRepeatingChar("leetcode"));    // Output: 'l'
  console.log(firstNonRepeatingChar("aabbcc"));      // Output: -1
  console.log(firstNonRepeatingChar("aabbcdde"));    // Output: 'c'
  