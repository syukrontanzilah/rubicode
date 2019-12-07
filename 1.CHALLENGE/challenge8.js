// buatlah sebuah function yang menerima string. string tersebut merupakan suatu pola perhitungan
// dari beberapa bilangan namun bilangannya itu sendiri tidak lengkap
// dan tugasmu adalah menebak 1 angka yang seharusnya, sehingga apabila bilangan tersebut telah lengkap,
// maka akan membentuk suatu pola perhitungan yang benar..

/*  function pola (str){
    //write your code here
}

console.log(pola("42#3 * 188 = 80#204")); //result: [8,5]

console.log(pola("8#61 * 895 = 78410#5"))  // [7,9] */


// LATIHAN
function pola (str){
    let toArray = str.split(' ');
    let tampung =[];
    for (let i=0; i<10; i++){
        for (let j = 0; j<10; j++){
            if((toArray[0].replace('#',i))*toArray[2]== toArray[4].replace('#',j)){
                tampung.push(i,j)
            }
        }
    }
    return tampung
}
console.log(pola('42#3 * 188 = 80#204'));
console.log(pola('8#61 * 895 = 78410#5'));

// LATIHAN 
function pola (str) {
    let toArray = str.split (' ');
    let jadinya = [];
    for (let x=0; x<10; x++){
        for (let z=0; z<10; z++){
            if((toArray[0].replace('#',x))*toArray[2]== toArray[4].replace('#',z)){
                jadinya.push(x,z)
            }
        }
    }
    return jadinya;
}
console.log(pola('42#3 * 188 = 80#204'));
console.log(pola('8#61 * 895 = 78410#5'));
