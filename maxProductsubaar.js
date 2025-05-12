function MaxProductSubarr(nums){
    const n = nums.length;
    let res = nums[0];
    
    for(let i=0;i<n;i++){
        let mul = 1;
        for(let j =i;j<n;j++){
            mul = mul*nums[j];
            res = Math.max(res,mul);
        }
    }
    return res;
    
}
const nums = [2,3,-2,4];
console.log(MaxProductSubarr(nums))