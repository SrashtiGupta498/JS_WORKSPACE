class vehicle {
    constructor(engine, wheel, driver)
    {
        this.engine=engine;
        this.wheel = wheel;
        this.driver = driver;
    }
    getDetails()
    {
        return (`The feature of the bike  ${this.engine}, has wheel ${this.wheel} and  who drive${this.driver}`);
    }
}
    let merceedees = new vehicle("Thermalengine","20","Kanaiya"); 
    console.log(merceedees);
