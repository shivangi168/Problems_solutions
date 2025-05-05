function areObjectsEqual(obj1, obj2) {
    // Check if both are objects and not null
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
      return false;
    }
  
    // Check if they have the same number of keys
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
      return false;
    }
  
    // Check if the keys and values are identical (with identical order)
    for (let i = 0; i < keys1.length; i++) {
      const key = keys1[i];
      
      // Check if the key exists in both objects and the values are the same
      if (key !== keys2[i] || obj1[key] !== obj2[key]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage:
  const obj1 = { name: "Alice", age: 25 };
  const obj2 = { name: "Alice", age: 25 };
  const obj3 = { age: 25, name: "Alice" }; // Same keys and values, but order differs
  
  console.log(areObjectsEqual(obj1, obj2)); // true
  console.log(areObjectsEqual(obj1, obj3)); // false (keys' order differs)
  