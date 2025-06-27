const num1 = "52";
const num2 = "4206";
const num3 = "35427";
console.log(largestOddNumber(num1));
console.log(largestOddNumber(num2));
console.log(largestOddNumber(num3));
function largestOddNumber(str){
    let ans = "NA";
    let maxOdd = 0;
    const res =  Number(str);
    if(res%2 !== 0){
        return str;
    }
    else{
        for(let ch = 0;ch<str.length;ch++){
            let val = Number(str.charAt(ch));
            if(val%2 !== 0){
                if(val > maxOdd){
                    maxOdd = val;
                    ans = maxOdd;
                }
            }
          
            
        }
         
    }
     return ans;

}