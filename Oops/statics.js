class Test{

   static a=10; //static can be accessed directly by using classname
          b=20; //non static can be accessed thru object only 

    static method1(){console.log("This is static method")}
    method2(){console.log("This is non-static method")}      
}
console.log(Test.a); //10
Test.a=1000;//chaning static var value
console.log(Test.a); //1000
//console.log(Test.b); //undefined
Test.method1();    //This is static method =static can be accessed thru classname
//Test.method2(); //error as not a fucntion -nonstatic can be accessed thru object 
let object1=new Test();
console.log(object1.b=10); //10
object1.method2();         //This is non-static method 
