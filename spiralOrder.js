const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

console.log(spiralOrder(matrix).join(", "));
function spiralOrder(nums){
    let top = 0 , bottom = nums.length-1;
    let left =0 , right = nums[0].length-1;
    const res = [];
    
      while (top <= bottom && left <= right) {
        for(let i=left;i<=right;i++){
        res.push(nums[top][i])
    }
    top++;
     for(let i=top;i<=bottom;i++){
        res.push(nums[i][right])
    }
    right--;
     for(let i=right;i>=left;i--){
        res.push(nums[bottom][i])
    }
    bottom--;
     for(let i=bottom;i>=top;i--){
        res.push(nums[i][left])
    }
    left++;
          
          
      }
      return res;

    
 
    
}