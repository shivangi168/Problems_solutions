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
Promise.any([
  Promise.reject("Error 1"),
  Promise.resolve("Success 1"),
  Promise.resolve("Success 2"),
]).then((value) => {
  console.log(value); // "Success 1"
});
function getData(callback) {
  setTimeout(() => {
    callback("Got data!");
  }, 1000);
}

// Promisify
function getDataPromise() {
  return new Promise((resolve) => {
    getData((data) => resolve(data));
  });
}

getDataPromise().then((data) => console.log(data));
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Fetched!"), 1000);
  });
}

async function fetchIt() {
  try {
    const result = await getData();
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}

fetchIt();
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3),
]).then((values) => {
  console.log(values); // [1, 2, 3]
});
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Done after " + ms + "ms"), ms);
  });
}

delay(2000).then((message) => console.log(message));
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Fetched!"), 1000);
  });
}

async function fetchIt() {
  try {
    const result = await getData();
    console.log(result);
  } catch (e) {
    console.error(e);
  }
}

fetchIt();
new Promise((resolve, reject) => {
  reject("Something went wrong!");
})
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("Caught error:", err);
  });
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Data fetched!");
  } else {
    reject("Failed to fetch data.");
  }
});

myPromise
  .then((data) => console.log("✅", data))   // Runs if resolved
  .catch((err) => console.error("❌", err)) // Runs if rejected
  .finally(() => console.log("✅ Promise completed")); // Runs no matter what

