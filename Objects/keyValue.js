const user = { name: "Nithya", role: "QA" };
const all=Object.entries(user);
console.log(all);//[ [ 'name', 'Nithya' ], [ 'role', 'QA' ] ]
//Returns an array of [key, value] pairs.


//Creates an object from an array of [key, value] pairs.
const all1=[ [ 'name', 'Nithya' ], [ 'role', 'QA' ] ];
const res=Object.fromEntries(all1);
console.log(res);                //{ name: 'Nithya', role: 'QA' }