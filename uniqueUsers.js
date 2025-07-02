const uniqueUsers = Array.from(
  new Map(users.map(user => [user.id, user])).values()
);

console.log(uniqueUsers);

function mergeByNestedUserId(data) {
  const map = new Map();

  for (const item of data) {
    const { id, user, score } = item;
    const key = user.id;

    if (!map.has(key)) {
      map.set(key, {
        userId: user.id,
        name: user.name,
        scores: [score]
      });
    } else {
      map.get(key).scores.push(score);
    }
  }

  return Array.from(map.values());
}
const merged = mergeByNestedUserId(data);
console.log(merged);




const data = [
  {
    id: 1,
    user: { id: 101, name: "Shivangi" },
    score: 80
  },
  {
    id: 2,
    user: { id: 102, name: "Riya" },
    score: 90
  },
  {
    id: 3,
    user: { id: 101, name: "Shivangi" },
    score: 85
  }
];
// OP-
// [
//   {
//     userId: 101,
//     name: "Shivangi",
//     scores: [80, 85]
//   },
//   {
//     userId: 102,
//     name: "Riya",
//     scores: [90]
//   }
// ]
