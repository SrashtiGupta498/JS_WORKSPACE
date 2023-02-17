"use strict";
exports.__esModule = true;
var Pizza = /** @class */ (function () {
    function Pizza(pizzaBuilder) {
        this.pepperoni = false;
        this.vegetable = false;
        this.crust = pizzaBuilder.crust;
        this.cheese = pizzaBuilder.cheese;
        this.pepperoni = pizzaBuilder.pepperoni;
        this.vegetable = pizzaBuilder.veggies;
    }
    return Pizza;
}());
exports["default"] = Pizza;
