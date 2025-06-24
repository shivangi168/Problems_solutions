const nums1= [1,2,2,3], x1 = 2;
// Output:1
const nums2= [3,5,8,15,19], x2 = 9;
// Output: 3
console.log(findLowerBound(nums1,x1));
console.log(findLowerBound(nums2,x2));
function findLowerBound(nums , target){
    const n = nums.length;
    let lo = 0;
    let hi = n-1;
    let ans = -1;
    while(lo<=hi){
        let mid = lo + Math.floor((hi - lo) / 2);
        
        if(nums[mid] >= target){
            ans = mid;
            hi = mid-1;
        }
        else{
             lo = mid +1;
            
        }
           
        }
        
    
    return ans;
    
    
}