let ab = "mmmm";

console.log("answer" , findChars(ab));

function findChars(str){
    const length = str.length;
    let count =0;
    for(let i=0;i<length;i++){
        count++;
    }
    return count;
}s