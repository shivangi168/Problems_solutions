// Callback hell
// getData(function(a) {
//   getMoreData(a, function(b) {
//     getFinalData(b, function(c) {
//       console.log(c);
//     });
//   });
// });

const promise = new Promise((resolve, reject) => {
  // async operation
  if (true) {
    resolve(value);
  } else {
    reject(error);
  }
});

