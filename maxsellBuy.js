// maximum sub aaray

function maxSubarr(arr){
    const n = arr.length;
    let max = arr[0];
    let sum = arr[0];
    
    for(let i=1;i<n;i++){
        sum += arr[i];
        if( sum > max){
            max = sum;
        }
        if(sum <=0 ){
            sum =0;
        }
        
    }
    return max;
}
const nums = [2, 3, -8, 7, -1, 2, 3];
console.log(maxSubarr(nums))
