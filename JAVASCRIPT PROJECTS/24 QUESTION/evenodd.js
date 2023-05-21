// QUESTION 24


//  WAP to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included).

function evenodd (array){
let evenarr = [];
let oddarr = [];

for (let i = 0; i <= array.length; i++) {
    
    if ( array[i] % 2 == 0 )
    
    { evenarr.push(array[i]); }

    else { oddarr.push(array[i]); }
}
 return {
    evenarr, oddarr
 };
}


let array = [];

for (let i = 0; i <= 100; i++) {
   array.push(i);
}

console.log(evenodd(array));
