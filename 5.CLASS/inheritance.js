//INHERITANCE I
class Cat {
    constructor(name, usesLitter){
        this._name = name;
        this._usesLitter = usesLitter;
        this._behavior = 0;
    }
    get name(){
        return this._name;
    }
    get usesLitter(){
        return this._usesLitter;
    }
    get behavior(){
        return this._behavior;
    }
    incrementBehavior(){
        this._behavior++
    }
}

//INHERITANCE 2
class Animal {
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

//INHERITANCE 3
class Animal {
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
        this._behavior++
    }
}
//
class Cat extends Animal{
    constructor(name, usesLitter){
        super(name);
        this._usesLitter =usesLitter;
    }
}

const bryceCat = new Cat('Bryce', false);
console.log(bryceCat._name);


// INHERITANCE IV
class Animal{
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
        this._behavior++
    }
}

class Cat extends Animal {
    constructor(name, usesLitter){
        super(name);
        this._usesLitter;
    }
}
const bryceCat = new Cat ('Bryce', false);
console.log(bryceCat.name);
bryceCat.incrementBehavior();  //call .incrementBehavior()on Cat instance
console.log(bryceCat.behavior);  // log value saved to behavior