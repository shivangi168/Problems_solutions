function toCamelCase(str) {
    return str
      .split(' ')  // Split the string into an array of words
      .map((word, index) => {
      //   if (index === 0) {
      //     return word.toLowerCase(); 
      //   }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();  // Capitalize the first letter of subsequent words
      })
      .join('');  // Join the array back into a string
  }
  
  // Example usage
  const inputString = "convert this string to camel case";
  const result = toCamelCase(inputString);
  
  console.log(result);  // "convertThisStringToCamelCase"
  