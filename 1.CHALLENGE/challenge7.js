/* //CHALLENG 7
//buatlah sebuah fungsi yang mengalikan anggota dalam angka tsb, hingga nilai terakhir hanya terdiri dari 1 digit

function weirdMultiply (sentence){
    //write your code here
}
console.log(weirdMultiply (39)); // => 3*9 = 27 => 2*7 = 14 => 1*4=4
console.log(weirdMultiply(999)); // => 9*9*9 = 729  => 7*2*9 = 126  => 1*2*6 = 12  => 1*2=2
console.log(weirdMultiply(3)); // =. 3 karena telah satu digit

/* output:
4
2
3
 */
//keyword: recursive */



//
function weirdMultiply(sentence){
    var keString = sentence.toString()
    var input = 1;
    if(keString.length === 1){
        return sentence
    }else{
        let i = 0
        while(i<keString.length){
            input*=keString[i]
            //console.log(input);
            i++
        }
        /* for (let i = 0; i < keString.length; i++) {
            input = input * keString[i];
            console.log(input)
        } */
    }
    return weirdMultiply(input);
}
console.log(weirdMultiply(39));
console.log(weirdMultiply(999));
console.log(weirdMultiply(3));


