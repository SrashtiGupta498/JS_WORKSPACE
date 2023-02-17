import IPizzaBuilder from "./interfaces/IPizzaBuilder";
import Pizza from "./Pizza";

export default class PizzaBuilder implements IPizzaBuilder<PizzaBuilder> {
  //required properties
  public crust: boolean = false;

  public cheese: boolean = false;
  public veggies: boolean = false;
  public pepperoni: boolean = false;

  setCrust(crust: boolean): PizzaBuilder {
    this.crust = crust;

    return this;
  }

  setCheese(cheese: boolean): PizzaBuilder {
    this.cheese = cheese;

    return this;
  }

  setVeggies(veggies: boolean): PizzaBuilder {
    this.veggies = veggies;

    return this;
  }

  setPepperoni(pepperoni: boolean): PizzaBuilder {
    this.pepperoni = pepperoni;

    return this;
  }

  public build(): Pizza {
    return new Pizza(this);
  }
}