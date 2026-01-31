# Variables and DataType 
1. To declear somthing we have to use Variables
2. In the morden time we use mostly 2 --> Const and let. 
3. but we also have the third one --> var. 

## Diff in const and let? 

### Const. --> name constent as it name its a constend value. 
--> If we have decleaed with const we cant change there value after words. 

**JavaScript** 

    const age = 20; 
    console.log(age);

    output ==> 20

    // after change? 
    age = 10; 
    console.log(age);

    output ==>  age = 10; 
                ^
            TypeError: Assignment to constant variable.

### Let 
--> its allow you to change the value as many time as  you want. 

**JavaScript** 

    // let 
    let price = 100; 
    console.log(price); 

    output ==> 100

    // after change? 
    price = 200; 
    console.log(price); 

    output ==> 200

### var --> old method we don't use now 
--> coz it allow to redelear as many time as you want and also don't follow functions scope 

## Data Types in Javascript
there are two types of data type --> 
1. Premitive 
2. Non-premitive 

### premitive 
-> Premitive data type is store the single value and its immutable date type. 
    -> immutable? -> mean this value can not be changed --> changed in the sence in the memory it stay unchanged. 

    We have - 
        1.Numbers 
        2.strings
        3.Bool
        4.undefined
        5.null
        6.Bigint
        7.symbol


### non-premitive 
-> A non-primitive data type is a value that is made of multiple pieces of data and is stored by reference, not by value.

    We have - 
        1.Array.
        2.Object.
        3.Functions.
