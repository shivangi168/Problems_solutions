// check if array issorted
const arr = [3,5,7,9];
const arr2 = [8,0,4,9,45];
console.log("is Arrays orted",isSorted(arr));
console.log(isSorted(arr2));
function isSorted(nums){
    for(let i=1;i<nums.length;i++){
        if(nums[i] < nums[i-1] )
        return false;
    }
    return true;
    
}