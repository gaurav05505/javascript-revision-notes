// Data // 

const date = new Date(); 
console.log(date); // 2026-02-01T07:05:22.197Z

// it pick the time from you device. 
console.log(date.toString()); //Sun Feb 01 2026 12:36:01 GMT+0530 (India Standard Time)

console.log(date.toLocaleString()); //1/2/2026, 12:37:25 pm

console.log(date.getDay()); // 0
console.log(date.getDate()); // 1
