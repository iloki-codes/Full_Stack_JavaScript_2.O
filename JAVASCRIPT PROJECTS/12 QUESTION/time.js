// QUESTION 12



const now = new Date();

//  - YYYY-MM-DD HH:mm

var yyyy = now.getUTCFullYear() +"-"+ (now.getUTCMonth()+1) +"-"+ now.getUTCDate() + " " + now.getUTCHours() + ":" + now.getUTCMinutes();

console.log(yyyy);

//  - DD-MM-YYYY HH:mm

var dd = now.getUTCDate() + "-" + (now.getUTCMonth()+1) + "-" + now.getUTCFullYear() +  " " + now.getUTCHours() + ":" + now.getUTCMinutes();

console.log(dd);

//  - DD/MM/YYYY HH:mm

var mm = now.getUTCDate() + "/" + (now.getUTCMonth()+1) + "/" + now.getUTCFullYear() +  " " + now.getUTCHours() + ":" + now.getUTCMinutes();

console.log(mm);