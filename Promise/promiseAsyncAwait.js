const resolvedPromise = new Promise((resolve, reject) => {
  resolve('✅ Promise resolved!');
});



async function handlePromise() {
  try {
    const result = await resolvedPromise;
    console.log('Async result:', result);    // ✅ Promise resolved!
  } catch (error) {
    console.error('Async error:', error);
  }
}

handlePromise();


const rejectedPromise = new Promise((resolve, reject) => {
  reject('❌ Promise rejected!');
});
async function handleRejected() {
  try {
    const result = await rejectedPromise;
    console.log(result);
  } catch (error) {
    console.error('Caught error:', error);   // ❌ Promise rejected!
  }
}

handleRejected();
