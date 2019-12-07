const plantNeedsWater = function (day){
    if (day==='Wednesday'){
        return true;
    }else{
        return false;
    }
}// plantNeedsWater ('Tuesday');
console.log(plantNeedsWater('Wednesday')); // output: true

//contoh lain:
const hphp = function (samsung){
    if(samsung==='laptop'){
        return true;
    }else{
        return false;
    }
}
console.log(hphp('laptop')); // true

//contoh lain
const negara = function (ibukota){
    if (ibukota === 'indonesia'){
        return true;
    } else {
        return false;
    }
}
console.log(negara('Myanmar')); // output : false

// ARROW FUNCTION SYNTAX

const negaraku = kota => {
    if (kota === 'Indonesia'){
        return true;
    }else{
        return false;
    }
}
console.log(negaraku('Indonesia')); // true

// contoh lain:

const countryAsia = country => {
    if (country === 'Japan'){
        return 'I will live there';
    } else {
        return 'I dont like that';
    }
} 
console.log(countryAsia('Jamaica')) // I dont like that

//contoh lain
const namaMurid = lakilaki =>{
    if(lakilaki==='ahmad'){
        return 'ini nama murid laki-laki';
    }else{
        return 'ini murid perempuan';
    }
}
console.log(namaMurid('ahmad')) // ini nama murid laki-laki


const manis = sayang =>{
    if(sayang==="cinta"){
        return 'will you marrie me'
    }else{
        return 'i hate u'
    }
}
console.log(manis('cinta'))