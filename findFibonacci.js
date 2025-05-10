console.log(getFibonacciSequence(1));  // [0]
console.log(getFibonacciSequence(5));  // [0, 1, 1, 2, 3]
console.log(getFibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


function getFibonacciSequence(n){
    let a = 0, b= 1;
    const res = [];
    for(let i=2;i<=n;i++){
        res.push(a)
        let temp = a;
        a = b;
        b= temp+a;
        
    }
    return res;
    
}
