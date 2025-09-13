//Find the first grade that is greater than 75 from [40, 55, 76, 82, 91].
const grades=[40, 55, 76, 82, 91];
const firstHigh=grades.find( mark => mark>75);
console.log(firstHigh);    //76