function monitorCount (rows, columns){
return rows * columns;
}

function costOfMonitors(rows, columns){
    return monitorCount(rows,columns)* 200;
}
const totalCost = costOfMonitors (5,4);
console.log(totalCost); // output: 4000

//contoh lain:

function kembang (rose, melati){
    return rose * melati;
}
function kemKembang (rose, melati){
    return kembang (rose, melati)*200;
}
const semuaKembang = kemKembang (10,20);
console.log (semuaKembang); // output: 40000



//contoh lain:
function hujan (air,awan,thunder){
    return (air+thunder)*awan
}
const badai = hujan(1,8,9);
console.log(badai);

//contoh
function jumlah(kali,tambah,bagi){
    return kali*tambah*bagi
}
console.log(jumlah(1,2,4))

function kali (x,y,z){
    return 'the city in bandung are '+x+' , '+y+' and '+z
}
console.log(kali("lembang",'majalaya','soreang'))

function email (yahoo, gmail, uk){
    return 'thanks for your regiter :'+yahoo+' , '+gmail+' and '+uk;
}
console.log(email('syukron.yahoo','salman.gmail','rini.uk'))