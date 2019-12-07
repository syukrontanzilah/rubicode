// THE WHILE LOOP

// for looping
 for(let counterOne = 1; counterOne<4; counterOne++){
     console.log(counterOne)
 }                              // output : 1 2 3 

// while looping
let counterTwo = 1;
while (counterTwo < 4){
    console.log(counterTwo);
    counterTwo++;               // output :  1 2 3 
}

// contoh
let book = 0;
while (book<=5){
    console.log(book);
    book++;         // output : 0 1 2 3 4 5
}

// contoh
const cards = ['diamond','spade','heart','club'];
let currentCard;
while (currentCard != 'spade'){
    currentCard = cards[Math.floor(Math.random()*4)];
    console.log(currentCard);
}

// contoh 2
let indomie = ['soto','rendang','sambal matah','iga penyet'];
let miInstant;
while (miInstant != 'rendang'){
    miInstant = indomie[Math.floor(Math.random()*2)];
    console.log(miInstant);

}
//contoh 3
