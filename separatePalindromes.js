function separatePalindromes(arr) {
  const palindromes = [];
  const nonPalindromes = [];

  arr.forEach(num => {
    const str = num.toString();
    const reversed = str.split('').reverse().join('');
    if (str === reversed) {
      palindromes.push(num);
    } else {
      nonPalindromes.push(num);
    }
  });

  return { palindromes, nonPalindromes };
}

const numbers = [121, 345, 44, 12321, 567, 989];
const result = separatePalindromes(numbers);
console.log("Palindromes:", result.palindromes);
console.log("Non-Palindromes:", result.nonPalindromes);
