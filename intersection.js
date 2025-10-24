function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  return arr1.filter((item) => set2.has(item));
}

const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];
console.log(intersection(a, b)); // [3, 4, 5]

function intersection(arr1, arr2) {
  return arr1.filter((item) => arr2.includes(item));
}

const x = [1, 2, 3, 4, 5];
const y = [3, 4, 5, 6, 7];
console.log(intersection(x, y)); // [3, 4, 5]

function intersection(arr1, arr2) {
  const map = new Map();
  const result = [];

  for (let num of arr1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (let num of arr2) {
    if (map.get(num) > 0) {
      result.push(num);
      map.set(num, map.get(num) - 1);
    }
  }

  return result;
}

const p = [1, 2, 2, 3];
const q = [2, 2, 3, 4];
console.log(intersection(p, q)); // [2, 2, 3]
