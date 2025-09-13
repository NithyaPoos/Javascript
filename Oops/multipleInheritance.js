//Mixins (Most Common Pattern)
//Mixins let us combine behaviors from multiple sources into one class.
/*
class Bird {
  fly() {
    console.log('Flies high');
  }
}

class Fish {
  swim() {
    console.log('Swims deep');
  }
}

function mixin(target, ...sources) {
  Object.assign(target.prototype, ...sources.map(src => src.prototype));
}

class Duck {}

mixin(Duck, Bird, Fish);

const daffy = new Duck();
daffy.fly();  // Flies high
daffy.swim(); // Swims deep
*/
//Functional Mixins (Composable Wrappers)
//we can wrap classes with mixin functions to layer behaviors:
const CanFly = Base => class extends Base {
  fly() { console.log('Flying'); }
};

const CanSwim = Base => class extends Base {
  swim() { console.log('Swimming'); }
};

class Animal {}
class Duck extends CanSwim(CanFly(Animal)) {}

const duck = new Duck();
duck.fly();  // Flying
duck.swim(); // Swimming
//object composition
const base = { eat() { console.log('Eating'); } };
const flyer = { fly() { console.log('Flying'); } };
const swimmer = { swim() { console.log('Swimming'); } };

const duck1 = { ...base, ...flyer, ...swimmer };
duck.fly();   // Flying
duck.swim();  // Swimming
//prototypal delegation
function object(proto) {
  function F() {}
  F.prototype = proto;
  return new F();
}

const base2D = { name: '2D shape', dimensions: 2 };

function rectangle(base, w, h) {
  const obj = object(base);
  obj.name = 'Rectangle';
  obj.width = w;
  obj.height = h;
  obj.area = () => w * h;
  return obj;
}

function circle(base, r) {
  const obj = object(base);
  obj.name = 'Circle';
  obj.radius = r;
  obj.area = () => Math.PI * r * r;
  return obj;
}

const rectObj = rectangle(base2D, 5, 7);
const circObj = circle(base2D, 10);
