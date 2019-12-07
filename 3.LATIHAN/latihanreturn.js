const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callNightSky = () => {
    return 'Night sky: '+ satellite + ', ' + stars +', and ' + galaxy;
};
console.log(callNightSky()); // output: Night sky : The Moon, North star, and The Milky Way


const bunga = 'Anggrek';
const hewan = 'kumbang';
const manusia = 'gadis';

const memanggil = () => {
    return ' Seorang '+ manusia + ' melihat seekor '+ hewan + ' hinggap di '+ bunga;
}
console.log(memanggil()); // output : Seoran gadis melihat seekor kumbang di Anggrek


// contoh lain
var mobil = 'avanza';
var motor = 'honda';
var sepeda = 'polygon';

var kendaraan = () => {
    return 'Di toko itu dijual berbagai merk kendaraan seperti: '+ mobil +', '+ motor +', dan '+ sepeda;
}
console.log(kendaraan()); // output : Di toko itu dijual berbagai merk kendaraan seperti: avanza, honda, polygon

// contoh lain

let siswa1 = 9;
let siswa2 = 10;
let siswa3 = 5;
let siswaSiswa = () => siswa1 *siswa2 * siswa3
console.log(siswaSiswa()); // output: 450

