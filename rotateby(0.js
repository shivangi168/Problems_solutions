const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
console.log(rotate90Degree(matrix).join(" "));

function rotate90Degree(nums){
    const n = nums.length;
    const m = nums[0].length;
    const res = [];
    
    for(let col = m-1;col >=0;col--){
        const newArr = [];
        for(let row =0;row <n;row++){
            newArr.push(nums[row][col])
        }
        res.push(newArr);
    }
    return res;
}