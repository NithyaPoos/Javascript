//at() for both positive and negative index access and [] for only posiitve index access
/*
Bracket notation ([]) is the traditional way to access elements in an array using
 their index. It works well for positive indexes starting from zero, 
 but it doesn’t support negative indexes.

 The .at() method, introduced in ES2022, is a more modern and expressive way 
 to access array elements. It works just like bracket notation for positive indexes,
  but it also supports negative indexes, which count from the end of the array. 
  So array.at(-1) gives you the last item, array.at(-2) gives the second-to-last, 
  and so on.
  “If I have an array of test results like ['Pass', 'Fail', 'Pass'], 
  and I want the last result, I could use results[results.length - 1],
   which works but looks a bit messy. With .at(-1), 
  I can just write results.at(-1)
*/
const cols=[1,2,"blue",'green',"red"];
console.log(cols.length);                              5
console.log(cols[cols.length-1]); //last                 red                   
console.log(cols.at(-1)); //last                         red
console.log(cols[cols.length-2]);//second from last      green
console.log(cols.at(-2)); //second from last             green         
console.log(cols.at(1));  //first                          2
console.log(cols[1]);     //first  allow only positive     2
cols[1]="white";
console.log(cols);
//insert element in the middle using .splice -way to remove elements from the middle.
cols.splice(3,0,"black","purple");
console.log(cols);
cols.splice(3,2);
console.log(cols);
//If you want to keep the original array untouched: use filter()
 //filter-select matching items
 const tools = ["Selenium", "Appium", "Postman", "Cypress","Apple"];
 const tf=tools.filter(t=>t.includes("App"));//[ 'Appium', 'Apple' ]
 console.log(tf);   
 //find() – Get First Match
const tool = ["Selenium", "Appium", "Postman", "Cypress","Apple"];
const tff=tool.find(t=>t==="Appium");   // app means undefined
console.log(tff);
//reduce() – Aggregate Values
const m=[10,20,30,40];
const total=m.reduce((acc,val)=>acc+val,0);
console.log(total);
//map() – Transform Each Item
const fom=m.map((a,i)=>`value ${i+1} is ${a}`); //[ 'value 1 is 10', 'value 2 is 20', 'value 3 is 30', 'value 4 is 40' ]
console.log(fom);
//5.forEach() – Loop Through Items
const fe=m.forEach((item,index)=>{ console.log(`item ${index} is ${item}`);});
/*item 0 is 10
item 1 is 20
item 2 is 30
item 3 is 40 */
//slice() – Copy a Portion  whereas splice() – Insert or Remove In-Place
//slice()-Returns a shallow copy of part of the array.
const too = ["Selenium", "Appium", "Postman", "Cypress"];
const to=too.slice(1,3); //[ 'Appium', 'Postman' ]
console.log(to);
//splice() – Insert or Remove In-Place-modifies the original array
too.splice(1,1,"REstAssured");
console.log(too);
//includes() – Check for Existence -Returns true if the array contains a value.
console.log(too.includes("Appium"));
console.log(too.includes("Cypress"));
// Creating an Empty Array
let a = [];
console.log(a); 

// Creating an Array and Initializing with Values
let b = [10, 20, 30];
console.log(b);

//Create using new Keyword (Constructor)
// Creating and Initializing an array with values
let a1 = new Array(10, 20, 30);

console.log(a1);

// Creating an Array and Initializing with Values
a = ["HTML", "CSS", "JS"];

// Accessing Array Elements
console.log(a[0]);
console.log(a[1]);
// Accessing Last Array Elements
let lst = a[a.length - 1];

console.log("First Item: ", lst);
a[1]= "Bootstrap";
console.log(a);

// Creating an Array and Initializing with Values
 a = ["HTML", "CSS", "JS"];

// Add Element to the end of Array
a.push("Node.js");

// Add Element to the beginning
a.unshift("Web Development");

console.log(a);
// Removes and returns the last element
let a11 = a.pop();
console.log("After Removing the last: " + a11 +"----------"+a);

// Removes and returns the first element
let fst = a.shift();
console.log("After Removing the First: " + fst+"----------"+a);

// Removes 2 elements starting from index 1
a.splice(1, 2);
console.log("After Removing 2 elements starting from index 1"+a+"----------"+a);
let len = a.length;

console.log("Array Length: " + len);
// Increase the array length to 7
a.length = 7;

console.log("After Increasing Length: ", a);

// Decrease the array length to 2
a.length = 2;
console.log("After Decreasing Length: ", a)

//Iterating Through Array Elements
//We can iterate array and access array elements using for loop and forEach loop.
// Creating an Array and Initializing with Values
let u = ["HTML", "CSS", "JS"];
for(let i=0;i<u.length;i++){
    console.log(u[i]);
}
 u = ["HTML", "CSS", "JS","ff"];
// Iterating through forEach loop-for arrays it prints only index 
for(let readme in u){
    console.log(readme);
}

for(let readme of u)
{
    console.log("using for of for arrays "+ readme);
}

u.forEach((readme,index)=>{console.log("index of  "+index+ "read values "+readme)});

//Array Concatenation-Combine two or more arrays using the concat() method. It returns new array containing joined arrays elements.
// Creating an Array and Initializing with Values
 a1 = ["HTML", "CSS", "JS", "React"];
let b1 = ["Node.js", "Expess.js"];

// Concatenate both arrays
let concateArray = a1.concat(b1);

console.log("Concatenated Array: ", concateArray);//[ 'HTML', 'CSS', 'JS', 'React', 'Node.js', 'Expess.js' ]
// Convert array ot String
console.log(a1.toString());//HTML,CSS,JS,React

const courses = ["HTML", "CSS", "Javascript"];
console.log("Using Array.isArray() method: ", Array.isArray(courses))
console.log("Using instanceof method: ", courses instanceof Array)

// Example 1
a1 = [5]                   //[ 5 ]
console.log(a1)

// Example 2
const a2 = new Array(5)    //[ <5 empty items> ]
console.log(a2);
//concat
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);


//const myChildren = arr1.concat("Peter"); 
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr);  //[ 1, 2, 3, 4, 5, 6 ]

//slice-creates a new array by slice out a part of an array
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(3); //[ 'Apple', 'Mango' ]
console.log(citrus);
//splice-existing array modified
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.splice(2, 2, "Lemon", "Kiwi");
console.log(fruits1);//[ 'Banana', 'Orange', 'Lemon', 'Kiwi' ]
let fruits11 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits11.includes("apple")); //false
console.log(fruits11.includes("Apple")); //true
console.log(fruits11.includes("Apple",2)); //true
console.log(fruits11.includes("Apple",3)); //false


const newArr1=fruits11.join("/");
console.log(newArr1); //Banana/Orange/Apple/Mango