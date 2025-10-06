const x = "hello world"
console.log("answer", getEachCharCount(x));
function getEachCharCount(str){
    let charData ={};
    for(let char of str){
        if(char === " ") continue;
            // charCount[char] = (charCount[char] || 0) + 1;

        charData[char] = (charData[char] || 0) +1 ;
    }
    return charData;
    
}