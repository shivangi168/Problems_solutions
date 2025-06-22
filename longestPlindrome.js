function getAllSubstrings(str) {
  const substrings = [];
  const  n = str.length;
  for(let i=0;i<n;i++){
      for(let j=i+1;j<=n;j++){
          substrings.push(str.substring(i,j))
      }
  }
  return substrings;
}

  


const str = "abc";
const allSubstrings = getAllSubstrings(str);
console.log(allSubstrings);
