function reverseWords(sentence) {
    const words = sentence.split(' ');
    let reversed = '';
  
    for (let i = words.length - 1; i >= 0; i--) {
      reversed += words[i];
      if (i !== 0) reversed += ' ';
    }
  
    return reversed;
  }
  console.log(reverseWords("The quick brown fox")); // "fox brown quick The"
  