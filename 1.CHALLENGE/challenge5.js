function stringManipulation(word){
    if (word.startsWith('a')||word.startsWith('i')||word.startsWith('u')||word.startsWith('e')||word.startsWith('o')){
        return word;
    }else{
        return `${word.slice(1)}${word.slice(0,1)}nyo`
    }
}
console.log(stringManipulation('ayam'));
console.log(stringManipulation('bebek'));

