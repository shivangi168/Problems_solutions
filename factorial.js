console.log(factorial(5));
console.log(factorial(3));

function factorial(n){
    let fact = 1;
    if(n<0){
        return "Invalid";
    }
    for(let i=1;i<=n;i++){
        fact = fact*i;
    }
    return fact;
}
function factorial(n) {
  if (n < 0) return "Factorial not defined for negative numbers";
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
