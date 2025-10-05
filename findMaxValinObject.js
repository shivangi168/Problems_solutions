// 3. Write a function to find the maximum value from an object.
const obj = {
    a: 190,
    b: 60,
    c: 1110,
    d: 140
};

console.log("answer", getMaxValinobj(obj));

function getMaxValinobj(obj){
    let maxkey = null;
    let maxVal = -Infinity;
    for(let [key , value] of Object.entries(obj)){
        if(value > maxVal){
            maxVal= value;
            maxkey = key;
        }
    }
    return {maxkey , maxVal};
}