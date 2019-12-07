function deretKaskus(n){
    let itsTrial = []
    for (let i=3; i<= n*3; i+=3){
    if (i%5 === 0 && i%6 === 0){
            itsTrial.push("KASKUS")
        } else if(i%6===0){
            itsTrial.push ('KUS')
        } else if (i%5===0){
            itsTrial.push ('KAS')
        }
        else{
            itsTrial.push(i);
        } 
    }
    return itsTrial
    }
    console.log(deretKaskus(10));

//latihan 3
function kulKas (p){
    var iniKulkas = [];
    for(var k=0; k<=p*3; k+=3){
        
    }
}

