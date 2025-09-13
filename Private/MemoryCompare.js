//primtive String
const s=10,s1=10;console.log(s===s1);  //true(same value,memorey reference same)
//array String
const a=[10,20],a1=[10,20];console.log(a===a1);//false(diff memory location,same value)
//copy
const a3 =[10,20];
const a2= a3;
console.log(a2 === a3); // ✅ true
a2.push(30);
console.log(a2 === a3); // ✅ true
a3.push(30);
console.log(a2 === a3); // ✅ true


//object-compared by reference liek arrays
const obj1 = { name: "Nithya" };
const obj2 = { name: "Nithya" };
const obj3=obj1;
console.log(obj1 === obj2); // ❌ false
console.log(obj3 === obj1); // true
obj3.type="v";
console.log(obj3,obj1,obj3 === obj1);//{ name: 'Nithya', type: 'v' } { name: 'Nithya', type: 'v' } true
//When comparing arrays or objects in test results, use:
//JSON.stringify(obj1) === JSON.stringify(obj2); // ✅ true if contents match
