let x;
var y;
const z=10;
console.log(typeof(x),typeof(y),typeof(z));
//console.log(x=10);
console.log(x=10 +"val");

let x1=[];
let y1={};
console.log(typeof(x1)); //object
console.log(typeof(y1)); //object

let h=Symbol();
console.log(h); //type=Symbol  value=Symbol()
let h1=Symbol(111);
console.log(h1,typeof(h1)); //type=Symbol  value=Symbol(111) symbol
let h3=Symbol("1");
console.log(h3,typeof(h3)); //type=Symbol  value=Symbol(1) symbol
