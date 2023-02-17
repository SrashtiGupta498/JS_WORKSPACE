import PizzaBuilder from "./PizzaBuilder";

export default class Pizza {
  
  constructor(pizzaBuilder: PizzaBuilder){
    this.crust = pizzaBuilder.crust;
    this.cheese = pizzaBuilder.cheese;
    this.pepperoni = pizzaBuilder.pepperoni;
    this.vegetable = pizzaBuilder.veggies;
  }
  
  private crust?: boolean;
  private cheese?: boolean;
  private pepperoni: boolean = false;
  private vegetable: boolean = false;
}