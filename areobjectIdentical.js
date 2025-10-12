
const a = { x: 1, y: 2 };
const b = { x: 1, y: 2 };
const c = { y: 2, x: 1 };

console.log(areobjectIdentical(a,b));
console.log(areobjectIdentical(b,c));


function areobjectIdentical(obj1,obj2){
    keys1 = Object.keys(obj1);
    keys2 = Object.keys(obj2);
    
    if(keys1.length != keys2.length) return false;
    
    for(let i=0;i<keys1.length;i++){
        if(keys1[i] != keys2[i]){
        return false;
    }
    
    let val1 = obj1[keys1[i]];
    let val2 = obj2[keys2[i]];
    
    if(val1 != val1) return false;
    return true;
    
}
}