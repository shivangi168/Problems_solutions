function mergeData(arr1, arr2) {
    const map = new Map();

  

    for (let item of arr1) {
        map.set(item.id, { ...item });
    }

    for (let item of arr2) {
        if (map.has(item.id)) {
            map.set(item.id, { ...map.get(item.id), ...item });
        }
        else {
             map.set(item.id, { ...item });
            
        }
       
      }
    return Array.from(map.values());
}

const array1 = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];

const array2 = [
    { id: 2, age: 30 },
    { id: 3, name: 'Charlie' }
];


//For the purpose of user debugging.
//pass your arrays in function call
mergeData(array1, array2);

module.exports = mergeData