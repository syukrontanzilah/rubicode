//PROPERTY VALUE SHORTHAND

/* const monsterFactory = (name, age) => {
    return {
        name: name,
        age: age
    }
}

const monsterFactory = (name, age) =>{
    return{
        name,
        age
    }
} */
//latihan
const robotFactory = (model, mobile)=>{
    return{
        model,
        mobile,
        beep(){
            console.log('Beep Boop');
        }
    }
}
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)  // output P-501
                            //          false

//latihan
const marketPlace = (sale,discount)=>{
    return{
        sale,
        discount,
        clip(){
            console.log('tetew');
        }
    }
}
const newMarket = marketPlace('waw','omg')
console.log(newMarket.sale);
console.log(newMarket.discount) // output :  waw
                                // output : omg