// const arr = [5, 2, 9, 1, 5, 6];
// a
const nums2 =   [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const nums = [1, 2, 2, 3, 4];

console.log(largentConsecutive(nums));

function largentConsecutive(nums){
    if(nums.length == 0) return;
    nums.sort((a,b) => a-b);
    let count =1;
    let maxCount =1;

    for(let i=1;i<nums.length;i++){
         if (nums[i] === nums[i - 1]) {
            continue;
        }
             if(nums[i] - nums[i-1] == 1 ){
            count++;
            
             }
          else{
            count =1;
        }
                maxCount = Math.max(maxCount, count);

            
        }
        return maxCount;
}

