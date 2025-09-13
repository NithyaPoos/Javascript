console.log(null === undefined);    //false -checks content-checks both value and type
console.log(null ==undefined);      //true checks datatype

console.log(NaN === NaN);           //false
console.log(NaN == NaN);            //false
let w=10;
console.log(w++); //10
console.log(w++); //11
console.log(++w); //13
console.log(w++);//13
console.log(++w);//15
console.log([1, 2] == [1, 2]);//false JavaScript compares arrays by reference, not by value.
//arithemetic
const sum = 5 + 3; // Addition
const diff = 10 - 2; // Subtraction
const p = 4 * 2; // Multiplication
const q = 8 / 2; // Division
console.log(sum, diff, p, q);

//Assignment operators are used to assign values to variables
let n = 10;
n += 5;
n *= 2;
console.log(n);  //30

//Comparison operators compare two values and return a boolean 
console.log(10 > 5);  //true
console.log(10 === "10"); //false === checks for strict equality (both type and value).
console.log(10 == "10");   //true
//Logical Operators
const a = true, b = false;
console.log(a && b); // Logical AND false
console.log(a || b); // Logical OR  true
console.log(!a); //false
//Bitwise Operators-perform operations on binary representations of numbers.
const res = 5 & 1; // Bitwise AND
console.log(res);     //1
console.log( 5 | 1);  //5
console.log(5 ^ 1);   // 4
console.log(5 >> 1);    //2
console.log(5 << 1);     //10
console.log(~5);          //-6 
console.log(5 >>> 1);    //2


