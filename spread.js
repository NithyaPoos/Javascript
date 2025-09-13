const original = { name: "Nithya", skills: { qa: true } };
const copy = { ...original };

copy.name = "Poosamooper";       // ✅ Only affects copy
copy.skills.qa = false;          // ❌ Affects original too!

console.log(copy.skills.qa); // false
console.log(original.skills.qa); //false

console.log(copy.name); // Poosamooper
console.log(original.name); //Nithya
