let str1 = 'Hello';
let str2 = "World";
let str3 = `Hi, ${str1} ${str2}`; // Template literal with interpolation
console.log(str3);

//string immutable
str2="hell"; //reassign allowed
console.log(str2);
str2[0]="B";   
console.log(str2);  //hell
