const fast = new Promise(resolve => setTimeout(() => resolve('🏁 Fast wins'), 500));
const slow = new Promise(resolve => setTimeout(() => resolve('🐢 Slow finishes'), 1000));

Promise.race([fast, slow])
  .then(result => console.log('Race result:', result));//Race result: 🏁 Fast wins
