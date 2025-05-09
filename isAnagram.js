// Write a JavaScript program that takes two strings as input and returns true if they are anagrams of each other, otherwise returns false.

function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
  
    // Convert both strings to lowercase and sort their characters
  
    const sortedStr1 = str1.toLowerCase().split('').sort().join('');
    const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  const string1 = "listen";
  const string2 = "silent";
  const result = areAnagrams(string1, string2);
  
  console.log(result);  // true