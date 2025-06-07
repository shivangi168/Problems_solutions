
const arr = [1,2,3,4,5];
console.log("arr", rotateByOne(arr));
function rotateByOne(arr){
    if(arr.length == 1) return arr[0];
    const temp =arr[0];
    for(let i=0;i<arr.length -1;i++){
        arr[i]= arr[i+1];
    }
    arr[arr.length-1] = temp;
    return arr;
    
}