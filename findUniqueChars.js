const str = "programming";
console.log("unique characters", findUniqueChars(str));
function findUniqueChars(str){
    let charCount = {};
    a
    for(let char of str){
        charCount[char] = (charCount[char] || 0)+1;
    }
    return [...str].filter(char => charCount[char] === 1);
}

