const country = city => city === 'Jakarta' ? true : false ;
console.log(country('Jakarta'))  // output : true

const flower = rose => rose === 'Jasmine' ? true : false ; 
console.log(flower('Orchad')) // false


// BLOCK AND SCOPE

const city = 'New York City'
const logCitySkyline = () => {
    let skyscraper = 'Empire State Building';
    return 'The stars over the ' + skyscraper + ' in ' + city;
};
console.log (logCitySkyline())

// contoh lain

const animal1 = () =>{
    let animalHabit = 'drinking water';
    const animal = 'black dog';
    const animal2 = 'rabbit'
    return 'The '+animal+' and '+animal2+ ' is ' +animalHabit+' on the river'
};
console.log(animal1())


var sound = 'frog'
var sound2 = 'bird';
var soundAnimal = () =>{
    return 'look at the field and listen the sound of '+sound+' and '+sound2;
}
console.log(soundAnimal())