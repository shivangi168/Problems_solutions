const nums1 =[3, 4, 4, 7, 8, 10], x= 5;
// Output: 4 7
const nums2 =[3, 4, 4, 7, 8, 10], y= 8;
// Output: 8 8
 console.log(findFloorAndCeil(nums1,x));
 console.log(findFloorAndCeil(nums2,y));

 function findFloorAndCeil(nums,target){
     let lo = 0;
     let hi = nums.length-1;
     let floor = -1;
     let ceil = -1;
     
     
      while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);

        if (nums[mid] === target) {
            return [nums[mid] , nums[mid]]
        } else if (nums[mid] < target) {
            floor = nums[mid];
            lo = mid + 1;
        } else {
            ceil = nums[mid];
            hi = mid - 1;
        }
    }

    return [floor,ceil];
    
 }