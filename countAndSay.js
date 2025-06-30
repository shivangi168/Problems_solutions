

console.log(countAndSay(2));
function countAndSay(num){
    if(num == "1") return "1";
    let prev = countAndSay(num-1);
    let count = 1;
    let res  = "";
    for(let i=1;i<=prev.length;i++){
        if(prev[i] === prev[i-1]){
            count++;
        }
        else{
            res += count.toString()+prev[i-1];
            count = 1;
        }
        
    }
    return res;
    
}