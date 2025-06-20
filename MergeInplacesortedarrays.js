
const arr1 = [1,2,3,0,0,0] , arr2 = [2,5,6];
console.log(mergeArray(arr1,arr2))

function mergeArray(arr1,arr2){
    const m = arr1.length - arr2.length;
    const n = arr2.length;
   let i = m-1;
   let j = n-1;
   
   
   let k = m+n-1;
   
   while(i>=0 && j>=0){
       if(arr1[i] > arr2[j]){
           arr1[k--] = arr1[i--];
       }
       else{
           arr1[k--] = arr2[j--];
           
       }
   }
   while(j>=0){
       arr1[k--] = arr2[j--];
   }
   return arr1;
   
}

