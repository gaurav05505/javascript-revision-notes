// number --> string //

let a = 10; 
let b = String(a); 
console.log(b); //10
console.log(typeof b); //string

// string to number // 

let x = "10"; 
let y = Number(x); 
console.log(y); //10 
console.log(typeof y); //number

// error point 
let e = "abc"
let f = Number(e) 
console.log(f); //NaN -> not a number 
console.log(typeof f ); //Number --> NaN 

// Boolean --> number // 

let t = true; 
let c = Number(t); 
console.log(c); // 1 
console.log(typeof c); //number

// number --> Boolean 

let j = 0; 
let l = Boolean(j); 
console.log(l); // false 
console.log(typeof l); //boolean -> all the numbers are true but not 0 






