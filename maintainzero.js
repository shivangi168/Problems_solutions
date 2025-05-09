function moveZerosToEnd(arr) {
    let insertPos = 0;
  
    // Move all non-zero elements to the front
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== 0) {
        arr[insertPos] = arr[i];
        insertPos++;
      }
    }
  
    // Fill the rest of the array with zeros
    while (insertPos < arr.length) {
      arr[insertPos] = 0;
      insertPos++;
    }
  
    return arr;
  }
  
  // Example
  const input = [0, 1, 0, 3, 12];
  console.log(moveZerosToEnd(input)); // Output: [1, 3, 12, 0, 0]
  