// 5. Write a JavaScript program to return the count of each character in a string.

const str = "Interview";
console.log(findChars(str));

function findChars(str){
    const freMap ={};
    for(let char of str){
        if(freMap[char]){
            freMap[char]++;
            
        }
        else{
            freMap[char]=1;
        }
    }
    return freMap;
}
