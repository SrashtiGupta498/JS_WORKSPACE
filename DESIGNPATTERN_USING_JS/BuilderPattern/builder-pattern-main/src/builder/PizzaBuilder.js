"use strict";
exports.__esModule = true;
var Pizza_1 = require("./Pizza");
var PizzaBuilder = /** @class */ (function () {
    function PizzaBuilder() {
        //required properties
        this.crust = false;
        this.cheese = false;
        this.veggies = false;
        this.pepperoni = false;
    }
    PizzaBuilder.prototype.setCrust = function (crust) {
        this.crust = crust;
        return this;
    };
    PizzaBuilder.prototype.setCheese = function (cheese) {
        this.cheese = cheese;
        return this;
    };
    PizzaBuilder.prototype.setVeggies = function (veggies) {
        this.veggies = veggies;
        return this;
    };
    PizzaBuilder.prototype.setPepperoni = function (pepperoni) {
        this.pepperoni = pepperoni;
        return this;
    };
    PizzaBuilder.prototype.build = function () {
        return new Pizza_1["default"](this);
    };
    return PizzaBuilder;
}());
exports["default"] = PizzaBuilder;
