fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json()) // returns a Promise
  //.then(data => console.log(data))  // logs actual JSON data
 .then(data => console.log(data[3])); 
//.then(response => console.log(response.json()));//Promise { <pending> }
// .then(response => {const data=response.json();
//                             console.log(data)
//                          });//Promise { <pending> }