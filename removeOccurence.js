//  Write a JavaScript program to remove all occurrences of a specified character from a given string

const str = "Programming";
console.log(removeCharacter(str,"m"));

function removeCharacter(str, charToRemove) {
 
  return [...str].filter(char => char !== charToRemove).join('');
}
