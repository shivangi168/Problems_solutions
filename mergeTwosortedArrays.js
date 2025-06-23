
const a = [3,6,1];
const b = [9,5,2];


a.sort((x, y) => x - y); // [1, 3, 6]
b.sort((x, y) => x - y); // [2, 5, 9]


console.log(mergeTwoSortedArrays(a,b));


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