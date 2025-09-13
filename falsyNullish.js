if (!"") console.log("Empty string is falsy"); // This will run
if (!0) console.log("Zero is falsy");          // This will run
//Nullish Coalescing Operator (??)?? is used to provide a default value only 
// if the left-hand side is null or undefined—
// not other falsy values like 0, "", or false.

let theme = "";         // user intentionally chose empty string
let fontSize = 0;       // user explicitly set to 0
let language = null;    // not set
let layout = undefined; // not set

let finalTheme = theme ?? "light";       // "" (keeps empty string)
let finalFontSize = fontSize ?? 14;      // 0 (keeps zero)
let finalLanguage = language ?? "en";    // "en" (uses default)
let finalLayout = layout ?? "grid";      // "grid" (uses default)

console.log(finalTheme, finalFontSize, finalLanguage, finalLayout);
// Output: "", 0, "en", "grid"
let count = 0;

let usingOr = count || 10;   // 10 → because 0 is falsy
let usingNullish = count ?? 10; // 0 → because 0 is not null/undefined
//So if you want to respect intentional falsy values, use ??.
