/* function sum() {
    var nilai = 0 
    for (let s = 0; s < arguments.length; s++) {
        nilai += arguments[s];
    }
    console.log(nilai)
    
}

sum(1,2,7);
sum(1,4);
sum(11);
sum(10,3,6,7,9);
 */
// LATIHAN KASKUS
/*
function deretKaskus(n){
let iniLatihan = []
for(let x= 3; x<=n*3; x+=3){
    if(x%5===0 && x%6===0){
        iniLatihan.push('KASKUS')
    }else if(x%6===0){
        iniLatihan.push('KUS')
    }else if(x%5===0){
        iniLatihan.push('KAS')
    }else{
        iniLatihan.push(x)
    }
}
return iniLatihan
}
console.log(deretKaskus(10));
*/


//ini latihan lagi

/* function kaskusLagi (m){
    let latihanLagi = []
    for(let h=3; h<=m*3; h+=3){
        if(h%5===0 && h%6===0){
            latihanLagi.push('KASKUS')
        }else if(h%6===0){
            latihanLagi.push('KUS')
        }else if(h%5===0){
            latihanLagi.push('KAS')
        }else{
            latihanLagi.push(h)
        }
    }
    return latihanLagi;
} 
console.log(kaskusLagi(3))
 */

/* latihan kaskus

function deretKaskus (m){
    let iniLatihan = []
    for(var x=3; x<=m*3; x+=3){
        if(x%5===0 && x%6===0){
            iniLatihan.push('KASKUS')
        } else if(x%5===0){
            iniLatihan.push('KUS')
        } else if(x%6===0){
            iniLatihan.push('KAS')
        } else{
            iniLatihan.push(x)
        }
    } return iniLatihan
}
console.log(deretKaskus(10)) */

//latihan kaskus

/* function deretKulkas (m){
    var iniLatihan= []
    for(var b=3; b<=m*3; b+=3){
        if(b%5===0 && b%6===0){
            iniLatihan.push('KULKAS')
        }else if(b%5===0){
            iniLatihan.push('KUL')
        }else if(b%6===0){
            iniLatihan.push('KAS')
        }else{
            iniLatihan.push(b)
        }
    }
return iniLatihan;
}
console.log(deretKulkas(20)) */

/* 
function deretKulkas (pp){
    var kulkas = []
    for(var i= 3; i<=pp*3; i+=3){
        if(i%2===0 && i%4===0){
            kulkas.push('YESBANGET')
        }else if(i%2===0){
            kulkas.push('YES')
        }else if(i%4===0){
            kulkas.push('BANGET')
        }else{
            kulkas.push(i)
        }
        } return kulkas;
    }
    console.log(deretKulkas(10)) */



/* 
function deretKulkas(k){
    var kulkas = []
    for(var kk=3; kk<=k*3; kk+=3){
        if(kk%5===0 && kk%6===0){
            kulkas.push('KULKAS')
        }else if(kk%5===0){
            kulkas.push('KUL')
        }else if(kk%6===0){
            kulkas.push('KAS')
        }else{
            kulkas.push(kk)
        }
    } return kulkas
}
console.log(deretKulkas(10))
 */

function toArray(n){
    var yyy=[]
    var i = 2

    for(yyy.length=0; yyy.length<n; i++){
        var isPrime = true;
        for(var cek=0; cek<=yyy.length; cek++){
            var prime = yyy[cek];
            if(i%prime===0){
                isPrime = false; 
                break;
            }
            if(prime*prime>i)
            break;
            
        }
        if(isPrime)
            yyy.push(i)
        //yyy.push(i)
    } return yyy.pop()
}
console.log(toArray(37786))
