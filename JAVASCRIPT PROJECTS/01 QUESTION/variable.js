// QUESTION 1


// Declaring Variables

let firstvariable;

var secondvariable;


                                    // DATA-TYPES :-

                                    // Primitive Data Types -

firstvariable = 17;                 // Number

secondvariable = true;              // Boolean

const thirdvariable = 'Lokesh Rajput';    // String

let fourthvariable = null;          // Null

var fifthvariable;                // Undefined (hasn't assigned any value to it)



// Non-Primitive Data Types -

//Arrays -

let sixthvariable = ['Hitesh Sir', 'Anurag Sir', 'Anirudh Sir', 'Ineuron'];

//Objects -

let seventhvariable = {
                        Mentor: 'Hitesh Choudhary',
                        Platform: 'INeuron',
                      };



console.log(firstvariable, typeof(firstvariable));
console.log(secondvariable, typeof(secondvariable));
console.log(thirdvariable, typeof(thirdvariable));
console.log(fourthvariable, typeof(fourthvariable));
console.log(fifthvariable, typeof(fifthvariable));
console.log(sixthvariable, typeof(sixthvariable));
console.log(Array.isArray(sixthvariable));                        // used because in JavaScript typeof operator returns array data-type as objects
console.log(seventhvariable, typeof(seventhvariable));