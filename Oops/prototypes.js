function student(){
    this.name="John";
    this.gender="male";
}

student.prototype.age=49;  //it can be accessed commonly in all objects
s=new student();
s.age=50;//age is added newly to the function student for object s only.
console.log(s.name,s.gender,s.age);    //John male 50

s1=new student();
console.log(s1.name,s1.gender,s1.age);  //John male undefined //John male 49