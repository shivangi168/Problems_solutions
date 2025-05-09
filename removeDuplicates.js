const removeDuplicates = arr => [...new Set(arr)];

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

const removeDuplicatess = arr =>
    arr.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []);
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  // Output: [1, 2, 3, 4, 5]
  function removeDuplicates(arr) {
    const map = new Map();
    for (let item of arr) {
      if (!map.has(item)) {
        map.set(item, true);
      }
    }
    return Array.from(map.keys());
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  // Output: [1, 2, 3, 4, 5]

  function removeDuplicates(arr) {
    const seen = {};
    return arr.filter(item => {
      if (seen[item]) return false;
      seen[item] = true;
      return true;
    });
  }
  
  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
  // Output: [1, 2, 3, 4, 5]
  