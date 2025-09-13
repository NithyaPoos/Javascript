let arr=['a','b','b','c','b','d','c','d'];

let count=arr.reduce((acc,item)=>{
    if(acc[item]){ acc[item]++;}
    else{ acc[item]=1;}
    return acc;
},{})
console.log(count);//{ a: 1, b: 3, c: 2, d: 2 }