printDecreasing(5);
function printDecreasing(n){
    if(n==0) return;
    printDecreasing(n-1);
    console.log(n);
    
}