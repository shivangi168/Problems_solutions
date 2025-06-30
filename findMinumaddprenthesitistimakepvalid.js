const str = "(((";
const str2 = "())";
console.log(findMinimum(str2));
console.log(findMinimum(str));

function findMinimum(str){
    let count = 0;
    const res = [];
   let openingFre = 0;
    let closingfreq = 0;
    for(let ch of str){
        if(ch == '('){
            openingFre++;
        }
        else{
            closingfreq++;
        }
    }
    return Math.abs(openingFre-closingfreq);
    
}