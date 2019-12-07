function kaskus (n){
    let result = []
    for (let x =3; x<=n*3; x+=3){ 
        if(x%5===0 && x%6===0){
            result.push('KASKUS');
        }else if (x%5==0){
            result.push('KAS');
        }else if (x%6==0){
            result.push('KUS');
        }else{
            result.push(x);
        }
        }
        return result;
    }
    console.log(kaskus(10))

//LATIHAN
function kulKas (i){
    let hasil = []
    for(let v = 2; v<=i*2; v+=2){
        if(v%4===0 && v%5===0){
            hasil.push('KULKAS')
        }else if(v%4===0){
            hasil.push('KAS')
        }else if(v%5===0){
            hasil.push('KUL')
        }else{
            hasil.push(v)
        }
    }
return hasil
}
console.log(kulKas(10))

//latihan
function tikTok (z){
    let hasilTiktok = []
    for(let tt = 0; tt<=z*3; tt+=2){
        if(tt%3===0 && tt%6===0){
            hasilTiktok.push('TIKTOK')   
    }else if(tt%3===0){
        hasilTiktok.push('TIK')
    }else if(tt%5===0){
        hasilTiktok.push('TOK')
    }else{
        hasilTiktok.push(tt)
    }
}
return hasilTiktok
}
console.log(tikTok(11))
