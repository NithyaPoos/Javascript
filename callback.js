/*
JavaScript is asynchronous—
it doesn’t wait for one task to finish before starting the next.
*/
//a function can be passed as an argument to another function is called callback func
let array1=[23,45,67,78,"arr","faa"];

function f1(a){
    return a>4;
}

const f2=(a)=>{return a;};

// const res1=array1.map(f1);  //[ true, true, true, true, false, false ]
// console.log(res1);
// const res2=array1.filter(f1);
// console.log(res2);          //[ 23, 45, 67, 78 ]
// const res3=array1.find(f1);
// console.log(res3);          //23

// const res1=array1.map(f2);    //[ 23, 45, 67, 78, 'arr', 'faa' ]
// console.log(res1);
// const res2=array1.filter(f2); //[ 23, 45, 67, 78, 'arr', 'faa' ]
// console.log(res2);          
// const res3=array1.find(f2);   //23
// console.log(res3); 

// const res4=array1.forEach((a,i,arr)=>{console.log(a,i,arr);}); //returns undefined
// console.log(res4);     

// array1.forEach((a)=>{console.log(a);});
// //array
// let results=["pass","fail","skip",200,201,400,404,500];
// //forEach-print
// results.forEach((status)=>{console.log(status);});
// //map() of array
// const mapArray=results.map((status)=>{return status>199;});
// console.log(mapArray);

//let results=["pass","fail","skip",200,201,400,404,500];
//filter() of array
// const filterArray=results.filter((status)=> {return status>199;});
// console.log("find all the matching elements of an aray  ::"+filterArray);    //[ 200, 201, 400, 404, 500 ]
// //find() of array
// const findSingleElement=results.find((status)=>{return status>199;});
// console.log("find single first matching element of array :: "+findSingleElement);

let results=["pass","fail","skip",200,201,400,404,500];

const status1 =  (statusCode) => { return statusCode>199; }

const mapArray=results.map((status1));
console.log("printing map array elements                 ::"+mapArray);
const filterArray=results.filter(status1);
console.log("find all the matching elements of an aray   ::"+filterArray);    //[ 200, 201, 400, 404, 500 ]
const findSingleElement=results.find(status1);
console.log("find single first matching element of array :: "+findSingleElement);
