
function invertObject(obj){
    const inverted = {};
    for(let key in obj){
        inverted[obj[key]]=key;
    }
    return inverted;
    
}
const obj = { a: 1, b: 2 };
console.log(invertObject(obj)); // { '1': 'a', '2': 'b' }