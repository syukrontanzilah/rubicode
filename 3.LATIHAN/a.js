function wawMm (sentence){
    var keString = sentence.toString()
    var input = 1
    if (sentence===0) return 0;
    else if (keString.length === 1){
        return sentence
    }else{
        let i=0
        while(i<keString.length){
            input *= keString[i]
            console.log(input);
            i++
        }
    }
    return wawMm (input);
}

console.log(wawMm(444))