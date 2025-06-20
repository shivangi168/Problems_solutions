
const nums = [10, 5, 2, 7, 1, 9],  k=15;
// const nums2 = [-3, 2, 1], k=6
console.log(largestSubarrSum(nums,k));


function largestSubarrSum(nums, k) {
    let maxCount = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];

            if (sum === k) {
                const length = j - i + 1;
                maxCount = Math.max(maxCount, length);
            }
        }
    }

    return maxCount;
}



// function largestSubarrSum(nums,k){
//     const n = nums.length;
//     let maxCount =0;
//     let subarSum =0;
//     let res = 0;
    
//     for (let i = 0; i < nums.length; i++) {
//     let subarray = [];
//     for (let j = i; j < nums.length; j++) {
//         subarray.push(nums[j]);
//         subarSum = getSum(subarray);
//         if(subarSum === k){
//             console.log("in if", subarSum);
//             res = subarray.length;
//         }
        
//     }
//     maxCount = Math.max(maxCount, res);
//   }
//   return maxCount;
// }
// function getSum(nums){
//     let sum =0;
//     let i=0;
//     while(i< nums.length){
//         sum += nums[i];
//         i++;
//     }
//     return sum;
// }