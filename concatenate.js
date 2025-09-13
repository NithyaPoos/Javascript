const first = "Hello";
const second = "World";
const result = first + " " + second;
console.log(result); // "Hello World"

//Using += Operator (Append to existing string)
let message = "Hello";
message += " ";
message += "Nithya";
console.log(message); // "Hello Nithya"


//Using String.prototype.concat()
const str1 = "Welcome";
const str2 = str1.concat(" ", "Back");
console.log(str2); // "Welcome Back"

//Using Array.join()
const words = ["Automation", "Testing", "Rocks"];
const sentence = words.join(" ");
console.log(sentence); // "Automation Testing Rocks"

//6. Using .reduce() for dynamic arrays-Useful when building strings from dynamic data.
const parts = ["QA", "Automation", "Engineer"];
const title = parts.reduce((acc, curr) => acc + " " + curr);
console.log(title); // "QA Automation Engineer"

//Type Coercion
const resul = "Score: " + 100 + " points";
console.log(resul); // "Score: 100 points"


//. Using Template Literals (Backticks ``)
const name1 = "Nithya";
const greeting = `Hello, ${name1}!`;
console.log(greeting); // "Hello, Nithya!"

