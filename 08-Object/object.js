// Object //

// CRUD opration ==> create , read , update , delete.


// create 
const user = {
    name: "gaurav", 
    age: 20, 
    Email:"Gaurav"
}

// read 
console.log(user); // { name: 'gaurav', age: 20, Email: 'Gaurav' }
console.log(user.name); // gaurav

// update --> add new or update exesting one  
user.id = 1; 
console.log(user); // { name: 'gaurav', age: 20, Email: 'Gaurav', id: 1 }

user.age = 19; 
console.log(user); // { name: 'gaurav', age: 19, Email: 'Gaurav', id: 1 }

// delete  
delete user.id; 
console.log(user); // { name: 'gaurav', age: 19, Email: 'Gaurav' }


// method of object 
const user2 = {
    name:"gaurav", 
    age:19, 
    greeting: function(){
        console.log(`Hey ${this.name} how are you!!`);
        
    }
}

user2.greeting(); // Hey gaurav how are you!!


// loop on the object 

// old way 
const car = {
  make: "Honda",
  model: "Civic",
  year: 2021
};

for(const key in car){
    console.log(`key ${key} and value ${car[key]}`);
    
}

// key make and value Honda
// key model and value Civic
// key year and value 2021


// morden way 
console.log(Object.keys(car)); // [ 'make', 'model', 'year' ]
console.log(Object.values(car)); // [ 'Honda', 'Civic', 2021 ]

for(const [key , value] of Object.entries(car)){
    console.log(`${key} : ${value}`);
    
}

// make : Honda
// model : Civic
// year : 2021



// advance topic 

let obj1 = { value: 10 };
let obj2 = obj1; 

obj2.value = 20; 

console.log(obj1.value); // 20 (The original was changed!)

const original = { name: "Alice", age: 30 };

const copy ={...original}; 

copy.age = 20; 
console.log(original); //{ name: 'Alice', age: 30 } it does not change the orignal one 


// Modern ES6+ Syntax (Syntactic Sugar)

const name = "Alice";
const age = 30;

// Old way:
const userOld = { name: name, age: age };

// New way:
const userNew = { name, age };


// morder ways 

const user3 = {
    name: "Alice",
    forklift: "Linde",
    age: 30,
    isStudent: true
};

const keys = Object.keys(user3); 

for(const key of keys){

    const value = user3[key]; 
    console.log(`${key} : ${value}`);
    
}

// name : Alice
// forklift : Linde
// age : 30
// isStudent : true
