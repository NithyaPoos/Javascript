const ids = new Set();
ids.add(101);
ids.add(102);
ids.add(101); // Duplicate ignored

console.log(ids); // Set(2) {101, 102}
