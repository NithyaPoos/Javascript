const waitOneSecond = (millis) => {

    //executor -> function()
    return new Promise((resolve, reject) => {
        if (millis > 3000) {
            reject(`can't wait more than ${millis / 1000} seconds`);
        } else {
            setTimeout(() => {
                console.log(`waiting for ${millis / 1000} second`);
                resolve(new Promise((resolve) => {
                    setTimeout(() => {
                        console.log(`waiting for ${millis / 1000} more second`);
                        resolve('Done waiting');
                    }, 1000)
                }));
            }, millis)
        }
    });
}


waitOneSecond(1000).then().then((msg1)=>{
    console.log(msg1);
}).catch((errormsg)=>{
    console.error(errormsg);
})

/*
waitOneSecond(1000).then((msg1)=>{
    console.log(msg1);
}).catch((errormsg)=>{
    console.error(errormsg);
})

waitOneSecond(1000)
  .then((msg) => {
    console.log('Intermediate:', msg);
    return msg;
  })
  .then((msg1) => {
    console.log('Final:', msg1);
  })
  .catch((errormsg) => {
    console.error(errormsg);
  });

*/
