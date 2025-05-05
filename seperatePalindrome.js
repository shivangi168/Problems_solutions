function separatePalindromes(arr) {
    if (!Array.isArray(arr)) {
      return { palindromes: [], nonPalindromes: [] };
    }
  
    const isPalindrome = (num) => {
      const str = num.toString();
      return str === str.split('').reverse().join('');
    };
  
    const palindromes = [];
    const nonPalindromes = [];
  
    for (let num of arr) {
      if (isPalindrome(num)) {
        palindromes.push(num);
      } else {
        nonPalindromes.push(num);
      }
    }
  
    return { palindromes, nonPalindromes };
  }
  
  // Example usage:
  const numbers = [121, 131, 20, 303, 45, 1001, 123];
  const result = separatePalindromes(numbers);
  console.log("Palindromes:", result.palindromes);       // [121, 131, 303, 1001]
  console.log("Non-palindromes:", result.nonPalindromes); // [20, 45, 123]
  