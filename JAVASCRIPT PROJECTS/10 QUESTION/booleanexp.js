// QUESTION 10

// i. Boolean Statements-

// - 4 > 3        -  FOUR IS GREATER THAN THREE IS true.

// - 4 >= 3       -  FOUR IS GREATER THAN OR EQUAL TO THREE IS true.

// - 4 < 3        -  FOUR IS LESS THAN THREE IS false. 

// - 4 <= 3       -  FOUR IS LESS THAN OR EQUAL TO THREE IS false.

// - 4 == 4       -  FOUR IS EQUAL TO FOUR IS true.

// - 4 === 4      -  FOUR IS STRICTLY EQUAL TO FOUR IS true.

// - 4 != 4       -  FOUR IS NOT EQUAL TO FOUR IS false.

// - 4 !== 4      -  FOUR IS STRICTLY NOT EQUAL TO FOUR IS false.

// - 4 != '4'     -  NUMBER FOUR IS NOT EQUAL TO STRING FOUR IS false.

// - 4 == '4'     -  NUMBER FOUR IS EQUAL TO STRING FOUR IS true.

// - 4 === '4'    -  NUMBER FOUR IS STRICTLY EQUAL TO STRING FOUR IS false.


console.log(4>3);
console.log(4>=3);
console.log(4<3);
console.log(4<=3);
console.log(4==4);
console.log(4===4);
console.log(4!=4);
console.log(4!==4);
console.log(4!='4');
console.log(4=='4');
console.log(4==='4');


// ii. Find the length of python and jargon and make a falsy comparison statement.

const one = "python";

const two ="jargon";

console.log(` Length of ${one} is ${one.length} and length of ${two} is ${two.length}` );

console.log(one&&two !== two);