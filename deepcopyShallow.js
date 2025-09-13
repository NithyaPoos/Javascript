//deep copy -variables shares different memory location
let arr1=[1,2,3,4,5];
let arr2=[];

console.log(arr1);//[ 1, 2, 3, 4, 5 ]
console.log(arr2);//[]  

arr1.forEach((element)=>arr2.push(element));
console.log(arr1);//[ 1, 2, 3, 4, 5 ]
console.log(arr2);//[ 1, 2, 3, 4, 5 ]

arr2[0]=99;
console.log(arr1);//[ 1, 2, 3, 4, 5 ]
console.log(arr2);//[ 99, 2, 3, 4, 5 ]

arr1[0]=11;
console.log(arr1);  //[ 11, 2, 3, 4, 5 ]
console.log(arr2);  //[ 99, 2, 3, 4, 5 ]

//DeepCopy Structured Clone
let arr3=[1,2,[11,22]];
let arr4=structuredClone(arr3);
console.log(arr3);//[ 1, 2, [ 11, 22 ] ]
console.log(arr4);//[ 1, 2, [ 11, 22 ] ]

//Deepcopy JSON.parse(JSON.stringify())
let arr5=[1,2,[11,22]];
let arr6=JSON.parse(JSON.stringify(arr5));
console.log(arr5);//[ 1, 2, [ 11, 22 ] ]
console.log(arr6);//[ 1, 2, [ 11, 22 ] ]    

// //Deepcopy lodash library
// //let _=require("lodash");
// let _=import("lodash"); //ES6 module
// let arr7=[1,2,[11,22]];
// let arr8=_.cloneDeep(arr7);
// console.log(arr7);//[ 1, 2, [ 11, 22 ] ]
// console.log(arr8);//[ 1, 2, [ 11, 22 ] ]        