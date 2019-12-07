// RETURN 

function rectangleArea (width, height){
    let area = width * height
}
console.log (rectangleArea(5,7)); // output : undefined


function rectangleArea (width, height){
    if (width<0 || height <0){
        return 'You need positive integers to calculate area!';
    }
    return width * height;
} // output : 35


function monitorCount(rows, columns){
    return rows * columns;
} const numOfMonitors = monitorCount (5,4)
console.log(numOfMonitors); // output = 20

function home (xx,yy){
    return xx * yy;
} const numOfHome = home (10,5)
console.log(numOfHome); // output = 50

function icon (uu, jj){
    return uu * jj;
} const hhhh = icon (100,100)
console.log (hhhh); // output 1000

function penjumlahan (m){
    var n = 10;
    var hasil = n + m;
    return hasil;
} console.log(penjumlahan(10)) // output: 20

function ggg (j){
    var k = 10;
    var jumlah = k + j;
    return jumlah;
} console.log(ggg(4)); // output : 14


//latihan 

function costOfMonitors (rows,columns){
    return monitorCount(rows,columns)*200;
} const totalCost = costOfMonitors(5,6);
console.log(totalCost); // output 6000


