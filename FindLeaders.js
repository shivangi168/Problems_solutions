const arr = [16, 17, 4, 3, 5, 2]
// Output: [17 5 2] leader means number that bigger than theri right lements in theaaray
console.log(findLeaders(arr));

function findLeaders(arr){
      const n = arr.length;
      const res = [];
      let max = arr[n-1];
      res.push(max);
      
      for(let i=n-2;i>=0;i--){
          if(arr[i] > max){
              max = arr[i];
              res.push(max);
          }
      }
      return res.reverse();
      
    
}