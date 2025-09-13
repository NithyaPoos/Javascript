const personObject={firstName:"John",age:30,gender:"Male"};
//convert this object to json string
const personString=JSON.stringify(personObject);

console.log(personString);//{"firstName":"John","age":30,"gender":"Male"} key"""

//convert json string to object
const personObj=JSON.parse(personString);
console.log(personObj);//{ firstName: 'John', age: 30, gender: 'Male' }  key no quotes
console.log(personObj.firstName);//John


console.log(typeof personObject);//object
console.log(typeof personString);//string

//Data Transmission
//When you send data to a server (e.g., via fetch() or axios), it must be in string format—specifically JSON.