//Use forEach() to print "Pass" if grade ≥ 40, else "Fail".

let marks=[30,40,60,70,90];

marks
.forEach(
(grade)=>{
if(grade>=40){console.log("Pass",grade)}
else {console.log("fail "+grade)}
}
)

marks.forEach(grade=>grade>=40?console.log("pass",grade):console.log("fail",grade));