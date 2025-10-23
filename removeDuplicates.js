function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Example
console.log(removeDuplicates([1, 2, 3, 2, 4, 3, 5]));
// Output: [1, 2, 3, 4, 5]


function removeDuplicates(arr) {
  return arr.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
}

// Example
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// Output: [1, 2, 3, 4, 5]
let arr = [1, 2, 3, 2, 4, 3, 5];
let seen = {};
let uniqueArr = [];

arr.forEach(item => {
  if (!seen[item]) {
    seen[item] = true;
    uniqueArr.push(item);
  }
});

console.log(uniqueArr); // [1, 2, 3, 4, 5]
