let spaceship = {
    crew: {
    captain:{
        name : 'Lily',
        degree: 'Computer Engineering',
        cheerTeam(){console.log('You got this!')}
    },
    'chief officer':{
        name: 'Daniel',
        degree: 'Aerospace Engineering',
        agree(){ console.log('I agree, captain!')}
    },
    medic: {
        name: 'Zulaikha',
        degree: 'Physics',
        announce(){console.log(`Jets on!`)}
    },
    translator:{
        name: 'salman',
        degree: 'Conservation Science',
        powerFuel(){ console.log('The tank is full!')}
    }
    }
};
for (let crewMember in spaceship.crew){
    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};
for (let crewMember in spaceship.crew){
    console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};

// latihan 
let universitassukabumi = {
    organisasi:{
        ketuaYayasan:{
            nama : 'H. Nanang Alaydrus',
            pendidikan : 'S1 Pendidikan'
        },
        wakilKetuaYayasan:{
            nama : 'Drs. Herman wijayakusuma',
            pendidikan : 'S1 Hukum'
        },
        Sekretaris:{
            nama : 'Aisyah Nurul hikmah S.E',
            pendidikan : 'S1 Ekonomi'
        },
        Bendahara:{
            nama : 'Jeja Algifari S.E',
            pendidikan: 'S1 Ekonomi'
        }
    }
};
for (let orgMember in universitassukabumi.organisasi){
    console.log(`${orgMember}: ${universitassukabumi.organisasi[orgMember].nama}`)
};
for(let orgMember in universitassukabumi.organisasi){
    console.log(`${universitassukabumi.organisasi[orgMember].nama}: ${universitassukabumi.organisasi[orgMember].pendidikan}`)
}

//latihan2

let TanzilOrganization = {
    team:{
        ketua:{
            nama: 'Syukron tanzilah',
            kota: 'sukabumi'
        },
        'wakil ketua': {
            nama: 'Yusuf permana',
            kota: 'bandung'
        },
        sekretaris: {
            nama: 'Reza fahlevi',
            kota: 'salatiga'
        },
        bendahara:{
            nama: 'Irbar',
            kota: 'serang'
        }
    }
};
for(let appOrg in TanzilOrganization.team){
    console.log(`${appOrg}: ${TanzilOrganization.team[appOrg].nama}`)
};
for(let appOrg in TanzilOrganization.team){
    console.log(`${TanzilOrganization.team[appOrg].nama}: ${TanzilOrganization.team[appOrg].kota}`)
}

//latihan 3
let Germany = {
    squad:{
        captain:{
            name: 'michael ballack',
            club: 'Bayern Muenchen'
        },
        back:{
            name : 'phillip lahm',
            club: 'bayern muenchen'
        },
        front:{
            name: 'lukas podolski',
            club: 'real madrid'
        }
    }
};
for(let teamGermany in Germany.squad){
    console.log(`${teamGermany}: ${Germany.squad[teamGermany].name}`)
};
for(let teamGermany in Germany.squad){
    console.log(`${Germany.squad[teamGermany].name}: ${Germany.squad[teamGermany].club}`)
}

//latihan 4
let uefaChampionLeague ={
    contestant:{
        clubBundesliga:{
            club: 'bayern leverkusen',
            captain: 'philipp lahm'
        },
        clubEpl:{
            club: 'Manchester United',
            captain: 'Christiano Ronaldo'
        },
        clubSerieA:{
            club: 'AC Milan',
            captain: 'ricardo kaka'
        },
        clubLaliga:{
            club: 'barcelona',
            captain: 'rondaldinho'
        }
    }
};
for(let clubclub in uefaChampionLeague.contestant){
    console.log(`${clubclub}: ${uefaChampionLeague.contestant[clubclub].club}`)
}
for(let clubclub in uefaChampionLeague.contestant){
    console.log(`${uefaChampionLeague.contestant[clubclub].club}: ${uefaChampionLeague.contestant[clubclub].captain}`)
}

//latihan 5
let forestLife = {
    faunaAndFlora:{
        fauna:{
            name: 'giraffe',
            habitat: 'sabana',
            live: 'earth'
        },
        flora:{
            name: 'coconut',
            habitat: 'beach',
            live: 'water'
        },
        fish:{
            name: 'whale',
            habitat: 'ocean',
            live: 'water'
        },
        wild: {
            name: 'wildbeast blue',
            habitat: 'forest',
            live:'earth'
        }
    }
};
for(let listForest in forestLife.faunaAndFlora){
    console.log(`${listForest}: ${forestLife.faunaAndFlora[listForest].name}`)
}
for(let listForest in forestLife.faunaAndFlora){
    console.log(`${forestLife.faunaAndFlora[listForest].name}: ${forestLife.faunaAndFlora[listForest].habitat}`)
}
for(let listForest in forestLife.faunaAndFlora){
    console.log(`${forestLife.faunaAndFlora[listForest].name}: ${forestLife.faunaAndFlora[listForest].live}`)
}






