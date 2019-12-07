var string = 'motor'
var number = 123
var mobil = ['avanza','xenia','xpander',number]
console.log(mobil[1]); // output : xenia
mobil.push('lambogini');
console.log(mobil) // output: ['avanza','xenia','xpander', 123, 'lamborgini']
mobil.pop()
console.log(mobil) // ['avanza','xenia','xpander', 123 ]


var hewanDarat = ['ayam','gajah']
var hewanLaut = ['hiu','paus']
var hewanDunia = [hewanDarat, hewanLaut];
console.log(hewanDunia)  // [['ayam','gajah'],['hiu','paus']]
console.log(hewanDunia[0][1]); // gajah



// PROMISE 
const pertambahan = (angka1, angka2)=>{
    return new Promise ((resolve, reject)=>{
        if(isNaN(angka1) || isNaN (angka2)){
            reject ('petambahan tidak boleh dilakukan')
        }else{
            const hasil = angka1+angka2
            resolve(hasil)
        }
    })
}
pertambahan(3,10).then((hasil)=>{
    console.log(hasil)
}).catch((err)=>{
    console.log(err)
}) // output : 13


