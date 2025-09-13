class A{
a=100;
displayA(){console.log("i am from parent")}
}
class C{
    a=101;
    displayA(){console.log("I am from C")}
}
class B extends A {
b=200;
displayB(){console.log("i am from child");}

}
b=new B();
console.log(b.b,b.a);  
b.displayA();
b.displayB(); 