//GETTERS

const person = {
    _firstName: 'John',
    _lastName: 'Doe',
    get fullName() {
      if (this._firstName && this._lastName){
        return `${this._firstName} ${this._lastName}`;
      } else {
        return 'Missing a first name or a last name.';
      }
    }
  }
  
  // To call the getter method: 
  console.log(person.fullName); // 'John Doe' 

  //latihan
  const robot ={
      _model: '1ETR5567P',
      _energyLevel: 100,
      get energyLevel(){
          if(typeof this._energyLevel === 'number'){
              return `My current energy level is ${this._energyLevel}`
          }else{
              return 'Sistem malfunction: cannot retrieve energy level'
          }
      }
  };
  console.log(robot.energyLevel) // My current energy level is 100

  //latihan 2
  const bunga = {
    _nameVariant : 'jasmine',
    _dayAlive: 30,
    get dayAlive (){
      if(typeof this._dayAlive === 'number'){
        return `the alive of jasmine is about ${this._dayAlive} day`
      }else{
        return 'feels good'
      }
    }
  }
  console.log(bunga.dayAlive)

  //latihan 3
  const country = {
    _nameCountry : 'indonesia',
    _population: 250000000,
    get population(){
      if (typeof this._population === 'number'){
        return `the population of indonesia is ${this._population} people`
      }else{
        return 'i dont know'
      }
    }
  }
  console.log(country.population)