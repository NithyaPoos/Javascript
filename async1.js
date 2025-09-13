async function f1(a){await console.log("f1");await console.log("a---",a)}//a--- Promise { undefined }
async function f2(){await console.log("f2")}
const f3=async ()=>{await console.log("f3");}


f1(f2())
f2()
f3()
