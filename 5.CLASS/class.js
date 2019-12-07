//CLASSES

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
        this._behavior ++;
    }
}
const halley = new Dog ('Halley');
console.log(halley.name);
console.log(halley.behavior);
halley.incrementBehavior();
console.log(halley.name);
console.log(halley.behavior);

//latihan
class flower{
    constructor (nama){
        this._nama = nama;
        this._kebiasaan = 0;
    }
    get nama(){
        return this._nama;
    }
    get kebiasaan(){
        return this._kebiasaan;
    }
    incrementKebiasaan(){
        this._kebiasaan++
    }
}
const jasmine = new flower ('jasmine');
console.log(jasmine.nama);
console.log(jasmine.kebiasaan);
jasmine.incrementKebiasaan();
console.log(jasmine.nama);
console.log(jasmine.kebiasaan)

