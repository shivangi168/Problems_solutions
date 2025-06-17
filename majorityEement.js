
// const nums1 = [3,2,3]
// Output: 3


const nums2 = [2,2,1,1,1,2,2]
// Output: 2
console.log(findMajority(nums2));

function findMajority(nums){
    const n = nums.length;
    const m = nums.length/2;
   const map = new Map();
    
    for(let i=0;i<n;i++){
        
        if(!map.has(nums[i])){
            map.set(nums[i],1);
        }
        else{
            map.set(nums[i],map.get(nums[i])+1);
         

        }
          if (map.get(nums[i]) >= m) {
            return nums[i]; 
        }
        
    }
    return 0;
}
 