const settings = { theme: "dark" };
console.log(settings.theme);    //dark
Object.seal(settings);

settings.theme = "light";     // ✅ Allowed
settings.layout = "grid";     // ❌ Not added
delete settings.theme;        // ❌ Not deleted

console.log(settings.theme);    //light

//clone and extend 
const sealedSettings = Object.seal({ ...settings, layout: "grid" });
console.log(sealedSettings);//{ theme: 'light', layout: 'grid' }

/*you cannot add new properties to it.
 You can modify existing properties,
 but adding or deleting properties is strictly blocked.
 What Object.seal() Does
✅ You can update existing property values.
❌ You cannot add new properties.
❌ You cannot delete existing properties.*/

