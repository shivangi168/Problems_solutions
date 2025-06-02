

function reverseNumber(num){
    // let count =0;
    // num = Math.abs(num)
    // if(num == 0) return 1;
    let res = "";
    
    while(num >0){
        let rem = num%10;
        res = res+rem;
        num = Math.floor(num/10);
        
      
    }
    return res;
    
}
console.log(reverseNumber(1590))