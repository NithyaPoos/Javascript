console.log(this);//{}-global object
function f1(){
    console.log(this);//undefined  //{} <ref *1> Object [global] {
//window is also global object and this is global object by default 
//but depending on the context from where it is called and this can refer to different objects  
}
f1()