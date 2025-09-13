//read after converting JSON into JS object
let text='{"employees":['+
'{"firstName":"John","lastName":"doe"},'+
'{"firstName":"Anna","lastName":"Smith"},'+
'{"firstName":"Peter","lastName":"Jon"}  ]}';

let obj1=JSON.parse(text);
console.log(obj1.employees[1].firstName); //Anna
console.log(obj1.employees[2].lastName); //Jon