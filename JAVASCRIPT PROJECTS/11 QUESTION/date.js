// QUESTION 11 


const now = new Date();

// - What is the year today?

console.log(now.getFullYear());

// - What is the month today as a number?

console.log(now.getMonth());

// - What is the date today?

console.log(now);

// - What is the day today as a number?

console.log(now.getDay());

// - What is the hours now?

console.log(now.getHours());

// - What is the minutes now?

console.log(now.getMinutes);

// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

var result = Math.floor(now.getTime()/1000);
		
console.log("Numbers Of Seconds Elapsed from January 1, 1970 to now has "+ result + " seconds.");