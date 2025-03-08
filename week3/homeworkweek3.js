//Array for  pizzaToppings
const pizzaToppings = ["cheese", "sausage", "mushroom", "peppers"];

//greetCustomer function
function greetCustomer() {
  console.log("Welcome to pizza house, our toppings are " + pizzaToppings + "");
}

//getPizzaOrder function
function getPizzaOrder(size, crust, ...toppings) {
  console.log(`one ${size}, ${crust}, with ${toppings}, coming up`);
  return [size, crust, toppings];
}

//preparePizza function
function preparePizza(orderArray) {
  const [size, crust, toppings] = orderArray;
  console.log("...cooking pizza...");
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

//servePizza function
function servePizza(pizza) {
  console.log(
    `order up! here is your ${size} ${crust}} pizza with ${toppings}`
  );
  return pizza;
}

// calling each function
greetCustomer();

const order = getPizzaOrder(
  "large",
  "thick crust",
  "mushrooms, cheese, sausage"
);

preparePizza(order);

servePizza(preparePizza);

console.log(servePizza);
