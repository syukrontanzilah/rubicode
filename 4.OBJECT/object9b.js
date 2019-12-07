//BUILT IN OBJECT METHODS

const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel:75
};

const robotKeys = Object.keys(robot);
console.log(robotKeys);  // output: ['model', 'mobile','sentient','armor','energyLevel']

const robotEntries = Object.entries(robot);
console.log(robotEntries); // output

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);