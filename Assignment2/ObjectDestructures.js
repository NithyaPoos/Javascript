/*
You are building a user settings system:
let settings = {
  theme: "",       // user didn’t choose
  fontSize: 0,     // user explicitly chose 0
  language: null,  // user didn’t set
  layout: undefined
};
 Write a function applyDefaults(userSettings) that merges with these defaults:
{ theme: "light", fontSize: 14, language: "en", layout: "grid" }​
Use ?? (nullish coalescing) so that empty string "" and 0 are respected.
Don’t overwrite falsy but intentional values like "" and 0.
Expected o/p: { theme: "", fontSize: 0, language: "en", layout: "grid" }

*/

function applyDefaults(userSettings){
const defaults={ 
    theme: "light", 
    fontSize: 14, 
    language: "en", 
    layout: "grid" 
              };

    return {
        theme:userSettings.theme??defaults.theme,
        fontSize:userSettings.fontSize??defaults.fontSize,
        language:userSettings.language??defaults.language,
        layout:userSettings.layout??defaults.layout };        
    }


let settings = {
  theme: "",       // user didn’t choose
  fontSize: 0,     // user explicitly chose 0
  language: null,  // user didn’t set
  layout: undefined
};
//console.log(applyDefaults(settings));//{ theme: '', fontSize: 0, language: 'en', layout: 'grid' }
const result=applyDefaults(settings);
console.log("default values :: ",result);
//default values ::  { theme: '', fontSize: 0, language: 'en', layout: 'grid' }