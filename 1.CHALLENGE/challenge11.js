/* var readline = require('readline');
var fs = require('fs');
var content = fs.readFileSync('1.CHALLENGE/data.json');
var obj = JSON.parse(content);
var i = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan > '
});
function tebakKata() {
    console.log('Selamat datang di permainan tebak kata, silahkan isi dengan jawaban yang benar ya! ');
    console.log(`\nPertanyaan: ${obj[i].definition}`);
    rl.prompt();
    rl.on('line', function (answer) {
        if (answer.toLowerCase() == obj[i].term) {
            console.log('Jawaban anda benar')
            i++;
            if (i == obj.length) {
                console.log('selamat anda menang');
                process.exit();
            }
            console.log("\nPertayaan: " + obj[i].definition);
            rl.prompt();
        }
        else {
            console.log('Wkwkwkwk anda kurang beruntung');
            rl.prompt();
        }
    });
}
rl.on('SIGINT', () => {
    rl.close();
    console.log('Program ditutup');
    process.exit();
})
// console.log(content[0]);
tebakKata() */

//challenge 11 permainan tebak kata
let readline = require ('readline');
let fileSistem = require ('fs');

let content = fileSistem.readFileSync('1.CHALLENGE/data.json');
let object = JSON.parse(content);

var x = 0;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban saya => '
});

function tebakKata(){
    console.log(' Met datang nih di permainan tebak kata !');
    //object.definition index ke 0
    console.log(`\nPertanyaan: ${object[x].definition}`);
    rl.prompt();
    rl.on('line', (answer)=>{
        if(answer.toLowerCase()== object[x].term){
            console.log("Yeey.. jawaban kamu benar");
            //increment x as object.definition +1
            x++;
            //cek if x == panjang object
            
            if (x==object.length){
                console.log('Wah selamat yah kamu menang!!');
                //rl.close()
                process.exit();
            }
            console.log(`\n Pertanyaan: ${object[x].definition}`);
            rl.prompt();
        }
            else{
                console.log('Oopss.. jawaban nya salah nih..!!');
                rl.prompt();
        }
    });
}
tebakKata()