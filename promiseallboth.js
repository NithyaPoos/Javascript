// use of Promise.all() with both resolved and rejected promises-parallel execution
//if any one of the promise is rejected, the entire Promise.all() is rejected immediately.
//This is useful when you want all tasks to succeed, and a failure in any one should halt the entire operation. 
function riskyTask(name, delay, shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject(`${name} ❌ failed`);
      else resolve(`${name} ✅ done`);
    }, delay);
  });
}

Promise.all([
 riskyTask('Risky Task1', 1200, true),
riskyTask('Safe Task', 1000, false),
  riskyTask('Risky Task', 1500, true)
])
.then(results => console.log('All succeeded:', results))
.then(result => console.log('All succeeded:', result))
.catch(err => console.error('Failure:', err));
