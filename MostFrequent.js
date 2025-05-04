const arr = [1, 2, 2, 3, 4, 4,4, 5];
console.log(getMostFre(arr));

function getMostFre(arr){
    const n = arr.length;
    let count =0, maxCount = 0, res =-1;
    for(let i=0;i<n;i++){
        count =0;
        for(let j=0;j<n;j++){
            if(arr[i] == arr[j]){
                count++;
            }
        }
        if(count > maxCount){
            maxCount = count;
            res = arr[i];
        }
    }
    return res;
    
}