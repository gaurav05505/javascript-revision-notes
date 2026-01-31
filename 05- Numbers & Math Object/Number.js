// Number // 

let num = 10; 
console.log(num); //10

let a = 123.011; 
console.log(a); //123.011 
console.log(typeof a); //number

// tofixed --> it only take the value you want but output it as string and it dont change the original value.  
let b = 223.001; 
console.log(b.toFixed(2)); //223.00
console.log(typeof b.toFixed(2)); //string

// toPrecision --> how much total value you want. also gives in string form. 
let c = 1.223321; 
console.log(c.toPrecision(3)); //1.22
console.log(typeof c.toPrecision(3)); //string


// Anther way of creating Number // 

let x = new Number(10); 
console.log(x); // [Number: 10] --> it create a object 
console.log(typeof x); //object


let y = new Number(10); 
console.log(y); //[Number: 10] --> it create a object

console.log(x==y); //false --> it compare on the basic of object and abjects are not pointing to each other both are diff

