// QUESTION 17

// Write a program which tells the number of days in a month


let month = prompt("Enter Month Name In LowerCase");

let year = parseInt(prompt("Enter A Year"));

switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    
    alert(`There are 31 days in ${month} in the year ${year}.`);
    
    break;

  case "april":
  case "june":
  case "september":
  case "november":
    
    alert(`There are 30 days in ${month} in the year ${year}.`);
    
    break;
  
case "february":

      alert(`There are 28 days in ${month} in the year ${year}.`)
    
      break;
  
default:
    alert("Please Enter A Valid Month Name!");
}