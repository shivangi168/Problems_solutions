printDecreasingIncreasing(5);
function printDecreasingIncreasing(n){
    if(n==0) return;
    console.log(n);
    printDecreasing(n-1);
    console.log(n);

    
}

function findFactorial(n){
    if(n==1) return 1;
    
    let fnm1 = findFactorial(n-1);
    let fact = n*fnm1;
    return fact;
    // console.log(fact);
    
}
console.log(findFactorial(5));