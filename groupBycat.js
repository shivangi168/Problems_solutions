const items = [
    { name: "Apple", category: "Fruit" },
    { name: "Carrot", category: "Vegetable" },
    { name: "Banana", category: "Fruit" },
    { name: "Broccoli", category: "Vegetable" },
    { name: "Chicken", category: "Meat" }
  ];
  function groupByCategory(arr) {
    return arr.reduce((grouped, item) => {
      const category = item.category;
      if (!grouped[category]) {
        grouped[category] = [];
      }
      grouped[category].push(item);
      return grouped;
    }, {});
  }
  const groupedItems = groupByCategory(items);
  console.log(groupedItems);
  