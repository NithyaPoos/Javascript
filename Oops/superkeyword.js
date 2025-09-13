class Animal{
    constructor(color){
        this.color=color;
    }

    printColor(){
        console.log("color :: ",this.color);
    }
}
class Dog extends Animal{
    constructor(color,food){
      super(color);
      this.food=food;
    }
    eating(){
        console.log("Eating :: ",this.food);
    }
    display(){
        super.printColor();//to call parent method
        this.printColor(); //to call parent method
        this.eating();     
    }
}

d=new Dog("black","bread");
d.display();