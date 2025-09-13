const Activities=["eat","sleep","exercise","tv","travelling","park"];
const[monday,tuesday,wednesday,...weekend]=Activities;
console.log(weekend);  //[ 'tv', 'travelling', 'park' ]
console.log(monday);   //eat
console.log(tuesday);  //sleep

function logAll(first, ...others) {
  console.log(first);   // First argument QA
  console.log(others);  // Array of remaining arguments [ 'Salesforce', 'Mainframe' ]
}

logAll('QA', 'Salesforce', 'Mainframe');
// Output: 'QA', ['Salesforce', 'Mainframe']


const user = { name: 'Nithya', role: 'QA', location: 'CA' };
const { name, ...details } = user;

console.log(details); // { role: 'QA', location: 'CA' }


//spread=right side of the assignment whereas leftside of an assignment
const arr1=[10,20,40];
const arr2=[...arr1,30,50];
console.log(arr1);//[ 10, 20, 40 ]
console.log(arr2);//[ 10, 20, 40, 30, 50 ]