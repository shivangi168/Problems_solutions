
console.log("answer", removeChar("Hiroshima","a"));
// function removeChar(str,chartoRemove){
//     return str.split(chartoRemove).join("");
// }
function removeChar(str,chartoRemove){
    return str.replaceAll(chartoRemove,"");
}

function removeMultipleChars(str, charsToRemove) {
  const removeSet = new Set(charsToRemove.split(""));
  return str
    .split("")
    .filter(char => !removeSet.has(char))
    .join("");
}

console.log(removeMultipleChars("hello world", "lo"));