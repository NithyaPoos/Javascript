let x=10;
let y=x;
console.log(x);  //10
console.log(y);  //10
y=20;
console.log(x);  //10
console.log(y);  //20
x=30;
console.log(x);  //30
console.log(y);  //20


let x1=[10,20];
let y1=x1;
console.log(x1);  //[ 10, 20 ]
console.log(y1);  //[ 10, 20 ]
y1[0]=100;
console.log(x1);  //[100,20]
console.log(y1);  //[100,20]
x1[0]=300;
console.log(x1);  //[300,20]
console.log(y1);  //[300,20]
y1.push(40)
console.log("push-----------",x1);  //[ 300, 20, 40 ]
console.log(y1); //[ 300, 20, 40 ]
x1.push(50)
console.log(x1);  //[ 300, 20, 40, 50 ]
console.log(y1);  //[ 300, 20, 40, 50 ]
y1=[30,40]
console.log(x1);  //[ 300, 20, 40, 50 ]
console.log("----",y1);  //[30,40]
x1=[320,420]
console.log(x1);  //[ 320, 420 ]
console.log("----",y1);  //[30,40]

//--------------------------
let x11=[10,20];
let y11=[...x11];

console.log(x11);  //[ 10, 20 ] 
console.log(y11);   //[ 10, 20 ]
//y11=[30,40]
y11[0]=100;
console.log(x11);  //[ 10, 20 ]
console.log(y11); //[100,20]