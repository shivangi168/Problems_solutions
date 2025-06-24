const nums1 = [1,3,5,6], target1 = 5;
// Output: 2
const nums2 = [1,3,5,6], target2 = 2;
// Output: 1

const nums3 = [1,3,5,6], target3 = 7;
// Output: 4
 
 console.log(SearchInsertPostion(nums1,target1));
 console.log(SearchInsertPostion(nums2,target2));
 console.log(SearchInsertPostion(nums3,target3));
 
 function SearchInsertPostion(nums,target){
     let lo = 0;
     let hi = nums.length-1;
     let ans = null;
     
      while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return lo;
    
 }