const defaults = { theme: "light", fontSize: 14 };
const userSettings = { fontSize: 0 };
//const finalSettings = Object.assign(defaults,userSettings);
const finalSettings = Object.assign({}, defaults, userSettings);
console.log(finalSettings); //{ theme: 'light', fontSize: 0 }