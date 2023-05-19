// QUESTION 7



const ineuron = [1, "ineuronai", "pw skills", true, "hitesh sir", "lokesh", "pw skills", 2022];

const search = "pw skills";

const resulttwo = ineuron.lastIndexOf(search)

const resultone = ineuron.lastIndexOf(search, resulttwo-1);

console.log(`The first occurence of the word '${search}' is ${resultone} And`);

console.log(`The last occurence of the word '${search}' is ${resulttwo}`);