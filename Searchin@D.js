const target = 31;
const matrix = [
  [1,  3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
];
console.log(searchin2D(matrix,target));

function searchin2D(matrix,target){
    let isFound = false;
    const n = matrix.length;
    const m = matrix[0].length;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(matrix[i][j] == target){
                isFound = true;
            }
        }
}
return isFound;
}

// Optimised
function searchin2D(matrix,target){
    let isFound = false;
    const n = matrix.length;
    // const m = matrix[0].length;
    let i = 0;
    let j = matrix[0].length;
    
    while(i < n &&  j >= 0){
        if(matrix[i][j] == target){
            isFound = true;
            return isFound;
        }
        if(matrix[i][j] < target ){
            i++;
            
        }
        else{
            j--
            
        }
    }
    return isFound;
    
   

} 