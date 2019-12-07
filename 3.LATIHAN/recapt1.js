// if statement
const meal = true;
if (meal){
    console.log('its very delicious');
} // output : its very delicious



// else statement
const animal = true;
if (animal){
    console.log ('I love the cute animal')
}else {
    console.log('I hate them');
} // output : I love the cute animal



const flower = false;
if (flower){
    console.log('the girl will ignore them');
}else{
    console.log('Girl likes you')
} // output: Girl likes you



//if, else, else if statement
const size = 10
if (size>100){
    console.log('Big!');
}else if(size>40){
    console.log('Medium');
}else if(size>5){
    console.log('Small')
}else{
    console.log('Tinny')
} // output Small



const age = 20
if (age>70){
    console.log('very old');
}else if (age>40){
    console.log('old');
}else if (age>17){
    console.log('Mature');
}else{
    console.log('Young');
} // output: Mature



//Switch statement
const food = 'pizza';
switch (food) {
    case 'burger':
        console.log('Enjoy the taste of bread and steak');
        break;
    case 'pizza':
        console.log('Enjoy the italian taste');
        break;
    default:
        console.log ('Enjoy your meal');
        break;
}  // output: Enjoy the italian taste



//java script comparison
console.log(1===1); //true
console.log('1'===1); //false
console.log(8!==9); //true



//java script comparison operator
1<3 //true
console.log(1<3);
1>3 //false
console.log(1>3);
250>=250 // true
console.log(250>=250);
1===1 //true
1===2 //false
1==='1'//false

// and && operator
true && true // true
console.log(true&&true);
1>2 && 2>1 // false
console.log(1>2&&2>1);
true && false //false
4===4 && 3>1 //true
console.log(4===4&&3>1);

//or || operator
console.log(true || false) //true
console.log(4>5 || 4<5); //true
console.log (false || false); //false
console.log (4>20 || 4>10); //false

// not ! operator
let value = true;
let oppositeValue = !value;
console.log(oppositeValue); //false

const emptyString = "";
console.log(!emptyString); //true

const truthyNumber = 1;
console.log(!truthyNumber); //false

// ternary operator ? 
let price = 10.5;
let day = 'monday';
if (day === 'monday'){
    price -= 1.5;
}else{
    price += 1.5;
}

day === 'monday' ? price -=1.5 : price +=1.5;