const users = [
  { name: "Alice", role: "QA" },
  { name: "Bob", role: "Dev" },
  { name: "Nithya", role: "QA" }
];
const grouped = users.reduce((acc, user) => {
acc[user.role]=acc[user.role] || [];
acc[user.role].push(user.name);
return acc;
},{});
console.log(grouped);//{ QA: [ 'Alice', 'Nithya' ], Dev: [ 'Bob' ] }
//acc-It will eventually hold the grouped result.
//user is each item in the users array

//reduce() is an array method. But you can convert an object into an array using
//  Object.entries(), Object.keys(), or Object.values().


//find highest salary :(acc with some default values to be given initially)
const salaries = {
  Alice: 70000,
  Bob: 85000,
  Nithya: 950000
};
//console.log(Object.entries(salaries));//conver object to an array fo k:v values
//[ [ 'Alice', 70000 ], [ 'Bob', 85000 ], [ 'Nithya', 950000 ] ]
const res=Object.entries(salaries).reduce((acc,[name,salary])=>
    {
    return salary > acc ? acc:{name,salary};
    } , {name:null,salary:0}  );
console.log(res);   //{ name: 'Nithya', salary: 950000 }
/*
acc is the accumulator—it holds the current highest salary and name.
[name, salary] is each entry from the array.
{ name: null, salary: 0 } is the starting point (initial value).

First iteration: name = "Alice", salary = 70000 Is 70000 > 0? ✅ Yes → return { name: "Alice", salary: 70000 }
Second iteration: name = "Bob", salary = 85000 Is 85000 > 70000? ✅ Yes → return { name: "Bob", salary: 85000 }
Third iteration: name = "Nithya", salary = 950000 Is 950000 > 85000? ✅ Yes → return { name: "Nithya", salary: 950000 }
  */  