function sumSpecificFruit(fruits, fruitName) {
  return fruits
    .filter(fruit => fruit.name === fruitName)
    .reduce((sum, fruit) => sum + fruit.quantity, 0);
}

const fruitsA = [
  { name: "apple", quantity: 10 },
  { name: "banana", quantity: 5 },
  { name: "apple", quantity: 7 },
];

console.log(sumSpecificFruit(fruitsA, "apple")); 

function sumOfFruits(fruits) {
  return fruits.reduce((sum, fruit) => sum + (fruit.quantity || 0), 0);
}

const fruitsB = [
  { name: "apple", quantity: 10 },
  { name: "banana", quantity: 5 },
  { name: "mango", quantity: 8 },
];

console.log(sumOfFruits(fruitsB));

function sumOfFruits(fruits) {
  return fruits.reduce((sum, fruit) => sum + fruit, 0);
}

const fruits = [10, 5, 8, 12];
console.log(sumOfFruits(fruits)); 
