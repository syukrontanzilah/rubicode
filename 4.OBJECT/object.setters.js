//SETTERS
const robot = {
    _model: '13EY90P',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
            return this._numOfSensors;
        }else{
            return 'Sensors are currently down.'
        }

    } ,
    set numOfSensors(num){
        if (typeof num === 'number' && num >= 0){
            this._numOfSensors = num;
        }else{
            console.log('Pass in a number that is greater than or equal to 0')
        }
    }
};
robot.numOfSensors = 100;
console.log(robot.numOfSensors); // 100

//LATIHAN
const country = {
    _name: 'indonesia',
    _population: 250000000,
    set population(num1){
        if(typeof num1 === 'number' && num1>=0){
            this._population = num1;
        }else{
            console.log('please try your number')
        }
    }
};
country.numIndo = 4;
console.log(country.numIndo);

//latihan 2
