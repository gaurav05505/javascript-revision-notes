// String //

const Name1 = "Gaurav"; 
const Name2 = 'Gaurav'; 
const Name3 = `Gaurav`; // --> this is the morden way to create mostly now we use this. 

console.log(Name1);
console.log(Name2);
console.log(Name3);


const age = 19; 
const name = `
Name -> Gaurav 
Age -> ${age}
`; //-> we can print the value of age with this ${}; 

console.log(name);

// method on string // 

const str1 = `Gaurav`; 

console.log(str1.length); //6 
console.log(str1[0]); //G

str1[2] = "o";
console.log(str1); // Gaurav --> cause the string is premitive data type of it is immutable. 

console.log(str1.toUpperCase()); //GAURAV -> it returns the new string it does not make changes on orignal string. 
console.log(str1.toLowerCase()); //gaurav -> it returns the new string it does not make changes on orignal string. 

console.log(str1.indexOf("rav")); //3 --> index and if not present it will give -1 

console.log(str1.includes("rav")); //true 

console.log(str1.slice(1,4)); //aur --> first index  is included and the last is not. and if you give only one index it will cut from the first index you have gien  to last 

console.log(str1.substring(1,4)); //it will give you the substring first index to last-1. 

console.log(str1.replace("a" , "o")); //gourav
console.log(str1.replaceAll("a" , "o")); //gourov

const str2 = `  gaurav  `
console.log(str2); // __gaurav__

console.log(str2.trim()); // gaurav-> it will remove the first and last unwanted space . 






