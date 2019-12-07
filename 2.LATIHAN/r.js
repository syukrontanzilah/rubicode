const number = [1,2,3,4,5,6]
const squareNumbers = number.map(number=>{
    return number * number
})
console.log(squareNumbers);
//output: [1,4,9,25,36]


//latihan 2
const roll = [2,4,6,8,10,20]
const rollfilm = roll.map(roll=>{
    return roll*roll
})
console.log(rollfilm)
// output: [4.16.36.64.100.400]

//latihan 3
const nama = [1,2,3,4,5]
const nilai = nama.map(item=>{
    return item+2
})
console.log(nilai)