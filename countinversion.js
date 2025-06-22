const nums = [2, 3, 7, 1, 3, 5];
console.log(FindInversions(nums));

function FindInversions(nums){
    let count = 0;
    const n = nums.length;
    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(i < j && nums[i] > nums[j]){
                count++;
            }
        }
    }
    return count;
}