// QUESTION 27

// Write a program to print all the prime number between 0 to 100.


for (let i = 0; i <= 100; i++) {

    let check =0;

    for(let j = 2; j <= i; j++ ) {

        if ( i % j == 0 ) {

            check =1;
            break;
        }

        else {
            continue;
        }

    }
        if (i > 1 && check == 0) {
                console.log(i);
            }
        else{
            break;
        }
}