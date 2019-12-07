//CHALLENGE 9
//buatlah sebuah function bernama spiral yang memiliki sebuah parameter (asumsi nama parameter adalah param1) 
//yang berisi angka. setelah itu, generate secara otomatis array sebanyak param1 x param1 dan menampilkan juga
//urutan angka sesuai dengan pola spiral. lihat contoh dibawah ini: Drive code:

/* function spiral (param1){
    //your code here
}
spiral(5)
spiral(6)
spiral(7) */

/*
[0,1,2,3,4,9,14,19,24,23,22,21,20,15,10,5,6,7,8,13,18,17,16,11,12]
[0,1,2,3,4,5,11,17,23,29,35,34,33,32,32,30,24,18,12,6,7,8,9,10,16,22,28,27,26,25,19,13,14,15,21,20]
[0,1,2,3,4,5,6,13,20,27,34,41,48,47,46,45,44,43,42,35,28,21,14,7,8,9,10,11,12,19,26,33,40,39,38,37,36,29,22,
 15,16,17,18,25,32,31,30,23,24]
*/

// array matrix

function array2 (param){
    let arr = new Array(param);
    for (let i = 0; i<arr.length; i++){
        arr[i] = new Array(param);
        // console.log(arr[i])
    }
    let h=0;
    //loop to initialize 2D arrray elements
    for (let i=0; i<param; i++){
        for(let j=0; j<param; j++){
            arr[i][j] = h++;
            //console.log(arr[i][j])
        }
    }
    //loop to display the element of 2D array
 /*    for(let i = 0; i<param; i++ ){
        for (let j=0; j<param; j++){
            arr[i][j];
        }
    } */
    return arr;
}
// matrix spiral
function polaSpiral(input){
    function spiral(array){
        if(array.length==1){
            return array[0];
        }
        var firstRow = array[0]
        , numRows =array.length
        , nextMatrix = []
        , newRow
        , rowIdx
        , colIdx   = array[1].length -1

        for (colIdx; colIdx >=0; colIdx--){
            newRow = [];

        for (rowIdx =1; rowIdx < numRows; rowIdx++){
            newRow.push(array[rowIdx][colIdx]);
        }
        nextMatrix.push(newRow);
        }
        firstRow.push.apply(firstRow, spiral(nextMatrix));
        return firstRow
    }
    return spiral(array2(input))
}
console.log(polaSpiral(5))
console.log(polaSpiral(6))
console.log(polaSpiral(7))

//console.log(array2(5))