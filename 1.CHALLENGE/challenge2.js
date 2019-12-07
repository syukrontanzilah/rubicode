// CHALLENGE 2
function deretKaskus(n){
let itsTrial = []
for (let i=3; i<= n*3; i+=3){
if (i%5===0 && i%6===0){
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


// output 
//[3, "KUS", 9, "KUS", "KAS", "KUS", 21, "KUS", 27, "KASKUS"]
//key: modulus, array
