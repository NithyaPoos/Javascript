/*
Create an object of employees with their salaries. 
Write a function to find the employee with the highest salary 
using Object.entries().
let student = { name: "John", age: 20, grade: "A" }; */
const employees = {
  Alice: 70000,
  Bob: 85000,
  Charlie: 65000,
  Nithya: 950000
};

function findHighestSalary(salary){

    const highSalary={};
    let max=0;name=null;
    for(let key in salary){
      if(salary[key]>max){
        max=salary[key];
      }
    }
    return max;
}
function findHighestSalaryUsingObjectEnteries(salary){

    const highSalary={};
    let max=0;name1=null;
    for(let [key,value] of Object.entries(salary)){
      if(value>max){
        max=value;
        name1=key;
      }
    }
    return {employeeTopSalary:max,employeeName:name1};
}
//console.log(findHighestSalary(employees)); //950000
console.log(findHighestSalaryUsingObjectEnteries(employees)); 
//{ employeeTopSalary: 950000, employeeName: 'Nithya' }


const result1=function findHighestSalaryUsingReduce(salaries) {
  return Object.entries(salaries).reduce((acc, [name, salary]) => {
    return salary > acc.salary ? { name, salary } : acc;
  }, { name: null, salary: 0 });
}
console.log(result1(employees));//{ name: 'Nithya', salary: 950000 }