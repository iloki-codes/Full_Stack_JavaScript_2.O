// QUESTION 20

// In the following shopping cart add, remove, edit items

// => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// - add 'Meat' in the beginning of your shopping cart if it has not been already added
// - add Sugar at the end of your shopping cart if it has not been already added
// - remove 'Honey'
// - modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

shoppingCart.splice(0,0,'Meat');
console.log(shoppingCart);

shoppingCart.push('Sugar');
console.log(shoppingCart);


shoppingCart.pop();
shoppingCart.pop();
shoppingCart.push('Sugar');
console.log(shoppingCart);

shoppingCart.splice(3,1,'Green Tea');
console.log(shoppingCart);