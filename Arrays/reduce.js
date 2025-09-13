/*
array.reduce((accumulator, currentValue, currentIndex, array) => {
  // logic here
}, initialValue);
accumulator: the running total or result
currentValue: the current item in the array
initialValue: optional starting value for the accumulator
*/

const numbers = [10, 20, 30];
const res=numbers.reduce((acc,item)=>acc+item,0);
//stating point of acc is 0 then added with items 0+10 then 10+20 30+30 =60
console.log(res);