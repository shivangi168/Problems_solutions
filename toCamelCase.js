function toCamelCase(str) {
  let result = '';
  let capitalizeNext = false;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (char === ' ' || char === '_' || char === '-') {
      capitalizeNext = true;
    } else {
      result += capitalizeNext ? char.toUpperCase() : char.toLowerCase();
      capitalizeNext = false;
    }
  }

  return result;
}

// Example usage:
console.log(toCamelCase("hello world"));         
console.log(toCamelCase("convert_this-string")); 
console.log(toCamelCase("JAVA_SCRIPT PROGRAM")); 
