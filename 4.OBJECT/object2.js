let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLenth: 2032
    },
    crew: {
        captain:{
            name: 'Sandra',
            degree : 'Computer Engineering',
            encourageTeam(){ console.log('We got this!')},
            'favorite foods':['cookies', 'cakes','candy', 'spinach']}
        },
        engine:{
            model:'Nimbus2000'
        },
        nanoelectronics: {
            computer:{
                terabytes: 100,
                monitors: 'HD'
            },
            backup: {
                battery: 'Lithium',
                terabytes: 50
            }
        }
    };
    let capFave = spaceship.crew.captain['favorite foods'][0]
    console.log(spaceship)
