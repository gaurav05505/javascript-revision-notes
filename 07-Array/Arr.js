// Array // 

const arr = [1,2,3,4,5,6,7]; 
const arr2 = ["gaurav" , "Rohit" , "Rohan"]; 

// js can hold all the value like string , int and bool in one arr
const arr3 = [1,"gaurav" , true]; 

console.log(arr3[2]); //true 
console.log(arr2.length); //3 
console.log(arr2.indexOf("gaurav")); //0 


// push method // 
const arr4 = [] 
arr4.push("gaurav" , 19 , true); 
console.log(arr4); // [ 'gaurav', 19, true ]

// pop method // 
arr4.pop(); 
console.log(arr4); // [ 'gaurav', 19 ] -> it will pop the last element. 


// .unshift(item1, item2, ...): Adds one or more items to the beginning. // 
let arr5 = ["user2" , "user3"]; 
arr5.unshift("user1"); 
console.log((arr5)); // [ 'user1', 'user2', 'user3' ]

// .shift() --> remove the first element. 
arr5.shift(); 
console.log(arr5); // [ 'user2', 'user3' ]



// looping of arr  //

let price = [20,22,34,45,66,554,43]; 

for(let i=0; i<price.length; i++){
    console.log(price[i]); // 20,22,34,45,66,554,43
}


// for of loop //
for(const cost of price){
    console.log(cost); // 20,22,34,45,66,554,43
}


// Advanced Array Manipulation // 
let months = ["Jan", "March", "April", "June"];

// Start at index 1, delete 1 element.
months.splice(1, 2);
console.log(months); //[ 'Jan', 'June' ]


// The Spread Operator (...) (The Modern Way to Copy/Combine) 
let a = [1,2,3] ; 
let b = [4,5,6]; 

const c = [...a , ...b]; 
console.log(c); //[ 1, 2, 3, 4, 5, 6 ]

a =[...a , ...b]; 
console.log(a); //[ 1, 2, 3, 4, 5, 6 ]

