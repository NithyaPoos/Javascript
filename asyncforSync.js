function syncFunc() {
  console.log("Inside syncFunc");
}

async function wrapper() {
  console.log("Start");
  await syncFunc(); // sync function, but still yields
  //syncFunc();
  console.log("End");
}

console.log("Before");
wrapper();
console.log("After");
/*
Before
Start
Inside syncFunc
After
End
*/
