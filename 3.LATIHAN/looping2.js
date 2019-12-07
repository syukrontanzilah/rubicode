//NESTED LOOPS

const myArray = [6,19,20];
const yourArray = [19,81,20];
for (let i=0; i<myArray.length; i++){
    for (let j=0; j<yourArray.length; j++){
        if(myArray[i]===yourArray[j]){
            console.log('Both loops have the number: '+ myArray[i])
        }
    }
};

//latihan 1

var countryAsia = ['Indonesia','Arab Saudi','Japan','Mongolia','India']
var countryAsiaTenggara = ['Indonesia','Philippine','Thailand','Malaysia']
for(var asia=0; asia<countryAsia.length; asia++){
    for(var asiaTeng=0; asiaTeng<countryAsiaTenggara.length; asiaTeng++){
        if(countryAsia[asia]===countryAsiaTenggara[asiaTeng]){
            console.log ('I would like to live in '+countryAsiaTenggara[asiaTeng])
        }
    }
}

// latihan 2
var beauty = ['jamilah','cantik','hana','adisty','megan','syukron']
var handsome = ['Abdul','syukron','rudi','megan','arif']
for(var bb=0; bb<beauty.length; bb++){
    for(var hh=0; hh<handsome.length; hh++){
        if(beauty[bb]===handsome[hh]){
            console.log('That girl like man who name: '+beauty[bb])
        }
    }
}

//latihan 3
var suku = ['sunda','jawa','bugis','sasak']
var provinsi = ['jawa','kalimantan','sumatera','sulawesi']
for(var su=0; su<suku.length; su++){
    for(var pro=0; pro<provinsi.length; pro++){
        if(suku[su]===provinsi[pro]){
            console.log('I live in provinsi of '+suku[su])
        }
    }
}

//latihan 4
var book = ['history','fiction','novel','comic','newspaper','magazine']
var subject = ['sains','history','matematika','english','japanesse']
for (var bo=0; bo<book.length; bo++){
    for(var sub=0; sub<subject.length; sub++){
        if(book[bo]===subject[sub])
        console.log('I am reading a '+subject[sub]+' book')
    }
}

//latiahn 5 
var giga = [1,2,3,4,5,6,7,8,9]
var tera = [2,4,6,8,10,12,14,16]
for (var gi=0; gi<giga.length; gi++){
    for(var te =0; te<tera.length; te++){
        if(giga[gi]===tera[te]){
            console.log('I get a code :'+giga[gi]);
        }
    }
}

//latihan 6
var hook = [12,24,36,48,60,72]
var flexi = [0,24,48,72,96]
for(var ho=1; ho<hook.length; ho++){
    for(var fle=1; fle<flexi.length; fle++){
        if(hook[ho]===flexi[fle]){
            console.log('Yay, I get a number : '+flexi[fle])
        }
    }
}

//latihan 7
var computer = ['samsung','hp','lg','aoc',]
var laptop = ['hp','max','asus','acer','dell']
for(var com=0; com<computer.length; com++){
    for(var lap=0; lap<laptop.length; lap++){
        if(computer[com]===laptop[lap]){
            console.log('I am studying coding with a '+laptop[lap]);
        }
    }
}

//latihan 8
var noodle = ['indomie','sedap','supermi','gaga','selera rakyat']
var food = ['rice','indomie','cheese','cocolate','pizza']
for(var nod=0; nod<noodle.length; nod++){
    for(var fo=0; fo<food.length; fo++){
        if(noodle[nod]===food[fo]){
            console.log('I like eating '+noodle[nod])
        }
    }
}
//latihan 9
var indomie = ['soto','rendang','ayam geprek','iga penyet','kocok bandung']
var sedap = ['soto','ayam bawang','kari kental','ayam kecap']
for(var ind=0; ind<indomie.length; ind++){
    for(var sed=0; sed<sedap.length; sed++){
        if(indomie[ind]=== sedap[sed]){
            console.log('saya suka makan mie rasa '+indomie[ind])
        }
    }
}