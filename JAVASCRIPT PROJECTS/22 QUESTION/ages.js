// QUESTION 22


// - Sort the array and find the min and max age
// - Find the median age(one middle item or two middle items divided by two)
// - Find the average age(all items divided by number of items)
// - Find the range of the ages(max minus min)
// - Compare the value of (min - average) and (max - average), use abs() method



const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]                   // array

console.log(ages.sort());                                               // sort

console.log(Math.min(19, 19, 20, 22, 24, 24, 24, 25, 25, 26));          // min valye
console.log(Math.max(19, 19, 20, 22, 24, 24, 24, 25, 25, 26));          // max value


const miditem = Math.floor(ages.length / 2);                            //median
if (ages.length % 2 === 1) {
    console.log(ages[miditem]);
}
else{
    console.log((ages[miditem - 1] + ages[miditem]) / 2);
}


let sum = 0;                                                          // average
for(let i=0; i < ages.length; i++){
    sum += ages[i];
}
let average = sum / ages.length;
console.log(average);


console.log(Math.max(19, 19, 20, 22, 24, 24, 24, 25, 25, 26)-Math.min(19, 19, 20, 22, 24, 24, 24, 25, 25, 26));          // range


let cone = (Math.min(19, 19, 20, 22, 24, 24, 24, 25, 25, 26)-average);    //comparing
let ctwo = (Math.max(19, 19, 20, 22, 24, 24, 24, 25, 25, 26)-average);

if(cone == ctwo){
    console.log("values matched");
}
else{
    console.log('values do not match');
}