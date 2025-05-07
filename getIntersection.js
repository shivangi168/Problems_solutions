function getIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
  }
  
  console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
  // Output: [3, 4]

  
  function getIntersection(arr1, arr2) {
    const set2 = new Set(arr2);
    return arr1.filter(item => set2.has(item));
  }
  
  console.log(getIntersection([1, 2, 3, 4], [3, 4, 5, 6]));
  // Output: [3, 4]
  