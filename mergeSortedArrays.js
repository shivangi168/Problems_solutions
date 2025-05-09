function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0;
    let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
  
    return merged;
  }
  
  const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
  console.log(result); // [0, 3, 4, 4, 6, 30, 31]
  