//ARROW FUNCTIONS AND THIS

const goat = {
    dietType : 'herbivore',
    makeSound(){
        console.log('baaa')
    },
    diet(){                             //sebelumnya:  diet : () => {} 
        console.log(this.dietType);
    }
}
goat.diet();

//latihan
const robot = {
    energyLevel : 100,
    checkEnergy(){
        console.log(`Energy is currently at ${this.energyLevel}%`)
    }
}
robot.checkEnergy();

//latian 2
const city ={
    nameCity: 'jakarta',
    located: 'the north of java island',
    sentences(){
        console.log(`if you lear about ${this.city}, you will find that ${this.city} is the busy city`)
    }
}
city.sentences()

//latihan 4
const country = {
    nameCountry: 'indonesia',
    located: 'asia',
    sentenceNation(){
        console.log(`The unity and diversity is ${this.nameCountry}'s symbol who located in ${this.located}`)
    }
}
country.sentenceNation()

