const p1 = Promise.resolve('✅ Task 1');
const p2 = new Promise(resolve => setTimeout(() => resolve('✅ Task 2'), 1000));
const p3 = Promise.resolve('✅ Task 3');

Promise.all([p1, p2, p3])
  .then(results => console.log('All done:', results))
  .catch(error => console.error('One failed:', error));
  //All done: [ '✅ Task 1', '✅ Task 2', '✅ Task 3' ]
    //if any one of the promise is rejected, the entire Promise.all() is rejected immediately.  