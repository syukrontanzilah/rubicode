// ARROW FUNCTION
/* fungsi ini menggantikan function contoh: const plant = function (day) = {} menjadi :
 const plant = (day) => {} 
 */

 //contoh  :
 const rectangleArea = (width, height) => {
     let area = width* height;
     return area;
 }
// zero parameters, contoh :  const functionName = () => {};
// one parameters, contoh : const funtionName = paramOne => {};
// two or more parameters, contoh : const functionName = (paramOne, paramTwo) => {};

// single - line block, contoh : const sumNumbers = number => number + number;
/* multi - line  block, contoh : const sumNumbers = number => {
                                            const sum = number + number ;
                                            return sum; };
                                            */

                                            
// contoh awal:
const plantNeedEarth = (day)=>{
    return day==='Wednesday' ? true : false;
};
// menjadi:
const plantNeedEarth =  day => day === 'Wednesday' ? true : false;

