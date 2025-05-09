function flattenArray(arr) {
    let result = [];
  
    arr.forEach(item => {
      if (Array.isArray(item)) {
        result = result.concat(flattenArray(item));  
      } else {
        result.push(item);
      }
    });
  
    return result;
  }
  const nested = [1, [2, [3, 4], 5], 6];
  console.log(flattenArray(nested)); // Output will be : [1, 2, 3, 4, 5, 6]
  
  