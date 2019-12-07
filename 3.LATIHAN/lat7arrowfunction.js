// ARROW FUNCTION
function perkalian (angka1, angka2){
    return angka1 * angka2
}
console.log(perkalian(2,3))  // output: 6

// contoh lain
function perkalian2 (angka3, angka4){
    const hasil = angka3 * angka4
    return hasil
}
console.log(perkalian2(4,5)); // output: 20

// contoh lain
function perkalian3 (angka5, angka6){
    const jumlah = angka5 * angka6
    return jumlah
}
const arrowPerkalian = (angka5, angka6) =>{
    return angka5 * angka6
}
console.log(perkalian3(2,3))  // output : 6
console.log(arrowPerkalian(4,5));  // output : 20

//tanda kurung kurawal nya bisa dihilangkan diganti dgn sbb:
const arrowPerkalian1 = (angka7, angka8) => angka7 * angka8;
console.log(arrowPerkalian1(4,10)) // output : 40

const kota = (bogor,surabaya)=> bogor * surabaya;
console.log(kota(5,10)) // output :50

