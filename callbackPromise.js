function statusCode(arr,callback1,callback2){
//setTimeout(()=>{},1000)
setTimeout(()=>{

let res=arr.reduce((t,i)=>t*i);
res>0?callback1(`value is ${res}`):callback2(`value is ${res}`);

},1000) 

}

statusCode([10,10,10],res1=>console.log("success",res1),res2=>console.log("fail",res2));