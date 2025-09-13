//hoisting-we can sometimes use variables or call functions 
// before they’re actually declared in the code
//var-undefined (var is used before declared)
//let,const-dead zone(these two are used before declared)

console.log(a);//undefined   (here a is used before it is declared and assigned a value)
var a=10;
console.log(a);//a            (here var a is used after it is declared and assigned a value)

var b;
console.log(b);        // undefined 
b = 5;


//console.log(c); // ReferenceError  //Cannot access 'c' before initialization
let c = 10;
console.log(c);     //10

let c1;
console.log("let----"+c1); // undefined
c1 = 10;
console.log(c1);           //10


//console.log("const------------"+p1); // ReferenceError: Cannot access 'p1' before initialization
const p1 = 10;
console.log(p1);     //10

let p2;
console.log("----"+p2); // undefined
p2 = 10;
console.log(p2); 

//Function Hoisting-Function declarations are fully hoisted—
// so you can call them before their definition.

f1();     //func hoisiting works
function f1(){
    console.log("func hoisiting works");
}
f1();     //func hoisiting works

//Function Expressions Are Not Hoisted

//f2();   //ReferenceError: Cannot access 'f2' before initialization
const f2=function f1(){console.log("func exp is not hoisted");}
f2();     //func exp is not hoisted


function t1(){
console.log(mess);//undefined
 var mess="value1";//value1
console.log(mess);
}

function t11(){
console.log(mess);//undefined
const mess="value1";//value1
console.log(mess);
}
t11();
function t2(){
var mess;//undefined
console.log(mess);
mess="value1";
console.log(mess);
}//value1
