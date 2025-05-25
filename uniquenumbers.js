// let arr = ['1', 2, 1, '3', '4', 'str', 5, 'abc', null, 5];

// console.log(getNumbers(arr)); // [1, 2, 3, 4, 5]

// function getNumbers(arr) {
//   const filtered = arr
//     .map(val => Number(val))
//     .filter(val => !isNaN(val))  
//     .filter((val, index, self) => self.indexOf(val) === index); 
  
//   return filtered.sort((a, b) => a - b);
// }
let arr = ['1', 2, 1, '3', '4', 'str', 5, 'abc', null, 5];

console.log(getNumbers(arr)); // [1, 2, 3, 4, 5]

function getNumbers(arr) {
  const nums = [];

  for (let val of arr) {
    const num = Number(val);
    if (!isNaN(num) && !nums.includes(num)) {
      nums.push(num);
    }
  }

  return nums.sort((a, b) => a - b);
}
