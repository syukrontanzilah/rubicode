//REVIEW
function greetWorld (){
    console.log('Hello, World!')
} 
//  {console.log('Hello, World!')} adalah Function body
// greatWorld adalah identifier

function calculateArea (width, height){
    console.log (width*height);
}
// (width, height) adalah parameter


// to define a function usin function expressions:
const calculateArea = function(width, height){
    const area = width*height;
    return area;
};

// to define a function using arrow function notation:
const calculateArea = (width , height) => {
    const area = width * height;
    return area;
};

// function definition can be made concise using concise arrow notation:
// single - line block:
const sumNumbers = number => number + number ;
// multi - line block:
const sumNumbers = number => {
    const sum = number + number;
    return sum;
};
