// FACTORY FUNCTION
const monsterFactory = (name, age, energySource, catchPhrase)=>{
    return {
        name:name,
        age:age,
        energySource: energySource,
        scare(){
            console.log(catchPhrase);
        }
    }
}
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm','BOO!');
ghost.scare()  // output: BOO!

//latihan
const robotFactory = (model,mobile)=>{
    return{
        model:model,
        mobile:mobile,
        beep(){
            console.log('Beep Boop')
        }
    }
}
const tinCan = robotFactory('P-500', true)
tinCan.beep()       // output : Beep Boop


//latihan 2 
const car = (color,size)=>{
    return{
        color:color,
        size:size,
        boop(){
            console.log('BRROOOOOOOM')
        }
    }
}
const cuCok = car('red','big');
cuCok.boop() // output: BROOOOOOM

//latihan 3
const motor = (type,oil)=>{
    return{
        type:type,
        oil:oil,
        broom(){
            console.log('Ngeeeeenggg')
        }
    }
}
const cuCin = motor('ferrari','adira');
cuCin.broom()


