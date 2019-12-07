//DESTRUCTURED ASSIGNMENT
const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
        day: 'stay inside',
        night: 'satisfy appetite'
    }
};

const residence = vampire.residence;
console.log(residence);  // Transylvania
const name = vampire.name;
console.log(name)  // Dracula
const preferences = vampire.preferences;
console.log(preferences)  // {day: 'stay inside', night:'satisfy appetite'}

//latihan 1
const car = {
    merk: 'xpander',
    type: 'sport',
    information: {
        transimi: 'manual',
        colour: 'white'
    }
};
const merk = car.merk;
console.log(merk);  // xpander
const type = car.type;
console.log(type);  //sport
const information = car.information;
console.log(information)  // {transmisi: 'manual',colour: 'white'}