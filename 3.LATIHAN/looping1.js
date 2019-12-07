//LOOPING FOR

for (let colour = 0; colour<5; colour++){
    console.log(colour) // output : 0 1 2 3 4 
}

for (let warna = 3; warna>=0; warna--){
    console.log(warna) // output : 3 2 1 0
}

// CONTOH 2
const animals = ['grizzly bear', 'slot', 'sea lion'];
for (let i = 0; i < animals.length; i++){
    console.log(animals[i])
}                               // output: grizzly bear   slot   sea lion

//contoh 3 
const flower = ['rose','jasmine','orchid','sunflower'];
for(let f = 0; f<flower.length; f++){
    console.log(flower[f])
}                               // output: rose  jasmine  orchad  sunflower

//contoh 4
const country = ['japan', 'indonesia', 'germany','colombia','brazil']
for(var cc=0; cc<country.length; cc++){
    console.log(country[cc])
}

//contoh 5
const city = ['jakarta','bandung','surabaya','semarang']
for(var ct=0; ct<city.length; ct++){
    console.log(city[ct])
}

//contoh 6
const cities = ['new york','nevada','oklah0ma','distric of columbia']
for(let gg=0; gg<cities.length; gg++){
    console.log('I would like to stay in '+cities[gg])
}
/*output: 
I would like to stay in new york
I would like to stay in nevada
I would like to stay in oklahoma
I would like to stay in district of columbia */

//contoh 7
var continent = ['asia','africa','europe','america','auustralia']
for(var co=0; co<continent.length; co++){
    console.log('I would like to stay and live in continent of '+continent[co])
}

//contoh 8
var thief = ['baghdad', 'new delhi','dubai','damascus']
for(var th=0; th<thief.length; th++){
    console.log('I see the thief of '+thief[th]);
}

//contoh 9
var indo = ['jawa','sunda','bugis','batak','dayak']
for(var suku=0; suku<indo.length; suku++){
    console.log('The indonesia has very much culture, for example '+indo[suku])
}