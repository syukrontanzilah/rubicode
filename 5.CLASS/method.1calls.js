//METHOD CALLS
class Dog {
    constructor(name){
        this._name = name;
        this._behavior = 0;
    }
    get name(){
        return this._name;
    }
    get behavior(){
        return this._behavior;
    }
    incrementBehavior(){
        this._behavior++;
    }
}
const halley = new Dog ('Halley');
let nikko = new Dog ('Nikko');
nikko.incrementBehavior();
let bradford = new Dog('Bradford');
console.log(nikko.behavior);   // 1
console.log(bradford.behavior)  // 0