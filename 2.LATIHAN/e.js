let fast = false
fast ? console.log('I love it') :console.log('I hate it')
// output: I hate it

var size = 'big'
var weight = 'heavy'
size ? console.log('My body is '+ size) : console.log( 'Miy body is '+weight);
// output: My body is big

const flower = 'rose'
const animal = 'chicken'
animal ? console.log('feel good') : console.log('taste good');
// output: feel good

let aa = true
let bb = false
aa ? console.log('benar') : console.log('salah');
bb ? console.log('benar') : console.log('salah');
// benar
//salah

let a = 5
let b = 'b'
a == 5 ? console.log('Betul') : console.log ('kurang tepat'); // betul
a > 5 ? console.log ('betul') : console.log ('salah')           //salah
b === 'b' ? console.log ('betuls') : console.log ('salahh')     // betuls


const city1 = 'jakarta'
const city2 = 'bandung'
const city3 = 'Bogor'
const city4 = 'Semarang'

city1 == 'bandung' ? console.log('Benar bgt') : console.log('Salah bro') //salah bro

let car = 'avanzza'
let motor = 'honda'
car == 'honda' ? console.log('yes') : console.log('no'); // no

// contoh lain
let season = 'summer'
if ( season === 'rain'){
    console.log('I always take an umbrella every I go.')
}else if (season === 'winter'){
    console.log('everything is very cold')
}else if (season === 'summer'){
    console.log('The weather is very hot, I want not to go anywhere')
}else{
    console.log('undidentified weather') // print: The weather is very hot, I want not to go anywhere
}

//contoh lain
let country = 'Indonesia'
country === 'Philippine' ? console.log('Its location is on the nort of Indonesia') : console.log('its my beloved country')
// its my beloved country

let bank = 'mandiri';
bank === 'mandiri' ? console.log('I save money in this '+bank +' bank') : console.log('I am afraid to save money');

let indomie = 'rendang';
indomie === 'iga penyet' ? console.log('I love to eat this') : console.log('I like rendang very much');

let milk = 'bendera';
milk === 'bendera' && milk === 'indomilk' ? console.log('susu saya susu bendera') : console.log('susu saya enak')

//contoh:
var harga = 'cheep'
if(harga==='cheep'){
    console.log('I will buy')
}else if(harga==='expensive'){
    console.log('Hmm.. its too expensive to me')
}else if(harga === 'more than $100'){
    console.log('WTF!')
}else{
    console.log('Its okey')
}

//conntoh:
var art = 'drawing'
if(art === 'drawing'||'painting'){
    console.log('coz i am falling in love')
}else if(art === 'swimming'){
    console.log('its nice hobby')
}else{
    console.log('okey dech')
}