function createCounter() {
  let count = 0; // private variable
function increment() { // private function
    count++;         }
return {
        increase: () => {
        increment();
        console.log(count);
        }
    };
}

const counter = createCounter();
counter.increase(); // 1
console.log(counter.count); // undefined ❌
//count and increment() are private—only accessible inside createCounter.
