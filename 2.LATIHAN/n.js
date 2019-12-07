const concept = ['arrays','can','be','mutated'];
function changeArr(arr){
    arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);

const removeElement = newArr => {
    newArr.pop()
}
removeElement(concept);
console.log(concept);


//contoh lain:
const bunga = ['mawar','melati','anggrek','kemboja'];
function bungaBunga(bbb){
    bbb[2]= 'sepatu';
}
bungaBunga(bunga);
console.log(bunga);
const bungaBaru = newBunga => {
    newBunga.pop()
}
bungaBaru(bunga)
console.log(bunga);

//contoh lain

var bukubuku = [[1,2],[3,4],[56,6]]
var guru = bukubuku [2][0];
console.log(guru)

var kacamata = [[1,2],[3,4],[5,6],[7,8]];
const mata = kacamata[3][0];
console.log(mata);
