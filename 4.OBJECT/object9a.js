//DESTRUCTURED ASSIGNMENT

const vampire = {
    model: 'Dracula',
    residence: 'Transylvania',
    preference: {
        day: 'stay inside',
        night: 'satisfy appatite'
    }
}
/* const residence = vampire.residence;
console.log(residence); // Transylvania */

const {residence} = vampire;
console.log(residence); // Transylvania

const {day} = vampire.preference;
console.log(day) // stay inside


//latihan
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep(){
            console.log('Beep Boop');
        },
        fireLaser(){
            console.log('Pew pew');
        },
    }
};
const {functionality} = robot
functionality.beep()  // output : Beep Boop

//latihan 2
const jurassicWorld = {
    animal : 'dinosaurs',
    habitat: 'land',
    voiceOfAnimal: {
        tyrex(){
            console.log('Roaaaaaaaar');
        },
        branchiosaurs(){
            console.log('ngoooooooo')
        },
    }
};
const {voiceOfAnimal} = jurassicWorld
voiceOfAnimal.tyrex() //Roaaaaaaaar
