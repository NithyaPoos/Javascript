const fail1 = Promise.reject('❌ Fail 1');
const fail2 = Promise.reject('❌ Fail 2');
const success = new Promise(resolve => setTimeout(() => resolve('✅ Success!'), 700));

Promise.any([fail1, fail2, success])
  .then(result => console.log('First success:', result))//First success: ✅ Success!
  .catch(error => console.error('All failed:', error));
