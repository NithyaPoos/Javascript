class Student{

    constructor(id,name,grade){
        this.studentId=id;
        this.studentName=name;
        this.grade=grade;

    }

    setDetails(){
        this.studentId=100;
        this.studentName="Hello";
        this.grade="A";
    }

    getDetails(id,name,grade){
        this.studentId=id;
        this.studentName=name;
        this.grade=grade;
    }

    display(){
    
        console.log(this.studentId,this.studentName,this.grade);
    }
}
let stu=new Student(111,"DmoUser","A");
let s1=new Student(121,"DmoUser1","A1");
let s2=new Student(131,"DmoUser1","A2");
//stu.getDetails(121,"Demo1User","A");
stu.display();
s1.display();
s2.display();
