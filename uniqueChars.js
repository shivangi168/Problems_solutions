function getUniqueCharacters(str) {
    const uniqueChars = new Set(str); // Convert string to a Set to remove duplicates
    return [...uniqueChars].join('');  // Convert the Set back to a string
  }
  
  // Example usage:
  const unique = getUniqueCharacters("aabbccddeeff");
  console.log(unique); // Output: "abcdef"
  