if (!process.argv[2]){
    console.log(`Opps.. sertakan file sebagai inputan soalnya\n Misalnya 'node solution.js data.json`);
    process.exit();
}

var readline = require ('readline');
var fileSistem = require ('fs');
const FILE_NAME = process.argv[2];
var content = fileSistem.readFileSync(FILE_NAME);
var object = JSON.parse (content);

var x = 0;
var wrong = 1;
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Jawaban: '
});
//console.log(process.argv);
console.log(`Selamat datang di permainan Tebak Kata. kamu akan diberi pertanyaan
dari level ini: ${FILE_NAME}. untuk bermain, jawablah dengan jawaban yang sesuai. \n 
Gunakan kata: 'lewat' untuk melewati pertanyaan yang gak bisa. dan bisa dijawab di akhir nanti`);
console.log(`\n Pertanyaan: ${object[x].definition}`);
rl.prompt();
rl.on('line', function(answer){
    if(answer.toLowerCase()==object[x].term.toLowerCase()){
        console.log('Jawabanmu benar!!');
        x++;
        wrong = 1;
        if(x==object.length){
            console.log('Selamat kamu berhasil!!!');
            process.exit();
        }
        console.log("\nPertanyaan: " + object[x].definition);
        rl.prompt();
    }
    else if(answer.toLowerCase()== 'lewat'){
        object.push(object[x]);
        x++;
        console.log("\nPertanyaan: "+object[x].definition);
        rl.prompt();
    }
    else{
        console.log(`Oppss.. kamu salah ${wrong} kali nih :(`);
        wrong++;
        rl.prompt();
    }
});