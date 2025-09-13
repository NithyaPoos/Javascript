let arr=[1,2,[11,22]];//2-Dimensional array
console.log(arr[2][0]);//1

let arr2=[...arr];
console.log(arr);//[ 1, 2, [ 11, 22 ] ]
console.log(arr2);//[ 1, 2, [ 11, 22 ] ]

arr2[2][0]=99;
console.log(arr);//[ 1, 2, [ 99, 22 ] ] //shallow copy
console.log(arr2);//[ 1, 2, [ 99, 22 ] ]    

arr2[1]=20;
console.log(arr);//[ 1, 2, [ 99, 22 ] ]
console.log(arr2);//[ 1, 20, [ 99, 22 ] ]

arr2.push(3);
console.log(arr);//[ 1, 2, [ 99, 22 ] ]
console.log(arr2);//[ 1, 20, [ 99, 22 ], 3 ]