//JAVA SCRIPT FUNCTIONS
function sum (num1, num2){
    return num1 + num2; // defining the function
}
sum (3,6); // calling function

function add (num1, num2){
    return num1 + num2;
}

function sayHello (name){   // the parameter is name
    return `Hello, ${name}!`;
}

function sum (num1, num2){   // with return
    return num1 + num2;
}

function sum (num1, num2){
    num1 + num2;   // without return, so the function deesn't output the sum
}

function rocketToMars(){   // named function
    return 'BOOM!';
}
const rocketToMars = function(){
    return 'BOOM!';
}

const dog = function (){
    return 'Woof!'
}

// Arrow function with two arguments
const sum = (firstParam, secondParam) =>{
    return firstParam + secondParam;
};
Console.log(sum(2,5)); // output : 7


// Arrow function with no arguments
const printHello = ()=> {
    console.log('hello');
};
printHello();   // output : hello

// Arrow function with a single argument
const checkWeight = weight => {
    console.log (`Baggage weight: ${weight} kilograms.`);
};
checkWeight(25);  // print : Baggage weight: 25 kilograms.

// Consise arrow functions
const multiply = (a,b) => a*b;
console.log(multiply(2,30)); // print : 60