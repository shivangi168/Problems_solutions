const s = "(()())(())";
const s1 = "(()())(())(()(()))"
// Output: "()()()()(())"
console.log(removeOuterParenthesis(s));
function removeOuterParenthesis(str){
    const n = str.length;
    let res = "";
    let count =0;
   for(let i =0;i<n;i++){
       let ch = str.charAt(i);
       if(ch === '('){
           if(count >0){
               res += ch;
           }
           count++;
       }
       else{
           count--;
           if(count > 0){
               res += ch;
           }
       }
   }
    return res;
}