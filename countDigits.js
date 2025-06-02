

function countDigits(num){
    let count =0;
    num = Math.abs(num)
    if(num == 0) return 1;
    
    while(num >0){
        count++;
        num = Math.floor(num / 10);
    }
    return count;
    
}
console.log(countDigits(155))