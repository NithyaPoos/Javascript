const nestedPromise=(milli)=>{
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
       resolve(new Promise((resolve)=>{
        setTimeout(()=>{
             console.log(`waiting for ${milli/1000} more second`);
             resolve('Done waiting');
        },milli)
       }))
      },milli);
    })
}



nestedPromise(1000).then((mes)=>(console.log(mes),mes))
.then((mess)=>console.log(mess))
.catch((erro)=>console.error(erro))

// nestedPromise(1000).then((mes)=>{console.log(mes);return mes;})
// .then((mess)=>console.log(mess))
// .catch((erro)=>console.error(erro))