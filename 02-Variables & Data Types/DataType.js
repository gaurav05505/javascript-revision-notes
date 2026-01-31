// premitive //

// number --> 8 bytes (64 bits) in memory
let a = 10; 
console.log(a);

// string --> collection of char
let name = "Gaurav"; 
let name2 = 'Gaurav'; 
console.log(name2);

// bool 
let world = true; 
let time = false; 
console.log(world , time);

// undefined --> when we just decleard and not assign the value then it store the undeined
let user; 
console.log(user);

// null --> we assign the value intensnally coz it exist but we dont have data. 
let train = null; 
console.log(train);

// symbol --> all the things are same but internal values are different. 
let me = Symbol("gaurav"); 
let mee = Symbol("gaurav"); 
console.log(me == mee);

// bigint --> size grows as it needed. 
let pop = 1222333333344433222n; 
console.log(pop);

// non-premitive data type //

// Array --> we can store any value here. 
let score = [1,2,3,4,5,6 , "gaurav" , false ]; 

// Object --> it store in the form of key:value pair. 
let user1 = {
    name: "gaurav", 
    age: 19, 
}

// functions 
function say(){
    console.log("Hello");
}

// call the function 
say(); 








