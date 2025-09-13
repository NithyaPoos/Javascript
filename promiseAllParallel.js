function task(message, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log(message);
      resolve(`${message} ✅`);
    }, delay);
  });
}

Promise.all([
  task('Task A started', 1000),
  task('Task B started', 2000),
  task('Task C started', 1500)
])
.then(results => {
  console.log('All tasks done:', results);
})
.catch(error => {
  console.error('One of the tasks failed:', error);
});
