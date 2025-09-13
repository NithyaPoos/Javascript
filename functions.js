//ternary operator
let v1=10,v2=23;

v1>v2?console.log("v1 is greater than v1",v1):console.log("v2 is greater than v1",v2);
//function declaration
function add(a,b){
    return a+b;
}
console.log("add of two numbers :: ",add(10,12));

//fucntion expression
const f1=function mul(a,b,c){
 return a*b*c;
}
console.log("mul of two numbers ::",f1(1,2,3));

//arrow fucntion
const f2=(a,b,c)=>{
console.log("---------------biggest number------------------");
if(a>b && a>c){console.log("a is greater than b and c ");}
    else if(b>c ){console.log("b is greater than a and c ");}
        else {console.log("c is greater than a and b ");}
console.log("---------------biggest number------------------");
}
f2(212,134,123);


//Perfect for iterating through test scenarios or validating UI flows.
const testCases = [
  "Login with valid credentials",
  "Login with invalid password",
  "Forgot password flow"
];

testCases.forEach((test, index) => {
  console.log(`Running Test ${index + 1}: ${test}`);
});



//backtick `` for dynamic data ${}-param passing means it must be defined in () before using
const grt=(na)=>{const n=`my name is ${na}`;
               return n;
            }
 console.log(grt("Name"));

 //ternary operator 
 let status1=200;
 const result=status1>100?console.log("status is ::",status1):console.log("status is 0");

//1. Arrow Function without Parameters
const gfg = () => {
    console.log( "Hello from JS!" );
}
gfg();

//2. Arrow Function with Single Parameters
const square = x => x*x;
console.log(square(5));

//3. Arrow Function with Multiple Parameters
const gg = ( x, y, z ) => {
    console.log( x + y + z )
}
gg( 10, 20, 30 );

//4. Arrow Function with Default Parameters
const fg = ( x, y, z = 30 ) => {
    console.log( x + " " + y + " " + z);
}
//fg();        undefined undefined 30
//fg( 10 );     10 undefined 30
fg(10,20);      //10 20 30
fg(13,23,12);    //13 23 12


//5. Return Object Literals () => ({ key: value }) returns an object { key: value },
const kv=()=>({name1:"Nila",gender:"female"});
const kv1=(name1,gender)=>({nam:name1,gend:gender});
console.log(kv());                        //{ name1: 'Nila', gender: 'female' }
console.log(kv1("Nilaav","female"));      //{ nam: 'Nilaav', gend: 'female' }

//Async Arrow Functions
const fetchData = async () => {
    const data = await fetch('https://api.example.com/data');
    return data.json();
};
//function
function func(a, b) {
    let sum = a + b;
    return sum;
}
console.log(func(1, 2));
//methods
let employee = {
    empname: "Rahul",
    department: "sales",
    details: function () {
        return this.empname +
            " works with Department " +
            this.department;
    }
};
console.log(employee.details());

const t1=(a,b)=> a+b;
console.log(t1(1,2)); //3



let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const g=function f1(ap){
    console.log(ap);
}

fruits1.forEach(g);

fruits1.forEach((g,i)=>console.log(g,i));
fruits1.forEach((g,i)=>console.log(g,i));



function func1(ae){
    return ae.forEach((a)=>{
        console.log(a);
       
                    } 
               )
               //return true;
                }
let gr=[10,20,30,40,50];
let g1=func1(gr);
console.log(g1);     

gr.forEach(y=>console.log("---------------------",y));
//gr.forEach(y=>{return y;});