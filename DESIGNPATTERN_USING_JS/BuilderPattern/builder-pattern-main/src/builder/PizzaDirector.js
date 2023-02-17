"use strict";
exports.__esModule = true;
var PizzaBuilder_1 = require("./PizzaBuilder");
var PizzaDirector = /** @class */ (function () {
    function PizzaDirector() {
    }
    PizzaDirector.prototype.makeVeggiePizza = function () {
        var ret = new PizzaBuilder_1["default"]()
            .setCrust(true)
            .setVeggies(true)
            .build();
        return ret;
    };
    PizzaDirector.prototype.makePepperoniPizza = function () {
        var ret = new PizzaBuilder_1["default"]()
            .setCrust(true)
            .setPepperoni(true)
            .setCheese(true)
            .build();
        return ret;
    };
    return PizzaDirector;
}());
exports["default"] = PizzaDirector;
