//create proto:
const baseUser = { greet() { return "Hello!"; } };
const newUser = Object.create(baseUser);
console.log(newUser.greet()); // "Hello!"

//get prototype
console.log(Object.getPrototypeOf(newUser)); //{ greet: [Function: greet] }