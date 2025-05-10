function stringToObject(path, value) {
    const keys = path.split('.'); // Split string into an array
    let result = {}; // Start with an empty object
  
    // Loop through each key and create nested objects
    for (let i = 0; i < keys.length; i++) {
      if (i === keys.length - 1) {
        result[keys[i]] = value; // Assign value at the last key
      } else {
        result[keys[i]] = result[keys[i]] || {}; // Create nested object if it doesn't exist
      }
    }
  
    return result;
  }
  const result = stringToObject("a.b.c", "someValue");
  console.log(result); 
  // Output: { a: { b: { c: "someValue" } } }
    