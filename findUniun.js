// Input:
const arr1 = [1, 2, 3, 4, 5];
 const arr2 = [2, 3, 5, 6];

// Output:
// [1, 2, 3, 4, 5, 6]
console.log(findUnion(arr1,arr2));

function findUnion(num1,num2){
  const arr = [];
  for(let i=0;i<num1.length;i++){
      if(!arr.includes(num1[i])){
          arr.push(num1[i]);
      }
  }
    for(let j=0;j<num2.length;j++){
      if(!arr.includes(num2[j])){
          arr.push(num2[j]);
      }
  }
  return arr;
}