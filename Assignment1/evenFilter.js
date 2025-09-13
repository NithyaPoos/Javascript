//From the array [15, 28, 35, 42, 50], use filter() to get all even numbers.

let array1=[15, 28, 35, 42, 50];
const evenNo=array1.filter((number)=>{
                         if(number%2===0){console.log("even no "+number);}
                         else
                            {console.log("odd no "+number);} 
                        });
console.log(evenNo);

function even(num)
         {
            return num%2===0;
        }
 const even1=(n)=>n%2===0  ;     
const evenN=array1.filter(even1);  //[ 28, 42, 50 ]
console.log(evenN)