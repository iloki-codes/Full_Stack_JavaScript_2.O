// QUESTION 25

// Calculating BMI


let age = prompt('Please Enter Your Age First!');

if (age < 20){
    alert("You're currently underage to calculate your Body Mass Index!");
}
else {

let weight = (prompt('Enter your weight in kg to know about your health status'));

let height = parseInt(prompt('Enter your height in meters'));

let bmi;

bmi = (weight/(height*height));

if (bmi < 18.5) { alert(`You are underweight because your BMI is ${bmi} m²`); }

else if (bmi >= 18.5 && bmi < 24.9) { alert(`You are normal in weight because your BMI is ${bmi} m²`); }

else if (bmi >= 25 && bmi < 29.9) { alert(`You are overweight because your BMI is ${bmi} m²`); }

else if (bmi >= 30) { alert(`You are obese because your BMI is ${bmi} m²`); }

else { alert("Oops! Looks Like We've calculated your weight according to planet mars' formula, PLEASE RELOAD!"); }

}