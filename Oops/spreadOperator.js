const base = { name: 'Nithya' };
const updated = { ...base, role: 'QA Engineer' };

console.log(updated); // { name: 'Nithya', role: 'QA Engineer' }

//spread=right side of the assignment whereas leftside of an assignment
const arr1=[10,20,40];
const arr2=[...arr1,30,50];
console.log(arr1);//[ 10, 20, 40 ]
console.log(arr2);//[ 10, 20, 40, 30, 50 ]