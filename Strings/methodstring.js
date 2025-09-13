let str1 = 'Hello';
let str2 = "World";
let str3 = `Hi, ${str1} ${str2}`;      // Template literal with interpolation
console.log(str3);                     //Hi, Hello World
console.log(str3.length);              //15
console.log(str3.toLowerCase());       //hi, hello world
console.log(str3.toUpperCase());       //HI, HELLO WORLD
console.log(str3.includes("Hi"));      //true
console.log(str3.includes("Greedy"));  //false
console.log(str3.indexOf("l"));        //6
console.log(str3.lastIndexOf("l"));    //13
console.log(str3.slice(0, 6));         //Hi, He
console.log(str3.trim());              //Hi, Hello World
console.log(str3.replace("l","Z"));    //Hi, HeZlo World
console.log(str3.replaceAll("l","Z")); //Hi, HeZZo WorZd
console.log(str3.replace(/l/g, "U")); // Hi, HeUUo WorUd  g is global flag
console.log(str3.startsWith("H"));    //true
console.log(str3.endsWith("d"));      //true
console.log(str3.split(","));       //[ 'Hi', ' Hello World' ]
console.log(str3.split(" "));      //[ 'Hi,', 'Hello', 'World' ]