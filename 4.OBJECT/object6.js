//PRIVACY
const bankAccount = {
    _amount: 1000
}
bankAccount._amount = 1000000;
console.log(bankAccount)

//latihan
const robot = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel +=30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%`)
    }
};
robot.recharge() // output: Recharged! Energy is currently at 130%

//jika value 100 kita ganti dengan 'hight' apakah yang terjadi? :D check this out

const robot1 = {
    _energyLevel :'hight',
    recharge(){
        this._energyLevel +=30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%`)
    }
}
robot1.recharge() // output:  Recharged! Energy is currently at hight30%

//latiha
const country = {
    nameCountry : 'indonesia',
    people: 250000000,
    sentence(){
        this.people += ' peple';
        console.log(`the population in ${this.nameCountry}is about ${this.people}`)
    }
}
country.sentence()