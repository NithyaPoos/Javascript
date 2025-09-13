//getPropertyNames
const user = { name: "Nithya", role: "QA" };
console.log(Object.getOwnPropertyNames(user)); // ["name", "role"]


//Object.defineProperty(obj, key, descriptor)
const person = {};
Object.defineProperty(person, "name", {
  value: "Nithya",
  writable: false
});
console.log(person.name); // "Nithya"
person.name = "Someone";  // ❌ No effect
