function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function rotateLeftInPlace(arr, k) {
  const n = arr.length;
  k = k % n;

  reverse(arr, 0, k - 1);     // reverse first part
  reverse(arr, k, n - 1);     // reverse second part
  reverse(arr, 0, n - 1);     // reverse whole array

  return arr;
}
