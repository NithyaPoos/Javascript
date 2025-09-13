const users = [
  { name: "Alice", role: "QA" },
  { name: "Bob", role: "Dev" },
  { name: "Nithya", role: "QA" }
];

const grouped = Object.groupBy(users, user => user.role);
console.log(grouped);
// { QA: [{name: "Alice"}, {name: "Nithya"}], Dev: [{name: "Bob"}] }
