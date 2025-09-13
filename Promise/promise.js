// Resolved Promise
const resolvedPromise = new Promise((resolve, reject) => {
  resolve('✅ Promise resolved!');
});

// Rejected Promise
const rejectedPromise = new Promise((resolve, reject) => {
  reject('❌ Promise rejected!');
});
resolvedPromise.then(msg => console.log(msg)); // ✅ Promise resolved!
rejectedPromise.catch(err => console.error(err)); // ❌ Promise rejected!