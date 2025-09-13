//Array + Object Combo
const users = [
  { name: "Nithya", role: "QA" },
  { name: "Raj", role: "Dev" }
];
users.forEach(user => {
  console.log(`${user.name} is a ${user.role}`);
});

//And for an object:
const config = { env: "prod", version: "1.2.3" };

Object.entries(config).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

const user = { name: "Nithya", role: "QA Engineer" };

Object.entries(config).forEach(
    ([k,v]) => { 
        console.log(`name is ${k}     ::   key is ${v}`);
           } );

let a = ["HTML", "CSS", "JS"];
// Iterating through forEach loop
a.forEach(function myfunc(x) {
    console.log(x);
});
