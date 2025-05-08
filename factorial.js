function factorial(n) {
    if (n < 0) return -1; // factorial not defined for negative numbers
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(factorial(5)); // Output: 120
  