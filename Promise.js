function Book(){
return new Promise((resolve,reject)=>

{   let booked=true;
    if(booked){
       // resolve(200);
        setTimeout(resolve,1000,200);     
        
    }
    else
    {
        reject(500);
    }
});}

Book().then((a)=>console.log("success -resolved promise ",a))   
.then((r)=>console.log("resolved success  :: ",r)) //resolved success  ::  undefined
.catch((b)=>console.log("try again",b)) ;  //success -resolved promise  200


