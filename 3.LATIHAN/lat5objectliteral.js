// OBJECT LITERAL
// kumpulan data yg tdk berurutan dan mempunyai key di setiap data nya

var mobil = {
    warna: 'merah',
    merk: 'Avanza',
    berat: '1000 kg'
}
console.log(mobil); 
// output: {warna: 'merah', merk: 'Avanza', berat: '1000kg'}

console.log(mobil.warna);  // output : merah

console.log(mobil.merk); // output : Avanza
console.log(mobil.berat); // output : 1000 kg

// kalau kita mau mengganti value 'warna' menjadi hitam misalnya

mobil.warna = 'hitam'
console.log(mobil) // output: { warna: 'hitam', merk: 'Avanza', berat: '1000kg' }

// kalau kita mau menambah value 'jenis mobil : Apv ' 
mobil.jenis = 'Apv'
console.log(mobil); // { warna: 'hitam', merk: 'Avanza', berat: '1000kg', jenis = 'Apv' }

// kalau mau menghapur value merk: 'Avanza'
delete mobil.merk
console.log(mobil); //{ warna: 'hitam', berat: '1000kg', jenis = 'Apv' }

