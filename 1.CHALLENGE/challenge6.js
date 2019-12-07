function stringManipulation(word){
    if (word.startsWith('a')||word.startsWith('i')||word.startsWith('u')||word.startsWith('e')||word.startsWith('o')){
        return word;
    }else{
        return `${word.slice(1)}${word.slice(0,1)}nyo`
    }
}
//console.log(stringManipulation('ayam'));
//console.log(stringManipulation('bebek'));


function sentenceManipulation(bunda){
    var ibu = bunda.split(' ')
    //for(i=0; i<ibu.length; i++){
      //  ibu[i]= stringManipulation(ibu[i])
      //console.log(ibu.length)
      let i = 0
      while(ibu.length>i){
          ibu[i]=stringManipulation(ibu[i])
          i++
      }

    return ibu.join(' ')
    
    }
    console.log(sentenceManipulation('ibu pergi ke pasar bersama aku'))
    console.log(sentenceManipulation('aku ingin ikut ke pasar bersama ibu'))