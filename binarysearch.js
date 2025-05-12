function binarysearch(nums,target){
    const n = nums.length;
   let lo = 0;
   let high = n-1;
   
   while(lo <= high){
       let mid = (high + lo)/2;
       if(nums[mid] == target) return mid;
       if(nums[mid] < target) lo = mid +1;
       else high = mid-1;
   }
   return -1;
    
   
    
}
const nums = [5, 6, 7, 8, 9, 10, 1, 2, 3];
console.log(binarysearch(nums,9))