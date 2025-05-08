function getUniqueObjects(arr) {
    const uniqueNames = new Set(); 
    return arr.filter(obj => {
        if (!uniqueNames.has(obj.name)) {
            uniqueNames.add(obj.name); 
            return true;
        }
        return false;
    });
}

// Example usage:
const inputArray = [
    { name: "sai" },
    { name: "Nang" },
    { name: "sai" },
    { name: "Nang" },
    { name: "111111" }
];

const outputArray = getUniqueObjects(inputArray);
console.log(outputArray);
