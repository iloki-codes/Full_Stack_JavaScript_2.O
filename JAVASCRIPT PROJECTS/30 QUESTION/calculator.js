// 30 QUESTION 

// Simple calculator program in JavaScript


let a = parseInt(prompt("Enter first number."));

let b = prompt("Enter second number to get the calculated result.");

let o = prompt("Enter the operator like  /,*,-,+");

    switch(o) {

        case "division" :

        alert(`The calculated result is ${a}/${b}`);

        break;

        case "multiplication" :

        alert(`The calculated result is ${a}*${b}`);

        break;

        case "addition" :

        alert(`The calculated result is ${a}+${b}`);

        break;

        case "subtraction" :

        alert(`The calculated result is ${a}-${b}`);

        break;

        default :
            alert("UhOh ! Looks Like Something Stuck in Our Servers.")s
    }