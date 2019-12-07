function indexPrime(param1) {
    let count = 0;
    let number = 2;
    while (count < param1) {
      let isPrime = true;
      for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i == 0){
          isPrime = false;
        }
        console.log('ini number', number);
        console.log('ini count', count);
        console.log('ini i', i)
        console.log('ini akar', Math.sqrt(number))
      }
      if (isPrime){
        count++;
      } 
      console.log("ini count bawah " + count)
      console.log("ini isPrime bawah ", isPrime);
      number++;
      console.log("ini number bawah " + number)
    }
    return number - 1;
   }
   console.log(indexPrime(5))