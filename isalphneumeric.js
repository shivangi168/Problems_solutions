function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
  
    while (left < right) {
      // Skip non-alphanumeric characters on the left
      while (left < right && !isAlphaNumeric(str[left])) {
        left++;
      }
  
      // Skip non-alphanumeric characters on the right
      while (left < right && !isAlphaNumeric(str[right])) {
        right--;
      }
  
      // Compare characters (case-insensitive)
      if (str[left].toLowerCase() !== str[right].toLowerCase()) {
        return false;
      }
  
      left++;
      right--;
    }
  
    return true;
  }
  
  // Helper function to check if a character is alphanumeric
  function isAlphaNumeric(char) {
    return /^[a-z0-9]$/i.test(char);
  }
  
  // Example usage
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
  console.log(isPalindrome("race a car"));                      // false
  