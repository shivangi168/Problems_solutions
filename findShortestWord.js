function findShortestWord(words) {
  if (words.length === 0) return null; 

  let shortest = words[0];

  for (let word of words) {
    if (word.length < shortest.length) {
      shortest = word;
    }
  }

  return shortest;
}

// Example:
const words = ["apple", "cat", "banana", "kiwi", "grape"];
console.log(findShortestWord(words)); 
