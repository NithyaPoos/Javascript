for(let i=0;i<10;i++){
    if(i==4){
        continue;
    }
    if(i==6){
    break;
    }
       console.log(i);
}


let day = 'Holiday';
let message;

switch (day) {
    case 'Monday':
        message = "Start of the week!";
        break;
    case 'Tuesday':
        message = "Second day of the week.";
        break;
    default:  
        message = "Day not recognized.";  // Fallback action (if no match)
        break;
    case 'Friday':
        message = "End of the workweek!";
        break;
}

console.log(message);