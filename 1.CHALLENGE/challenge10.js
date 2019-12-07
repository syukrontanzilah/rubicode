//contoh
const readline = require ('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output:process.stdout
})
function stringManipulation(word){
    if(word.startsWith ('a')||word.startsWith ('i')||word.startsWith ('u')||word.startsWith ('e')||word.startsWith ('o')){
return word;        
    }else{
        return `${word.slice(1)}${word.slice(0,1)}nyo`
    }
}
function sentenceManipulation(bunda){
    var ibu = bunda.split(' ')
    let i = 0
    while(ibu.length>i){
        ibu[i]= stringManipulation(ibu[i])
        i++
    }
    return ibu.join(' ')
}
//r1.setPrompt ('coba ketik deh disini = ');
console.log('coba ketik deh disini:')
r1.prompt();


function salam(){
    r1.on('line',(userInput)=>{
        if (userInput == 'keluar'){
            console.log('Oops... program nya dah selesai nih :(');
            return r1.close()
        }
        var result = sentenceManipulation(userInput);
        console.log('saya :'+ result);
        r1.setPrompt('coba ketik deh disini :');
        //console.log('coba ketik disini:')
        r1.prompt();
    });
}
salam()

/* 
console.log(sentenceManipulation('ibu pergi ke pasar bersama aku'))
console.log(sentenceManipulation('aku ingin ikut ke pasar bersama ibu')) */