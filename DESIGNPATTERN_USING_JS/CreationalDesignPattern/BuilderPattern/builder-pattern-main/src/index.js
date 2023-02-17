"use strict";
exports.__esModule = true;
var PizzaDirector_1 = require("./builder/PizzaDirector");
var director = new PizzaDirector_1["default"]();
var veggiePizza = director.makeVeggiePizza();
var pepperoniPizza = director.makePepperoniPizza();
console.log(veggiePizza, pepperoniPizza);
