function indexPrime(n){
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
    } return yyy.pop()
}
console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))
