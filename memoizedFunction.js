function memoize(fn) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args); 

        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}


function Sum(a, b) {
    return a + b;
}

const memoizedSum = memoize(Sum);
console.log(memoizedSum(2, 3)); 
console.log(memoizedSum(2, 3)); 

module.exports = memoize;
