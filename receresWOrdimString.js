// const s = "the sky is blue";
const s = "  hello   world  ";
// Output: "blue is sky the"
 console.log(reverseWordsInStr(s));

function reverseWordsInStr(str){
    let nums = str.split(" ");
    const res = [];
    const n = nums.length;
    console.log(nums);
    for(let i=n-1;i>=0;i--){
        if(nums[i] != ""){
            res.push(nums[i]);
        }
    }
    
    
    return res.join(" ");
}