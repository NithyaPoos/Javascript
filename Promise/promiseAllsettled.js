const p1 = Promise.resolve('✅ Task 1');
const p2 = Promise.reject('❌ Task 2 failed');
const p3 = new Promise(resolve => setTimeout(() => resolve('✅ Task 3'), 500));

Promise.allSettled([p1, p2, p3])
  .then(results => console.log('Settled:', results));
 /*Settled: [
  { status: 'fulfilled', value: '✅ Task 1' },
  { status: 'rejected', reason: '❌ Task 2 failed' },
  { status: 'fulfilled', value: '✅ Task 3' }
]
*/