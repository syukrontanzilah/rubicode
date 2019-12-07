// THE THIS KEYWORD

const robot = {
    model: '1E09JK',
    energyLevel:100,
    provideInfo(){
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
    }
};
console.log(robot.provideInfo())


//latihan
const indonesia = {
    capitalCity : 'jakarta',
    people :250000000,
    president :'jokowi',
    infoIndo(){
        return `indonesia beribukota kan : ${this.capitalCity}, memiliki penduduk ${this.people} jiwa dan nama presidennya adalah ${this.president}`
    }
}
console.log(indonesia.infoIndo())
console.log(indonesia.capitalCity)
console.log(indonesia.people)
indonesia.culture  = 'much culture'
console.log(indonesia)

//latihan
const 