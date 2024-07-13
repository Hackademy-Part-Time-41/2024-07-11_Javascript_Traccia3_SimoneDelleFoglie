function printNumber() {
    let n= parseInt(prompt('Fino a che numero vuoi stampare: '));
    for(let i=0; i<=n; i++) {
        if (i%3==0) {
            console.log('Fizz');
        } else {
            if (i%5==0) {
                console.log('Buzz');
            } else {
                if (i%15==0) {
                    console.log('fizzBuzz');
                } else {
                    console.log(i);
                }
            }
        }
    }
}

console.log('Inizio');
printNumber();
console.log('Fine');
