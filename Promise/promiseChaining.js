new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
.then(result => {
  console.log('Step 1:', result);            // Step 1: 1
  return new Promise(resolve => {
    setTimeout(() => resolve(result * 2), 1000);
  });
})
.then(result => {
  console.log('Step 2:', result);            // Step 2: 2
  return new Promise(resolve => {
    setTimeout(() => resolve(result * 2), 1000);
  });
})
.then(result => {
  console.log('Step 3:', result);            // Step 3: 4
});
// Step 1: 1
// Step 2: 2
// Step 3: 4