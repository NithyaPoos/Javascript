const testResults = ["Passed", "Passed", "Failed", "Passed"];
const res=testResults.some(s=>s==="Failed");
console.log(res);  //true

const testResults1 = ["Passed", "Passed", "Passed"];
const res1=testResults1.every(s=>s==="Passed");
console.log(res1);  //true


