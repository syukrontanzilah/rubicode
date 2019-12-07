// LOOPING ATAU PENGULANGAN
// FOR
for (var i = 0; i<=100; i++){ //i=0 artinya dimulai nya dari 0
    console.log(i)            // i <=100 pengulangannya sampai 100, i++ pengulangan terus +1
} 
// hasilnya 1 sampai 100 ke print

for (var y = 0; y<=100; y++){
    console.log(y)
}

for (let murid=10; murid<50; murid++){
    console.log(murid); 
}

for (var bunga=30; bunga<40; bunga++){
    console.log(bunga);
}

// WHILE = SELAMA
// SELAMA INI, MAKA LAKUKAN HAL ITU

var jumlahMakan = 0
while (jumlahMakan < 20){   // tiap kali juml makannya kurang dari 20,terus lakukan pengulangan
    jumlahMakan = jumlahMakan + 1
    console.log('Makan!') // output: Makan! nya ada 20 kali pengulangan
}

var motor = 0
while (motor<10){
    motor += 1
    console.log('Go!'); // output: Go! nya ada 10 kali pengulangan
}

var mobil = 1
while (mobil<5){
    mobil++
    console.log('Wohoo!') // output: Wohoo! nya ada 4 kali pengulangan
}

// contoh lain
var makanan = ['susu','roti','nasi']
for (var mak = 0; mak<makanan.length; mak++){
    console.log(makanan[mak]); // output: susu roti nasi, tampil berurut ke bawah
}

// contoh lain
var kota = ['Bandung','Bogor','Jakarta','Surabaya','Bali']
for ( var u=1; u<kota.length; u++){
    console.log(kota[u]); // output : Bogor Jakarta Surabaya Bali
}
// contoh lain
var negara = ['Indonesia', 'Malaysia', 'Filipina', 'Thailand', 'Vietnam', 'Jepang']
for (var w=2; w<negara.length; w++){
    console.log(negara[w]);  // output : Filipina Tailand Vietnam Jepang
}

// contoh lain
var city = ['New York', 'Washington DC', 'Alaska', 'Oklahoma', 'Nevada']
for (var cc=3; cc<city.length; cc++){
console.log(city[cc]); // // output : Oklahoma, Nevada
}
// contoh lain 
let home = ['father', 'mother','son','daughter']
for (let hm=2; hm<home.length; hm++){
    console.log(home[hm]); // output : son daughter
}