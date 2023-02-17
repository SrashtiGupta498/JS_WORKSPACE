import PizzaDirector from "./builder/PizzaDirector";

const director = new PizzaDirector();
const veggiePizza = director.makeVeggiePizza();
const pepperoniPizza = director.makePepperoniPizza();


console.log(veggiePizza, pepperoniPizza);