
const a = [3,6,1];
const b = [9,5,2];

const nums = [3,6,2,5,6,1]
const n = 5;


a.sort((x, y) => x - y); // [1, 3, 6]
b.sort((x, y) => x - y); // [2, 5, 9]


console.log(mergeTwoSortedArrays(a,b));
console.log(mergeArrays(nums,0,5));

function mergeArrays(nums,lo,hi){
    
    if(lo == hi){
        const temp = [];
        temp[0] = nums[lo];
        return temp;
    }
   const mid = Math.floor((lo + hi) / 2);   
    const A = mergeArrays(nums,lo,mid);
    const B = mergeArrays(nums,mid+1,hi);
    const res = mergeTwoSortedArrays(A,B);
    
    return res;
}


function mergeTwoSortedArrays(num1,num2){
    let i = 0, j = 0, k = 0;
    const n = num1.length;
    const m = num2.length;
   
    const res = [];
     while (i < n && j < m) {
        if (num1[i] <= num2[j]) {
            res.push(num1[i]);
            i++;
        } else {
            res.push(num2[j]);
            j++;
        }
    }
     while (i < n) {
        res.push(num1[i]);
        i++;
    }

    while (j < m) {
        res.push(num2[j]);
        j++;
    }

    return res;
}