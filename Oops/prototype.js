class Employee{
    constructor(id,ename){
        this.id=id;
        this.ename=ename;

    }
}

Employee.prototype.salary=500000; //adding variables thru prototype
Employee.prototype.displayMethod=function(){    //adding function thru prototype
console.log(this.id,this.ename,this.salary);
}

e=new Employee("E101","DemoUser1");
//console.log(e.id,e.ename,e.salary);  //E101 DemoUser1 500000
e.displayMethod();  //E101 DemoUser1 500000

e1=new Employee("E102","DemoUser2");
//console.log(e1.id,e1.ename,e1.salary);  //E102 DemoUser2 500000
e1.displayMethod();  //E102 DemoUser2 500000