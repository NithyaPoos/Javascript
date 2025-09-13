//1. Creation Using Object Literal
let ob = {
    name: "Sourav",
    age: 23,
    job: "Developer"
};
console.log(ob);
console.log(ob.job);
console.log(ob["job"]);

//2. Creation Using new Object() Constructor
let obj = new Object();
obj.name= "Sourav",
obj.age= 23,
obj.job= "Developer"

console.log(obj);
console.log(obj.age);
console.log(obj["age"]);
//access an object’s properties using either dot notation or bracket notation

//2. Modifying Object Properties
//Properties in an object can be modified by reassigning their values.
//let obj = { name: "Sourav", age: 22 };
console.log(obj);
console.log(obj.age);
obj.age = 25;
console.log(obj);
console.log(obj.age);

//Adding Properties to an Object
let car={model:"tesla",color:"white"}
car.price=234562;
console.log(car);   //{ model: 'tesla', color: 'white', price: 234562 }
//Removing Properties from an Object
delete car.color;
console.log(car); //{ model: 'tesla', price: 234562 }
//Checking if a Property Exists
let obj1 = { model: "Tesla" };
console.log("color" in obj1); //false
console.log(obj1.hasOwnProperty("model"));//true

let m={a:"yes",b:"No"}
console.log("a" in m);  //true
console.log(m.hasOwnProperty("b")); //true
let boo= "c" in m;
console.log(boo); //false

//6. Iterating Through Object Properties
let num={a:"yes",b:"No",c:"null"};
for(let key1 in num)
    {
    console.log(key1 + num[key1]);
}

//Merging Objects
//Objects can be merged using Object.assign() or the spread syntax { ...obj1, ...obj2 }.
let o1={name1:"demo1",age:67};
let o2={salary:232321};
let o3={...o1,...o2};  //{ name1: 'demo1', age: 67, salary: 232321 }
console.log(o3);
let o31={...o1,...o2,gender:"Female"};//{ name1: 'demo1', age: 67, salary: 232321, gender: 'Female' }
console.log(o31);
//Object Length -can find the number of properties in an object using Object.keys().
console.log(Object.keys(o31).length); //4
//array
let arr=[1,3,"3ee"] 
console.log(arr.length);  //3
console.log(typeof(o31)); //object
console.log(typeof(arr));  //object-array also object type
console.log(typeof(o31)=="object" && o31!=null);  //true

//object destructing:
const o11 = {
                name: "user1",
                age: 23,
                job: "Developer"
            };

const{name:name1,age:actualValue,job:job1}=o11;
const age=99;
console.log(name1,age,actualValue,job1);  //user1 99 23 Developer
//first rename prop : &  then update values of properties
const name="user2";
const job="BA";
console.log(name,name1,age,actualValue,job,job1); //user2 user1 99 23 BA Developer