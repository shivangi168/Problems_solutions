console.log(plusOne([1, 2, 3])); // [1, 2, 4]
console.log(plusOne([9]));      // [1, 0]
console.log(plusOne([9, 9]));   // [1, 0, 0]

function plusOne(digits){
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i] < 9){
            digits[i]++;
        }
        else{
            digits[i] = 0;
        }
    }
      // If all digits were 9
  digits.unshift(1);
  return digits;
}
