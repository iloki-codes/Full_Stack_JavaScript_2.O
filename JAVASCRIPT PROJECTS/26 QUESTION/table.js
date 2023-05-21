//  QUESTION 26

// Write a program to print the table of any number given by the user.


let number = prompt("Please enter an integer to get it's table only upto 10 multipiers.");

let table;

for (let i = 1; i <= 10; i++ ) {

    table = number * i;
}

document.getElementById("result").innerText= `${number}`;    
document.getElementById("table").innerText = `${number} * ${i} = ${table}`;