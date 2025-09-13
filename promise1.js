/*
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5;
      success ? resolve('Data loaded') : reject('Network error');
    }, 1000);
  });
}

fetchData(0.4)
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => console.log('Request completed'));

*/

function f1(a){
return new Promise((resolve,reject)=>{
 setTimeout( ()=>{
   //a>10?resolve():reject()
   a>10?resolve("success"):reject("failed")
        ,1000})
})
  };

  const f2=f1(11);
  f2.then(()=>console.log("success",f2))  //success Promise { undefined }//success Promise { 'success' }
    .catch()  //UnhandledPromiseRejection: This error originated either by throwing inside of an async 
  /*
  f1()
  .then(()=>console.log("success"))
  .catch(()=>console.log("failure"))
  */