//Write a function getPassingGrades(arr) that returns only grades ≥ 40.
function getPassingGrades(arr)
{
return arr.filter(m=>m>=40);
}

let grades=[30,40,50,60,70,41];
const pass=getPassingGrades(grades);
console.log("pass :: "+pass);           //pass :: 40,50,60,70,41