const getPropertyFrequency = (arr) => {
  return arr.reduce((acc, obj) => {
    for (let key in obj) {
      acc[key] = (acc[key] || 0) + 1;
    }
    return acc;
  }, {});
};

const data = [
  { name: "Alice", age: 25 },
  { name: "Bob", city: "Delhi" },
  { name: "Charlie", age: 30, city: "Mumbai" }
];

console.log(getPropertyFrequency(data));
