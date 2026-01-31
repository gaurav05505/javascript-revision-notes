// 1.Arithmetic – change numbers // 

console.log(4+5); //add
console.log(4-5); //minus
console.log(4*5); //Multi
console.log(4/5); //devide
console.log(4%5); //MOD -> ITS GIVE THE REMENDERS. 


// Assignment – store results // 


let x = 20; 
let y = 10; 

// add 
x = x+y; // output = 60
x+=y; //output = 60 

// minus 
x = x-y; // output = -20
x-=y;  // output = -20

// devide 
x = x/y ;
x/=y ;

// MOD 
x = x%y; 
x%=y; 

console.log(x);


// Comparison – produce true/false // 

let z = 10;
let w = 20; 

console.log(z > w); //false
console.log(z < w); //true
console.log(z >= w); //false
console.log(z <= w); //true 

let v = 10; 
let k = "10"; 

console.log(v == k); //true --> it convert string to number first and then it check. 
console.log(z === w); //false --> its a strict check it will check data type first then numbers . 


// Logical – combine conditions // 

// and Operator &&
console.log(true && true); //true
console.log(true && false); //false
console.log(false && false); //false

// or operator || 
console.log(true || true ); //true 
console.log(true || false ); //true 
console.log(false || false ); //false

