function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item)); // recursive call
    } else {
      result.push(item);
    }
  }

  return result;
}

// Test
console.log(flatten([1, [2, [3, 4], 5], 6])); 
// Output: [1, 2, 3, 4, 5, 6]
