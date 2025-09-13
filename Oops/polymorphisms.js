class Shape{
    draw(){
        return "shape class";
    }
}
class Square extends Shape{
    draw(){
        return "square class";
    }
}
class Circle extends Shape{
    draw(){
        return "circle class";
    }
}
let s=new Shape();
console.log(s.draw());   //shape class
s=new Square();
console.log(s.draw());    //square class
s=new Circle();
console.log(s.draw());     //circle class