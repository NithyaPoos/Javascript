//Use map() to add 5 bonus marks to each grade in [60, 70, 80].
let grade=[60,70,80];

const bonusgradeMap=grade.map((mark)=>mark+5)
console.log("print grades after bouns ponits are added :: "+bonusgradeMap); //[ 65, 75, 85 ]

const mark= m=>m+5;         //func expression=arrow func
const gradeMap=grade.map(mark);   //callbackfunc -param as func exp
console.log("print grades after bouns ponits are added :: "+gradeMap);      [ 65, 75, 85 ]
