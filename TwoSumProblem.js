// Input: 
const nums = [2, 7, 11, 15], target = 9  
// Output: [0, 1]  
// Explanation: nums[0] + nums[1] == 2 + 7 == 9
console.log(TwoSum(nums,target));

function TwoSum(nums, target){
  const map = new Map();
  for(let i=0;i<nums.length;i++){
      const diff = target - nums[i];
      if(map.has(diff)){
          return [diff, nums[i]];
      }
      else{
          map.set(nums[i],i);
      }
      
  }
  return [-1,-1];
}

function TwoSum(nums, target){
    const res = []
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length;j++){
            if(nums[i]+nums[j]== target){
                res[0] = nums[i];
                res[1] = nums[j];
            }
            
        }
        return res;
    }
}
