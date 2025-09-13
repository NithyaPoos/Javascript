const a=10;
const b=10;
const r=11;
const c=Object.is(a,b);
console.log(c);  //true

const c1=Object.is(r,b);
console.log(c1);  //false

console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0));    // false
