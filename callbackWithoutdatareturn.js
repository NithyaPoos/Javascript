const nums = [10, 56, 23, 9];


const sumOfNums = (arr, callback,errorcallback) => {
    setTimeout(() => {
        let res = arr.reduce((total, current) => total + current, 0);
        res=null;
        if(res){
           callback(res);
        }else
      {
        errorcallback("error-------", res);
      }
    }, 1000);
}

sumOfNums(nums, result => {
    console.log(result);
},(errf,ref)=>{console.log("failed",errf,ref)}); //failed error------- null



