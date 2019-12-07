const hari = 360
const bulan = 12

if (hari ===100 || bulan === 12){
console.log('1 tahun')
}else if(hari ===180 && bulan=== 6){
console.log('Setengah tahun')
}else{
    console.log('terserah')
} // output : 1 tahun


const size = 'big'
const feel = 'sad'
if(size==='big' && feel === 'glad'){
    console.log('I am feeling Good')
}else{
    console.log( 'I am feeling sad')
} // output: I am feeling sad

const planet = 'bumi'
const star = 'sun'
if (planet === 'bumi' && star === 'moon'){
    console.log('I want to fliying to the '+star)
}else{
    console.log('nooooooo')
} // output : nooooooo

// latihan 1
const x = 1
const y = 2
if(x===y || x===1){
    console.log('hai world')
}else{
    console.log('hai aja deh')
}
//latihan 2
const tt = 100
const ww = 200
if(tt==100 && ww ==200){
    console.log('sini kamu')
}else{
    console.log('sana kamu!')
} // output: sini kamu

//latihan 3
const ayu = 'cantik'
const kasep = 'ganteng'
if(ayu==='cantik' && kasep==='ganteng'){
    console.log('sini mau ya sama saya')
}else{
    console.log('ga mau ah sama kamu')
}// sini mau ya sama saya


//latihan 4
const kota = 'jakarta'
const kabupaten = 'bandung'
if(kota =='jakarta'&& kabupaten =='bandung'){
    console.log('saya ingin pergi ke '+kota)
}else{
    console.log('saya ingin pergi ke'+kabupaten)
}// output: saya ingin pergi ke jakarta


// latihan 5
const city = 'london'
const country = 'great britain'
if(city ==='london'&& country==='great britain'){
    console.log(`I will go to the ${city} in the country of ${country}`)
}else{
    console.log('I will go home')
} // output: i will gon to the london ini the country of great britain


//latihan 6
let hp = 'nokia'
let tv = 'samsung'
if(hp==='nokia'||tv==='samsung'){
    console.log(true);
}else{
    console.log(false)
}
//output: true

//latihan 7
const uu = 12
const ii = 100
if(uu===12 && ii===10){
    console.log(12)
}else{
    console.log(100)
} //output: 100

//latihan 8
const computer = 'acer'
const laptop = 'max pro'
if (computer === 'acer' || laptop==='samsung'){
    console.log('I will buy it')
}else{
    console.log('I will waiting next month')
} // I will buy it

//latihan 9
const get1 = 'kucing'
const get2 = 'anjing'
if(get1==='anjing'|| get2 === 'kucing'){
    console.log('I will hit')
}else{
    console.log('I will survive them')
}
//latihan 10
const vart1= 'kelinci'
const vart2= 'ikan'
if(vart1 === 'kelinci' || vart2 === 'itik'){
    console.log('i want to swimming with '+vart2)
}else{
    console.log('i wanna sleep')
}

// latihan 11
const plant = 'coconut'
const plant1 = 'banana';
if (plant === 'coconut' && plant1==='banana'){
    console.log('This plant can survive on this land')
}else{
    console.log('dont planting this plant on this land')
}