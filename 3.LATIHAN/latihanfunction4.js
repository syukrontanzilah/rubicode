// FUNCTION EXPRESSIONS

const calculateArea = function (width, height){
    const area = width * height;
    return area;
}; /* calculateArea is IDENTIFIER
      function      is FUNCTION KEYWORD
      width, height is PARAMETERS
*/

//contoh:
const plantNeedsWater = function (day){
    if (day === 'Wednesday'){
        return true;
    } else{
        return false;
    }
};
plantNeedsWater ('Tuesday');
console.log(plantNeedsWater('Tuesday'));  // output : false

// contoh 2:
const play = function (age){
    if (age === 'child'){
        return true;
    } else{
        return false;
    }
};
play ('mature');
console.log(play('mature'));  // output false

// contoh 3
const xx = function (flower){
    if (flower === 'Rose'){
        return true;
    }else{
        return false;
    }
};
xx ('Rose');
console.log(xx('Rose'));  // output true

