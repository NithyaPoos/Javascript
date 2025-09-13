// Resolved Promise
const resolvedPromise = new Promise((resolve, reject) => {
  resolve('✅ Promise resolved!');
});

// Rejected Promise
const rejectedPromise = new Promise((resolve, reject) => {
  reject('❌ Promise rejected!');
});
// resolvedPromise.then(msg => console.log(msg)); // ✅ Promise resolved!
// rejectedPromise.catch(err => console.error(err)); // ❌ Promise rejected!
resolvedPromise
  .then(result => console.log(result))       // ✅ Promise resolved!
  .catch(error => console.error(error));

rejectedPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));     // ❌ Promise rejected!
