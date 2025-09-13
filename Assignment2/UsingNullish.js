function applyDefaults(userSettings) {
  const defaults = {
    theme: "light",
    fontSize: 14,
    language: "en",
    layout: "grid"
  };

  const newDefaults={};//new obj 
  for(let key in defaults){
    //console.log(key); //theme   fontSize   language  layout
    //console.log(defaults[key]); //light  14 en grid
    newDefaults[key]=userSettings[key]??defaults[key];//??nullish 
  }
  return newDefaults;

}

let settings = {
  theme: "",
  fontSize: 0,
  language: null,
  layout: undefined
};
// console.log(settings.theme??"new theme");    //""
// console.log(settings.fontSize??"new font");  //0
// console.log(settings.language??"new lang");  //new lang
// console.log(settings.layout??"new layout");  //new layout
console.log(applyDefaults(settings));//{ theme: '', fontSize: 0, language: 'en', layout: 'grid' }



const applyDefaults1 = (userSettings) => {
  const defaults = {
    theme: "light",
    fontSize: 14,
    language: "en",
    layout: "grid"
  };

  const merged = { ...defaults, ...userSettings };

  // Fix null/undefined values that got overridden
  for (let key in defaults) {
    if (userSettings[key] === null || userSettings[key] === undefined) {
      merged[key] = defaults[key];
    }
  }

  return merged;
};

console.log(applyDefaults1(settings));//{ theme: '', fontSize: 0, language: 'en', layout: 'grid' }
