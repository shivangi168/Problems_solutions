const nums = [2, 2, 1, 1, 6];
console.log(findUnique(nums));

function findUnique(nums) {
  const map = new Map();
  let res = null;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      res = key;
    }
  }

  return res;
}
