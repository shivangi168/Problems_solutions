function compressString(str) {
  let count = 1;
  const arr = str.split('');
  let res = "";

  for (let i = 1; i <= str.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      const char = arr[i - 1];

      if (count > 9) {
        while (count > 9) {
          res += char + "9";
          count -= 9;
        }
        res += char + count;
      } else if (count === 1) {
        res += char;
      } else {
        res += char + count;
      }

      count = 1;
    }
  }

  return res;
}
console.log(compressString("aaaaaabbbbbbbccccccccccccccccccccc"));