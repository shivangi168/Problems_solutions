 const digits = [1,2,3];
 const b = [9];
 console.log(plusOne(b));
 


function plusOne(nums){
    const n = nums.length;
    for(let i=n-1;i>=0;i--){
        if(nums[i]<9){
            nums[i]++;
            return nums;
        }
        nums[i] = 0;
    }
     nums.unshift(1);
     return nums;

  
}
