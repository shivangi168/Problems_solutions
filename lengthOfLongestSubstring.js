function lengthOfLongestSubstring(s) {
    let maxLength = 0;
  
    for (let i = 0; i < s.length; i++) {
      let seen = new Set();
      let currentLength = 0;
  
      for (let j = i; j < s.length; j++) {
        if (seen.has(s[j])) break; // Stop when a duplicate is found
  
        seen.add(s[j]);
        currentLength++;
      }
  
      maxLength = Math.max(maxLength, currentLength);
    }
  
    return maxLength;
  }
  
  console.log(lengthOfLongestSubstring("geeksforgeeks"));
  console.log(lengthOfLongestSubstring("aaa")); 
  console.log(lengthOfLongestSubstring("abcdefabcbb")); 
  