//NESTED LOOPING 

let bobFollowers = ['joe','marta','sam', 'erin']
let tinaFollowers = ['jeje','joe', 'sam','lukman','ainun']
let mutualFollowers = []
for(let b=0; b < bobFollowers.length; b++){
    for (t=0; t<tinaFollowers.length; t++){
        if(bobFollowers[b]===tinaFollowers[t]){
            mutualFollowers.push(bobFollowers[b]);
            console.log(bobFollowers[b])
        }
    }
}

//LATIHAN 1
let cityAsia = ['jakarta','tokyo','manila','hanoy','phuket']
let cityIndo = ['surabaya','jakarta','bandung','sukabumi','padang']
let cityMutual = []
for(let ca=0; ca<cityAsia.length; ca++){
    for(let ci=0; ci<cityIndo.length; ci++){
        if(cityAsia[ca]===cityIndo[ci]){
            cityMutual.push(cityAsia[ca])
            console.log('I live and stay in : '+cityAsia[ca])
            console.log('and I born in '+cityIndo[ci]+' too')
        }
    }
}

//latihan 2
let flowers = ['rose', 'jasmine','sunflower','raflesia']
let plants = ['rose','coconut','jasmine','banana','grass']
let flowPlant = []
for(let fl=0; fl<flowers.length; fl++){
    for(let pl=0; pl<plants.length; pl++){
        if(plants[pl]===flowers[fl]){
            flowers.push[flowers[fl]]
            console.log('I see the '+plants[pl]+' in the garden')
        }
    }
}
