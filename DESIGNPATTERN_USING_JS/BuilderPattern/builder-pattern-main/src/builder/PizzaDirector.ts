import PizzaBuilder from "./PizzaBuilder";
import Pizza from "./Pizza";

export default class PizzaDirector {
  public makeVeggiePizza(): Pizza{
    const ret: Pizza = new PizzaBuilder()
                                    .setCrust(true)
                                    .setVeggies(true)
                                    .build();

    return ret;
  }

  public makePepperoniPizza(): Pizza {
    const ret: Pizza = new PizzaBuilder()
                                  .setCrust(true)
                                  .setPepperoni(true)
                                  .setCheese(true)
                                  .build();

    return ret;
  }
}