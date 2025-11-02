const arr = [1, 1, 0, 1, 1, 1,0,1,1,1,1,1];
console.log(maxConsecutiveOnes(arr)); 

function maxConsecutiveOnes(arr){
    let count =0;
    let maxCount =0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == 1){
            count++;
        }else{
            count =0;
        }
        maxCount = Math.max(count,maxCount)
    }
    return maxCount;
}