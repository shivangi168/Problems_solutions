const numbers = [2, 7, 11, 15];
const target = 13;

const result = findTwoNumbers(numbers, target);

console.log(result);  // Output: [7, 2]

function findTwoNumbers(arr,target){
    const seen = new Set();
    for(let i=0;i<arr.length;i++){
        const complement = target-arr[i];
            if(seen.has(complement)){
                return [arr[i] , complement ];
            }
            seen.add(arr[i]);
    }
    return null;
}