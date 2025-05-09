function characterOccurrences(str) {
    const frequency = {};
  
    for (let char of str) {
      // Optional: Ignore spaces or convert to lowercase if needed
      // char = char.toLowerCase();
      if (char !== ' ') {
        frequency[char] = (frequency[char] || 0) + 1;
      }
    }
  
    return frequency;
  }
  
  // Example usage
  console.log(characterOccurrences("hello world"));
  