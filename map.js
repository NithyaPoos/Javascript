const userMap = new Map();
userMap.set("name", "Nithya");
userMap.set(42, "Answer");
userMap.set({ id: 1 }, "Admin");
//(userMap.get(objKey)
console.log(userMap.get("name")); // "Nithya"
userMap.forEach((v,k)=>console.log("key :: ",k, "-----------value ::" ,v));
userMap.forEach((v,k)=>console.log(`key :: ${k} , value  ::    ${userMap.get(k)} -----------value :: ${v} `));