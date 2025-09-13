class Demo{
    constructor(){
        let name,marks;  //working on variables thru constructors
    }

    getName(){
        return this.name;
    }
    setName(name){
        this.name=name;
    }

    getMarks(){
        return this.marks;
    }
    setMarks(marks){
        this.marks=marks;
    }
}

let d=new Demo();
d.setName("Demo1");
d.setMarks(90);
console.log(d.getName(),d.getMarks());  //Demo1 90
