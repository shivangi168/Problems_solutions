const arr = [
  { a: 1, b: 10 },
  { a: 2, b: 20 },
  { a: 3, b: 30 },
  { a: 4, b: 40 },
];

const lookupList = [
  { key: 'a', value: 3 },
  { key: 'b', value: 40 },
  { key: 'a', value: 5 }, 
];

const result = lookupList.map(({ key, value }) => {
  const index = arr.findIndex(item => item[key] === value);
  return { key, value, index };
});

console.log(result);
