let isWeekend = false;  
let isHoliday = false; 
let currentTime = 21; 

if(isWeekend || isHoliday || currentTime < 8 || currentTime > 18) {
    console.log("The store is closed")
} else{
    console.log("The store is open for business")
}