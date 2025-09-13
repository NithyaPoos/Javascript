//Promise.allSettled() is used to wait for all promises to settle (either fulfilled or rejected) and provides an array of their results.
//This is useful when you want to know the outcome of all promises without short-circuiting on the first rejection, unlike Promise.all(). 
function riskyTask(name, delay, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(`${name} ❌ failed`);
      else resolve(`${name} ✅ done`);
    }, delay);
  });
}

Promise.allSettled([
 riskyTask('Risky Task1', 1200, true),
riskyTask('Safe Task', 1000, false),
  riskyTask('Risky Task', 1500, true)
])
.then(results => console.log('All succeeded:', results))
.then(result => console.log('All succeeded:', result))
.catch(err => console.error('Failure:', err));