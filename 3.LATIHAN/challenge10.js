//CHALLENGE 10
//implementasikan penggunaan readline pada fungsi yang telah dibuat di challenge #6
//result==> program dijalankan, dan hasilnya seperti dibawah ini:
//Rubis-MBP:readline rubihenjaya$ node solution.js
//tulis kalimatmu disini>
//dan proses bekerja akan seperti berikut:
// tulis kalimatmu disini> ibu pergi ke pasar
// hasil konversi: ibu ergipnyo eknyo asarpnyo
// tulis kalimatmu disini > ayam
// hasil konversi: ayam
//tulis kalimatmu disini > Good bye!


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function stringManipulation(word) {
​
    if (word.startsWith("a") || word.startsWith("e") || word.startsWith("i") || word.startsWith("o") || word.startsWith("u")) {
      return word;
    } else {
      return word.slice(1) + word.slice(0, 1) + "nyo";
    }
  }
​
  function wordManipulation(str) {
    var toArray = str.split(' ');
  
    for (var x = 0; x < toArray.length; x++) {
      toArray[x] = stringManipulation(toArray[x])
    }
    return toArray.join(' ');
  }
rl.setPrompt('tuliskan kata = ' );
rl.prompt();
// console.log('Tuliskan Kata =');
​
function kenalan(){
    rl.on('line',(userInput) =>{
        if(userInput == 'Good bye!'){
​
            console.log('Program ditutup');           
                return rl.close();
        }
        var result = wordManipulation(userInput);
        console.log('output :' + result);
    //    console.log('tuliskan kata :');       
       rl.setPrompt('tuliskan kata :');       
        rl.prompt();       
​
    });
} 
kenalan()
