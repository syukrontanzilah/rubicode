const vampire ={
    name: 'Dracula',
    residence: 'Transylvania',
    preferences:{
        day: 'stay inside',
        night: 'satisfy appetite'
    }
};

/* const residence = vampire.residence;
console.log(residence);  // print Transylvania 
// atau bisa juga sbb: */
const { residence } = vampire;
console.log(residence);  //prints Transylvania

const {day} = vampire.preferences;
console.log(day);  // stay inside