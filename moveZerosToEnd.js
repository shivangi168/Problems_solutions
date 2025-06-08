const input = [0, 1, 0, 3, 12];
const result = moveZerosToEnd(input);
console.log(result); // [1, 3, 12, 0, 0]

function moveZerosToEnd(nums){
    let j =0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] != 0){
            nums[j] = nums[i];
            j++;
            
        }
    }
    while(j < nums.length){
        nums[j] = 0;
        j++;
    }
    return nums;
}