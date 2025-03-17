//Array for  pizzaToppings
const pizzaToppings = ["cheese", "sausage", "mushroom", "peppers"];

//greetCustomer function
function greetCustomer() {
  console.log("Welcome to pizza house! here are our toppings:");
  for (const topping of pizzaToppings) {
    console.log(`${topping}`);
  }
}

//  console.log("Welcome to pizza house, our toppings are " + pizzaToppings + "");

//getPizzaOrder function
function getPizzaOrder(size, crust, ...toppings) {
  console.log(`one ${size}, ${crust}, with ${toppings}, coming up`);
  return { size, crust, topping: toppings };
}

//preparePizza function
function preparePizza(pizzaOrder) {
  const pizza = {
    size: pizzaOrder.size,
    crust: pizzaOrder.crust,
    toppings: pizzaOrder.toppings
  };
  console.log("...cooking pizza...");
  return pizza;
}

//servePizza function
function servePizza(pizza) {
  console.log(
    `Order up! Here is your ${pizza.size} ${pizza.crust} pizza with ${pizza.toppings}`
  );
  return pizza;
}

// calling each function
greetCustomer();
servePizza(
  preparePizza(
    getPizzaOrder("large", "thick crust", "mushrooms", "cheese", "sausage")
  )
);
