let pizzaPlace = "papa johns";
let numberOfToppings = 2;
console.log(pizzaPlace, typeof pizzaPlace);
console.log(numberOfToppings, typeof numberOfToppings);

console.log(
  `my favorite pizza place is ${pizzaPlace} and i always get ${numberOfToppings} toppings`
);

if (numberOfToppings < 10) {
  console.log("quality, not quantity.");
} else {
  console.log("A whole lot of pizza.");
}

// Bonus //

// let numberOfToppings = 10;
// for (let i = 1; i <= numberOfToppings; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
