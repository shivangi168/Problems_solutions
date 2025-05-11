function BestTimeTosell(arr){
    const n = arr.length;
    let res =0;
    for(let i=0;i<n-1;i++){
        for(j=i+1;j<n;j++){
            res = Math.max(res, arr[j]-arr[i]);
        }
    }
    return res;
}
const nums = [7, 10, 1, 3, 6, 9, 2];
console.log(BestTimeTosell(nums));