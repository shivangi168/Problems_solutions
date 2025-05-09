const wordList = ["apple", "banana", "kiwi", "grape"];
const shortest = findShortestWord(wordList);
console.log("Shortest word:", shortest); 

function findShortestWord(strArr){
    if(strArr.length == 0){
        return null;
    }

    return strArr.reduce((shortest,current)=>{
       return current.length <  shortest.length ? current : shortest;
    })
    
    
    
}