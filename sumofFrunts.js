const fruitsArray = [
    { name: "apple", quantity: 5 },
    { name: "banana", quantity: 3 },
    { name: "orange", quantity: 7 },
    { name: "grapes", quantity: 2 }
  ];
  
  const totalFruits = sumOfFruits(fruitsArray);
  
  console.log(totalFruits);  // Output: 17
  
  function sumOfFruits(arr){
      return arr.reduce((a,b)=> a+b.quantity,0)
  }