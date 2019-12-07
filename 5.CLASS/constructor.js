//CONSTRUCTOR
class Dog {     // dog is the name of class
    constructor(name){          // this constructor() method achepts one argument: name
        this.nama = name;       //inside constructor(), we use 'this' keyword.
        this.behavior = 0;
    }
}
const halley1 = new Dog ('Bulldog');
console.log(halley1.nama)              // Buldog

const halley2 = new Dog ('herder');
console.log(halley2.nama)      // helder


//
class Surgeon{
    constructor(name,department){
        this.name=name;
        this.department=department;
    }
}
const surgeonCurry = new Surgeon ('Curry', 'Cardiovascular')
const surgeonDurant = new Surgeon ('Durant','Orthopedics')
console.log(surgeonCurry.name) // output: Curry
console.log(surgeonDurant.department) //orthopedics