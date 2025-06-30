

console.log(repeatedStringMatch("abcd", "cdabcdab"));
console.log(repeatedStringMatch("abc","cabca"));
console.log(repeatedStringMatch("a","aa"));

function repeatedStringMatch(a,b){
    let repeated = a;
    let count = 1;
    while(repeated.length < b.length){
        repeated += a;
        count++;
    }
    if(repeated.includes(b)) return count;
    
    // in case a = "abc" ,b= "cabca"
    repeated += a;
    count++;
    
     if(repeated.includes(b)) return count;
     return -1;
}
