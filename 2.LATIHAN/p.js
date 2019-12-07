const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for (let i = 1; i<= 1000000; i++){
        if ((2+2)!=4){
            console.log('Something has gone very wrong :( ');
        }
    }
};

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name);



//latihan 1
const ThisIsFunction = () => {
    for (let x = 1; x<= 1000; x++){
        if ((2+2)!=4){
            console.log('Owh M G! your\' wrong')
        }
    }
}
const iss = ThisIsFunction;
iss();
console.log(iss.name);
