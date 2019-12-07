// FUNCTION

const width = 10;
const height = 6;
const area = width * height;
console.log(area); // hasil 60

const www = 50
const jjj = 10
const hhh = www * jjj;
console.log(hhh); // hasil 500

const lll = 7
const ooo = 8
const ppp = 10
const bbb = lll + ooo - ppp
console.log(bbb); // hasil 5

const mawar = 10
const melati = 5
const anggrek = 1
console.log(anggrek+melati-mawar); // hasil -4

/* lebar = 10
tinggi/panjang = 6
luas = lebar * panjang */

// area of the first rectangle
 const width1 = 10;
 const height1 = 6;
 const area1 = width1 * height;

// area of the second rectangle
const width2 = 4;
const height2 = 9;
const area2 = width2 * height2;

// area of the third rectangle
const width3 = 10;
const height3 = 10;
const area3 = width3 * height3;


// FUNCTION DECLARATIONS

console.log(greetWorld()); // output: Hello World!

 function greetWorld() {
     console.log('Hello, World!');
 }

 //Calling a Function

 function getGreeting() {
     console.log('Hello dunia!')
 } getGreeting();


//PARAMETERS AND ARGUMENTS
function calculateArea (width,height){
    console.log(width*height)
}
calculateArea();


// excample 1:
function sayThanks(name) {
    console.log('Thank you for your purchase '+name+'! We appreciate your business.')
}
sayThanks('Cole'); // output: Thank you for your purchase Cole! We appreciate your business.

// excample 2
function ucapan(nama) {
    console.log ('Terima kasih ya sudah berkunjung.. '+nama+'! jangan lupa kembali lagi..')
} ucapan ('Syukron');

// excample 3
function xx (kota){
    console.log ('Jika kamu berkunjung ke kota '+kota+' jangan lupa bawa oleh oleh');
} xx ('Bandung');

// excample 4
function y (negara){
    console.log ('Selamat! kamu berkesempatan wisata ke negara '+negara+'');
} y ('Indonesia');

// excample 5
function ii (warna){
    console.log ('Kalau kamu memilih warna '+warna+' berarti kamu berhasil..')
} ii ('kuning')

// excample 6 
function uu (mobil){
    console.log ('Selamt kamu mendapatkan 1 unit '+mobil+'')
} uu ('Avanza');

// ecxample 7 
function gg (motor){
    console.log ('Aku berangkat ke sekolah naik '+motor+'')
} gg ('Vario')

// excample 8
function iii (laptop){
    console.log ('OMG! you got a '+laptop+'')
} iii ('HP')

// excample 9 
function h (bird){
    console.log ( 'Do you like '+bird+'?')
} h ('Owl')

// excample 10
function bb (flower){
    console.log('The girl like '+flower+'')
} bb ('sunflower');