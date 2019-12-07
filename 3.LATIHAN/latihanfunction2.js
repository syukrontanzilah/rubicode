// DEFAULT PARAMETERS 1

function greeting (name = 'stranger'){
    console.log (`Hello, ${name}!`)
}
greeting ('Nick') // output: Hello, Nick!
greeting ()    // output: Hello. stranger!



function say (nama = 'Cewek'){
    console.log (`Hai apakabar, ${nama}!`)
}
say ('Aisyah'); // Hai apakabar, Aisyah!
say (); // Hai apakabar Cewek!



function ii (kota = 'Jakarta'){
    console.log (`Selamat anda bisa liburan ke ${kota}`)
}
ii ('Bandung'); //selamat anda bisa liburan ke Bandung
ii ()  // selamat anda bisa liburan ke Jakarta



function kk (negara = 'Jamaika'){
    console.log(`anda adalah dari negara ${negara}`)
}
kk ('Bangladesh') // anda adalah dari negara Bangladesh
kk ();   // anda adalah dari negara Jamaica



// DEFAUL PARAMETER 2

function makeShoppingList (item1= 'milk', item2 = 'bread', item3='eggs'){
console.log (`Remember to buy ${item1}`); // Remember to buy milk
console.log (`Remember to buy ${item2}`); // Remember to buy bread
console.log (`Remember to buy ${item3}`); // Remember to buy eggs
}
makeShoppingList();


function www (kota1= 'Jakarta', kota2='Bandung', kota3='Semarang', kota4='Surabaya' ){
    console.log ( `Your city is ${kota1}`); // Your city is Jakarta
    console.log (`Your city is ${kota2}`); // Your city is Bandung
    console.log (`Your city is ${kota3}`); // Your city is Semarang
    console.log (`Your city is ${kota4}`); // Your city is Surabaya
}
www (); 

function wkwkw (a1 = 'Abdullah', a2 = 'Jakarta', a3 = 'male', a4 = 'abdullah@gmail.com'){
    console.log (`Your name is ${a1}, your city is ${a2}, your gen is ${a3}, and your email is ${a4}`)
}
wkwkw(); // output: Your name is Abdullah, your city is Jakarta, your gen is male, and your email is 
         // abdullah@gmail.com

function honey (q1 = 'Steven', q2 = 'Washingtoon DC', q3 = 'USA', q4 = 'Employee'){
    console.log (`My name is ${q1}, I am from ${q2}, ${q3} and my work is ${q4}`)
}
honey();  // output: My name is Steven, I am from Washingtoon DC, USA and my work is Employee
