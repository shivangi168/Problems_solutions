const orders = {
  'order1': { phone: 30, tv: 50, fridge: 70 },
  'order2': { glass: 20, washingmachine: 50, fridge: 70 },
  'order3': { chips: 20, veg: 10, milk: 20 }
};

function getOrderList(order) {
  const combinedItems = {};

  Object.values(order).forEach(innerOrder => {
    for (let [item, quantity] of Object.entries(innerOrder)) {
      if (combinedItems[item]) {
        combinedItems[item] += quantity;
      } else {
        combinedItems[item] = quantity;
      }
    }
  });

  return combinedItems;
}

console.log(getOrderList(orders));
