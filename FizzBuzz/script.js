let numero = parseInt(prompt("Pon el numero al que llegar en fizzbuzz"));

if (numero > 0) {
    for (let i = 1; i < numero; i++){
        if (i%3 == 0) {
            console.log('   Fizz');
        } else if(i%5==0){
            console.log('  Buzz');
        } else {
            console.log('  ' + i);
        }
    }
}