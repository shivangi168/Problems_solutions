const nums = [3, 5, 4, 1, 1];
const nums2 = [1, 2, 3, 6, 7, 5, 7];

console.log(findMissingandDuplicate(nums2));

function findMissingandDuplicate(nums){
    
    nums.sort((a,b) => a-b);
    const n = nums.length;
    let duplicate = null;
    let sum =0;
    let Expected = 0;
    let res = [];
    
    Expected = (n*(n+1))/2;
    for(let i=1;i<n;i++){
        if(nums[i] == nums[i-1]){
            duplicate = nums[i];
        }
        sum += nums[i];
    }
    sum = sum+nums[0];
    let temres = null;
    tempres = sum- duplicate;
    res[0] = duplicate;
    res[1] = Expected - tempres;
    return res;
}