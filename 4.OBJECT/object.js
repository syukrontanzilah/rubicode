let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.',
  meal : 'co2'
};

// Write your code below
spaceship.color = 'glorious gold'
spaceship.numEngines = 8
delete spaceship['Secret Mission']
spaceship.homePlanet = 'Moon'
spaceship.numEngines = 100
spaceship['Fuel Type'] = 'Stars and asteroid'
spaceship['suit color']= 'gold and silver'
spaceship.animal = 'cat and duplicat'

console.log(spaceship)


let jasminAlviani = {
  age : '21 years old',
  live : 'jakarta',
  eyeColor : 'brown',
  'Skin color' : 'white',
  hobby : 'drawing',
  ipk : 3.5
}
//write your code here:

jasminAlviani.pavoriteSport = 'swimming'
jasminAlviani.country = 'Indonesia'
jasminAlviani['email address'] = 'jasminealviani@gmail.com'
delete jasminAlviani.eyeColor
jasminAlviani.provinsi = 'jawa barat'
jasminAlviani['mision']= 'fly to the moon'
jasminAlviani['pavorite subject']= 'sains'
jasminAlviani.pavoritActor = 'James bond'
delete jasminAlviani.pavoritActor
jasminAlviani.pavoriteActress = 'Cate winslet'
jasminAlviani['pavorite singer'] = 'celin dion'
console.log(jasminAlviani)


 //latihan
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
let alienShip = {
  retreat(){
    console.log(retreatMessage)
  },
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};
alienShip.retreat();
alienShip.takeOff();

//latihan
let pesan = 'Wah kamu jangan masuk ke gedung itu...';
let pesan1 = {
  retreat(){
    console.log(pesan)
  },
  takeOff(){
    console.log('boom..bok...boom!!')
  }
};
pesan1.retreat();
pesan1.takeOff();
