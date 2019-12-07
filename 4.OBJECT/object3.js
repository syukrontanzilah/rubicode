//PASS BY REFERENCE
let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

let greenEnergy = obj => {
    obj['Fuel Type']='avocado oil';
}

let remotelyDisable = obj => {
    obj.disable = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship)


//latiihan
let japan = {
    'capital city': 'tokyo',
    continent : 'asia',
    mountain : 'fuji'
}
let addPresident = obj =>{
    obj.president = 'akihito'
}
addPresident(japan)

japan.flowerIcon = 'sakura'

console.log(japan)